function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let l3 = { ...l1 };
  let l4 = { ...l2 };
  let arr1 = [];
  let arr2 = [];
  while (l3 !== null) {
    arr1.push(l3.val);
    l3 = l3.next;
  }
  while (l4 !== null) {
    arr2.push(l4.val);
    l4 = l4.next;
  }

  const answer = `${
    BigInt(arr1.reverse().join("")) + BigInt(arr2.reverse().join(""))
  }`.split("");

  return answer.reduce((next, val) => new ListNode(val, next), null);
};

// var addTwoNumbers = function (l1, l2) {
//   let node = null;
//   const carry = arguments[2];
//   console.log(carry);
//   if (l1 || l2) {
//     const val1 = l1 ? l1.val : 0;
//     const val2 = l2 ? l2.val : 0;
//     const next1 = l1 ? l1.next : null;
//     const next2 = l2 ? l2.next : null;
//     const val = carry ? val1 + val2 + 1 : val1 + val2;
//     node = new ListNode(val % 10);
//     node.next = addTwoNumbers(next1, next2, val >= 10);
//   } else if (carry) {
//     node = new ListNode(1);
//     node.next = null;
//   }
//   return node;
// };

// const l1 = [
//   1,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   1,
// ].reduceRight((next, val) => new ListNode(val, next), null);

// const l2 = [5, 6, 4].reduceRight((next, val) => new ListNode(val, next), null);

const l1 = [1, 8].reduceRight((next, val) => new ListNode(val, next), null);

const l2 = [0].reduceRight((next, val) => new ListNode(val, next), null);

addTwoNumbers(l1, l2);
