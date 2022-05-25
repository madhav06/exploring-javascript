// demonstrate try...catch...finally block:

const multiply = (a,b) => a * b;

let result = 0;

try{
    result = multiply(30,50);
} catch (e){
    console.log(e.message)
} finally {
    console.log({result})
}