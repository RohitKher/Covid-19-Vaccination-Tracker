var svgProgress = d3.select("#svgprogressbar");

                    svgProgress.append("rect")
                             .attr("x", 0)
                             .attr("y", 0)
                             .attr("height", 1000)
                             .attr("width", 1800)
                             .style("stroke", "black")
                             .style("fill", "none")
                             .style("stroke-width", 0.25);

                             var fp = d3.format(".1f");
                             var fp2 = d3.format(".2f");

      for (let i = 1,j=140,k=2.6; i < 15; i++,j=j+60,k=k-0.2) {

      svgProgress.append('line').style("stroke", "black").style("stroke-width", 0.25).attr("x1", 100).attr("y1",j).attr("x2", 1700).attr("y2",j);
         svgProgress.append("text").attr("x", 65).attr("y", j).text(fp(k)+"M").style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
      }



                    d3.csv("https://raw.githubusercontent.com/RohitKher/datafiles/main/VaccineProgress1.csv", function(csv){
                         console.log(csv)
                              var month={};
                              var Admns={};
                              var did={};
                              var dsd={};
                              var date={};
                             csv.forEach(function(d,i) {
                                  month[i]=d.Month;
                                 Admns[i] = d.TDAD/1000000;
                                 did[i] = d.DID/1000000;
                                 dsd[i] = d.DSD/1000000;
                                 date[i]=d.Date;
                            })
                  svgProgress.append("text").attr("x", 80).attr("y", 50).text("Covid-19 Vaccine Progress Graph").style("font-family", "Prompt").style("font-weight","500").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")
                  svgProgress.append("text").attr("x", 500).attr("y", 960).text("Days").style("font-family", "Prompt").style("font-weight","500").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")

                        for (let i = 0,j=0; i < 78; i++,j=j+15+5) {

                          svgProgress.append("text").attr("x", 80).attr("y", 50).text("").style("font-family", "Prompt").style("font-weight","700").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")
                          svgProgress.append("text").attr("x", 124+j).attr("y", 930).text(i).style("font-family", "Prompt").style("font-weight","200").style("font-size", "10px").style("fill", "#808080").attr("alignment-baseline","middle")

                          var tooltip = d3.select("body")
                           .append("div")
                           .attr('id', 'tooltipP')
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
                            .attr('id', 'tooltipP2')
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
                             .attr('id', 'tooltipP3')
                             .style("font-size", "25px")
                             .style("position","absolute")
                             .style("z-index", "10")
                             .style("visibility", "hidden")
                             .style("background", "#ffffe6")
                             .style("font-family", "Prompt")
                             .style("font-weight","200")
                             .style("stroke","black")




                                svgProgress.append("rect")
                                            .attr("x",120+j)
                                            .attr("y",(2.4-fp2(Admns[i]))*300+200)
                                            .attr("height",fp2(Admns[i])*300)
                                            .attr("width", 15)
                                            .style("stroke", "black")
                                            .style("fill", function(){
                                                             if(month[i]==12)
                                                                return "#e62e00";
                                                              if(month[i]==1)
                                                                return "#ff8000";
                                                              if(month[i]==2)
                                                                 return "#0066ff";

                                            })
                                            .style("stroke-width", 0)
                                            .on("mouseover",function(){
                                              d3.select(this).transition()
                                                     .duration(100)
                                                    .attr('opacity', '1')
                                                    .style("fill","#2BF0CD")
                                                    d3.select("#tooltipP").transition().text("2nd Dose="+dsd[i]+"M")
                                                                                  .style("left", (d3.event.pageX) + "px")
                                                                                   .style("top", (d3.event.pageY) + "px");
                                                   d3.select("#tooltipP2").transition().text("Total Dose="+Admns[i]+"M")
                                                                                    .style("left", (d3.event.pageX) + "px")
                                                                                    .style("top", (d3.event.pageY)+28 + "px");
                                                  d3.select("#tooltipP3").transition().text("Date="+date[i])
                                                                                    .style("left", (d3.event.pageX) + "px")
                                                                                   .style("top", (d3.event.pageY)+28*2 + "px");
                                                                                   d3.select("#tooltipP").style("visibility", "visible");
                                                                                   d3.select("#tooltipP2").style("visibility", "visible");
                                                                                   d3.select("#tooltipP3").style("visibility", "visible");
                                                                                   return tooltip.style("visibility", "visible");

                                              })
                                             .on("mouseout",function(){
                                                d3.select(this).transition()
                                                       .duration(100)
                                                      .attr('opacity', '1')
                                                      .style("fill", function(){
                                                                       if(month[i]==12)
                                                                          return "#e62e00";
                                                                        if(month[i]==1)
                                                                          return "#ff8000";
                                                                        if(month[i]==2)
                                                                           return "#0066ff";

                                                      })
                                                      d3.select("#tooltipP").style("visibility", "hidden");
                                                      d3.select("#tooltipP2").style("visibility", "hidden");
                                                      d3.select("#tooltipP3").style("visibility", "hidden");
                                                      return tooltip.style("visibility", "hidden");

                                                });

                                                svgProgress.append("rect")
                                                            .attr("x",120+j)
                                                            .attr("y",(2.4-fp2(did[i]))*300+200)
                                                            .attr("height",fp2(did[i])*300)
                                                            .attr("width", 15)
                                                            .style("stroke", "black")
                                                            .style("stroke-width", 0)
                                                            .style("fill", function(){
                                                                             if(month[i]==12)
                                                                                return "#ffc2b3";
                                                                              if(month[i]==1)
                                                                                return "#ffbf80";
                                                                              if(month[i]==2)
                                                                                 return "#80b3ff";

                                                            })
                                                            .on("mouseover",function(){
                                                              d3.select(this).transition()
                                                                     .duration(100)
                                                                    .attr('opacity', '1')
                                                                    .style("fill","#2BF0CD")
                                                                    d3.select("#tooltipP").transition().text("1st Dose="+did[i]+"M")
                                                                                                  .style("left", (d3.event.pageX) + "px")
                                                                                                   .style("top", (d3.event.pageY) + "px");
                                                                  d3.select("#tooltipP2").transition().text("Total Dose="+Admns[i]+"M")
                                                                                                    .style("left", (d3.event.pageX) + "px")
                                                                                                    .style("top", (d3.event.pageY)+28 + "px");

                                                                  d3.select("#tooltipP3").transition().text("Date="+date[i])
                                                                                               .style("left", (d3.event.pageX) + "px")
                                                                                              .style("top", (d3.event.pageY)+28*2 + "px");
                                                                                              d3.select("#tooltipP").style("visibility", "visible");
                                                                                              d3.select("#tooltipP2").style("visibility", "visible");
                                                                                              d3.select("#tooltipP3").style("visibility", "visible");
                                                                 return tooltip.style("visibility", "visible");
                                                                })
                                                            .on("mouseout",function(){
                                                                  d3.select(this).transition()
                                                                         .duration(100)
                                                                        .attr('opacity', '1')
                                                                        .style("fill", function(){
                                                                                         if(month[i]==12)
                                                                                            return "#ffc2b3";
                                                                                          if(month[i]==1)
                                                                                            return "#ffbf80";
                                                                                          if(month[i]==2)
                                                                                             return "#80b3ff";

                                                                        })
                                                                        d3.select("#tooltipP").style("visibility", "hidden");
                                                                        d3.select("#tooltipP2").style("visibility", "hidden");
                                                                        d3.select("#tooltipP3").style("visibility", "hidden");


                                                                    })

                          }

});
