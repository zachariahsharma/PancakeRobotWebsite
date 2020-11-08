const form = document.querySelector('#form')
const name = document.querySelector('#name-imput');
const email = document.querySelector('#email-imput');
const message = document.querySelector('#question');
let db = firebase.firestore();
form.addEventListener('submit', (e) => {
    e.preventDefault()
    db.collection('Contact').add({
        Email: email.value,
        Name: name.value,
        message: message.value
    })
    window.open('thankyou.html', '_self')
})