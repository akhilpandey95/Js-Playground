d3.select("body").append("svg").text("Mark one test two");

var set_margin = {
	set_top : 40,
	set_left : 40 ,
	set_bottom : 40,
	set_top : 40
};

var set_height = 600 - set_margin.set_top - set_margin.set_bottom;
var set_width = 1000 - set_margin.set_left - set_margin.set_right;
var set_x = d3.scale.linear().range([0,set_width]);
var set_y = d3.scale.linear().range([set_height,0]);
var set_xaxis = d3.svg.axis().scale(set_x_).orient('bottom');
var set_yaxis = d3.svg.axis().scale(set_y).orient('left');
var set_color = d3.scale.category10();

var set_svg = d3.select("body").append("svg")
				.attr("width",set_width)
				.attr("height",set_height)\
			.append("svg")
				.attr("transform","translate(" + set_margin.set_left
									+	","    + set_margin.set_top + ")");


// Use functions to call the Data extracted dynamically
	
function validate() {
	 
}									
	d3.json("results.json",function(err,data){
		if (err) throw err;
		validate();
	});