var svgStateProgress = d3.select("#svgStateprogressbar");

                    svgStateProgress.append("rect")
                             .attr("x", 0)
                             .attr("y", 0)
                             .attr("height", 1000)
                             .attr("width", 1800)
                             .style("stroke", "black")
                             .style("fill", "none")
                             .style("stroke-width", 0.25);

                             var fp = d3.format(".1f");
                             var fp2 = d3.format(".2f");
                             var fp3 = d3.format(".0f");


                             d3.csv("https://raw.githubusercontent.com/RohitKher/datafiles/main/StateMarker1.csv", function(csv){
                                  console.log(csv)
                                       var Stname={};
                                       var Start={};
                                       var End={};
                                       var Max={};

                                      csv.forEach(function(d,i) {
                                           Stname[d.id]=d.State;
                                           Start[d.id]=d.Start;
                                           End[d.id]=d.End;
                                           Max[d.id]=d.MaxM;
                                     })

                          if(Max[State_id]>6.5){


                    d3.csv("https://raw.githubusercontent.com/RohitKher/datafiles/main/StateVaccinationProgress.csv", function(csv){
                         console.log(csv)
                              var month={};
                              var Admns={};
                              var did={};
                              var dsd={};
                              var date={};
                              csv.forEach(function(d,i) {
                                  month[d.id]=d.Month;
                                 Admns[d.id] = d.Doses_Administered/1000000;
                                 did[d.id] = d.Administered_Dose1/1000000;
                                 dsd[d.id] = d.Administered_Dose2/1000000;
                                 date[d.id]=d.Date;
                            })


                  svgStateProgress.append("text").attr("x", 80).attr("y", 50).text(Stname[State_id]+" Covid-19 Vaccine Progress Graph").style("font-family", "Prompt").style("font-weight","500").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")
                  svgStateProgress.append("text").attr("x", 500).attr("y", 960).text("Days").style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")

                        s= Start[State_id];
                        l=End[State_id];
                        if(State_id==2){
                          s= 60;
                          l=118;
                        }

                      else if(State_id==20){
                          s= 945;
                          l=1003;
                        }





                        for (let i = 1,j=140,k=13; i < 15; i++,j=j+60,k=k-1) {

                        svgStateProgress.append('line').style("stroke", "black").style("stroke-width", 0.25).attr("x1", 100).attr("y1",j).attr("x2", 1600).attr("y2",j);
                           svgStateProgress.append("text").attr("x", 55).attr("y", j).text(k+"M").style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
                        }
                        for (let i = s,j=0,k=1; i <= l; i++,j=j+15+5,k++) {

                          svgStateProgress.append("text").attr("x", 80).attr("y", 100).text("").style("font-family", "Prompt").style("font-weight","700").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")
                          svgStateProgress.append("text").attr("x", 124+j).attr("y", 930).text(k).style("font-family", "Prompt").style("font-weight","200").style("font-size", "10px").style("fill", "#808080").attr("alignment-baseline","middle")

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




                                svgStateProgress.append("rect")
                                            .attr("x",120+j)
                                            .attr("y",(13-fp2(Admns[i]))*60+140)
                                            .attr("height",fp2(Admns[i])*60)
                                            .attr("width", 15)
                                            .style("stroke", "black")
                                            .style("fill", function(){
                                                             if(month[i]==12)
                                                                return "#e62e00";
                                                              if(month[i]==1)
                                                                return "#ff8000";
                                                              if(month[i]==2)
                                                                 return "#0066ff";
                                                              if(month[i]==3)
                                                                 return "#996633";

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
                                                                        if(month[i]==3)
                                                                           return "#996633";

                                                      })
                                                      d3.select("#tooltipP").style("visibility", "hidden");
                                                      d3.select("#tooltipP2").style("visibility", "hidden");
                                                      d3.select("#tooltipP3").style("visibility", "hidden");

                                                });

                                                svgStateProgress.append("rect")
                                                            .attr("x",120+j)
                                                            .attr("y",(13-fp2(did[i]))*60+140)
                                                            .attr("height",fp2(did[i])*60)
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
                                                                              if(month[i]==3)
                                                                                 return "#d2a679";

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
                                                                                          if(month[i]==3)
                                                                                             return "#d2a679";

                                                                        })

                                                                        d3.select("#tooltipP").style("visibility", "hidden");
                                                                        d3.select("#tooltipP2").style("visibility", "hidden");
                                                                        d3.select("#tooltipP3").style("visibility", "hidden");


                                                                    })

                          }

})}

                                  else if(Max[State_id]<0.7){
                                      svgStateProgress.append("text").attr("x", 80).attr("y", 50).text("").style("font-family", "Prompt").style("font-weight","700").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")
                                      d3.csv("https://raw.githubusercontent.com/RohitKher/datafiles/main/StateVaccinationProgress.csv", function(csv){
                                           console.log(csv)
                                                var month={};
                                                var Admns={};
                                                var did={};
                                                var dsd={};
                                                var date={};
                                                csv.forEach(function(d,i) {
                                                    month[d.id]=d.Month;
                                                   Admns[d.id] = d.Doses_Administered/1000;
                                                   did[d.id] = d.Administered_Dose1/1000;
                                                   dsd[d.id] = d.Administered_Dose2/1000;
                                                   date[d.id]=d.Date;
                                              })


                                    svgStateProgress.append("text").attr("x", 80).attr("y", 50).text(Stname[State_id]+" Covid-19 Vaccine Progress Graph").style("font-family", "Prompt").style("font-weight","500").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")
                                    svgStateProgress.append("text").attr("x", 500).attr("y", 960).text("Days").style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")

                                          s= Start[State_id];
                                          l=End[State_id];
                                          if(State_id==2){
                                            s= 60;
                                            l=118;
                                          }

                                          else if(State_id==20){
                                              s= 945;
                                              l=1003;
                                            }



                                          for (let i = 1,j=140,k=650; i < 15; i++,j=j+60,k=k-50) {

                                          svgStateProgress.append('line').style("stroke", "black").style("stroke-width", 0.25).attr("x1", 100).attr("y1",j).attr("x2", 1600).attr("y2",j);
                                             svgStateProgress.append("text").attr("x", 55).attr("y", j).text(k+"K").style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
                                          }
                                          for (let i = s,j=0,k=1; i <= l; i++,j=j+15+5,k++) {

                                            svgStateProgress.append("text").attr("x", 80).attr("y", 100).text("").style("font-family", "Prompt").style("font-weight","700").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")
                                            svgStateProgress.append("text").attr("x", 124+j).attr("y", 930).text(k).style("font-family", "Prompt").style("font-weight","200").style("font-size", "10px").style("fill", "#808080").attr("alignment-baseline","middle")

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




                                                  svgStateProgress.append("rect")
                                                              .attr("x",120+j)
                                                              .attr("y",(650-fp2(Admns[i]))*1.2+140)
                                                              .attr("height",fp2(Admns[i])*1.2)
                                                              .attr("width", 15)
                                                              .style("stroke", "black")
                                                              .style("fill", function(){
                                                                               if(month[i]==12)
                                                                                  return "#e62e00";
                                                                                if(month[i]==1)
                                                                                  return "#ff8000";
                                                                                if(month[i]==2)
                                                                                   return "#0066ff";
                                                                                if(month[i]==3)
                                                                                  return "#996633";



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
                                                                                          if(month[i]==3)
                                                                                             return "#996633";


                                                                        })
                                                                        d3.select("#tooltipP").style("visibility", "hidden");
                                                                        d3.select("#tooltipP2").style("visibility", "hidden");
                                                                        d3.select("#tooltipP3").style("visibility", "hidden");
                                                                         return tooltip.style("visibility", "hidden");

                                                                  });

                                                                  svgStateProgress.append("rect")
                                                                              .attr("x",120+j)
                                                                              .attr("y",(650-fp2(did[i]))*1.2+140)
                                                                              .attr("height",fp2(did[i])*1.2)
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
                                                                                                if(month[i]==3)
                                                                                                   return "#d2a679";

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
                                                                                                                d3.select("#tooltipP3").style("visibility", "visible")
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
                                                                                                            if(month[i]==3)
                                                                                                               return "#d2a679";

                                                                                          })
                                                                                          d3.select("#tooltipP").style("visibility", "hidden");
                                                                                          d3.select("#tooltipP2").style("visibility", "hidden");
                                                                                          d3.select("#tooltipP3").style("visibility", "hidden");


                                                                                      })

                                            }

                  })
                                  }


                                  else if(Max[State_id]>=0.7 && Max[State_id]<=1){
                                      svgStateProgress.append("text").attr("x", 80).attr("y", 50).text("").style("font-family", "Prompt").style("font-weight","700").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")
                                      d3.csv("https://raw.githubusercontent.com/RohitKher/datafiles/main/StateVaccinationProgress.csv", function(csv){
                                           console.log(csv)
                                                var month={};
                                                var Admns={};
                                                var did={};
                                                var dsd={};
                                                var date={};
                                                csv.forEach(function(d,i) {
                                                    month[d.id]=d.Month;
                                                   Admns[d.id] = d.Doses_Administered/1000;
                                                   did[d.id] = d.Administered_Dose1/1000;
                                                   dsd[d.id] = d.Administered_Dose2/1000;
                                                   date[d.id]=d.Date;
                                              })


                                    svgStateProgress.append("text").attr("x", 80).attr("y", 50).text(Stname[State_id]+" Covid-19 Vaccine Progress Graph").style("font-family", "Prompt").style("font-weight","500").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")
                                    svgStateProgress.append("text").attr("x", 500).attr("y", 960).text("Days").style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")

                                          s= Start[State_id];
                                          l=End[State_id];
                                          if(State_id==2){
                                            s= 60;
                                            l=118;
                                          }

                                          else if(State_id==20){
                                              s= 945;
                                              l=1003;
                                            }



                                          for (let i = 1,j=140,k=1300; i < 15; i++,j=j+60,k=k-100) {

                                          svgStateProgress.append('line').style("stroke", "black").style("stroke-width", 0.25).attr("x1", 100).attr("y1",j).attr("x2", 1600).attr("y2",j);
                                             svgStateProgress.append("text").attr("x", 55).attr("y", j).text(k+"K").style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
                                          }
                                          for (let i = s,j=0,k=1; i <= l; i++,j=j+15+5,k++) {

                                            svgStateProgress.append("text").attr("x", 80).attr("y", 100).text("").style("font-family", "Prompt").style("font-weight","700").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")
                                            svgStateProgress.append("text").attr("x", 124+j).attr("y", 930).text(k).style("font-family", "Prompt").style("font-weight","200").style("font-size", "10px").style("fill", "#808080").attr("alignment-baseline","middle")

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




                                                  svgStateProgress.append("rect")
                                                              .attr("x",120+j)
                                                              .attr("y",(1300-fp2(Admns[i]))*0.6+140)
                                                              .attr("height",fp2(Admns[i])*0.6)
                                                              .attr("width", 15)
                                                              .style("stroke", "black")
                                                              .style("fill", function(){
                                                                               if(month[i]==12)
                                                                                  return "#e62e00";
                                                                                if(month[i]==1)
                                                                                  return "#ff8000";
                                                                                if(month[i]==2)
                                                                                   return "#0066ff";
                                                                                if(month[i]==3)
                                                                                  return "#996633";



                                                              })
                                                              .style("stroke-width", 0)
                                                              .on("mouseover",function(){
                                                                d3.select(this).transition()
                                                                       .duration(100)
                                                                      .attr('opacity', '1')
                                                                      .style("fill","#2BF0CD")
                                                                      d3.select("#tooltipP").transition().text("2nd Dose="+dsd[i]+"K")
                                                                                                    .style("left", (d3.event.pageX) + "px")
                                                                                                     .style("top", (d3.event.pageY) + "px");
                                                                     d3.select("#tooltipP2").transition().text("Total Dose="+Admns[i]+"K")
                                                                                                      .style("left", (d3.event.pageX) + "px")
                                                                                                      .style("top", (d3.event.pageY)+28 + "px");
                                                                    d3.select("#tooltipP3").transition().text("Date="+date[i])
                                                                                                      .style("left", (d3.event.pageX) + "px")
                                                                                                     .style("top", (d3.event.pageY)+28*2 + "px");
                                                                                                     d3.select("#tooltipP").style("visibility", "visible");
                                                                                                     d3.select("#tooltipP2").style("visibility", "visible");
                                                                                                     d3.select("#tooltipP3").style("visibility", "visible");


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
                                                                                          if(month[i]==3)
                                                                                             return "#996633";


                                                                        })
                                                                        d3.select("#tooltipP").style("visibility", "hidden");
                                                                        d3.select("#tooltipP2").style("visibility", "hidden");
                                                                        d3.select("#tooltipP3").style("visibility", "hidden");


                                                                  });

                                                                  svgStateProgress.append("rect")
                                                                              .attr("x",120+j)
                                                                              .attr("y",(1300-fp2(did[i]))*0.6+140)
                                                                              .attr("height",fp2(did[i])*0.6)
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
                                                                                                if(month[i]==3)
                                                                                                   return "#d2a679";

                                                                              })
                                                                              .on("mouseover",function(){
                                                                                d3.select(this).transition()
                                                                                       .duration(100)
                                                                                      .attr('opacity', '1')
                                                                                      .style("fill","#2BF0CD")
                                                                                      d3.select("#tooltipP").transition().text("1st Dose="+did[i]+"K")
                                                                                                                    .style("left", (d3.event.pageX) + "px")
                                                                                                                     .style("top", (d3.event.pageY) + "px");
                                                                                    d3.select("#tooltipP2").transition().text("Total Dose="+Admns[i]+"K")
                                                                                                                      .style("left", (d3.event.pageX) + "px")
                                                                                                                      .style("top", (d3.event.pageY)+28 + "px");

                                                                                    d3.select("#tooltipP3").transition().text("Date="+date[i])
                                                                                                                 .style("left", (d3.event.pageX) + "px")
                                                                                                                .style("top", (d3.event.pageY)+28*2 + "px");
                                                                                                                d3.select("#tooltipP").style("visibility", "visible");
                                                                                                                d3.select("#tooltipP2").style("visibility", "visible");
                                                                                                                d3.select("#tooltipP3").style("visibility", "visible");

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
                                                                                                            if(month[i]==3)
                                                                                                               return "#d2a679";

                                                                                          })
                                                                                          d3.select("#tooltipP").style("visibility", "hidden");
                                                                                          d3.select("#tooltipP2").style("visibility", "hidden");
                                                                                          d3.select("#tooltipP3").style("visibility", "hidden");


                                                                                      })

                                            }

                  })
                                  }

                                  else if(Max[State_id]>=1 && Max[State_id]<=6.5){
                                      svgStateProgress.append("text").attr("x", 80).attr("y", 50).text("").style("font-family", "Prompt").style("font-weight","700").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")
                                      d3.csv("https://raw.githubusercontent.com/RohitKher/datafiles/main/StateVaccinationProgress.csv", function(csv){
                                           console.log(csv)
                                                var month={};
                                                var Admns={};
                                                var did={};
                                                var dsd={};
                                                var date={};
                                                csv.forEach(function(d,i) {
                                                    month[d.id]=d.Month;
                                                   Admns[d.id] = d.Doses_Administered/1000000;
                                                   did[d.id] = d.Administered_Dose1/1000000;
                                                   dsd[d.id] = d.Administered_Dose2/1000000;
                                                   date[d.id]=d.Date;
                                              })


                                    svgStateProgress.append("text").attr("x", 80).attr("y", 50).text(Stname[State_id]+" Covid-19 Vaccine Progress Graph").style("font-family", "Prompt").style("font-weight","500").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")
                                    svgStateProgress.append("text").attr("x", 500).attr("y", 960).text("Days").style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")

                                          s= Start[State_id];
                                          l=End[State_id];
                                          if(State_id==2){
                                            s= 60;
                                            l=118;
                                          }

                                          else if(State_id==20){
                                              s= 945;
                                              l=1003;
                                            }



                                          for (let i = 1,j=140,k=6.5; i < 15; i++,j=j+60,k=k-0.5) {

                                          svgStateProgress.append('line').style("stroke", "black").style("stroke-width", 0.25).attr("x1", 100).attr("y1",j).attr("x2", 1600).attr("y2",j);
                                             svgStateProgress.append("text").attr("x", 55).attr("y", j).text(fp(k)+"M").style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
                                          }
                                          for (let i = s,j=0,k=1; i <= l; i++,j=j+15+5,k++) {

                                            svgStateProgress.append("text").attr("x", 80).attr("y", 100).text("").style("font-family", "Prompt").style("font-weight","700").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")
                                            svgStateProgress.append("text").attr("x", 124+j).attr("y", 930).text(k).style("font-family", "Prompt").style("font-weight","200").style("font-size", "10px").style("fill", "#808080").attr("alignment-baseline","middle")

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




                                                  svgStateProgress.append("rect")
                                                              .attr("x",120+j)
                                                              .attr("y",(6.5-fp2(Admns[i]))*120+140)
                                                              .attr("height",fp2(Admns[i])*120)
                                                              .attr("width", 15)
                                                              .style("stroke", "black")
                                                              .style("fill", function(){
                                                                               if(month[i]==12)
                                                                                  return "#e62e00";
                                                                                if(month[i]==1)
                                                                                  return "#ff8000";
                                                                                if(month[i]==2)
                                                                                   return "#0066ff";
                                                                                if(month[i]==3)
                                                                                  return "#996633";



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
                                                                                          if(month[i]==3)
                                                                                             return "#996633";


                                                                        })
                                                                        d3.select("#tooltipP").style("visibility", "hidden");
                                                                        d3.select("#tooltipP2").style("visibility", "hidden");
                                                                        d3.select("#tooltipP3").style("visibility", "hidden");
                                                                         return tooltip.style("visibility", "hidden");

                                                                  });

                                                                  svgStateProgress.append("rect")
                                                                              .attr("x",120+j)
                                                                              .attr("y",(6.5-fp2(did[i]))*120+140)
                                                                              .attr("height",fp2(did[i])*120)
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
                                                                                                if(month[i]==3)
                                                                                                   return "#d2a679";

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
                                                                                                            if(month[i]==3)
                                                                                                               return "#d2a679";

                                                                                          })
                                                                                          d3.select("#tooltipP").style("visibility", "hidden");
                                                                                          d3.select("#tooltipP2").style("visibility", "hidden");
                                                                                          d3.select("#tooltipP3").style("visibility", "hidden");


                                                                                      })

                                            }

                  })
                                  }


});
