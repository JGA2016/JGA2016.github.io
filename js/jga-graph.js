function scale(scaling, translateX, translateY, letter) {
    return letter.map(function(node) {
	return [scaling * node[0] + translateX, scaling * node[1] + translateY]
    })
}

var svg = d3.select("svg")

function drawNode(node) {
    svg.append("circle")
	.attr("r", 18)
	.attr("cx", node[0]).attr("cy", node[1])
	.attr("class", "node")
}

function drawEdge(source, target) {
    svg.append("line")
	.attr("x1", source[0]).attr("y1", source[1])
	.attr("x2", target[0]).attr("y2", target[1])
	.attr("class", "link")
}

var scaling = 100;

var letterJ = scale(scaling, 100, 100, [[0,0],[2,0],[4,0],[4,2],[4,4],[2,5],[0,4]]);

var letterG = scale(scaling, 100 + 600, 100, [[2,0],[0,2.5],[2,5],[4,3],[2,2.5]]);

var petersenOuterCycle = scale(scaling, 100 + 600 + 600, 100,
			       [[2,0],[3.5,2],[4,5],[0,5],[0.5,2],[2,0]]);
var petersenInnerStar = scale(scaling, 100 + 600 + 600, 100, 
			[[2,1.5],[2.15,4],[1.5,2.5],[2.5,2.5],[1.65,4],[2,1.5]]);
var petersenConnectors = scale(scaling, 100 + 600 + 600, 100,
			 [[2,0],[2,1.5],
			  [3.5,2],[2.5,2.5],
			  [4,5],[2.15,4],
			  [0,5],[1.65,4],
			  [0.5,2],[1.5,2.5]]);
var petersenNodes = scale(scaling, 100 + 600 + 600, 100,
			  [[2,0],[3.5,2],[4,5],[0,5],[0.5,2],
			   [2,1.5],[2.15,4],[1.5,2.5],[2.5,2.5],[1.65,4]]);

console.log(petersenOuterCycle, petersenInnerStar, petersenConnectors)

for (var i = 0; i < letterJ.length - 1; i++) {
    drawEdge(letterJ[i], letterJ[i+1]);
    drawNode(letterJ[i]);
    drawNode(letterJ[i+1]);
}

for (var i = 0; i < letterG.length - 1; i++) {
    drawEdge(letterG[i], letterG[i+1]);
    drawNode(letterG[i]);
    drawNode(letterG[i+1]);
}

for (var i = 0; i < petersenOuterCycle.length - 1; i++) {
    drawEdge(petersenOuterCycle[i], petersenOuterCycle[i+1])
}
for (var i = 0; i < petersenInnerStar.length - 1; i++) {
    drawEdge(petersenInnerStar[i], petersenInnerStar[i+1])
}
for (var i = 0; i < petersenConnectors.length - 1; i = i + 2) {
    drawEdge(petersenConnectors[i], petersenConnectors[i+1])
}
for (var i = 0; i < petersenNodes.length; i++) {
    drawNode(petersenNodes[i])
}

