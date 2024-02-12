{
    //     let phone = prompt(`Telefon raqamingizni kiritng....Masalan (+998912345678) `);

    // function validatePhone(phone) {
    //     if (phone.trim().length != 13) {
    //         alert('belgilar soni notogri')
    //         return false
    //     }

    //     if (phone.substring(0, 4) != '+998') {
    //         alert(`Telefon raqam formati notogri`)
    //         return false
    //     }
    //     if (!Number(phone.substring(1))) {
    //         alert('Telefon raqamingiz notogri kiritildi')
    //         return false
    //     }

    //     return true
    // }

}

let n = +prompt(`minut or sekund enter`);
let nIntervar = setInterval(() => {
    console.log('sekund', n);
    n--;
    if (n == 1) {
        clearInterval(n)
    }

}, 1000)