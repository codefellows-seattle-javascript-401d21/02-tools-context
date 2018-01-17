#### Questions:
1. When this code is run in Node, e.g. `node index.js`, what are the two stages of execution for this file called, and which order do they happen in?

The two stages of execution are the COMPILATION and EXECUTION stages. Compliation comes first, and once completed, the javascript interpreter runs the execution stage.

2. Write an explanation, using as much space as you need, relating to how the first stage of execution for this file operates.
    - For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

In the compilation stage, the javascript interpreter 'reviews' the entire file and uses a special "activation"  object, which contains the variables, the arguments of functions, determines the scope of all those variables, and determines the contextual "this" of the different objects. From what I've been reading, it does NOT assign VALUES to declarations - it only notes that a declaration happened. It's kind of like being diligent and actually reading all the Ikea cabinet instructions before picking up an allen wrench; you know what your tools are, you know how things go together, you know the context of what you're about to do step-by-step, but you haven't actually physically built anything.

So, in this file, "foo" is declared as a variable and given global scope, then  "bar" is declared as a function with global scope, then "baz" is declared as a function with scope of function "bar", then a LOCAL variable "foo" is declared that is scoped to bar(), then finally "bam" is declared with global scope (although it will break code in strict mode).

3. Write an explanation, using as much space as you need, relating to how the second stage of execution for this file operates.
    - For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

In the execution stage, as the name suggests, the script is run. Values are now assigned to declarations and the code 'runs' as we understand it. "foo" receives the value "bar", then the function "bar" runs, where the value of LOCAL variable "foo", scoped to bar(), is set to "baz", then function "baz" runs and results in an error that breaks this code - as we're using 'use strict', we can't declare a global variable inside a scope - in this case, function "baz". If we weren't using strict mode, the code would continue until the final line, when now the final line, invoking baz(); would cause a fatal error, as it is scoped inside bar().

4. During the second stage of execution how many scopes have been registered by the engine?
    - Which segments of the code do they belong to?
    - Please identify any variables/refs and which scope each belongs to?

    There are three scopes: global, function bar() which runs from ln 5-14, and function baz() which runs from ln 8-12.

    Variable foo ON LINE 3 is globally scoped
    Function bar() is globally scoped
    Variable foo ON LINE 6 is locally scoped to bar()
    Function baz is scoped to bar()
    Variable bam is scoped to baz() (but as mentioned above, in strict mode this declaration breaks the code as it's an attempt to globally scope a variable inside a scoped function)

5. When line 13 invokes the `baz` function, which `foo` will be assigned a value of `bam`? More specifically, `bam` will be assigned to the `foo` in ??? scope. Give a brief description in your own words to support your conclusion.

'bam' will be assigned to the LOCALLY SCOPED variable 'foo' declared on ln 6, as local scope overrides global scope.

6. Which scope, if any, will the variable `bam` on line 11 be registered to when the first stage of execution occurs on this file? Provide a brief description in your own words to support your conclusion.

As written, due to strict mode, 'bam' on ln 11 will not be assigned a scope. Instead, it will throw an error that breaks the code, since we're attempting to declare it globally from within a local (function baz()) scope.

7. For each line, 16 through 19, what is the return value for each?

This is hard to answer - the code breaks due to the issue explained in Q6, but if we ignored that global scope attempt, as I think you're asking:

bar(); on ln 16 will execute fine, but won't return anything, as the code block simply redefines variables.
foo; on ln 17 will return "bar", since we're in global scope, and it was defined in that scope on ln 3 and hasn't been overwritten.
bam; on ln 18 will be a reference error as written, as we can't declare a global variable from within local scope in strict mode. If strict mode were OFF, this would return "yay".
baz(); on ln 19 returns a reference error, as this function is locally scoped to bar() but we're attempting to run it from the global scope.
