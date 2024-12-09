```javascript
const query = {  //Incorrect query
  "$expr": {
    $gt: [ { $toDouble: "$field" }, 10 ]
  }
}
```