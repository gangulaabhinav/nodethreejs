# nodethreejs
Sample Node and Three.js app

# General Coding Guidelines
1. Try to avoid using hex color names wherever possible. Try to use [Color Names](https://htmlcolorcodes.com/color-names/)
2. Using single quotes (') by default for strings and not double quotes (")

# JavaScript Coding Guidelines
1. Using ['use strict'](https://www.w3schools.com/js/js_strict.asp)
2. Avoding semi colon (;) wherever not necessary
3. Using const and let instead of var for variables

# Pug Coding Guidelines
1. Avoid writing long scripts in pug. Move it to a separate js file.

# CSS Coding Guidelines

# Additional Dependency for C++ Addon
Need to set python path required for the script npm run build (node-gyp rebuild)
Eg: npm config set python "C:\Program Files (x86)\Microsoft Visual Studio\Shared\Python37_64\python.exe"
node-gyp also needs Visual Studio c++ development workload as it generates C++ vcxproj for the build