var width = 200;
var height = 60;
var step = 10;

var lines = d3.select("svg")

for (var x = 0; x <= width; x += step) {
    lines.append("line")
	.attr("x1", x).attr("y1", 0)
	.attr("x2", x).attr("y2", height)
}
for (var y = 0; y <= height; y += step) {
    lines.append("line")
	.attr("x1", 0).attr("y1", y)
	.attr("x2", width).attr("y2", y)
}
