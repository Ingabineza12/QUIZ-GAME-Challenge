//creating objects using FUNCTION CONSTRUCTOR

/*var Deb = {
    name : 'Debby ',
    yearOfBirth : 1998,
    job : 'programmer'
    
}; 

var Person = function(name,yearOfBirth,job){   // always the name of a function constructor starts with a capital letter
    
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
} 

Person.prototype.calculateAge = function (){        // prototype for Person object to put in all methods and properties to favor inheritance
        console.log(2020 - this.yearOfBirth);
    }

Person.prototype.lastName = 'MGRNZ';

var Deb = new Person('Debby', 1998, 'programmer'); // how to create new objects using const.funct.(called instanciation)
var Ben = new Person ('Ben',1990,'enterpreneur');
var Paccy = new Person ('Paccy', 1995 , 'Doctor');

Deb.calculateAge();
Ben.calculateAge();
Paccy.calculateAge();

console.log(Deb.lastName);
console.log(Ben.lastName);
console.log(Paccy.lastName);
*/

// creating objects using OBJECT.CREATE

/*

var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';


var jane = Object.create(personProto,{
    
    name : {value : 'Jane'},
    yearOfBirth : {value : 1995},
    job : {value : 'designer'},
    
});

*/
/******************************************
// PRIMITIVES vs OBJECTS

// primitives

var a = 23;
var b = a;
a = 40;
console.log(a);
console.log(b);

// objects

var obj1 = {
    name : 'Debz',
    age : 22
};

var obj2 = obj1;

obj1.age = 18;
console.log(obj1.age);
console.log(obj2.age);

// functions

var age = 22;
var obj = {
    name : 'Debby',
    city : 'Kigali'
};

function change(a,b){
    a = 25;            // changing a won't affect the outside bcz it is a primitive
    b.city = 'kampala'; // we does't pass the object but the reference that points to the object. when we change it, it is reflected outside
}
change(age,obj);
console.log(age);
console.log(obj.city);

*/

/*************************************************

// PASSING FUNCTIONS AS ARGUMENT

var years = [1990,1929,1997,1998,2007];

function arrayCalc (arr,fn){
    
    var arrRes = [];
    for(i=0;i<arr.length;i++){
        
        arrRes.push(fn(arr[i]));
         }
    return arrRes;
}

function calcAge(el){
    return 2020 - el;
}

function isFullAge (el){
    return el>=18;
}

function maxheartRate(el){
    
    if(el >=18 && el <= 81){
    return Math.round (206.9 - (0.67 *el));
    }
    else {
        return -1;
    }
}

var ages = arrayCalc(years , calcAge); // var ages is for storing the called functions
var fullAge = arrayCalc (ages,isFullAge);
var heartRate = arrayCalc (ages,maxheartRate);

console.log(ages);
console.log(fullAge);
console.log(heartRate);

*/
/******************************************************

//FUNCTIONS RETURNING FUNCTIONS

function interviewQuestion(job){
    
    if(job === 'teacher'){
        return function(name){
            console.log('what subject do you teach ' + name + '?');
        }
    }
    else if (job === 'designer'){
         return function(name){
        console.log(name + ', what is the meaning of ux design ?');
    }
         }
    
    else{
         return function(name){
        console.log('Hello!! what do you do ' + name + '?')
    }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Jane');
designerQuestion('Debz');
designerQuestion('Tom');
designerQuestion('Jerry');


interviewQuestion('teacher')('Simbi');         //another way to do so
interviewQuestion('')('kunta');

*/

//IMMEDIATELY INVOKED FUNCTION EXPRESSION(IIFE)

/*function game(){
    var score = Math.random * 10;
    console.log(score >=5);
}
game();

*/

/*********************************
//using IIFE


(function (){          //brackets before f(x) are to remove the error of f(x) declar. with no name so they make it an expression to avoid error
    var score = Math.random * 10;
    console.log( score >= 5 ); 
})();     // the behind brackets are to invoke the f(x) so it can be called and do smth.

//console.log(score);    // soooo data privacy is created, we can't access the var externally.

(function (goodLuck){         
    var score = Math.random * 10;
    console.log( score >= 5 - goodLuck); 
})(5);     

*/
/*************************************************************************
****************************************8

//CLOSURE

function retirement(retirementAge){
    var a = ' Years left until retirement'
    return function(yearOfBirth){
        
        var age = (2020 - yearOfBirth);
        console.log(retirementAge - age + a);
        }
}

var retirementRWA = retirement(55);
//retirement(55)(1998)
var retirementUS = retirement(66);
var retirementGermany = retirement(65);

retirementRWA(1998);
retirementUS(1998);
retirementGermany(1998);


//  re-do of interview questions using closures

function interviewQuestion(job){
    var a = ' , what subject do you teach?';
    var b = ' , what is the meaning of ux design ?';
    var c = 'Hello!! what do you do for a living ';
   
        return function(name){
            
        if(job === 'teacher'){
            console.log( name + a);
        }
   
         else if(job === 'designer'){
        console.log(name + b);
    }
         
         else{
        console.log( c + name + '?')
    }
    }
    
}

interviewQuestion('teacher')('Kanyombya');
interviewQuestion('')('Bill');

*/


// BIND, CALL AND APPLY

var john = {
    name: 'John',
    job: 'teacher',
    age: 26,
    presentation : function(style,timeOfTheDay){
        if(style === 'formal'){
            
            console.log('Good ' + timeOfTheDay + ' ladies and gentlemen!  my name is ' + this.name + ' I\'m a ' + this.job + ' and I\'m '+ this.age + ' years old');
        }
        else if(style === 'friendly'){
            
            console.log('hey! what\'s up! my name is ' + this.name + ' I\'m a ' + this.job + ' and I\'m '+ this.age + ' years old! have a nice '+ timeOfTheDay )
        }
    }
}

var Deborah = {
    name: 'Ingabire',
    age: 22,
    job: 'coder'
}
john.presentation('friendly', 'Morning');

john.presentation.call(Deborah,'formal','evening');

//john.presentation.apply(Deborah,['friendly','morning']);       // apply accept arguments as an array

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('afternoon');

var DeborahFormal= john.presentation.bind(Deborah, 'formal');
DeborahFormal('evening');


// re-do using the bind method

var years = [1990,1929,2002,1998,2007];

function arrayCalc (arr,fn){
    
    var arrRes = [];
    for(i=0;i<arr.length;i++){
        
        arrRes.push(fn(arr[i]));
         }
    return arrRes;
}

function calcAge(el){
    return 2020 - el;
}

function isFullAge (limit,el){
    return el>=limit;
}

var ages = arrayCalc(years, calcAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);


















