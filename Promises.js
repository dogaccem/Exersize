// var myPromises = new Promise(function(resolve, reject){
//     var result = true;
//     if(result){
//         resolve("success");
//     }
//     else{
//         reject("error");
//     }
// });

// myPromises
// .then(data =>{
//     console.log(data);
// })
// .catch(err=>{
//     console.log(err);
// })

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 300);
  });
  
  myPromise
    .then(handleResolvedA, handleRejectedA)
    .then(handleResolvedB, handleRejectedB)
    .then(handleResolvedC, handleRejectedC)
    .catch(handleRejectedAny);
  