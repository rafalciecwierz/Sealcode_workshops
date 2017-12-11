var example = document.getElementsByClassName("example");
var lng = example.length;
for (i=0; i<lng;i++)
{
  console.log(example[i].innerHTML);
}
for (i=1; i<=4;i++)
{
  var list = document.getElementById("li-"+i).innerHTML;
  console.log(list);
}
