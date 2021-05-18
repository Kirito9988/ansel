class Phone1
   {
    private IMEI:string;
    public calling:string;
    public texting:string;
    public camera:string;
    public games:string;
    
      constructor(IMEI: string,calling:string,texting:string,camera:string,games:string) 
      {
        this.IMEI = IMEI;
        this.calling = calling;
        this.texting = texting;
        this.camera = camera;
        this.games = games;
      }
    private getIMEI()
    {
        let num6 = "12345678901234567"
        if(num6.length == 15)
        {
        console.log("IMEI"+ this.IMEI);
      }
    else 
    {
        console.log("Not Valid");
    }
}
  
     public getCall()
      {
          let bill = true;
          let balance = 10;
          while(bill)
          {
          if(balance >= 0 )
          {
              console.log("Calling " + this.calling);
              bill= false;
              break;
          }
          else
          {
              console.log("Balance Low");
              break;
          }
        }
      }
  
    public gettext()
     {
      let bill1 = true;
      let balance1 = 10;
      while(bill1)
      {
      if(balance1 >= 0 )
      {
          console.log("Text " + this.texting);
          bill1 = false;
          break;
      }
      else
       {
          console.log("Text Not Sent");
          break;
       }
     }
   } 
     public clickPhoto()
       {
           let memory = 2;
           let cam = true;
           while(cam)
           {
               if(memory > 0)
               {
                   console.log("Photo "+ this.camera);
                   cam = false;
                   break;
               }
               else
               {
                   console.log("Not enough Memory");
                   break;
               }
           }
       }
  
     public playGames()
       {
           let games = 0;
           let playing = true;
           while(playing)
           {
               if(games > 0)
               {
                   console.log("Playing " + this.games);
                   playing = false;
                   break;
               }
               else
               {
                   console.log("No "+ this.games);
                   break;
               }
           }
       }
    }
  
  const user2 = new Phone1("123456789012345","Available","Sent","Clicked","Games");
  user2.clickPhoto();
