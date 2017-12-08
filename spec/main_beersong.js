"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);


var beersong=require("../lib/beersong.js");
var BottlesOnTheWall='bottles of beer on the wall,';
var BottlesOfBeer='bottles of beer.';
var TakeDown='Take one down, pass it around,';
var NoMore='no more bottles of beer on the wall.'
var None='No more bottles of beer on the wall, no more bottles of beer.'+'\n'+'Go to the store and buy some more, 99 bottles of beer on the wall.'
describe("beersong",function(){

    
    for(let count=99;count>-1;count--)
    {
        let count_=count-1;
        if(count>1)
            it(count+' '+BottlesOnTheWall+count+BottlesOfBeer+'\n'+TakeDown+count_+BottlesOnTheWall,function testCountMoreThan1(){
                let result=beersong(count);
                expect(result).to.equal(count+"&nbsp"+BottlesOnTheWall+count+BottlesOfBeer+'\n'+TakeDown+count_+BottlesOnTheWall);
            });
        else if(count==1)
            it(count+' '+BottlesOnTheWall+count+BottlesOfBeer+'\n'+TakeDown+NoMore,function testCountEqual1(){
                let result=beersong(count);
                expect(result).to.equal(count+"&nbsp"+BottlesOnTheWall+count+BottlesOfBeer+'\n'+TakeDown+NoMore);
            });
        else
            it(None,function testCountEqual1(){
                let result=beersong(count);
                expect(result).to.equal(None);
            });
    }
});

