$(window).ready(function(){
    $('.allBtn').click(function(){
        $('.web_box').show(100);
        $('.app_box').show(100);
        $('.icon_box').show(100);
    });

    $('.web').click(function(){
        $('.web_box').show();
        $('.app_box').hide();
        $('.icon_box').hide();
    });

    $('.apps').click(function(){
        $('.web_box').hide();
        $('.app_box').show();
        $('.icon_box').hide();
    });

    $('.icons').click(function(){
        $('.web_box').hide();
        $('.app_box').hide();
        $('.icon_box').show(100);
    });
    
    $(".tab button.btn").click(function(){
        $(".tab button.btn").css("background-color", "white");
        $(this).css("background-color", "#4cd137");
    });
})