#### Questions:
1. When this code is run in Node, e.g. `node index.js`, what are the two stages of execution for this file called, and which order do they happen in?

#### Answer
The two stages are create and activation/execution. The create stage occurs first, this is when scope, variables, functions and arguments are created. The create stage also determines the value of "this". The activation/execution stage happens next, this assigns values, references to functions, and interprets/executes the code.

---

2. Write an explanation, using as much space as you need, relating to how the first stage of execution for this file operates.
    - For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

#### Answer
Create Stage:
* Line 3: creates foo variable with global scope
* Line 5: creates bar function
* Line 8: creates baz function with foo argument within scope of bar function
* Line 11: creates bam variable within scope of baz function

---

3. Write an explanation, using as much space as you need, relating to how the second stage of execution for this file operates.
    - For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

#### Answer
Activation/Execution Stage:
* Line 3: assigns the value 'bar' to foo variable **NOTE** 'bar' is a string, not a reference to the function bar
* Line 16: executes bar function
* Line 6: assigns the value 'baz' to foo variable in within scope of bar function
* Line 13: executes baz function
* Line 10: reassigns foo with value 'bam' within scope of baz function
* Line 11: assigns bam variable with value 'yay'
* Line 17: restates foo variable which will return value 'bar' if console logged since this is the global scope value
* Line 18: restates bam variable which will return value 'yay' since it also exists in the global scope
* Line 19: throws a reference error due to the baz function not being interpreted and executed outside the scope of the far function. It also does not pass in an argument

---

4. During the second stage of execution how many scopes have been registered by the engine?
    - Which segments of the code do they belong to?
    - Please identify any variables/refs and which scope each belongs to?

#### Answer
Visual:
![visual](visual.png)

Three scopes have been registered, global, bar function scope and baz function scope. The global scope belongs to the context of the whole file and contains the foo variable with value 'bar' and references the bar function and baz function (though baz function is undefined in global scope).

The bar function scope contains a reassigned foo variable with value of 'baz', it also contains a reference to the baz function.

The baz function scope contains a reassigned foo variable with value of 'bam' and assigns 'yay' to the bam variable.

---

5. When line 13 invokes the `baz` function, which `foo` will be assigned a value of `bam`? More specifically, `bam` will be assigned to the `foo` in ??? scope. Give a brief description in your own words to support your conclusion.

#### Answer
'bam' will be assigned to the foo in the baz function scope. When the baz function is called, it occurs within the bar function scope, however, once the baz function executes, we are now within the baz function scope, that is nested within the bar function scope. Since foo is reassigned in both scopes, but we are currently looking at reassignment of foo in the baz function, we are within the baz scope. The value of foo in the bar function scope is 'baz'.

---

6. Which scope, if any, will the variable `bam` on line 11 be registered to when the first stage of execution occurs on this file? Provide a brief description in your own words to support your conclusion.

#### Answer
Variable bam will be registered to global scope. The JavaScript interpreter will look for the declaration of bam first in 'baz' scope, then in 'bar' scope as the next level up, and since neither of those scopes have bam declared, the interpreter will then declare bam in the global scope.

---

7. For each line, 16 through 19, what is the return value for each?

#### Answer
* Line 16: this will execute the bar function (lines 5-14), but will return undefined as nothing is returned in the bar function and the baz function within it's scope.
* Line 17: this will return 'bar', as this is the globally scoped variable foo value.
* Line 18: this will return 'yay' as this is the globally scoped variable bam value.
* Line 19: this will throw a reference error since the baz function is not defined globally, only within the bar function scope.
