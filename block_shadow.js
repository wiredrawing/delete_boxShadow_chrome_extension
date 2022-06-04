// 全タグ要素にあたっているbox-shadowプロパティを無効化する拡張
// window.addEventListener("load", function (e) {


  function scanNodes(element) {

    if (element.nodeName !== "#text" && element.nodeName !== "#comment") {
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



