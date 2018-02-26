

## Questions:

### Question 1. When this code is run in Node, e.g. `node index.js`, what are the two stages of execution for this file called, and which order do they happen in?
##### Answer:
The two steps Creation Stage and Activation/Code Execution Stage and they happen in that order.

### Question 2. Write an explanation, using as much space as you need, relating to how the first stage of execution for this file operates. For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.
##### Answer:
<!-- The Creation Stage creates the Scope Chain, then create the variables, functions and arguments.
This phase just allocates space for all your vars and puts the functions together for use.
That provides the hoisting. -->
The Creation Stage initializes the Scope Chain. Creates the variables and creates the arguments object, checks the context for parameters. Scans the context for function declarations (for each function found, creates a property in the variable object that is the exact function name, which has a reference pointer to the function in memory. If the function name already exists, the reference value will be overwritten). Scan the context for variable declarations( for each variable declaration found, creates a property in the variable object that is the variable name, and initialize the value as undefined. If the variable name already exists in the variable object, does nothing and continues scanning.) Then determines the value of `this` inside the context.

### Question 3. Write an explanation, using as much space as you need, relating to how the second stage of execution for this file operates. For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.
#### Answer:
<!-- Activation/Code Execution Stage. This part that actually goes through the script from top to bottom and runs each line chronologically  (skipping functions unless they are being invoked) -->
Activation/Code Execution Stage:
It runs/interprets the function code in the context and assigns variable values as the code is executed line by line.

### Question 4. During the second stage of execution how many scopes have been registered by the engine? Which segments of the code do they belong to? Please identify any variables/refs and which scope each belongs to?
##### Answer:
During the Creation Stage:
line 1 is initialized `use strict`
line 8 is compiled allocating but not assigning the var `bam` to global space and well as `foo` to the local space.
line 5 is compiled allocating but not assigning foo to the local namespace.

During the Activation/Code Execution Stage:
1) var `foo` is assigned to the global namespace (not in the local var foo though) with the value of a reference pointer to the `bar` function
2) the `bar` function is invoked assigning the local var `foo` with the value of a reference pointer to the function `baz`
3) `baz` is invoked within the `bar` function
4)`foo` if now assigned locally with the value of `bam`
5)`bam` is assigned globally because there is no variable declaration
6)`foo` is now invoked which at the time invoked the `bar` method again and repeats steps 2-5.
7)`bam` is invoked and displays the return value: `yay`
8)`baz` is invoked, repeating steps 3-5

### Question 5. When line 13 invokes the `baz` function, which `foo` will be assigned a value of `bam`? More specifically, `bam` will be assigned to the `foo` in ??? scope. Give a brief description in your own words to support your conclusion.
##### Answer:
The local Scope of `foo` will be assigned because the parameter is given when the baz function is called.

### Question 6. Which scope, if any, will the variable `bam` on line 11 be registered to when the first stage of execution occurs on this file? Provide a brief description in your own words to support your conclusion.
##### Answer:
`bam` is assigned globally because there is no variable declaration.

### Question 7. For each line, 16 through 19, what is the return value for each?
##### Answers:
line 16 will return `undefined`
line 17 will return `bar`
line 18 will return `yay`
line 19 will return `Uncaught ReferenceError: `baz` is not defined`



<!-- foo -->
