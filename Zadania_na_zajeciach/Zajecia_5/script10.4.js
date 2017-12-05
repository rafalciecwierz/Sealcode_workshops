// CWICZENIE 10.3
function Zadania(iloscZadan, nazwaPrzedmiotu, ileZrobionych) {
  this.iloscZadan = iloscZadan;
  this.nazwaPrzedmiotu = nazwaPrzedmiotu;
  this.ileZrobionych = ileZrobionych;
  this.metoda = function() {
    return this.iloscZadan - this.ileZrobionych;
  };
}
var sealcode = new Zadania(12,'Technologie Webowe',5);
var el = document.getElementById('span-one');
el.innerHTML = sealcode.nazwaPrzedmiotu;

//CWICZENIE 10.4
var el2 = document.getElementById('span-two');
el2.innerHTML = sealcode.metoda();
var sentence = "Home sweet home";
var par = document.getElementById('paragraph-one');
par.innerHTML = "Nasz ciąg ma długość: " + sentence.length + "<br>"
+ "Jeśli zmienimy wszystkie znaki na wielkie ciąg będzie wyglądać tak: " + sentence.toUpperCase() + "<br>"
+ "Na 10. pozycji znajduje się znak: " + sentence.charAt(9) + "<br>"
+ "Ciąg 'ee' znajduje się na miejscu: " + sentence.indexOf("ee") + "<br>"
+ "Ostatni indeks znaku 'e' to: " + sentence.lastIndexOf("e") + "<br>"
+ "Znaki od 8 do 14 to: " + sentence.substring(8,14)+ "<br>"
+ "Po usunięciu niepotrzebnych spacji nasz ciąg wygląda tak:" + sentence.trim() + "<br>"
+ "Po zmianie 'me' na 'w' nasz ciąg wygląda tak:" + sentence.replace('me','w') + "<br>";

//CWICZENIE 10.5
var randomNumber = Math.floor(Math.random()*10)+1;
var el3 = document.getElementById('paragraph-two');
el3.innerHTML = 'Losowo wygenerowana liczba to ' + randomNumber;

//CWICZENIE 10.6
var daysOfWeek = ['niedziela','poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
var months = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];

var d = new Date();
var difference = new Date();
var day = daysOfWeek[d.getDay()];
var month = months[d.getMonth()];
var dateOfBirth = new Date(1991, 05, 06, 12, 23, 45); // ustawiamy datę z przeszłości w formacie: YYYY, MM, DD, HH, MM, SS
difference = d.getTime()- dateOfBirth.getTime(); // wynik jest w milisekundach
var age = Math.floor(difference / 31556900000); // dzielone całkowicie przez liczbę milisekund w roku (przy założeniu, że to nie jest rok przestępny)
var date = d.toString();

var el4 = document.getElementById('paragraph-three');
el4.innerHTML = 'Dzisiaj jest: ' + day + '.' + '<br />'+ 'Aktualny miesiąc: ' + month + '.' + '<br />'
+ 'Mój wiek w latach to: ' + age  + '.' + '<br />'
+ 'Data wyświetlona w momencie wywołania metody: ' + date + '.';
