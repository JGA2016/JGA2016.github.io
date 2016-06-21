var width = 2000;
var height = 600;
var step = 100;

var svg = d3.select("svg")

letter_J = [[1,5],[3,5],[5,5],
			[4,5],
			[3,5],
	    [1,2],      [5,2],
		  [1,3]];

function draw_node(node) {
    svg.append("circle")
	.attr("r", 20)
	.attr("cx", node[0]).attr("cy", node[1])
	.attr("class", "node")
}

function draw_edge(source, target) {
    svg.append("line")
	.attr("x1", source[0]).attr("y1", source[1])
	.attr("x2", target[0]).attr("y2", target[1])
	.attr("class", "link")
}

for (var i = 0; i < letter_J.length - 1; i++) {
    draw_edge(letter_J[i], letter_J[i+1]);
    draw_node(letter_J[i]);
    draw_node(letter_J[i+1]);
}
