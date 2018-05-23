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

// var salesTeam = {
//   name: 'Arnaldo McDermott',
//   individualSales: 14,
//   manages: [
//     {
//       name: 'Lavina Romaguera',
//       individualSales: 15,
//       manages: [
//         {
//           name: 'Glen Hodkiewicz',
//           individualSales: 12,
//           manages: []
//         }
//       ]
//     },
//     {
//       name: 'Rey Hills',
//       individualSales: 19,
//       manages: []
//     }
//   ]
// };


// var totalSales = function(object) {
//   var result = [];
//   result.push(object.name);
//   object.manages.forEach(function(el) {
//     result = result.concat(totalSales(el));
//   });
//   return result;
// }

// totalSales(salesTeam);
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






