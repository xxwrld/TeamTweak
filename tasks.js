let counter = document.querySelection('h1');
let conunt = 1;
setInterval(()=>{
    counter.innerText = count;
    count++;
},1000);