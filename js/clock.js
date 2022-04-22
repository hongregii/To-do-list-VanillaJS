const clock = document.querySelector(".clock");

function getNow() {
    const date = new Date(); 
    const year = String(date.getFullYear(), 1000);
    const month = String(date.getMonth(), 1000);
    const day = String(date.getDate(), 1000).padStart(2, "0");
    const hours = String(date.getHours(), 1000).padStart(2, "0");
    const minutes = String(date.getMinutes(), 1000).padStart(2, "0");
    const seconds = String(date.getSeconds(), 1000).padStart(2, "0");    
    clock.innerText = `${month}월 ${day}일 ${hours} : ${minutes} : ${seconds}`
}

getNow();
setInterval(getNow, 1000);