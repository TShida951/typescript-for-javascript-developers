export {};

class Wizerd {}

class Priest {}

class Taro extends Wizerd {}

interface Sage {
  kaboom(): void;
}

interface Worrier {
  attack(): void;
}

class Jiro implements Sage, Worrier {
  kaboom(): void {
    console.log('Kaboom');
  }

  attack(): void {
    console.log('Attack');
  }
}

const jiro = new Jiro();
jiro.kaboom();
jiro.attack();
