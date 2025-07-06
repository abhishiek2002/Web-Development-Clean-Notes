https://www.youtube.com/watch?v=vQcCNpuaJO8 (This video doesnt open on the iframe player we use .Please copy the link and paste on browser to open it)

Deliverables

    Take the student class and write a function called setPlacementAge which basically takes the minimum board marks required by a candidate to sit for the company coming for placement and it returns a function.
    The function takes minAge as an argument and returns true if the given student has board marks greater than minimum board marks required by company and is above the required age set by the company.[If stuck check the hint 1]
    Run the code across all the students and print the names of egligible students.

What is the major difference betweenn the fat arrow function and normal function ? Watch this video to understand. [FAVORITE INTERVIEW QUESTION]

https://www.youtube.com/watch?v=ax-qXoHjIjM

Why was fat arrow introduced any idea ? - Watch this video. [FAVORITE INTERVIEW QUESTION]

https://www.youtube.com/watch?v=VyWMWxlNgTE

Push the code to git and upload the commit ID

```js
class Student {
  constructor(name, age, marks) {
    this.name = name;
    this.age = age;
    this.marks = marks;
  }
  setPlacementAge(minPlacementAge) {
    //return a function which takes in argument -> minMarks
    //returns true if students marks are gretaer than minMarks and age gretaer than minPlacementAge
    //Complete this function only. Do not alter any other thing.

    return (minMarks) => {
      if (this.age >= minPlacementAge && this.marks >= minMarks) {
        return true;
      }
      return false;
    };
  }
}
```
