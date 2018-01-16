<!--
'use strict'

var foo = 'bar';

function bar() {
  var foo = 'baz';

  function baz(foo) {

    foo = 'bam';
    bam = 'yay';
  }
  baz();
}

bar();
foo;
bam;
baz();

 -->

Questions:
When this code is run in Node, e.g. node index.js, what are the two stages of execution for this file called, and which order do they happen in?

Write an explanation, using as much space as you need, relating to how the first stage of execution for this file operates.

For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

Write an explanation, using as much space as you need, relating to how the second stage of execution for this file operates.

For example, identify the high level steps in a line by line overview and then define what each of those steps are accomplishing.

During the second stage of execution how many scopes have been registered by the engine?

Which segments of the code do they belong to?

Please identify any variables/refs and which scope each belongs to?

When line 13 invokes the baz function, which foo will be assigned a value of bam? More specifically, bam will be assigned to the foo in ??? scope. Give a brief description in your own words to support your conclusion.

Which scope, if any, will the variable bam on line 11 be registered to when the first stage of execution occurs on this file? Provide a brief description in your own words to support your conclusion.

For each line, 16 through 19, what is the return value for each?





































<!-- foo -->
