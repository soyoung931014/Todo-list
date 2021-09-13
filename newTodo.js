const todoName = document.querySelector('.todoName')
const inputForm = document.querySelector('.input_form');
const inputWrite = document.querySelector('.input_form input');
const inputList = document.querySelector('.input_list');

const body = document.querySelector('body')
body.style.background = "teal";
// 만약에 inputWrite에 입력을 한다면
// 예를들어 inputWrite에 공부하기라고 치고 엔터를 누른다면(submit)
// inputList에 inputWrite.value에 이름이 기재가 된다.


inputForm.onsubmit = function (event) {
    const li = document.createElement('li')
    const span = document.createElement('span')
    const button = document.createElement('button')
    const button2 = document.createElement('button')
       console.log('클릭확인');
       event.preventDefault();

       inputList.appendChild(li);
       li.appendChild(span);
       li.appendChild(button);
       li.appendChild(button2);
       button.innerHTML = '✔️';
       button.style.margin = '10px';
       button2.textContent = '❌ ';
       span.textContent = inputWrite.value; 

       button.addEventListener("click" , function() {
        span.style.textDecoration = "line-through";
        span.style.textDecorationColor = "red";
       })
       
       button2.addEventListener("click", function() {
           li.remove();
       })
       
}
