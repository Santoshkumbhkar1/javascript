
const arr1 =[ 'hem', 'sem' ,'nem', 'can'];
console.log(arr1);

const years = new Array(1919 , 1991 ,2000, 2001,2005);
console.log(years);


const calcAge1 = bithyear => 2037 - bithyear;

const year2=  [1990,1919 , 1991 ,2000, 2001,2005 ];

for(let i =0 ; i<year2.length; i++){
     console.log(calcAge1(year2[i]));
}

console.log("This is the result by the length index function");
console.log(calcAge1(year2[year2.length-1]));