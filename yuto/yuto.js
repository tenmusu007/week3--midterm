const CenterHome = document.querySelector("#centerHome");
const CenterNav = document.querySelector("#centerAbout");
const readingList = document.querySelector(
  ".center__container-readingList-Container"
);
const aboutYourself = document.querySelector(".center__container-About");

function toggleAbout(){
    if(!(CenterNav.className == "active")){
        CenterNav.classList.add("active");
        readingList.classList.add("hidden");
        aboutYourself.classList.remove("hidden")
    }

    CenterHome.className == "active" ? CenterHome.classList.remove("active") : CenterHome.classList.add("active");
}

function toggleHome(){
    if (!(CenterHome.className == "active")) {
      CenterHome.classList.add("active");
      aboutYourself.classList.add("hidden");
    }

     CenterNav.className == "active"
       ? CenterNav.classList.remove("active")
       : CenterNav.classList.add("active");

       readingList.classList.remove("hidden");
}

CenterHome.addEventListener("click", toggleHome);
CenterNav.addEventListener("click", toggleAbout);

const dots = document.querySelector(".dot");
const modal = document.querySelector(".modal");
const mask = document.querySelector("#mask");

function modalOpen (e){
    e.preventDefault();
    modal.classList.toggle("active");
    mask.classList.remove("hidden")

}

function modalClose(){
    modal.classList.remove("active");
    mask.classList.add("hidden");
}


dots.addEventListener("click", modalOpen);
mask.addEventListener("click", modalClose);
