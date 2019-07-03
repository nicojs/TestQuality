import { expect, assert, should } from "chai";
import { HelpMeJesusTo } from "../src/lol";
const DESCRIBE = "Describe "
const IT = "It Should "
describe((DESCRIBE+"lol"),()=>{
    it(IT+"duck duck",(done)=>{
        
        expect(HelpMeJesusTo("keep Mia's Soul")).equal("P")

        done()
    })
})