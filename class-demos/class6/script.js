//window = the browser window
// .onload = the event that triggers when the browser
//automatically be called instead of waiting.

window.onload = () => {
  console.log("window loaded");
  // alert("window loaded");

  //   show the tag names
  let paragraphs = document.getElementsByTagName("p");
  console.log(paragraphs);
  //   retrieving a specific paragraph to modify
  // only modify one thing at a time
  paragraphs[0].innerHTML = "this is a modified paragraph";

  let blueClass = document.getElementsByClassName("blue");
  console.log(blueClass);
  blueClass[1].textContent = "modified blue paragraph";


  //   show the tag names
  let important = document.getElementById("important");
  console.log(important);
  important.style.fontSize = "80px";
};
