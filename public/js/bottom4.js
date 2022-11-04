const canvas = new fabric.Canvas('c', {
width: 1000,
height: 1000 },
{ selection: false });
fabric.Image.fromURL('', function(o) {
canvas.setBackgroundImage(o, canvas.renderAll.bind(canvas), {
top: 0,
left: 0
});
});
var snapSize = 10;
var gridSize = 10;
canvas.on('object:moving',function(e){
if (e.target){
function roundUpNearest10(num) {
return Math.round(num / 10) * 1;
};
var west = e.target.aCoords.tl.x;
var west1 = e.target.aCoords.tl.y;
var east = e.target.aCoords.tr.x;
var east1 = e.target.aCoords.tr.y;
var westa = e.target.aCoords.bl.x;
var west1a = e.target.aCoords.bl.y;
var easta = e.target.aCoords.br.x;
var east1a = e.target.aCoords.br.y;
var topdude = e.target.getTop()
var topdude = e.target.getTop();
var leftdude = e.target.getLeft();
var widthdude = e.target.getWidth();
var heightdude = e.target.getHeight();
var parent = {top: roundUpNearest10(topdude), left:roundUpNearest10(leftdude), width: widthdude, height: heightdude };
var children = [{top:0, left:0, width: 100, height: 100 }];
var inverses = inverseIntersection(parent, children);

var a1a =0;

rectData.forEach((rectData, index) => {
var rect1a = rectData[3]+rectData[1];
var rect1b = rectData[3]+rectData[0];
var rect1c = rectData[2]+rectData[0];
var rect1d = rect1c+rectData[1];
var rect1e = 1000 - rectData[2];
var rect1e = 1000 - rectData[2];
console.log("rectData"+[index]);
let pX = rectData[0];
let pY = rectData[1];

let getArea = pY * pX;
console.log('getArea = '+getArea);
var rec1 = [westa, roundUpNearest10(east1) * 10, roundUpNearest10(east) * 10, west1a]; 
console.log(rec1);
var rec2 = [rectData[0],rectData[3], rect1c, rect1d];
console.log(rec2);
if (roundUpNearest10(east) * 10 < rectData[3] || rectData[3]+rectData[0] < westa ||
west1a < rectData[2] || rectData[1]+rectData[2] < roundUpNearest10(east1) * 10)
{var recDataArea = false; 
console.log('false' + recDataArea);
canvas.getObjects().forEach(function(o) {
if(o.id == "rectData"+[index]) {
//    canvas.setActiveObject(o);
console.log(o.id)
o.set({
opacity: 0,
stroke : 'black',
strokeWidth : 0,
});
canvas.renderAll();
}

});
}
else{
var recDataArea = true;
console.log('true' + recDataArea);
canvas.getObjects().forEach(function(o) {
if(o.id == "rectData"+[index]) {
//    canvas.setActiveObject(o);
console.log(o.id)
o.set({
opacity: 0.5,
stroke : 'black',
strokeWidth : 0,
});
canvas.renderAll();
}

});
} 

if(recDataArea == true){
let x1a = Math.max(rectData[3], rec1[0])
let x2a = Math.min(rectData[3]+rectData[0], rec1[2])
let y1a = Math.max(rectData[2], rec1[1])
let y2a = Math.min(rectData[1]+rectData[2], rec1[3])

let pXa = Math.abs(x2a - x1a)
let pYa = Math.abs(y2a - y1a)

console.log(pXa * pYa);
console.log(a1a);
var recDataArea1a = pXa * pYa;
};

if(recDataArea1a > 1){
a1a = a1a + 1;
console.log(a1a);
}else{
}

if(a1a > 0){
document.getElementById("container5").innerHTML = 
'you are not allowed to put your logo here.';
canvas.getObjects().forEach(function(o) {
if(o.id == "rectData"+[index]) {
//    canvas.setActiveObject(o);
console.log(o.id)
o.set({
opacity: 0.5,
stroke : 'black',
strokeWidth : 5,
});
canvas.renderAll();
}

});
}
else{
document.getElementById("container5").innerHTML = 
'&nbsp;';
}



});



document.getElementById("result123").value = (roundUpNearest10(topdude));
document.getElementById("result123a").value = (roundUpNearest10(leftdude));
document.getElementById("result123b").value = (roundUpNearest10(widthdude));
document.getElementById("result123c").value = (roundUpNearest10(heightdude));
document.getElementById("result123d").value = ((roundUpNearest10(widthdude)) * (roundUpNearest10(heightdude)));
document.getElementById("cox-control").value = (roundUpNearest10(topdude));
document.getElementById("coy-control").value = (roundUpNearest10(leftdude));


}

document.getElementById("container3").innerHTML = 
'top left (x) '+(roundUpNearest10(west1))+
'<br />top left (y) '+(roundUpNearest10(west))+
'<br />top right (x) '+(roundUpNearest10(east))+
'<br />top right (y) '+(roundUpNearest10(east1))+
'<br />bottom left (x) '+(roundUpNearest10(westa))+
'<br />bottom left (y) '+(roundUpNearest10(west1a))+
'<br />bottom right (x) '+(roundUpNearest10(easta))+
'<br />bottom right (y) '+(roundUpNearest10(east1a));
if (west1 < 0 || west < 0  || easta > 1000 || east1a > 1000) {
document.getElementById("container4").innerHTML = 'you are out of bounds';
}else{
document.getElementById("container4").innerHTML = '&nbsp;';
}
});

