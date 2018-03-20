
  //var planeta;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
          myFunction(xhttp);
      }
  };
  xhttp.open("GET", "xml/planetas.xml", true);
  xhttp.send();

  function myFunction(xml) {
        var xmlDoc = xml.responseXML;
        var x = xmlDoc.getElementsByTagName('mercurio')[0];
        var y = x.childNodes[0];
        document.getElementById("planet").innerHTML =
        y.nodeValue;
  }

