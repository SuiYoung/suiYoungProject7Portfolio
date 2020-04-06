// emailForm redirect

const $form = $('form');
const $name = $('#name');
const $email = $('#email');
const $message = $('#message')
const emailApp = {}
$form.on('submit', (e) => {
    e.preventDefault();
    if ($name.val() === '' || $email.val() === '' || $message.val() === '') {
        swal({
            icon: 'error',
            title: 'Sorry!',
            text: 'Please leave your name, email and message so I can get back to you!'
        })
    } else {
        emailApp.postEmail();
        emailApp.clearFields();
        swal({
            icon: 'success',
            buttons: false,
            timer: 1050
        })
    }
})
emailApp.clearFields = () => {
    $name.val('');
    $email.val('');
    $message.val('');
}
emailApp.postEmail = () => {
    $.ajax({
        url: 'https://formspree.io/xjvevydo',
        method: 'POST',
        data: {
            email: $email.val(),
            name: $name.val(),
            message: $message.val(),
        },
        dataType: 'json'
    })
}
emailApp.init = () => {
    emailApp.clearFields();
}
emailApp.init();