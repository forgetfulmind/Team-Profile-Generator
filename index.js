const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
//const questions = require('./src/questions')
const managerQuestions = require('./src/questions')
const engineerQuestions = require('./src/questions')
const internQuestions = require('./src/questions')

let employees = [];


function makeManager(){
    inquirer
    .prompt(managerQuestions)
    .then((response)=>{
        //if team is complete 
        if (response.advanceChoice === 'Team is complete'){
            //construct manager and push to employees array  
            const manager = new Manager(response.Name, response.Id, response.Email, response.Phone)
            employees.push(manager)
            //create HTML page with employees array 
        }else if(response.advanceChoice === 'Engineer'){
            const manager = new Manager(response.Name, response.Id, response.Email, response.Phone)
            employees.push(manager)
            makeEngineer()
        }else if(response.advanceChoice === 'Intern'){
            const manager = new Manager(response.Name, response.Id, response.Email, response.Phone)
            employees.push(manager)
            makeIntern()
        }
    })
}

function makeEngineer(){
    inquirer
    .prompt(engineerQuestions)
    .then((response)=>{
        //if team is complete 
        if (response.advanceChoice === 'Team is complete'){
            //construct manager and push to employees array  
            const engineer = new Engineer(response.Name, response.Id, response.Email, response.gitHub)
            employees.push(engineer)
            //create HTML page with employees array 
        }else if(response.advanceChoice === 'Engineer'){
            const engineer = new Engineer(response.Name, response.Id, response.Email, response.gitHub)
            employees.push(engineer)
            makeEngineer()
        }else if(response.advanceChoice === 'Intern'){
            const engineer = new Engineer(response.Name, response.Id, response.Email, response.gitHub)
            employees.push(engineer)
            makeIntern()
        }
    })
}

function makeIntern(){
    inquirer
    .prompt(internQuestions)
    .then((response)=>{
        //if team is complete 
        if (response.advanceChoice === 'Team is complete'){
            //construct manager and push to employees array  
            const intern = new Intern(response.Name, response.Id, response.Email, response.schoolName)
            employees.push(intern)
            //create HTML page with employees array 
        }else if(response.advanceChoice === 'Engineer'){
            const intern = new Intern(response.Name, response.Id, response.Email, response.schoolName)
            employees.push(intern)
            makeEngineer()
        }else if(response.advanceChoice === 'Intern'){
            const intern = new Intern(response.Name, response.Id, response.Email, response.schoolName)
            employees.push(intern)
            makeIntern()
        }
    })
}



console.log("Welcome to Team Profile Generator. Let's start with your team Manager")
makeManager()
.then(console.log(employees))
