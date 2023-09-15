const _ = require('lodash');
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)   //flattenDeep de chuyen 1 mang da chieu thanh mang 1 chieu
console.log(newItems);