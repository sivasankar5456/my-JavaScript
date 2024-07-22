
// let d1= new Date(); // it gives the todays date
// console.log(d1);  // ----> 2022-11-27T06:26:43.975Z

// let d1= Date();  // gives the indian standard time
//  console.log(d1); //  ---> Sun Nov 27 2022 11:57:29 GMT+0530 (India Standard Time)


//let d2= new Date(1000);  // by paaisng any value into it ,it gives the 1970s date and time
 //console.log(d2);       // the passed value in it that value is updated int millisec
                        // we dont use it most

// let d2= new Date(2022,6,6,5,30,0,0); // here month is index position it start from 0.if you give 6 it return the 7thmonth
//                                    // if you give date after time values all or 0 it go back to 5:30minutes
//                   // passed values will be added
//  console.log(d2); // ---->  2022-07-06T00:00:00.000Z


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let d1 = new Date();
// console.log(d1);
// console.log(typeof d1);    // ----> object

// let d2 = new Date(2022,05,06,5,30,0,0);
// console.log(d2);   // ---->  2022-06-06T00:00:00.000Z

/////////////////////            DATE METHODS               /////////////////////



/////////////  GET METHODS  ////////////////



let d2=new Date();

// console.log(d2.getFullYear());    // ----> 2022
// console.log(d2.getMonth());     // ----> 10
// console.log(d2.getDay());      // ----> 0
// console.log(d2.getDate());      // ----> 27
// console.log(d2.getHours());     // ----> 12
// console.log(d2.getMinutes());    // ----> 3
// console.log(d2.getSeconds());     // ---->  
// console.log(d2.getMilliseconds());  // ---->

// console.log(d2.getUTCFullYear());

// console.log(d2.getTimezoneOffset());      // to get diff between indian and universal..  -330(-5:30) 


////   international time

// console.log(d2.getUTCFullYear());    
// console.log(d2.getUTCMonth());     
// console.log(d2.getUTCDay());      
// console.log(d2.getUTCDate());     
// console.log(d2.getUTCHours());     
// console.log(d2.getUTCMinutes());    
// console.log(d2.getUTCSeconds());     
// console.log(d2.getUTCMilliseconds()); 

//////////////   SET METHODS   ///////////////  

// let d2 = new Date();

// d2.setFullYear(2024);
// d2.setMonth(2);
//  d2.setDate(25);
//  d2.setHours(45);
// d2.setMinutes(45);
// d2.setSeconds(45);
// d2.setMilliseconds(450);


// console.log(d2);



///////////////   TO METHODS ///////////////////

 let d1 = new Date();

// console.log(d1.toUTCString());// for international standard time  ----> Sun, 27 Nov 2022 06:38:30 GMT

// console.log(d1.toUTCDateString());   // it is wrong 
// console.log(d1.toUTCTimeString());   // it is wrong


// console.log(d1.toString());
// console.log(d1.toDateString());
// console.log(d1.toTimeString());


// console.log(d1.toLocaleString());
// console.log(d1.toLocaleDateString());
// console.log(d1.toLocaleTimeString());













