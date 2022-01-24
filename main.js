// function myFirst(x,y,callback){
//     let item = 5;
//     callback(item)
// }

// function callback(item)
// {
//     console.log("data: ", item);
// }

// myFirst(1,2,callback);

//var cities = ["antalya","istanbul"];

// function getAll(name,index,data)
// {
//     console.log("city: ",data);
// }

// cities.forEach(getAll);

// function getAllCb(name,index,data)
// {
//     console.log("name: ", name);
// }

// cities.forEach(getAllCb);

//cities.forEach(function(name,index){console.log("name:",name);})

// function myFunc(x,y,callback)
// {
//     console.log("1.satır");
//     callback();
//     console.log("3.satır");
// }

// function callbackFunc()
// {
//     console.log("2.satır");
// }

// myFunc(1,2,callbackFunc);

var myFunc = (callback) => {
    console.log("1.satır");
    callback();
    console.log("3.satır");
}

var callbackFunc = () =>{console.log("2.satır");}

myFunc(callbackFunc);