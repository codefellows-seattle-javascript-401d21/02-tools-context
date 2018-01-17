#### Questions:
1. When this code is run in Node, e.g. `node index.js`, what are the two stages of execution for this file called, and which order do they happen in?

  When this code is ran, first we COMPILE (lines 3-11) then we EXECUTE (lines 13-10).

2. Write an explanation, using as much space as you need, relating to how the first stage of execution for this file operates.
    - For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

    
    In line 3 foo is globally scoped. On the left it is being stated (foo), and on the right foo is being assigned a value ('bar').
    In line 5 the function bar is globally scoped.The function is being stated and bar() is being assigned to it.
    In line 6 foo is globally scoped. the variable is being stated (foo) and baz is being assigned to it.
    In line 8 the function is locally scoped. 
    In lines 10 and 11 the variables are scoped locally.


3. Write an explanation, using as much space as you need, relating to how the second stage of execution for this file operates.
    - For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

    In line 13 the scope is local and is being called within the function baz.
    In lines 16 and 19 the scope is global and the functions are being called outside the functions.
    In lines 17 and 18 the scope is global and the variables are being called outside the functions.


4. During the second stage of execution how many scopes have been registered by the engine?
    - Which segments of the code do they belong to?
    - Please identify any variables/refs and which scope each belongs to?

    Im not sure what this question is asking me.

5. When line 13 invokes the `baz` function, which `foo` will be assigned a value of `bam`? More specifically, `bam` will be assigned to the `foo` in ??? scope. Give a brief description in your own words to support your conclusion.

    It will be assigned to the `foo` in the local scope inside the funstion. The varaviale is declared inside the functiona and `baz` is being called within the function.

6. Which scope, if any, will the variable `bam` on line 11 be registered to when the first stage of execution occurs on this file? Provide a brief description in your own words to support your conclusion.
    
    If by regiesterd you mean assigned then I think it's assigned to the local function. I'm not sure exactly why. This concept is hard for me to grasp.

7. For each line, 16 through 19, what is the return value for each?

    I tried to console log these and I just kept recieveing undefined. I watched the class videos and rewrote the code in case there was errors but I kept recieving errors so I don't know what they return.