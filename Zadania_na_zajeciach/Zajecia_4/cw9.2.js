
function reverseTab(table){
  var help= [];
  var len = table.length;
  console.log(len);
  for (var i=0; i<len;i++)
  {
    help[len-i-1]=table[i];
  }
  return help;
}

var tablica = ['siema', 'ziomek', 'elo', 'hej'];
console.log(tablica);
console.log(reverseTab(tablica));
