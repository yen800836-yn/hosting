const items = document.querySelectorAll('.card-custom, .title');

window.addEventListener('scroll', showItem);

function showItem(){

    items.forEach(item => {

        const triggerBottom =
            window.innerHeight * 0.85;

        const itemTop =
            item.getBoundingClientRect().top;

        if(itemTop < triggerBottom){

            item.classList.add('show');

        }

    });

}

showItem();

/* EFFECT CLICK CHUYỂN TRANG */

const links = document.querySelectorAll('a');

links.forEach(link => {

    link.addEventListener('click', function(e){

        const href = this.getAttribute('href');

        if(href && href.includes('.html')){

            e.preventDefault();

            document.body.style.opacity = 0;

            setTimeout(() => {

                window.location.href = href;

            }, 500);

        }

    });

});
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    // lấy dữ liệu
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // hiện dữ liệu
    document.getElementById("showName").innerText = name;
    document.getElementById("showEmail").innerText = email;
    document.getElementById("showSubject").innerText = subject;
    document.getElementById("showMessage").innerText = message;

    // hiện box xác nhận
    document.getElementById("resultBox").style.display = "block";
});

// lưu localStorage
function saveData(){

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    localStorage.setItem("contactData", JSON.stringify(data));

    alert("Đã lưu thông tin thành công!");
}

// load lại dữ liệu khi refresh
window.onload = function(){

    const savedData = localStorage.getItem("contactData");

    if(savedData){

        const data = JSON.parse(savedData);

        document.getElementById("name").value = data.name;
        document.getElementById("email").value = data.email;
        document.getElementById("subject").value = data.subject;
        document.getElementById("message").value = data.message;
    }
}