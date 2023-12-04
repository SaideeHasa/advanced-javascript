function add(num1 , num2){
    console.log([...arguments]);
       return num1 + num2 + arguments[2] + arguments[3] ;   
}
const result = add(2 , 4, 5 ,7,5);
console.log(result)
