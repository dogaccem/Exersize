var myPromises = new Promise(function(resolve, reject){
    var result = true;
    if(result){
        resolve("success");
    }
    else{
        reject("error");
    }
});

myPromises
.then(data =>{
    console.log(data);
})
.catch(err=>{
    console.log(err);
})