// class create
class person{
    firstName='Farjana'
    lastName='Akther'
    age=32
    city='Dhaka'
    getName(){
        return `My Name is ${this.firstName} ${this.lastName}`
    }
}

const personObj= new person();

console.log(personObj.getName());
console.log(personObj.firstName);