$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    var typed = new Typed(".typing", {
        strings: ["desenvolvedor web!", "Front-End."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Front-end"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true

    });
    var typed = new Typed(".typing-3", {
        strings: ["Alguns dos meu projetos:"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true

    });
    var typed = new Typed(".typing-4", {
        strings: ["Entre em contato comigo a baixo:"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true

    });
});