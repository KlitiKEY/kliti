function pagesa() {
    var name;
    var surname;
    var time;


    name=document.getElementById("name").value;
    surname=document.getElementById("surname").value;
    time=document.getElementById("time").value;
    

    document.getElementById("result").innerHTML= " Appointment has been scheduled for Ms." + name +"  " + surname + " on " + time ;
}
function haircut(){
    var x;
    var r=confirm("Are you shure you want to book this appointment for a Hair Cut?");
    if (r==true)
    {
    x=alert("Thank you for choosing us!");
    }
    else
    {
    x=alert("Your appointment has been canceled. Feel free to chose from our other options.");
    }

}
function haircolor(){
    var x;
    var r=confirm("Are you shure you want to book this appointment for a Hair Coloring?");
    if (r==true)
    {
    x=alert("Thank you for choosing us!");
    }
    else
    {
    x=alert("Your appointment for Hair Coloring has been canceled. Feel free to chose from our other options.");
    }

}
function nailgel(){
    var x;
    var r=confirm("Are you shure you want to book this appointment for a Nail Gel Treatement?");
    if (r==true)
    {
    x=alert("Thank you for choosing us!");
    }
    else
    {
    x=alert("Your appointment for Nail Gel Treatement has been canceled. Feel free to chose from our other options.");
    }

}
function makeup(){
    var x;
    var r=confirm("Are you shure you want to book this appointment for a Make-Up Treatement?");
    if (r==true)
    {
    x=alert("Thank you for choosing us!");
    }
    else
    {
    x=alert("Your appointment for a Make-Up Treatement has been canceled. Feel free to chose from our other options.");
    }

}