var quiz = [
  {
    varianta: "Demografici",
    corect: "D"
  },
  {
    varianta: "Religioşi",
    corect: "J"
  },
  {
    varianta: "Economici",
    corect: "B, C, G, H"
  },
  {
    varianta: "Politici",
    corect: "E"
  },
  {
    varianta: "Naturali",
    corect: "A, F, I"
  },
  {
    varianta: "Imigraţie- Emigraţie",
    corect: "D"
  },
  {
    varianta: "Migraţie individuală- Migraţie în grup",
    corect: "E"
  },
  {
    varianta: "Migrație forțată- Migrație liberă, voluntară",
    corect: "B"
  },
  {
    varianta: "Migrație temporară- Migrație definitivă",
    corect: "A"
  },
  {
    varianta: "Migrație internă- Migrație externă",
    corect: "C"
  },
  {
    varianta: "Migrație interna",
    corect: "E, F"
  },
  {
    varianta: "O migrație internațională",
    corect: "A, D"
  },
  {
    varianta: "O migrație S-N, S-S, N-N",
    corect: "B, C"
  }
];
function verificare() {
  var corect = 0;
  var incorect = 0;
  for(var i = 0; el = document.getElementById(i); i++){
      if (document.getElementById(i).value == quiz[i].corect) {
        document.getElementById(i+20).innerHTML = "<text class=button002>" + " &#9989" + "</text>";
        corect++;
      }
      else {
        document.getElementById(i+20).innerHTML = "<text class=button002>" + " &#10060" + "</text>";
        incorect++;
      }
  }
  document.getElementById("note").innerHTML = ((corect/13)*10).toFixed(2);
}
