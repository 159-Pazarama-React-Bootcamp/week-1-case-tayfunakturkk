function creditCard(numberOfCard){

    
  if(numberOfCard.length !== 16){              //Girilen değerlerin 16 tane olması kontrolü yapıldı.(Sayı 16 haneli olmalı.)
    return false;
  }

  let sameN = {};
  for(let i = 0; i < numberOfCard.length; i++){
    sameN[numberOfCard[i]] = true;
  }                                             //Object.keys ile tüm değerler aynı olamaz kuralı yazıldı..(En az iki farklı değer olmalıdır.)
  if(Object.keys(sameN).length < 2){
    return false;
  }

  
  if(numberOfCard[15] % 2 !== 0){ //Son değerim 2'ye bölümünden kalanın O'a eşit olduğu kontrol edildi.(Son rakam çift olmalıdır.)
    return false;
  }

  let sum = 0;
  for(let i = 0; i < numberOfCard.length; i++){
    sum += Number(numberOfCard[i]);
  }                                                    //Tüm değerlerin toplamı 16'dan büyük olmalıdır. 
  if(sum <= 16){
    return false;
  }


  
  for(let i = 0; i < numberOfCard.length; i++){
  
    checkN = Number.parseInt(numberOfCard[i]); //parseInt ile string değer integer a çevirildi.

    if(!Number.isInteger(checkN)){
      return false;
    }                                  //isInteger ile kontrol yapıldı.
  }
  return true;                        
}
console.log(creditCard('9999777788880000')); 
console.log(creditCard('1111111111111112')); 
console.log(creditCard('1923turkiye20222')); 
console.log(creditCard('9999999999999999')); 
console.log(creditCard('1000000000000000')); 
console.log(creditCard('6666666666616621')); 
