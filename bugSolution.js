```javascript
const correctQuery = {
  $match: {
    field: { $type: 'number' }
  }
};
// Or more directly
const correctQuery2 = {
  $match: {
    $expr: { $gt: ['$field', 10] }
  }
};
```