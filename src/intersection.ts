export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  buttingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const OchiaiHiromitsu: Batter1 = {
  buttingAverage: 0.367,
};

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   buttingAverage: number;
// };

type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShouhei: TwoWayPlayer = {
  throwingSpeed: 165,
  buttingAverage: 0.286,
};
