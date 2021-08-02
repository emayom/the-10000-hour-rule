const startBtn = document.querySelector(".start_btn");
const openBtn = document.querySelector(".modal_btn");
const closeBtn = document.querySelector(".close_btn");
const shareBtn = document.querySelector(".share_btn");
const result = document.querySelector(".result");
const loading = document.querySelector(".result_loading");
const modal = document.querySelector("#modal");

function calculator(event) {
    console.log("calc");
    event.preventDefault();

    const field_value = document.getElementById("field_value");
    const time_value = document.getElementById("time_value");

    const field_result = document.querySelector(".field_result");
    const time_result = document.querySelector(".time_result");

    if(field_value.value == "") {
        alert("입력되지 않았습니다.");
        field_value.focus();
        return false;
    } else if(time_value.value == "") {
        alert("입력되지 않았습니다.");
        time_value.focus();
        return false;
    } else if(time_value.value > 24) {
        alert("잘못된 값입니다. 24 이하의 값을 입력해 주세요.");
        return false;
    }
    
    result.style.display = "none";
    loading.style.display = "flex";

    setTimeout(function() {
        loading.style.display = "none";
        result.style.display = "flex";
        field_result.innerHTML = field_value.value;
        time_result.innerHTML = parseInt((10000/Number(time_value.value)));
    }, 1800);
}

function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal ){
        closeModal();
    }
}

function copyUrl() {
    let url = window.location.href;
    let temp = document.createElement("input");
    document.body.appendChild(temp);

    temp.value = url;
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);

    alert("URL이 복사되었습니다.");
}

startBtn.addEventListener("click", calculator);
openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
shareBtn.addEventListener("click", copyUrl);

