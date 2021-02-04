const Engineer = require("../lib/Engineer")

describe("Engineer class",()=>{
    it("extends Employee class; gitHub property from variable; super property role set to Engineer",()=>{
        const engineer = new Engineer("gitHub")
        expect(engineer.gitHub).toEqual("gitHub")
        expect(engineer.getRole()).toEqual("Engineer")
    })

    describe("getGithub",()=>{
        const engineer = new Engineer("gitHub")
        expect(engineer.getGithub()).toEqual("gitHub")

    })
 















  //closing tags for all tests  
})