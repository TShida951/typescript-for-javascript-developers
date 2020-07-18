export {};

let name: any = 'Tom';

// let length: number = name.length;
// let length = (name as string).length;

// NOT RECOMMEND
let length = (<string>name).length;

// length = 'foo';
