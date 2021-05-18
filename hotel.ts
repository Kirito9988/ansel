const readlineSync1 = require("readline-sync");
let a = true;
let b = true;
let room = " ";
let c =true;
let price:number;
let Amt:number;
let finalPrice:number;
let d = true;
roomList();
upgrade("");

function roomList()
{
    while(a)
    {
  console.log("Room that we provide") ; 
  console.log("1. The Base Room");
  console.log("2. The Premium Room");
  console.log("3. The Suite");
  let roomChoice = readlineSync1.question("Which room you want?");
  switch(roomChoice)
    {
       case "The Base Room":
           room = "The Base Room";
           roomFeature(room);
           a = false;
           break;
     
       case "The Premium Room":
           room = "The Premium Room";
           roomFeature(room)
           a = false;
           break;
     
       case "The Suite":
          room = "The Suite";
          roomFeature(room)
          a = false;
          break;

       default:
           console.log("Select a Valid Room: " );
          
    } 
  }
}
 function roomFeature(roomSelected:string)
  {
    while(b)
    {
      if(roomSelected === "The Base Room")
       {
            price = 5000;
           console.log("Price : "+ price);
           b = false;
       }

      else if(roomSelected === "The Premium Room")
       {
          price = 10000; 
          console.log("Price : " + price);
          b = false;
       }

      else if (roomSelected === "The Suite")
      {
         price = 15000;
         console.log("Price : " + price);
         b = false;
      }
      else
      {
       console.log("Select a valid option");
      }
   }
}

function upgrade(roomUpgrade:string)
{
    while(c)
    {
        roomUpgrade = readlineSync1.question("Do you want a Upgrade?");  
        if(roomUpgrade === 'yes' || roomUpgrade === "Y" )
        {
            console.log("We offer upgrade for every room . There are 3 levels: \r\n 1.Silver \r\n 2.Gold \r\n 3.Platinum ");
            upgradeFeatures();
            c =false;
        }
        else if(roomUpgrade === "no" || roomUpgrade === "N")
        {
            console.log("No upgrade take");
            console.log("Final Amount:" + price);
            c = false;
        }
        else{
            console.log("Give a valid response(Y/N)");
        }
    }
}

function upgradeFeatures()
{
  while(d)
    {
  let features = readlineSync1.question("Which Upgrade you want?");
  switch(features)
  {
     case "Silver":
         console.log("Free Breakfast included");
         Amt = 1000;
         finalPrice = price + Amt;
         console.log("Final Price : "+ finalPrice);
         d = false;
         break;

         case "Gold":
         console.log("Free Breakfast and Sauna included");
         Amt = 2500;
         finalPrice = price + Amt;
         console.log("Final Price : " + finalPrice)
         d = false;
         break;

         case "Platinum":
        console.log("Every Meal is free and sauna included");
        Amt = 4500;
        finalPrice = price + Amt;
        console.log("Final Price : " + finalPrice);
        d = false;
        break;

        default:
            console.log("Select a valid option")
    }
  }
}