/*
Shallow Copy:

A shallow copy of an object or array is a copy where the top-level properties are copied, 
but nested objects or arrays are not duplicated. Instead, references to the nested objects 
or arrays are copied. This means that changes to nested objects in the copied version will 
affect the original version and vice versa.
*/

// shallow copy
// var a = {
//     name: 'tej'
//   }
//   var b = a;
//   b.name = 'nivas';
//   console.log(a);
//   console.log(b);
  
// //Original object
const original = {
    name: 'Alice',
    address: {
      city: 'Wonderland',
      zip: 12345
    }
  };
  
  // Shallow copy using Object.assign()
  const shallowCopy = Object.assign({}, original);
  
  // Another shallow copy using spread operator
  const anotherShallowCopy = { ...original };
  
  // Modifying the nested object in the shallow copy
  shallowCopy.address.city = 'New Wonderland';
  
  // Both original and shallowCopy will reflect this change
//   console.log(original.address.city); // Outputs: New Wonderland
//   console.log(shallowCopy.address.city); // Outputs: New Wonderland
  

/*
Deep Copy:

A deep copy of an object or array involves creating a new object or array along with all nested 
objects or arrays. This means that changes to the copied version do not affect the original 
version and vice versa.
*/

// // Deep Copy Methods:

// // 1.JSON Methods

// Original object
const original2 = {
    name: 'Alice',
    address: {
      city: 'Wonderland',
      zip: 12345
    }
  };
  
  // Deep copy using JSON methods
  const deepCopy_ = JSON.parse(JSON.stringify(original2));
  
  // Modifying the nested object in the deep copy
  deepCopy_.address.city = 'New Wonderland';
  
//   // Only the deep copy will reflect this change
//   console.log(original2.address.city); // Outputs: Wonderland
//   console.log(deepCopy_.address.city); // Outputs: New Wonderland

  /*
  Note: This method does not work well with functions, undefined, and other non-serializable values.
  */


// // 2.Recursive Function
/*
Custom deep copy functions can handle more complex scenarios, including functions and 
special objects.
*/

function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
    if (Array.isArray(obj)) {
      return obj.map(deepCopy);
    }
    const copy = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }
    return copy;
  }
  const original_ = {
    name: 'Alice',
    address: {
      city: 'Wonderland',
      zip: 12345
    }
  };
//   const deepCopyObject = deepCopy(original_);
//   deepCopyObject.address.city='gtl'
//   console.log(original)
//   console.log(deepCopyObject)



/*
Summary
Shallow Copy: Copies only the top-level properties; nested objects are shared between the original and the copy.
Deep Copy: Creates a fully independent copy of the object, including all nested objects.
*/  