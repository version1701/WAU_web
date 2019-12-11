

$(document).ready(function(){


    $('#container').masonry({
// указываем элемент-контейнер в котором расположены блоки для динамической верстки
        itemSelector: '.item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
});




