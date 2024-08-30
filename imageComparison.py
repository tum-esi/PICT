import sys
import PIL.Image
import rawpy
import matplotlib.pyplot as plt
import numpy as np
import os
import locale
import PIL
import platform

GERMAN_SETUP = True if "de_DE" in locale.getlocale()[0] else False
SEP_CHAR = '/' if not "Windows" in platform.platform() else '\\'
STORAGE_FOLDER = "analysis"

class JpegImageComparison:
    def __init__(self):
        self.GUI_INDEX = 0

    def compareJpegVsJpeg(self, image1Path: str, image2Path: str, upperLeft=(0,0), lowerRight=(0,0)):
        self.STORAGE_FILENAME = STORAGE_FOLDER + SEP_CHAR + image1Path.split(SEP_CHAR)[-1] + "__" + image2Path.split(SEP_CHAR)[-1]

        image1Jpeg = PIL.Image.open(image1Path)
        image2Jpeg = PIL.Image.open(image2Path)

        self.image1Path = image1Path
        self.image2Path = image2Path

        if image1Jpeg.mode != "RGB" or image2Jpeg.mode != "RGB":
            print("Only RGB images are supported. Image 1 has {image1Jpeg.mode} and Image 2 has {image2Jpeg.mode}")
            return

        # Np format: (H x W x 3)
        self.image1Np = np.asarray(image1Jpeg).astype(np.int16)
        self.image2Np = np.asarray(image2Jpeg).astype(np.int16)

        if upperLeft != lowerRight:
            self.image1Np = self.image1Np[upperLeft[1]:lowerRight[1]+1:, upperLeft[0]:lowerRight[0]+1:]
            self.image2Np = self.image2Np[upperLeft[1]:lowerRight[1]+1:, upperLeft[0]:lowerRight[0]+1:]

        self.diff = np.zeros(self.image1Np.shape, dtype=np.int16)
        self.diff = self.image1Np - self.image2Np


        # Link button press event for Context-Switch
        figure = plt.figure()
        figure.canvas.mpl_connect("button_press_event", self.on_press)
        self.RGB1vs2()

        plt.suptitle("JPEG Image Analysis of " + image1Path.split(SEP_CHAR)[-1] + " vs " + image2Path.split(SEP_CHAR)[-1], size="xx-large")
        plt.show()

        # Analysis
        ## Image 1:
        avg_1 = []
        std_1 = []
        min_1 = []
        max_1 = []
        snr_1 = []
        for i in range(3):
            avg_1.append(np.average(self.image1Np[:,:,i]))
            std_1.append(np.std(self.image1Np[:,:,i]))
            min_1.append(np.min(self.image1Np[:,:,i]))
            max_1.append(np.max(self.image1Np[:,:,i]))
            snr_1.append(snr(self.image1Np[:,:,i]))

        ## Image2:
        avg_2 = []
        std_2 = []
        min_2 = []
        max_2 = []
        snr_2 = []
        for i in range(3):
            avg_2.append(np.average(self.image2Np[:,:,i]))
            std_2.append(np.std(self.image2Np[:,:,i]))
            min_2.append(np.min(self.image2Np[:,:,i]))
            max_2.append(np.max(self.image2Np[:,:,i]))
            snr_2.append(snr(self.image2Np[:,:,i]))

        ## Diff:
        avg_diff = []
        std_diff = []
        min_diff = []
        max_diff = []
        for i in range(3):
            avg_diff.append(np.average(self.diff[:,:,i]))
            std_diff.append(np.std(self.diff[:,:,i]))
            min_diff.append(np.min(self.diff[:,:,i]))
            max_diff.append(np.max(self.diff[:,:,i]))

        csv_file = self.STORAGE_FILENAME + ".csv"

        if os.path.isfile(csv_file):
            os.remove(csv_file)

        csv_separator = ";" if GERMAN_SETUP else ","

        with open(csv_file, 'w') as log_file:
            suffix_array = ['r', 'g', 'b']
            addLineToCsv(log_file, "Category;Image1;Image2;Diff")
            for i in range(3):
                addLineToCsv(log_file, "Min_" + suffix_array[i] + csv_separator + n2s(min_1[i]) + csv_separator  + n2s(min_2[i]) + csv_separator + n2s(min_diff[i]))
                addLineToCsv(log_file, "Max_" + suffix_array[i] + csv_separator + n2s(max_1[i]) + csv_separator  + n2s(max_2[i]) + csv_separator + n2s(max_diff[i]))
                addLineToCsv(log_file, "Avg_" + suffix_array[i] + csv_separator + n2s(avg_1[i]) + csv_separator  + n2s(avg_2[i]) + csv_separator + n2s(avg_diff[i]))
                addLineToCsv(log_file, "STD_" + suffix_array[i] + csv_separator + n2s(std_1[i]) + csv_separator  + n2s(std_2[i]) + csv_separator + n2s(std_diff[i]))
                
                # Calculate SNR only if image is cropped
                if upperLeft != lowerRight:
                    addLineToCsv(log_file, "SNR_" + suffix_array[i] + csv_separator + n2s(snr_1[i]) + csv_separator  + n2s(snr_2[i]))

        image1Jpeg.close()
        image2Jpeg.close()

    def on_press(self, event):
        # Toggle between GUI with double right-click on plain white area
        if event.dblclick and event.button == 3 and \
           event.xdata == None and event.ydata == None:
            self.GUI_INDEX += 1
            if self.GUI_INDEX % 3 == 0:
                self.RGB1vs2()
            elif self.GUI_INDEX % 3 == 1:
                self.RGBHist()
            else:
                self.Diff()

    def RGB1vs2(self):
        plt.clf()
        # Draw image 1, R
        plt.subplot(2, 3, 1)
        plt.title("[R] of Image 1\n" + self.image1Path.split(SEP_CHAR)[-1])
        plt.imshow(self.image1Np[:,:,0], cmap='Reds')
        plt.colorbar(orientation='horizontal')

        # Draw image 1, G
        plt.subplot(2, 3, 2)
        plt.title("[G] of Image 1\n" + self.image1Path.split(SEP_CHAR)[-1])
        plt.imshow(self.image1Np[:,:,1], cmap='Greens')
        plt.colorbar(orientation='horizontal')

        # Draw image 1, B
        plt.subplot(2, 3, 3)
        plt.title("[B] of Image 1\n" + self.image1Path.split(SEP_CHAR)[-1])
        plt.imshow(self.image1Np[:,:,2], cmap='Blues')
        plt.colorbar(orientation='horizontal')

        # Draw image 2, R
        plt.subplot(2, 3, 4)
        plt.title("[R] of Image 2\n" + self.image2Path.split(SEP_CHAR)[-1])
        plt.imshow(self.image2Np[:,:,0], cmap='Reds')
        plt.colorbar(orientation='horizontal')

        # Draw image 2, G
        plt.subplot(2, 3, 5)
        plt.title("[G] of Image 2\n" + self.image2Path.split(SEP_CHAR)[-1])
        plt.imshow(self.image2Np[:,:,1], cmap='Greens')
        plt.colorbar(orientation='horizontal')

        # Draw image 2, B
        plt.subplot(2, 3, 6)
        plt.title("[B] of Image 2\n" + self.image2Path.split(SEP_CHAR)[-1])
        plt.imshow(self.image2Np[:,:,2], cmap='Blues')
        plt.colorbar(orientation='horizontal')

        pdf_plot_file = self.STORAGE_FILENAME + "_rgb.pdf"
        if os.path.isfile(pdf_plot_file):
            os.remove(pdf_plot_file)
        fig = plt.gcf()
        fig.set_size_inches(16.5, 11.6)
        plt.savefig(pdf_plot_file, bbox_inches='tight', dpi=600)

        plt.draw()

    def RGBHist(self):
        plt.clf()
        # Hist image 1, R
        plt.subplot(2, 3, 1)
        plt.title("[R] Historgram of Image 1\n" + self.image1Path.split(SEP_CHAR)[-1])
        plt.hist(self.image1Np[:,:,0].flatten(), bins=range(np.min(self.image1Np), np.max(self.image1Np) + 1, 1), color='r')
        plt.xlabel("Intensity [DN]")
        plt.ylabel("Amount")
        
        # Hist image 1, G
        plt.subplot(2, 3, 2)
        plt.title("[G] Historgram of Image 1\n" + self.image1Path.split(SEP_CHAR)[-1])
        plt.hist(self.image1Np[:,:,1].flatten(), bins=range(np.min(self.image1Np), np.max(self.image1Np) + 1, 1), color='g')
        plt.xlabel("Intensity [DN]")
        plt.ylabel("Amount")
        
        # Hist image 1, B
        plt.subplot(2, 3, 3)
        plt.title("[B] Historgram of Image 1\n" + self.image1Path.split(SEP_CHAR)[-1])
        plt.hist(self.image1Np[:,:,2].flatten(), bins=range(np.min(self.image1Np), np.max(self.image1Np) + 1, 1), color='b')
        plt.xlabel("Intensity [DN]")
        plt.ylabel("Amount")
        
        # Hist image 2, R
        plt.subplot(2, 3, 4)
        plt.title("[R] Historgram of Image 2\n" + self.image2Path.split(SEP_CHAR)[-1])
        plt.hist(self.image2Np[:,:,0].flatten(), bins=range(np.min(self.image2Np), np.max(self.image2Np) + 1, 1), color='r')
        plt.xlabel("Intensity [DN]")
        plt.ylabel("Amount")
        
        # Hist image 2, G
        plt.subplot(2, 3, 5)
        plt.title("[G] Historgram of Image 2\n" + self.image2Path.split(SEP_CHAR)[-1])
        plt.hist(self.image2Np[:,:,1].flatten(), bins=range(np.min(self.image2Np), np.max(self.image2Np) + 1, 1), color='g')
        plt.xlabel("Intensity [DN]")
        plt.ylabel("Amount")
        
        # Hist image 2, B
        plt.subplot(2, 3, 6)
        plt.title("[B] Historgram of Image 2\n" + self.image2Path.split(SEP_CHAR)[-1])
        plt.hist(self.image2Np[:,:,2].flatten(), bins=range(np.min(self.image2Np), np.max(self.image2Np) + 1, 1), color='b')
        plt.xlabel("Intensity [DN]")
        plt.ylabel("Amount")

        pdf_plot_file = self.STORAGE_FILENAME + "_hist.pdf"
        if os.path.isfile(pdf_plot_file):
            os.remove(pdf_plot_file)
        fig = plt.gcf()
        fig.set_size_inches(16.5, 11.6)
        plt.savefig(pdf_plot_file, bbox_inches='tight', dpi=600)

        plt.draw()

    def Diff(self):
        plt.clf()
        # Draw diff, R
        plt.subplot(2, 3, 1)
        plt.title("[R] of Absolute Diff\nImage1 - Image2\n")
        plt.imshow(self.diff[:,:,0], cmap='bwr')
        plt.colorbar(orientation='horizontal')

        # Draw diff, G
        plt.subplot(2, 3, 2)
        plt.title("[G] of Absolute Diff\nImage1 - Image2\n")
        plt.imshow(self.diff[:,:,1], cmap='bwr')
        plt.colorbar(orientation='horizontal')

        # Draw diff, B
        plt.subplot(2, 3, 3)
        plt.title("[B] of Absolute Diff\nImage1 - Image2\n")
        plt.imshow(self.diff[:,:,2], cmap='bwr')
        plt.colorbar(orientation='horizontal')

        # Hist diff, R
        plt.subplot(2, 3, 4)
        plt.title("[R] Historgram of Absolute Diff\n")
        plt.hist(self.diff[:,:,0].flatten(), bins=range(np.min(self.diff), np.max(self.diff) + 1, 1), color='r')
        plt.xlabel("Intensity [DN]")
        plt.ylabel("Amount")
        
        # Hist diff, G
        plt.subplot(2, 3, 5)
        plt.title("[G] Historgram of Absolute Diff\n")
        plt.hist(self.diff[:,:,1].flatten(), bins=range(np.min(self.diff), np.max(self.diff) + 1, 1), color='g')
        plt.xlabel("Intensity [DN]")
        plt.ylabel("Amount")
        
        # Hist diff, B
        plt.subplot(2, 3, 6)
        plt.title("[B] Historgram of Absolute Diff\n")
        plt.hist(self.diff[:,:,2].flatten(), bins=range(np.min(self.diff), np.max(self.diff) + 1, 1), color='b')
        plt.xlabel("Intensity [DN]")
        plt.ylabel("Amount")

        pdf_plot_file = self.STORAGE_FILENAME + "_diff.pdf"
        if os.path.isfile(pdf_plot_file):
            os.remove(pdf_plot_file)
        fig = plt.gcf()
        fig.set_size_inches(16.5, 11.6)
        plt.savefig(pdf_plot_file, bbox_inches='tight', dpi=600)

        plt.draw()


