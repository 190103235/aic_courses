function generateGrid() {
    var div;
    for (i = 0; i < 3; i++) {
      for (b = 0; b < 2; b++) { 
        div = document.createElement("div");
        div.className = "cell";
        document.body.appendChild(div);
      }
      document.body.appendChild(document.createElement("br"));
    }
  }
  
  generateGrid();