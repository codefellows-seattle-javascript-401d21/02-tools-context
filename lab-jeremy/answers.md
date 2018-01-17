#When this code is run in Node, e.g. node index.js, what are the two stages of execution for this file called, and which order do they happen in?
#Compilation phase and the runtime phase.  Compilation phase runs first then the runtime phase happens.

Write an explanation, using as much space as you need, relating to how the first stage of execution for this file operates.
The compilation phase happens first, allocating (but not assigning) all variable spaces, compiling all the functions and performing what is known as "hoisting", also checking for syntax errors before the runtime phase is even ran. Once finished, the runtime phase starts, then running the code.

#Write an explanation, using as much space as you need, relating to how the second stage of execution for this file operates.

Compilation phase:
1.) the functions are compiled beginning with the inner most function (baz) and working it's way to the outter function (bar);
2.) all variables are allocated, but not assigned while doing this.
3.) while running through the code to check for hoisting compilations, javascript checks for syntax errors

Runtime phase:
4.) javascript assigns global variables outside of functions and executes called functions chronologically.

#During the second stage of execution how many scopes have been registered by the engine?

Compilation phase:
NOTE: SYNTAX ERRORS ARE CHECKED WHILE RUNNING COMPILATION
1.) use strict is initiated.
2.) baz is compiled, allocating (but not assigning) the variable bam to the global namespace while doing so, as well as foo to the local namespace
3.) bar is compiled, allocating (but not assigning) foo to the local namespace.

Runtime phase:
4.) variable foo is assigned to the global namespace (not to be confused with local var foo) with the value of a reference pointer to the bar helper function
5.) the helper function bar is invoked, assigning the local variable foo with a value of a reference pointer to the helper function baz
6.) baz is then invoked within the bar helper function
7.) 'foo' is then assigned locally with the value of 'bam' (because of the parameter reference)
8.) bam is then assigned globally because of the sloppy code (no variable declaration, so global namespace assignment is assumed)
9.) foo is invoked, thus envoking the bar helper method again and repeating steps 5-8.
10.) bam is invoked, displaying it's return value 'yay'
11.) baz is invoked, repeating steps 6-8

Note: Technically because of use strict, none of this would work because you cannot have sloppy code that allows javascript to assume global namespace assignment.

#When line 13 invokes the baz function, which foo will be assigned a value of bam? More specifically, bam will be assigned to the foo in ??? scope. Give a brief description in your own words to support your conclusion.

The LOCAL scope of foo will be assigned the value of 'bam' because of the parameter foo given when calling the baz helper function (thus implying it will be a locally scoped variable)

#Which scope, if any, will the variable bam on line 11 be registered to when the first stage of execution occurs on this file? Provide a brief description in your own words to support your conclusion.

bam is assigned globally because of the sloppy code (no variable declaration, so global namespace assignment is assumed)


#For each line, 16 through 19, what is the return value for each?
16 - return value undefined (none)
17 -return value undefined (none)
18 - return value of 'yay'
19 - return value undefined (none)
