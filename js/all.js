

var data; // a global
//
//var formatter = d3.time.format("%Y");
//var sourceURL = "http://kansanmuisti.fi/api/v1/plenary_vote/10170/?votes=1";
var sourceURL = "/testdata/votes.json";

console.log('starting');

d3.json(sourceURL, function(datas) {
  console.log(datas);
});

//var data = [4, 8, 15, 16, 23, 42];

function visualizeit(data) {
  console.log("visualizing", data);
  var vis = d3.select(".chart")
    .selectAll("div")
      .data(data.votes)
      .enter().append("div")
      .attr("class", function(d) { return d.vote; })
      .attr("title", function(d) { return d.member.name; })
      .attr("data-toggle", "tooltip");
  $('[data-toggle="tooltip"]').tooltip()
}

//formatter(parseDate(d.member.birth_date))
//d.member.name
//.text(function(d) { return d.member.name; })
//.style("width", function(d) { return formatter(new Date(d.member.birth_date)) / 4 + "px"; })
