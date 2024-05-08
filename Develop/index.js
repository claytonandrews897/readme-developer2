// Packages needed for this application //
//local js in utils
const createReadme = require('./utils/generateReadme');
const getGithubFile = require('./utils/generateLicense');
// External packages
const inquirer = require("inquirer");
const async = require("async");
//node native packages
const fs = require('fs')
//  Array of questions for user input
const questions = [
    {
      type: "input",
      name: "title",
      message: "Please name your Project.",
    },
    {
      type: "editor",
      name: "description",
      message: "Please describe the purpose and functionality of this project.",
    },
    
    {
      type: "editor",
      name: "installation",
      message: "Please provide the instructions to install your project"
    },
    {
      type: "input",
      name: "usage",
      message:
        "State how you use the app",
    },
    {
      type: "editor",
      name: "Tests",
      message: "Please provide test instructions for your deployed application."
    },
    {
      type: "list",
      name: "license",
      message: "Please select a license applicable to this project.",
      choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },
    {
      type: "input",
      name: "require",
      message: "List any project dependencies here.",
    },
    {
      type: "input",
      name: "features",
      message: "List some cool features about this project here.",
    },

    {
      type: "input",
      name: "creator",
      message: "Write your GitHub username.",
    },
    {
      type: "input",
      name: "email",
      message: "Provide a valid email address.",
    },
    {
      type: "editor",
      name: "contributors",
      message: "Please list any contributors. (Use GitHub usernames)",
      default: "",
    },
    {
      type: "editor",
      name: "test",
      message: "Provide walkthrough of required tests if applicable.",
    },
    {
      type: 'list',
      name: 'licenseDoc',
      message: 'Do you want a license document? ',
      choices: ['Yes', 'No']
    },
  ];
  

// The function to write README file
const writeReadmeDoc = (fileName, data) => {
    const text = createReadme(data);
    fs.writeFile(filename, text, (err) =>
      err ? console.error(err) : console.log('Commit logged')
    );

const writeLicenseDoc = async (fileName, data) => {
    const text =await getGithubFile(data.license);
      fs.writeFile(fileName, text.data.body , (err) =>
        err ? console.error(err) : console.log('License created')
    );
} ;
//INIT
const init = () => {
  letfolder = './Documents';
  if (!fs.existSync(folder)) {
    fs.mkdir(folder, (err) => {
      if (err) {
        console.log("failed to create folder");
        return;
      };
    });
  }
  
  //ask questions
  inquirer.prompt(questions).then((response => {
    //Writes readme
    writeReadmeDoc(folder = '/README.md, reponse')
    //Writes license file
    if(response.licenseDoc === 'Yes'){
      writeLicenseDoc(folder + '/License.md', respose);
      }
    })
  )};

// Function call to initialize app
init();