canvas.on('object:scaling',function(e){
if (e.target){
function roundUpNearest10(num) {
return Math.round(num / 10) * 1;
};

// console.log(e.target.getTop());
//   console.log(e.target.getLeft());
var topdude = e.target.getTop();
var topdudea = (roundUpNearest10(topdude));
var leftdude = e.target.getLeft();
var widthdude = e.target.getWidth();
var heightdude = e.target.getHeight();


//console.log(leftdude);

document.getElementById("result123").value = (roundUpNearest10(topdude));
document.getElementById("result123a").value = (roundUpNearest10(leftdude));
document.getElementById("result123b").value = (roundUpNearest10(widthdude));
document.getElementById("result123c").value = (roundUpNearest10(heightdude));
document.getElementById("result123d").value = ((roundUpNearest10(widthdude)) * (roundUpNearest10(heightdude)));
document.getElementById("cox-control").value = (roundUpNearest10(topdude));
document.getElementById("coy-control").value = (roundUpNearest10(leftdude));
}
});
for (var i = 0; i < (1000 / gridSize); i++) {
canvas.add(new fabric.Line([ i * gridSize, 0, i * gridSize, 1000], {  selectable: false }));
canvas.add(new fabric.Line([ 0, i * gridSize, 1000, i * gridSize], {  selectable: false }))
}
rectData.forEach((rectangle, i) => {


canvas.add(new fabric.Rect({ 

id:   'rectData'+i,
left: rectangle[3],
top: rectangle[2],
width: rectangle[0],
height: rectangle[1],
fill: rectangle[4],
opacity: 0,
originX: 'left',
originY: 'top',
hasRotatingPoint: false,
selectable: false,
hasBorders: false,
borderScaleFactor: 0
}));
console.log('this is rectData'+i);
});

function Snap(value)
{
return Math.round(value / snapSize) * snapSize;
}

function SnapMoving(options)
{
options.target.set({
left: Snap(options.target.left),
top: Snap(options.target.top)
});
}

function SnapScaling(options)
{
var target = options.target;
var pointer = options.pointer;

var px = Snap(pointer.x);
var py = Snap(pointer.y);
var rx = (px - target.left) / target.width;
var by = (py - target.top) / target.height;
var lx = (target.left - px + (target.width * target.scaleX)) / (target.width);
var ty = (target.top - py + (target.height * target.scaleY)) / (target.height);

var a = {};


// Cannot get snap to work on some corners :-(
switch (target.__corner)
{
case "tl":
// Not working
//a = { scaleX: lx, scaleY: ty, left: px, top: py };
break;
case "mt":
a = { scaleY: ty, top: py };
break;
case "tr":
// Not working
//a = { scaleX: rx, scaleY: ty, top: py  };
break;
case "ml":
a = { scaleX: lx, left: px };
break;
case "mr":
a = { scaleX: rx };
break;
case "bl":
// Not working
//a = { scaleX: lx, scaleY: by, left: px };
break;
case "mb":
a = { scaleY: by };
break;
case "br":
a = { scaleX: rx, scaleY: by };
break;
}

options.target.set(a);

}



