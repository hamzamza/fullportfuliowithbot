let p =new Promise((reject,resolve) =>{
if(0){
    resolve('secces')
}
else if (1)reject('failed')
}
)
p.then((message)=>{console.log('this is in the then  '+message)})
p.catch((mes)=>{console.log('this is the catch'+mes)})




fetch('user.json')