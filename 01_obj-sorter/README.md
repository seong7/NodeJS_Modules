# obj-sorter
[>> NPM](https://www.npmjs.com/package/obj-sorter)

Simple module to sort 'Array of objects' in any order by properties.   

객체들로 이루어진 배열을 객체의 속성 값에 따라 조건부 정렬할 수 있게 해주는 Module 입니다.

## Usage
#### Node JS
```javascript
const { objSorter } = require('obj-sorter');
```

## Example usage
```javascript
const testArray = [
  { name: 'Elon', height: 160, weight: 60 },
  { name: 'Fred', height: 180, weight: 70 },
  { name: 'Peng', height: 160, weight: 50 },
];

const sortedArray = objSorter(testArray)
  .setPropDown('height')    // set Property "height" to sort by in ASCENDING order
  .setPropUp('weight')      // set Property "weight" to sort by in DESCENDING order
  .setPropUp('name')        // set Property "name" to sort by in DESCENDING order
  .sort();               // => call sort() at last
```
**[>> Full example](https://github.com/seong7/NodeJS_Modules/blob/master/01_obj-sorter/exampleUsage.js)**

## License
MIT
