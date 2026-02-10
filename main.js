function calculateArea(radius) {
var radius = document.getElementById("radius").value;
var area = Math.PI * (radius ** 2);
document.getElementById("area").value = area;
}