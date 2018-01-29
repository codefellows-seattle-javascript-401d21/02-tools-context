#1 When this code is run in Node, e.g. node index.js, what are the two stages of execution for this file called, and which order do they happen in?

If I am not mistaken, Scott covered this in lecture and used the words compliation and execution. Where compilation runs through the code for readable syntax. Then executes the callbacks.


#2 Write an explanation, using as much space as you need, relating to how the first stage of execution for this file operates. 

first the variale foo is read and attatched a value 'bar'. No syntax error there so on to the next. 
A function 'bar' is being read as an anonymous function, an object method with a variable foo which equals 'baz'. This 'read first' process continues all the way down to line 13. From line 13 and on, if no critical errors have broken the code, the functions will then  begin to execute in orderly fashion. 

-because baz is undefined, it breaks the code. 

#3 Write an explanation, using as much space as you need, relating to how the second stage of execution for this file operates.

the second stage is the execution. In this case, 
bar();
foo;
bam;
baz();
these specific callacks, all nested within each other, cancel eachother out and makes the last call, baz(); the top priority call back. This breaks the entire code and retuns: 
ReferenceError: bam is not defined
    at eval:16:1
    at eval
    at new Promise.

#ANSWER 03
I ran each code canceling out the others to see what the return is. 
    bar(); is returned as undefined because it doesnt have any paramaters being passed as arguments to be defined. but when bar; is called, its entire function is returned because it has content within the function but not the perenthesis.
    foo; is returned as 'bar' becaue its passed in as an argument and given a new value.
    bam; is returned as 'yay'
    baz(); is returned as undefined because it doesnt have arguments or content.

#4 During the second stage of execution how many scopes have been registered by the engine?
#(A) Which segments of the code do they belong to?
#Answer A
there are 4 scopes the within the given code.

#(B) Please identify any variables/refs and which scope each belongs to?
#Answer B
the first is a global scope, var foo = 'bar';
the 2nd is a global scope, function bar()
the 3rd scope is a nested function within the first function, only allowing it's content to be used and modified within its parent function bar()
the 4th scope, and most inner scope, function baz(foo), which is a nested function within the global function.
Last you have baz() which has a local scope level which has relations to both the other functions


#5 When line 13 invokes the baz function, which foo will be assigned a value of bam? More specifically, bam will be assigned to the foo in ??? scope. Give a brief description in your own words to support your conclusion.
#Anser
by the time baz is executed, foo will have the value of 'bam' exause the parented scope, function bar(), hasn't been completley compliled before execution. So at that given moment, function baz(foo) has been complied and executed giving foo the value of 'bam'

#6 Which scope, if any, will the variable bam on line 11 be registered to when the first stage of execution occurs on this file? Provide a brief description in your own words to support your conclusion.
#ANSWER
In the first level of execution, compile, it is reading bam as one single scope until line 13 where the first stage of execution is being complete.
At the moment of line 11, I believe it is just being compiled since neither function is complete at line 11.

#7 For each line, 16 through 19, what is the return value for each?
    bar(); is returned as undefined
    foo; is returned as 'bar'
    bam; is returned as 'yay'
    baz(); is returned as undefined