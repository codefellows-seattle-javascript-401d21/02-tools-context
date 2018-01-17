
1. When this code is run in Node, e.g. `node index.js`, what are the two stages of execution for this file called, and which order do they happen in?

Answer: The two stages are  1. Creation stage - this is where all of the variable are assigned
                            2. Activation stage - this is where the the code is executed, and the values are assigned to      the variables.

2. Write an explanation, using as much space as you need, relating to how the first stage of execution for this file operates.
    - For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

  Answer: line3: compiler reserves space for the global variable 'foo' and is expecting a string values
          line5: declares a function 'bar'
          line6: declares a local variable 'foo'  scoped only to Fn bar
          line8: declares a function 'baz' with variable/parmeter of 'foo'
          line10: declares a global variable foo
          line11: declares a global variable 'bam'
          line13: function call for 'baz' nothing done at this stage of execution
          line16: function call for 'bar' nothing done at this stage of execution
          line17: checks to see if variable 'foo' exists
          line18: checks to see if variable 'bar' exists
          line19: function call for 'baz' but nothing done at this stage of execution


3. Write an explanation, using as much space as you need, relating to how the second stage of execution for this file operates.
    - For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

    Answer: line3: compiler assigns the value of 'bar' to var foo.
            line16: invokes function bar, this will cause the value of foo to change to 'baz'. It will also call the Fn baz on line 13, this will change the global value of 'foo' to be assigned 'bam' on line 10. global variable bam on line 11 will cause the code to break because we are using strict and we cannot declare global variable like this. This will prevent the rest of the code from running.
            if we removed the 'use strict' constraint the code would break on line 19 because you cannot call Fn baz because it is declared inside Fn bar and it is only accessible from inside of Fn bar.


4. During the second stage of execution how many scopes have been registered by the engine?

    answer: there are 3 scopes

    - Which segments of the code do they belong to?

    answer: global, foo and baz

    - Please identify any variables/refs and which scope each belongs to?

    answer: var foo line 3 global scoped
            var foo line 6 local scope to Fn 'foo'
            var foo line 10 local scope to Fn 'baz'
            var bam line 11 global scope


5. When line 13 invokes the `baz` function, which `foo` will be assigned a value of `bam`? More specifically, `bam` will be assigned to the `foo` in ??? scope. Give a brief description in your own words to support your conclusion.

answer: 'bam' will be assigned to var/arg/parameter foo in the local scope of Fn baz.

6. Which scope, if any, will the variable `bam` on line 11 be registered to when the first stage of execution occurs on this file? Provide a brief description in your own words to support your conclusion.

answer: in the first stage of execution bam will only be reserved in the global scope. It will not have a value assigned to it yet.

7. For each line, 16 through 19, what is the return value for each?
answer: line 16: bar will not have a value because the Fn does not 'return' a value.
        line 17: foo; returns the value of 'bar' because that is the value assigned in the global scope on line 3.
        line 18: bam; returns the value of 'yay' because when it is assigned inside of Fn baz it is assigned as a global variable.
        line 19; returns the value of error, Fn baz can only be called from inside of Fn bar.