def parseTuple(tupleAsString: str) -> tuple:
    return tuple(int(elem) for elem in tupleAsString.split(','))

def addLineToCsv(file, line):
    file.write(line + "\n")

# number to string (incl. german float formatting)
def n2s(value) -> str:
    numAsString = str(value)
    if "." in numAsString and GERMAN_SETUP:
        numAsString = numAsString.replace('.', ',')
    return numAsString

def snr(array) -> float:
    m = np.mean(array)
    std = np.std(array)
    return m/std

def compareRawVsRaw(image1Path: str, image2Path: str, upperLeft=(0,0), lowerRight=(0,0)):
    STORAGE_FILENAME = STORAGE_FOLDER + SEP_CHAR + image1Path.split(SEP_CHAR)[-1] + "__" + image2Path.split(SEP_CHAR)[-1]

    image1Raw = rawpy.imread(image1Path)
    image2Raw = rawpy.imread(image2Path)

    if image1Raw.raw_image.shape != image2Raw.raw_image.shape:
        print("Shape mismatch between image 1 and image 2")
        return
    
    image1Np = image1Raw.raw_image.astype(np.int16)
    image2Np = image2Raw.raw_image.astype(np.int16)

    # If given: Crop according to provided coordinates
    if upperLeft != lowerRight:
        image1Np = image1Np[upperLeft[1]:lowerRight[1]+1, upperLeft[0]:lowerRight[0]+1]
        image2Np = image2Np[upperLeft[1]:lowerRight[1]+1, upperLeft[0]:lowerRight[0]+1]

    # Calculate the diff
    # type int16 is enough, since RPi camera module 3 has 10bpp
    diff = image1Np - image2Np

    plt.suptitle("Image Analysis of " + image1Path.split(SEP_CHAR)[-1] + " vs " + image2Path.split(SEP_CHAR)[-1], size="xx-large")

    # Draw image 1
    plt.subplot(2, 3, 1)
    plt.title("Image 1\n" + image1Path.split(SEP_CHAR)[-1])
    plt.imshow(image1Np, cmap='grey')
    plt.colorbar(orientation='horizontal')

    # Draw image 2
    plt.subplot(2, 3, 2)
    plt.title("Image 2\n" + image2Path.split(SEP_CHAR)[-1])
    plt.imshow(image2Np, cmap='grey')
    plt.colorbar(orientation='horizontal')

    # Draw absolute diff
    plt.subplot(2, 3, 3)
    plt.title("Absolute Diff\nImage1 - Image2")
    plt.imshow(diff, cmap='seismic')
    plt.colorbar(orientation='horizontal')

    # Hist1
    plt.subplot(2, 3, 4)
    plt.title("Historgram of Image 1\n" + image1Path.split(SEP_CHAR)[-1])
    plt.hist(image1Np.flatten(), bins=range(np.min(image1Np), np.max(image1Np) + 1, 1))
    plt.xlabel("Intensity [DN]")
    plt.ylabel("Amount")

    # Hist2
    plt.subplot(2, 3, 5)
    plt.title("Historgram of Image 2\n" + image2Path.split(SEP_CHAR)[-1])
    plt.hist(image2Np.flatten(), bins=range(np.min(image2Np), np.max(image2Np) + 1, 1))
    plt.xlabel("Intensity [DN]")
    plt.ylabel("Amount")

    # Diff
    plt.subplot(2, 3, 6)
    plt.title("Historgram of Absolute Diff\nImage1 - Image2")
    plt.hist(diff.flatten(), bins=range(np.min(diff), np.max(diff) + 1, 1))
    plt.xlabel("Intensity [DN]")
    plt.ylabel("Amount")

    pdf_plot_file = STORAGE_FILENAME + ".pdf"
    if os.path.isfile(pdf_plot_file):
        os.remove(pdf_plot_file)
    fig = plt.gcf()
    fig.set_size_inches(16.5, 11.6)
    plt.savefig(pdf_plot_file, bbox_inches='tight', dpi=600)

    plt.show()

    # Analysis
    ## Image 1:
    avg_1 = np.average(image1Np)
    std_1 = np.std(image1Np)
    min_1 = np.min(image1Np)
    max_1 = np.max(image1Np)
    snr_1 = snr(image1Np)

    ## Image2:
    avg_2 = np.average(image2Np)
    std_2 = np.std(image2Np)
    min_2 = np.min(image2Np)
    max_2 = np.max(image2Np)
    snr_2 = snr(image2Np)

    ## Diff:
    avg_diff = np.average(diff)
    std_diff = np.std(diff)
    min_diff = np.min(diff)
    max_diff = np.max(diff)

    csv_file = STORAGE_FILENAME + ".csv"

    if os.path.isfile(csv_file):
        os.remove(csv_file)

    csv_separator = ";" if GERMAN_SETUP else ","

    with open(csv_file, 'w') as log_file:
        addLineToCsv(log_file, "Category;Image1;Image2;Diff")
        addLineToCsv(log_file, "Min" + csv_separator + n2s(min_1) + csv_separator  + n2s(min_2) + csv_separator + n2s(min_diff))
        addLineToCsv(log_file, "Max" + csv_separator + n2s(max_1) + csv_separator  + n2s(max_2) + csv_separator + n2s(max_diff))
        addLineToCsv(log_file, "Avg" + csv_separator + n2s(avg_1) + csv_separator  + n2s(avg_2) + csv_separator + n2s(avg_diff))
        addLineToCsv(log_file, "STD" + csv_separator + n2s(std_1) + csv_separator  + n2s(std_2) + csv_separator + n2s(std_diff))

        # Calculate SNR only if image is cropped
        if upperLeft != lowerRight:
            addLineToCsv(log_file, "SNR" + csv_separator + n2s(snr_1) + csv_separator  + n2s(snr_2))
    
    image1Raw.close()
    image2Raw.close()

