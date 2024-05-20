console.log("form validation Lab :::")
//#############################////////
//common 

//all ids
let errorDisplay=document.getElementById('errorDisplay');
let registration=document.getElementById('registration');
let login =document.getElementById("login");
//
let password=document.getElementsByName("password");
let confirmPassword=document.getElementsByName("passwordCheck")
let userName=document.getElementsByName("username")
let email=document.getElementsByName("email")
// let loginUsername=document.getElementByName("LoginUsername")


let isErrorFound=true;
//***************************************************Part 1: IntrFoduction */
function isErrorFoundChecker(bool){
    if(!bool){
        errorDisplay.style.display='block';
        errorDisplay.innerHTML="<h1>hell am error ,you created me </h1>"
        console.log("somwthing missed")
    }
    else{
        errorDisplay.style.display="none";
        console.log("it seems greate")
    }
}
isErrorFoundChecker(isErrorFound);



let passVal=password.value;
let passCheck=confirmPassword.value;

//****************************************************Part 2: General Requirements */
/*
1.General Requirements: Whenever any of these validation requirements fail, an appropriate error should be communicated to the user (in most cases, the actual requirement listed below serves as a good error message), and focus should return to the input element that the error originates from. If any requirements fail, the form should not submit.
*/
/// one: insert required fo input ,not to accecpt at least empty field
/// and has checked the term and keep login check box ....done by modified html
// and third we can do it in js side as follows  
registration.addEventListener('submit',(e)=>{
    e.preventDefault();
    let passVal=password.value;
    let passCheck=confirmPassword.value;

console.log("passowrd ...",passVal)
console.log("confiredpas...",passCheck)
    if(password.value!==confirmPassword.value){
        isErrorFound=true;
        
    }

})
function userNameValidation(){
    return "valid"

}
function emailValidation(){
    return "valid"
}
function passwordValidation(){
    return "valid"
}
