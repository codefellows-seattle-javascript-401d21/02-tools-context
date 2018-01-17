#1.
When this code is run in Node, e.g. node index.js, what are the two stages of execution for this file called, and which order do they happen in?

#1 - A:
it does its first pass to defines the scopes and variables, after that it then runs it again to execute the code.

#2.
Write an explanation, using as much space as you need, relating to how the first stage of execution for this file operates.

For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

#2 - A:
line 3 creates a variable and calls it 'foo' and sets the scope to global
line 5 creates a function called 'bar'
line 6 creates a variable and calls it 'foo' and sets the scope to the function 'bar'
line 8 creates a function called 'baz'
line 11 creates a variable called 'bam' and sets the scope to the function 'baz'.

#3.
Write an explanation, using as much space as you need, relating to how the second stage of execution for this file operates.

For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

#3 - A:
line 3 sets the variable foo to equal to 'bar'
line 16 invokes the function bar() which then sends us to line 5
line 5 runs the function bar();
line 6 sets the variable foo is equal to 'bar'
line 8 runs the function baz() with the argument 'foo' which gets defined on line 6
line 10 sets the variable 'foo' is equal to 'bam'
line 11 sets the variable 'bam  is equal to 'yay'
line 13 invokes the function baz().
line 17 displays the text of 'bar' since it was set globally on line 3
line 18 displays the test of 'yay' since it was set on line 11 when function baz() was ran.
line 19 will invokes the function baz() which is undefined since its inside of the function bar().

#4.
During the second stage of execution how many scopes have been registered by the engine?

Which segments of the code do they belong to?
Please identify any variables/refs and which scope each belongs to?

#4 - A:
there is 3 levels of scopes: global, function bar scope, and function baz scopes
line 3 belong to global level
line 6, 10, 11 belongs to function bar level
line 10 and 11 belongs to the function baz level.

#5.
When line 13 invokes the baz function, which foo will be assigned a value of bam? More specifically, bam will be assigned to the foo in ??? scope. Give a brief description in your own words to support your conclusion.

#5 - A:
it is referring to the foo on line 10. this is in the function baz level scope.  this never gets pushed up to the other levels of the bar function or global.

#6.
Which scope, if any, will the variable bam on line 11 be registered to when the first stage of execution occurs on this file? Provide a brief description in your own words to support your conclusion.

#6 - A:
on the first execution it will creates the bam variable and set it to the function baz level. i think? lol

#7.
For each line, 16 through 19, what is the return value for each?

#7 - A:
line 16: undefined
line 17: will return "bar"
line 18: will return "yay"
line 19: ReferenceError --- baz is not defined since its inside of bar function