canvas.on({
"object:moving": SnapMoving,
"object:scaling": SnapScaling,

}

);





canvas.renderAll();

var rect2a = fabric.Image.fromURL('/images/default.jpg', image => {
// image.scale(0.5);
image.width = 100;
image.height = 100;

image.set({
left: 0,
top: 0,
id: 'image1',
hasControls: false,
hasBorders: false,
lockScalingX: true,
borderScaleFactor: 0,
opacity: 1,
lockScalingY: true,
lockRotation: true,
hoverCursor: 'default',
clipTo: function (ctx) {
return clipBySlot(ctx, image);
} });


scaleImageToSlot(image);




canvas.on('object:moving', function(options) { 
options.target.setCoords();
});





//canvas.add(slot1);
canvas.renderAll();
});

function scaleImageToSlot(image, slot) {

// Find smallest ratio of slot:width / image:width and slot:height / image: height
let ratio = Math.min(1 * image.width, 1 * image.height);
//console.log(`ratio width ${slot.width / image.width}, height ${slot.height / image.height}`);
//console.log('=> ratio', ratio);
if (ratio <= 1) {
let newHeight = image.height * image.scaleY;
let newWidth = image.width * image.scaleX;
}
var shiftLeft = (slot.width - image.width * image.scaleX) / 2;
var shiftTop = (slot.height - image.height * image.scaleY) / 2;
//console.log(`shift ${shiftLeft}x${shiftTop}`);




}

function clipBySlot(ctx, image, slot) {
var scaleXTo1 = 1 / image.scaleX;
var scaleYTo1 = 1 / image.scaleY;

// Save context of the canvas so it can be restored after the clipping
ctx.save();

ctx.translate(0, 0);
ctx.rotate(degToRad(image.angle * -1));
ctx.scale(scaleXTo1, scaleYTo1);

ctx.beginPath();

const boundingRect = image.getBoundingRect();
// console.log(`[left] ${image.left} - (${boundingRect.width} / 2)`);

ctx.rect(
slot.left - image.left - Math.floor(boundingRect.width / 2),
slot.top - image.top - Math.floor(boundingRect.height / 2),
slot.width,
slot.height);

ctx.stroke();
ctx.closePath();

// Restore the original context.
ctx.restore();
}

// Since the `angle` property of the Image object is stored 
// in degrees, we'll use this to convert it to radians.
function degToRad(degrees) {
return degrees * (Math.PI / 180);
}

function intersectingCheck(activeObject) {
activeObject.setCoords();
if(typeof activeObject.refreshLast != 'boolean') {
activeObject.refreshLast = true
};

//loop canvas objects
activeObject.canvas.forEachObject(function (targ) {
if (targ === activeObject) return; //bypass self

//check intersections with every object in canvas
if (activeObject.intersectsWithObject(targ) 
|| activeObject.isContainedWithinObject(targ) 
|| targ.isContainedWithinObject(activeObject)) {
//objects are intersecting - deny saving last non-intersection position and break loop
if(typeof activeObject.lastLeft == 'number') {
activeObject.left = activeObject.lastLeft;
activeObject.top = activeObject.lastTop;
activeObject.refreshLast = false;
return;
}
}
else {
activeObject.refreshLast = true;
}
});

if(activeObject.refreshLast) {
//save last non-intersecting position if possible
activeObject.lastLeft = activeObject.left
activeObject.lastTop = activeObject.top;
}
}


canvas.on({
'object:moving': onChange,
'object:scaling': onChange,
'object:rotating': onChange,
});

