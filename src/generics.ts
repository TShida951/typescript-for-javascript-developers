export {};

// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(100));
console.log(echo<string>('Hello'));
console.log(echo<boolean>(true));

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

const mirrorNum = new Mirror<number>(123);
console.log(mirrorNum.echo());

const mirrorStr = new Mirror<string>('Generics');
console.log(mirrorStr.echo());

const mirrorBoolean = new Mirror<boolean>(true);
console.log(mirrorBoolean.echo());
