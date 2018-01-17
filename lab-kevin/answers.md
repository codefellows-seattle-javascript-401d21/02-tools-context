# Answers - 02: Tools and Context

## Questions and Responses

### 1. When this code is run in Node, e.g. node index.js, what are the two stages of execution for this file called, and which order do they happen in?

  - The two steps of execution that occur when a javascript file is run are 'creation' and 'activation', also known as 'code execution'.  The 'creation' stage takes place before the code is run in the 'activation' stage.


### 2. Write an explanation, using as much space as you need, relating to how the first stage of execution for this file operates.

  #### For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

  In the 'creation' phase, the javascript engine creates the variable object, which also contains the argument object, and compiles the scope chain.  At this stage declared variables get added to the variable object as a property with a value of undefined and function declarations get assigned as a property with a pointer to the function stored in the heap memory. 

- line 1:  This line indicates that the javascript engine is to interpret the code with in strict mode which creates a more secure runtime environment and semantics that will make it easier to adopt future changes to ecmascript. This changes how the code is evaluated at this stage. 

- line 3:  The variable foo is added to the variable object with an undefined value, with global scope  with in this script.

- line 5:  bar is defined in the variable object with a pointer to the function stored in heap memory.  There is nothing to store in the arguments object for this function.  The scope of this function is global in this script. 

- line 6 - 14:  Theses lines are ignored for now because they are inside the function declaration.
  
- line 16 - 19: These lines do not contain declarations so they are ignored at this time.


### 3. Write an explanation, using as much space as you need, relating to how the second stage of execution for this file operates.

  #### For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

  In the 'code execution' phase, the javascript engine will evaluate the variables adding the values to the variable object, and run the code.

  - line 1:  This line indicates that the javascript engine is to interpret the code with in strict mode which creates a more secure runtime environment and semantics that will make it easier to adopt future changes to ecmascript. This changes how the code is evaluated and executed. 

  - line 3:  The variable foo is assigned the value of 'bar' in the variable object with global scope within this script.

  - line 5 - 14:  These lines are a function declaration of bar.  These lines are skipped.

  - line 16:  The function bar is invoked. bar has a pointer to its function in the heap memory.  
  
  Time to enter the creation phase for bar.

  - line 6:  The variable foo is defined in the variable object with a value of undefined within the scope of the function bar.

  - line 8:  baz is defined in the variable object with a pointer to the function stored in heap memory.  The parameter foo is defined in the argument object in the scope of baz.

  - line 9 - 11:  Theses lines are ignored for now because they are inside the function declaration.

  - Line 13: baz() is an invocation not a declaration so it is ignored at this time.

  Time to run the code for function  bar

  - Line 6:  The variable foo is assigned the value of 'baz' in the variable object in scope of the function bar;

  - Line 8 - 12: These lines are a function declaration of bar.  These lines are skipped.

  - line 13: The function baz is invoked. baz has a pointer to its function in the heap memory.  
      
  Time to enter the creation phase for baz.

  - lines 10 - 11: These lines are skipped because they are not declarations.

  Time to run the code for function baz

  - line 10: the variable foo is assigned the value of 'bam' in the variable object within the scope of baz.

  - line 11: The variable bam has not been declared and the script throws a reference error.

  - line 17:  Never gets here because an error was thrown.  If an error had not been thrown, foo would evaluate to 'bar'

  - line 18: The variable bam has not been declared and the script throws a reference error.

  - line 19: Never gets here.  If an error had not been thrown, baz has not been declared and the script throws a reference error.


### 4. During the second stage of execution how many scopes have been registered by the engine?

  #### Which segments of the code do they belong to?
  #### Please identify any variables/refs and which scope each belongs to?

  1. Global scope
    
  2. Scope of function bar

  3. Scope of function baz

  - line 3: var foo has global scope

  - Line 6: var foo declared inside bar() creates its own value in the scope of bar()

  - line 8: foo as a parameter creates its own scope for foo in baz;

  - Line 10:  The variable foo, created by declaring foo as a parameters is assigned the value of 'bam'

  - Line 11: bam has not been declared and therefore throws a reference error, breaking the script.

  If an error had not been thrown...

  - Line 13:  baz() is invoked in the scope of bar() where it is available.

  - Line 16:  bar() is invoked in the global scope where it is available.

  - Line 17: foo in the global scope evaluates as 'bar';

  - Line 18: bam has not been declared and therefore throws a reference error, breaking the script.

  If an error had not been thrown...

  - Line 19: baz() is invoked in the global scope where it not been declared and therefore throws a reference error, breaking the script.


  ### 5. When line 13 invokes the baz function, which foo will be assigned a value of bam? More specifically, bam will be assigned to the foo in ??? scope. Give a brief description in your own words to support your conclusion.

  - Line 11: bam has not been declared and therefore throws a reference error, breaking the script.

  If an error had not been thrown...
 
  - line 8: foo as a parameter creates its own scope for foo in baz;

  - Line 10:  The variable foo, created by declaring foo as a parameters is assigned the value of 'bam'

  - invoking baz on line 13 assigns 'bam' to foo in the scope of baz


  ### 6. Which scope, if any, will the variable bam on line 11 be registered to when the first stage of execution occurs on this file? Provide a brief description in your own words to support your conclusion.

  - Line 11: bam has not been declared and therefore throws a reference error, breaking the script.

  - There are too many factors to consider to determine the intent of line 11 and its scope.


  ### 7. For each line, 16 through 19, what is the return value for each?

   - Line 16:  bar() is invoked in the global scope where it is available.  bar invokes baz. bam has not been declared and therefore throws a reference error, breaking the script.

  If an error had not been thrown...

  - Line 16:  bar() would return undefined.

  - Line 17: foo would return 'bar';

  - Line 18: bam has not been declared and therefore throws a reference error, breaking the script.

  If an error had not been thrown...

  - Line 19: baz() is invoked in the global scope where it not been declared and therefore throws a reference error, breaking the script.



  