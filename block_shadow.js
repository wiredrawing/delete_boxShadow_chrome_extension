// プログラムの実行をdocument_endに指定すると
// windowのloadイベントを待つ必要はなさそう
function scanNodes(element) {
  let speech = new SpeechSynthesisUtterance();
  speech.lang = 'ja-JP';

  if (element.tagName === "SCRIPT") {
    // scriptタグはスルーする
  } else if (element.nodeName === "#text" && element.tagName !== "SCRIPT") {
    let temp = element.textContent.trim();
    if (temp.length > 0) {
      speech.text = temp;
      // console.log(temp);
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


// -------------------------------------------------
// chrome拡張機能でDOMドキュメントを操作する検証
// -------------------------------------------------
let _ = function () {
  let prompt = document.createElement("div");
  let message = document.createTextNode("テキストを作成")
  prompt.appendChild(message);
  prompt.style.position = "fixed";
  prompt.style.top = "0px";
  prompt.style.left = "0px";
  prompt.style.backgroundColor = "#DDD";
  prompt.style.zIndex = "100000";
  document.getElementsByTagName("body")[0].appendChild(prompt);
}
_ ();