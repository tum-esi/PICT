from PyQt6.QtWidgets import *
from PyQt6.QtGui import *
from PyQt6.QtCore import Qt, QEvent, QTimer
import os
import json
from datetime import datetime
import sys
import shutil
import picamera2
import inspect
import time
from libcamera import controls, Transform
import subprocess
from multiprocessing.pool import ThreadPool as Pool
import subprocess

WINDOW_WIDTH_SCALING = 0.75
WINDOW_HEIGHT_SCALING = 0.9
PREVIEW_FOLDER = "images"
PREVIEW_FILENAME = PREVIEW_FOLDER + "/preview.jpg"
STORAGE_FOLDER = "measurements"

PREVIEW_COL = 0
SPECIAL_VALUE_COL = 1
LAYER_COL = 2
LABEL_COL = 3
VALUE_COL = 4

ROW_OFFSET = 3  # First Item can be placed at position 3 --> Start placing items w/ 0
# Define Position of the control Elements:
# Sensor Layer
LENS_ROW            = 0 + ROW_OFFSET
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


def argumentWrapper(parameter: str, value=''):
    return parameter + " " + ((value + " ") if len(value) != 0 else '')

def getVarName(var):
    callers_local_vars = inspect.currentframe().f_back.f_locals.items()
    return [var_name for var_name, var_val in callers_local_vars if var_val is var]

# TODO: Also add possibility to capture multiple images (call "captureImage" repeatedly)

class Camera():
    def __init__(self):
        self.cameraInfo = picamera2.Picamera2.global_camera_info()

os.environ["LIBCAMERA_LOG_LEVELS"] = "*:3"
cam = Camera()

# Helper function to find camera that supports hardware HDR
def v4ls_hdr(value: bool):
    for i in range(10):
        path = f"/dev/v4l-subdev{i}"
        if os.path.exists(path):
            result = subprocess.run(['v4l2-ctl', '-d', path, '-l'], capture_output=True, text=True)
            if 'wide_dynamic_range' in result.stdout:
                os.system("v4l2-ctl --set-ctrl wide_dynamic_range=" + (str(1) if value else str(0)) + " -d " + path)

