# Overview
One HTML file and at least one JS file that it refers to.

- HTML:
	- has a div in the body called "calendar". May need more scripts like CSS. Those can be linked to locally or online.
- JS:
	- import the library.
	- make... object that comes from document getElementId('calendar').
	- create calendar object with that object as the parameter and specify options.

## Problem: JS doesn't show up on HTML!
- **Learn how to import modules locally!**
	- dsfd
- If the error says, "require not defined", then the library involves CommonJS somewhere and it should be converted to ES using Browserify. Or requirejs... if you're willing to edit the structure of any CommonJS file involved.
- Error: loading module blocked because of disallowed mime type
	- Solution: [link](https://stackoverflow.com/questions/59925804/blocked-because-of-a-disallowed-mime-type-text-html-angular-8-deployed-on)
	- In your html file, you didn't use ./ to refer to the script file. Must use this even when in the same directory.
- Error: [SyntaxError: import declarations may only appear at top level of a module](https://stackoverflow.com/questions/42237388/syntaxerror-import-declarations-may-only-appear-at-top-level-of-a-module)
	- 1. enable dom.moduleScripts.enabled in about:config
		2. specify `type="module` in your html file script link.
		3. import files in JS must start with `./`. Yup, this is for any file reference.