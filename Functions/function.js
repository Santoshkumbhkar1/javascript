
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



// function cutpieces(fruits)
// {
//     return fruits*4;
// }


// function fruitprocessors( apple, mango){
//     const applepiece  = cutpieces(apple);
//     const mangopieces = cutpieces(mango);
//     const juise = `The juise of ${applepiece} apples and ${mangopieces} mango `;

//     return juise;
// }
// const result = fruitprocessors(5,3);
// console.log(result);

// const result2 = fruitprocessors(6 ,7);
// console.log(result2);



const calcaverage=(m1, m2, m3)=>{

    const navg =( m1+m2+m3)/3;
    return navg;
}

const a1 = calcaverage(44, 23 ,71);
const a2   = calcaverage(65 ,54, 49);

const checkwinner = (a1, a2)=>{

    if(a1>=2*a2){
        console.log(`"Dolphin win (${a1} vs ${a2} )"`);
    }
    else if(a2>=2*a1){
        console.log(`"kolas win (${a2} vs ${a1} )"`);
    }
    else{
        console.log(`None of them won the match ${a1} vs ${a2}`);
    }  
}

checkwinner(a1,a2);





