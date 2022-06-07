class qquery{
    constructor(el){
        if(el.indexOf('.') > -1){
           el = el.replace(".","");
            this.elements = document.getElementsByClassName(el);
        }else if(el.indexOf('#') > -1){
            el = el.replace("#","");
            this.elements = [document.getElementById(el)];
        }else{
            this.elements = document;
        }

    }

    addClass(cl){
        var count = 0;
        while(count < this.elements.length){
            if(this.elements[count].className){
                this.elements[count].className += " " + cl;
            }else{
                this.elements[count].className = cl;
            }
            
            count ++;
        }
    }

}

function qQuery(el){
    var element = new qquery(el);
    return element;
  }