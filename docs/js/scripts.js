(() => {
  function getElementByClass(e) {
    return document.getElementsByClassName(e);
  }

  let bar = getElementByClass("md-header")[0];
  let secondBar = getElementByClass("md-tabs")[0];

  bar.style.color = " #F9F9F9";
  bar.style.backgroundColor = "#009485";
  secondBar.style.color = " #F9F9F9";
  secondBar.style.backgroundColor = "#009485";
})();
