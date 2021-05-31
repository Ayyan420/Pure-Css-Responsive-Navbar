// import { add } from "export.js";
var obj = {
    name: 'Ayyan',
    age: 21,
    Height: 5.7
};
const { name: obj_name, age, Height } = obj;
console.log(obj_name);

const arr = ["name", 3, "boo"];
let arr1 = {
    name: 'ayyan',
    age: 21,
    height: 5.7
};
console.log(`Hellow this is ${obj_name} !`)
var sum;
const demo = (a, b) => {
    return sum = a + b;
    console.log("Arrow function");
}
console.log(demo(2, 55))
setTimeout(function() {
    console.log('This is timeout');
    // window.location.href = "https://www.google.com";
    // window.clearTimeout(tID);    
}, 1000);

// event listener
var org = document.querySelector('#butn');
// var cln = org.cloneNode(true);
var cln = document.getElementById("butn");
console.log(cln)
document.addEventListener("click", function() {
    var input = prompt("Enter a value to append it ! ")
    org = document.getElementById("butn").innerHTML = input;
});

// ARRAY


var arr2 = ["A", "B", "C"];
var arr3 = [{
        'a': 1,
        'b': 2
    },
    {
        'c': 3,
        'd': 55
    }
];

console.log(arr3[0]);

let [v1, v2, v3, v4] = arr2;
console.log(v1, v2)
arr2.length = 0;
console.log(arr2)


// import and export in this
const a = 10;
const b = 30;

// console.log(add(a,b));


// Promises  -> It handle callbacks kahi aap request krtai hai tau yai uska callback ko handle krta hai 

// pending , resolved .then(); , rejected .catch();


const myPromise = new Promise((resolve, reject) => {
    const a = 5,
        b = 6;
    const c = a + b;
    if (c == 4) {
        resolve(`yes, ${a}+${b} = 4`);
    } else {
        reject(`No!  ${a}+${b} !=4`);
    }
});

let mesg;
myPromise.then((m) => {
    // mesg=m;   // store message in mymesg var
    console.log(m);
}).catch((err) => {
    console.log(err);
});

// Spread operators  -> Spred is Used to spilt array or object prperties ...
// Rest  -> is used to merge a list o fun args into an array



// Spread

const old_arr = [1, 2, 3, 4, 5, ];
const new_arr = ["a", "b", ...old_arr, 5, 6, 6, 7, ];
console.log(new_arr)


//  rest

// const sum1 = (a,b,c,d)=> a=b+c+d;
// console.log(sum(3,4,45,5,555,555));   // yani agr apki brh gai value tau handle kaise karna hai apnai ise yha 

const sum1 = (...numbers) => { //yani aik infinit array le li apnai yha pai
    let total = 0;

    numbers.forEach((n) => { // yani jtne b numbers ho gai utni time chlaiga yai   for ander iskew aik function hai

        total += n;

    });

    console.log(`Sum is ${total}`);

}
sum1(1, 3, 4, 5, 5, 5, 5, 65, 4, 4, 4242, 3424, 12);


// array map method   it makes a new array from old one


const cources = ["php", 'recta js ', "hh", "oihiuj"];

const new_cources = cources.map((c) => { // it takes a callback fun

    return `<li> ${c} </li>`;
});

console.log(cources);
console.log(new_cources);

const series = [1, 4, 54, 6, 7, 8, 8, 87, 8, 8];
const nums = 5;
const table = series.map((s) => {
    return s * nums;
});
console.log(table)


// classes in js    ->  its is special function in js 





class Person {
    constructor(uName, uAge) {
        this.namee = uName;
        this.agee = uAge;
    }

    details() {
        console.log(`The age of ${this.namee} is ${this.agee} `);
    }
}

const p = new Person("AYYAN", 21);
p.details();
const q = new Person("SID", 20);
q.details();