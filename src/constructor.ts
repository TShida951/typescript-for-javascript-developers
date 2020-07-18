export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('Tom', 25);
console.log(me);
