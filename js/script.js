$("#selectMenu").click(function () {
  let widthList = $(".sidebar").innerWidth();
  if ($(".sidebar").css("right") != "0px") {
    $(".sidebar").animate({ right: 0 }, 1000);
    $(".hideIcon").removeClass("iconS");
    $(".hideIcon").addClass("iconSidebar");
    $(".sidebar>h1").css("visibility", "visible");
    $(".hideClass").removeClass("visually-hidden");
    $(".hideClass").addClass("visible");
    // $('main').css('transform', 'translateX(-50px)');
    document.getElementById("main").style.transform = "";
  } else {
    $(".sidebar").animate({ right: (-widthList) +110 }, 1000);
    $(".sidebar>h1").css("visibility", "hidden");
    $(".hideClass").addClass("visually-hidden");
    $(".hideClass").removeClass("visible");
    $(".hideIcon").addClass("iconS");
    $(".hideIcon").removeClass("iconSidebar");
    //  $('main').css('transform', 'translateX(50px)');
    //$("main").removeAttr(style);
    document.getElementById("main").style.transform = "translateX(50px)";
  }
  //   $("main").animate({ transform: 'translateX(50px)'}, 1000);
  // $('main').css('transform', 'translateX(50px)');
});
let x = document.querySelector(".hideSlider");

if (localStorage.getItem("colors")) {
  $("body").css("background-color", localStorage.getItem("colors"));
  $("main").css("background-color", localStorage.getItem("colors"));
}

let darkMode = document.getElementById("darkMode");
darkMode.onclick = function () {
  $("body").css("background-color", "black");
  $("main").css("background-color", "#202020");
  localStorage.setItem("colors", "black ");
};
let lightMode = document.getElementById("lightMode");
lightMode.onclick = function () {
  $("body").css("background-color", "white");
  $("main").css("background-color", "white");
  localStorage.setItem("colors", "white");
};

if (localStorage.getItem("Slid")) {
  $("#active").css("background-color", localStorage.getItem("Slid"));
} else {
  $("#active").css("background-color", "transparent");
}
let active = document.getElementById("active");
console.log(active);
active.onclick = function () {
  $("#active").css("background-color", "#508D98");
  localStorage.setItem("Slid", "#508D98");
};
