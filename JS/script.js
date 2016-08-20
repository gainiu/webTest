window.onload=function(){
    var btn=document.getElementById('btn1');
    btn.addEventListener('click',function(){
        alert(this.value);
    },false);
    var btn2=document.getElementById('btn2');
    btn2.onclick=function(){
        alert(this.value);
    };
    btn2.onclick=null;
    var btn3=document.getElementById('btn3');

    eventutil.addHandler(btn3,'click',function(event){
        alert(eventutil.getElement(event));
        eventutil.stopPropagation(event);
        eventutil.preventDefault(event);
    });
    var btn4=document.getElementById('btn4');
  //  eventutil.getType(btn4,'click');
    var box=document.getElementById('box');
    eventutil.addHandler(box,'click',function(){alert("father");});
    var tiao=document.getElementById('tiao');
    eventutil.addHandler(tiao,'click',function(event){
        alert(eventutil.getElement(event));
        eventutil.stopPropagation(event);
        eventutil.preventDefault(event);
    });

};/**
 * Created by Administrator on 2016/7/23 0023.
 */
