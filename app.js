var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber =document.querySelector("#lucky-number");
var checkBtn = document .querySelector("#check-button");
var messageDisplay =document.querySelector("#message");

function checkBirthdayLucky()
{
    var dob = dateOfBirth.value;
    // console.log(dob);
      var sum =sumOfNumber(dob);
      if(sum&&dob)
      checkLucky(sum,luckyNumber.value);
      else
      messageDisplay.innerText ="please enter both the fields😠"



}
function sumOfNumber(dob)
{
    var dob= dob.replaceAll("-","");
    // console.log(dob);
    let sum = 0;
    for(let index=0;index<dob.length;index++)
    {
        sum=sum + Number(dob.charAt(index));
    }
    // console.log(sum);
    return sum;
   
}
function checkLucky(sum,luckyNumber)
{   
    if(sum%luckyNumber==0)
    {
        messageDisplay.innerText ="your birthday is lucky 😘"
    }
    else{
        messageDisplay.innerText = "your birthday is not lucky 😣"
    }
}
checkBtn.addEventListener("click",checkBirthdayLucky);