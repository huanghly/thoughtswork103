function beersong(count){

    var BottlesOnTheWall='bottles of beer on the wall,'
    var BottlesOfBeer='bottles of beer.';
    var TakeDown='Take one down, pass it around,';
    var NoMore='no more bottles of beer on the wall.'
    var None='No more bottles of beer on the wall, no more bottles of beer.'+'\n'+'Go to the store and buy some more, 99 bottles of beer on the wall.'
        var count_=count-1;
        if(count>1)
            return count+BottlesOnTheWall+count+BottlesOfBeer+'\n'+TakeDown+count_+BottlesOnTheWall;
        else if(count==1)
            return count+BottlesOnTheWall+count+BottlesOfBeer+'\n'+TakeDown+NoMore;
        else
        return None;
}
module.exports = beersong;
