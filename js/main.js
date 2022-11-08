// Smooth scroll
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++) {
  smoothScrollTrigger[i].addEventListener("click", (e) => {
    e.preventDefault();
    const href = smoothScrollTrigger[i].getAttribute("href");
    const targetElement = document.getElementById(href.replace("#", ""));
    // get the height of the targetElement
    const rect = targetElement.getBoundingClientRect().top;
    console.log("rect", rect);
    // get the number of pixels the currently scrolled document
    const offset = window.pageYOffset;
    console.log("offset", offset);
    // get the fixed header hight
    const gap = 135.45;
    const target = rect + offset - gap;

    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
  });
}

// Slick slider JQueary
$(function () {
  $("#slick-area").slick({
    arrows: true, // 前・次のボタンを表示する
    dots: true, // ドットナビゲーションを表示する
    appendDots: $(".dots"), // ドットナビゲーションの生成位置を変更
    speed: 1000, // スライドさせるスピード（ミリ秒）
    slidesToShow: 1, // 表示させるスライド数
    centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
    variableWidth: true, // スライド幅の自動計算を無効化
  });
});
