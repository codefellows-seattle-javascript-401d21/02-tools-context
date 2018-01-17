## Lab 02 - Scope and Context

#### Questions:
1. When this code is run in Node, e.g. `node index.js`, what are the two stages of execution for this file called, and which order do they happen in?

From my undestanding the engine that most closely matches what we are learning in class is WebKit’s JavaScriptCore. In short: It first performs a lexical analysis and bulids a syntax tree. Then uses JIT (Just In Time code) from the parser.

Node JS uses Google’s V8 engine. It appears to use two compilers that compile source code directly into machine code. The first stage is a fast compiler that produces unoptimized code followed by a slower compiler that produces fast, optimized code.
Jen Looper: A Guide to JavaScript Engines for Idiots

Another take on the V8 engine which describes the same process:
The V8 Engine uses several threads internally. The main thread of the V8 engine fetches your code, compiles it and then executes it. There’s also a separate thread for compiling, so that the main thread can keep executing while the former is optimizing the code. A Profiler thread that will tell the runtime which methods we spend a lot of time on so they can be optmized.
Alexander Zlatkov: How JavaScript works: inside the V8 engine + 5 tips on how to write optimized code.

My conclusion: I assume there is a lexical/hoisting component to the first compilation stage in Node's V8 but it isn't mentioned in any of the articles I read, not just the 2 readings I paraphrase above. Only when reading about other JavaScript engines do I find the lexical process described.

2. Write an explanation, using as much space as you need, relating to how the first stage of execution for this file operates.
    - For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

To answer this I will reference Kyle Simpson's You Don't Know JS: Scope & Closures and for my own clarity I will answer 2 and 3 togehter.

### var foo = 'bar';
    1st stage lexing: Does foo exist within it's scope? No so declare a new global variable foo.
    2nd stage parsing: Produces code to later execute to handle the foo = 'bar' assignment.

### function bar() {
    2nd stage handles both the declaration and the value definition, there is no lexical process declaring bar. although bar itself is hoisted, it's assignments and executables are left in place.

### var foo = 'baz';
    1st stage lexing: Does foo exist within it's scope? No so declare a new variable foo scpoed to function bar.
    2nd stage parsing: Produces code to later execute to handle the foo = 'baz' assignment.

### function baz(foo) {
      2nd stage handles both the declaration and the value definition, there is no lexical process declaring baz or foo. If the baz function nad been passed an argument, the foo parameter would have been part of the lexical phase.

### foo = 'bam';
    1st stage lexing: Does foo exist within it's scope? Yes.
    2nd stage parsing: Produces code to later execute to handle the foo = 'bam' assignment. The foo variable reference scoped to bar is changed from 'baz' to 'bam.

### bam = 'yay';
    Because we are in strict mode this is a ReferenceError. If we were non-strict the compile stage would apply and a globally scoped variable would be declared and assigned a reference to 'yay, unlike a declared variable that would be scoped during the lexical phase and would be scoped to baz.
  }
 
 ### baz();
    2nd stage parsing: Produces code to later execute baz because baz is within the scope of it's declaration.
}

### bar();
    2nd stage parsing: Produces code to later execute.

### foo;
    2nd stage parsing: The reference value is still 'bar' because the locally scoped foo variables did not affect the globally scoped variable.

### bam;
    No variable bam was ever declared because of strict mode and this produces a ReferenceError. If not in strict mode it would reference a globally scoped bam.

### baz();
    Another ReferenceError because baz is scoped within bar.

3. Write an explanation, using as much space as you need, relating to how the second stage of execution for this file operates.
    - For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

    I lumped this into 2.

4. During the second stage of execution how many scopes have been registered by the engine?
    - Which segments of the code do they belong to?
    - Please identify any variables/refs and which scope each belongs to?

    Three scopes. Global, bar, and baz. baz belongs to bar and Global as in it can reference both, bar belongs to global and can reference global's scope.

    foo is global and redeclared in bar where it is locally scoped to bar and referencable by baz. foo also has a reference in baz that is local to baz only. bam is not scoped because of strict mode.

5. When line 13 invokes the `baz` function, which `foo` will be assigned a value of `bam`? More specifically, `bam` will be assigned to the `foo` in ??? scope. Give a brief description in your own words to support your conclusion.

The foo declared in bar is the first definition within baz's reach as baz traverses the nested scopes, starting at the currently executing Scope (baz), looking for the variable there, and when not found going up one level where it is found.

6. Which scope, if any, will the variable `bam` on line 11 be registered to when the first stage of execution occurs on this file? Provide a brief description in your own words to support your conclusion.

Okay so I will assume non-strict for this answer. The lexical phase ignores this because it sees it as an assigmnet operator. The parsing phase does a lookup continuing up to global, where when not found it creates a globally scoped bam.

7. For each line, 16 through 19, what is the return value for each?

Again assuming non-strict: 16 and 19 return undefined because they do not have explicit return statements. 17 returns bar because it cannot access any scoped references so it grabs the globally scoped foo. line 18 returns yay because without strict it would be assigned a global var even though it was created from an assignment not in the global scope, namely in baz.
