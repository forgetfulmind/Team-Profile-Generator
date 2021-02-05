const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, gitHub){
        super(name, id, email)
        this.gitHub = gitHub
        // this.name = name
        // this.id = id
        // this.email = email
        this.role = "Engineer"
    }

    getGithub(){
        return this.gitHub
    }

}
module.exports = Engineer