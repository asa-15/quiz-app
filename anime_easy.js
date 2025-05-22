const qt1 = document.querySelector(".qt1");
const question1 = document.querySelector(".question1")
const qt2 = document.querySelector(".qt2");
const question2 = document.querySelector(".question2")
const qt3 = document.querySelector(".qt3");
const question3 = document.querySelector(".question3")
const qt4 = document.querySelector(".qt4");
const question4 = document.querySelector(".question4")
const qt5 = document.querySelector(".qt5");
const question5 = document.querySelector(".question5")


const maru = new Audio('images/maru.wav')
const batu = new Audio('images/batu.wav')

function maruzun() {
	maru.play()
}

function batuzun() {
	batu.play()
}

let target = document.querySelector(".target")
let target2 = document.querySelector(".target2")
let target3 = document.querySelector(".target3")
let target4 = document.querySelector(".target4")
let target5 = document.querySelector(".target5")


let answer1 = document.querySelector("#answer1")
let answer2 = document.querySelector("#answer2")
let answer3 = document.querySelector("#answer3")
let answer4 = document.querySelector("#answer4")
let answer5 = document.querySelector("#answer5")
let answer6 = document.querySelector("#answer6")
let answer7 = document.querySelector("#answer7")
let answer8 = document.querySelector("#answer8")
let answer9 = document.querySelector("#answer9")
let answer10 = document.querySelector("#answer10")
let answer11 = document.querySelector("#answer11")
let answer12 = document.querySelector("#answer12")
let answer13 = document.querySelector("#answer13")
let answer14 = document.querySelector("#answer14")
let answer15 = document.querySelector("#answer15")
let answer16 = document.querySelector("#answer16")
let answer17 = document.querySelector("#answer17")
let answer18 = document.querySelector("#answer18")
let answer19 = document.querySelector("#answer19")
let answer20 = document.querySelector("#answer20")

let abc = document.querySelector(".content")
let body =document.querySelector("body")
let start = document.querySelector(".start")
start.addEventListener('click', function () {
	if (start.style.display == "flex") {
		start.style.display = "none";
	} else {
		start.style.display = "none";
	}
	body.style.background = "black"
    abc.style.display = "none"
	qt1.play()
}, false);

// nextボタンの表示
function next1() {
	const next1 = document.querySelector("#next1")
	if (next1.style.display == "block") {
		next1.style.display = "none";
	} else {
		next1.style.display = "flex";
	}
}

function next2() {
	const next2 = document.querySelector("#next2")
	if (next2.style.display == "block") {
		next2.style.display = "none";
	} else {
		next2.style.display = "flex";
	}
}

function next3() {
	const next3 = document.querySelector("#next3")
	if (next3.style.display == "block") {
		next3.style.display = "none";
	} else {
		next3.style.display = "flex";
	}
}

function next4() {
	const next4 = document.querySelector("#next4")
	if (next4.style.display == "block") {
		next4.style.display = "none";
	} else {
		next4.style.display = "flex";
	}
}

function next5() {
	const next5 = document.querySelector("#next5")
	if (next5.style.display == "block") {
		next5.style.display = "none";
	} else {
		next5.style.display = "flex";
	}
}

//　ポップアップ表示
const modal = document.querySelector('.js-modal');
answer1.addEventListener('click', function () {
	modal.classList.add('is-open');
	next1();
    sessionStorage.setItem('qt1',"True");
	target.src = "images/correct.png"
}, false);


answer2.addEventListener('click', function () {
	modal.classList.add('is-open');
	next1();
    sessionStorage.setItem('qt1',"False");
	target.src = "images/incorrect.png"
}, false);

answer3.addEventListener('click', function () {
	modal.classList.add('is-open');
	next1();
    sessionStorage.setItem('qt1',"False");
	target.src = "images/incorrect.png"
}, false);

