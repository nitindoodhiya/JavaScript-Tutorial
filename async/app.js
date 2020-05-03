

//1


// function OtherFun(params) {
    
//     console.log('another funtion');
    
// }

// console.log('start');
// OtherFun();
// console.log('End');








//2

// console.log('start');

// function OtherFun(){
// setTimeout(() =>{
    
//     console.log('We are in setTimeOut');
    
//    },2000);
// }
// OtherFun();
// console.log('End');

// https://gist.github.com/jesstelford/9a35d20a2aa044df8bf241e00d7bc2d0

//3
// Assuming login SignUp
// console.log("Start"); 
// function loginUser(email, password ){ 
//     setTimeout(() =>{ 
//         console.log("Now we have the data: "+ email); 
        
//         return { userEmail: email };  
//     }, 2000)
// } 
// const user = loginUser("jsfun@js.com", 123456); 
// console.log(user); 

// console.log("Finish");






//4/
// console.log("Start"); 
// function loginUser(email, password,callback ){ 
//     setTimeout(() =>{ 
//         console.log("Now we have the data"); 
//         callback({ userEmail : email });  
//     }, 2000)
// } 
// const user = loginUser("jsfun@js.com", 123456, user =>{
//     console.log(user.userEmail);
// }); 

// console.log("Finish");





//5


// console.log("Start"); 
// function loginUser(email, password,callback ){ 
//     setTimeout(() =>{ 
//         console.log("Now we have the data"); 
//         callback({ userEmail: email });  
//     }, 2000)
// } 
// function getUserVideos(email,callback) {
//     setTimeout(()=>{
//         callback( ['video1','v2','v3'] );
//     },2000)
// } 
// const user = loginUser("jsfun@js.com", 123456, user =>{
//     console.log(user);
//     getUserVideos(user.userEmail, vid => {
//         console.log(vid);
//     });
// }); 

// console.log("Finish");


//if we keep on using this its messy



//6
//PROMISES

// const promise = new Promise(( resolve, reject) => { 
//     setTimeout(() =>{ 
//         console.log("got the user"); 
//         reject(new Error("User not logged n")); 
//     }, 2000);
//  }); 
// promise
//     .then(user => {
//         console.log(user);
//     }).catch(err =>{ 
//         console.log(err.message)
//     }); 



//7

// console.log("Start"); 
// function loginUser(email, password ){ 
//     return new Promise(( resolve, reject) => { 
//         setTimeout(() =>{ 

//             console.log("Now we have the data"); 
//             if(email==="")
//                 reject("Empty Email");
//             resolve({ userEmail: email });  
//         }, 1000)
//     }); 
// } 
// function getUserVideos(email) {
//     return new Promise(( resolve, reject) => { 
//         setTimeout(() =>{ 
//             console.log("Now we have videos");
//             if(email==="1")
//                 reject("Sorry I love you as friend!");
//             resolve( ['video1','v2','v3']);  
//         }, 1000)
//     }); 
// } 

// function getVideoDetail(video) {
//     return new Promise(( resolve, reject) => { 
//         setTimeout(() =>{ 
//             console.log("Sending Title of video"); 
//             resolve( 'Perfect-Ed Sheeran');  
//         }, 1000)
//     }); 
// } 
// // const user = loginUser(email, password, user =>{
// //     console.log(user);
// //     getUserVideos(user.userEmail, vid => {
// //         console.log(vid);
// //     })
// // }); 
// var email="properemail@gmail.com";
// var password = "";
// loginUser(email,password)
// .then(user => getUserVideos(user.userEmail))
// .then(video => getVideoDetail(video[0]))
// .then(detail => console.log(detail)).catch(err => {

//     console.log(err);

// });

// console.log("Finish");

// // const uname = loginUser("Nitin@gmail.com","pass");
// // const detail = getVideoDetail("vid1");


//8



// console.log("Start"); 
// function loginUser(email, password ){ 
//     return new Promise(( resolve, reject) => { 
//         setTimeout(() =>{ 
//             console.log("Now we have the data"); 
            
//             resolve({ userEmail: email });  
//         }, 1000)
//     }); 
// } 
// function getUserVideos(email) {
//     return new Promise(( resolve, reject) => { 
//         setTimeout(() =>{ 
//             console.log("Now we have videos"); 
//             resolve( ['video1','v2','v3']);  
//         }, 1000)
//     }); 
// } 

// function getVideoDetail(video) {
//     return new Promise(( resolve, reject) => { 
//         setTimeout(() =>{ 
//             console.log("Title of video"); 
//             resolve( 'Perfect-Ed Sheeran');  
//         }, 1000)
//     }); 
// } 

// async function displayUserDetails() {
//     try {
//         const logedUser = await loginUser("Nitin@gmail.com","pass");
//         const videos = await getUserVideos(logedUser.email);
//         const detail = await getVideoDetail(videos[0]);
//         console.log(detail);
//     } catch (error) {
//         throw error;
//     }
// }

// displayUserDetails();
// console.log("Finish");


