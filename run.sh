#!/bin/bash

# Install dependencies
clasp login
clasp create --rootDir .

# Run the codebase
clasp push
clasp run registerSheetToCalendar
clasp run testRegisterSheetToCalendar
clasp run testGetRegisteredData
