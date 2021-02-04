//Manager Questions
let managerQuestions =  [

{
    type: 'input',
    message: `What is your manager's name?`,
    name: 'Name'
},
{
    type: 'input',
    message: `What' is your Manager's Id?`,
    name: `Id`
},
{
    type: 'input',
    message: `What is your Manager's eMail?`,
    name: 'Email'
},
{
    type: 'input',
    message: `What is your Manager's office telephone number?`,
    name: "Phone"
},
{
    type: 'list',
    choices: [
        'Engineer',
        'Intern',
        'Team is complete'
    ],
    message: `Would you like to add another team member?`,
    name: "advanceChoice"
}
]

//Engineer Questions 
let engineerQuestions =  [

    {
        type: 'input',
        message: `What is your Engineer's name?`,
        name: 'Name'
    },
    {
        type: 'input',
        message: `What' is your Engineer's Id?`,
        name: `Id`
    },
    {
        type: 'input',
        message: `What is your Engineer's eMail?`,
        name: 'Email'
    },
    {
        type: 'input',
        message: `What is your Manager's gitHub username?`,
        name: "GitHub"
    },
    {
        type: 'list',
        choices: [
            'Engineer',
            'Intern',
            'Team is complete'
        ],
        message: `Would you like to add another team member?`,
        name: "advanceChoice"
    }
    ]

//Intern Questions 
let internQuestions =  [

    {
        type: 'input',
        message: `What is your Intern's name?`,
        name: 'Name'
    },
    {
        type: 'input',
        message: `What' is your Intern's Id?`,
        name: `Id`
    },
    {
        type: 'input',
        message: `What is your Intern's eMail?`,
        name: 'Email'
    },
    {
        type: 'input',
        message: `What is your Intern's School's Name?`,
        name: "schoolName"
    },
    {
        type: 'list',
        choices: [
            'Engineer',
            'Intern',
            'Team is complete'
        ],
        message: `Would you like to add another team member?`,
        name: "advanceChoice"
    }
    ]




//export question sets
module.exports = internQuestions
module.exports = engineerQuestions
module.exports = managerQuestions