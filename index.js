function writeCards(names, surprise){ 

    const newArray = [];
    for (let x = 0; x < names.length; x++){
        console.log(newArray.push(`Thank you, ${names[x]}, for the wonderful ${surprise} gift!`));
      }
      return newArray;
  }

  function countDown(a){
    while (a >= 0) {
      console.log(a--);
    } 
}
  









