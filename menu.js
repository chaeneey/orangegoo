//메뉴버튼
//버튼과 팝업메뉴 요소를 가져오기
let menuBtn = document.getElementById("menuBtn");
let menu = document.getElementById("menu");
let xBtn = document.getElementById("x-btn");


//팝업 메뉴 항목을 클릭했을 때, 페이지 이동
menu.addEventListener("click", function (event) {
    if (event.target.tagName == "A") {
        window.location.href = event.target.getAttribute("href");
    }
});


menuBtn.addEventListener('click', () => {
    // 메뉴 버튼을 클릭하면 메뉴 컨테이너의 위치를 조절하여 나타내거나 숨김
    menu.style.right = '0px';
    }
  );


xBtn.addEventListener('click', () => {
      menu.style.right = '-300px';
    })


//팝업 메뉴 외부를 클릭하면, 메뉴를 닫음
//window.addEventListener("click", function (event) {
//    if (event.target !== menuBtn && event.target !== menu) {
//        menu.style.right = "-300";
//    }
//});

//이전버튼

let gobackBtn = document.getElementById("gobackBtn");

// 이전 페이지로 돌아가는 함수 정의

gobackBtn.addEventListener("click", function() {
    window.history.back();
});