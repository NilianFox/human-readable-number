module.exports = function toReadable (number) {
    let numbersWords = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: "four",
        5: 'five',
        6: 'six',
        7: "seven",
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };
    let dozensWords= {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }
    let rankWords= {
        100:'hundred'
    }
  
    let result='';
    let str=number.toString()
    number===0 ? result+=numbersWords['0'] : false;
    while (number>0){
      if (number<20){
        result+=' '+numbersWords[+number];
        break;
      }
      else if (str.length===3){
        result+=numbersWords[`${str[0]}`]+' '+rankWords['100']
      }
      else if (str.length===2){
        result+=' '+dozensWords[`${str[0]}0`]
      }
      str=str.substring(1);
      number=Number(str);
    }  
  
  
    return result.trim();
}
