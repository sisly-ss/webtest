$(function () {
    // 按下gotop的事件
    $("#gotop").click(function () {
        $("html,body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    // 偵測到卷軸滑動時,往下超過400讓gotop出現
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400){
            $("#gotop").fadeIn();
        } else {
            $("#gotop").fadeOut();
        }
    });
});