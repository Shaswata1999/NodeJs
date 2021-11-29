//step 1
var sum = function(a,b){
    return a+b
}
function ComplexExp(add){
    console.warn(add(200,300))
}
ComplexExp(sum)

//step 2
function ComplexExp1(sub){
    console.warn(sub(300,100))
}
ComplexExp1(function(a,b){
    return a-b
})