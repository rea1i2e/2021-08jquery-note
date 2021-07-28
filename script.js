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
  );
    
  // アコーディオン機能を使ったFAQ
  // .answerはデフォルトで非表示
  // .faq-list-itemがクリックされると、その子要素のpタグにopenクラスが追加（削除）される。
  // .openはデフォルトで表示されるよう指定しておく←しない。
  //クリックされた.faq-list-itemの子要素のspanタグのtextが条件に応じて書き換えられる。
  $('.faq-list-item').click(function(){
    var $answer=$(this).find('.answer')
    if($($answer).hasClass('open')){
      //.openをはずす
      // $($answer).removeClass('open');←不要な$や()がある
      $answer.removeClass('open');
      $answer.slideUp();
      
      //.子要素のspanタグ内textを+に書き換える
      $(this).find('span').text('+');
    }else {
      //.openをつける
      $answer.addClass('open');
      $answer.slideDown();

      //.子要素のspanタグ内textを-に書き換える
      $(this).find('span').text('-');
    }
  });
  


});

