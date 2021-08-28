const index = require("./index")
// @ponicode
describe("index.GetUserRepo", () => {
    test("0", () => {
        let callFunction = () => {
            index.GetUserRepo("user-name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.GetUserRepo("user_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.GetUserRepo("username")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.GetUserRepo("user123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.GetUserRepo(123)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.GetUserRepo(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
