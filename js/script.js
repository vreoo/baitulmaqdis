document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        if (name.value && email.value && message.value) {
            alert("تم إرسال رسالتك بنجاح!");
            name.classList.remove("error");
            email.classList.remove("error");
            message.classList.remove("error");
        } else {
            const emptyFields = [];
            if (!name.value) emptyFields.push("الاسم");
            if (!email.value) emptyFields.push("البريد الإلكتروني");
            if (!message.value) emptyFields.push("الرسالة");

            alert(`يرجى ملء الحقول التالية: ${emptyFields.join(", ")}.`);
            if (!name.value) name.classList.add("error");
            if (!email.value) name.classList.add("error");
            if (!message.value) message.classList.add("error");
        }
    });
