#### Questions:
1. When this code is run in Node, e.g. `node index.js`, what are the two stages of execution for this file called, and which order do they happen in?

-- First, compilation stage, second, execution stage.


2. Write an explanation, using as much space as you need, relating to how the first stage of execution for this file operates.
    - For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

-- During compilation stage: In this stage, it only declares all identifiers to look them up later.
* Global scope:
    1. Line 3 is a declaration for variable foo. In global scope, foo is stored.
    2. Line 5 is a declaration for function bar. In global scope, bar is stored.
* Scope of function bar
    3. Line 6 is another declaration for variable foo. In scope of function bar, foo is stored but this foo is different from foo in global scope.
    4. Line 8 is a declaration for function baz. In scope of function bar, baz is stored.
* Scope of function baz
    5. Line 8, foo is passed to baz so it declares variable foo. This is different foo from two other foo that have been declared. In scope of function baz, foo is stored and this is different from the other foo that have been declared.


3. Write an explanation, using as much space as you need, relating to how the second stage of execution for this file operates.
    - For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

-- During execution stage: In this stage, it actually runs code and while running it looks up all identifiers and defines all identifiers.
* Global scope:
    1. Line 3 checks if foo has been declared. Foo is in global scope so it assigns value 'bar' to it.
    2. Line 16 calls function bar.
* Scope of function bar
    3. Line 6 checks if foo has been declared and it is so assigns value 'baz' to it.
    4. Line 13 calls function baz.
* Scope of function baz
    5. Line 10 checks if foo has been declared and it is so assigns value 'bam' to it.
    6. Line 11 checks if bam has been declared and it isn't in the current scope so it looks up in scope of funciton bar and still it's not declared. It looks up in global scope, and it's not there so it throws a Reference error. This terminates the program.


4. During the second stage of execution how many scopes have been registered by the engine?
    - Which segments of the code do they belong to?
    - Please identify any variables/refs and which scope each belongs to?

-- Three scopes.
    
- 1. Global scope: Line 3, 5, 6, 14, 16, 17, 18, 19; foo, bar    
- 2. Scope of function bar: Line 6 - 13 (except 'foo' passed into function baz); foo, baz
- 3. Scope of funcion baz: Line 10, 11, the 'foo' in line 13; foo

5. When line 13 invokes the `baz` function, which `foo` will be assigned a value of `bam`? More specifically, `bam` will be assigned to the `foo` in ??? scope. Give a brief description in your own words to support your conclusion.

-- Variable 'foo' has been declared in scope of function baz (which is the scope of the time line 13 was invoked) so this foo will be assigned a value 'bam'. To clarify, this foo is not the other 'foo's that have been declared in scope of function bar and global scope.

6. Which scope, if any, will the variable `bam` on line 11 be registered to when the first stage of execution occurs on this file? Provide a brief description in your own words to support your conclusion.

-- Variable 'bam' will never be registered in any scope because there is no declaration for bam with key like var, let, const.

7. For each line, 16 through 19, what is the return value for each?

-- Since Line 16 throws an Reference error, none of them will be executed so they return nothing.

