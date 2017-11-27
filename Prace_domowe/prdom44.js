var x = 35;
var y='';
function DecToBin(x){
  var temp = x;
  var i = 0;
  while(temp>1){
    y= (temp%2)+y;
    i++;
    temp = Math.floor(temp/2);
  }
  if(x!=0)y=1+y;
  else y=0;
  return y;
}
console.log(DecToBin(x));
