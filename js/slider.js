var slider = {
    slides:['img/first-bg.jpg', 'img/slide_1.jpg', 'img/slide_2.jpg', 'img/slide_3.jpg', 'img/slide_4.jpg', 'img/slide_5.jpg'],
    frame:0, // текущий кадр для отбражения - индекс картинки из массива
    set: function(image) { // установка нужного фона слайдеру
        document.getElementById("header").style.backgroundImage = "url("+image+")";
    },
    init: function() { // запуск слайдера с картинкой с нулевым индексом
        this.set(this.slides[this.frame]);
    },
    right: function() { // крутим на один кадр вправо
        this.frame++;
        if(this.frame === this.slides.length) this.frame = 0;
        this.set(this.slides[this.frame]);
    }
};
window.onload = function() { // запуск слайдера после загрузки документа
    slider.init();
    setInterval(function() { // ставим пятисекундный интервал для перелистывания картинок
        slider.right();
    },6000);
};