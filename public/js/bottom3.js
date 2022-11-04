$(document).ready(function(e){
    // Submit form data via Ajax
    $("#fupForm").on('submit', function(e){
      e.preventDefault();
      var form = new FormData();
form.append("logo", imgInp.files[0]);

var settings = {
  "url": "/uploadfilec",
  "method": "POST",
  "timeout": 0,
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};

$.ajax(settings).done(function (response) {
  console.log(response);
  var data45 = response;
  var obj22 = JSON.parse(response);
  console.log(obj22.cid);
  console.log(obj22.filename);
  var cid22aa = obj22.cid;
  var filename12a = obj22.filename;
  var cidinfo = document.getElementById('cidinfo');
  var filenameinfo = document.getElementById('filenameinfo');
  cidinfo.textContent = cid22aa;
  filenameinfo.textContent = filename12a;
  var cidinfo2 = cidinfo.textContent;
  var filenameinfo2 = filenameinfo.textContent;
  showModal2();
});
    });
    
});
var alterFile = document.getElementById('alterFile');
var fileInput = document.getElementById('imgInp');
var fileValue = document.getElementById('fileValue');
fileInput.addEventListener('change', function() {
  fileValue.textContent = fileInput.value; 
});
alterFile.addEventListener('click', function() {
fileInput.click();
});
