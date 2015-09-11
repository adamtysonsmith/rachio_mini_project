$(document).ready(function(){
    $('.add').click(function(){
        var quantity = $(this).prev().text();
        quantity++;
        $(this).prev().text(quantity);
    });
    $('.subtract').click(function(){
        var quantity = $(this).next().text();
        quantity--;
        $(this).next().text(quantity);
    });
});