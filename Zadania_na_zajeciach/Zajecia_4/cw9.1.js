var n = 5;
var tab = [];

for (var i = 0; i < n; i++) {
	tab[i] = []; // każdy element tablicy jednowymiarowej staje się nową tablicą, dzięki czemu mamy tablicę dwuwymiarową
  for (var j= 0; j<n;j++){
    if(i<=j)tab[i][j]=(i+1)*(j+1);
    else tab[i][j]=0;

  }
}
console.log(tab);
