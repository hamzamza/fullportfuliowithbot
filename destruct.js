

const list =document.getElementById('list')
for(var i=0;i<5;i++){
const listEl = document.createElement('li')
listEl.textContent = 'list item # ' + (i+1) ;
list.appendChild(listEl);
}
 const items =document.getElementsByTagName('li')
 const item =items[items.length-1]
 item.remove()
 item2=items[items.length-1]
 let j=document.createTextNode("hello world")
item2.appendChild(j)
item2.textContent="ahya by"



const paragraph=document.createElement('p')
paragraph.textContent = "safi salina"
list.appendChild(paragraph)


const button =document.getElementById('btn')
button.addEventListener('click',(e)=>console.log("first"))
button.addEventListener('click',(e)=>console.log("second"))



function ahya(){
    console.log("rb3a");
}

function f(result){console.log(result.name)}
function fetchInfo (callback){

    setTimeout( ()=> callback({name:"jhon"}),5000)
}
fetchInfo (f)
// if you didnt put the perentecies in a function we call it call back fuction
// it's like when you wright the "function nameit (){...}"
