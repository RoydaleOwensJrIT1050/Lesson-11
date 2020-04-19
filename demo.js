//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/


console.log("console log - hello world");//log in developer tools
var globalX = 100;//global scope

function hello() //function definition
{
    alert("alert - hello world!");//popup window    
}

function add()//function definition
{
    var x = 3;
    var y = 5;
    var sum = x + y;
    alert("Sum is " + sum);
}

function substract()
{
    var a = 1000;
    var b = 100;
    var diff = a - b;
    alert("Difference is" + diff);
}

function increment()
{ 
    var y = 10;//local scope - resets y everytime function is called
    globalX = globalX+10;//can add any number to itself
    //y = y+10;
    y+=10;//same as y = y+10;
    alert("x="+globalX + "y="+y); 

}

/* JS statements
Conditional statements:
If statement
Switch statement
*/

function compare()
{
    var charlie = 120;
    var john = 120;
    
    //conditional if statement
    
    if (charlie > john)
    {
        alert("Charlie is taller");
    }
    else if( charlie == john)//"=" is assignment; "==" is comparison
    {
        alert("Charlie and John are of the same height");
    }
    else
    {
        alert("John is taller");
    }

}

function IsTropical(fruit)//fruit is a variable and is an input parameter
{
    
    var isTropical = false; //boolean variable: True or False

    switch(fruit)
    {
        case "banana":
            isTropical = true;
            break;

        case "papaya":
            isTropical = true;
            break;

        case "tomato":
            isTropical = false;
            break;

        case "mango":
            isTropical = true;
            break;

        case "watermelon":
            isTropical = true;
            break;

        default:
            isTropical = false;            
    }

    alert("Is "+ fruit+ " tropical?"+ isTropical );

}
function Grades(grd) 
{
    var Grades = false;

    switch(grd)
    {
        case "90 and Above Is a A":
            Grades = true;
            break;
        case "80-89 Is a B":
            Grades = true;
            break;
        case "70-79 Is a C":
            Grades = true;
            break;
        case " 60-69 Is a F":
            Grades = true;
            break;
        default:
            Grades = false;
        

    }
    alert("Your Grade is " + grd+ " " + Grades ); 
}

/*
Loops:
For loop
While loop
Do while loop

Break
*/

function Repeat( message )
{
    var counter = 0;
    console.log("While loop:");
    while (counter < 5)
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    }

    counter = 0;
    console.log("Do - While loop:");
    do 
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    } while (counter < 5);

    console.log("For loop:");
    /************************************************* */
    for(var counter=0; counter < 5; counter++)
    {
        console.log(message);
    }
}

function CountMultiples(num)
{
    var totalMultiples = 0;

    for(var i=1;i<=100;i++)
    {
        if (i % num == 0)//This means it is a multiple
            totalMultiples++;
    }
    console.log("Total multiples of "+ num + " = "+totalMultiples);
}
function add()
{
    var x = 5;
    var y = 150;
    var totalsum
    for(var z=1;x=>y;z++)
        if(z % 2 ==0)
        
        totalsum++;
    
        

    
}
function CountMultiples(num) 
{
  var totalMultiples = 0
  
  for(var c=1;c<=200;c++)
  {
      if(c % num == 0)
      totalMultiples++;
  }
  console.log("Total multiples of"+ num + " = "+totalMultiples);
    
  
    
}

function DisplayTriangle(num)
{
    var strRow="";
    var totalStars=0;
    for (var i=1;i<=num;i++){        
        strRow = ""      ;//Reset strRow
        for (var j=1; j<=i;j++){
            strRow = strRow + "*";
            totalStars++;
        }        
        //Now we have a row. Lets display the row
        console.log(strRow);     
    }
    return totalStars;
}
function DisplayABTriangle(num)
{
    var strRow="";
    var totalAB=0;
    for (var x=1;x<num;x++){
        for (var c=1; c<=x; c++){
            strRow = strRow + "AB";
            totalAB++;
        }
    
        console.log(strRow)
    }
    
   return totalAB;
}
function CountAbInTriangle(num)
{
    var total = DisplayABTriangle(num);
    console.log("Total Starts in a triangle with"+ num + "rows = "+ total);
}

function CountStarsInTriangle(num)
{
    var total = DisplayTriangle(num);
    console.log("Total starts in a triangle with "+ num + " rows = "+ total);
}
