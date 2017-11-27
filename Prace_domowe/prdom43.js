var ourTable = ['Marcin', 'Ania', 'Agnieszka', 'Piotrek', 'Magda', 'Magda'];
x = 'Magda';

function Finder(ourTable,x){
  var len = ourTable.length;
  for (var i=0; i<len; i++)
  {
    if(ourTable[i]==x)
    {
      console.log("Słowo "+ourTable[i]+" zostało znalezione pod indeksem "+ i+".");
      break;
    }
  }
}

Finder(ourTable,x);
