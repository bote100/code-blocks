
var blackTheme = false;

$('.code-block-link').click(function () {
    switchTab($(this));
});

$('#color-switch').click(function () {
    console.log("Switching theme");
    if(blackTheme) {
        $('.black-theme').each(function () {
            $(this).removeClass("black-theme");
            $(this).addClass("white-theme");
        });
        $('.code-block-content').css("background-color", "");
        $('.code-block-option').css("color", "");
    } else {
        $('.white-theme').each(function () {
            $(this).removeClass("white-theme");
            $(this).addClass("black-theme");
        });

        $('.code-block-content').css("background-color", "#37474f");
        $('.code-block-option').css("color", "#fff");
    }

    blackTheme = !blackTheme;
});

$('#copy-code').click(function () {
    console.log("Copy...");
    copyToClipboard($('#' + $('.code-block-link-active').data('tab')).children().children());
});

function switchTab(ele) {
    $('.code-block-panel').each(function () {
        $(this).css("display", "none");
    });

    $('.code-block-link').each(function () {
       $(this).removeClass('code-block-link-active');
       $(this).parent().removeClass('code-block-tab-active');
    });

    ele.parent().addClass("code-block-tab-active");
    ele.addClass("code-block-link-active");

    $("#" + ele.data("tab")).css("display", "block");
}

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}