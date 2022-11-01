var svg = d3.select("#svgUSAmap");

svg.append("rect")
         .attr("x", 0)
         .attr("y", 0)
         .attr("height", 500)
         .attr("width", 900)
         .style("stroke", "black")
         .style("fill", "#e6f7ff")
         .style("stroke-width", 0.25);

var projection = d3.geoAlbersUsa()
  .scale([1000]);

var path = d3.geoPath()
  .projection(projection);

var color = ['red','#d9ffb3','#a6ff4d','#80ff00','#4d9900','#264d00'];


d3.json("https://gist.githubusercontent.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/us.json", function(error, us) {
  if (error) throw error;

             d3.tsv("https://gist.githubusercontent.com/mbostock/4090846/raw/07e73f3c2d21558489604a0bc434b3a5cf41a867/us-state-names.tsv", function(tsv){
                 console.log(tsv)
                 var names = {};
                   tsv.forEach(function(d,i){
                    names[d.id] = d.name;
                  })

                  d3.csv("https://raw.githubusercontent.com/RohitKher/datafiles/main/finalpop.csv", function(csv){
                         console.log(csv)
                          var Per = {};
                          var AdmUS={};
                           csv.forEach(function(d,i){
                                 AdmUS[d.id]= d.Administered;
                                Per[d.id] =d.Administered*100/d.Popu;
                                Per[36]=16.82;
                           })

   var f = d3.format(".2f");
   var f1 = d3.format(".0f");
   var tooltip = d3.select("body")
    .append("div")
    .attr('id', 'tooltipUS')
    .style("font-size", "25px")
    .style("position","absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .style("background", "#ffffe6")
    .style("font-family", "Prompt")
    .style("font-weight","200")
    .style("stroke","black")

    var tooltip = d3.select("body")
     .append("div")
     .attr('id', 'tooltipUS2')
     .style("font-size", "25px")
     .style("position","absolute")
     .style("z-index", "10")
     .style("visibility", "hidden")
     .style("background", "#ffffe6")
     .style("font-weight","200")
     .style("font-family", "Prompt")
     .style("stroke","black")


     var tooltip = d3.select("body")
      .append("div")
      .attr('id', 'tooltipUS3')
      .style("font-size", "25px")
      .style("position","absolute")
      .style("z-index", "10")
      .style("visibility", "hidden")
      .style("background", "#ffffe6")
      .style("font-weight","200")
      .style("font-family", "Prompt")
      .style("stroke","black")

  svg.append("g")
      .attr("class", "states")
    .selectAll("path")
    .data(topojson.feature(us, us.objects.states).features)
    .enter().append("path")
      .attr("d", path)
      .attr("fill",function(d){
                     v=Per[d.id]/20;
                     if(v<=1)
                       t=1;
                        if(v>1 && v<=2)
                           t=2;
                           if(v>2 && v<=3)
                              t=3
                              if(v>3 && v<=4)
                              t=4;
                               if(v>4 && v<=5)
                               t=5;
                     return color[t];
        })
      .on("mouseover",function(d){
        d3.select(this).transition()
               .duration(100)
              .attr('opacity', '1')
              d3.select(this).style("fill","#2BF0CD")
              d3.select(this).style("cursor", "pointer");

              d3.select("#tooltipUS").transition().text("State-"+""+names[d.id])
                                            .style("left", (d3.event.pageX) + "px")
                                             .style("top", (d3.event.pageY) + "px");
             d3.select("#tooltipUS2").transition().text(f(Per[d.id])+"% Vaccinated")
                                              .style("left", (d3.event.pageX) + "px")
                                              .style("top", (d3.event.pageY)+33 + "px");
            d3.select("#tooltipUS3").transition().text(AdmUS[d.id]+" Vaccinated")
                                              .style("left", (d3.event.pageX) + "px")
                                             .style("top", (d3.event.pageY)+33*2 + "px");
                                             d3.select("#tooltipUS").style("visibility", "visible");
                                             d3.select("#tooltipUS2").style("visibility", "visible");
                                             d3.select("#tooltipUS3").style("visibility", "visible");

        })
       .on("mouseout",function(){
          d3.select(this).transition()
                 .duration(100)

                .attr('opacity', '1')
                d3.select(this).style("fill",function(d){
                               v=Per[d.id]/20;
                               if(v<=1)
                                 t=1;
                                  if(v>1 && v<=2)
                                     t=2;
                                     if(v>2 && v<=3)
                                        t=3
                                        if(v>3 && v<=4)
                                        t=4;
                                         if(v>4 && v<=5)
                                         t=5;
                               return color[t];
                  })
                d3.select(this).style("cursor", "default");

                d3.select("#tooltipUS").style("visibility", "hidden");
                d3.select("#tooltipUS2").style("visibility", "hidden");
                d3.select("#tooltipUS3").style("visibility", "hidden");

                return tooltip.style("visibility", "hidden");

          })
        .on("click",function loadpage(d){
           URL='State.html'
           window.location = URL + "?origin=" + d.id;
        })

          svg.append("g")
              .selectAll("text")
              .data(topojson.feature(us, us.objects.states).features)
              .join("path")
                .attr("d", path)

})})});
