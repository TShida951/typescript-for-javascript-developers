export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstname: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const meTokyo = new Japanese.Tokyo.Person('Tom');
console.log(meTokyo.name);

const meOsaka = new Japanese.Tokyo.Person('Thomas');
console.log(meOsaka.name);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);
