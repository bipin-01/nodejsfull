const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a -b;
}

const divide = ( a, b ) => {
    if (b==0) 
    {return "sry"}
    else {
        console.log("hello world how are you")
    }
}
module.exports = { add, subtract, divide }
