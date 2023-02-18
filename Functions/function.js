
function logger(){
    console.log("hello from the javscript");
}
logger();


// function fruitprocessors( apple ,mango){

//     const juise = `The juise of ${apple} apples and ${mango} mango `;

//     return juise;
// }
// const result = fruitprocessors(5,3);
// console.log(result);

// const result2 = fruitprocessors(6 ,7);
// console.log(result2);

//  arrow function

//  const calcAge1 = bithyear => 2037 - bithyear;
//  console.log(calcAge1(1991));


//  const retire_ment = (birthyear, firstname)=>{
//    const age = 2037- birthyear;
//    const retire_ment =70-age;
//    return `${firstname} in ${retire_ment} `;
//  }

//  console.log(retire_ment(1990 , 'jon'));
//  console.log(retire_ment(1995 , 'meme'));



function cutpieces(fruits)
{
    return fruits*4;
}

function fruitprocessors( apple ,mango){
    const applepiece  = cutpieces(apple);
    const mangopieces = cutpieces(mango);
    const juise = `The juise of ${applepiece} apples and ${mangopieces} mango `;

    return juise;
}
const result = fruitprocessors(5,3);
console.log(result);

const result2 = fruitprocessors(6 ,7);
console.log(result2);




