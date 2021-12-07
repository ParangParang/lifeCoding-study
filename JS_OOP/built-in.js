

var myTV = {
    powerStatus : Off,
    volume : 20,
    channer : 10
}

function myTv (){
    powerStatus = off;
    volume = 20;
    channel = 10;
}

var t1 = new myTV();
var t2 = new myTV();
var t3 = new myTV();



function myTv2 (volume, channel){
    this.volume = 20;
    this.channel = 10;
    this.powerStatus = off;
}

var t4 = new myTv2(20, 30);
var t5 = new myTv2(30, 40);
var t6 = new myTv2(50, 10);

