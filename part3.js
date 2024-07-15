
// constructor function

class person{

    constructor(num1, num2){
        let sum = num1+num2;

        console.log(sum)
        // constructor is auto executed method
        // auto executed
        // can take parameter
        // can not return
    }
    firstName='Farjana'
    lastName='Akther'
    age=32
    city='Dhaka'
    getName(){
        return `My Name is ${this.firstName} ${this.lastName}`
    }
}

const personObj= new person(50, 60);
const personObj2= new person(50, 100);

console.log(constructor())