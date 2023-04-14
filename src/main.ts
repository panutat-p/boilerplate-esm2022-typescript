import { getAnime } from './anime.js';

getAnime()
  .then((r) => console.log(r))
  .catch((e) => console.log(`🟥 ${JSON.stringify(e)}`));

const fruits: Record<string, number> = {
  apple: 12,
  '🍌': 11,
  carrot: 10,
  // dragon: undefined, Type 'undefined' is not assignable
};

console.log('total key:', Object.keys(fruits).length);

if (fruits.apple) {
  console.log('apple exists');
}

if (fruits['🍌']) {
  console.log('🍌 exists');
}

if (Object.hasOwn(fruits, 'carrot')) {
  console.log('carrot exists');
}

if (!fruits.dragon) {
  console.log('dragon does not exist');
}
