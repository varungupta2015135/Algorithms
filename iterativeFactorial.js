var factorial = function(n){
    var result = 1;
    for(var i=1; i<=n; i++){
        result*=i;
    }
    return result;
};

console.log(factorial(3));