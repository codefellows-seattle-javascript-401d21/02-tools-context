![cf](https://i.imgur.com/7v5ASc8.png) 02: Tools and Context
======

### Answers:
1. When this code is run in Node, e.g. `node index.js`, what are the two stages of execution for this file called, and which order do they happen in?

_Compilation and execution, in that order._

2. Write an explanation, using as much space as you need, relating to how the first stage of execution for this file operates.
    - For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.
    
    Compile
    
        compiler finds var declaration, foo, in global scope

            global scope registers foo

        compiler finds function declaration, bar(), in global scope

            global scope registers bar()

        compiler finds var declaration, foo, in bar() scope

            bar() scope registers foo

        compiler finds function declaration, baz(), in bar() scope

            compiler finds var declaration, foo, in baz() scope

                baz() scope registers foo


3. Write an explanation, using as much space as you need, relating to how the second stage of execution for this file operates.
    - For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

    Execute

        line 3: execution finds reference to var foo, and requests it from global scope 

            global scope has it, gives it to execution to assign
        
        line 16: execution finds reference to function bar, and requests it from global scope
        
            global scope has it, gives it to execution to execute
        
                line 6: execution finds reference to var foo in bar scope

                    bar scope has it, gives it to execution to assign
        
                line 13: execution finds a reference to function baz in bar scope

                    bar scope has it, gives it to execution to execute

                        line 10: execution finds a reference to var foo in baz scope

                            baz has it, gives it to execution for assignment

                        line 11: execution finds a reference to var bam in baz scope
                        
                            baz doesn't have it
                          
                execution checks if var bam exists in bar scope
                    
                    bar doesn't have it
            
        execution checks if var bam exists in global scope

            global doesn't have it and --

                -- will create it if no "strict mode"

                -- will throw an error if in "strict mode"
        
        line 17: execution finds a reference to var foo in global scope
        
            global scope has it, gives it to execution, it returns 'bar'
        
        line 18: execution finds a reference to var bam in global scope
        
            if not in "strict mode", global has it, gives it to execution, it returns 'yay'
        
        line 19: execution finds a reference to function baz() in global scope

            global scope doesn't have it, throws a reference error

          

4. During the second stage of execution how many scopes have been registered by the engine?
    - Which segments of the code do they belong to?
    - Please identify any variables/refs and which scope each belongs to?

    SCOPES, fn()s, vars
        
        GLOBAL

            foo
        
            bam [when not in "strict mode"]
        
            bar() [BAR]
        
                foo
        
                baz() [BAZ]
        
                    foo
                      
5. When line 13 invokes the `baz` function, which `foo` will be assigned a value of `bam`? More specifically, `bam` will be assigned to the `foo` in ??? scope. Give a brief description in your own words to support your conclusion.

    `bam` will be assigned to the `foo` in `baz` scope. This is because foo is defined as a parameter of the function `baz`, so this is a new var by the same name as the `global` (and `bar`) scope var.

6. Which scope, if any, will the variable `bam` on line 11 be registered to when the first stage of execution occurs on this file? Provide a brief description in your own words to support your conclusion.

    If not in `'strict mode'`, bam will be assigned to `global` scope. This is because it is not declared with `var`, `const`, or `let`, so the execution will trace it all the way back to `global`, which also won't have it. `Global` will register it then. 

7. For each line, 16 through 19, what is the return value for each?

    `bar();` returns `undefined`
    `foo;` returns `bar`
    `bam;` returns `yay` (when not in `'strict mode'`)
    `baz();` returns a reference error, as it's outside of `bar` scope