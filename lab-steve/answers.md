# Questions and Answers

1. When this code is run in Node, e.g. node index.js, what are the two stages
of execution for this file called, and which order do they happen in?
  -The two stages are:
    1. compilation: composed of parsing and code generation
    1. execution: where the program actually executes the code

1. Write an explanation, using as much space as you need, relating to how the
first stage of execution for this file operates.
  -For example, identify the high level steps in a line by line overview and then
  define what each of those steps are accomplishing.
  -The compilation stage initially will parse the entire file looking for any
  areas where declarations are being made. This includes any functions or
  variables that will need to have memory allocated. It determines scope of
  these and uses that scope to determine where within the `global` object they
  belong. If a variable/function is declared in global scope, it gets plopped
  directly inside the global object. However, if that variable/function is
  nested within another scope, it will be abstracted within that. An exception
  to this rule is when variables are simply set in a nested scope yet not
  declared using `let`, `var`, or `const`. These variables are then placed
  directly in the global object as well. Once the entire file has been parsed,
  there will be a representation of all the function and variable declarations
  held somewhere beneath the global object depending on their respective scope.
  To be more explicit, let's break down each line of the file:

  ```
  0:    'use strict'
  1:    
  2:    var foo = 'bar';
  3:    
  4:    function bar() {
  5:      var foo = 'baz';
  6:
  7:      function baz(foo) {
  8:    
  9:        foo = 'bam';
  10:       bam = 'yay';
  11:     }
  12:     baz();
  13:   }
  14:     
  15:   bar();
  16:   foo;
  17:   bam;
  18:   baz();
  ```
  -Line 2 creates a variable `foo` within global scope since the declaration
  was placed within file scope.
  -Following this, line 4 is the declaration
  of the bar function which is also located within the global/file scope.
  -Line 5 declares a local variable `foo`. At this point forward within the
  scope of the bar function any direct accesses to `foo` will be the local
  variable due to lexical scope analysis. `foo` here will have function scope.
  -Line 7 is another function declaration called `baz()` which will have function
  scope inside he `bar()` function. In addition to that, a parameter is delared
  `foo`, the passed argument for `baz()`
  -On line 9, nothing is done since this is not a declaration.
  -At line 10, `bam` is not within `baz()` or `bar()` function scope and nor is
  it within the global scope yet, so this is treated as a declaration of a new
  global variable `bam`.
  -On line 12, nothing is done since this is an execution statement
  -Line 15 is an execution statement so nothing is done here
  -Line 16 is considered execution, so nothing here.
  -Line 17 is another execution, so nothing here.
  -And finally, line 18 is yet another execution line - nothing to do here.

1. Write an explanation, using as much space as you need, relating to how the second stage of execution for this file operates.
  -For example, identify the high level steps in a line by line overview and
  then define what each of those steps are accomplishing.  Write an explanation,
  using as much space as you need, relating to how the second stage of
  execution for this file operates.
  ```
  0:    'use strict'
  1:    
  2:    var foo = 'bar';
  3:    
  4:    function bar() {
  5:      var foo = 'baz';
  6:
  7:      function baz(foo) {
  8:    
  9:        foo = 'bam';
  10:       bam = 'yay';
  11:     }
  12:     baz();
  13:   }
  14:     
  15:   bar();
  16:   foo;
  17:   bam;
  18:   baz();
  ```
  Again, we will do a line by line walk through describing only execution
  lines this time.
  -line 2 is executed in the second stage and the `'bar'` string is assigned
  to `foo`
  -On line 15, the `bar()` function is executed
  -Execution of line 15 will cause line 5 to be executed and `'baz'` will be
  assigned to the function scope `foo` variable.
  -Next, line 12 is executed which is in turn a call to the function `baz()`
  -This will cause lines 9 and 10 to execute:
  -Line 9 assignes the string `'bam'` to the function scope `foo` from line 5
  -Line 10 will place the `'yay'` string inside the global scoped `bam` variable
  -At this point, line 16 executes but since it is just a string nothing will
  really happen.
  -Line 17 will execute `bam` which is just a string, so nothing will happen
  -Line 18 will attempt to execute the `baz()` function, but since it is inside
  the `bar()` function and is not accessible in the file/global scope this will
  cause a ReferenceError

1. During the second stage of execution how many scopes have been registered
by the engine? `Three`
  -Which scopes do they belong to? Identify the scopes/variables.
    -global scope
      -`foo` from line 2
      -`bar()` from line 4
      -`bam` from line 10
    -bar function scope
      -`foo` from line 5
      -`baz()` from line 7
    -baz function scope
      -both variables used within `baz()` aren't in its scope

1. When line 13 invokes the baz function, which foo will be assigned a value of
bam? More specifically, bam will be assigned to the foo in ??? scope. Give a
brief description in your own words to support your conclusion.
  -`foo` that lies within the `bar()` function scope will be assigned due to
  lexical scoping.

1. Which scope, if any, will the variable bam on line 11 be registered to when the
first stage of execution occurs on this file? Provide a brief description in
your own words to support your conclusion.
  -Two part answer here. With `'use strict'` enabled, bam will encounter a
  ReferenceError when encountered. When `'use strict'` is not present, bam
  will be part of global scope.

1. For each line, 16 through 19, what is the return value for each?
  -My lines are starting at 0 and it appears this question wants them to start at 1.
  I'll answer in the context of this question.
    -The `bar()` function returns undefined
    -The `foo` call will just return the global foo contents: 'bar'
    -The `bam` function will either return a ReferenceError if 'use strict'
    is enabled as it is. Oooor, if 'use strict' is not enabled it would return 
    'yay'
    -Finally, the `baz()` call will return ReferenceError since that function is only
    accessible within the scope of `bar()` function.


