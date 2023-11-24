
var modal = document.querySelector(".modal");

var students = [
  {
    id: 1,
    saa: "Abdullayeva Əfsanə Aynur",
  },
  {
    id: 2,
    saa: "Hüsoynov Faiq Azər",
  },
  {
    id: 3,
    saa: "Həsənov Əkbər Namiq",
  },
  {
    id: 4,
    saa: "Həsənzadə Fidan Oqtay",
  },
  {
    id: 5,
    saa: "Məlikov Kamil Vüqar",
  },
  {
    id: 6,
    saa: "Məmmədov Nihat Vüqar",
  },
  {
    id: 7,
    saa: "Məmmədova Aynur Həbib",
  },
  {
    id: 8,
    saa: "Məmmədova Nəzakət Qəzənfər",
  },
  {
    id: 9,
    saa: "Nuri Ümüd Şahin",
  },
  {
    id: 10,
    saa: "Sadıqov Nicat Elçin",
  },
  {
    id: 11,
    saa: "Şabanov Kamal Aydın",
  },
  {
    id: 12,
    saa: "Əliyev Amil Faiq",
  },
  {
    id: 13,
    saa: "Əliyev Əfsun Rafiq",
  },
  {
    id: 14,
    saa: "Əliyev Əli Arzuman",
  }
];


var openBtn = document.querySelector(".labCount button");
var labModal = document.querySelector(".lab");
var table = document.querySelector("table");
var input = document.querySelector(".lab input");
openBtn.addEventListener("click", function () {


  if (input.value == "") {
    alert("Say daxil edin");
  }
  else {
    if (Number(input.value) <= 10 && Number(input.value) >= 1) {
      table.style.display = "table";
      labModal.style.display = "none";
      confirm(Number(input.value));
    }
    else {
      alert("Düzgün ədəd daxil edilməyib.")
    }
  }

})
var dateModal = document.querySelector(".date-modal");

function confirm(count) {
  //thead part
  let thead_tr = document.createElement("tr");
  let num_th = document.createElement("th");
  num_th.innerHTML = "№";
  thead_tr.appendChild(num_th);
  let saa_th = document.createElement("th");
  saa_th.innerHTML = "S.A.A";
  thead_tr.appendChild(saa_th);
  for (let i = 0; i < count; i++) {
    thead_tr.innerHTML += `<th class="date"> İş № ${i + 1} <span><i class="fa-solid fa-pen-to-square"></i></span><p>-</p></th>`
  }
  let result_th = document.createElement("th");
  result_th.innerHTML = "Nəticə";
  thead_tr.appendChild(result_th);
  document.querySelector("thead").appendChild(thead_tr);

  //tbody part
  students.forEach((item, index) => {
    let tbody_tr = document.createElement("tr");
    tbody_tr.innerHTML += `<td>${index + 1}</td>`
    tbody_tr.innerHTML += `<td>${item.saa}</td>`
    for (let i = 0; i < count; i++) {
      tbody_tr.innerHTML += `  <td><button style="background-color: rgb(5, 5, 45); color: antiquewhite; " disabled>d/e</button></td>`;
    }
    tbody_tr.innerHTML += `<td>0.0</td>`;
    document.querySelector("tbody").appendChild(tbody_tr);

  });
  var dateAdd = document.querySelectorAll("thead th span");
  var dateInput = document.querySelectorAll(".date-modal input");
  var currentIcon;
  var currentIndex;
  dateAdd.forEach((item , index) => { 
    item.addEventListener("click", function(){
        dateModal.style.display ="flex";
        currentIcon = item;
        currentIndex = index;
        var addDate = document.querySelectorAll(".date-modal-end button")[0];
        var tr = document.querySelectorAll("tbody tr");
        var currentDate = new Date();

        addDate.addEventListener("click", function(){
          if( dateInput[0].value != "" && dateInput[1].value != ""){
            let start = dateInput[0].value.split("-");
            let end = dateInput[1].value.split("-");

            if( start[1] <= end[1] && end[2] > currentDate.getDate()){
              currentIcon.nextElementSibling.innerHTML = `${start[2]} / ${start[1]} / ${start[0]} - ${end[2] } / ${end[1]} / ${end[0]}`
            currentIcon.children[0].style.color= "green";
        dateModal.style.display ="none";
            tr.forEach(element => {
                    element.children[currentIndex + 2].children[0].disabled = false;
            });
              dateInput[0].value ="";
              dateInput[1].value ="";
            }
            else{
              alert("Duzgun tarix daxil edin");
            }
          }
          else{
            alert("Tarixler bos ola bilmez");
          }
        })

    }
    ) 
  });


    var deButton = document.querySelectorAll("tbody button");
    var currentDe;
    var changedColor;
    var modalButtons = document.querySelectorAll(".modal-main button");
    deButton.forEach(item => {
          item.addEventListener("click", function(){
             currentDe  = item ;

            modalButtons.forEach(element => {
              element.addEventListener("click", function(){
                changedColor = element;
                modalButtons.forEach(x => {
                x.classList.remove("active");
                });
                element.classList.add("active");
               
                            })
            });
            console.log(item);
            modal.style.display="flex"; 
            
          })

    });

    document.querySelector(".modal-end button").addEventListener("click", function(){
     
      modal.style.display= "none";
      currentDe.style.backgroundColor = changedColor.style.backgroundColor;
      currentDe.innerText = changedColor.innerText;
      currentDe.disabled = true;
      modalButtons.forEach(item => {
              item.classList.remove("active");
              
            });
            balCount(count,currentDe);
    })


}

      function balCount(bal,btn ) {
        var tamam = Number((10/bal).toFixed(2));
        var natamam = Number((tamam /2).toFixed(2));
        var total = 0;
        if(btn.innerText == "Tamam" ){
          total = tamam;
          btn.parentElement.parentElement.lastChild.innerText = Number(btn.parentElement.parentElement.lastChild.innerText) + total ;
        }
        else if (btn.innerText == "Natamam"){
          total = natamam;
          btn.parentElement.parentElement.lastChild.innerText = Number(btn.parentElement.parentElement.lastChild.innerText) + total;
        }
        
      } 

      var xIcon = document.querySelectorAll(".modal-heading span");
      xIcon.forEach((x) => {
      x.addEventListener("click", function () {
        modal.style.display = "none";
        dateModal.style.display = "none";
      });
      });

      var closeBtn = document.querySelectorAll(".modal-end button")[1];
      closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
      })

      var closeDateModal = document.querySelectorAll(".date-modal-end button")[1];
      closeDateModal.addEventListener("click", function(){
        dateModal.style.display = "none";

      })









