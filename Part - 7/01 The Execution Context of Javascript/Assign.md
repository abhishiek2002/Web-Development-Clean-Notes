## What is the Execution Context in Javascript.



Go through the following videos from the playlist and understand how does javascript execute the code in multiple phases


Video 1 - https://www.youtube.com/watch?v=ZvbzSrg0afE

Video 2 - https://www.youtube.com/watch?v=iLWTnMzWtj4


Once you are through the above video , explain how does the execution context work for the following javascript code.


## Question 1 


```js
var number1 = 2;

var number2 = 5



function add(a, b){

var answer = a + b; //line 1

return answer;

}

var sum = add(number1, number2); // line 2



console.log(sum) //line 3



console.log(answer) //line 4

```

    Which line gets called before others ?
    What will be the output of line 3
    What will be the output of line 4?
    Explain the flow of execution context in your own words for the given code