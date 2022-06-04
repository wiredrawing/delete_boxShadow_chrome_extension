// 全タグ要素にあたっているbox-shadowプロパティを無効化する拡張
// window.addEventListener("load", function (e) {


function scanNodes(element) {
  let speech = new SpeechSynthesisUtterance();
  speech.lang = 'ja-JP';

  if (element.tagName === "SCRIPT") {
    // scriptタグはスルーする
  } else if (element.nodeName === "#text" && element.tagName !== "SCRIPT") {
    let temp = element.textContent.trim();
    if (temp.length > 0) {
      speech.text = temp;
      console.log(temp);
      // 読み上げ処理
      // window.speechSynthesis.speak(speech);
    }
  } else if (element.nodeName === "#comment") {
    // コメントはスルーする
    // console.log("#comment ==> ", element);
  } else {
    if (element.style && element.style.boxShadow) {
      element.style.boxShadow = "";
    }
    element.style.boxShadow = "none";

    for (let i = 0; i < element.childNodes.length; i++) {
      scanNodes(element.childNodes[i]);
    }
  }
}

let body = document.getElementsByTagName("body");

scanNodes(body[0]);
// })



