//  class a jodi static keyword use kora hoy tahole kono object create na korei seta k access kora jabe.
// static keyword
class person{
    static firstName='Farjana'
    lastName='Akther'
    age=32
    city='Dhaka'
    getName(){
        return `My Name is ${this.firstName} ${this.lastName}`
    }
}

console.log(person.firstName)
