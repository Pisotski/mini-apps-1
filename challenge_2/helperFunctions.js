{
    "firstName": "Joshie",
    "lastName": "Wyattson",
    "county": "San Mateo",
    "city": "San Mateo",
    "role": "Broker",
    "sales": 1000000,
    "children": [
    {
      "firstName": "Beth Jr.",
      "lastName": "Johnson",
      "county": "San Mateo",
      "city": "Pacifica",
      "role": "Manager",
      "sales": 2900000,
      "children": [
        {
          "firstName": "Smitty",
          "lastName": "Won",
          "county": "San Mateo",
          "city": "Redwood City",
          "role": "Sales Person",
          "sales": 4800000,
          "children": []
        },
        {
          "firstName": "Allen",
          "lastName": "Price",
          "county": "San Mateo",
          "city": "Burlingame",
          "role": "Sales Person",
          "sales": 2500000,
          "children": []
        }
      ]
    },
    {
      "firstName": "Beth",
      "lastName": "Johnson",
      "county": "San Francisco",
      "city": "San Francisco",
      "role": "Broker/Sales Person",
      "sales": 7500000,
      "children": []
    }
  ]
};

var objectFlattener = function(obj) {
  var arr = [];
  for (var key in obj) {
    if (key === 'children') {
      arr.push('\n');
    } else {
       arr.push(obj[key]);
    };
  }
  return arr;
}

var dataFlattener = function (obj, result = []) {
  resultresult.concat(objectFlattener(obj));
    if (obj.children.length !== 0) {
      obj.children.forEach(function(obj) {
        dataFlattener(obj, result);
      })
    }
  return result;
}






