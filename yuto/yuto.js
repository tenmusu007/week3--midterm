const CenterHome = document.querySelectorAll("#centerHome");
const CenterNav = document.querySelectorAll("#homeNav");

console.log(CenterHome);

function toggle(){
    CenterHome.classlist.toggle(".active");
}

CenterNav.addEventlistner("Click", toggle());
