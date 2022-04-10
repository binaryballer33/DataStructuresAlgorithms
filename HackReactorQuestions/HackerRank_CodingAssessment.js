function organizeItems(items) {

    // your code here
    // O(n) space complexity O(n) time complexity
    
    // create new object that blank object that will be populated with the category values as keys
    let returnData = {};
    
    // iterate to each object in the array
    for (let index = 0; index < items.length; index++) {

      // iterate through each object, create the empty list as the value for each key 
      if (returnData[items[index]['category']] == null) {
        returnData[items[index]['category']] = [];
        // console.log(returnData[items[index]['category']]);
      }

      // if items[index]['onSale'] == true; then append '($)' next to itemName's value
      // else just push the itemName
      if(returnData[items[index]['category']] != null && items[index]['onSale'] == true){
        returnData[items[index]['category']].push(`${items[index]['itemName']}($)`);
      }else{
        returnData[items[index]['category']].push(items[index]['itemName']);
       }
    }

    // //return object that contains the category values as the new keys, and for each of these keys
    // // the value will be the itemNames that match up with the key
    return returnData; 
} 


var itemData = [
  { category: 'fruit',  itemName: 'apple', onSale: false },
  { category: 'canned', itemName: 'beans', onSale: false },
  { category: 'canned', itemName: 'corn',  onSale: true  },
  { category: 'frozen', itemName: 'pizza', onSale: false },
  { category: 'fruit',  itemName: 'melon', onSale: true  },
  { category: 'canned', itemName: 'soup',  onSale: false },
];

let organizedItems = organizeItems(itemData);
console.log(organizedItems);
