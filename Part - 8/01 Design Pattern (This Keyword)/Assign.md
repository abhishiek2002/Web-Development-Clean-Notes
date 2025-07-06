# UNDERSTAND THIS KEYWORD (Used every where)

## Watch this video to understand this keyword

https://www.youtube.com/watch?v=NV9sHLX-jZU

## Deliverables

    Design pattern problem - How will you design a Student class which stores the name , age , phone number, board marks of each student. Complete the constructor to initialize the values.
    Complete the function eligible to check whether the student is eligible or not for college. If board marks > 40 -> eligible , if less than 40 -> not eligible.
    Complete the function increaseStudentCount which keep track of the number of students created. Have you heard of static variables. Leverage that now. Check Hints 1 if you are stuck.
    Complete the printStudentCount which prints the total count of students created till date.
    Please only fill in the blanks and do not modify anything else. Output should match and there should be no extra spaces.

```js
class Student {
  static count = 0; //static variable to call
  constructor(name, age, ph_no, marks) {
    //complete this contructor. Variable name should be same as above params
    this.name = name;
    this.age = age;
    this.ph_no = ph_no;
    this.marks = marks;
    //Dont change anyting below this
    Student.increaseStudentCount();
  }

  eligible() {
    if (this.marks >= 40) {
      console.log(`${this.name} age ${this.age} is eligible`);
    } else if (this.marks < 40) {
      console.log(`${this.name} age ${this.age} is not eligible`);
    }
  }
  static increaseStudentCount() {
    //increase the count of students by 1 whenever this is called
    Student.count += 1;
  }

  static printStudentCount() {
    console.log(Student.count);
  }
}

function createNewStudents() {
  const Riya = new Student("Riya", 18, 1234, 34);
  const Hiya = new Student("Hiya", 15, 2345, 35);
  const Diya = new Student("Diya", 16, 4567, 60);
  Student.printStudentCount();
  Riya.eligible();
  Hiya.eligible();
  Diya.eligible();
}
```
