(() => {
  function getElementById(id) {
    return document.getElementById(id);
  }
  function getElementByClass(e) {
    return document.getElementsByClassName(e);
  }
  
  let bar = getElementByClass("md-header")[0];
  let secondBar = getElementByClass("md-tabs")[0];
  
  bar.style.backgroundColor = " #F9F9F9";
  bar.style.color = "#003329";
  secondBar.style.backgroundColor = " #F9F9F9";
  secondBar.style.color = "#003329";
  
  let text = getElementById("text");
  let leaf = getElementById("leaf");
  let tree = getElementById("tree");
  let hill1 = getElementById("hill1");
  let hill4 = getElementById("hill4");
  let hill5 = getElementById("hill5");
  
  window.addEventListener("scroll", () => {
    let value = window.scrollY;
  
    text.style.marginTop = value * 2.5 + "px";
    tree.style.top = value * 0.4 + "px";
    leaf.style.top = value * -1.5 + "px";
    leaf.style.left = value * 1.5 + "px";
    hill1.style.top = value * 1.5 + "px";
    hill4.style.left = value * -1.5 + "px";
    hill5.style.left = value * 1.5 + "px";
  });
  
  
  navigation.addEventListener("navigate", (e) => {
    let url = "http://127.0.0.1:8000/raulpenate/";
    if (url != e.destination.url) {
      bar = getElementByClass("md-header")[0];
      secondBar = getElementByClass("md-tabs")[0];
  
      console.log("tarea");
      console.log(e.destination.url, url);
      bar.style.backgroundColor = " #009485";
      bar.style.color = "#fff";
      secondBar.style.backgroundColor = " #009485";
      secondBar.style.color = "#fff";
    }else{
      bar.style.backgroundColor = " #F9F9F9";
      bar.style.color = "#003329";
      secondBar.style.backgroundColor = " #F9F9F9";
      secondBar.style.color = "#003329";
    }
  });
  
})();