function onChange(options, slot) {
options.target.setCoords();
canvas.forEachObject(function(obj) {
if (obj === options.target) return;
//obj.set('opacity' ,options.target.intersectsWithObject(obj) ? 0.5 : 0);
});
}

function addpixillion(){
var adgrid1 = document.getElementById("adGrid");
adgrid1.classList.remove("zindexplus");
adgrid1.classList.add('zindexsub');
}


imgInp.onchange = evt => {
const [file] = imgInp.files
if (file) {
canvas.getObjects().forEach(function(o) {
if(o.id == 'dude12a') {
canvas.setActiveObject(o);
console.log(o.id)
}

})
var obj = canvas.getActiveObject();
//need to call the item id 
blah.src = URL.createObjectURL(file);
blah22.src = URL.createObjectURL(file);
//blah5.src = URL.createObjectURL(file);
var blah1 = URL.createObjectURL(file);
let blah3 = URL.createObjectURL(file);
const blah4 = URL.createObjectURL(file);
var fileInput1 = document.getElementById('imgInp');
var fileValue1 = document.getElementById('fileValue1');
fileValue1.textContent = fileInput1.files[0].name;

obj.setSrc(blah1, function() {
obj.set({
width: 10,
height: 10
});
canvas.renderAll();

});

}
};

