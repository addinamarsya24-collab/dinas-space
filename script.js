body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #f4f4f4;
  color: #222222;
  text-align: center;
}

/* Navigation */
nav {
  background-color: #ffffff;
  padding: 15px;
  position: sticky;
  top: 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #6c63ff;
  font-weight: 600;
}

/* Header */
header {
  background-color: #6c63ff;
  color: white;
  padding: 50px 20px;
}

function sayHello() {
  document.getElementById("contact").style.backgroundColor = "#eae8ff";
  alert("Thank you for visiting my personal website!");
function toggleReadMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("moreText");
    var btnText = document.getElementById("readMoreBtn");

    if (dots.style.display === "none") {
        // If the text is showing, hide it
        dots.style.display = "inline";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
    } else {
        // If the text is hidden, show it
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
}