const questions = [
  {
    // Name
    type: 'input',
    message: 'Please enter your FULL name',
    name: 'name',
    validate: function(name) {
      let pass = name.match(/^[a-zA-Z\s]+$/g);
      if (pass && name.trim().split(' ').length >= 2) {
        return true;
      }

      return 'Please enter a valid FULL name.';
    },
  },
  {
    // ID
    type: 'input',
    message: 'Please enter your Employee ID',
    name: 'id',
    validate: function(id) {
      let pass = id.match(/^[0-9a-zA-Z]+$/g);
      if (pass) {
        return true;
      }

      return 'Please enter a valid ID.';
    },
  },
  {
    // Email
    type: 'input',
    message: 'Please enter your email',
    name: 'email',
    validate: function(email) {
      let pass = email.match(/\S+@\S+\.\S+/g);
      if (pass) {
        return true;
      }

      return 'Please enter a valid email.';
    },
  },
  {
    // Roll
    type: 'list',
    message: 'Please select a roll',
    name: 'roll',
    choices: [
      {
        name: 'Manager',
        value: 'Manager',
      },
      {
        name: 'Engineer',
        value: 'Engineer',
      },
      {
        name: 'Intern',
        value: 'Intern',
      },
    ],
  },
  {
    // Only Prompt when answer to roll is Manager
    type: 'input',
    name: 'officeNumber',
    message: 'Please enter your Office Number',
    when: function(answers) {
      return answers.roll === 'Manager';
    },
    validate: function(officeNumber) {
      let pass = officeNumber.match(/^[0-9]+$/g);
      if (Pass) {
        return true;
      }

      return 'Please enter a valid Office Number.';
    },
  },
  {
    // Only Prompt when answer to roll is Engineer
    type: 'input',
    name: 'githubUser',
    message: 'Please enter your Github Username',
    when: function(answers) {
      return answers.roll === 'Engineer';
    },
    validate: function(githubUser) {
      if (githubUser) {
        return true;
      }

      return 'Please enter your Github Username.';
    },
  },
  {
    // Only Prompt when answer to roll is Intern
    type: 'input',
    name: 'school',
    message: 'Please enter your School Name',
    when: function(answers) {
      return answers.roll === 'Intern';
    },
    validate: function(school) {
      if (school) {
        return true;
      }

      return 'Please enter your School Name.';
    },
  },
  
];

module.exports = questions;