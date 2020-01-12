// //alert('Im working');
// //콘솔로그 찍는건 파이썬에서 print와 비슷하다고 대충 생각하자
// //console.log('Im working 정해인 팬페이지');

// //let은 일반변수. 어지간하면 const로 먼저쓰고 let으로 바꿔 var는 let과 같음
// let variableA = 123;
// let variableB = variableA - 3;
// //console.log(variableA, variableB);

// //문자열 이렇게 쓰는게 더 편하고 예쁨 `${var}` '' "" 
// function sayHello(age){
//     //console.log("haein's age is " , age);
//     return `Say Hello to ${age}years old Haein`
// }

// const helloString = sayHello(30);
// //console.log(helloString);

// //객체에 함수넣는거 신기. 일반함수랑 형태 다른거 주의! 이름 : function(인자)
// const calculator = {
//     plus : function(a, b){        
//         return a + b;
//     },
//     minus : function(a, b){        
//         return a - b;
//     },
//     divide : function(a, b){        
//         return a / b;
//     },
//     power : function(a, b){        
//         return a ** b;
//     }
// }
// console.log(`계산기 결과값은 ${calculator.plus(3, 5)}입니다.`)

// //이걸 해보면 알겠지만 document는 html전체 객체라고 보면됨
// //console.log(document);

// const title = document.getElementById("title");

// //DOM 이란 Document Object Model
// //html 이 object가 되는것

// console.dir(title);
// title.innerHTML = "changed!"
// title.style.color = "red"

// document.title = "I own you now"
// //querySelector는 도큐먼트 css선택자중 제일첫번째꺼 반환(.는 class #은 id)
// document.querySelector("#title").style.color = "green"


// function handleResize(){
//     console.log(`window size have been resized`);
// }

// window.addEventListener("resize", handleResize);

// const title = document.querySelector("#title");

// const BASE_COLOR = "red";
// const OTHER_COLOR = "blue";

// function handleClick(){
//     currentTitleColor = title.style.color;
//     if (currentTitleColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     }
//     else{
//         title.style.color = BASE_COLOR;
//     }
// }

// function init(){
//     title.style.color = BASE_COLOR;
//     title.addEventListener("click", handleClick);
// }
// init();

// //자바스크립트 이벤트가 궁금하면 MDN 찾아보기

// function handleOffline(){
//     console.log("network unconnected");
// }
// function handleOnline(){
//     console.log("network connected!!");
// }

// window.addEventListener("offline", handleOffline);
// window.addEventListener("online", handleOnline);

//위에것들 별로안좋음 css가 할일 js가 하니까 복잡
//js는 로직만 짜도록 변경하면

const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked"

function handleClick(){
    
    //이렇게하면 기존 타이틀의 클래스 속성을 무시하고 새로 덮어써버림
    //const currentClass = title.className;
    // if (currentClass !== CLICKED_CLASS){
    //     title.className = CLICKED_CLASS;
    // }
    // else{
    //     title.className = "";
    // }
    //이렇게 해야함 근데 다쓰기 귀찮으니
    // const hasClass = title.classList.contains("clicked");
    // if (!hasClass){
    //     title.classList.add(CLICKED_CLASS);
    // } else{
    //     title.classList.remove(CLICKED_CLASS);      
    // }
    //이러면 위에꺼 한줄로 해결해줌
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}

init();