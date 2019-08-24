function foo(params) {
  console.log(params);
}

foo('eslint config');

var a = 'test';
const b = 'test2';

class A {
  foo(e) {
    console.log(e);
  }
}

console.log(a, b);
console.log(A.foo('eslint in a king'));
