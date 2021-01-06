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

# cppaddon (Node.js C++ Addon)
Build instructions
1. node-gyp also needs Visual Studio c++ development workload as it generates C++ vcxproj for the build
2. Need to set python path required for the script npm run build (node-gyp rebuild). Eg: npm config set python "C:\Program Files (x86)\Microsoft Visual Studio\Shared\Python37_64\python.exe". Reference : https://www.npmjs.com/package/node-gyp
3. Run "npm run build" to generate the C++ addon in the build folder.
4. Copy cppaddon.node file from ./build/Release folder to the root folder (folder containing server.js file)
5. Consume it in javascript