def captureImage(preview: bool, config: dict, cameraIndex: int):
    print("start " + config["camera_model"] + " at " + str(datetime.now()))
    # Set HDR option
    if config["hdrValue"] == "sensor":
        v4ls_hdr(True)
    if config["hdrValue"] == "off":
        v4ls_hdr(False)

    picam = picamera2.Picamera2(cameraIndex)

    # Set resolution
    modes = picam.sensor_modes
    
    final_mode = modes[-1]
    if config["resolutionValue"] != "0:0":
        x, y = int(config["resolutionValue"].split(":")[-2]), int(config["resolutionValue"].split(":")[-1])
        diff = (10000, 10000)
        for mode in modes:  # Select mode which is closest to selected resolution
            if "size" in mode:
                diff2 = (abs(mode['size'][0] - x), abs(mode['size'][1] - y))
                if diff2[0] < diff[0] and diff2[1] < diff[1]:
                    diff = diff2
                    final_mode = mode

    
    fullyControllableCamera = len(picam.controls.get_libcamera_controls()) > 0
    availableCameraControls = picam.camera_controls
    #for control, details in controls2.items():
    #    print(f"Control: {control}, Details: {details}")
    
    # Set vertical and horizontal flip
    transform = Transform(hflip=config["hFlipValue"], vflip=config["vFlipValue"])

    if "size" in final_mode:
        sensorSettings = {'output_size': final_mode['size'], 'bit_depth': final_mode['bit_depth']}
    else:   # Not available for USB cams
        sensorSettings = {}

    if preview:
        camera_config = picam.create_still_configuration(sensor=sensorSettings,
                                                        transform=transform)
        STORAGE_FILENAME = PREVIEW_FILENAME
    else:
        if fullyControllableCamera:
            camera_config = picam.create_still_configuration(sensor=sensorSettings,
                                                        transform=transform, raw={})
        else:   # No Raw for USB cameras
            camera_config = picam.create_still_configuration(sensor=sensorSettings,
                                                        transform=transform)
        timestamp = datetime.now()
        STORAGE_FILENAME = STORAGE_FOLDER + "/" + config["filenameValue"] + "_" + config["camera_model"] + "_" + timestamp.strftime("%Y%m%d_%H%M%S")
    picam.configure(camera_config)

    # Set auto focus control
    if config["autofocusModeValue"] == "auto" and 'AfMode' in availableCameraControls:
        picam.set_controls({'AfMode': controls.AfModeEnum.Auto})
    if config["autofocusModeValue"] == "manual" and 'AfMode' in availableCameraControls:
        picam.set_controls({'AfMode': controls.AfModeEnum.Manual})
    if config["autofocusModeValue"] == "continuous" and 'AfMode' in availableCameraControls:
        picam.set_controls({'AfMode': controls.AfModeEnum.Continuous})

    # Set auto focus range
    if config["autofocusRangeValue"] == "normal" and 'AfRange' in availableCameraControls:
        picam.set_controls({'AfRange': controls.AfRangeEnum.Normal})
    if config["autofocusRangeValue"] == "macro" and 'AfRange' in availableCameraControls:
        picam.set_controls({'AfRange': controls.AfRangeEnum.Macro})
    if config["autofocusRangeValue"] == "full" and 'AfRange' in availableCameraControls:
        picam.set_controls({'AfRange': controls.AfRangeEnum.Full})

    # Set auto focus speed
    if config["autofocusSpeedValue"] == "normal" and 'AfSpeed' in availableCameraControls:
        picam.set_controls({'AfSpeed': controls.AfSpeedEnum.Normal})
    if config["autofocusSpeedValue"] == "fast" and 'AfSpeed' in availableCameraControls:
        picam.set_controls({'AfSpeed': controls.AfSpeedEnum.Fast})

    # Set focus distance
    if config["autofocusModeValue"] == "manual" and config["lensValue"] != "0" and 'LensPosition' in availableCameraControls:
        if config["lensValue"] == "0.0":
            picam.set_controls({"LensPosition": float(config["lensValue"])})
        else:
            picam.set_controls({"LensPosition": 1/float(config["lensValue"])})

    # Set shutter speed (exposure time)
    if config["shutterSpeedValue"] != "0" and 'ExposureTime' in availableCameraControls:
        picam.set_controls({"ExposureTime": int(config["shutterSpeedValue"])})
        picam.set_controls({"AeEnable": False})

    # Set analog gain
    if config["gainValue"] != "0.0" and 'AnalogueGain' in availableCameraControls:
        picam.set_controls({"AnalogueGain": float(config["gainValue"])})

    # Set HDR (part 2)
    if config["hdrValue"] == "off":
        if 'HdrMode' in availableCameraControls:
            picam.set_controls({'HdrMode': controls.HdrModeEnum.Off})
        v4ls_hdr(False)
    if config["hdrValue"] == "single-exp":
        if 'HdrMode' in availableCameraControls:
            picam.set_controls({'HdrMode': controls.HdrModeEnum.SingleExposure})
        v4ls_hdr(False)

    # Set metering
    if config["meteringOptionsValue"] == "centre" and 'AeMeteringMode' in availableCameraControls:
        picam.set_controls({'AeMeteringMode': controls.AeMeteringModeEnum.CentreWeighted})
    if config["meteringOptionsValue"] == "spot" and 'AeMeteringMode' in availableCameraControls:
        picam.set_controls({'AeMeteringMode': controls.AeMeteringModeEnum.Spot})
    if config["meteringOptionsValue"] == "matrix" and 'AeMeteringMode' in availableCameraControls:
        picam.set_controls({'AeMeteringMode': controls.AeMeteringModeEnum.Matrix})
    if config["meteringOptionsValue"] == "custom" and 'AeMeteringMode' in availableCameraControls:
        picam.set_controls({'AeMeteringMode': controls.AeMeteringModeEnum.Custom})

    # Set exposure mode
    if config["exposureModeOptionsValue"] == "normal" and 'AeExposureMode' in availableCameraControls:
        picam.set_controls({'AeExposureMode': controls.AeExposureModeEnum.Normal})
    if config["exposureModeOptionsValue"] == "short" and 'AeExposureMode' in availableCameraControls:
        picam.set_controls({'AeExposureMode': controls.AeExposureModeEnum.Short})
    if config["exposureModeOptionsValue"] == "long" and 'AeExposureMode' in availableCameraControls:
        picam.set_controls({'AeExposureMode': controls.AeExposureModeEnum.Long})

    # Set exposure compensation
    if config["expCompensationValue"] != "0" and 'ExposureValue' in availableCameraControls:
        picam.set_controls({'ExposureValue': float(config["expCompensationValue"])})

    # Set AWB
    if config["awbValue"] == "auto" and 'AwbMode' in availableCameraControls:
        picam.set_controls({'AwbMode': controls.AwbModeEnum.Auto})
    if config["awbValue"] == "tungsten" and 'AwbMode' in availableCameraControls:
        picam.set_controls({'AwbMode': controls.AwbModeEnum.Tungsten})
    if config["awbValue"] == "fluorescent" and 'AwbMode' in availableCameraControls:
        picam.set_controls({'AwbMode': controls.AwbModeEnum.Fluorescent})
    if config["awbValue"] == "indoor" and 'AwbMode' in availableCameraControls:
        picam.set_controls({'AwbMode': controls.AwbModeEnum.Indoor})
    if config["awbValue"] == "daylight" and 'AwbMode' in availableCameraControls:
        picam.set_controls({'AwbMode': controls.AwbModeEnum.Daylight})
    if config["awbValue"] == "cloudy" and 'AwbMode' in availableCameraControls:
        picam.set_controls({'AwbMode': controls.AwbModeEnum.Cloudy})
    if config["awbValue"] == "custom" and 'AwbMode' in availableCameraControls:
        picam.set_controls({'AwbMode': controls.AwbModeEnum.Custom})

    # Set AWB Gains
    if config["awbGainsValue"] != "0, 0" and 'ColourGains' in availableCameraControls:
        awbGains = (float(config["awbGainsValue"].split(",")[0]), float(config["awbGainsValue"].split(",")[1]))
        picam.set_controls({'ColourGains': awbGains})

    # Set Brightness
    if config["brightnessValue"] != 0 and 'Brightness' in availableCameraControls:
        picam.set_controls({'Brightness': config["brightnessValue"]})

    # Set Contrast
    if config["contrastValue"] != 1.0 and 'Contrast' in availableCameraControls:
        picam.set_controls({'Contrast': config["contrastValue"]})

    # Set Saturation
    if config["saturationValue"] != 1.0 and 'Saturation' in availableCameraControls:
        picam.set_controls({'Saturation': config["saturationValue"]})

    # Set Sharpness
    if config["sharpnessValue"] != 1.0 and 'Sharpness' in availableCameraControls:
        picam.set_controls({'Sharpness': config["sharpnessValue"]})

    # Set Denoise
    if config["denoiseValue"] == "off" and 'NoiseReductionMode' in availableCameraControls:
        picam.set_controls({'NoiseReductionMode': controls.draft.NoiseReductionModeEnum.Off})
    if config["denoiseValue"] == "fast" and 'NoiseReductionMode' in availableCameraControls:
        picam.set_controls({'NoiseReductionMode': controls.draft.NoiseReductionModeEnum.Fast})
    if config["denoiseValue"] == "high quality" and 'NoiseReductionMode' in availableCameraControls:
        picam.set_controls({'NoiseReductionMode': controls.draft.NoiseReductionModeEnum.HighQuality})

    # Set JPEG Quality
    picam.options["quality"] = int(config["qualityValue"])

    for i in range(config["imageAmountValue"]):
        print("capture image " + str(i) + " from camera " + config["camera_model"] + " at " + str(datetime.now()))
        picam.start()
        time.sleep(0.2) # Otherwise setting of the DigitalGain fails
        
        if fullyControllableCamera:
            buffers, metadata = picam.switch_mode_and_capture_buffers(camera_config, ["main", "raw"])

            if preview:
                picam.helpers.save(picam.helpers.make_image(buffers[0], camera_config["main"]), metadata, STORAGE_FILENAME)
                break   # No iteration for preview
            else:
                picam.helpers.save(picam.helpers.make_image(buffers[0], camera_config["main"]), metadata, STORAGE_FILENAME + "_" + str(i+1) + "_.jpg")
                picam.helpers.save_dng(buffers[1], metadata, camera_config["raw"], STORAGE_FILENAME + "_" + str(i+1) + "_.dng")

                metadataString = "config:\n" + json.dumps(config, indent=2) + "\nMetadata\n" + json.dumps(metadata, indent=2)
                metadataFile = open(STORAGE_FILENAME + "_" + str(i+1) + "_.txt", 'w')
                metadataFile.write(metadataString)
                metadataFile.close()

        else:
            if preview:
                picam.capture_file(STORAGE_FILENAME)
                break   # No iteration for preview
            else:
                picam.capture_file(STORAGE_FILENAME + "_" + str(i+1) + "_.jpg")

                metadataString = "config:\n" + json.dumps(config, indent=2)
                metadataFile = open(STORAGE_FILENAME + "_" + str(i+1) + "_.txt", 'w')
                metadataFile.write(metadataString)
                metadataFile.close()
        
        if config["imageAmountValue"] > 1 and i < (config["samplingTimeValue"] - 1):
            time.sleep(config["samplingTimeValue"])
    
    picam.stop()
    picam.close()
    
    print("stop " + config["camera_model"] + " at " + str(datetime.now()))

    return STORAGE_FILENAME if preview else STORAGE_FILENAME + "_" + str(config["imageAmountValue"])

