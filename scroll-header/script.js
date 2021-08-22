$(function () {

  // scrollイベントを取得した際の処理を定義
  $(window).on("scroll", function () {
    // scrollTop()が0より大きい場合
    if ($(this).scrollTop() > 0) {
      // ヘッダーバーをslideDownして表示
      $(".cb-header").slideDown();
    // scrollTop()が0の場合
    } else {
      // ヘッダーバーをslideUpして非表示
      $(".cb-header").slideUp();
    }
  });

});