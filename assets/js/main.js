
var deEdit = document.querySelectorAll("tbody tr td button")
var modal = document.querySelector(".modal");
deEdit.forEach(element => { element.addEventListener("click", function(){
    modal.style.display = "flex";
})
    
});

var xIcon = document.querySelector(".modal span");
xIcon.addEventListener("click", function(){
    modal.style.display = "none";

})

var closeBtn = document.querySelectorAll(".modal-end button")[1];
closeBtn.addEventListener("click", function(){
    modal.style.display = "none";
})

// var changeBtn = document.querySelectorAll(".modal-end button")[0];
// changeBtn.addEventListener("click"< function({

// }))


var openBtn = document.querySelector(".labCount button");
var labModal = document.querySelector(".lab");
var table = document.querySelector("table");
var input = document.querySelector(".lab input");
openBtn.addEventListener("click", function () {

    
    if(input.value == ""){
        alert("Say daxil edin");
    }
    else {
        table.style.display = "table";
    labModal.style.display = "none";

    }
    
})