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
  


  //スライド
  
  // .index-btnのクリックイベント
  $('.index-btn').click(function() {
    
    //.activeを削除（初期設定は、1枚目のスライドに.activeがついている
    $('.active').removeClass('active');
    
    //.active-index-btnを削除
    $('.active-index-btn').removeClass('active-index-btn');
    
    //クリックされたボタンのインデックス番号を変数に代入
    var clickedIndex = $('.index-btn').index($(this));
    
    //クリックされた要素に.activeを追加
    $('.slide').eq(clickedIndex).addClass('active');
    
    // クリックされた.index-btnに.active-index-btnを追加
    $('.index-btn').eq(clickedIndex).addClass('active-index-btn');
    // $('.index-btn').addClass('active-index-btn');
    
    // 1. 変数slideIndexに「.active」要素のインデックス番号を代入
    var slideIndex=$('.slide').index($('.active'));
    
    // 3. change-btn要素を表示してください
    $('.change-btn').show();
    
    // 2. ifとelse ifを用いて、「.change-btn」の表示/非表示をおこなってください
    //インデックス番号が０のとき、.prev-btnは非表示に
    if(slideIndex==0) {
      $('.prev-btn').hide();
      
      //インデックス番号が3のとき、.next-btnは非表示に
    } else if(slideIndex==3) {
      $('.next-btn').hide();
    }
  });
  
  // .change-btnのクリックイベント
  $('.change-btn').click(function() {

    //$displaySlideにクリックされた.activeのオブジェクトを代入
    var $displaySlide = $('.active');
    
    //$displayIndexBtnにクリックされた.active-index-btnのオブジェクトを代入
    var $displayIndexBtn = $('.active-index-btn');

    //.activeを削除
    $displaySlide.removeClass('active');

    //.active-index-btnを削除
    $displayIndexBtn.removeClass('active-index-btn');

    //クリックされたのが.next-btnなら.activeを次の要素に追加し、そうでなければ前の要素に追加する
    if ($(this).hasClass('next-btn')) {
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }

    //クリックされたのが.next-btnなら.active-index-btnを次の要素に追加し、そうでなければ前の要素に追加する
    if ($(this).hasClass('next-btn')) {
      $displayIndexBtn.next().addClass('active-index-btn');
    } else {
      $displayIndexBtn.prev().addClass('active-index-btn');
    }
    
  
    // 「.index-btn」のクリックイベントと同様の処理
    // 1. 変数slideIndexに「.active」要素のインデックス番号を代入
    var slideIndex=$('.slide').index($('.active'));
    
    // 3. change-btn要素を表示してください
    $('.change-btn').show();
    
    
    // 2. ifとelse ifを用いて、「.change-btn」の表示/非表示
   //インデックス番号が０のとき、.prev-btnは非表示に
    if(slideIndex==0) {
      $('.prev-btn').hide();
      
       //インデックス番号が3のとき、.next-btnは非表示に
    } else if(slideIndex==3) {
      $('.next-btn').hide();
    }

    
  });
    
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

