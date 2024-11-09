const clock=document.querySelector('#clock')


setInterval(function(){// set interval also the events 
    let date=new Date()
    clock.innerHTML=date.toLocaleTimeString()
  },1000)