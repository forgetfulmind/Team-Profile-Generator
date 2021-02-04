const Manager = require("../lib/Manager");

describe("Manager class",()=>{
        it("extends Employee class; officeNumber property from variable; super propery role set to Manager",()=>{
            const manager = new Manager ("444-555-6666")
            expect(manager.officeNumber).toEqual("444-555-6666")
            expect(manager.role).toEqual("Manager")
            expect(manager.getRole()).toEqual("Manager")
        })









//close tags for all tests    
})