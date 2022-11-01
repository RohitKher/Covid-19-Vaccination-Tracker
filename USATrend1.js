var svgTr1 = d3.select("#svgtrend1");


svgTr1.append("rect")
         .attr("x", 0)
         .attr("y", 0)
         .attr("height", 600)
         .attr("width", 1800)
         .style("stroke", "black")
         .style("fill", "none")
         .style("stroke-width", 0.25);

             var ftr2 = d3.format(".2f");


         for (let i = 1,j=160,k=60; i < 8; i++,j=j+60,k=k-10) {

         svgTr1.append('line').style("stroke", "black").style("stroke-width", 0.25).attr("x1", 100).attr("y1",j).attr("x2", 600).attr("y2",j);
            svgTr1.append("text").attr("x", 65).attr("y", j).text(k+"M").style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
         }


         d3.csv("https://raw.githubusercontent.com/RohitKher/datafiles/main/Sex.csv", function(csv){
              console.log(csv)
              var D1={};
              var D2={};
              var TMF={};
              var S={};
              var TotalSex={};
              var TotalMFPer={};
              var FD1Per={};

             csv.forEach(function(d,i) {
                  D1[i]=d.CountD1/1000000;
                   D2[i] = d.CountD2/1000000;
                    TMF[i] = d.TotalMF/1000000;
                    S[i]=d.Sex;
                    TotalMFPer[i]=d.PerMF;
                    TotalSex[i]=d.GrandT;
                        FD1Per[i]=d.CountD1/d.TotalMF;
            })
             var TotalPop={};
             TotalPop=329484123;
             var TotalSexPer=TotalSex[0]/TotalPop;


            svgTr1.append("text").attr("x", 80).attr("y", 50).text("Sex wise  Covid-19 Vaccine Distribution").style("font-family", "Prompt").style("font-weight","500").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")

              for (let i = 0,j=0; i < 2; i++,j=j+220) {

            svgTr1.append("text").attr("x", 200+j).attr("y", 550).text(S[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")
          }


            for (let i = 0,j=0; i < 2; i++,j=j+220) {
            svgTr1.append("rect")
                     .attr("x", 180+j)
                     .attr("y",(60-ftr2(TMF[i]))*6+ 159)
                     .attr("height",ftr2(TMF[i])*6)
                     .attr("width", 100)
                     .style("stroke", "black")
                     .style("fill", "#808080")
                     .style("stroke-width", 0)
                     .style("fill", function(){

                                       if(S[i]=="Female")
                                         return "#ff8000";
                                       if(S[i]=="Male")
                                          return "#0066ff";

                     });



                     var tooltip = d3.select("body")
                      .append("div")
                      .attr('id', 'tooltipTr1')
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
                       .attr('id', 'tooltipTr2')
                       .style("font-size", "25px")
                       .style("position","absolute")
                       .style("z-index", "10")
                       .style("visibility", "hidden")
                       .style("background", "#ffffe6")
                       .style("font-family", "Prompt")
                       .style("font-weight","200")
                       .style("stroke","black")

                     svgTr1.append("rect")
                              .attr("x", 180+j)
                              .attr("y",(60-ftr2(TMF[i]))*6+ 159)
                              .attr("height",ftr2(TMF[i])*6)
                              .attr("width", 100)
                              .style("stroke", "black")
                              .style("fill", "#808080")
                              .style("stroke-width", 0)
                              .style("fill", function(){

                                                if(S[i]=="Female")
                                                  return "#ff8000";
                                                if(S[i]=="Male")
                                                   return "#0066ff";

                              })
                              .on("mouseover",function(){
                                d3.select(this).transition()
                                       .duration(100)
                                      .attr('opacity', '1')
                                      .style("fill","#2BF0CD")
                                      d3.select("#tooltipTr1").transition().text("2nd Dose="+ftr2(D2[i])+"M")
                                                                    .style("left", (d3.event.pageX) + "px")
                                                                     .style("top", (d3.event.pageY) + "px");
                                    d3.select("#tooltipTr2").transition().text("Total Dose="+ftr2(TMF[i])+"M")
                                                                      .style("left", (d3.event.pageX) + "px")
                                                                      .style("top", (d3.event.pageY)+28 + "px");
                                                                      d3.select("#tooltipTr1").style("visibility", "visible");
                                                                      d3.select("#tooltipTr2").style("visibility", "visible");
                                                                      return tooltip.style("visibility", "visible");
                                    })
                                    .on("mouseout",function(){
                                      d3.select(this).transition()
                                             .duration(100)
                                            .attr('opacity', '1')
                                            .style("fill", function(){

                                                              if(S[i]=="Female")
                                                                return "#ff8000";
                                                              if(S[i]=="Male")
                                                                 return "#0066ff";

                                            })
                                            d3.select("#tooltipTr1").style("visibility", "hidden");
                                            d3.select("#tooltipTr2").style("visibility", "hidden");


                                          })

                              svgTr1.append("rect")
                                       .attr("x", 180+j)
                                       .attr("y",(60-ftr2(D1[i]))*6+ 159)
                                       .attr("height",ftr2(D1[i])*6)
                                       .attr("width", 100)
                                       .style("stroke", "black")
                                       .style("fill", "#808080")
                                       .style("stroke-width", 0)
                                       .style("fill", function(){

                                                         if(S[i]=="Female")
                                                           return "#ffbf80";
                                                         if(S[i]=="Male")
                                                            return "#80b3ff";

                                       })
                                       .on("mouseover",function(){
                                         d3.select(this).transition()
                                                .duration(100)
                                               .attr('opacity', '1')
                                               .style("fill","#2BF0CD")
                                               d3.select("#tooltipTr1").transition().text("1st Dose="+ftr2(D1[i])+"M")
                                                                             .style("left", (d3.event.pageX) + "px")
                                                                              .style("top", (d3.event.pageY) + "px");
                                             d3.select("#tooltipTr2").transition().text("Total Dose="+ftr2(TMF[i])+"M")
                                                                               .style("left", (d3.event.pageX) + "px")
                                                                               .style("top", (d3.event.pageY)+28 + "px");
                                                                               d3.select("#tooltipTr1").style("visibility", "visible");
                                                                               d3.select("#tooltipTr2").style("visibility", "visible");
                                                return tooltipTr1.style("visibility", "visible");
                                             })
                                             .on("mouseout",function(){
                                               d3.select(this).transition()
                                                      .duration(100)
                                                     .attr('opacity', '1')
                                                     .style("fill", function(){

                                                                       if(S[i]=="Female")
                                                                         return "#ffbf80";
                                                                       if(S[i]=="Male")
                                                                          return "#80b3ff";

                                                     })
                                                     d3.select("#tooltipTr1").style("visibility", "hidden");
                                                     d3.select("#tooltipTr2").style("visibility", "hidden");
                                                     return tooltipTr1.style("visibility", "hidden");

                                                   })
            }

            svgTr1.append("text").attr("x", 80).attr("y", 200).text("").style("font-family", "Prompt").style("font-weight","700").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")

            var tooltip = d3.select("body")
             .append("div")
             .attr('id', 'tooltipTr1')
             .style("font-size", "25px")
             .style("position","absolute")
             .style("z-index", "10")
             .style("visibility", "hidden")
             .style("background", "#ffffe6")
             .style("font-width","700")
             .style("stroke","black")

             var tooltip = d3.select("body")
              .append("div")
              .attr('id', 'tooltipTr2')
              .style("font-size", "25px")
              .style("position","absolute")
              .style("z-index", "10")
              .style("visibility", "hidden")
              .style("background", "#ffffe6")
              .style("font-width","700")
              .style("stroke","black")

              var myimage = svgTr1.append('image')
                               .attr('xlink:href', 'img1.png')
                              .attr('width', 1000)
                              .attr('height', 150)
                              .attr("x", 765)
                              .attr("y",100)

                     svgTr1.append("rect")
                              .attr("x", 1200)
                              .attr("y",150)
                              .attr("height",50)
                              .attr("width", 600*TotalSexPer)
                              .style("stroke", "black")
                              .style("fill", "#b3ffda")
                              .style("stroke-width", 0)
                              .on("mouseover",function(){
                                d3.select(this).transition()
                                       .duration(100)
                                      .attr('opacity', '1')
                                      .style("fill","#2BF0CD")
                                      d3.select("#tooltipTr1").transition().text("Percent of Population" )
                                                                    .style("left", (d3.event.pageX) + "px")
                                                                     .style("top", (d3.event.pageY) + "px");
                                    d3.select("#tooltipTr2").transition().text("Vaccinated is "+ftr2(TotalSexPer*100)+"%")
                                                                      .style("left", (d3.event.pageX) + "px")
                                                                      .style("top", (d3.event.pageY)+28 + "px");
                                                                      d3.select("#tooltipTr1").style("visibility", "visible");
                                                                      d3.select("#tooltipTr2").style("visibility", "visible");
                                       return tooltipTr1.style("visibility", "visible");
                                    })
                                    .on("mouseout",function(){
                                      d3.select(this).transition()
                                             .duration(100)
                                            .attr('opacity', '1')
                                            .style("fill", "#b3ffda")

                                            d3.select("#tooltipTr1").style("visibility", "hidden");
                                            d3.select("#tooltipTr2").style("visibility", "hidden");
                                            return tooltipTr1.style("visibility", "hidden");

                                          })





                              svgTr1.append("rect")
                                       .attr("x", 1000)
                                       .attr("y",300)
                                       .attr("height",50)
                                       .attr("width", 600)
                                       .style("stroke", "black")
                                       .style("fill", "#0066ff")
                                       .style("stroke-width", 0)
                                       .on("mouseover",function(){
                                         d3.select(this).transition()
                                                .duration(100)
                                               .attr('opacity', '1')
                                               .style("fill","#2BF0CD")
                                               d3.select("#tooltipTr1").transition().text("Percent of Males " )
                                                                             .style("left", (d3.event.pageX) + "px")
                                                                              .style("top", (d3.event.pageY) + "px");
                                             d3.select("#tooltipTr2").transition().text("Vaccinated is "+ftr2(TotalMFPer[1])+"%")
                                                                               .style("left", (d3.event.pageX) + "px")
                                                                               .style("top", (d3.event.pageY)+28 + "px");
                                                                               d3.select("#tooltipTr1").style("visibility", "visible");
                                                                               d3.select("#tooltipTr2").style("visibility", "visible");
                                                return tooltipTr1.style("visibility", "visible");
                                             })
                                             .on("mouseout",function(){
                                               d3.select(this).transition()
                                                      .duration(100)
                                                     .attr('opacity', '1')
                                                     .style("fill", "#0066ff")

                                                     d3.select("#tooltipTr1").style("visibility", "hidden");
                                                     d3.select("#tooltipTr2").style("visibility", "hidden");
                                                     return tooltipTr1.style("visibility", "hidden");

                                                   })

                                       svgTr1.append("rect")
                                                .attr("x", 1000)
                                                .attr("y",300)
                                                .attr("height",50)
                                                .attr("width", 6*TotalMFPer[0])
                                                .style("stroke", "black")
                                                .style("fill", "#ff8000")
                                                .style("stroke-width", 0)
                                                .on("mouseover",function(){
                                                  d3.select(this).transition()
                                                         .duration(100)
                                                        .attr('opacity', '1')
                                                        .style("fill","#2BF0CD")
                                                        d3.select("#tooltipTr1").transition().text("Percent of Females " )
                                                                                      .style("left", (d3.event.pageX) + "px")
                                                                                       .style("top", (d3.event.pageY) + "px");
                                                      d3.select("#tooltipTr2").transition().text("Vaccinated is "+ftr2(TotalMFPer[0])+"%")
                                                                                        .style("left", (d3.event.pageX) + "px")
                                                                                        .style("top", (d3.event.pageY)+28 + "px");
                                                                                        d3.select("#tooltipTr1").style("visibility", "visible");
                                                                                        d3.select("#tooltipTr2").style("visibility", "visible");
                                                         return tooltipTr1.style("visibility", "visible");
                                                      })
                                                      .on("mouseout",function(){
                                                        d3.select(this).transition()
                                                               .duration(100)
                                                              .attr('opacity', '1')
                                                              .style("fill", "#ff8000")

                                                              d3.select("#tooltipTr1").style("visibility", "hidden");
                                                              d3.select("#tooltipTr2").style("visibility", "hidden");
                                                              return tooltipTr1.style("visibility", "hidden");

                                                            })


                                                svgTr1.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1", 1200).attr("y1",200).attr("x2", 1000).attr("y2",300);
                                                svgTr1.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1",1200+600*TotalSexPer).attr("y1",200).attr("x2", 1000+600).attr("y2",300);


                                                svgTr1.append("rect")
                                                         .attr("x", 900)
                                                         .attr("y",450)
                                                         .attr("height",50)
                                                         .attr("width", 300)
                                                         .style("stroke", "black")
                                                         .style("fill", "#ff8000")
                                                         .style("stroke-width", 0)
                                                         .on("mouseover",function(){
                                                           d3.select(this).transition()
                                                                  .duration(100)
                                                                 .attr('opacity', '1')
                                                                 .style("fill","#2BF0CD")
                                                                 d3.select("#tooltipTr1").transition().text(" Out of Total Females vaccinated " )
                                                                                               .style("left", (d3.event.pageX) + "px")
                                                                                                .style("top", (d3.event.pageY) + "px");
                                                               d3.select("#tooltipTr2").transition().text("percent of 2nd Dose is "+ftr2(100-FD1Per[0]*100)+"%")
                                                                                                 .style("left", (d3.event.pageX) + "px")
                                                                                                 .style("top", (d3.event.pageY)+28 + "px");
                                                                                                 d3.select("#tooltipTr1").style("visibility", "visible");
                                                                                                 d3.select("#tooltipTr2").style("visibility", "visible");
                                                                  return tooltipTr1.style("visibility", "visible");
                                                               })
                                                               .on("mouseout",function(){
                                                                 d3.select(this).transition()
                                                                        .duration(100)
                                                                       .attr('opacity', '1')
                                                                       .style("fill", "#ff8000")

                                                                       d3.select("#tooltipTr1").style("visibility", "hidden");
                                                                       d3.select("#tooltipTr2").style("visibility", "hidden");
                                                                       return tooltipTr1.style("visibility", "hidden");

                                                                     })

                                                         svgTr1.append("rect")
                                                                  .attr("x", 900)
                                                                  .attr("y",450)
                                                                  .attr("height",50)
                                                                  .attr("width", 300*FD1Per[0])
                                                                  .style("stroke", "black")
                                                                  .style("fill", "#ffbf80")
                                                                  .style("stroke-width", 0)
                                                                  .on("mouseover",function(){
                                                                    d3.select(this).transition()
                                                                           .duration(100)
                                                                          .attr('opacity', '1')
                                                                          .style("fill","#2BF0CD")
                                                                          d3.select("#tooltipTr1").transition().text(" Out of Total Females vaccinated " )
                                                                                                        .style("left", (d3.event.pageX) + "px")
                                                                                                         .style("top", (d3.event.pageY) + "px");
                                                                        d3.select("#tooltipTr2").transition().text("percent of 1st Dose is "+ftr2(FD1Per[0]*100)+"%")
                                                                                                          .style("left", (d3.event.pageX) + "px")
                                                                                                          .style("top", (d3.event.pageY)+28 + "px");
                                                                                                          d3.select("#tooltipTr1").style("visibility", "visible");
                                                                                                          d3.select("#tooltipTr2").style("visibility", "visible");
                                                                           return tooltipTr1.style("visibility", "visible");
                                                                        })
                                                                        .on("mouseout",function(){
                                                                          d3.select(this).transition()
                                                                                 .duration(100)
                                                                                .attr('opacity', '1')
                                                                                .style("fill", "#ffbf80")

                                                                                d3.select("#tooltipTr1").style("visibility", "hidden");
                                                                                d3.select("#tooltipTr2").style("visibility", "hidden");
                                                                                return tooltipTr1.style("visibility", "hidden");

                                                                              })

                                                                  svgTr1.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1", 1000).attr("y1",350).attr("x2", 900).attr("y2",450);
                                                                  svgTr1.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1",1000+6*TotalMFPer[0]).attr("y1",350).attr("x2", 900+300).attr("y2",450);

                                                                  svgTr1.append("rect")
                                                                           .attr("x", 1400)
                                                                           .attr("y",450)
                                                                           .attr("height",50)
                                                                           .attr("width", 300)
                                                                           .style("stroke", "black")
                                                                           .style("fill", "#0066ff")
                                                                           .style("stroke-width", 0)
                                                                           .on("mouseover",function(){
                                                                             d3.select(this).transition()
                                                                                    .duration(100)
                                                                                   .attr('opacity', '1')
                                                                                   .style("fill","#2BF0CD")
                                                                                   d3.select("#tooltipTr1").transition().text(" Out of Total Males vaccinated " )
                                                                                                                 .style("left", (d3.event.pageX) + "px")
                                                                                                                  .style("top", (d3.event.pageY) + "px");
                                                                                 d3.select("#tooltipTr2").transition().text("percent of 1st Dose is "+ftr2(100-FD1Per[1]*100)+"%")
                                                                                                                   .style("left", (d3.event.pageX) + "px")
                                                                                                                   .style("top", (d3.event.pageY)+28 + "px");
                                                                                                                   d3.select("#tooltipTr1").style("visibility", "visible");
                                                                                                                   d3.select("#tooltipTr2").style("visibility", "visible");
                                                                                    return tooltipTr1.style("visibility", "visible");
                                                                                 })
                                                                                 .on("mouseout",function(){
                                                                                   d3.select(this).transition()
                                                                                          .duration(100)
                                                                                         .attr('opacity', '1')
                                                                                         .style("fill", "#0066ff")

                                                                                         d3.select("#tooltipTr1").style("visibility", "hidden");
                                                                                         d3.select("#tooltipTr2").style("visibility", "hidden");
                                                                                         return tooltipTr1.style("visibility", "hidden");

                                                                                       })

                                                                           svgTr1.append("rect")
                                                                                    .attr("x", 1400)
                                                                                    .attr("y",450)
                                                                                    .attr("height",50)
                                                                                    .attr("width", 300*FD1Per[1])
                                                                                    .style("stroke", "black")
                                                                                    .style("fill", "#80b3ff")
                                                                                    .style("stroke-width", 0)
                                                                                    .on("mouseover",function(){
                                                                                      d3.select(this).transition()
                                                                                             .duration(100)
                                                                                            .attr('opacity', '1')
                                                                                            .style("fill","#2BF0CD")
                                                                                            d3.select("#tooltipTr1").transition().text(" Out of Total Males vaccinated " )
                                                                                                                          .style("left", (d3.event.pageX) + "px")
                                                                                                                           .style("top", (d3.event.pageY) + "px");
                                                                                          d3.select("#tooltipTr2").transition().text("percent of 1st Dose is "+ftr2(FD1Per[1]*100)+"%")
                                                                                                                            .style("left", (d3.event.pageX) + "px")
                                                                                                                            .style("top", (d3.event.pageY)+28 + "px");
                                                                                                                            d3.select("#tooltipTr1").style("visibility", "visible");
                                                                                                                            d3.select("#tooltipTr2").style("visibility", "visible");
                                                                                             return tooltipTr1.style("visibility", "visible");
                                                                                          })
                                                                                          .on("mouseout",function(){
                                                                                            d3.select(this).transition()
                                                                                                   .duration(100)
                                                                                                  .attr('opacity', '1')
                                                                                                  .style("fill", "#80b3ff")

                                                                                                  d3.select("#tooltipTr1").style("visibility", "hidden");
                                                                                                  d3.select("#tooltipTr2").style("visibility", "hidden");
                                                                                                  return tooltipTr1.style("visibility", "hidden");

                                                                                                })

                                                                                    svgTr1.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1", 1000+6*TotalMFPer[0]).attr("y1",350).attr("x2", 1400).attr("y2",450);
                                                                                    svgTr1.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1",1000+600).attr("y1",350).attr("x2", 1400+300).attr("y2",450);

          })
