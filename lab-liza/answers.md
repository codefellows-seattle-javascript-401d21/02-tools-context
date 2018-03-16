1. When this code is run in Node, e.g. node index.js, what are the two stages of execution for this file called, and which order do they happen in?
The two stages of execution are called compile phase and execute phase. The compile phase occurs first, then the execute phase. Compile works from the top down, while execute looks for assignments or function calls.

2. Write an explanation, using as much space as you need, relating to how the first stage of execution for this file operates. For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

'use strict' <-- Insuring that this JS code will be executed in strict mode. // Declaring use strict, strict mode, at the beginning of the script will make it easier for the the dev to write secure JS. Strict mode protects the global scope, by throwing an error making it impossible to create a global variable.

var foo = 'bar'; <-- Creates a variable named 'foo' and assigns a string with a value of bar. // The var foo is a container storing data - 'bar'. Scoped globally.

function bar() { <-- Creates a function named bar. // A function block in JS is designed to perform a given task.
  var foo = 'baz'; <-- Creates a variable named 'foo' and assigns a string with a value of bar. // The var foo is a container storing data - 'bar'. Scoped locally (function scope).

  function baz(foo) { <-- Creates a function named baz and passes 'foo' in as an argument. // A function block in JS is designed to perform a given task. The foo passed in is function scope.

    foo = 'bam';  <-- Variable named foo that assigns foo to a string valued of 'bam'. // This variable contains the stored string data - 'bam'. It is scoped to function baz.
    bam = 'yay';  <-- Variable named bam that assigns bam to a string value of 'yay'.// This variable contains the stored string data. It is scoped globally. However, since use strict is executed, it will throw a ReferenceError.
  }
  baz();  <-- Calls the function baz. // Invokes the function.
}

bar();  <-- Calls the function bar. // Invokes the function.
foo;  <-- This variable foo is the foo that is scoped globally, therefore foo is bar! foo bar!
bam;  <-- This variable bam is scoped within the function scope of baz, therefore is undefined.
baz();  <-- Attempts to call the function baz, but since it is scoped within the function bar it will throw an error.


3. Write an explanation, using as much space as you need, relating to how the second stage of execution for this file operates.
First, use strict is declared and used throughout the script. Variable foo is assigned to bar and called at the bottom of the bode by foo; Next, bar() is called which executes the function bar. When bar function is executed it calls the function baz with baz(); Lastly, baz is executed.

4. During the second stage of execution how many scopes have been registered by the engine? Which segments of the code do they belong to? Please identify any variables/refs and which scope each belongs to?
During the second stage of execution there are three scopes registered by the engine.
var foo = 'bar' is scoped globally
var foo = 'baz is scoped within the function bar
function baz is scoped within the function bar
foo = 'bam' is scoped within the function baz
bam = 'yay' is scoped globally

5. When line 13 invokes the baz function, which foo will be assigned a value of bam? More specifically, bam will be assigned to the foo in ??? scope. Give a brief description in your own words to support your conclusion.
Foo will be assigned a value of bam within the baz function. It is scoped inside the function baz. This is because foo is passed through as an argument in baz.

6. Which scope, if any, will the variable bam on line 11 be registered to when the first stage of execution occurs on this file? Provide a brief description in your own words to support your conclusion.
The variable on line 11 is scoped globally because it is not passed through as an argument.

7. For each line, 16 through 19, what is the return value for each?
bar();  <-- Calls the function bar
foo;  <-- This variable is scoped globally, therefore foo is bar.
bam;  <-- This variable bam is scoped within the function scope of baz, therefore is undefined.
baz();  <-- Attempts to call the function baz, but since it is scoped within the function bar it will throw an error.