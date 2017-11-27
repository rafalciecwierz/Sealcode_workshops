var n = 10;
var tab = [];

for (var i = 0; i < n; i++) {
	tab[i] = []; // każdy element tablicy jednowymiarowej staje się nową tablicą, dzięki czemu mamy tablicę dwuwymiarową
  for (var j= 0; j<n;j++){
    tab[i][j]=(i+1)*(j+1);
  }
}
console.log(tab);
