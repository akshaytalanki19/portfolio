const header =document.querySelector("header");

window.addEventListener ("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>0);
})

function sendMail() {
    var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
    };
    const serviceID="service_e3e7q67";
    const templateID="template_lyyp9ve";
emailjs.send(serviceID, templateID, params)
.then(
    res => {
document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("phone").value = "";
document.getElementById("message").value = "";
console.log(res);
alert ("your message sent successfully");
})
.catch((err) => console.log(err));
}