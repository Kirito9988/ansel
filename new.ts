//const name1:Array<string> = ['tarun','abhi'];
//const promise: Promise<number> = new Promise((resolve,reject)=>{
  //  setTimeout(() =>{
    //    resolve(10);
    //}, 2000);
//});
//promise.then(data =>{
//})


//let user2 = 'Tarun';
//let eyesight:number = 2.0;
//let Age:number = 60;
//let offence:number = 2;
//let eligibility = true;
//let amount = 200000;
//let carAmt = 0;
//let premium = 0;
//let accept = true;
//console.log("Welcome:"+ user2);
//while(eligibility)
//{
//    if(eyesight < 2.5 && Age < 70 && offence < 3 )
  //  {
    //    console.log("Procced further");
 //       carAmt += amount;
  //      if(carAmt <= 100000)
    //    {
   //         console.log("Car has a very low value.");
     //       eligibility = false;
     //   }
     //   else
       // {
           // premium = premium + (carAmt*(1/120));
         //   let totalAmount = Math.round(premium)+carAmt;
   //         console.log(totalAmount);
     //   }
       // if(accept === true){
        //  console.log("insurance Buy")
        //  eligibility = false;
        //}
    //    else
  //      {
          // console.log("Not Buying")
        //   break;
      //  }
    //}
   // else
    //{
      //console.log("Not eligible");
    //  break;
  //  }
//}

async function getData() {
    try {
      let promise = new Promise<string>((_resolve, reject) => {
        setTimeout(() => reject(Error('Errors!')), 1000)
      });
      const res = await promise;
    } catch (error) {
      console.log(error.message);
    } finally {
      console.log('done');
    }
  }
  getData();

