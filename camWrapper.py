import tkinter as tk
from PIL import ImageTk, Image
from tktooltip import ToolTip
import os
from dataclasses import dataclass
from datetime import datetime
import sys
import shutil


WINDOW_WIDTH_SCALING = 0.75
WINDOW_HEIGHT_SCALING = 0.9
PREVIEW_FOLDER = "images"
PREVIEW_FILENAME = PREVIEW_FOLDER + "/preview.jpg"
STORAGE_FOLDER = "measurements"

PREVIEW_COL = 1
LABEL_COL = 2
VALUE_COL = 3

@dataclass
class CameraProperties:
    hflip: bool
    vflip: bool
    shutterSpeed: int
    gain: float
    metering: int
    exposureMode: str
    exposureCompensation: int
    awb: str
    awbGain: str
    brightness: float
    contrast: float
    saturation: float
    sharpness: float
    denoise: str
    autofocusMode: str
    autofocusRange: str
    autofocusSpeed: str
    hdr: str
    resolution: str
    lens: str
    quality: int

def argumentWrapper(parameter: str, value=''):
    return parameter + " " + ((value + " ") if len(value) != 0 else '')

class Main:
    def __init__(self, mainWindow, scrollWindow):
        # Create the main Window
        screenWidth = mainWindow.winfo_screenwidth()
        screenHeight = mainWindow.winfo_screenheight()
        mainWindowWidth = int(screenWidth*WINDOW_WIDTH_SCALING)
        mainWindowHeight = int(screenHeight*WINDOW_HEIGHT_SCALING)
        mainWindow.title("Raspberry Pi Camera Wrapper")
        mainWindow.geometry(str(mainWindowWidth) + "x" + str(mainWindowHeight))

        # Place the canvas for the preview image
        PREVIEW_WIDTH_SCALING = 0.75
        PREVIEW_HEIGHT_SCALING = 0.6
        previewWidth = int(mainWindowWidth * PREVIEW_WIDTH_SCALING)
        previewHeight = int(mainWindowHeight * PREVIEW_HEIGHT_SCALING)
        self.preview = tk.Canvas(scrollWindow, width=previewWidth, height=previewHeight)
        self.preview.grid(row=1, column=PREVIEW_COL)

        self.previewImage = self.preview.create_image(0, 0, anchor=tk.NW, image=ImageTk.PhotoImage(Image.new('RGB', (previewWidth, previewHeight), (255, 255, 255))))

        ROW_OFFSET = 3  # First Item can be placed at position 3 --> Start placing items w/ 0
        # Define Position of the control Elements:
        # Sensor Layer
        LENS_ROW           = 0 + ROW_OFFSET
        RESOLUTION_ROW      = 1 + ROW_OFFSET
        SHUTTER_SPEED_ROW   = 2 + ROW_OFFSET
        GAIN_ROW            = 3 + ROW_OFFSET
        VFLIP_ROW           = 4 + ROW_OFFSET
        HFLIP_ROW           = 5 + ROW_OFFSET
        
        # Sensor + Data Prep. Layer
        HDR_ROW             = 6 + ROW_OFFSET

        # Data Preparation Layer
        METERING_ROW        = 7 + ROW_OFFSET
        EXPOSURE_MODE_ROW   = 8 + ROW_OFFSET
        EXP_COMPENSATION_ROW = 9 + ROW_OFFSET
        AWB_ROW             = 10 + ROW_OFFSET
        AWB_GAINS_ROW       = 11 + ROW_OFFSET
        AUTOFOCUS_MODE_ROW  = 12 + ROW_OFFSET
        AUTOFOCUS_RANGE_ROW = 13 + ROW_OFFSET
        AUTOFOCUS_SPEED_ROW = 14 + ROW_OFFSET
        BRIGHTNESS_ROW      = 15 + ROW_OFFSET
        CONTRAST_ROW        = 16 + ROW_OFFSET
        SATURATION_ROW      = 17 + ROW_OFFSET
        SHARPNESS_ROW       = 18 + ROW_OFFSET
        DENOISE_ROW         = 19 + ROW_OFFSET
        QUALITY_ROW         = 20 + ROW_OFFSET

        # Define colors of Layers
        SENSOR_COLOR = "light goldenrod"
        SENSOR_DATA_COLOR = "LightSkyBlue1"
        DATA_COLOR = "DarkOliveGreen1"

        # File name prefix
        hFilenameLabel = tk.Label(scrollWindow, text="Capture name")
        hFilenameLabel.grid(row=ROW_OFFSET - 1, column=LABEL_COL, sticky="W")
        self.filenameValue = tk.StringVar()
        self.filenameValue.set("")
        filenameValueTextbox = tk.Entry(scrollWindow, text=self.filenameValue)
        filenameValueTextbox.grid(row=ROW_OFFSET - 1, column=VALUE_COL, sticky="W")

        # Horizontal flip option
        hflipLabel = tk.Label(scrollWindow, text="Horizontal Flip", background=SENSOR_COLOR)
        hflipLabel.grid(row=HFLIP_ROW, column=LABEL_COL, sticky="W")
        self.hFlipValue = tk.IntVar()
        self.hFlipValue.set(0)
        hflipCheckbox = tk.Checkbutton(scrollWindow, variable=self.hFlipValue)
        hflipCheckbox.grid(row=HFLIP_ROW, column=VALUE_COL, sticky="W")

        # Vertical flip option
        vflipLabel = tk.Label(scrollWindow, text="Vertical Flip", background=SENSOR_COLOR)
        vflipLabel.grid(row=VFLIP_ROW, column=LABEL_COL, sticky="W")
        self.vFlipValue = tk.IntVar()
        self.vFlipValue.set(0)
        vflipCheckbox = tk.Checkbutton(scrollWindow, variable=self.vFlipValue)
        vflipCheckbox.grid(row=VFLIP_ROW, column=VALUE_COL, sticky="W")

        # Shutter speed
        shutterSpeedLabel = tk.Label(scrollWindow, text="Shutter speed [us]", background=SENSOR_COLOR)
        shutterSpeedLabel.grid(row=SHUTTER_SPEED_ROW, column=LABEL_COL, sticky="W")
        self.shutterSpeedValue = tk.StringVar()
        self.shutterSpeedValue.set("0")
        shutterSpeedTextbox = tk.Entry(scrollWindow, text=self.shutterSpeedValue)
        shutterSpeedTextbox.grid(row=SHUTTER_SPEED_ROW, column=VALUE_COL, sticky="W")
        ToolTip(shutterSpeedTextbox, msg="0 = ignore this parameter")

        # Gain
        gainLabel = tk.Label(scrollWindow, text="(Analog) Gain [ISO/100]", background=SENSOR_COLOR)
        gainLabel.grid(row=GAIN_ROW, column=LABEL_COL, sticky="W")
        self.gainValue = tk.DoubleVar()
        self.gainValue.set(0.0)
        gainTextbox = tk.Entry(scrollWindow, text=str(self.gainValue))
        gainTextbox.grid(row=GAIN_ROW, column=VALUE_COL, sticky="W")
        ToolTip(gainTextbox, msg="0.0 = ignore this parameter")

        # Metering Options:
        meteringLabel = tk.Label(scrollWindow, text="Metering", background=DATA_COLOR)
        meteringLabel.grid(row=METERING_ROW, column=LABEL_COL, sticky="W")
        meteringOptions = ["centre", "spot", "average", "custom"]
        self.meteringOptionsValue = tk.StringVar()
        self.meteringOptionsValue.set(meteringOptions[0])
        meteringDropdown = tk.OptionMenu(scrollWindow, self.meteringOptionsValue, *meteringOptions)
        meteringDropdown.grid(row=METERING_ROW, column=VALUE_COL, sticky="W")

        # Exposure mode Options:
        exposureModeLabel = tk.Label(scrollWindow, text="Exposure mode", background=DATA_COLOR)
        exposureModeLabel.grid(row=EXPOSURE_MODE_ROW, column=LABEL_COL, sticky="W")
        exposureModeOptions = ["normal", "sport"]
        self.exposureModeOptionsValue = tk.StringVar()
        self.exposureModeOptionsValue.set(exposureModeOptions[0])
        exposureModeDropdown = tk.OptionMenu(scrollWindow, self.exposureModeOptionsValue, *exposureModeOptions)
        exposureModeDropdown.grid(row=EXPOSURE_MODE_ROW, column=VALUE_COL, sticky="W")

        # Exposure compensation
        expCompensationLabel = tk.Label(scrollWindow, text="Exposure Compensation [EV]", background=DATA_COLOR)
        expCompensationLabel.grid(row=EXP_COMPENSATION_ROW, column=LABEL_COL, sticky="W")
        self.expCompensationValue = tk.StringVar()
        self.expCompensationValue.set("0")
        expCompensationTextbox = tk.Entry(scrollWindow, text=self.expCompensationValue)
        expCompensationTextbox.grid(row=EXP_COMPENSATION_ROW, column=VALUE_COL, sticky="W")
        ToolTip(expCompensationTextbox, msg="0 = ignore this parameter")

        # AWB Options:
        awbLabel = tk.Label(scrollWindow, text="AWB", background=DATA_COLOR)
        awbLabel.grid(row=AWB_ROW, column=LABEL_COL, sticky="W")
        awbOptions = ["auto", "incandescent", "tungsten", "fluorescent", "indoor", "daylight", "cloudy", "custom"]
        self.awbOptionsValue = tk.StringVar()
        self.awbOptionsValue.set(awbOptions[0])
        awbDropdown = tk.OptionMenu(scrollWindow, self.awbOptionsValue, *awbOptions)
        awbDropdown.grid(row=AWB_ROW, column=VALUE_COL, sticky="W")

        # AWB-Gains:
        awbGainsLabel = tk.Label(scrollWindow, text="AWB-Gains [red, blue]", background=DATA_COLOR)
        awbGainsLabel.grid(row=AWB_GAINS_ROW, column=LABEL_COL, sticky="W")
        self.awbGainsValue = tk.StringVar()
        self.awbGainsValue.set("0,0")
        awbGainsTextbox = tk.Entry(scrollWindow, text=self.awbGainsValue)
        awbGainsTextbox.grid(row=AWB_GAINS_ROW, column=VALUE_COL, sticky="W")
        ToolTip(awbGainsTextbox, msg="0,0 = ignore this parameter. Use only, if AWB is not auto")

        # Brightness:
        brightnessLabel = tk.Label(scrollWindow, text="Brightness", background=DATA_COLOR)
        brightnessLabel.grid(row=BRIGHTNESS_ROW, column=LABEL_COL, sticky="W")
        self.brightnessValue = tk.DoubleVar()
        self.brightnessValue.set(0.0)
        brightnessSlider = tk.Scale(scrollWindow, from_=-1.0, to=+1.0, resolution=0.1, orient=tk.HORIZONTAL, variable=self.brightnessValue)
        brightnessSlider.grid(row=BRIGHTNESS_ROW, column=VALUE_COL, sticky="W")
        ToolTip(brightnessSlider, msg="0.0 = ignore this parameter")

        # Contrast:
        contrastLabel = tk.Label(scrollWindow, text="Contrast", background=DATA_COLOR)
        contrastLabel.grid(row=CONTRAST_ROW, column=LABEL_COL, sticky="W")
        self.contrastValue = tk.DoubleVar()
        self.contrastValue.set(1.0)
        contrastSlider = tk.Scale(scrollWindow, from_=0.0, to=+10.0, resolution=0.1, orient=tk.HORIZONTAL, variable=self.contrastValue)
        contrastSlider.grid(row=CONTRAST_ROW, column=VALUE_COL, sticky="W")
        ToolTip(contrastSlider, msg="1.0 = ignore this parameter")

        # Saturation:
        saturationLabel = tk.Label(scrollWindow, text="Saturation", background=DATA_COLOR)
        saturationLabel.grid(row=SATURATION_ROW, column=LABEL_COL, sticky="W")
        self.saturationValue = tk.DoubleVar()
        self.saturationValue.set(1.0)
        saturationSlider = tk.Scale(scrollWindow, from_=0.0, to=+10.0, resolution=0.1, orient=tk.HORIZONTAL, variable=self.saturationValue)
        saturationSlider.grid(row=SATURATION_ROW, column=VALUE_COL, sticky="W")
        ToolTip(saturationSlider, msg="1.0 = ignore this parameter")

        # Sharpness:
        sharpnessLabel = tk.Label(scrollWindow, text="Sharpness", background=DATA_COLOR)
        sharpnessLabel.grid(row=SHARPNESS_ROW, column=LABEL_COL, sticky="W")
        self.sharpnessValue = tk.DoubleVar()
        self.sharpnessValue.set(1.0)
        sharpnessSlider = tk.Scale(scrollWindow, from_=0.0, to=+10.0, resolution=0.1, orient=tk.HORIZONTAL, variable=self.sharpnessValue)
        sharpnessSlider.grid(row=SHARPNESS_ROW, column=VALUE_COL, sticky="W")
        ToolTip(sharpnessSlider, msg="1.0 = ignore this parameter")

        # Denoise Options:
        denoiseLabel = tk.Label(scrollWindow, text="Denoise", background=DATA_COLOR)
        denoiseLabel.grid(row=DENOISE_ROW, column=LABEL_COL, sticky="W")
        denoiseOptions = ["auto", "off", "cdn_off", "cdn_fast", "cdn_hq"]
        self.denoiseOptionsValue = tk.StringVar()
        self.denoiseOptionsValue.set(denoiseOptions[0])
        denoiseDropdown = tk.OptionMenu(scrollWindow, self.denoiseOptionsValue, *denoiseOptions)
        denoiseDropdown.grid(row=DENOISE_ROW, column=VALUE_COL, sticky="W")

        # Autofocus Options:
        autofocusModeLabel = tk.Label(scrollWindow, text="Autofocus mode", background=DATA_COLOR)
        autofocusModeLabel.grid(row=AUTOFOCUS_MODE_ROW, column=LABEL_COL, sticky="W")
        autofocusModeOptions = ["auto", "manual", "continuous"]
        self.autofocusModeOptionsValue = tk.StringVar()
        self.autofocusModeOptionsValue.set(autofocusModeOptions[0])
        autofocusModeDropdown = tk.OptionMenu(scrollWindow, self.autofocusModeOptionsValue, *autofocusModeOptions)
        autofocusModeDropdown.grid(row=AUTOFOCUS_MODE_ROW, column=VALUE_COL, sticky="W")

        # Autofocus Options:
        autofocusRangeLabel = tk.Label(scrollWindow, text="Autofocus range", background=DATA_COLOR)
        autofocusRangeLabel.grid(row=AUTOFOCUS_RANGE_ROW, column=LABEL_COL, sticky="W")
        autofocusRangeOptions = ["normal", "macro", "full"]
        self.autofocusRangeOptionsValue = tk.StringVar()
        self.autofocusRangeOptionsValue.set(autofocusRangeOptions[0])
        autofocusRangeDropdown = tk.OptionMenu(scrollWindow, self.autofocusRangeOptionsValue, *autofocusRangeOptions)
        autofocusRangeDropdown.grid(row=AUTOFOCUS_RANGE_ROW, column=VALUE_COL, sticky="W")

        # Autofocus Options:
        autofocusSpeedLabel = tk.Label(scrollWindow, text="Autofocus speed", background=DATA_COLOR)
        autofocusSpeedLabel.grid(row=AUTOFOCUS_SPEED_ROW, column=LABEL_COL, sticky="W")
        autofocusSpeedOptions = ["normal", "fast"]
        self.autofocusSpeedOptionsValue = tk.StringVar()
        self.autofocusSpeedOptionsValue.set(autofocusSpeedOptions[0])
        autofocusSpeedDropdown = tk.OptionMenu(scrollWindow, self.autofocusSpeedOptionsValue, *autofocusSpeedOptions)
        autofocusSpeedDropdown.grid(row=AUTOFOCUS_SPEED_ROW, column=VALUE_COL, sticky="W")

        # HDR-Options:
        hdrLabel = tk.Label(scrollWindow, text="HDR-Mode", background=SENSOR_DATA_COLOR)
        hdrLabel.grid(row=HDR_ROW, column=LABEL_COL, sticky="W")
        hdrOptions = ["off", "auto", "sensor", "single-exp"]
        self.hdrOptionsValue = tk.StringVar()
        self.hdrOptionsValue.set(hdrOptions[0])
        hdrDropdown = tk.OptionMenu(scrollWindow, self.hdrOptionsValue, *hdrOptions)
        hdrDropdown.grid(row=HDR_ROW, column=VALUE_COL, sticky="W")

        # Resolution:
        resolutionLabel = tk.Label(scrollWindow, text="Image Resolution (Width:Height) [px:px]", background=SENSOR_COLOR)
        resolutionLabel.grid(row=RESOLUTION_ROW, column=LABEL_COL, sticky="W")
        self.resolution = tk.StringVar()
        self.resolution.set("0:0")
        resolutionTextbox = tk.Entry(scrollWindow, text=self.resolution)
        resolutionTextbox.grid(row=RESOLUTION_ROW, column=VALUE_COL, sticky="W")
        ToolTip(resolutionTextbox, msg="0:0 = use default")

        # Lens:
        lensLabel = tk.Label(scrollWindow, text="Focus distance [m]", background=SENSOR_COLOR)
        lensLabel.grid(row=LENS_ROW, column=LABEL_COL, sticky="W")
        self.lens = tk.StringVar()
        self.lens.set("0")
        lensTextbox = tk.Entry(scrollWindow, text=self.lens)
        lensTextbox.grid(row=LENS_ROW, column=VALUE_COL, sticky="W")
        ToolTip(lensTextbox, msg="0 = ignore; 0.0 = infinity; default = hyperfocal")

        # Capture preview button
        PREVIEW_BUTTON_ROW = 1
        preview_button = tk.Button(scrollWindow, text="Capture preview", command=self.createPreview)
        preview_button.grid(row=PREVIEW_BUTTON_ROW, column=LABEL_COL)

        # Capture measurement button
        MEASUREMENT_BUTTON_ROW = 1
        measurement_button = tk.Button(scrollWindow, text="Capture measurement", command=self.save)
        measurement_button.grid(row=MEASUREMENT_BUTTON_ROW, column=VALUE_COL)

        # Brightness:
        qualityLabel = tk.Label(scrollWindow, text="JPEG Quality", background=DATA_COLOR)
        qualityLabel.grid(row=QUALITY_ROW, column=LABEL_COL, sticky="W")
        self.quality = tk.IntVar()
        self.quality.set(100)
        qualitySlider = tk.Scale(scrollWindow, from_=0, to=100, resolution=1, orient=tk.HORIZONTAL, variable=self.quality)
        qualitySlider.grid(row=QUALITY_ROW, column=VALUE_COL, sticky="W")
        ToolTip(qualitySlider, msg="100 = default")

        # Color Coding of Layer and Description
        sensorlayerLabel = tk.Label(scrollWindow, text="Sensor Layer", background=SENSOR_COLOR)
        sensorlayerLabel.grid(row=LENS_ROW, column=PREVIEW_COL)
        sensordatalayerLabel = tk.Label(scrollWindow, text="Sensor / Data Preparation Layer", background=SENSOR_DATA_COLOR)
        sensordatalayerLabel.grid(row=HDR_ROW, column=PREVIEW_COL)
        datalayerLabel = tk.Label(scrollWindow, text="Data Preparation Layer", background=DATA_COLOR)
        datalayerLabel.grid(row=METERING_ROW, column=PREVIEW_COL)

    def createPreview(self):
        prop = CameraProperties(True if self.hFlipValue.get() == 1 else False, True if self.vFlipValue.get() == 1 else False, \
                         int(self.shutterSpeedValue.get()), float(self.gainValue.get()), self.meteringOptionsValue.get(), \
                         self.exposureModeOptionsValue.get(), int(self.expCompensationValue.get()), self.awbOptionsValue.get(), \
                         self.awbGainsValue.get(), self.brightnessValue.get(), self.contrastValue.get(), self.saturationValue.get(), \
                         self.sharpnessValue.get(), self.denoiseOptionsValue.get(), self.autofocusModeOptionsValue.get(), \
                         self.autofocusRangeOptionsValue.get(), self.autofocusSpeedOptionsValue.get(), self.hdrOptionsValue.get(),
                         self.resolution.get(), self.lens.get(), self.quality.get())
        if not os.path.isdir(PREVIEW_FOLDER):
            os.mkdir(PREVIEW_FOLDER)
        if os.path.isfile(PREVIEW_FILENAME):
            os.remove(PREVIEW_FILENAME)
        #print(prop)

        command = argumentWrapper("rpicam-jpeg")

        # Add jpeg output filename
        command += argumentWrapper("-o", PREVIEW_FILENAME)

        # No timeout (=take picture immediately)
        command += argumentWrapper("-t", str(1))

        # Omit preview
        command += argumentWrapper("--nopreview")

        # Configure JPEG Quality
        command += argumentWrapper("-q", str(prop.quality))

        # Go through all properties and only imply if not default
        if prop.hflip:
            command += argumentWrapper("--hflip", str(1))
        if prop.vflip:
            command += argumentWrapper("--vflip", str(1))
        if prop.shutterSpeed != 0:
            command += argumentWrapper("--shutter", str(prop.shutterSpeed))
        if prop.gain != 0:
            command += argumentWrapper("--gain", str(prop.gain))
        if prop.metering != "centre":
            command += argumentWrapper("--metering", prop.metering)
        if prop.exposureMode != "normal":
            command += argumentWrapper("--exposure", prop.exposureMode)
        if prop.exposureCompensation != 0:
            command += argumentWrapper("--ev", str(prop.exposureCompensation))
        if prop.awb != "auto":
            command += argumentWrapper("--awb", prop.awb)
        if prop.awbGain != "0,0":
            command += argumentWrapper("--awbgains", str(prop.awbGain))
        if prop.brightness != 0.0:
            command += argumentWrapper("--brightness", str(prop.brightness))
        if prop.contrast != 1.0:
            command += argumentWrapper("--contrast", str(prop.contrast))
        if prop.saturation != 1.0:
            command += argumentWrapper("--saturation", str(prop.saturation))
        if prop.sharpness != 1.0:
            command += argumentWrapper("--sharpness", str(prop.sharpness))
        if prop.denoise != "auto":
            command += argumentWrapper("--denoise", prop.denoise)
        if prop.autofocusMode != "auto":
            command += argumentWrapper("--autofocus-mode", prop.autofocusMode)
        if prop.autofocusRange != "normal":
            command += argumentWrapper("--autofocus-range", prop.autofocusRange)
        if prop.autofocusSpeed != "normal":
            command += argumentWrapper("--autofocus-speed", prop.autofocusSpeed)
        if prop.hdr != "off":
            command += argumentWrapper("--hdr", prop.hdr)
        if prop.resolution != "0:0":
            command += argumentWrapper("--mode", prop.resolution + ":10:U")
        if prop.lens != "0":
            commandParameter = ""
            if prop.lens == "default" or prop.lens == "0.0":
                commandParameter = prop.lens
            else:
                commandParameter = str(1 / float(prop.lens))
            command += argumentWrapper("--lens-position", commandParameter)

        #print(command)
        if os.system(command) == 0:
            print("Captured Preview")
        else:
            print("Error")

        # Update the preview image
        locpreviewImage = ImageTk.PhotoImage(Image.open(PREVIEW_FILENAME).resize((self.preview.winfo_width(), self.preview.winfo_height())))
        self.preview.itemconfig(self.previewImage, image=locpreviewImage)
        self.preview.imgref = locpreviewImage

    def save(self):
        prop = CameraProperties(True if self.hFlipValue.get() == 1 else False, True if self.vFlipValue.get() == 1 else False, \
                         int(self.shutterSpeedValue.get()), float(self.gainValue.get()), self.meteringOptionsValue.get(), \
                         self.exposureModeOptionsValue.get(), int(self.expCompensationValue.get()), self.awbOptionsValue.get(), \
                         self.awbGainsValue.get(), self.brightnessValue.get(), self.contrastValue.get(), self.saturationValue.get(), \
                         self.sharpnessValue.get(), self.denoiseOptionsValue.get(), self.autofocusModeOptionsValue.get(), \
                         self.autofocusRangeOptionsValue.get(), self.autofocusSpeedOptionsValue.get(), self.hdrOptionsValue.get(), 
                         self.resolution.get(), self.lens.get(), self.quality.get())
        if not os.path.isdir(STORAGE_FOLDER):
            os.mkdir(STORAGE_FOLDER)
        timestamp = datetime.now()
        STORAGE_FILENAME = STORAGE_FOLDER + "/" + self.filenameValue.get() + "_" + timestamp.strftime("%Y%m%d_%H%M%S.jpg")
        if os.path.isfile(STORAGE_FILENAME):
            os.remove(STORAGE_FILENAME)
        #print(prop)

        command = argumentWrapper("rpicam-still")

        # Add jpeg output filename
        command += argumentWrapper("-o", STORAGE_FILENAME)
        
        # Store also raw file
        command += argumentWrapper("-r")

        # No timeout (=take picture immediately)
        command += argumentWrapper("-t", str(1))

        # Omit preview
        command += argumentWrapper("--nopreview")

        # Configure JPEG Quality
        command += argumentWrapper("-q", str(prop.quality))

        # Create meta data file
        command += argumentWrapper("--metadata", STORAGE_FILENAME + ".txt")

        # Go through all properties and only imply if not default
        if prop.hflip:
            command += argumentWrapper("--hflip", str(1))
        if prop.vflip:
            command += argumentWrapper("--vflip", str(1))
        if prop.shutterSpeed != 0:
            command += argumentWrapper("--shutter", str(prop.shutterSpeed))
        if prop.gain != 0:
            command += argumentWrapper("--gain", str(prop.gain))
        if prop.metering != "centre":
            command += argumentWrapper("--metering", prop.metering)
        if prop.exposureMode != "normal":
            command += argumentWrapper("--exposure", prop.exposureMode)
        if prop.exposureCompensation != 0:
            command += argumentWrapper("--ev", str(prop.exposureCompensation))
        if prop.awb != "auto":
            command += argumentWrapper("--awb", prop.awb)
        if prop.awbGain != "0,0":
            command += argumentWrapper("--awbgains", str(prop.awbGain))
        if prop.brightness != 0.0:
            command += argumentWrapper("--brightness", str(prop.brightness))
        if prop.contrast != 1.0:
            command += argumentWrapper("--contrast", str(prop.contrast))
        if prop.saturation != 1.0:
            command += argumentWrapper("--saturation", str(prop.saturation))
        if prop.sharpness != 1.0:
            command += argumentWrapper("--sharpness", str(prop.sharpness))
        if prop.denoise != "auto":
            command += argumentWrapper("--denoise", prop.denoise)
        if prop.autofocusMode != "auto":
            command += argumentWrapper("--autofocus-mode", prop.autofocusMode)
        if prop.autofocusRange != "normal":
            command += argumentWrapper("--autofocus-range", prop.autofocusRange)
        if prop.autofocusSpeed != "normal":
            command += argumentWrapper("--autofocus-speed", prop.autofocusSpeed)
        if prop.hdr != "off":
            command += argumentWrapper("--hdr", prop.hdr)
        if prop.resolution != "0:0":
            command += argumentWrapper("--mode", prop.resolution + ":10:U")
        if prop.lens != "0":
            commandParameter = ""
            if prop.lens == "default" or prop.lens == "0.0":
                commandParameter = prop.lens
            else:
                commandParameter = str(1 / float(prop.lens))
            command += argumentWrapper("--lens-position", commandParameter)

        print(command)
        if os.system(command) == 0:
            print("Captured Image")
        else:
            print("Error")

        # Update the preview image
        locpreviewImage = ImageTk.PhotoImage(Image.open(STORAGE_FILENAME).resize((self.preview.winfo_width(), self.preview.winfo_height())))
        self.preview.itemconfig(self.previewImage, image=locpreviewImage)
        self.preview.imgref = locpreviewImage

        # Add used command to meta_data
        with open(STORAGE_FILENAME + ".txt", "a") as metadataFile:
            metadataFile.write("\n\nUsed command: " + command)

