function generateMarkdown(answer, data) {


  let draftToC = `## Table of Contents`;

  if (answer.installation !== '') { draftToC += `
  * [Installation](#installation)` };

  if (answer.usage !== '') { draftToC += `
  * [Usage](#usage)` };

  if (answer.contributing !== '') { draftToC += `
  * [Contributing](#contributing)` };

  if (answer.tests !== '') { draftToC += `
  * [Tests](#tests)` };


  
  let draftMarkdown = 
  `# ${answer.title}
  
  ## Description 
  
  
  
  ${answer.description}

  `

  
  draftMarkdown += draftToC;
 

  draftMarkdown += `
  `;
  

  
  if (answer.installation !== '') {
  
  draftMarkdown +=
  `
  
  ## Installation
  
  
  
  ${answer.installation}`
  };
  

  
  if (answer.usage !== '') {
  
  draftMarkdown +=
  
  `
  
  ## Usage 
  

  
  ${answer.usage}`
  };
  
  
 
  if (answer.contributing !== '') {

  draftMarkdown +=
    
  `
  
  ## Contributing
  
  
  
  ${answer.contributing}`
  };
  


  if (answer.tests !== '') {
  
  draftMarkdown +=
  `
  
  ## Tests
  

  
  ${answer.tests}`
  };



  draftMarkdown +=
  `
  
  ## License
  
  ${answer.license}
  `;


 
  let draftDev = 
  `
  ## Questions?
  
  
  `;


  if (answer.email !== null) {
  
  draftDev +=
  `

  Email: ${answer.email}

  `};

 
  draftMarkdown += draftDev;

  
  return draftMarkdown;
  
}

export default generateMarkdown
