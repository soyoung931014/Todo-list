console.log("잘 불려왔니?") // js 잘 연결되었는지 확인

const body = document.querySelector('body')
const todoForm = document.getElementById('todo_form');
const todoListInput = document.querySelector("#todo_form input");
const todoListBtn = document.querySelector("#todo_form button")
const listForm = document.querySelector("#todo-list");


body.style.background = "teal";

todoListBtn.onclick = function(event) {
    const li = document.createElement('li');    
    if(todoListInput.value !== ""){
        console.log("클릭확인했슴다")
        listForm.appendChild(li);
        li.textContent = todoListInput.value;
        todoListInput.value = '';
        // 이벤트가 발생하면 새로고침을 하는데 그렇게 될경우에 데이터가 날아가기 때문에 event.preventDefault()를 호출함으로서 새로고침을 금한다.
        event.preventDefault();
    
    } else {
        console.log('입력해주세요');
        alert('plz write to do');
    }

//리스트완료
    li.addEventListener("click" , function() {
        li.style.textDecoration = "line-through";
        li.style.textDecorationColor = "red";
    
    {/* <li><span>커피</span><삭제버튼></li>
    /classLIst에돔...</li> */}
})   
} 



//내가 하고싶은것
// input.value값을 쓰고 엔터/혹은 버튼을 누르면
// 그 value값이 아래로 나온다. (ul 아래로 리스트가 나온다);
//동시에 input.value는 빈 스트링이된다.
