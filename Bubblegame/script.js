var clt=""
var scores=0;
function bubble(){
    for(var i=0;i<119;i++){
        clt+=`<div id="bubble">${Math.floor(Math.random()*10)}</div>`
    }
    // 
    document.querySelector("#panelbtm").innerHTML=clt;
}
bubble()
var time=6;
function timer(){
    setInterval(function(){
        if(time>0){

        
        time--;
        document.getElementById("timer").innerHTML=time
        }
        else{
            document.getElementById("panelbtm").innerHTML=`<h1>Game Over</h1>`
        }
    },1000)
}
timer()
function hit(){
    var n=Math.floor(Math.random()*10);
    document.getElementById("box").innerHTML=n
}
hit()

   document.getElementById("panelbtm").addEventListener("click",function(data){
       
        var temp=data.target.innerHTML
        if(temp==document.getElementById("box").innerHTML){
            scores++;
            document.getElementById("score").innerHTML=scores;
            hit()
        }
})

