# 02: Tools and Context

## Code Evaluation

### Evaluation of the following code provided in answers.md

```
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

```
