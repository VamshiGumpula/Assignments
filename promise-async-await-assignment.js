
async function getData(uId) {
    let myPromise = new Promise(function(resolve) {
          setTimeout(function(){ console.log("Fetched the data!");//2
          resolve(uId);
          }, 4000);
       console.log("start");//1
      });
     
 
     myPromise.then(
       function(value){  
         console.log("Email id of the user id is: " + value);//2
         console.log("end");
                 }
     );
     let x=await myPromise;
  }
  getData("skc@gmail.com");