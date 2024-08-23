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
  let plant = getElementById("plant");
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
  
  let switch_theme = getElementByClass("md-header__option")[0];
  switch_theme.addEventListener("click", () => {
    console.log(switch_theme);
    let labels = switch_theme.getElementsByTagName("label");
    console.log(labels);
    console.log(labels[0].title);
    // let theme = labels.find((e) => e.title = 'Switch to light mode')
    console.log(theme);
    console.log("yeah");
  });
  
  navigation.addEventListener("navigate", e => {
    let url = "http://127.0.0.1:8000/raulpenate/";
    if (url != e.destination.url) {
      bar = getElementByClass("md-header")[0];
      secondBar = getElementByClass("md-tabs")[0];
  
      console.log("tarea");
      console.log(e.destination.url, url);
      bar.style.backgroundColor = " #fff";
      bar.style.color = "#009485";
      secondBar.style.backgroundColor = " #fff";
      secondBar.style.color = "#009485";
    }
  });
  