Find the sum of odd elements in a linked list



Example



Input

1->2->4->3->9->10->5



Output

18



Reason

1+3+9+5 = 18



Example 2

2->4->6



Ouput

0



Reason

No odd values present


```js
var findSumOfOddElements = function (head) {

  var temp = head;
  let count = 0;
  while (temp !== null) {
    if (temp.val & 1) {
      count += temp.val;
    }
    temp = temp.next;
  }
  return count;
};
```