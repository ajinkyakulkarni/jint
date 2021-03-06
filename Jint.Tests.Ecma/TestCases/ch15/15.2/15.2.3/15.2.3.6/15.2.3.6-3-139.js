/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-3-139.js
 * @description Object.defineProperty - 'Attributes' is a Function object which implements its own [[Get]] method to access the 'value' property  (8.10.5 step 5.a)
 */


function testcase() {
        var obj = { };

        var funObj = function (a, b) {
            return a + b;
        };

        funObj.value = "Function";

        Object.defineProperty(obj, "property", funObj);

        return obj.property === "Function";
    }
runTestCase(testcase);
