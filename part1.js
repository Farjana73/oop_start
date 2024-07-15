
// object create

let person = {
    firstName:'Farjana',
    lastName:'Akther',
    age:32,
    city:'Dhaka',
    getName:()=>{
        return `My Name is ${person.firstName} ${person.lastName}`
    }
}

console.log(person)
console.log(person.getName())