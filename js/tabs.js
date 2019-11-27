// Создать Табы.


// $(() => {
//     $(".tab_item").not(":first").hide();
//     $(".wrapper .tab").eq(0).addClass("active");
//     $("body").on("click", ".wrapper .tab", function () {
//         $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
//         $(".tab_item").hide().eq($(this).index()).fadeIn()
//     });
// })

$(() => {
    $(".tab_item").not(":first").hide();
    $(".wrapper .tab").eq(0).addClass("active");
    $("body").on("click", ".wrapper .tab", (e) => {
        $(".wrapper .tab").removeClass("active").eq($(e.currentTarget).index()).addClass("active");
        $(".tab_item").hide().eq($(e.currentTarget).index()).fadeIn()
    });
})