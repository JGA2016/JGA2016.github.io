var width = 2000;
var height = 600;
var step = 100;

var lines = d3.select("svg")

for (var x = 0; x <= width; x += step) {
    lines.append("line")
	.attr("x1", x).attr("y1", 0)
	.attr("x2", x).attr("y2", height)
	.attr("class", "link")
}
for (var y = 0; y <= height; y += step) {
    lines.append("line")
	.attr("x1", 0).attr("y1", y)
	.attr("x2", width).attr("y2", y)
	.attr("class", "link")
}

for (var x = 0; x <= width; x += step) {
    nodes.append("circle")
	.attr("r", 20)
	.attr("cx", x).attr("cy", 0)
}
for (var y = 0; y <= height; y += step) {
    nodes.append("circle")
	.attr("r", 20)
	.attr("cx", 0).attr("cy", y)
}
