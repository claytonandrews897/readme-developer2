## Readme-Generator

# The Challenge:
Create an effective command-line runned application that in-takes a users input inorder to dynamically generate a professional README.md file that will have a clean, minimal and visually appealing format.

# User Story
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional 
README for a new project

# Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

# Usage Instructions
Open the cloned repository in a source code editor e.g. Visual Studio Code.
Open integrated terminal on index.js
Enter “node index.js” in the command line
Presented with npm inquirer questions through sequential order within the directory - the user must provide essential README information in order to proceed to the next question in sequence.
Once completed a file named (Generated)README.md will be made.
At your discretion, you may rename the (Generated)README.md file to the file name of your choice.
(Optional) Regarding future use, you may alter the prompted questions within the index.js and generatedMarkdown.js to suit your needs.
(Optional) The (Generated)README.md file serves as a foundation so you are not limited to altering the file - once generated you may alter the document to your preferences just like any other README.md file.

# Sources
I had found a source within Github user mattyd96 in which I copied his json files and looked over his generated application