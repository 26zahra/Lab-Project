

var students = [
    {
      id: 1,
      saa: "Ilham Eliyev Heyder",
    },
    {
      id: 2,
      saa: "Ilham Eliyev Heyder",
    },
    {
      id: 3,
      saa: "Ilham Eliyev Heyder",
    },
    {
      id: 4,
      saa: "Ilham Eliyev Heyder",
    },
    {
      id: 5,
      saa: "Ilham Eliyev Heyder",
    },
  ];
var modal = document.querySelector(".modal");




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
        confirm(Number(input.value));
    }

})
function confirm(count){
    //thead part
    let thead_tr = document.createElement("tr");
    let num_th = document.createElement("th");
    num_th.innerHTML = "№";
    thead_tr.appendChild(num_th);
    let saa_th = document.createElement("th");
    saa_th.innerHTML = "S.A.A";
    thead_tr.appendChild(saa_th);
    for (let i = 0; i < count; i++) {
        thead_tr.innerHTML += `<th class="date"> İş № ${i+1} <span><i class="fa-solid fa-pen-to-square"></i></span><p>-</p></th>`
    }
    let result_th = document.createElement("th");
    result_th.innerHTML = "Nəticə";
    thead_tr.appendChild(result_th);
    document.querySelector("thead").appendChild(thead_tr);

    //tbody part
    students.forEach((item, index) => { 
        let tbody_tr = document.createElement("tr");
        tbody_tr.innerHTML += `<td>${index +1}</td>`
        tbody_tr.innerHTML += `<td>${item.saa}</td>`
        for (let i = 0; i < count; i++) {
            tbody_tr.innerHTML += `  <td><button style="background-color: rgb(5, 5, 45); color: antiquewhite;">d/e</button></td>`;
        }
        tbody_tr.innerHTML += `<td>0.0</td>`;
        document.querySelector("tbody").appendChild(tbody_tr);
        
    });
    var deEdit = document.querySelector("tbody");
    var deBtn = deEdit.children;
    // console.log(Array.from(deBtn)[2]);
    Array.from(deBtn).forEach((element,index) => { 
            console.log(element);
            element.addEventListener("click", function(){
            // modal.style.display = "flex";
            var dateDefault = document.querySelectorAll("thead th p");
            });
              
        });

    
}

var xIcon = document.querySelector(".modal span");
xIcon.addEventListener("click", function(){
    modal.style.display = "none";

})

var closeBtn = document.querySelectorAll(".modal-end button")[1];
closeBtn.addEventListener("click", function(){
    modal.style.display = "none";
})






