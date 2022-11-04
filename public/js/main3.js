
  $(document).ready(function() {
  $.ajax({
  url: "/js/main2.js",
  dataType: "script",
  cache: true
  });

var w = $(window).width();  
if(w < 1200) {  
$('#nav').hide();
$('#nav1').show();  
}else{
  $('#nav').show();
  $('#nav1').hide();
} 
$(window).resize(function(){  
var w = $(window).width();  
if(w < 1200) {  
$('#nav').hide();
$('#nav1').show();  
}else{
  $('#nav').show();
  $('#nav1').hide();
}  
});

});
function burgershow() {
header = document.querySelector('.header');
header.classList.toggle('menu-opened');
};
var colors = [
"#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#648177", "#0d5ac1",
"#f205e6", "#1c0365", "#14a9ad", "#4ca2f9", "#a4e43f", "#d298e2", "#6119d0",
"#d2737d", "#c0a43c", "#f2510e", "#651be6", "#79806e", "#61da5e", "#cd2f00",
"#9348af", "#01ac53", "#c5a4fb", "#996635", "#b11573", "#4bb473", "#75d89e",
"#2f3f94", "#2f7b99", "#da967d", "#34891f", "#b0d87b", "#ca4751", "#7e50a8",
"#c4d647", "#e0eeb8", "#11dec1", "#289812", "#566ca0", "#ffdbe1", "#2f1179",
"#935b6d", "#916988", "#513d98", "#aead3a", "#9e6d71", "#4b5bdc", "#0cd36d",
"#250662", "#cb5bea", "#228916", "#ac3e1b", "#df514a", "#539397", "#880977",
"#f697c1", "#ba96ce", "#679c9d", "#c6c42c", "#5d2c52", "#48b41b", "#e1cf3b",
"#5be4f0", "#57c4d8", "#a4d17a", "#be608b", "#96b00c", "#088baf", "#f158bf",
"#e145ba", "#ee91e3", "#05d371", "#5426e0", "#4834d0", "#802234", "#6749e8",
"#0971f0", "#8fb413", "#b2b4f0", "#c3c89d", "#c9a941", "#41d158", "#fb21a3",
"#51aed9", "#5bb32d", "#21538e", "#89d534", "#d36647", "#7fb411", "#0023b8",
"#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3", "#79352c", "#521250",
"#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec", "#1bb699", "#6b2e5f",
"#64820f", "#21538e", "#89d534", "#d36647", "#7fb411", "#0023b8", "#3b8c2a",
"#986b53", "#f50422", "#983f7a", "#ea24a3", "#79352c", "#521250", "#c79ed2",
"#d6dd92", "#e33e52", "#b2be57", "#fa06ec", "#1bb699", "#6b2e5f", "#64820f",
"#9cb64a", "#996c48", "#9ab9b7", "#06e052", "#e3a481", "#0eb621", "#fc458e",
"#b2db15", "#aa226d", "#792ed8", "#73872a", "#520d3a", "#cefcb8", "#a5b3d9",
"#7d1d85", "#c4fd57", "#f1ae16", "#8fe22a", "#ef6e3c", "#243eeb", "#dd93fd",
"#3f8473", "#e7dbce", "#421f79", "#7a3d93", "#635f6d", "#93f2d7", "#9b5c2a",
"#15b9ee", "#0f5997", "#409188", "#911e20", "#1350ce", "#10e5b1", "#fff4d7",
"#cb2582", "#ce00be", "#32d5d6", "#608572", "#c79bc2", "#00f87c", "#77772a",
"#6995ba", "#fc6b57", "#f07815", "#8fd883", "#060e27", "#96e591", "#21d52e",
"#d00043", "#b47162", "#1ec227", "#4f0f6f", "#1d1d58", "#947002", "#bde052",
"#e08c56", "#28fcfd", "#36486a", "#d02e29", "#1ae6db", "#3e464c", "#a84a8f",
"#911e7e", "#3f16d9", "#0f525f", "#ac7c0a", "#b4c086", "#c9d730", "#30cc49",
"#3d6751", "#fb4c03", "#640fc1", "#62c03e", "#d3493a", "#88aa0b", "#406df9",
"#615af0", "#2a3434", "#4a543f", "#79bca0", "#a8b8d4", "#00efd4", "#7ad236",
"#7260d8", "#1deaa7", "#06f43a", "#823c59", "#e3d94c", "#dc1c06", "#f53b2a",
"#b46238", "#2dfff6", "#a82b89", "#1a8011", "#436a9f", "#1a806a", "#4cf09d",
"#c188a2", "#67eb4b", "#b308d3", "#fc7e41", "#af3101", "#71b1f4", "#a2f8a5",
"#e23dd0", "#d3486d", "#00f7f9", "#474893", "#3cec35", "#1c65cb", "#5d1d0c",
"#2d7d2a", "#ff3420", "#5cdd87", "#a259a4", "#e4ac44", "#1bede6", "#8798a4",
"#d7790f", "#b2c24f", "#de73c2", "#d70a9c", "#88e9b8", "#c2b0e2", "#86e98f",
"#ae90e2", "#1a806b", "#436a9e", "#0ec0ff", "#f812b3", "#b17fc9", "#8d6c2f",
"#d3277a", "#2ca1ae", "#9685eb", "#8a96c6", "#dba2e6", "#76fc1b", "#608fa4",
"#20f6ba", "#07d7f6", "#dce77a", "#77ecca"
];
var random_color = colors[Math.floor(Math.random() * colors.length)];