def main(image1Path: str, image2Path: str, upperLeft=(0,0), lowerRight=(0,0)):
    # Prepare folder for log files
    if not os.path.isdir(STORAGE_FOLDER):
        os.mkdir(STORAGE_FOLDER)

    if image1Path.endswith(".dng") and image2Path.endswith(".dng"):
        compareRawVsRaw(image1Path, image2Path, upperLeft, lowerRight)
    if (image1Path.endswith(".jpg") or image1Path.endswith(".jpeg")) and \
       (image2Path.endswith(".jpg") or image2Path.endswith(".jpeg")):
        compare = JpegImageComparison()
        compare.compareJpegVsJpeg(image1Path, image2Path, upperLeft, lowerRight)


if __name__ == "__main__":
    try:
        #main("measurements/20240708_100706.jpg", "measurements/20240708_100722.jpg", (0,0), (0,0))
        if len(sys.argv) == 3:
            main(sys.argv[1], sys.argv[2], (0,0), (0,0))
        elif len(sys.argv) == 5:
            upperLeft = parseTuple(sys.argv[3])
            lowerRight = parseTuple(sys.argv[4])

            # Check if parsed coordinates follow the bayer pattern --> Always jump in "super pixels" (2x2)
            if upperLeft[0] % 2 != 0 or upperLeft[1] % 2 != 0 or \
               lowerRight[0] % 2 == 0 or lowerRight[1] % 2 == 0:
                print("The given coordinates do not match the Bayer pattern")
                sys.exit()
            main(sys.argv[1], sys.argv[2], upperLeft, lowerRight)
        else:
            print("Please use the following Syntax: python " + sys.argv[0] + " <image 1> <image 2> [<x1,y1> <x2,y2>]")
    except KeyboardInterrupt:
        pass