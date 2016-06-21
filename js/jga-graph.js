function scale(scaling, translateX, translateY, letter) {
    return letter.map(function(node) {
	return [scaling * node[0] + translateX, scaling * node[1] + translateY]
    })
}

var svg = d3.select("svg")

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

var letterJ = scale(100, 100, 100, [[0,0],[2,0],[4,0],[4,1.5],[4,3],[2,4],[0,3]]);
var letterG = scale(100, 100, 100, [[2,0],[0,3],[2,5],[4,4],[2,3]]);

for (var i = 0; i < letterJ.length - 1; i++) {
    drawedge(letterJ[i], letterJ[i+1]);
    drawnode(letterJ[i]);
    drawnode(letterJ[i+1]);
}

for (var i = 0; i < letterG.length - 1; i++) {
    drawedge(letterG[i], letterG[i+1]);
    drawnode(letterG[i]);
    drawnode(letterG[i+1]);
}
