const sumAll = function(num1,num2) {
     
    if( Number.isInteger(num1) && Number.isInteger(num2) && num1 >= 0 && num2 >= 0) {
        
        let sum = 0;
        if (num1 < num2) {
            for ( num1; num1 <= num2; ++num1) {
                sum += num1;
            }
            return sum;
        }
        else if (num1 > num2) {
            for (num1; num1 >= num2; --num1) {
                sum +=num1;
            }
            return sum;
        }
        else {
            return num1;
        }

    }
    else {
        return `ERROR`;
    }

};

// Do not edit below this line
module.exports = sumAll;
