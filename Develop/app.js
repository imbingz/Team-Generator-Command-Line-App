//Import files and modules

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const render = require('./lib/htmlRenderer');
const questions = require('./lib/questions');

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

//Set output team.html path
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

let employees = [];

//Use async ... await
async function init() {
	// try ... catch block
	try {
		const answers = await inquirer.prompt(questions);

                const { name, id, email, roll } = answers;

    		//Check employee's roll and create correspending class instance
		switch (roll) {
			case 'Manager':
				let manager = new Manager(name, id, email, answers.officeNumber);
				employees.push(manager);
				break;
			case 'Engineer':
				let engineer = new Engineer(name, id, email, answers.github);
				employees.push(engineer);
				break;
			case 'Intern':
				let intern = new Intern(name, id, email, answers.school);
				employees.push(intern);
		}

    		//Prompt the questions again when adding team member is chosen
   		if (answers.isAdding) init();
    
   		 //Call renderOutput function
    		renderOutput();

	} catch (err) {
		console.log(err);
	}
}

//Render team.html
function renderOutput() {
  //Create dir output if it does not exist
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR);
  // Write team.html file 
  const teamHTML = fs.writeFileSync(outputPath, render(employees), (err) => {
     if (err) throw err;
  } )
}

//Start prompting questions
init();


