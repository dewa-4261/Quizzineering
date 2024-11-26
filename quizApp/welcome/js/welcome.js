// global variable
var selectSubjectEl = document.querySelector("#select-subject-el");
var startQuizBtn = document.querySelector(".start-quiz-btn");
var brandCcode = sessionStorage.getItem("brandCode");
var allSubject = [];
// reading subject from localstorage

if(localStorage.getItem(brandCcode+"_allSubject") != null){
    allSubject = JSON.parse(localStorage.getItem(brandCcode+"_allSubject"));
    allSubject.forEach((subject,index)=>{
        selectSubjectEl.innerHTML += `
        <option>${subject.subjectName}</option>
        `;
    })
}

startQuizBtn.onclick = function(){
    if(selectSubjectEl.value != "choose subject"){
        var subject = selectSubjectEl.value;
        sessionStorage.setItem("subject",subject);
        window.location = "../quiz/quiz.html";
    }else{
        swal("Select Subject !", "Please select subject first !", "warning");
    }
}