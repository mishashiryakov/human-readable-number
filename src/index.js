module.exports = function toReadable (number) {
   
  number += '';
  
  if (number.length == 1) {
    if(number == 0) {return 'zero'};
    if(number == 1) {return 'one'};
    if(number == 2) {return 'two'};
    if(number == 3) {return 'three'};
    if(number == 4) {return 'four'};
    if(number == 5) {return 'five'};
    if(number == 6) {return 'six'};
    if(number == 7) {return 'seven'};
    if(number == 8) {return 'eight'};
    if(number == 9) {return 'nine'};
  }

  let result = '';
  
  if (number.length == 2) {
     
    if(number[0] == 1) {
      if(number[1] == 0) {return result += 'ten'};
      if(number[1] == 1) {return result += 'eleven'};
      if(number[1] == 2) {return result += 'twelve'};
      if(number[1] == 3) {return result += 'thirteen'};
      if(number[1] == 4) {return result += 'fourteen'};
      if(number[1] == 5) {return result += 'fifteen'};
      if(number[1] == 6) {return result += 'sixteen'};
      if(number[1] == 7) {return result += 'seventeen'};
      if(number[1] == 8) {return result += 'eighteen'};
      if(number[1] == 9) {return result += 'nineteen'};
      result += ''};
   
   if(number[0] == 2) {result += 'twenty'};
   if(number[0] == 3) {result += 'thirty'};
   if(number[0] == 4) {result += 'forty'};
   if(number[0] == 5) {result += 'fifty'};
   if(number[0] == 6) {result += 'sixty'};
   if(number[0] == 7) {result += 'seventy'};
   if(number[0] == 8) {result += 'eighty'};
   if(number[0] == 9) {result += 'ninety'};
   
   if(number[1] == 1) {result += ' one'};
   if(number[1] == 2) {result += ' two'};
   if(number[1] == 3) {result += ' three'};
   if(number[1] == 4) {result += ' four'};
   if(number[1] == 5) {result += ' five'};
   if(number[1] == 6) {result += ' six'};
   if(number[1] == 7) {result += ' seven'};
   if(number[1] == 8) {result += ' eight'};
   if(number[1] == 9) {result += ' nine'};
   return result;
 }

  if (number.length == 3) {
    if(number[0] == 1) {result += 'one hundred'};
    if(number[0] == 2) {result += 'two hundred'};
    if(number[0] == 3) {result += 'three hundred'};
    if(number[0] == 4) {result += 'four hundred'};
    if(number[0] == 5) {result += 'five hundred'};
    if(number[0] == 6) {result += 'six hundred'};
    if(number[0] == 7) {result += 'seven hundred'};
    if(number[0] == 8) {result += 'eight hundred'};
    if(number[0] == 9) {result += 'nine hundred'};
    
    if(number[1] == 0) {result += ''};
    if(number[1] == 1) {
        if(number[2] == 0) {return result += ' ten'};
        if(number[2] == 1) {return result += ' eleven'};
        if(number[2] == 2) {return result += ' twelve'};
        if(number[2] == 3) {return result += ' thirteen'};
        if(number[2] == 4) {return result += ' fourteen'};
        if(number[2] == 5) {return result += ' fifteen'};
        if(number[2] == 6) {return result += ' sixteen'};
        if(number[2] == 7) {return result += ' seventeen'};
        if(number[2] == 8) {return result += ' eighteen'};
        if(number[2] == 9) {return result += ' nineteen'};
        result += ''};
    if(number[1] == 2) {result += ' twenty'};
    if(number[1] == 3) {result += ' thirty'};
    if(number[1] == 4) {result += ' forty'};
    if(number[1] == 5) {result += ' fifty'};
    if(number[1] == 6) {result += ' sixty'};
    if(number[1] == 7) {result += ' seventy'};
    if(number[1] == 8) {result += ' eighty'};
    if(number[1] == 9) {result += ' ninety'};
    
    if(number[2] == 1) {result += ' one'};
    if(number[2] == 2) {result += ' two'};
    if(number[2] == 3) {result += ' three'};
    if(number[2] == 4) {result += ' four'};
    if(number[2] == 5) {result += ' five'};
    if(number[2] == 6) {result += ' six'};
    if(number[2] == 7) {result += ' seven'};
    if(number[2] == 8) {result += ' eight'};
    if(number[2] == 9) {result += ' nine'};
  }
  return result;
}