jQuery( document ).ready(function() {
// var canvas = this.__canvas = new fabric.Canvas('c');
var img4 = new fabric.Image.fromURL('/images/default_logo.png', function(oImg) {
oImg.set({
//id: this.dude45rt,
id: 'dude12a',
left: 0,
top: 20,
width:10,
height:10,
scaleX: 10,
scaleY: 10,
lockScalingX: true,  
hasControls: false,      
lockScalingY: true,
lockRotation: true,
});
canvas.add(oImg);
canvas.setActiveObject(oImg);
var scaleControl = $('#scale-control');
var topControl = $('#cox-control');
var leftControl = $('#coy-control');
topControl.on("change",function() {
var a1a=0;
var newValue = this.value;
console.log(newValue);

// oImg.top(parseFloat(newValue)).setCoords();
oImg.set('top', parseInt(newValue * 10, 10)).setCoords();
canvas.renderAll();
var width1 = oImg.width;
var westca = oImg.top;
var westcfa = oImg.left;
var westa = oImg.aCoords.tl.x;
var west1a = oImg.aCoords.tl.y;
var easta = oImg.aCoords.tr.x;
var east1a = oImg.aCoords.tr.y;
var westaa = oImg.aCoords.bl.x;
var west1aa = oImg.aCoords.bl.y;
var eastaa = oImg.aCoords.br.x;
var east1aa = oImg.aCoords.br.y;
var matrix = oImg.calcTransformMatrix();
var num0 = westca / 10;
var num1 = westcfa / 10;
var num2 = (westca / 10);
var num3 = (westcfa / 10) + matrix[0];
var num4 = (westca / 10) + matrix[0];
var num5 =  westcfa / 10;
var num6 = (westca / 10) + matrix[0];
var num7 = (westcfa / 10) + matrix[0];
var withoutLeading0 = +num0;
var withoutLeading1 = +num1;
var withoutLeading2 = +num2;
var withoutLeading3 = +num3;
var withoutLeading4 = +num4;
var withoutLeading5 = +num5;
var withoutLeading6 = +num6;
var withoutLeading7 = +num7;

//----------------------------------

var numtimes0 = withoutLeading0 * 10;
var numtimes1 = withoutLeading1 * 10;
var numtimes2 = withoutLeading2 * 10;
var numtimes3 = withoutLeading3 * 10;
var numtimes4 = withoutLeading4 * 10;
var numtimes5 = withoutLeading5 * 10;
var numtimes6 = withoutLeading6 * 10;
var numtimes7 = withoutLeading7 * 10;

//----------------------------------


document.getElementById("container3").innerHTML = 
'top left (x) '+withoutLeading0+
'<br />top left (y) '+withoutLeading1+
'<br />top right (x) '+withoutLeading2+
'<br />top right (y) '+withoutLeading3+
'<br />bottom left (x) '+withoutLeading4+
'<br />bottom left (y) '+withoutLeading5+
'<br />bottom right (x) '+withoutLeading6+
'<br />bottom right (y) '+withoutLeading7;

document.getElementById("result123").value = (newValue);
document.getElementById("result123b").value = (oImg.scaleX);
document.getElementById("result123c").value = (oImg.scaleY);

if (oImg.top < 0 || oImg.left < 0 || withoutLeading6 > 100 || withoutLeading7 > 100) {
// Do Something
document.getElementById("container4").innerHTML = 'you are out of bounds';
}else{
document.getElementById("container4").innerHTML = '&nbsp;';
}



document.getElementById("container5").innerHTML = '&nbsp;';
rectData.forEach((rectData, index) => {
// code

var rect1a = rectData[2]+rectData[1];
var rect1b = rectData[3]+rectData[0];
var rect1c = rectData[2]+rectData[0];
var rect1d = rect1c+rectData[1];
var rect1e = 1000 - rectData[2];
var rect1e = 1000 - rectData[2];
console.log("rectData"+[index]);
let pX = rectData[0];
let pY = rectData[1];

let getArea = pY * pX;
console.log('getArea = '+getArea);
console.log(rectData[3], rectData[2], rectData[3]+rectData[0], rectData[1]+rectData[2]);
console.log(withoutLeading1 * 10, withoutLeading0 * 10, withoutLeading7 * 10, withoutLeading6 * 10);

if (withoutLeading7 * 10 < rectData[3] || rectData[3]+rectData[0] < withoutLeading1 * 10 ||
withoutLeading6 * 10 < rectData[2] || rectData[1]+rectData[2] < withoutLeading0 * 10)
{var recDataArea = false; 
console.log('false' + recDataArea);
canvas.getObjects().forEach(function(o) {
if(o.id == "rectData"+[index]) {
//    canvas.setActiveObject(o);
console.log(o.id)
o.set({
opacity: 0,
stroke : 'black',
strokeWidth : 0,
});
canvas.renderAll();
}

});

}
else{
var recDataArea = true;
console.log('true' + recDataArea);
canvas.getObjects().forEach(function(o) {
if(o.id == "rectData"+[index]) {
//    canvas.setActiveObject(o);
console.log(o.id)
o.set({
opacity: 0.5,
stroke : 'black',
strokeWidth : 0,
});
canvas.renderAll();
}

});

} 

if(recDataArea == true){
let x1a = Math.max(rectData[3], withoutLeading1 * 10)
let x2a = Math.min(rectData[3]+rectData[0], withoutLeading7 * 10)
let y1a = Math.max(rectData[2], withoutLeading0 * 10)
let y2a = Math.min(rectData[1]+rectData[2], withoutLeading6 * 10)

let pXa = Math.abs(x2a - x1a)
let pYa = Math.abs(y2a - y1a)

console.log(pXa * pYa);
console.log(a1a);
var recDataArea1a = pXa * pYa;
};

if(recDataArea1a > 1){
a1a = a1a + 1;
console.log(a1a);
}else{
}

if(a1a > 0){
document.getElementById("container5").innerHTML = 
'you are not allowed to put your logo here.';
canvas.getObjects().forEach(function(o) {
if(o.id == "rectData"+[index]) {
//    canvas.setActiveObject(o);
console.log(o.id)
o.set({
opacity: 0.5,
stroke : 'black',
strokeWidth : 5,
});
canvas.renderAll();
}

});
}
else{
document.getElementById("container5").innerHTML = 
'&nbsp;';
}

});
function updateControls() {
}
canvas.observe("object:moving", function (e) {
updateControls();


});
});
leftControl.on("change",function() {
var a1a=0;
var newValue = this.value;
console.log(newValue);

// oImg.top(parseFloat(newValue)).setCoords();
oImg.set('left', parseInt(newValue * 10, 10)).setCoords();
canvas.renderAll();
var width1 = oImg.width;
var westca = oImg.top;
var westcfa = oImg.left;
var westa = oImg.aCoords.tl.x;
var west1a = oImg.aCoords.tl.y;
var easta = oImg.aCoords.tr.x;
var east1a = oImg.aCoords.tr.y;
var westaa = oImg.aCoords.bl.x;
var west1aa = oImg.aCoords.bl.y;
var eastaa = oImg.aCoords.br.x;
var east1aa = oImg.aCoords.br.y;
var matrix = oImg.calcTransformMatrix();
var num0 = westca / 10;
var num1 = westcfa / 10;
var num2 = (westca / 10);
var num3 = (westcfa / 10) + matrix[0];
var num4 = (westca / 10) + matrix[0];
var num5 =  westcfa / 10;
var num6 = (westca / 10) + matrix[0];
var num7 = (westcfa / 10) + matrix[0];
var withoutLeading0 = +num0;
var withoutLeading1 = +num1;
var withoutLeading2 = +num2;
var withoutLeading3 = +num3;
var withoutLeading4 = +num4;
var withoutLeading5 = +num5;
var withoutLeading6 = +num6;
var withoutLeading7 = +num7;

//----------------------------------

var numtimes0 = withoutLeading0 * 10;
var numtimes1 = withoutLeading1 * 10;
var numtimes2 = withoutLeading2 * 10;
var numtimes3 = withoutLeading3 * 10;
var numtimes4 = withoutLeading4 * 10;
var numtimes5 = withoutLeading5 * 10;
var numtimes6 = withoutLeading6 * 10;
var numtimes7 = withoutLeading7 * 10;

//----------------------------------


document.getElementById("container3").innerHTML = 
'top left (x) '+withoutLeading0+
'<br />top left (y) '+withoutLeading1+
'<br />top right (x) '+withoutLeading2+
'<br />top right (y) '+withoutLeading3+
'<br />bottom left (x) '+withoutLeading4+
'<br />bottom left (y) '+withoutLeading5+
'<br />bottom right (x) '+withoutLeading6+
'<br />bottom right (y) '+withoutLeading7;

document.getElementById("result123a").value = (newValue);
document.getElementById("result123b").value = (oImg.scaleX);
document.getElementById("result123c").value = (oImg.scaleY);

if (oImg.top < 0 || oImg.left < 0 || withoutLeading6 > 100 || withoutLeading7 > 100) {
// Do Something
document.getElementById("container4").innerHTML = 'you are out of bounds';
}else{
document.getElementById("container4").innerHTML = '&nbsp;';
}



document.getElementById("container5").innerHTML = '&nbsp;';
rectData.forEach((rectData, index) => {
// code

var rect1a = rectData[2]+rectData[1];
var rect1b = rectData[3]+rectData[0];
var rect1c = rectData[2]+rectData[0];
var rect1d = rect1c+rectData[1];
var rect1e = 1000 - rectData[2];
var rect1e = 1000 - rectData[2];
console.log("rectData"+[index]);
let pX = rectData[0];
let pY = rectData[1];

let getArea = pY * pX;
console.log('getArea = '+getArea);
console.log(rectData[3], rectData[2], rectData[3]+rectData[0], rectData[1]+rectData[2]);
console.log(withoutLeading1 * 10, withoutLeading0 * 10, withoutLeading7 * 10, withoutLeading6 * 10);

if (withoutLeading7 * 10 < rectData[3] || rectData[3]+rectData[0] < withoutLeading1 * 10 ||
withoutLeading6 * 10 < rectData[2] || rectData[1]+rectData[2] < withoutLeading0 * 10)
{var recDataArea = false; 
console.log('false' + recDataArea);
console.log("rectData"+[index]);

canvas.getObjects().forEach(function(o) {
if(o.id == "rectData"+[index]) {
//    canvas.setActiveObject(o);
console.log(o.id)
o.set({
opacity: 0,
stroke : 'black',
strokeWidth : 0,
});
canvas.renderAll();
}

});

}
else{
var recDataArea = true;
console.log('true' + recDataArea);
console.log("rectData"+[index]);
canvas.getObjects().forEach(function(o) {
if(o.id == "rectData"+[index]) {
//    canvas.setActiveObject(o);
console.log(o.id)
o.set({
opacity: 0.5,
stroke : 'black',
strokeWidth : 0,
});
canvas.renderAll();
}

});
} 

if(recDataArea == true){
let x1a = Math.max(rectData[3], withoutLeading1 * 10)
let x2a = Math.min(rectData[3]+rectData[0], withoutLeading7 * 10)
let y1a = Math.max(rectData[2], withoutLeading0 * 10)
let y2a = Math.min(rectData[1]+rectData[2], withoutLeading6 * 10)

let pXa = Math.abs(x2a - x1a)
let pYa = Math.abs(y2a - y1a)

console.log(pXa * pYa);
console.log(a1a);
var recDataArea1a = pXa * pYa;
};

if(recDataArea1a > 1){
a1a = a1a + 1;
console.log(a1a);
}else{
}

if(a1a > 0){
document.getElementById("container5").innerHTML = 
'you are not allowed to put your logo here.';
canvas.getObjects().forEach(function(o) {
if(o.id == "rectData"+[index]) {
//    canvas.setActiveObject(o);
console.log(o.id)
o.set({
opacity: 0.5,
stroke : 'black',
strokeWidth : 5,
border: '10px solid #00A4BD'
});
canvas.renderAll();
}

})
}
else{
document.getElementById("container5").innerHTML = 
'&nbsp;';
}

});
function updateControls() {
}
canvas.observe("object:moving", function (e) {
updateControls();


});
});
scaleControl.on("change",function() {
var a1a=0;
var newValue = this.value; 

document.getElementById("container5").innerHTML = '&nbsp;';
//console.log(width1);


oImg.scale(parseFloat(newValue)).setCoords();
canvas.renderAll();
var width1 = oImg.width;
var westca = oImg.top;
var westcfa = oImg.left;
var westa = oImg.aCoords.tl.x;
var west1a = oImg.aCoords.tl.y;
var easta = oImg.aCoords.tr.x;
var east1a = oImg.aCoords.tr.y;
var westaa = oImg.aCoords.bl.x;
var west1aa = oImg.aCoords.bl.y;
var eastaa = oImg.aCoords.br.x;
var east1aa = oImg.aCoords.br.y;
var matrix = oImg.calcTransformMatrix();
var num0 = westca / 10;
var num1 = westcfa / 10;
var num2 = (westca / 10);
var num3 = (westcfa / 10) + matrix[0];
var num4 = (westca / 10) + matrix[0];
var num5 =  westcfa / 10;
var num6 = (westca / 10) + matrix[0];
var num7 = (westcfa / 10) + matrix[0];
var withoutLeading0 = +num0;
var withoutLeading1 = +num1;
var withoutLeading2 = +num2;
var withoutLeading3 = +num3;
var withoutLeading4 = +num4;
var withoutLeading5 = +num5;
var withoutLeading6 = +num6;
var withoutLeading7 = +num7;

//----------------------------------

var numtimes0 = withoutLeading0 * 10;
var numtimes1 = withoutLeading1 * 10;
var numtimes2 = withoutLeading2 * 10;
var numtimes3 = withoutLeading3 * 10;
var numtimes4 = withoutLeading4 * 10;
var numtimes5 = withoutLeading5 * 10;
var numtimes6 = withoutLeading6 * 10;
var numtimes7 = withoutLeading7 * 10;

//----------------------------------


document.getElementById("container3").innerHTML = 
'top left (x) '+withoutLeading0+
'<br />top left (y) '+withoutLeading1+
'<br />top right (x) '+withoutLeading2+
'<br />top right (y) '+withoutLeading3+
'<br />bottom left (x) '+withoutLeading4+
'<br />bottom left (y) '+withoutLeading5+
'<br />bottom right (x) '+withoutLeading6+
'<br />bottom right (y) '+withoutLeading7;


document.getElementById("result123b").value = (oImg.scaleX);
document.getElementById("result123c").value = (oImg.scaleY);

if (oImg.top < 0 || oImg.left < 0 || withoutLeading6 > 100 || withoutLeading7 > 100) {
// Do Something
document.getElementById("container4").innerHTML = 'you are out of bounds';
}else{
document.getElementById("container4").innerHTML = '&nbsp;';
}



document.getElementById("container5").innerHTML = '&nbsp;';
rectData.forEach((rectData, index) => {
// code

var rect1a = rectData[2]+rectData[1];
var rect1b = rectData[3]+rectData[0];
var rect1c = rectData[2]+rectData[0];
var rect1d = rect1c+rectData[1];
var rect1e = 1000 - rectData[2];
var rect1e = 1000 - rectData[2];
console.log("rectData"+[index]);
let pX = rectData[0];
let pY = rectData[1];

let getArea = pY * pX;
console.log('getArea = '+getArea);
console.log(rectData[3], rectData[2], rectData[3]+rectData[0], rectData[1]+rectData[2]);
console.log(withoutLeading1 * 10, withoutLeading0 * 10, withoutLeading7 * 10, withoutLeading6 * 10);

if (withoutLeading7 * 10 < rectData[3] || rectData[3]+rectData[0] < withoutLeading1 * 10 ||
withoutLeading6 * 10 < rectData[2] || rectData[1]+rectData[2] < withoutLeading0 * 10)
{var recDataArea = false; 
console.log('false' + recDataArea);

canvas.getObjects().forEach(function(o) {
if(o.id == "rectData"+[index]) {
//    canvas.setActiveObject(o);
console.log(o.id)
o.set({
opacity: 0,
stroke : 'black',
strokeWidth : 0,
});
canvas.renderAll();
}

});


}
else{
var recDataArea = true;
console.log('true' + recDataArea);

canvas.getObjects().forEach(function(o) {
if(o.id == "rectData"+[index]) {
//    canvas.setActiveObject(o);
console.log(o.id)
o.set({
opacity: 0.5,
stroke : 'black',
strokeWidth : 0,
});
canvas.renderAll();
}

});

} 

if(recDataArea == true){
let x1a = Math.max(rectData[3], withoutLeading1 * 10)
let x2a = Math.min(rectData[3]+rectData[0], withoutLeading7 * 10)
let y1a = Math.max(rectData[2], withoutLeading0 * 10)
let y2a = Math.min(rectData[1]+rectData[2], withoutLeading6 * 10)

let pXa = Math.abs(x2a - x1a)
let pYa = Math.abs(y2a - y1a)

console.log(pXa * pYa);
console.log(a1a);
var recDataArea1a = pXa * pYa;
};

if(recDataArea1a > 1){
a1a = a1a + 1;
console.log(a1a);
}else{
}

if(a1a > 0){
document.getElementById("container5").innerHTML = 
'you are not allowed to put your logo here.';

canvas.getObjects().forEach(function(o) {
if(o.id == "rectData"+[index]) {
//    canvas.setActiveObject(o);
console.log(o.id)
o.set({
opacity: 0.5,
stroke : 'black',
strokeWidth : 5,
});
canvas.renderAll();
}

})

}
else{
document.getElementById("container5").innerHTML = 
'&nbsp;';
}

});
function updateControls() {
}
canvas.observe("object:scaling", function (e) {
updateControls();


});
});
});
});

$( document ).ready(function() {
function roundUpNearest10(num) {
return Math.round(num / 10) * 10;
};
var childClicked = false;
$("#adGrid").children().click(function(e) {
console.log('in element');
childClicked = true;
});
$("#adGrid").click(function(e){
if(!childClicked) {
console.log('in background');
var cox = roundUpNearest10(e.offsetX);
var coy = roundUpNearest10(e.offsetY);
e.preventDefault();
e.stopPropagation();
console.log(cox+" "+coy);
//$("#adGrid").css('z-index', -10);
var obj = canvas.getActiveObject();
obj.set({
left: cox,
top: coy,  
});        
obj.setCoords();
canvas.renderAll();
var adgrid1 = document.getElementById("adGrid");
adgrid1.classList.remove("zindexplus");
adgrid1.classList.add('zindexsub');
}

childClicked = false;
});
});

canvas.selection = false;

