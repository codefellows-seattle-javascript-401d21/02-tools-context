When this code is run in Node, e.g. node index.js, what are the two stages of execution for this file called, and which order do they happen in?


*answer:*
The two stages of execution are called creation and activation. creation happens first and then the activation stage does the evaluation.

Write an explanation, using as much space as you need, relating to how the first stage of execution for this file operates.

For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

*answer:*
the first stage of execution for this file is the creation where foo and bar are created/invoked as a variable
and a function.

Write an explanation, using as much space as you need, relating to how the second stage of execution for this file operates.

For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

*answer:*
starting at line 3: the variable 'foo' is invoked. line 5: the function 'bar' is created in which 'foo' will be reassigned to 'baz' when it is invoked, then the 'baz' function is created, taking one parameter (foo). Within the baz function, foo is reassigned to 'bam' and a new variable is not perfectly assigned to the string 'yay'. After this baz function is written within the bar function, baz is immediately called. on line 16, the 'bar' function is called. on line 17, the foo variable is referenced, evaluating to 'bar'. on line 18, bam is referenced but will return an error since it is incorrectly assigned. baz(); on line 19 will return undefined since it is not in the same scope as where it is called.

During the second stage of execution how many scopes have been registered by the engine?

Which segments of the code do they belong to?
Please identify any variables/refs and which scope each belongs to?

*answer:*
Three scopes have been registered by the engine: the global scope, the scope referencing everything within the bar function, then the scope referencing everything within the baz function.

When line 13 invokes the baz function, which foo will be assigned a value of bam? More specifically, bam will be assigned to the foo in ??? scope. Give a brief description in your own words to support your conclusion.

*answer:*
the foo declared on line six. bam will be assigned to the foo at the baz function scope, since it is contained within and nowhere else in the code.


Which scope, if any, will the variable bam on line 11 be registered to when the first stage of execution occurs on this file? Provide a brief description in your own words to support your conclusion.

For each line, 16 through 19, what is the return value for each?

*answer:*
on line 16, the 'bar' function is called. on line 17, the foo variable is referenced, evaluating to 'bar'. on line 18, bam is referenced but will return an error since it is incorrectly assigned. baz(); on line 19 will return undefined since it is not in the same scope as where it is called.
