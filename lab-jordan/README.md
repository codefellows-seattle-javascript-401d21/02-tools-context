## 1. When this code is run in Node, e.g. node index.js, what are the two stages of execution for this file called, and which order do they happen in?

First is the compilation phase, where all of the elements of the file are reserved spaces in memory and given scope. Second is the execution phase, where the code is looked over again to execute actions.

## 2. Write an explanation, using as much space as you need, relating to how the first stage of execution for this file operates.

* On line 3, the variable foo is declared within the global scope.
* On line 5, the function bar is declared within the global scope.
* On line 6, the variable foo is declared within the scope of the function bar.
* On line 8, the function baz is declared within the scope of the function bar.
* On line 8 again, the identifier foo is declared within the scope of the function baz.
* Everything else is passed over.

## 3. Write an explanation, using as much space as you need, relating to how the second stage of execution for this file operates.

* On line 3, the global scope is looking for a reference called foo. It is able to find foo within the global scope, and makes an assignment.
* Lines 4 - 15 are skipped for now.
* On line 16, the global scope is looking for a reference called bar. It is able to find bar within the global scope, and begins running the function.
* On line 6, the scope of bar is looking for a reference called foo. It is able to find foo within the scope of bar, and makes an assignment.
* Lines 7 - 9 are skipped for now.
* On line 13, the scope of bar is looking for a reference called baz. It is able to find baz within the scope of bar, and begins running the function.
* On line 10, the scope of baz is looking for a reference called foo. It is able to find foo within the scope of baz, and makes an assignment.
* On line 11, the scope of baz is looking for a reference called bam. It is unable to find bam within the scope of baz. It then looks through the scope of bar for a reference called bam, and is unable to find it. It then looks through the global scope for a reference called bam, and is unable to find it, so it makes a declaration within the global scope and then makes an assignment.
* On line 17, the global scope is looking for a reference called foo. It is able to find foo within the global scope, and sees that its value is 'bar'.
* On line 18, the global scope is looking for a reference called baz. It is able to find baz within the global scope, and sees that its value is 'yay'.
* On line 19, the global scope is looking for a reference called baz. It is unable to find baz within the global scope, and returns a reference error.

## 4. During the second stage of execution how many scopes have been registered by the engine?
There are three scopes registered to the engine:

#### global (lines 1 - 5, 14 - 19)
* foo (variable)
* bar (function)
* bam (variable)

#### bar (lines 6 - 8, 12 - 13)
* foo (variable)
* baz (function)

#### baz (lines 9 - 11)
* foo (variable)

## 5. When line 13 invokes the baz function, which foo will be assigned a value of bam? More specifically, bam will be assigned to the foo in ??? scope. Give a brief description in your own words to support your conclusion.

Within the baz function, we are within the baz level of scope. Therefore, it is the foo within the baz scope that will be assigned 'bam'. This foo only exists within baz, just as the foo with the value of 'baz' only exists in the scope of bar, and the foo with the value of 'bar' only exists in the global scope.

## 6. Which scope, if any, will the variable bam on line 11 be registered to when the first stage of execution occurs on this file? Provide a brief description in your own words to support your conclusion.

The variable bam is registered within the global scope. When the code tries to directly use it in an assignment at line 11, it is not registered a scope during the compilation phase. So, during the execution phase, the scope of baz tries to find it and fails. Then the scope of bar tries to find it and fails. Then the global scope tries to find it and fails. But in JavaScript, the global scope is then told to make a reference for it anyway, so bam ends up inside of the global scope.

## 7. For each line, 16 through 19, what is the return value for each?

* bar() returns undefined, because it is a function with no return value.
* foo returns 'bar'.
* bam returns 'yay'.
* baz() returns a reference error, because it is not in the global scope.
