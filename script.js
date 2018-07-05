var arr = []
while(arr.length < 5){
    var randomnumber = Math.floor(Math.random()*9) + 1;
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
}

var num = [];

alert('Memorizza i numeri' + '  ' + arr);

setTimeout(myfunction, 3000);

function myfunction() {

    for (var i = 0; i < 5; i++) {

      var guestnumber = parseInt(prompt('Inserisci un numero'))
      if (arr.includes(guestnumber))  {

      num.push(guestnumber)

      }

    }
    alert('Hai indovinato i seguenti numeri' + ' ' + num);
}
