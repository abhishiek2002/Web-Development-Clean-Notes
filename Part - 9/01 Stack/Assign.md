Complete the function pushIntoStack and popFromStack to complete the Stack class.

pushIntoStack function

It takes the value and pushes it into the stack

This function doesnt return anything

popFromStack function

     It returns the last element of the stack

    if no element present in stack , it should return -1

Implement Stack (Please dont touch this function)

It creates a new Stack with the user inputted values

const stack1 = new Stack(arr)

```js
class Stack{
    constructor(stack){
        this.stack = stack
    }

    pushIntoStack(value){
        //Complete this function
        //it takes the value and pushes it into the stack
        //this function doesnt return anything
        this.stack.push(value);
    }

    popFromStack(){
        //complete this function 
        // It returns the last element of the stack 
        //if no element present in stack , it should return -1
        if (this.stack.length < 1) {
            return -1;
        }
        let top = this.stack[this.stack.length - 1];
        this.stack.pop();
        return top;
    }
}
```