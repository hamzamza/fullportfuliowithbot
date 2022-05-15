let turn= 'x'
let title = document.querySelector('.title')
let ele=[]
let win =0 
function game(id){

    let element = document.getElementById(id)

   
    if(turn==='o' && element.innerHTML ===''&& win===0) {
        element.innerHTML='o'
    turn ='x'
    title.innerHTML= turn +" turn "   
    }
    if (turn ==='x' && element.innerHTML ==='' && win===0)
    {
    element.innerHTML="x"
    turn='o'
    title.innerHTML= turn +" turn "
    }
   
winner()
}
function winner(){
    for (let i=1 ;i<10; i++)
    {
ele[i]= document.getElementById("item"+i).innerHTML
    }

    for (let i=1;i<4; i++){
        if (ele[i]===ele[i+3] && ele[i+3]===ele[i+6] && ele[i]!='')
        {document.getElementById("item"+i).style.background="black"
        document.getElementById("item"+(i+3)).style.background="black"
        document.getElementById("item"+(i+6)).style.background="black"
            title.innerHTML=`${ele[i]} is the winner  <button class="refrech"><a href="index.html">3AWD</a></button> `
            win =1
            return 0 ;
        }}
        for (let i=1;i<8; i+=3){
            if (ele[i]===ele[i+1] && ele[i+1]===ele[i+2] && ele[i]!='')
            {
                document.getElementById("item"+i).style.background="black"
        document.getElementById("item"+(i+1)).style.background="black"
        document.getElementById("item"+(i+2)).style.background="black"
                title.innerHTML=`${ele[i]} is the winner  <button class="refrech"><a href="index.html">3AWD</a></button> `
                win =1

                return 0 ;
            }

    }
    if (ele[1]===ele[5] && ele[5]===ele[9] && ele[1]!=''){title.innerHTML=`${ele[1]} is the winner  <button class="refrech"><a href="index.html">3AWD</a></button> `
    win =1
    document.getElementById("item"+1).style.background="black"
        document.getElementById("item"+5).style.background="black"
        document.getElementById("item"+9).style.background="black"

    return 0 ;}
    if (ele[3]===ele[5] && ele[5]===ele[7]  && ele[3]!=''){title.innerHTML=`${ele[3]} is the winner  <button class="refrech"><a href="index.html">3AWD</a></button> `
    win =1
    document.getElementById("item"+3).style.background="black"
        document.getElementById("item"+5).style.background="black"
        document.getElementById("item"+7).style.background="black"
    return 0 ;}
        let n=0
        for(let i=1; i<10 ;i++){
            if (ele[i]!='')n++ ;
        }
    if (n===9){title.innerHTML= `salat lgame <button class="refrech"><a href="index.html">3AWD</a></button> `
    for(let i=1; i<10 ;i++){
        document.getElementById("item"+i).style.background="black"  
    }}
}
let ahya ="-"
// setInterval(function(){
// ahya+='.'
// console.log(ahya)
// },1000 
// )
// setTimeout(function (){location.reload()},8000)