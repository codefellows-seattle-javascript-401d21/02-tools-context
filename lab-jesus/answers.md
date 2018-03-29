1. When this code is run in Node, e.g. node index.js, what are the two stages of execution for this file called, and which order do they happen in?
    a. The code is first 'compiled' then it is 'executed';


2. Write an explanation, using as much space as you need, relating to how the first stage of execution for this file operates. For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

a.  the JS engine sees that the code in this document should be read with the 'use strict' rules.
b.  Creates a variable named 'foo' and assigns a string with a value of bar in global scope
c.  the JS engine sees that the string 'bar' is assigned to the variable bar
d.  a function is defined that is called bar
e.  a string 'baz' is assigned to the var foo within the scope of the bar function
d.  function baz() is called 
f.  calls the function bar
g.  foo declared and scoped globaly
h.  bam declared and scoped within the function of baz, so its undefined.
i.  baz() - calls the function baz but since its scoped within the bar function it will return an undefined           function error.


3. Write an explanation, using as much space as you need, relating to how the second stage of execution for this file operates.

First, 'use strict' sets a strict mode to run the script. foo is assigned to bar and called at the bottom of the body by foo. Then bar is called which executes the function bar. Then bar() is executed and it calls the function baz(). Then baz is executed.

4. During the second stage of execution how many scopes have been registered by the engine? Which segments of the code do they belong to? Please identify any variables/refs and which scope each belongs to?

In the second stage of execution there are 3 scopes registered by the engine.
global - foo / bam
bar() - foo() / baz()
baz() - foo = 'bam'

5. When line 13 invokes the baz function, which foo will be assigned a value of bam? More specifically, bam will be assigned to the foo in ??? scope. Give a brief description in your own words to support your conclusion.
Foo will be assigned a value of bam within the baz function. It is scoped inside the function baz. This is because foo is passed through as an argument in baz.

6. Which scope, if any, will the variable bam on line 11 be registered to when the first stage of execution occurs on this file? Provide a brief description in your own words to support your conclusion.
The variable on line 11 is scoped globally because it is not passed through as an argument.

7. For each line, 16 through 19, what is the return value for each?
bar();  <-- Calls the function bar
foo;  <-- This variable is scoped globally, therefore foo is bar.
bam;  <-- This variable bam is scoped within the function scope of baz, therefore is undefined.
baz();  <-- Attempts to call the function baz, but since it is scoped within the function bar it will throw an error.