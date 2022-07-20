function fadeinEvent() {
  // getElementsByClassName で、fadein のクラスを持つ要素を取得し配列として保持
  var fadeinClass= Array.prototype.slice.call(document.getElementsByClassName("fadein"));

  // 配列の数だけ処理を行う
  fadeinClass.forEach(function( element ) {

      // getBoundingClientRect で要素の位置や幅や高さなどを取得
      var boundingClientRect = element.getBoundingClientRect();

      // スクロールの位置情報（html のスクロールがなければ、body のスクロール）を取得
      var scroll = document.documentElement.scrollTop || document.body.scrollTop;

      // ブラウザウィンドウの ビューポートの高さ
      var windowHeight = window.innerHeight;

      // スクロールの位置が、フェードインしたい要素の位置にいるかどうか判定する
      if (scroll > scroll + boundingClientRect.top - windowHeight + 200){

          // 要素を表示する場合は、要素の透明度を無くし、Y方向の移動距離を無くす。これで表示される
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
      }
  });
}

// 画面がロードされたときに行う処理を記載
window.onload = function(){
  // 画面が中途半端なスクロール位置でリロードされても表示するべきものが表示されるようにするため、ロードですぐに呼び出す
  fadeinEvent();

  // スクロールしたら動くエベントとして用意しておく。スクロールするたびに動くようにする
  window.addEventListener('scroll', fadeinEvent, false);
}