 
 function hello(){
    return "Good Morning!";
 }

 function greet(name,f){
    const a=f();
    console.log(a,name);
   // console.log(`${a} ${name}`);

 }

 var name1="Vamshi";
 greet(name1,hello);

 