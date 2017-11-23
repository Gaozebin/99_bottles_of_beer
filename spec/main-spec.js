let fs = require("../main/main");

describe('main()', () => {

    it('print the song when the number greater than 1', () => {
        let number =99;
        let result =  fs.test(number);
      expect(result).toEqual(number+' bottles of beer on the wall, '+number+' bottles of beer.Take one down and pass it around, '+(number-1)+' bottles of beer on the wall.');
    });
    it('print the song when the number equal 1', () => {
        let number =1;
        let result =  fs.test(1);
      expect(result).toEqual(number+' bottles of beer on the wall, '+number+' bottles of beer.Take one down and pass it around, no more bottles of beer on the wall.');
    });
    it('print the song when the less than 0', () => {
        let result =  fs.test(0);
      expect(result).toEqual('No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.');
    });
    it('print ', () => {
        spyOn(console, 'log');
        fs.print();
        let str = '';
        for(var i =99 ;i>=0 ;i--){
            str+=fs.test(i)+'\n';
        }
       expect(console.log).toHaveBeenCalledWith(str);
    });
});
