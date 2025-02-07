function sumDigits(num) {
  if (isNaN(+num))
    return NaN;
  num = Math.round(+num);
  if (num < 0) num = -num;
  let sum = 0;
  let digit = 0;
  while (num > 0) {
    digit = num % 10;
    sum += digit;
    num=Math.floor(num/10);
  }
  return sum;
}

console.log(`sumDigits(123) = ${sumDigits(123)}`);
console.log(`sumDigits('123') = ${sumDigits('123')}`);
console.log(`sumDigits('a123') = ${sumDigits('a123')}`);
console.log(`sumDigits('123a') = ${sumDigits('123a')}`);
console.log(`sumDigits(-123) = ${sumDigits(-123)}`);
console.log(`sumDigits(123.3333) = ${sumDigits(123.3333)}`);
console.log(`sumDigits(1111111111) = ${sumDigits(1111111111)}`);


function displayAnanas1() {
  let aas = +'as';
  return console.log(`a${aas}as`.toLowerCase());
}

function displayAnanas2() {
  let ananas = document.getElementById('ananas');
  ananas.innerHTML=`
         saaaaaaas     saa saaaaaas       saaaaaaas     saassaaaaaas       saaaaaaaa       saaaaaaa      
     aas      saaa   saaa      aaa    aaa       aaa   saaa      saas   aaa       aaa   aaa      saa    
             ssaaas   saas      saa           ssaaaa   saas      saas          ssaaaa    aaaass          
       aaaaaaaasaaa   saas      saa     aaaaaaaasaaa   saas      saas    saaaaaaasaaa     saaaaaaaas     
     saaas      aaa   saas      saa   saaas      aaa   saas      saas  saaas      aaa           saaas    
     aaa       aaas   saas      saa   aaas      saaa   saas      saas  saas      saaa   aaa       aaa    
     saaas  saaaaaa   saas      saa    aaas  ssaaaaa   saas      saas  saaas   saaaaa    aaass saaaa     
  saaaaass saas  saas      saa     saaaaaas saas  saas      saas    saaaaaas  aas    saaaaaass 
  `
;
}

displayAnanas1();
displayAnanas2();