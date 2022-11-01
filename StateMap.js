var svgs = d3.select("#svgUSAState");


svgs.append("rect")
         .attr("x", 0)
         .attr("y", 0)
         .attr("height", 500)
         .attr("width", 900)
         .style("stroke", "black")
         .style("fill", "#e6f7ff")
         .style("stroke-width", 0.25);

var projection = d3.geoAlbersUsa()


var path = d3.geoPath()
  .projection(projection);

  var stmapft = d3.format(".2f");



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
                          var data= {};
                           csv.forEach(function(d,i){
                                Per[d.id] =d.Administered*100/d.Popu;
                                Per[36]=16.82;
                                data[d.id]=d.Data;
                           })
                           data[48]="NA";
                           data[49]="A";
                           data[50]="NA";

                           d3.csv("https://raw.githubusercontent.com/RohitKher/datafiles/main/VaccineCounty.csv", function(csv){
                                  console.log(csv)
                                   var StPer = {};
                                   var cname={};
                                   var cadm={};
                                    csv.forEach(function(d,i){
                                         StPer[d.id] =d.Per;
                                         cname[d.id]=d.county;
                                         cadm[d.id]=d.Administered;

                                    })


                           var sts = topojson.feature(us, us.objects.states),
                                st = sts.features.filter(function(d) { return d.id == State_id; })[0];

                                  projection
                                     .scale(1)
                                     .translate([0, 0]);



                             var b = path.bounds(st),
                                 s = .90 / Math.max((b[1][0] - b[0][0]) / 900, (b[1][1] - b[0][1]) / 500),
                                 t = [(900 - s * (b[1][0] + b[0][0])) / 2, (500 - s * (b[1][1] + b[0][1])) / 2];

                             projection
                                 .scale(s)
                                 .translate(t);



   var tooltip = d3.select("body")
    .append("div")
    .attr('id', 'tooltipstate')
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
     .attr('id', 'tooltipstate1')
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
      .attr('id', 'tooltipstate2')
      .style("font-size", "25px")
      .style("position","absolute")
      .style("z-index", "10")
      .style("visibility", "hidden")
      .style("background", "#ffffe6")
      .style("font-family", "Prompt")
      .style("font-weight","200")
      .style("stroke","black")

  svgs.append("g")
      .attr("class", "states")
      .selectAll("path")
    .data(topojson.feature(us, us.objects.states).features.filter(function(d) { return d.id == State_id; }))
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

      svgs.append("path")
            .datum(st)
            .attr("class", "outline")
            .attr("d", path)
            .attr('id', 'land');

         svgs.append("clipPath")
            .attr("id", "clip-land")
            .append("use")
            .attr("xlink:href", "#land");



             if(data[State_id]=="A"){
      svgs.append("g")
          .attr("class", "counties")
          .selectAll("path")
        .data(topojson.feature(us, us.objects.counties).features)
         .enter().append("path")
          .attr("d", path)
          .attr("fill",function(d){
                         v=StPer[d.id]*100/20;
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
          .attr('county-id', function(d){
                   return d.id
                }).attr("clip-path", "url(#clip-land)")
                .on("mouseover",function(d){
                  d3.select(this).transition()
                         .duration(100)
                        .attr('opacity', '1')
                        d3.select(this).style("fill","#2BF0CD")

                        d3.select("#tooltipstate").transition().text("County-"+cname[d.id])
                                                      .style("left", (d3.event.pageX) + "px")
                                                       .style("top", (d3.event.pageY) + "px");
                                                       d3.select("#tooltipstate1").transition().text(stmapft(StPer[d.id]*100)+"%"+" vaccinated")
                                                                                     .style("left", (d3.event.pageX) + "px")
                                                                                      .style("top", (d3.event.pageY)+33 + "px");
                                                                                      d3.select("#tooltipstate2").transition().text(cadm[d.id]+" vaccinated")
                                                                                                                    .style("left", (d3.event.pageX) + "px")
                                                                                                                     .style("top", (d3.event.pageY)+33*2 + "px");
                                                                                                                     d3.select("#tooltipstate").style("visibility", "visible");
                                                                                                                     d3.select("#tooltipstate1").style("visibility", "visible");
                                                                                                                     d3.select("#tooltipstate2").style("visibility", "visible");
                           return tooltip.style("visibility", "visible");

                  })
                 .on("mouseout",function(){
                    d3.select(this).transition()
                           .duration(100)
                          .attr('opacity', '1')
                          d3.select(this).style("fill",function(d){
                                            v=StPer[d.id]*100/20;
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

                          d3.select("#tooltipstate").style("visibility", "hidden");
                          d3.select("#tooltipstate1").style("visibility", "hidden");
                          d3.select("#tooltipstate2").style("visibility", "hidden");

                          return tooltip.style("visibility", "hidden");

                    })

                  }

                  else if(data[State_id]=="NA"){
               svgs.append("g")
                   .attr("class", "counties")
                   .selectAll("path")
                 .data(topojson.feature(us, us.objects.counties).features)
                  .enter().append("path")
                   .attr("d", path)
                   .attr("fill",function(d){
                                  v=StPer[d.id]*100/20;
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
                   .attr('county-id', function(d){
                            return d.id;
                         }).attr("clip-path", "url(#clip-land)")
                         .on("mouseover",function(d){
                           d3.select(this).transition()
                                  .duration(100)
                                 .attr('opacity', '1')
                                 d3.select(this).style("fill","#2BF0CD")

                                 d3.select("#tooltipstate").transition().text("County-"+cname[d.id])
                                                               .style("left", (d3.event.pageX) + "px")
                                                                .style("top", (d3.event.pageY) + "px");
                                                                d3.select("#tooltipstate1").transition().text("County level data")
                                                                                              .style("left", (d3.event.pageX) + "px")
                                                                                               .style("top", (d3.event.pageY)+33 + "px");
                                                                                               d3.select("#tooltipstate2").transition().text("not available")
                                                                                                                             .style("left", (d3.event.pageX) + "px")
                                                                                                                              .style("top", (d3.event.pageY)+33*2 + "px");
                                                                                                                              d3.select("#tooltipstate").style("visibility", "visible");
                                                                                                                              d3.select("#tooltipstate1").style("visibility", "visible");
                                                                                                                              d3.select("#tooltipstate2").style("visibility", "visible");
                                    return tooltip.style("visibility", "visible");

                           })
                          .on("mouseout",function(){
                             d3.select(this).transition()
                                    .duration(100)
                                   .attr('opacity', '1')
                                d3.select(this).style("fill",function(d){
                                                  v=StPer[d.id]*100/20;
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

                                   d3.select("#tooltipstate").style("visibility", "hidden");
                                   d3.select("#tooltipstate1").style("visibility", "hidden");
                                   d3.select("#tooltipstate2").style("visibility", "hidden");

                                   return tooltip.style("visibility", "hidden");

                             })

                           }




})})})});
