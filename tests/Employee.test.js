const Employee = require("../lib/Employee")


describe("Employee class", ()=>{
    it("creates an object; assigns name, id, email variables; role property of Employee", ()=>{
        const employee = new Employee ("name", "id", "email")
        expect(employee.name).toEqual("name")
        expect(employee.id).toEqual("id")
        expect(employee.email).toEqual("email")
        expect(employee.role).toEqual("Employee")
    })

    describe("getName", ()=>{
        const employee = new Employee ("name", "id", "email")
        expect(employee.getName()).toEqual("name")
    })

    describe("getId", ()=>{
        const employee = new Employee ("name", "id", "email")
        expect(employee.getId()).toEqual("id")
    })

    describe("getEmail", ()=>{
        const employee = new Employee ("name", "id", "email")
        expect(employee.getEmail()).toEqual("email")
    })
    
    describe("getRole", ()=>{
        const employee = new Employee ("name", "id", "email")
        expect(employee.getRole()).toEqual("Employee")
    })



//close tags for all tests
})