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

// Use inquirer to gather information about the development team members and create objects for each team member (using the correct classes as blueprints!)

// inquirer
//   .prompt(questions)
//   .then(answers => {
//     console.log(JSON.stringify(answers, null, '\t'));
//   })
//   .catch(err => {
//     console.log(err);
//   })

let employees = [];
let manager, engineer, intern;

//Use async ... await
async function init() {
	// try ... catch block
	try {
		const answers = await inquirer.prompt(questions);

		const { name, id, email, roll } = answers;

		// employees.push(answers);

		switch (roll) {
			case 'Manager':
				manager = new Manager(name, id, email, answers.officeNumber);
				employees.push(manager);
				break;
			case 'Engineer':
				engineer = new Engineer(name, id, email, answers.github);
				employees.push(engineer);
				break;
			case 'Intern':
				intern = new Intern(name, id, email, answers.school);
				employees.push(intern);
		}

		console.log(employees);

    if (answers.isAdding) init();
    
    
    
	} catch (err) {
		console.log(err);
	}
}

init();
// After the user has input all employees desired, call the `render` function (required above) and pass in an array containing all employee objects; the `render` function will generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML returned from the `render` function. Now write it to a file named `team.html` in the `output` folder. You can use the variable `outputPath` above target this location.

// Hint: you may need to check if the `output` folder exists and create it if it does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different information; write your code to ask different questions via inquirer depending on employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer, and Intern classes should all extend from a class named Employee; see the directions for further information. Be sure to test out each class and verify it generates an object with the correct structure and methods. This structure will be crucial in order for the provided `render` function to work! ```
