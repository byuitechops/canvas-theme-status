# Canvas Theme Status

## Description
The Canvas Theme Status tool's purpose is to create a PDF that contains screenshots of
different pages that use different CSS and JS features. These screenshots are used to verify
if the CSS and JS are working on the pages.

The tool achieves this by using Pupeteer to login to Canvas, navigate to each page, complete specific
page instructions(I.E click a button), and take a screenshot. After all the screenshots have been taken
the tool users PDFkit to create a timestamped PDF. This PDF is used to verify the integrity of the CSS
and JS features. 

## Links to Other Docs

- [Project Capture](./docs/01_ProjectCaptureDoc.md)
- [Key Components](./docs/02_KeyComponentsDoc.md)


## SetUp / How to Install
### Globally
1. npm i -g https://github.com/byuitechops/canvas-theme-status
2. Create an auth.json file in the globally installed folder, structure it exactly like this: {username: '', password: ''}
### Locally
1. git clone https://github.com/byuitechops/canvas-theme-status
2. cd ./canvas-theme-status
3. npm i
4. Create an auth.json file, structure it exactly like this: {username: '', password: ''}

## Important Notes
Before commiting to version control make sure to remove all keys/cookies/usernames/passwords.

## How to Use
### Globally
There are two different ways to use this tool globally
1. validate-canvas-theme-status
2. validate-canvas-test-theme-status
* The first method is the most commonly used method. It creates a PDF used to verify the integrity of the
CSS and JS files.
* The second method does the exact same thing as the first, but it runs the validation script on the canvas
test account.
### Locally
There are two different ways to use this tool locally
1. npm start
2. npm run set-correct
* The first method is the most commonly used method. It creates a PDF used to verify the integrity of the
CSS and JS files.
* The second method used only when the correct pictures need to be updated. This method takes screenshots
of the pages, but saves them to the correct_screenshots folder. No PDF is generated.