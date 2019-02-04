
/*BMI CHALLENGE
var markW = 78;
var johnW = 92;

var markH = 1.69;
var johnH = 1.95;

var markBMI = markW / (markH * markH);
var johnBMI = johnW / (johnH * johnH);
console.log(markBMI, johnBMI);

var isMarkBMIHigher = markBMI > johnBMI;

console.log("Is Mark's BMI higher than John's? " + isMarkBMIHigher);
*********************************************/


/* TEAM SCORE CHALLENGE
var johnAvg = (89 + 120 + 103) / 3;
var mikeAvg = (116 + 94 + 123) / 3;
var maryAvg = (97 + 134 + 105) / 3;
console.log(johnAvg, maryAvg, maryAvg)

if (johnAvg > mikeAvg && johnAvg > maryAvg){
    console.log("John's team wins.")
} else if (mikeAvg > johnAvg && mikeAvg > maryAvg){
    console.log("Mike's team wins.")
} else if (maryAvg > johnAvg && maryAvg > mikeAvg){
    console.log("Mary's team wins.")
} else {
    console.log("there is a draw")
}
*********************************************/



/* TIP CHALLENGE
var bills = [124, 48, 268];
var tips = [];
var finalBills = [];

var calcTips = function (arr){
    var calc;
    for (var i = 0; i < arr.length; i++){
        if (arr < 50){
            calc = arr[i] * 0.20;
        } else if (arr[i] >= 50 && arr[i] < 200){
            calc = arr[i] * 0.15;
        } else {
            calc = arr[i] * 0.1;
        }
        tips.push(calc);
    }
};

var calcFinalBills = function (){
    for (var i = 0; i < 3; i++){
        finalBills[i] = bills[i] + tips[i];
    }
};
calcTips(bills);
calcFinalBills();
console.log(tips, finalBills);
*********************************************/

/* BMI ROUND 2
var mark = {
    name: "Mark",
    weight: 78,
    height: 1.69,
    calcBMI: function(){
        this.BMI = this.weight / (this.height * this.height);
        return this.BMI;
    },
    
};

var john = {
    name: "John",
    weight: 92,
    height: 1.95,
    calcBMI: function(){
        this.BMI = this.weight / (this.height * this.height);
        return this.BMI;
    }
};


if (john.calcBMI() > mark.calcBMI()){
    console.log("John has a higher BMI. His BMI is " + john.BMI);
} else if (mark.BMI > john.BMI) {
    console.log("Mark has a higher BMI. His BMI is " + mark.BMI);
} else console.log("They have the same BMI.")
*********************************************/

/* LOOPING BACKWARDS
var john = ["John", "Smith", 1990, "designer", false, "blue"];
console.log(john);
for (var i = john.length - 1; i >= 0; i--){
    console.log(john[i]);
}
*********************************************/

/* 2nd TIPS CHALLENGE */
var john = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    calcTips: function (){
        for (var i = 0; i < this.bills.length; i++){
            if (this.bills[i] < 50){
                this.tips[i] = this.bills[i] * .2
            } else if ( this.bills[i] >= 50 && this.bills[i] < 200){
                this.tips[i] = this.bills[i] * .15
            } else {
                this.tips[i] = this.bills[i] * .1
            }
            this.tips.push(this.calcTips(););
        }
    },
    finalBills: [],
    calcFinalBills: function (){
        for (var i = 0; i < this.bills.length; i++){
            this.finalBills[i] = this.bills[i] + this.tips[i]

        };
    },
};
john.calcTips();
john.calcFinalBills();

console.log(john.tips, john.finalBills);

var mark = {
    bills: [77, 375, 110, 45],
    tips: [],
    calcTips: function (){
        for (var i = 0; i < this.bills.length; i++){
            if (this.bills[i] < 100){
                this.tips[i] = this.bills[i] * .2
            } else if ( this.bills[i] >= 100 && this.bills[i] < 300){
                this.tips[i] = this.bills[i] * .1
            } else {
                this.tips[i] = this.bills[i] * .25
            }
            this.tips.push(this.calcTips());
        }
    },
    finalBills: [],
    calcFinalBills: function (){
        for (var i = 0; i < this.bills.length; i++){
            this.finalBills[i] = this.bills[i] + this.tips[i]

        };
    },
};
mark.calcTips();
mark.calcFinalBills();

console.log(mark.tips, mark.finalBills);


var calcAvgTip = function(tipsArr){
    var sumOfTips = 0;
    for (var i = 0; i < tipsArr.length - 1; i++){
        sumOfTips = sumOfTips + tipsArr[i];
    }
    return sumOfTips / tipsArr.length;
};

john.avgTip = calcAvgTip(john.tips);
mark.avgTip = calcAvgTip(mark.tips);
console.log(john.avgTip, mark.avgTip);
/*********************************************/

