var btn = document.querySelector(".btn");
var btnCancel = document.querySelector(".btnCancel");
var contact = document.querySelector(".contact");

btn.addEventListener("click", openDiv);
btnCancel.addEventListener("click", closeDiv);

function openDiv () {
    contact.style.display = "block";
}
