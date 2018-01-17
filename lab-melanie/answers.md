#### Questions:
1. When this code is run in Node, e.g. `node index.js`, what are the two stages of execution for this file called, and which order do they happen in?

#### Answer
The two stages are create and activation. The create stage occurs first, this is when scope, variables, functions and arguments are created. The create stage also determines the value of "this". The activation stage happens next, this assigns values, references to functions, and interprets/executes the code.

2. Write an explanation, using as much space as you need, relating to how the first stage of execution for this file operates.
    - For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

#### Answer
Create Stage:
* Line 3: creates foo variable with global scope
* Line 5: creates bar function
* Line 8: creates baz function with foo argument within scope of bar function
* Line 11: creates bam variable within scope of baz function

3. Write an explanation, using as much space as you need, relating to how the second stage of execution for this file operates.
    - For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

#### Answer
Activation Stage:
* Line 3: assigns the value 'bar' to foo variable **NOTE** 'bar' is a string, not a reference to the function bar
* Line 16: executes bar function
* Line 6: assigns the value 'baz' to foo variable in within scope of bar function
* Line 13: executes baz function
* Line 10: reassigns foo with value 'bam' within scope of baz function
* Line 11: assigns bam variable with value 'yay'
* Line 17: restates foo variable which will return value 'bar' if console logged since this is the global scope value
* Line 18: restates bam variable which will return value 'yay'
* Line 19: throws a reference error due to the baz function not being interpreted and executed outside the scope of the far function. It also does not pass in an argument


4. During the second stage of execution how many scopes have been registered by the engine?
    - Which segments of the code do they belong to?
    - Please identify any variables/refs and which scope each belongs to?

5. When line 13 invokes the `baz` function, which `foo` will be assigned a value of `bam`? More specifically, `bam` will be assigned to the `foo` in ??? scope. Give a brief description in your own words to support your conclusion.

6. Which scope, if any, will the variable `bam` on line 11 be registered to when the first stage of execution occurs on this file? Provide a brief description in your own words to support your conclusion.

7. For each line, 16 through 19, what is the return value for each?
