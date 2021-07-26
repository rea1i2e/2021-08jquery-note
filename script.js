$(function() {

  // $('h1').fadeOut(3000);
  $('#id-name').fadeIn('slow');

  $('#appear').click(function(){
    $('#click-fadeIn').fadeIn();
  });

  // クリックすると文字色が変わる
  $('#text-color').click(function(){
    $('#change-color').css('color','blue')
  });

  // クリックするとテキストが変わるtextメソッド
  $('#text-contents').click(function(){
    $('#change-text').text('答え：text')
  });
  
  // クリックするとhtmlごとが変わるhtmlメソッド
  $('#html-contents').click(function(){
    $('#change-html').html('答え：<a href="https://developer.mozilla.org/ja/docs/Web/HTML/Element">html</a>')
  });

  // 予約モーダル
  $('#reserve-btn').click(function(){
    $('#modal-wrapper').fadeIn()
  });
  
  // 予約モーダルを閉じる
  $('#close').click(function(){
    $('#modal-wrapper').fadeOut()
  });

  // ホバー時、featureの説明文を表示
  $('.feature-hover').hover(
    function() {
      //.feature-descに、.desc-activeを追加
      //$(this).find('.text-contents').addClass('text-active');(見本)
      $(this).find('.feature-desc').addClass('desc-active');
    },
    function() {
      //.feature-descから.desc-activeを削除
      $(this).find('.feature-desc').removeClass('desc-active');

    }
  )

});

