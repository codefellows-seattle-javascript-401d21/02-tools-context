### Answers for Lab 02

1. First the runtime environment runs through the "compilation" stage. Then it will run through the "execution" stage. The combination of these two stages is what allows JS to use hoisting.

2. During the "compilation" stage the runtime environment runs through the JS file to be executed. It uses this stage to create variables and references so that during execution it has them for use. This is the stage when all variables and functions are created within the runtime environment. This is also when Syntax errors occur as the system makes note of all declared variables and functions it also checks them for syntactical errors.

In the given code example this is when the variable "foo" is declared within both the global and scope of the "bar" function. 

This is also where the function "bar" is declared within global scope, and the function "baz" is declared within "bar" scope with a parameter being declared in "baz" scope also by the name of "foo"

3. During the "execution" stage the runtime environment makes a second pass at the JS file being executed. During this second pass is executes any functionality within the file with the use of the known variables and functions that were declared during stage one. This is the stage when reference errors will occur if the code being executed references a variable which the runtime environment has not created within the correct scope it is required.

In the given code example this is when "bam" is declared within the global scope. This occurs when the function "bar" is executed and within itself executes the function "baz". "baz" sets the value of "bam" which causes the interpreter to search for where the variable "bam" is declared. As it is not declared within "baz", the interpreter then looks to the scope of "bar" in which it cannot find a declaration of "bam" so it continues to global scope and creates a global reference. During the execution of "baz" the variable scoped within "bar" with the name "foo" is also set to have a value of "bam" however this value does not effect the globally scoped variable by the same name.

After executing the "bar" function the interpreter will look at "foo" and "bam" and see values for both but when it continues and attempts to execute "baz" it will throw a reference error as the function "baz" does not exist within the global scope and is limited to the "bar" scope so the interpreter does not see a reference to it within the current global space.

4. During the second stage scope has been created globally as well as locally within any function. 

In the given code example there is "Global" scope, functional scope for "bar", and functional scope for "baz".

"foo" has been declared in two seperate locations and exists as seperate references within both the "global" and "bar" scopes. While "bam" exists globally.

5. When line 13 is executed because scope works inside to outside the value of "bam" will be assigned to the first variable with an identifier of "foo" that the interpreter can access from the given scope. This will cause the variable scoped to the "bar" function to be assigned the value of "bam"

6. Meanwhile the value of "yay" will be assigned to a global variable identified as "bam". This occurs when the interpreter looks for the variable "bam" but cannot locate it within the scope of "baz". It will then look in the next outerward scope of "bar" and eventually in the "global" scope. When it does not locate a variable identified as "bam" it will globally declare a variable and assign the value globally.

7. The following will occur from line 16 - 19:

Line 16 executes: The interpreter will execute the code from line 5 to line 14 without error. This will set the value of the "bar" scoped "foo" to "bam" as it executes the "baz" function within "bar" scope. It will also declare the global value of "bam" to be "yay".

Line 17 executes: The interpreter sees "bar" as the globally scoped "foo" was declared and assigned this value during the compilation stage

Line 18 executes: The interpreter sees "yay" as the globally scoped "bam" was declared and assigned this value during the execution of line 16.

Line 19 executes: The interpreter looks at the current scope for a reference to the function "baz", when it does not find one within the current scope it will then determine that this function does not exist within any scope it can currently access and it will throw a reference error.