function hideModal() {
modal.classList.add('hide');
};

function showModal2() {
var cidinfo3 = document.getElementById('cidinfo');
var filenameinfo3 = document.getElementById('filenameinfo');
var result123 = document.getElementById('result123').value;
var result123a = document.getElementById('result123a').value;
var result123b = document.getElementById('result123b').value;
var result123c = document.getElementById('result123c').value;
var cidinfo3 = cidinfo3.textContent;
var filenameinfo3 = filenameinfo3.textContent;
console.log(filenameinfo3 , cidinfo3, result123, result123a, result123b, result123c);
const inner1 = `<div id="toolbox1" class="modal-content1">
<div style="width: 100%;text-align: right;">
<a onclick="hideModal()" href="#"><i class="fa fa-close" style="margin-right: 5px !important;"></i></a>
</div>
<iframe src="/test3?logo=`+filenameinfo3+`&cid=`+cidinfo3+
`&result123=`+result123+`&result123a=`+result123a+`&result123b=`+result123b+`&result123c=`+result123c+`" style="border:none; min-width: 850px; height: 100%">
</iframe></div>`;

modal.innerHTML = inner1;
modal.classList.remove('hide');
};

function updateMeasures(evt) {
var obj = evt.target;
if (obj.type != 'group') {
return;
}
var width = obj.getWidth();
var height = obj.getWidth();
obj._objects[1].text = width.toFixed(2) + 'px';
obj._objects[1].scaleX= 1 / obj.scaleX;
obj._objects[1].scaleY= 1 / obj.scaleY;
obj._objects[2].text = height.toFixed(2) + 'px';
obj._objects[2].scaleX= 1 / obj.scaleY;
obj._objects[2].scaleY= 1 / obj.scaleX;
};

$(function() {

var toolbox = $('#toolbox'),
height = toolbox.height(),
scrollHeight = toolbox.get(0).scrollHeight;

toolbox.bind('mousewheel', function(e, d) {
if((this.scrollTop === (scrollHeight - height) && d < 0) || (this.scrollTop === 0 && d > 0)) {
e.preventDefault();
}
});

});

$(document).ready (function () {
  
  'use strict';
  
  var $searchView = $('.menu-search-container');
  var $menu = $('.menu-mac, .menu-iPad, .menu-iPhone, .menu-watch, .menu-tv, .menu-support, .menu-search, .menu-store');
  var $fadeScreen = $('.fade-screen');
  
  $('li.menu-search a, .fade-screen, .menu-search-close').on('click', function (e) {
  
  $searchView.toggleClass('active');
  
  setTimeout(function () {
  $searchView.children().find('input').focus();
  }, 1100);
  
  $fadeScreen.toggleClass('visible');
  $menu.removeClass('is-closed');
  $menu.toggleClass('hidden');
  
  e.preventDefault();
  });
  
  $('.fade-screen,.menu-search-close').on('click', function (e) {
  $menu.toggleClass('is-closed');
  e.preventDefault();
  });
  
  });

