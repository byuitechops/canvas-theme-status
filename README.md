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

- [Project Capture](./docs/ProjectCapture.md)
- [Key Components](./docs/KeyComponents.md)


## SetUp / How to Install
1. git clone https://github.com/byuitechops/canvas-theme-status
2. cd ./canvas-theme-status
3. npm i

## Important Notes
Before commiting to version control make sure to remove all keys/cookies/usernames/passwords.

## How to Use
There are two different ways to use this tool
1. npm start
2. npm run set-correct

* The first method is the most commonly used method. It creates a PDF used to verify the integrity of the
CSS and JS files.
* The second method used only when the correct pictures need to be updated. This method takes screenshots
of the pages, but saves them to the correct_screenshots folder. No PDF is generated.