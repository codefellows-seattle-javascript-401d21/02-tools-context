![cf](https://i.imgur.com/7v5ASc8.png) 02: Tools and Context
======

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Open a pull request to this repository
* Submit on canvas a question and observation, how long you spent, and a link to your pull request

## Configuration
Configure the root of your repository with the following files and directories. Thoughtfully name and organize any additional configuration or module files.
* **README.md** - contains documentation


## Feature Tasks
#### Scope and Context
Given the code linked [HERE](https://gist.github.com/sjschmidt44/556d31146a2b1ff3be84820e5fc06959), answer the set of questions below. Please copy the questions to your lab directory in a file called `answers.md`.



#### Questions:
1. When this code is run in Node, e.g. `node index.js`, what are the two stages of execution for this file called, and which order do they happen in?
    
    The stages are known as Compilation and Execution and they happen in that order. 


2. Write an explanation, using as much space as you need, relating to how the first stage of execution for this file operates.
    - For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

    The first stage is compilation which is where the Javascript looks through the code to verify it is valid js, as well as declares the scope of the variables (whether they are global or functional).

    Line 3 declares the global variable foo
    Line 5 declares the global function bar()
    Line 6 declares a variable within the scope of function bar()
    Line 7 declares a function within the scope of function bar()
    Lines 10-11 are declarations within function baz()
    Line 13 invokes the function baz() within function bar()
    Lines 16,19 invoke the functions globally
    Lines 17,18 are global declarations

3. Write an explanation, using as much space as you need, relating to how the second stage of execution for this file operates.
    - For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

    The second stage of execution uses the call stack. In class we used the comparisons of starting from the base floor of a building, or from the inside of a nested set of dolls; meaning we take the innermost functions and then work our way outwards.
    Line 3 a declaration of foo is made.
    Skip to line 16 where bar() is invoked
    Line 5 bar is executed
    Line 6 foo is declared to baz
    Skip to line 13 where baz is invoked
    Line 8 baz is inovked with foo = baz
    Line 10 foo is declared as bam
    Line 11 bam is declared for the first time and is assigned the value of yay
    Function baz() is completed so we move back to function bar()
    Function bar() on line 5 is completed and we move back into global scope
    Line 17 a request for the value of foo is made, since we are on a global scope we will first look       for the value of foo globally, since it exists we give it the value we find there. (Note this is     different from the value we got from executing our functions.)



4. During the second stage of execution how many scopes have been registered by the engine?
    - Which segments of the code do they belong to?
    - Please identify any variables/refs and which scope each belongs to?

    There have been three scopes, one global, one within bar(), and one within baz().
    Global: var foo, function bar()
    Bar(): var foo(global and internal), function baz(), 
    Baz(): declarations of foo and bam (access to foo inside bar())

5. When line 13 invokes the `baz` function, which `foo` will be assigned a value of `bam`? More specifically, `bam` will be assigned to the `foo` in ??? scope. Give a brief description in your own words to support your conclusion.

    The foo on line 6 will be changed because it is the closest in scope (scope of the function bar()). The global variable foo would be used if line 6 did not exist since Javascript will look for a variable in the order of its scope. So in this case it did not find foo, so it looked in the scope above it and found it there. If we did not find it in that scope we would've gone one above that (global).
    
6. Which scope, if any, will the variable `bam` on line 11 be registered to when the first stage of execution occurs on this file? Provide a brief description in your own words to support your conclusion.

    Bam will be registered to the global scope. First it will look to the scope within it (bar), when it doesn't find that it will move into the parent scope (baz), then it will move to the global scope. It will not find the variable in the global scope, and since this is the last instance Javascript will declare the variable for us here. 

7. For each line, 16 through 19, what is the return value for each?

    16 will return: (foo: bam, bam: yay)
    17 will return foo: bar
    18 will return bam: yay
    19 Will not execute because bas cannot be reached globally because it is scoped within bar.


