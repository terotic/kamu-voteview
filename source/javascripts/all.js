var data; // a global

var formatter = d3.time.format("%Y");
//var sourceURL = "http://kansanmuisti.fi/api/v1/plenary_vote/10170/?votes=1";
var sourceURL = "http://0.0.0.0:4567/testdata/votes.json";

d3.json(sourceURL, function(error, json) {
  if (error) return console.warn(error);
  data = json;
  visualizeit();
});

//var data = [4, 8, 15, 16, 23, 42];

function visualizeit() {
  d3.select(".chart")
    .selectAll("div")
      .data(data.votes)
    .enter().append("div")
      .attr("class", function(d) { return d.vote; })
      .attr("title", function(d) { return d.member.name; });
}

//formatter(parseDate(d.member.birth_date))
//d.member.name
//.text(function(d) { return d.member.name; })
//.style("width", function(d) { return formatter(new Date(d.member.birth_date)) / 4 + "px"; })