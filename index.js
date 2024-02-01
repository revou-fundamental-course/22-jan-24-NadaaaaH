let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("MySlide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}

function validateForm() {
    let name = document.getElementById("inputName").value;
    let email = document.getElementById("inputEmail").value;
    let option = document.getElementById("selectOption").value;

    var peringatan1 = document.getElementById("peringatan-1");
    peringatan1.innerHTML = "";
    var peringatan2 = document.getElementById("peringatan-2");
    peringatan2.innerHTML = "";
    var peringatan3 = document.getElementById("peringatan-3");
    peringatan3.innerHTML = "";

    if (name === "") {
        peringatan1.innerHTML = "*Mohon isi nama Anda!";
        document.getElementById("inputName").classList.add("input-error");
    } else {
        document.getElementById("inputName").classList.remove("input-error");
    }

    if (email === "") {
        peringatan2.innerHTML = "*Mohon isi email Anda!";
        document.getElementById("inputEmail").classList.add("input-error");
    } else {
        document.getElementById("inputEmail").classList.remove("input-error");
    }

    if (option === "") {
        peringatan3.innerHTML = "*Mohon memilih salah satu pilihan!";
        document.getElementById("selectOption").classList.add("input-error");
    } else {
        document.getElementById("selectOption").classList.remove("input-error");
    }

    if (name === "" || email === "" || option === "") {
        return false;
    }

    submitValue(name, email, option);

    return true;
}

function submitValue(name, email, option) {
    localStorage.setItem('submittedName', name);
    localStorage.setItem('submittedEmail', email);
    localStorage.setItem('submittedOption', option);
}

