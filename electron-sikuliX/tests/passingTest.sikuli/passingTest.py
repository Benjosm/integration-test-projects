# tests/passingTest.sikuli/passingTest.py

# SikuliX uses Jython by default. This script is run in the Sikuli environment.
# Make sure you have the images you need in this .sikuli folder.

import time

# Basic SikuliX functions:
# - find("image.png"): finds an image on screen
# - click("image.png"): clicks on the center of the found image
# - wait("image.png", 10): wait up to 10 seconds for an image
# - type("some text"): types text using the keyboard

# 1) Wait a moment to allow the Electron app to start
time.sleep(3)

# 2) Let's assume we want to see "Hello World!" text in a certain region.
#    Typically you'd have a screenshot named "helloText.png" in this folder,
#    capturing the "Hello World!" portion of the window.

if exists("helloText.png"):
    print("Found 'Hello World!' text on screen")
else:
    print("Could not find the 'Hello World!' text image")
    exit(1)

print("SikuliX test completed successfully.")
