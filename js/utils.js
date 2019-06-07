// https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
var DataURL = '/data/list.json';



function loadJSON(callback) {
  request = new XMLHttpRequest();
  request.overrideMimeType("application/json");
  //console.log(request); //0


  request.open('GET', DataURL, true); // Replace 'my_data' with the path to your file
  //console.log(request); //1

  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == "200") {
      //alert('SUCCESS');
      //console.log(request); //4

      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(request.responseText);
    } else {
      //console.log(request); //2 & 3
      //alert('ERROR');
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
    alert('Could not load file');
  };
  request.send(null);
}