def simplePreview(camIndex = 0):
    subprocess.run(["rpicam-hello", "--timeout", "0", "--camera", str(camIndex)])

class DoubleClickLabel(QLabel):
    def __init__(self, index: int, text="", parent=None):
        super().__init__(text, parent)
        self.setText("No preview available")
        self.setFixedWidth(400)
        self.setStyleSheet("border: 1px solid black;")
        self.timer = QTimer(self)
        self.timer.setSingleShot(True)
        self.timer.timeout.connect(self.showMessage)
        self.installEventFilter(self)
        self.camIndex = index

    def eventFilter(self, obj, event):
        if event.type() == QEvent.Type.MouseButtonPress:
            if event.button() == Qt.MouseButton.LeftButton:
                self.timer.start(1000)  # Start timer for 1 second
                self.mousePressed = True
                return True
        elif event.type() == QEvent.Type.MouseButtonRelease:
            if event.button() == Qt.MouseButton.LeftButton:
                if self.timer.isActive():
                    self.timer.stop()  # Stop the timer if released before 1 second
                self.mousePressed = False
                return True
        return super().eventFilter(obj, event)

    def showMessage(self):
        if self.mousePressed:
            simplePreview(self.camIndex)

class GUI_Main(QMainWindow):    
    def __init__(self):
        super().__init__()
        self.showMaximized()
        self.initUI()

    def initUI(self):
        # Create Tab per camera
        allTabs = []
        self.tabs = QTabWidget()
        for i in range(len(cam.cameraInfo)):
            tab = QWidget()
            tab.layout = QGridLayout()

            scrollbar = QScrollArea(widgetResizable=True)
            scrollbar.setWidget(tab)
            QScroller.grabGesture(scrollbar.viewport(), QScroller.ScrollerGestureType.LeftMouseButtonGesture)

            # Preview Button
            previewButton = QPushButton("Preview")
            previewButton.clicked.connect(lambda a, tab_=tab, index=i: self.previewButtonPressed(tab_, index))
            tab.layout.addWidget(previewButton, 0, LAYER_COL)

            # Measurement Button
            measurementButton = QPushButton("Measurement")
            measurementButton.clicked.connect(lambda a, tab_=tab, index=i: self.measurementButtonPressed(tab_, index))
            tab.layout.addWidget(measurementButton, 0, LABEL_COL)

            # Measurement Button
            measureAllButton = QPushButton("Measure all Cameras")
            measureAllButton.clicked.connect(lambda a, tabs_=allTabs: self.measureAllButtonPressed(tabs_))
            tab.layout.addWidget(measureAllButton, 0, VALUE_COL)

            # Add Preview Window
            previewLabel = DoubleClickLabel(i)
            previewLabel.setObjectName(getVarName(previewLabel)[-1])
            tab.layout.addWidget(previewLabel, 0, 0, 10, 2)

            # Add amount of images
            imageAmountLabel = QLabel()
            imageAmountLabel.setText("Image amount")
            tab.layout.addWidget(imageAmountLabel, 11, PREVIEW_COL, 2, 1)
            imageAmountValue = QDoubleSpinBox()
            imageAmountValue.setMinimum(0)
            imageAmountValue.setMaximum(1000)
            imageAmountValue.setValue(1)
            imageAmountValue.setSingleStep(1)
            imageAmountValue.setFixedHeight(40)
            imageAmountValue.setDecimals(0)
            imageAmountValue.setObjectName(getVarName(imageAmountValue)[-1])
            tab.layout.addWidget(imageAmountValue, 11, SPECIAL_VALUE_COL, 2, 1)

            # Add amount of images
            samplingTimeLabel = QLabel()
            samplingTimeLabel.setText("Sampling time [s]")
            tab.layout.addWidget(samplingTimeLabel, 13, PREVIEW_COL, 2, 1)
            samplingTimeValue = QDoubleSpinBox()
            samplingTimeValue.setMinimum(1)
            samplingTimeValue.setMaximum(1000)
            samplingTimeValue.setValue(10)
            samplingTimeValue.setSingleStep(1)
            samplingTimeValue.setFixedHeight(40)
            samplingTimeValue.setDecimals(0)
            samplingTimeValue.setObjectName(getVarName(samplingTimeValue)[-1])
            tab.layout.addWidget(samplingTimeValue, 13, SPECIAL_VALUE_COL, 2, 1)

            # File name prefix
            hFilenameLabel = QLabel()
            hFilenameLabel.setText("Capture name")
            tab.layout.addWidget(hFilenameLabel, ROW_OFFSET - 1, LABEL_COL)
            filenameValue = QLineEdit()
            filenameValue.setFixedWidth(200)
            filenameValue.setObjectName(getVarName(filenameValue)[-1])
            tab.layout.addWidget(filenameValue, ROW_OFFSET - 1, VALUE_COL)

            # Horizontal flip option
            hFlipLabel = QLabel()
            hFlipLabel.setText("Horizontal Flip")
            tab.layout.addWidget(hFlipLabel, HFLIP_ROW, LABEL_COL)
            hFlipValue = QCheckBox()
            hFlipValue.setObjectName(getVarName(hFlipValue)[-1])
            tab.layout.addWidget(hFlipValue, HFLIP_ROW, VALUE_COL)

            # Vertical flip option
            vFlipLabel = QLabel()
            vFlipLabel.setText("Vertical Flip")
            tab.layout.addWidget(vFlipLabel, VFLIP_ROW, LABEL_COL)
            vFlipValue = QCheckBox()
            vFlipValue.setObjectName(getVarName(vFlipValue)[-1])
            tab.layout.addWidget(vFlipValue, VFLIP_ROW, VALUE_COL)

            # Shutter speed
            shutterSpeedLabel = QLabel()
            shutterSpeedLabel.setText("Shutter speed [us]")
            tab.layout.addWidget(shutterSpeedLabel, SHUTTER_SPEED_ROW, LABEL_COL)
            shutterSpeedValue = QLineEdit()
            shutterSpeedValue.setText(str(0))
            shutterSpeedValue.setFixedWidth(200)
            shutterSpeedValue.setToolTip("0 = ignore this parameter")
            shutterSpeedValue.setObjectName(getVarName(shutterSpeedValue)[-1])
            tab.layout.addWidget(shutterSpeedValue, SHUTTER_SPEED_ROW, VALUE_COL)

            # Gain
            gainLabel = QLabel()
            gainLabel.setText("(Analog) Gain [ISO/100]")
            tab.layout.addWidget(gainLabel, GAIN_ROW, LABEL_COL)
            gainValue = QLineEdit()
            gainValue.setText(str(0.0))
            gainValue.setFixedWidth(200)
            gainValue.setToolTip("0.0 = ignore this parameter")
            gainValue.setObjectName(getVarName(gainValue)[-1])
            tab.layout.addWidget(gainValue, GAIN_ROW, VALUE_COL)

            # Metering options:
            meteringLabel = QLabel()
            meteringLabel.setText("Metering")
            tab.layout.addWidget(meteringLabel, METERING_ROW, LABEL_COL)
            meteringOptions = ["centre", "spot", "matrix", "custom"]
            meteringOptionsValue = QComboBox()
            meteringOptionsValue.addItems(meteringOptions)
            meteringOptionsValue.setCurrentIndex(0)
            meteringOptionsValue.setFixedWidth(200)
            meteringOptionsValue.setObjectName(getVarName(meteringOptionsValue)[-1])
            tab.layout.addWidget(meteringOptionsValue, METERING_ROW, VALUE_COL)

            # Exposure mode options
            exposureModeLabel = QLabel()
            exposureModeLabel.setText("Exposure mode")
            tab.layout.addWidget(exposureModeLabel, EXPOSURE_MODE_ROW, LABEL_COL)
            exposureModeOptions = ["normal", "short", "long"]
            exposureModeOptionsValue = QComboBox()
            exposureModeOptionsValue.addItems(exposureModeOptions)
            exposureModeOptionsValue.setCurrentIndex(0)
            exposureModeOptionsValue.setFixedWidth(200)
            exposureModeOptionsValue.setObjectName(getVarName(exposureModeOptionsValue)[-1])
            tab.layout.addWidget(exposureModeOptionsValue, EXPOSURE_MODE_ROW, VALUE_COL)

            # Exposure compensation
            expCompensationLabel = QLabel()
            expCompensationLabel.setText("Exposure Compensation [EV]")
            tab.layout.addWidget(expCompensationLabel, EXP_COMPENSATION_ROW, LABEL_COL)
            expCompensationValue = QLineEdit()
            expCompensationValue.setText(str(0))
            expCompensationValue.setFixedWidth(200)
            expCompensationValue.setToolTip("0 = ignore this parameter")
            expCompensationValue.setObjectName(getVarName(expCompensationValue)[-1])
            tab.layout.addWidget(expCompensationValue, EXP_COMPENSATION_ROW, VALUE_COL)

            # AWB options
            awbLabel = QLabel()
            awbLabel.setText("AWB")
            tab.layout.addWidget(awbLabel, AWB_ROW, LABEL_COL)
            awbOptions  = ["auto", "tungsten", "fluorescent", "indoor", "daylight", "cloudy", "custom"]
            awbValue = QComboBox()
            awbValue.addItems(awbOptions)
            awbValue.setCurrentIndex(0)
            awbValue.setFixedWidth(200)
            awbValue.setObjectName(getVarName(awbValue)[-1])
            tab.layout.addWidget(awbValue, AWB_ROW, VALUE_COL)

            # AWB-Gains
            awbGainsLabel = QLabel()
            awbGainsLabel.setText("AWB-Gains [red, blue]")
            tab.layout.addWidget(awbGainsLabel, AWB_GAINS_ROW, LABEL_COL)
            awbGainsValue = QLineEdit()
            awbGainsValue.setText("0, 0")
            awbGainsValue.setFixedWidth(200)
            awbGainsValue.setToolTip("0,0 = ignore this parameter. Use only, if AWB is not auto")
            awbGainsValue.setObjectName(getVarName(awbGainsValue)[-1])
            tab.layout.addWidget(awbGainsValue, AWB_GAINS_ROW, VALUE_COL)

            # Brightness
            brightnessLabel = QLabel()
            brightnessLabel.setText("Brightness")
            tab.layout.addWidget(brightnessLabel, BRIGHTNESS_ROW, LABEL_COL)
            brightnessValue = QSlider(Qt.Orientation.Horizontal)
            brightnessValue.setMinimum(-10)
            brightnessValue.setMaximum(+10)
            brightnessValue.setSingleStep(1)
            brightnessValue.setValue(0)
            brightnessValue.setTickInterval(2)
            brightnessValue.setTickPosition(QSlider.TickPosition.TicksBelow)
            brightnessValue.setToolTip("0.0 = ignore this parameter")
            brightnessValue.setFixedWidth(200)
            brightnessValue.setObjectName(getVarName(brightnessValue)[-1])
            brightnessValue.valueChanged.connect(lambda a, i=brightnessValue: self.sliderToolTip(i))
            tab.layout.addWidget(brightnessValue, BRIGHTNESS_ROW, VALUE_COL)

            # Contrast
            contrastLabel = QLabel()
            contrastLabel.setText("Contrast")
            tab.layout.addWidget(contrastLabel, CONTRAST_ROW, LABEL_COL)
            contrastValue = QSlider(Qt.Orientation.Horizontal)
            contrastValue.setMinimum(0)
            contrastValue.setMaximum(100)
            contrastValue.setSingleStep(1)
            contrastValue.setValue(10)
            contrastValue.setTickInterval(20)
            contrastValue.setTickPosition(QSlider.TickPosition.TicksBelow)
            contrastValue.setToolTip("1.0 = ignore this parameter")
            contrastValue.setFixedWidth(200)
            contrastValue.setObjectName(getVarName(contrastValue)[-1])
            contrastValue.valueChanged.connect(lambda a, i=contrastValue: self.sliderToolTip(i))
            tab.layout.addWidget(contrastValue, CONTRAST_ROW, VALUE_COL)

            # Saturation
            saturationLabel = QLabel()
            saturationLabel.setText("Saturation")
            tab.layout.addWidget(saturationLabel, SATURATION_ROW, LABEL_COL)
            saturationValue = QSlider(Qt.Orientation.Horizontal)
            saturationValue.setMinimum(0)
            saturationValue.setMaximum(100)
            saturationValue.setSingleStep(1)
            saturationValue.setValue(10)
            saturationValue.setTickInterval(20)
            saturationValue.setTickPosition(QSlider.TickPosition.TicksBelow)
            saturationValue.setToolTip("1.0 = ignore this parameter")
            saturationValue.setFixedWidth(200)
            saturationValue.setObjectName(getVarName(saturationValue)[-1])
            saturationValue.valueChanged.connect(lambda a, i=saturationValue: self.sliderToolTip(i))
            tab.layout.addWidget(saturationValue, SATURATION_ROW, VALUE_COL)

            # Sharpness
            sharpnessLabel = QLabel()
            sharpnessLabel.setText("Sharpness")
            tab.layout.addWidget(sharpnessLabel, SHARPNESS_ROW, LABEL_COL)
            sharpnessValue = QSlider(Qt.Orientation.Horizontal)
            sharpnessValue.setMinimum(0)
            sharpnessValue.setMaximum(100)
            sharpnessValue.setSingleStep(1)
            sharpnessValue.setValue(10)
            sharpnessValue.setTickInterval(20)
            sharpnessValue.setTickPosition(QSlider.TickPosition.TicksBelow)
            sharpnessValue.setToolTip("1.0 = ignore this parameter")
            sharpnessValue.setFixedWidth(200)
            sharpnessValue.setObjectName(getVarName(sharpnessValue)[-1])
            sharpnessValue.valueChanged.connect(lambda a, i=sharpnessValue: self.sliderToolTip(i))
            tab.layout.addWidget(sharpnessValue, SHARPNESS_ROW, VALUE_COL)

            # Denoise Options
            denoiseLabel = QLabel()
            denoiseLabel.setText("Denoise")
            tab.layout.addWidget(denoiseLabel, DENOISE_ROW, LABEL_COL)
            denoiseOptions  = ["auto", "off", "fast", "high quality"]
            denoiseValue = QComboBox()
            denoiseValue.addItems(denoiseOptions)
            denoiseValue.setCurrentIndex(0)
            denoiseValue.setFixedWidth(200)
            denoiseValue.setObjectName(getVarName(denoiseValue)[-1])
            tab.layout.addWidget(denoiseValue, DENOISE_ROW, VALUE_COL)

            # Autofocus Options
            autofocusModeLabel = QLabel()
            autofocusModeLabel.setText("Autofocus mode")
            tab.layout.addWidget(autofocusModeLabel, AUTOFOCUS_MODE_ROW, LABEL_COL)
            autofocusModeOptions  = ["auto", "manual", "continuous"]
            autofocusModeValue = QComboBox()
            autofocusModeValue.addItems(autofocusModeOptions)
            autofocusModeValue.setCurrentIndex(0)
            autofocusModeValue.setFixedWidth(200)
            autofocusModeValue.setObjectName(getVarName(autofocusModeValue)[-1])
            tab.layout.addWidget(autofocusModeValue, AUTOFOCUS_MODE_ROW, VALUE_COL)

            # Autofocus Options
            autofocusRangeLabel = QLabel()
            autofocusRangeLabel.setText("Autofocus range")
            tab.layout.addWidget(autofocusRangeLabel, AUTOFOCUS_RANGE_ROW, LABEL_COL)
            autofocusRangeOptions  = ["normal", "macro", "full"]
            autofocusRangeValue = QComboBox()
            autofocusRangeValue.addItems(autofocusRangeOptions)
            autofocusRangeValue.setCurrentIndex(0)
            autofocusRangeValue.setFixedWidth(200)
            autofocusRangeValue.setObjectName(getVarName(autofocusRangeValue)[-1])
            tab.layout.addWidget(autofocusRangeValue, AUTOFOCUS_RANGE_ROW, VALUE_COL)

            # Autofocus Options
            autofocusSpeedLabel = QLabel()
            autofocusSpeedLabel.setText("Autofocus speed")
            tab.layout.addWidget(autofocusSpeedLabel, AUTOFOCUS_SPEED_ROW, LABEL_COL)
            autofocusSpeedOptions  = ["normal", "fast"]
            autofocusSpeedValue = QComboBox()
            autofocusSpeedValue.addItems(autofocusSpeedOptions)
            autofocusSpeedValue.setCurrentIndex(0)
            autofocusSpeedValue.setFixedWidth(200)
            autofocusSpeedValue.setObjectName(getVarName(autofocusSpeedValue)[-1])
            tab.layout.addWidget(autofocusSpeedValue, AUTOFOCUS_SPEED_ROW, VALUE_COL)

            # HDR Options
            hdrLabel = QLabel()
            hdrLabel.setText("HDR mode")
            tab.layout.addWidget(hdrLabel, HDR_ROW, LABEL_COL)
            hdrOptions  = ["off", "sensor", "single-exp"]
            hdrValue = QComboBox()
            hdrValue.addItems(hdrOptions)
            hdrValue.setCurrentIndex(0)
            hdrValue.setFixedWidth(200)
            hdrValue.setObjectName(getVarName(hdrValue)[-1])
            tab.layout.addWidget(hdrValue, HDR_ROW, VALUE_COL)

            # Resolution
            resolutionLabel = QLabel()
            resolutionLabel.setText("Resolution")
            tab.layout.addWidget(resolutionLabel, RESOLUTION_ROW, LABEL_COL)
            resolutionValue = QLineEdit()
            resolutionValue.setText("0:0")
            resolutionValue.setFixedWidth(200)
            resolutionValue.setToolTip("0:0 = use default")
            resolutionValue.setObjectName(getVarName(resolutionValue)[-1])
            tab.layout.addWidget(resolutionValue, RESOLUTION_ROW, VALUE_COL)

            # Lens
            lensLabel = QLabel()
            lensLabel.setText("Focus distance [m]")
            tab.layout.addWidget(lensLabel, LENS_ROW, LABEL_COL)
            lensValue = QLineEdit()
            lensValue.setText(str(0))
            lensValue.setFixedWidth(200)
            lensValue.setToolTip("0 = ignore; 0.0 = infinity; default = hyperfocal")
            lensValue.setObjectName(getVarName(lensValue)[-1])
            tab.layout.addWidget(lensValue, LENS_ROW, VALUE_COL)

            # JPEG Quality
            qualityLabel = QLabel()
            qualityLabel.setText("JPEG quality [%]")
            tab.layout.addWidget(qualityLabel, QUALITY_ROW, LABEL_COL)
            qualityValue = QSlider(Qt.Orientation.Horizontal)
            qualityValue.setMinimum(0)
            qualityValue.setMaximum(1000)
            qualityValue.setSingleStep(100)
            qualityValue.setValue(1000)
            qualityValue.setTickInterval(200)
            qualityValue.setTickPosition(QSlider.TickPosition.TicksBelow)
            qualityValue.setToolTip("100 = default")
            qualityValue.setFixedWidth(200)
            qualityValue.setObjectName(getVarName(qualityValue)[-1])
            qualityValue.valueChanged.connect(lambda a, i=qualityValue: self.sliderToolTip(i))
            tab.layout.addWidget(qualityValue, QUALITY_ROW, VALUE_COL)

            sensorLayerLabel = QLabel()
            sensorLayerLabel.setText("Sensor Layer")
            tab.layout.addWidget(sensorLayerLabel, LENS_ROW, LAYER_COL)
            sensordataLayerLabel = QLabel()
            sensordataLayerLabel.setText("Sensor / Data Preparation Layer")
            tab.layout.addWidget(sensordataLayerLabel, HDR_ROW, LAYER_COL)
            dataLayerLabel = QLabel()
            dataLayerLabel.setText("Data Preparation Layer")
            tab.layout.addWidget(dataLayerLabel, METERING_ROW, LAYER_COL)

            tab.setLayout(tab.layout)
            allTabs.append(scrollbar)
        

        # Add all the tabs to parent 
        for i in range(len(cam.cameraInfo)):
            self.tabs.addTab(allTabs[i], cam.cameraInfo[i]['Model'])

        
        self.tabs.resize(self.frameGeometry().width(), self.frameGeometry().height())
        self.setCentralWidget(self.tabs)

        self.setWindowTitle('PICT Image Capturing')

    # Dummy lammbda to be used for slider changes
    def sliderToolTip(self, elem: QWidget):
        value = elem.value() / 10.0
        elem.setToolTip(str(value))

    def parseGUI(self, elem: QWidget, cameraIndex: int):
        cameraProperties = {
            'camera_model': cam.cameraInfo[cameraIndex]['Model'].replace(":", "_")  # Sanitize to avoid ':' in the name
        }
        for child in elem.children():
            if child.objectName() != "":
                if isinstance(child, QLineEdit):    # Iterate over text fields, and later other types
                    cameraProperties[child.objectName()] = child.text()
                if isinstance(child, QCheckBox):
                    cameraProperties[child.objectName()] = 1 if child.checkState().value else 0
                if isinstance(child, QComboBox):
                    cameraProperties[child.objectName()] = child.itemText(child.currentIndex())
                if isinstance(child, QSlider):
                    cameraProperties[child.objectName()] = child.value() / 10.0
                if isinstance(child, QDoubleSpinBox):
                    cameraProperties[child.objectName()] = int(child.value())
        return cameraProperties

    def getPreviewLabel(self, elem: QWidget):
        for child in elem.children():
            if child.objectName() == "previewLabel":
                return child

    def previewButtonPressed(self, elem: QWidget, cameraIndex: int):
        if not os.path.isdir(PREVIEW_FOLDER):
            os.mkdir(PREVIEW_FOLDER)
        if os.path.isfile(PREVIEW_FILENAME):
            os.remove(PREVIEW_FILENAME)
        cameraProperties = self.parseGUI(elem, cameraIndex)
        imagePath = captureImage(True, cameraProperties, cameraIndex)

        pixmap = QPixmap(imagePath)
        obj = self.getPreviewLabel(elem)
        obj.setPixmap(pixmap.scaled(obj.size(), aspectRatioMode=Qt.AspectRatioMode.KeepAspectRatio))

    def measurementButtonPressed(self, elem: QWidget, cameraIndex: int):
        if not os.path.isdir(STORAGE_FOLDER):
            os.mkdir(STORAGE_FOLDER)
        cameraProperties = self.parseGUI(elem, cameraIndex)
        imagePath = captureImage(False, cameraProperties, cameraIndex)

        # Change filename of preview
        pixmap = QPixmap(imagePath + "_.jpg")
        obj = self.getPreviewLabel(elem)
        obj.setPixmap(pixmap.scaled(obj.size(), aspectRatioMode=Qt.AspectRatioMode.KeepAspectRatio))

    def measureAllButtonPressed(self, tabs: list):
        if not os.path.isdir(STORAGE_FOLDER):
            os.mkdir(STORAGE_FOLDER)
        cameraProperties = []

        for i in range(len(tabs)):
            cameraProperties.append(self.parseGUI(tabs[i].findChild(QWidget).findChild(QWidget), i))

        poolSize = len(tabs)
        pool = Pool(poolSize)
        paths = [None] * poolSize
        results = []

        for i in range(len(tabs)):
            result = pool.apply_async(captureImage, (False, cameraProperties[i], i))
            results.append(result)

        for i, result in enumerate(results):
            paths[i] = result.get()

        pool.close()
        pool.join()

        for i in range(len(tabs)):
            pixmap = QPixmap(paths[i] + "_.jpg")
            obj = self.getPreviewLabel(tabs[i].findChild(QWidget).findChild(QWidget))
            obj.setPixmap(pixmap.scaled(obj.size(), aspectRatioMode=Qt.AspectRatioMode.KeepAspectRatio))