answer4.addEventListener('click', function () {
	modal.classList.add('is-open');
	next1();
    sessionStorage.setItem('qt1',"False");
	target.src = "images/incorrect.png"
}, false);


const modal2 = document.querySelector('.js-modal2');
answer5.addEventListener('click', function () {
	modal2.classList.add('is-open');
	next2();
	sessionStorage.setItem('qt2',"False");
	target2.src = "images/incorrect.png"
}, false);

answer6.addEventListener('click', function () {
	modal2.classList.add('is-open');
	next2();
	sessionStorage.setItem('qt2',"False");
	target2.src = "images/incorrect.png"
}, false);

answer7.addEventListener('click', function () {
	modal2.classList.add('is-open');
	next2();
    sessionStorage.setItem('qt2',"False");
	target2.src = "images/incorrect.png"
}, false);

answer8.addEventListener('click', function () {
	modal2.classList.add('is-open');
	next2();
    sessionStorage.setItem('qt2',"True");
	target2.src = "images/correct.png"
}, false);


const modal3 = document.querySelector('.js-modal3');
answer9.addEventListener('click', function () {
	modal3.classList.add('is-open');
	next3();
    sessionStorage.setItem('qt3',"False");
	target3.src = "images/incorrect.png"
}, false);

answer10.addEventListener('click', function () {
	modal3.classList.add('is-open');
	next3();
    sessionStorage.setItem('qt3',"False");
	target3.src = "images/incorrect.png"
}, false);

answer11.addEventListener('click', function () {
	modal3.classList.add('is-open');
	next3();
    sessionStorage.setItem('qt3',"False");
	target3.src = "images/incorrect.png"
}, false);

answer12.addEventListener('click', function () {
	modal3.classList.add('is-open');
	next3();
	sessionStorage.setItem('qt3',"True");
	target3.src = "images/correct.png"
}, false);


const modal4 = document.querySelector('.js-modal4');
answer13.addEventListener('click', function () {
	modal4.classList.add('is-open');
	next4();
    sessionStorage.setItem('qt4',"False");
	target4.src = "images/incorrect.png"
}, false);

answer14.addEventListener('click', function () {
	modal4.classList.add('is-open');
	next4();
	sessionStorage.setItem('qt4',"True");
	target4.src = "images/correct.png"
}, false);

answer15.addEventListener('click', function () {
	modal4.classList.add('is-open');
	next4();
    sessionStorage.setItem('qt4',"False");
	target4.src = "images/incorrect.png"
}, false); 

answer16.addEventListener('click', function () {
	modal4.classList.add('is-open');
	next4();
    sessionStorage.setItem('qt4',"False");
	target4.src = "images/incorrect.png"
}, false);

const modal5 = document.querySelector('.js-modal5');
answer17.addEventListener('click', function () {
	modal5.classList.add('is-open');
	next5();
    sessionStorage.setItem('qt5',"True");
	target5.src = "images/correct.png"
}, false);

answer18.addEventListener('click', function () {
	modal5.classList.add('is-open');
	next5();
    sessionStorage.setItem('qt5',"False");
	target5.src = "images/incorrect.png"
}, false); 

answer19.addEventListener('click', function () {
	modal5.classList.add('is-open');
	next5();
	sessionStorage.setItem('qt5',"False");
	target5.src = "images/incorrect.png"
}, false);

answer20.addEventListener('click', function () {
	modal5.classList.add('is-open');
	next5();
    sessionStorage.setItem('qt5',"False");
	target5.src = "images/incorrect.png"
}, false);
// startボタンを押したときに最初の問題表示　nextボタンを押したとき 問題の表示、消去
function clickBtn1() {


	if (question1.style.display == "flex") {
		question1.style.display = "none";
	} else {
		question1.style.display = "flex";
	}

}

function clickBtn2() {


	if (question2.style.display == "flex") {
		question2.style.display = "none";
	} else {
		question2.style.display = "flex";
	}

}

