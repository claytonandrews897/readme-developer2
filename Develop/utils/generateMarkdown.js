// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
      return "";
  }

  switch (license) {
      case "MIT License":
          return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      case "Apache License 2.0":
          return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      case "GNU General Puplic License v3.0":
          return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      case "Mozilla Public License 2.0":
          return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      default:
          return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'No license') {
    return '';
  } else {
    return '  - [License](#license)';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'No license') {
    return '';
  } else {
    return `The license this project is covered by is ${license}.`;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
${renderLicenseLink(answers.license)}
  - [Badges](#badges)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Description
  
  ${answers.description}
  
  ## Installation
  
  ${answers.installation}

  ## Usage

  ${answers.usage}
  
  ## License

  ${renderLicenseSection(answers.license)}
  
  ## Badges
  
  ${renderLicenseBadge(answers.license)}
  
  ## How to Contribute

  ${answers.contribution}
  
  ## Tests

  ${answers.test}

  ## Questions

  Contact me on GitHub if you have any questions! My contact details are below:

  GitHub username: ${answers.username}

  Email: ${answers.email}
  
`;
};

module.exports = generateMarkdown;