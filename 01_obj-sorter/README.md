<h1 align="center"> Welcome to obj-sorter 👋</h1>
<p align="center">
 <img src="https://img.shields.io/npm/v/obj-sorter.svg?color=blue" />
  <a href="https://www.npmjs.com/package/obj-sorter">
    <img alt="downloads" src="https://img.shields.io/npm/dy/obj-sorter.svg?color=blue" target="_blank" />
  </a>
   <a href="https://github.com/seong7/NodeJS_Modules/blob/master/01_obj-sorter/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> Simple module that helps you sort 'Array of objects' by properties in any order.

### 🏠 [Homepage](https://github.com/seong7/NodeJS_Modules/tree/master/01_obj-sorter)

## Install

```sh
npm install obj-sorter
```

## 🚀 Usage

#### Node JS

```javascript
const { objSorter } = require('obj-sorter');
```

#### JavaScript

```javascript
import { objSorter } from 'obj-sorter';
```

#### Full Example

```javascript
/* CASE */
const testArray = [
  { name: 'Jason', height: 180, weight: 80 },
  { name: 'Rachel', height: 190, weight: 76 },
  { name: 'John', height: 160, weight: 50 },
  { name: 'AJ', height: 180, weight: 70 },
  { name: 'Duke', height: 190, weight: 70 },
  { name: 'Elon', height: 160, weight: 60 },
  { name: 'Fred', height: 180, weight: 70 },
  { name: 'Peng', height: 160, weight: 50 },
];

/* INTERFACE */
const sorted = objSorter(testArray)
  .setPropUp('height')
  // sort by "height" in ASCENDING (up) order.
  .setPropDown('weight')
  //  if "height" are same, sort by "weight" in DESCENDING (down) order.
  .setPropDown('name')
  //  if "height" and "weight" are same, sort by "name" in DESCENDING (down) order.
  .sort(); // => call sort() at last

/* RESULT */
console.log(sorted);
[
  { name: 'Elon', height: 160, weight: 60 },
  { name: 'Peng', height: 160, weight: 50 },
  { name: 'John', height: 160, weight: 50 },
  { name: 'Jason', height: 180, weight: 80 },
  { name: 'Fred', height: 180, weight: 70 },
  { name: 'AJ', height: 180, weight: 70 },
  { name: 'Rachel', height: 190, weight: 76 },
  { name: 'Duke', height: 190, weight: 70 },
];
```

## Author

👤 **Jason-sj**

- Github: [@seong7](https://github.com/seong7)
- LinkedIn: [Seongjin Kim](https://www.linkedin.com/in/seongjin-kim-b3651312a/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/seong7/NodeJS_Modules/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright @2020 [Seongjin Kim](https://github.com/seong7).  
This project is [MIT](https://github.com/seong7/NodeJS_Modules/blob/master/01_obj-sorter/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
