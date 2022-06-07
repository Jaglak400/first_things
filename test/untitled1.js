//var numbers = [43,56,601,100,45,10,58,34];

//var words = ["Apple", "Pear", "Coconut", "Pizza", "Hamburger", "Banana"];



function missing(numbers){
    var missing = -1;
    var sorted = numbers.sort(function(a,b){return a-b});
    for(var i=0; i<=numbers.length -1; i++){
        if(numbers.indexOf(i) === -1){
            missing = i;
        }
    }
    return missing;
}
var numbers = [3,8,7,9,6,1,12,5,14,2,19,16,18,11,10,15,13,17,20];
console.log(missing(numbers));