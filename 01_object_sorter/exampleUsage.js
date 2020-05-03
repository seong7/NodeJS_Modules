const { objSorter } = require('./module');

/* TEST CASE */
const testArray = [
  { name: 'Jason', height: 180, weight: 80 },
  { name: 'Rachel', height: 170, weight: 76 },
  { name: 'John', height: 160, weight: 50 },
  { name: 'AJ', height: 180, weight: 70 },
  { name: 'Duke', height: 170, weight: 70 },
  { name: 'Elon', height: 160, weight: 60 },
  { name: 'Fred', height: 180, weight: 70 },
  { name: 'Peng', height: 160, weight: 50 },
];
/* "height" 를 기준으로 오름차순 정렬하기.
   sort by "height" in ASCENDING (up) order.

   "height" 가 동일할 경우, "weight" 를 기준으로 내림차순 정렬하기.
   if "height" is same, sort by "weight" in DESCENDING (down) order.

   if "height" and "weight" is same, sort by "name" in DESCENDING (down) order.
   "height" 와 "weight" 가 모두 동일할 경우, "name" 을 기준으로 내림차순 정렬하기.  */


/* INTERFACE */
const sorted = objSorter(testArray)
  .setPropDown('height')
  .setPropUp('weight')
  .setPropUp('name')
  .sort();               // => call sort() at last

console.log(sorted);

/* RESULT */
/*
[
  { name: 'AJ', height: 180, weight: 70 },
  { name: 'Fred', height: 180, weight: 70 },
  { name: 'Jason', height: 180, weight: 80 },
  { name: 'Duke', height: 170, weight: 70 },
  { name: 'Rachel', height: 170, weight: 76 },
  { name: 'John', height: 160, weight: 50 },
  { name: 'Peng', height: 160, weight: 50 },
  { name: 'Elon', height: 160, weight: 60 }
]
*/
