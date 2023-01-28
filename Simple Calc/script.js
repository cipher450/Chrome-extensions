async function fetchData() {}

const ResualtDisplay = document.getElementById("NumInput");
const CalcPreview = document.getElementById("CalcPreview");
const NumBtn = document.getElementsByClassName("num");
const EqualBtn = document.getElementById("equal");
const CalcBtn = document.getElementsByClassName("CalcBtn");
const removeBtn = document.getElementById("REM");
const CleareBtn1 = document.getElementById("CE");
const CleareBtn = document.getElementById("C");

if (NumBtn && CalcBtn) {
  var i = 0;
  let len = NumBtn.length;
  for (; i < len; i++) {
    addEvent(NumBtn[i]);
  }
  i = 0;
  len = CalcBtn.length;
  for (; i < len; i++) {
    addEvent(CalcBtn[i]);
  }

  function addEvent(btn) {
    btn.addEventListener("click", function () {
      if (isNumeric(btn.innerHTML)) {
        DisplayNumber(btn);
      } else {
        AddNumber(btn);
      }
    });
  }
}

function AddClickEvent(Ellement, Func) {
  Ellement.addEventListener("click", function (event) {
    Func();
  });
}

AddClickEvent(CleareBtn, ClearView);
AddClickEvent(CleareBtn1, ClearMem);
AddClickEvent(removeBtn, Remove);
AddClickEvent(EqualBtn, Solution);
// CALCULATIONS

function DisplayNumber(e) {
  if (e) {
    Num = e.innerHTML;
    if (isNumeric(Num)) {
      ResualtDisplay.value += Num;
    }
  }
}
var ToAddNumbers = [];
let ToDevid;
function AddNumber(e) {
  if (isNumeric(ResualtDisplay.value)) {
    let CalcSymbol = e.innerHTML;

    if (ResualtDisplay) {
      let Num = parseFloat(ResualtDisplay.value);
      let LastResult;
      switch (CalcSymbol) {
        case "＋":
     
        CalcPreview.value +=   Num + "＋" ;
          if (ToAddNumbers.length == 0) {
            ToAddNumbers.push(Num);
            ResualtDisplay.value = "";
          } else {
            LastResult = Num + ToAddNumbers[0];
            ResualtDisplay.placeholder = LastResult;
            ToAddNumbers = [];
            ToAddNumbers.push(LastResult);

            ResualtDisplay.value = "";
          }

          break;
        case "÷":
          break;
        case "×":
          break;
        case "-":
          console.log( CalcPreview.innerText.charAt(CalcPreview.innerText.length - 1))
          CalcPreview.value.charAt(CalcPreview.value.length - 1) = "-"
          CalcPreview.value += Num + "-";



          if (ToAddNumbers.length == 0) {
            ToAddNumbers.push(Num);
            ResualtDisplay.value = "";
          } else {
            
              LastResult =  ToAddNumbers[0] -Num  ;
              ResualtDisplay.placeholder = LastResult;
              ToAddNumbers = [];
              ToAddNumbers.push(LastResult);
  
              ResualtDisplay.value = "";
         
           
          }



          break;
      }
    }
  }
}
function Solution(e) {


  ResualtDisplay.value=LastResult;
}
// Clearing and memorie

function ClearView() {
  ResualtDisplay.value = "";
  CalcPreview.value = "";
}
function ClearMem() {
  ResualtDisplay.value = "";
  Numbers = [];
  CalcPreview.value = "";
  ResualtDisplay.placeholder = 0;
  ToAddNumbers = [];
}
function Remove() {
  ResualtDisplay.value = ResualtDisplay.value.slice(0, -1);
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
