function f(){
    return new Promise(function(resolve,reject){

        setTimeout(function(){
            resolve();
        },2000);
    });
}

let p;

for(let i=0;i<3;i++)
{
    p=f();
    p.then(function(){
        console.log("resolved"+i);
    });
}