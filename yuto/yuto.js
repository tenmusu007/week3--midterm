const CenterHome = document.querySelector("#centerHome");
const CenterNav = document.querySelector("#centerAbout");

function toggleAbout(){
    if(!(CenterNav.className == "active")){
        CenterNav.classList.add("active");
    }

    CenterHome.className == "active" ? CenterHome.classList.remove("active") : CenterHome.classList.add("active");
}

function toggleHome(){
    if (!(CenterHome.className == "active")) {
      CenterHome.classList.add("active");
    }

     CenterNav.className == "active"
       ? CenterNav.classList.remove("active")
       : CenterNav.classList.add("active");
}

CenterHome.addEventListener("click", toggleHome);
CenterNav.addEventListener("click", toggleAbout);

const dots = document.querySelector(".dot");
const modal = document.querySelector(".modal");


function modalOpen (e){
    e.preventDefault();
    modal.classList.toggle("active");
}

// function modalClose(){
//     modal.classList.remove("active");
// }

const center = document.querySelector(".center");

dots.addEventListener("click", modalOpen);
// center.addEventListener("click", modalClose);
