const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const fs = require('fs')
let {managerQuestions, engineerQuestions, internQuestions} = require('./src/questions')
// const managerQuestions = require('./src/questions')
// const engineerQuestions = require('./src/questions')
// const internQuestions = require('./src/questions')

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
            combineModules();
            //makePage();
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
            combineModules();
            //makePage();
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
            combineModules();
            //makePage();
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
//makeEngineer()
//.then(console.log(employees))


//write to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 
        (err)=>
            err? console.log(err): console.log('Success!'))

}

function makePage(){
let page= []   
for (let i=0; i<employees.length; i++){
switch(employees[i].role){
    case "Manager":
        page.push(`
        <div class="block">
        <div class="row block-header">${employees[i].name}</div>
        <hr />
        <div class="row">
          <div class="info col-md-9 col-sm-12 col-12">
                <div class="projectTitle"><strong>${employees[i].role}</strong></div>
                <div>Employee id:</div><div class= "textContent">${employees[i].id}</div>
                <div>eMail:</div><div class= "textContent">${employees[i].email}</div>
                <div>Office Number:</div><div class= "textContent">${employees[i].officeNumber}</div>
          </div>
        </div>   
        </div>
       <hr/>   
      `)
        break;
    case "Engineer":
        page.push(`
        <div class="block">
        <div class="row block-header">${employees[i].name}</div>
        <hr />
        <div class="row">
          <div class="info col-md-9 col-sm-12 col-12">
                <div class="projectTitle"><strong>${employees[i].role}</strong></div>
                <div>Employee id:</div><div class= "textContent">${employees[i].id}</div>
                <div>eMail:</div><div class= "textContent">${employees[i].email}</div>
                <div>gitHub:</div><div class= "textContent"><a href="https://github.com/${employees[i].gitHub}">${employees[i].gitHub}</a></div>
        </div>   
        </div>
        </div>
       <hr/>   
      `)
        break;
    case "Intern":
        page.push(`
        <div class="block">
        <div class="row block-header">${employees[i].name}</div>
        <hr />
        <div class="row">
          <div class="info col-md-9 col-sm-12 col-12">
                <div class="projectTitle"><strong>${employees[i].role}</strong></div>
                <div>Employee id:</div><div class= "textContent">${employees[i].id}</div>
                <div>eMail:</div><div class= "textContent">${employees[i].email}</div>
                <div>School:</div><div class= "textContent">${employees[i].school}</div>        
        </div>   
        </div>
        </div>
       <hr/>   
      `)
        break;
    }
}

return page.join('') 
}


function combineModules(squid){
    console.log(employees)
    writeToFile(`./dist/index.html`, 
    `<!DOCTYPE html>
    <html lang="en-us">
    
    <head>
    
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="icon" type="image/png" href="./assets/imgs/bee.png"/>
    
      <title>Team Builder</title>
    
      <!-- Boostrap Stylesheet -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
     
      <!-- Our own CSS stylesheet -->
      <link rel="stylesheet" href="./styles.css" media="screen">
    
     <!-- Google Font  -->
     <link rel="preconnect" href="https://fonts.gstatic.com">
     <link href="https://fonts.googleapis.com/css2?family=Tangerine&family=Texturina:wght@100&display=swap" rel="stylesheet">
     <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    </head>
    
    <body>
    <div class="wrap">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container col-12">
          <!-- Brand and toggle get grouped for better mobile display -->
          <a class="navbar-brand" href="index.html" id="logo">Team Builder</a>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
      </nav>
      <!-- End of navbar -->

      <!-- Start of container -->
      <div>
              ${makePage()}
     </div>
    </div>
    <!-- End of container -->
    
      <!-- Start of footer -->
      <footer class="footer">
        <div class="two-toned-footer-color"></div>
        <p class="text-muted-footer text-center">
          &copy; Copyright 2021
        </p>
      </footer>
      <!-- End of footer -->
    
      <!-- jQuery CDN -->
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    
      <!-- Bootstrap CDN -->
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    
    </body>
    
    </html>

    `

    )

}