def main(configFilePath=''):
    if len(configFilePath) == 0:
        # Create Scrollable canvas inside main. Unfortunately not nice in tkinter
        mainWindow = tk.Tk()
        mainFrame = tk.Frame(mainWindow)
        mainFrame.pack(fill = tk.BOTH, expand = 1)

        mainCanvas = tk.Canvas(mainFrame)
        mainCanvas.pack(side=tk.LEFT, fill=tk.BOTH, expand=1)
        scroll = tk.Scrollbar(mainFrame, orient=tk.VERTICAL, command=mainCanvas.yview)
        scroll.pack(side=tk.RIGHT, fill=tk.Y)

        mainCanvas.configure(yscrollcommand=scroll.set)
        mainCanvas.bind('<Configure>', lambda e: mainCanvas.configure(scrollregion=mainCanvas.bbox("all")))

        insideFrame = tk.Frame(mainCanvas)
        mainCanvas.create_window((0, 0), window=insideFrame, anchor="nw")

        Main(mainWindow, insideFrame)
        mainWindow.mainloop()
    else:
        if not os.path.isdir(STORAGE_FOLDER):
            os.mkdir(STORAGE_FOLDER)
        timestamp = datetime.now()
        STORAGE_FILENAME = STORAGE_FOLDER + "/" + timestamp.strftime("%Y%m%d_%H%M%S.jpg")
        if os.path.isfile(STORAGE_FILENAME):
            os.remove(STORAGE_FILENAME)

        command = argumentWrapper("rpicam-still")

        # Add jpeg output filename
        command += argumentWrapper("-o", STORAGE_FILENAME)
        
        # Store also raw file
        command += argumentWrapper("-r")

        # No timeout (=take picture immediately)
        command += argumentWrapper("-t", str(1))

        # Omit preview
        command += argumentWrapper("--nopreview")

        # Set JPEG Quality
        configFile = open(configFilePath, 'r')
        if not "quality" in configFile.read():
            command += argumentWrapper("-q", str(100))
        configFile.seek(0)

        # Create meta data file
        command += argumentWrapper("--metadata", STORAGE_FILENAME + ".txt")

        # Add config file as a property
        # Information: https://www.raspberrypi.com/documentation/computers/camera_software.html#config
        command += argumentWrapper("-c", configFilePath)

        print(command)
        if os.system(command) == 0:
            print("Captured Image")
        else:
            print("Error")

        # Add used command to meta_data
        with open(STORAGE_FILENAME + ".txt", "a") as metadataFile:
            metadataFile.write("\n\nUsed command: " + command)

        
        # Add config file content
        with open(STORAGE_FILENAME + ".txt", "a+") as metadataFile:
            metadataFile.write("\n\nConfig file:\n" + configFile.read())


if __name__ == "__main__":
    try:
        if len(sys.argv) == 2:
            main(sys.argv[1])
        else:
            main()

        # Delete preview folder (if existing)
        if os.path.isdir(PREVIEW_FOLDER):
            shutil.rmtree(PREVIEW_FOLDER)
    except KeyboardInterrupt:
        pass