'use strict';

var foo = 'bar';

function bar() {
  var foo = 'baz';

  function baz(foo) {

    foo = 'bam';
    var bam = 'yay';
  }
  baz();
}

bar();
foo;
bam;
baz();
