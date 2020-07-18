export {};

let name = 'Atsushi';

name = 'Tom';

let nickname = 'Tom' as const;
// nickname = 'Thomas';

let profile = {
  name: 'Atsushi',
  height: 178,
} as const;

// profile.name = 'Tom';
// profile.height = 180;
