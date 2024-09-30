function bmi()
{
    //get feet and inches value
    let feet=document.getElementById("feet").value;
    //console.log(feet);
    let inch=document.getElementById("inch").value;
    //console.log(inch);
    //merge and feet inch in one value
    let metre=feet+"."+inch;
    //feet to metre conversion and get the height in metre
    let height=metre/3.2808;
    //get weight value
    let weight=document.getElementById("weight").value;
   
    
    //Bmi calculation
    let bmi=weight/Math.pow(height,2);
    console.log(bmi);
    //Bmi showing in p tag with condition
    if(bmi<18.5)
    {
        document.querySelector("p").innerHTML="Your Body Mass Index(BMI) is : "+(Math.round(bmi*100)/100).toFixed(2)+"<br>" + "Under Weight";
    }
    if(bmi>18.5 && bmi<=24.9)
    {
        document.querySelector("p").innerHTML="Your Body Mass Index(BMI) is : "+(Math.round(bmi*100)/100).toFixed(2)+"<br>" + "Normal";
        document.querySelector("p").style.color="green";
    }
    else if(bmi>24.9 && bmi<=29.9)
    {
        document.querySelector("p").innerHTML="Your Body Mass Index(BMI) is : "+(Math.round(bmi*100)/100).toFixed(2)+"<br>" + "Over Weight";
    }
    else if(bmi>30)
    {
        document.querySelector("p").innerHTML="Your Body Mass Index(BMI) is : "+(Math.round(bmi*100)/100).toFixed(2)+"<br>" + "Obesity";
    }

}
document.querySelector(".btn").addEventListener("click", bmi);