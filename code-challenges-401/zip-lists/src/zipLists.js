'use strict';
const LinkedList = require('./linkList');
let zipLits = (list1, list2) => {
  try {
    let zipList = new LinkedList;
    if ((list1.length > 0) || (list2.length > 0)) {
      let currantList1 = list1.head;
      let currantList2 = list2.head;
      let newLength = (list1.length > list2.length) ? list1.length : list2.length;
      for (let i = 0; i < newLength; i++) {
        if (zipList.length > 0) {
          if (currantList1) {
            zipList.append(currantList1.value);
            currantList1 = currantList1.next;
          }
          if (currantList2) {
            zipList.append(currantList2.value);
            currantList2 = currantList2.next;
          }
        } else {
          if (currantList1) {
            zipList.insert(currantList1.value);
            currantList1 = currantList1.next;
          }
          if (currantList2) {
            zipList.append(currantList2.value);
            currantList2 = currantList2.next;
          }
        }
      }
    }
    return zipList;
  } catch (error) {
    console.error(error.messages || error);

  }

};
module.exports = zipLits;
