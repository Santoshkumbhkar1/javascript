
// const arr1 =[ 'hem', 'sem' ,'nem', 'can'];
// console.log(arr1);

// const years = new Array(1919 , 1991 ,2000, 2001,2005);
// console.log(years);


// const calcAge1 = bithyear => 2037 - bithyear;

// const year2=  [1990,1919 , 1991 ,2000, 2001,2005 ];

// for(let i =0 ; i<year2.length; i++){
//      console.log(calcAge1(year2[i]));
// }

// console.log("This is the result by the length index function");
// console.log(calcAge1(year2[year2.length-1]));


// basics array methods in javascript

//  add elements in the array
const arr1 =[ 'hem', 'sem' ,'nem', 'can'];

const newlength = arr1.push('memos');
console.log(arr1,newlength);

const t= arr1.unshift('bigRam');
console.log(arr1, t);


// //  removemethods
// const popelement=  arr1.pop();
// console.log(arr1,);

// //  it remove first element from the array
// arr1.shift();
// console.log(arr1);

// // it returns the index of the current value

// console.log(arr1.indexOf('sem'));

// // includes method 

// console.log(arr1.includes('hello'));  // gives boolean values 
 

//  object in javscript 

// const obj = {
//     firtname: 'seru',
//     lastname:  'gaya',
//     age: 2024-1999,
//     job: 'doctor',
//     freinds:[ 'hem', 'sem' ,'nem', 'can']
// };

// console.log(obj);
// console.log(obj.age , obj['age'] , obj.firtname ,obj['firtname']);

// const namekey = 'name';
// console.log(obj['firt'+ namekey]);
// console.log(obj['last'+ namekey]);

// document.write(obj['firtname']);

// document.write(JSON.stringify(obj));


// objects methods 


const obj = {
        firtname: 'seru',
        lastname:  'gaya',
        age: 2024-1999,
        birthyear:2001,
        job: 'doctor',
        freinds:[ 'hem', 'sem' ,'nem', 'can'],

        ///////////////////////////////////////////////////////////
        // calculating age from the this keyword 
        // calcage:function(){
        //     console.log(this);
        //     return 2023-this.birthyear;
        // }

        calcage:function(){
                this.age =2023-this.age;
                return this.age;
            }

    };


    console.log(obj.calcage());
    console.log(obj['calcage']);

// calcage: function(){
//     this.age = 2023-this.birthyear;
//     return this.age;
// };


// /////////////// coding challenge for comparing BMI index 

const Mark ={
    fullname: 'Mark mittal',
    mass:     78,
    height: 1.69,
    calcBMI :function(){
        this.BMI =  (this.mass)/(this.height**2);
        return this.BMI;
  
   }
};

const John={
    fullname:'John sheru',
    mass: 92,
    height:1.95,
    calcBMI :function(){
        this.BMI =  (this.mass)/(this.height**2);
        return this.BMI;
  
   }
}

//  const calcBMI =function(){
//       BMI =  (this.mass)/(this.height*this.height);
//       return this.BMI;

//  }

 Mark.calcBMI();
 John.calcBMI();
console.log(Mark.BMI , John.BMI);









