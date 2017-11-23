'use strict';

exports.test = function test(number) {
    if(number>1){
        return number+' bottles of beer on the wall, '+number+' bottles of beer.Take one down and pass it around, '+(number-1)+' bottles of beer on the wall.';
    }
    if(number === 1){
        return number+' bottles of beer on the wall, '+number+' bottles of beer.Take one down and pass it around, no more bottles of beer on the wall.';
    }
    if(number === 0){
        return 'No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.';
    }
    return '';
};

exports.print =function print(){
    var str = '';
    for(var i =99 ;i>=0 ;i--){
        str+=this.test(i);
        str+='\n';
        
    }
    console.log(str);
};