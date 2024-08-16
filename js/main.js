
let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
let phone = document.getElementById('user_phone');


document.querySelector('.btn').onclick = function(e) {
    e.preventDefault();
    if(!regex.test(phone.value)) {
        alert('Введите корректный номер')
    }
    else {
        console.log('Номер корректный')
    }
}