const cont = document.getElementById('cont')
const refBtn = document.getElementById('refrech')
const github = document.getElementById('github')
const info = document.getElementById('info')
const close = document.getElementById('close')

refBtn.addEventListener('click',function(event){

  location.reload()
})
close.addEventListener('click',function(event){

  ToggleDisplay()
})

github.addEventListener('click',function(event){
  ToggleDisplay()
})
 
function ToggleDisplay(){
  if(info.style.display==="flex")
  info.style.display="none"
else
info.style.display="flex"
}

async function GetPrices(){
   
 fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('http://www.babalweb.net/finance/cours-dinar-algerien-informel.php')}`) 
 .then(response => response.text())
 .then(html => {
   const parser = new DOMParser();
   const doc = parser.parseFromString(html, "text/html");
   const trElements = doc.querySelectorAll('tr');
   const buyTd = document.getElementsByClassName('buy')
   const sellTd = document.getElementsByClassName('sell')

   

    for (let index = 0; index < trElements.length; index++) {
       
        const Tablerow = trElements[index];
        let BuyPrice = Tablerow.cells[2].innerText
        let SellPrice = Tablerow.cells[3].innerText
        
        BuyPrice =BuyPrice.replace('Achat','')
        SellPrice= SellPrice.replace('Vente','')
        
        buyTd[index].innerHTML=BuyPrice
        sellTd[index].innerHTML=SellPrice

    }
 });
}

 GetPrices()