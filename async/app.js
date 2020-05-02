//1

// console.log("Whats thee Expected output?");

// function OtherFun(params) {
    
//     console.log('another funtion');
    
// }

// console.log('start');
// OtherFun();
// console.log('End');








//2

// console.log('start');


// setTimeout(() =>{
    
//     console.log('We are in setTimeOut');
    
// },2000);
// console.log('End');

//CallStack webAPIs


//3
//Assuming login SignUp
// console.log("Stert"); 
// function loginUser(email, password ){ 
//     setTimeout(() =>{ 
//         console.log("Now we have the data"); 
//         return { userEmail: email };  
//     }, 5000)
// } 
// const user = loginUser("jsfun@js.com", 123456); 
// console.log(user); 
// console.log("Finish");






//4/
// console.log("Start"); 
// function loginUser(email, password,callback ){ 
//     setTimeout(() =>{ 
//         console.log("Now we have the data"); 
//         callback({ userEmail: email });  
//     }, 5000)
// } 
// const user = loginUser("jsfun@js.com", 123456, user =>{
//     console.log(user);
// }); 

// console.log("Finish");





//5


// console.log("Start"); 
// function loginUser(email, password,callback ){ 
//     setTimeout(() =>{ 
//         console.log("Now we have the data"); 
//         callback({ userEmail: email });  
//     }, 5000)
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
//     })
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
// // const user = loginUser("jsfun@js.com", 123456, user =>{
// //     console.log(user);
// //     getUserVideos(user.userEmail, vid => {
// //         console.log(vid);
// //     })
// // }); 

// loginUser("Nitin@gmail.com","haha")
// .then(user => getUserVideos(user.userEmail))
// .then(video => getVideoDetail(video[1]))
// .then(detail => console.log(detail));

// console.log("Finish");

// // const uname = loginUser("Nitin@gmail.com","pass");
// // const detail = getVideoDetail("vid1");


//8



console.log("Start"); 
function loginUser(email, password ){ 
    return new Promise(( resolve, reject) => { 
        setTimeout(() =>{ 
            console.log("Now we have the data"); 
            reject(new Error("Nill"));
            resolve({ userEmail: email });  
        }, 1000)
    }); 
} 
function getUserVideos(email) {
    return new Promise(( resolve, reject) => { 
        setTimeout(() =>{ 
            console.log("Now we have videos"); 
            resolve( ['video1','v2','v3']);  
        }, 1000)
    }); 
} 

function getVideoDetail(video) {
    return new Promise(( resolve, reject) => { 
        setTimeout(() =>{ 
            console.log("Title of video"); 
            resolve( 'Perfect-Ed Sheeran');  
        }, 1000)
    }); 
} 

async function displayUserDetails() {
    try {
        const logedUser = await loginUser("Nitin@gmail.com","pass");
        const videos = await getUserVideos(logedUser.email);
        const detail = await getVideoDetail(videos[0]);
        console.log(detail);
    } catch (error) {
        throw error;
    }
}

displayUserDetails();
console.log("Finish");


