If there are two middle nodes, return the second middle node.



Example 1



Input Link List = 1->2->3->4->5



Function should return 3rd node









Example 2



Input Link List = 1->2->3->4->5->6



Function should return the 4th node as it is the second middle node



```js
var findMiddleElement = function (head) {
  if (head == null || head.next == null) {
    return head;
  }

  var slow = head;
  var fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;

};
```