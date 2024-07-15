function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    if ( score >= 90 && score <= 100){
        if(score == 100){
            return 'A+'
        }
        if( score >=90 && score <=92){
            return 'A-';
        }
        return 'A';
    }else if( score >= 80 && score <= 89){
        if( score >=80 && score <=82){
            return 'B-';
        }else if (score >=88 && score <=89){
            return 'B+';
        }
        return 'B';
    }else if ( score >= 70 && score <= 79){
        if( score >=70 && score <=72){
            return 'C-';
        }else if (score >=78 && score <=79){
            return 'C+';
        }
        return 'C';
    }else if ( score >= 60 && score <= 69){
        if( score >=60 && score <=62){
            return 'D-';
        }else if (score >=68 && score <=69){
            return 'D+';
        }
        return 'D';
    }else if ( score >= 0 && score <= 59){
        if( score >= 0 && score <=2){
            return 'F-';
        }else if (score >= 8 && score <=9){
            return 'F+';
        }
        return 'F';
    }else{
        return 'INVALID SCORE';
    }
}

let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