function clickBtn3() {


	if (question3.style.display == "flex") {
		question3.style.display = "none";
	} else {
		question3.style.display = "flex";
	}
}

function clickBtn4() {


	if (question4.style.display == "flex") {
		question4.style.display = "none";
	} else {
		question4.style.display = "flex";
	}
}

function clickBtn5() {


	if (question5.style.display == "flex") {
		question5.style.display = "none";
	} else {
		question5.style.display = "flex";
	}
}

// nextボタンを押したとき次の問題の表示とポップアップを消す
function ClickBtn() {

	if (question2.style.display == "flex") {
		question2.style.display = "none";
	} else {
		question2.style.display = "flex";
	}

	modal.classList.remove('is-open');
	qt1.pause();
	next1();

	qt2.play();
}


function ClickBtn2() {

	if (question3.style.display == "flex") {
		question3.style.display = "none";
	} else {
		question3.style.display = "flex";
	}

	modal2.classList.remove('is-open');
	qt2.pause();
	next2();

	qt3.play();
}

function ClickBtn3() {

	if (question4.style.display == "flex") {
		question4.style.display = "none";
	} else {
		question4.style.display = "flex";
	}

	modal3.classList.remove('is-open');
	qt3.pause();
	next3();

	qt4.play();
}


function ClickBtn4() {

	if (question5.style.display == "flex") {
		question5.style.display = "none";
	} else {
		question5.style.display = "flex";
	}

	modal4.classList.remove('is-open');
	qt4.pause();
	next4();

	qt5.play();
}



//セッションストレージ
let anime_easy_correct1 = sessionStorage.getItem('anime_easy_correct1');
function correct(){
	anime_easy_correct1++
	sessionStorage.setItem('anime_easy_correct1',anime_easy_correct1);
}

let anime_easy_incorrect1 = sessionStorage.getItem('anime_easy_incorrect1');
function incorrect(){
	anime_easy_incorrect1++
	sessionStorage.setItem('anime_easy_incorrect1',anime_easy_incorrect1);
}

let anime_easy_correct2 = sessionStorage.getItem('anime_easy_correct2');
function correctB(){
	anime_easy_correct2++
	sessionStorage.setItem('anime_easy_correct2',anime_easy_correct2);
}

let anime_easy_incorrect2 = sessionStorage.getItem('anime_easy_incorrect2');
function incorrectB(){
	anime_easy_incorrect2++
	sessionStorage.setItem('anime_easy_incorrect2',anime_easy_incorrect2);
}

let anime_easy_correct3 = sessionStorage.getItem('anime_easy_correct3');
function correctC(){
	anime_easy_correct3++
	sessionStorage.setItem('anime_easy_correct3',anime_easy_correct3);
}

let anime_easy_incorrect3 = sessionStorage.getItem('anime_easy_incorrect3');
function incorrectC(){
	anime_easy_incorrect3++
	sessionStorage.setItem('anime_easy_incorrect3',anime_easy_incorrect3);
}

let anime_easy_correct4 = sessionStorage.getItem('anime_easy_correct4');
function correctD(){
	anime_easy_correct4++
	sessionStorage.setItem('anime_easy_correct4',anime_easy_correct4);
}

let anime_easy_incorrect4 = sessionStorage.getItem('anime_easy_incorrect4');
function incorrectD(){
	anime_easy_incorrect4++
	sessionStorage.setItem('anime_easy_incorrect4',anime_easy_incorrect4);
}

let anime_easy_correct5 = sessionStorage.getItem('anime_easy_correct5');
function correctE(){
	anime_easy_correct5++
	sessionStorage.setItem('anime_easy_correct5',anime_easy_correct5);
}

let anime_easy_incorrect5 = sessionStorage.getItem('anime_easy_incorrect5');
function incorrectE(){
	anime_easy_incorrect5++
	sessionStorage.setItem('anime_easy_incorrect5',anime_easy_incorrect5);
}








