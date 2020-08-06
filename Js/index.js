$(document).ready(function() {
    $('.btnLogin').click(function(e) {
        e.preventDefault();
        let user = $('.username').val();
        console.log(user);
        let pass = $('.password').val();
        console.log(pass);

        if (user == 'trantiencao' && pass == '123456') alert("Đăng nhập thành công");
        if (user != 'trantiencao' || pass != '123456') alert("Sai username hoặc password");
    });

    $('.text2').hide();
    $('.text1').hover(function(e) {
        e.preventDefault();
        $('.text2').show();
    });
    $('.text2').hover(function(e) {
        e.preventDefault();
        $('.text2').hide('slow');
    });

    $('.ref').click(function(e) {
        e.preventDefault();
        location.replace("");

    });
});