const Intern = require("../lib/Intern")

describe("Intern class",()=>{
        it("extends Employee class; school property from variable; super propery role set to Intern",()=>{
            const intern = new Intern("school")
            expect(intern.school).toEqual("school")
            expect(intern.role).toEqual("Intern")
            expect(intern.getRole()).toEqual("Intern")
        })

        describe("getSchool", ()=>{
            const intern = new Intern("school")
            expect(intern.getSchool()).toEqual("school")
        })

















  //closing tags for all tests  
})