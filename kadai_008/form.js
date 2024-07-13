$(function () {
  // id属性がbtnの要素がクリックされたら
  $('.btn').on('click', function () {
    $('.text-box').val('クリックされました！');
  });
});