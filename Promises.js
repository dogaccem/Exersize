var myPromise = new Promise(function(resolve,reject){
    var result = true;
    if(result){
        resolve("Başarılı");
    }
    else{
        reject("Başarısız");
    }
})

myPromise
.then(data=>{
    console.log(data);
})
.catch(err=>{
    console.log(err);
})

fetch("http?.......")
.then(res => res.json())
.then(data => {
    console.log(data);
})