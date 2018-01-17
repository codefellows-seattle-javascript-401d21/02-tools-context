Questions:

1. When this code is run in Node, e.g. node index.js, what are the two stages of execution for this file called, and which order do they happen in?

The two stages of code are CREATIIION and EXECUTIIION! Creation stage -> Execution stage...

-----------------

2. Write an explanation, using as much space as you need, relating to how the first stage of execution for this file operates.

So... line 3... the variable foo has global scope and it's declared as a variable... so it creates that in the global execution context object and is initialized with an undefined value.

Line 5 has a function declaration and stores the function as a property that points to its location.

I'm not sure anything else happens here in the creation phase.

I guess uh... also... in the creation phase, it would also determine the value of contextual this... but we don't have that here.

-----------------

3. Write an explanation, using as much space as you need, relating to how the second stage of execution for this file operates.

Line 3, as it executes... it updates foo's value to 'bar'.

Line 5 is a function declaration and does nothing.

Line 16, the function bar is called and it points to line 5 and starts the creation phase in the execution context of bar. The variable foo is added as a property initialized with an undefined value.

Line 8 has a function declaration and stores the function as a property that points to its location.

Then it enters the execution phase and foo's value is updated to 'baz'.

Line 13 calls the function baz and it goes into another creation phase for the execution context of baz. Christ!

I believe at this point, foo is assigned the value 'bam' and bam is assigned the value 'yay' because they are not declared within baz, however... because they're not declared, it goes up the chain looking for where they are declared. Lo, foo is declared 'baz' in the execution context of bar. I think at this point, we might be back in the execution phase already. 'baz' is passed as the argument in the function baz. Then its value is updated to 'bam' and then bam's value is updated to 'yay'.

Line 17 calls foo, which only has a reference in the global execution context now of 'bar'.

Line 18 calls bam whose value is 'yay'.

Line 19 throws a reference error.

-----------------

4. During the second stage of execution how many scopes have been registered by the engine?

Two, I think...

Which segments of the code do they belong to?

The global scope and the scope of bar.

Please identify any variables/refs and which scope each belongs to?

The variable, foo, and the function, bar, are declared globally.

Another variable, foo, and the function, baz, are declared in the scope of the function, bar.

-----------------

5. When line 13 invokes the baz function, which foo will be assigned a value of bam? More specifically, bam will be assigned to the foo in ??? scope. Give a brief description in your own words to support your conclusion.

'baz'...invoking the function, baz, ends the execution phase of the function, bar... the creation phase for baz happens, then in the execution phase, 'baz' is then passed as the argument in baz. I really hate these names. bam is assigned to the foo in the scope of baz.

-----------------

6. Which scope, if any, will the variable bam on line 11 be registered to when the first stage of execution occurs on this file? Provide a brief description in your own words to support your conclusion.

I felt pretty confident that bam isn't touched in the first execution stage. I'm starting to think I learned this stuff incorrectly. My understanding is that the first execution stage happens after the creation phase on the global execution context object.

-----------------

7. For each line, 16 through 19, what is the return value for each?

undefined
'bar'
'yay'
reference error
