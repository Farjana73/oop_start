//  inheritance

class father{
    addNumber(){
        let a =30;
        let b =40;
        console.log( a+b)
    }

}

class son extends father{
    addNumber(){
        let a =30;
        let b =80;
        console.log( a+b)
    }
}

let sonObj = new son();

sonObj.addNumber();

 