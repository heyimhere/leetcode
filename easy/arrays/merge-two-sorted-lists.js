const list1 = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 4,
        next: null
      }
    }
  }
}
const list2 = {
  head: {
    value: 1,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}
function mergeTwoLists(list1, list2) {
  // code here
  if(!list1) {
    return list2;
  } else if(!list2) {
    return list1;
  } else if(list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}

console.log('merge two lists', mergeTwoLists(list1, list2));
