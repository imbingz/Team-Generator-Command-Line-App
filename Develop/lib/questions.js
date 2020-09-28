const questions = [
	// Roll
	{
		type: 'list',
		message: 'Please select the employee\'s roll in your team',
		name: 'roll',
		choices: ['Manager', 'Engineer', 'Intern'],
	},
	// Employee Name
	{
		type: 'input',
		message: 'Enter the employee\'s FULL name',
		name: 'name',
		validate: name => {
			let pass = name.match(/^[a-zA-Z]+ [a-zA-Z]+$/g);
			if (pass) {
				return true;
			}

			return 'Please enter a valid FULL name.';
		},
	},
	// ID
	{
		type: 'input',
		message: 'Enter the employee\'s ID',
		name: 'id',
		validate: id => {
			let pass = id.match(/^[0-9a-zA-Z]+$/g);
			if (pass) {
				return true;
			}

			return 'Please enter a valid ID.';
		},
	},
	// Email
	{
		type: 'input',
		message: 'Enter the employee\'s email',
		name: 'email',
		validate: email => {
			let pass = email.match(/\S+@\S+\.\S+/g);
			if (pass) {
				return true;
			}

			return 'Please enter a valid email.';
		},
	},
	// Only Prompt when answer to roll is Manager
	{
		type: 'input',
		name: 'officeNumber',
		message: 'Please enter the Manager\'s Office Number',
		when: answers => {
			return answers.roll === 'Manager';
		},
		validate: officeNumber => {
			let pass = officeNumber.match(/^[0-9]+$/g);
			if (pass) {
				return true;
			}

			return 'Please enter a valid Office Number.';
		},
	},
	// Only Prompt when answer to roll is Engineer
	{
		type: 'input',
		name: 'github',
		message: 'Please enter the Engineer\'s Github Username',
		when: answers => {
			return answers.roll === 'Engineer';
		},
		validate: github => {
			if (github) {
				return true;
			}

			return 'Please enter the Engineer\'s Github Username.';
		},
	},
	// Only Prompt when answer to roll is Intern
	{
		type: 'input',
		name: 'school',
		message: 'Please enter the Intern\'s School Name',
		when: answers => {
			return answers.roll === 'Intern';
		},
		validate: school => {
			if (school) {
				return true;
			}
			return 'Please enter the Intern\'s School Name.';
		},
  },
  //Check whether to add more employee
  {
    type: 'confirm',
    name: 'isAdding',
    message: 'Would you like to add another team member?',
    deault:true
  }
];

module.exports = questions;
