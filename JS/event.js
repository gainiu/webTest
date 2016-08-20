var eventutil={
    addHandler:function(element,type,handler){
        if(element.addEventListener){element.addEventListener(type,handler,false);}
        else if(element.attachEvent){element.attachEvent('on'+type,handler);}
        else{element['on'+type]=handler;}
    },
    getEvent:function(event){
        return event?event:window.event;
    },
    getType:function(event){
        return event.type;
    },
    getElement:function(event){
        return event.target||event.srcElement;
    },
    stopPropagation:function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble=true;
        }
    },
    preventDefault:function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue=false;
        }
    }

};/**
 * Created by Administrator on 2016/7/23 0023.
 */
