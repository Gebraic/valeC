const inputBox = document.getElementById("input-box")

function addName(){
    if(inputBox.value === ''){
        alert("Tulis Nama!");
    } else{
        var enteredName = inputBox.value;
        window.location.href = 'index2.html';
        localStorage.setItem("enteredName", enteredName);
    }
}