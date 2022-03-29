function calculateTip(event) {
    event.preventDeDefault();
    console.log(event);
   
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById(serviceQual).value;
    let numOfPeople = document.getElementById(people).value;

    if(bill == '' | serviceQual == 0){
        alert('Por favor preencha os valores')
        return;
    }
   
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

Document.getElementById('tipsForm').addEventListener('submit', calculateTip);