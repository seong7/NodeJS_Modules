# Object Sorter
객체들로 이루어진 배열을 속성 값에 따라 조건부 정렬할 수 있게 해주는 Module 입니다.

## Usage
#### Node JS
```javascript
const { objSorter } = require('module file location');
```

## Example usage [>>](./exampleUsage.js)
```javascript

const sorted = objSorter(Array of Objects)
  .setPropDown('height')    // set Property "height" to sort by in ASCENDING order
  .setPropUp('weight')      // set Property "weight" to sort by in DESCENDING order
  .setPropUp('name')        // set Property "name" to sort by in DESCENDING order
  .sort();               // => call sort() at last

```