def main(sysArgv, configFilePath=''):
    if len(configFilePath) == 0:
        app = QApplication(sysArgv)
        mainWindow = GUI_Main()
        mainWindow.show()
        app.exec()
    else:
        if not os.path.isdir(STORAGE_FOLDER):
            os.mkdir(STORAGE_FOLDER)
        
        configFiles = configFilePath.split(",")
        poolSize = len(configFiles)
        pool = Pool(poolSize)
        paths = [None] * poolSize
        results = []

        for i in range(len(configFiles)):
            jsonConfig = open(configFiles[i])
            config = json.load(jsonConfig)
            result = pool.apply_async(captureImage, (False, config, i))
            results.append(result)

        for i, result in enumerate(results):
            paths[i] = result.get()

        pool.close()
        pool.join()

def listCameras():
    print("Available cameras:")
    for i in range(len(cam.cameraInfo)):
        print("\t" + str(i) + ": " + cam.cameraInfo[i]['Model'])

if __name__ == "__main__":
    try:
        if len(sys.argv) == 2:
            if sys.argv[1] == "--list-cameras":
                listCameras()
            else:
                main(sys.argv, sys.argv[1])
        else:
            main(sys.argv)     

        # Delete preview folder (if existing)
        if os.path.isdir(PREVIEW_FOLDER):
            shutil.rmtree(PREVIEW_FOLDER)
        os.environ["LIBCAMERA_LOG_LEVELS"] = "*:old_level"
    except KeyboardInterrupt:
        pass