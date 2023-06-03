//basic

let userName = "jack";
let hasLoggedIn = true;

userName += " Harrington";

console.log(hasLoggedIn);

let myNumber: number = 10

let myRegex: RegExp= /foo/

//array
const names: string[] = userName.split(' ')

const numbers: Array<number> = [1, 2, 3]

//object

interface Person  {
     first: string;
    last: string;
}

const myPerson: Person = {
    first: 'Jack',
    last: 'Harrington'
}

const ids: Record<number,string> = {
    10: 'a',
    20: 'b'
}

ids[30] = 'c'

// if statement
//forEach
//map