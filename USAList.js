var svg2 = d3.select("#svglist");

svg2.append("rect")
         .attr("x", 0)
         .attr("y", 0)
         .attr("height", 2100)
         .attr("width", 1800)
         .style("stroke", "#808080")
         .style("fill", "none")
         .style("stroke-width", 0.5);

         d3.csv("https://raw.githubusercontent.com/RohitKher/datafiles/main/finalpopsorted.csv", function(csv){
                console.log(csv)
                var name1 = {};
                var nametemp = {};
                var deliv = {};
                var Admins = {};
                var Percent = {};
                var tempid = {};
                  csv.forEach(function(d,i){
                   name1[d.id] = d.State;
                   nametemp[i]=d.State;
                   deliv[i]=d.Delivered;
                   Admins[i]=d.Administered;
                   Percent[i]=d.Administered*100/d.Popu;
                   Percent[51]=16.82;
                   tempid[i]=d.id;



                 })
                 var f = d3.format(".2f");

               for (let i = 0,j=143-38; i <52 ; i++,j=j+38.8) {
                 svg2.append("rect")
                          .attr("x", 1)
                          .attr("y", j+15)
                          .attr("height", 38)
                          .attr("width", 1800-2)
                          .attr("id","rec")
                          .style("stroke", "#808080")
                          .style("fill", "white")
                          .style("stroke-width", 0)
                          .on("click",function loadpage(d){
                             URL='State.html'
                             window.location = URL + "?origin=" + tempid[i];
                          })

                          .on("mouseover",function(){
                             d3.select(this).transition()
                                    .duration(100)
                                    .style("fill", "#2BF0CD")
                                    .style("opacity",1)
                                     d3.select(this).style("cursor", "pointer");



                                 })
                                 .on("mouseout",function(){
                                    d3.select(this).transition()
                                           .duration(100)
                                             .style("fill", "white")
                                             d3.select(this).style("cursor", "default");



                                        })

                                      }

                 svg2.append("text").attr("x", 150).attr("y", 60).text("State").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")
                 svg2.append("text").attr("x", 550).attr("y", 40).text("Number of Doses").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")
                 svg2.append("text").attr("x", 600).attr("y", 80).text("Delivered").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")

                 svg2.append("text").attr("x", 1010).attr("y", 40).text("Number of Doses").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")
                 svg2.append("text").attr("x", 1040).attr("y", 80).text("Administered").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")

                 svg2.append("text").attr("x", 1450).attr("y", 40).text("Number of People").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")
                 svg2.append("text").attr("x", 1490).attr("y", 80).text("Vaccinated").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")


                 svg2.append('line').style("stroke", "#808080").style("stroke-width", 0.25).attr("x1", 00).attr("y1", 120).attr("x2", 1800).attr("y2", 120);
                 svg2.append('line').style("stroke", "#808080").style("stroke-width", 0.25).attr("x1", 450).attr("y1", 0).attr("x2", 450).attr("y2", 2100);
                 svg2.append('line').style("stroke", "#808080").style("stroke-width", 0.25).attr("x1", 900).attr("y1", 0).attr("x2", 900).attr("y2", 2100);
                 svg2.append('line').style("stroke", "#808080").style("stroke-width", 0.25).attr("x1", 1350).attr("y1", 0).attr("x2", 1350).attr("y2", 2100);



                     for (let i = 0,j=143; i <51 ; i++,j=j+38.8) {
               svg2.append("text").attr("x", 130).attr("y", j).text(nametemp[i]).style("font-family", "Prompt").style("font-weight","400").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")
               .on("click",function loadpage(d){
                  URL='State.html'
                  window.location = URL + "?origin=" + tempid[i];
               })
                  .on("mouseover",function(){
                  d3.select(this).transition()
                         .duration(100)
                          d3.select(this).style("cursor", "pointer");
                      })
                      .on("mouseout",function(){
                         d3.select(this).transition()
                                .duration(100)
                                  d3.select(this).style("cursor", "default");
                        })
               svg2.append("text").attr("x", 600).attr("y", j).text(deliv[i]).style("font-family", "Prompt").style("font-weight","400").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")
               .on("click",function loadpage(d){
                  URL='State.html'
                  window.location = URL + "?origin=" + tempid[i];
               })
                  .on("mouseover",function(){
                  d3.select(this).transition()
                         .duration(100)
                          d3.select(this).style("cursor", "pointer");
                      })
                      .on("mouseout",function(){
                         d3.select(this).transition()
                                .duration(100)
                                  d3.select(this).style("cursor", "default");
                        })
               svg2.append("text").attr("x", 1070).attr("y", j).text(Admins[i]).style("font-family", "Prompt").style("font-weight","400").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")
               .on("click",function loadpage(d){
                  URL='State.html'
                  window.location = URL + "?origin=" + tempid[i];
               })
                  .on("mouseover",function(){
                  d3.select(this).transition()
                         .duration(100)
                          d3.select(this).style("cursor", "pointer");
                      })
                      .on("mouseout",function(){
                         d3.select(this).transition()
                                .duration(100)
                                  d3.select(this).style("cursor", "default");
                        })
                svg2.append("text").attr("x", 1520).attr("y", j).text(f(Percent[i])+"%").style("font-family", "Prompt").style("font-weight","400").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")
                .on("click",function loadpage(d){
                   URL='State.html'
                   window.location = URL + "?origin=" + tempid[i];
                })
                   .on("mouseover",function(){
                   d3.select(this).transition()
                          .duration(100)
                           d3.select(this).style("cursor", "pointer");
                       })
                       .on("mouseout",function(){
                          d3.select(this).transition()
                                 .duration(100)
                                   d3.select(this).style("cursor", "default");
                         })
               svg2.append('line').style("stroke", "#808080").style("stroke-width", 0.25).attr("x1", 00).attr("y1", j+15).attr("x2", 1800).attr("y2", j+15);

                          }

                  })
