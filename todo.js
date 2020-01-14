const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
    //객체 안 요소 알아볼때는 dir로 찍자
    //console.dir(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    //filter는 arr의 각요소에 조건 결과를 리턴하고, true인 거만 새 배열 만듬
    const cleanToDos = toDos.filter(function(toDo) {
      return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
  }
  

function saveToDos() {
    //localStorage 는 다 string으로만 관리함.
    //JSON.stringify없으면 object 로만 뜬다.
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    //html에 엘리먼트 추가
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    span.innerText = text;
    delBtn.addEventListener("click", deleteToDo);
    //appendChild는 부모엘리먼트에 자식으로 넣는거
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
  }

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    //input박스안에 초기화해줌
    toDoInput.value = "";
}
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        //arr.forEach는 배열 각 요소에 대한 함수적용. 
        //이렇게 바로 정의할수도 있고 있는함수 써도되고
        parsedToDos.forEach(function(toDos){
            paintToDo(toDos.text);
        })
    }
}
function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();