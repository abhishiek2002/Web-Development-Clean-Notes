Wath the following videos:

What are Promises? https://www.youtube.com/embed/sJdifmSdDgc?si=IpqLS5MDNsYA18Ui

Math.random() Explained https://www.youtube.com/embed/FiJtYrg6JzQ?si=pbLXOvjP5H326tP7

Returning Promise from a Function https://www.youtube.com/embed/sxHsZtVBVEY?si=Fvc6gsJ_kvpR1lQA

    Now, imagine you went to a library to search for a book you want. The librarian promises you that he will find the book. But, like any promise, this promise can either be fulfilled or rejected. Write a code to handle this promise.

Deliverable:

    Create a function "bookSearchPromise" that returns a promise which after 3 seconds either resolves with message "Book found" or gets rejected with message "Book not found".
    Make use of Math.random() to mimic both the resolve and reject case.
    Handle the fulfillment of the promise with then block and print the resolve message to the console.
    Handle the rejection of the promise with catch block and print the reject message to the console.

```js
function bookSearchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random();
      if (success > 0.5) {
        resolve("Book found");
      } else {
        reject("Book not found");
      }
    }, 3000);
  });
}

bookSearchPromise()
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
```
