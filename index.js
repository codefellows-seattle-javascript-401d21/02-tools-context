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
console.log('17 foo',foo);
console.log('18 bam',bam);
baz();