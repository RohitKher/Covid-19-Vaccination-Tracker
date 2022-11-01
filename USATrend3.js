var svgTr3 = d3.select("#svgtrend3");


svgTr3.append("rect")
         .attr("x", 0)
         .attr("y", 0)
         .attr("height", 600)
         .attr("width", 1800)
         .style("stroke", "black")
         .style("fill", "none")
         .style("stroke-width", 0.25);

             var ftr3 = d3.format(".2f");
             svgTr3.append("text").attr("x", 80).attr("y", 50).text("Race wise  Covid-19 Vaccine Distribution").style("font-family", "Prompt").style("font-weight","500").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")


             for (let i = 1,j=120,k=30; i < 8; i++,j=j+60,k=k-5) {

             svgTr3.append('line').style("stroke", "black").style("stroke-width", 0.25).attr("x1", 100).attr("y1",j).attr("x2", 800).attr("y2",j);
                svgTr3.append("text").attr("x", 65).attr("y", j).text(k+"M").style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
             }

             d3.csv("https://raw.githubusercontent.com/RohitKher/datafiles/main/Race.csv", function(csv){
                  console.log(csv)
                  var RD1={};
                  var RD2={};
                  var TR={};
                  var RL1={};
                  var RL2={};
                  var RL3={};
                  var RL4={};
                  var RL5={};
                  var RTper={};
                  var Rper={};
                  var RD1Per={};
                  var RD2Per={};

                  var R={};


                 csv.forEach(function(d,i) {
                      RD1[i]=d.RC1/1000000;
                       RD2[i] = d.RC2/1000000;
                        TR[i] = d.RT/1000000;
                        R[i]=d.Race;
                        RL1[i]=d.L1;
                        RL2[i]=d.L2;
                        RL3[i]=d.L3;
                        RL4[i]=d.L4;
                        RL5[i]=d.L5;
                        RTper[i]=d.RGT/329484123;
                        Rper[i]=d.PerRT;
                        RD1Per[i]=d.RC1/d.RT;
                        RD2Per[i]=d.RC2/d.RT;
                })

                var tooltip = d3.select("body")
                .append("div")
                .attr('id', 'tooltipTr31')
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
                 .attr('id', 'tooltipTr32')
                 .style("font-size", "25px")
                 .style("position","absolute")
                 .style("z-index", "10")
                 .style("visibility", "hidden")
                 .style("background", "#ffffe6")
                 .style("font-family", "Prompt")
                 .style("font-weight","200")
                 .style("stroke","black")

                for (let i = 0,j=0; i < 7; i++,j=j+100) {

svgTr3.append("text").attr("x", 130+j).attr("y", 500).text(RL1[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
svgTr3.append("text").attr("x", 130+j).attr("y", 500+18).text(RL2[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
svgTr3.append("text").attr("x", 130+j).attr("y", 500+18*2).text(RL3[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
svgTr3.append("text").attr("x", 130+j).attr("y", 500+18*3).text(RL4[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
svgTr3.append("text").attr("x", 130+j).attr("y", 500+18*4).text(RL5[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")


                svgTr3.append("rect")
                         .attr("x", 130+j)
                         .attr("y",(30-ftr3(TR[i]))*12+ 119)
                         .attr("height",ftr3(TR[i])*12)
                         .attr("width", 50)
                         .style("stroke", "black")
                         .style("fill", "#808080")
                         .style("stroke-width", 0)
                         .style("fill", function(){

                                           if(R[i]=="Hispanic/Latino")
                                             return "#008ae6";
                                           if(R[i]=="WhiteNon-Hispanic")
                                              return "#990099";
                                              if(R[i]=="American Indian/Alaska NativeNon-Hispanic")
                                                 return "#cc33ff";
                                                 if(R[i]=="AsianNon-Hispanic")
                                                    return "#666633";
                                                    if(R[i]=="Black Non-Hispanic")
                                                       return "#806000";
                                                       if(R[i]=="Native Hawaiian/Other Pacific Islander Non-Hispanic")
                                                          return "#e68a00";
                                                          if(R[i]=="Multiple/Other Non-Hispanic")
                                                             return "#e60000";
                                                           })
                                                           .on("mouseover",function(){
                                                             d3.select(this).transition()
                                                                    .duration(100)
                                                                   .attr('opacity', '1')
                                                                   .style("fill","#2BF0CD")
                                                                   d3.select("#tooltipTr31").transition().text("2nd Dose="+ftr2(RD2[i])+"M")
                                                                                                 .style("left", (d3.event.pageX) + "px")
                                                                                                  .style("top", (d3.event.pageY) + "px");
                                                                 d3.select("#tooltipTr32").transition().text("Total Dose="+ftr2(TR[i])+"M")
                                                                                                   .style("left", (d3.event.pageX) + "px")
                                                                                                   .style("top", (d3.event.pageY)+28 + "px");
                                                                                                   d3.select("#tooltipTr31").style("visibility", "visible");
                                                                                                   d3.select("#tooltipTr32").style("visibility", "visible");
                                                                    return tooltipTr31.style("visibility", "visible");
                                                                 })
                                                                 .on("mouseout",function(){
                                                                   d3.select(this).transition()
                                                                          .duration(100)
                                                                         .attr('opacity', '1')
                                                                         .style("fill", function(){

                                                                                           if(R[i]=="Hispanic/Latino")
                                                                                             return "#008ae6";
                                                                                           if(R[i]=="WhiteNon-Hispanic")
                                                                                              return "#990099";
                                                                                              if(R[i]=="American Indian/Alaska NativeNon-Hispanic")
                                                                                                 return "#cc33ff";
                                                                                                 if(R[i]=="AsianNon-Hispanic")
                                                                                                    return "#666633";
                                                                                                    if(R[i]=="Black Non-Hispanic")
                                                                                                       return "#806000";
                                                                                                       if(R[i]=="Native Hawaiian/Other Pacific Islander Non-Hispanic")
                                                                                                          return "#e68a00";
                                                                                                          if(R[i]=="Multiple/Other Non-Hispanic")
                                                                                                             return "#e60000";
                                                                                                           })
                                                                                                           d3.select("#tooltipTr31").style("visibility", "hidden");
                                                                                                           d3.select("#tooltipTr32").style("visibility", "hidden");

                                                                         return tooltipTr31.style("visibility", "hidden");

                                                                       })




                                                           svgTr3.append("rect")
                                                                    .attr("x", 130+j)
                                                                    .attr("y",(30-ftr3(RD1[i]))*12+ 119)
                                                                    .attr("height",ftr3(RD1[i])*12)
                                                                    .attr("width", 50)
                                                                    .style("stroke", "black")
                                                                    .style("fill", "#808080")
                                                                    .style("stroke-width", 0)
                                                                    .style("fill", function(){

                                                                                      if(R[i]=="Hispanic/Latino")
                                                                                        return "#99d6ff";
                                                                                      if(R[i]=="WhiteNon-Hispanic")
                                                                                         return "#ff99ff";
                                                                                         if(R[i]=="American Indian/Alaska NativeNon-Hispanic")
                                                                                            return "#df80ff";
                                                                                            if(R[i]=="AsianNon-Hispanic")
                                                                                               return "#d4d4aa";
                                                                                               if(R[i]=="Black Non-Hispanic")
                                                                                                  return "#ffd24d";
                                                                                                  if(R[i]=="Native Hawaiian/Other Pacific Islander Non-Hispanic")
                                                                                                     return "#ffc266";
                                                                                                     if(R[i]=="Multiple/Other Non-Hispanic")
                                                                                                        return "#ff9999";
                                                                                                      })
                                                                                                      .on("mouseover",function(){
                                                                                                        d3.select(this).transition()
                                                                                                               .duration(100)
                                                                                                              .attr('opacity', '1')
                                                                                                              .style("fill","#2BF0CD")
                                                                                                              d3.select("#tooltipTr31").transition().text("1st Dose="+ftr2(RD1[i])+"M")
                                                                                                                                            .style("left", (d3.event.pageX) + "px")
                                                                                                                                             .style("top", (d3.event.pageY) + "px");
                                                                                                            d3.select("#tooltipTr32").transition().text("Total Dose="+ftr2(TR[i])+"M")
                                                                                                                                              .style("left", (d3.event.pageX) + "px")
                                                                                                                                              .style("top", (d3.event.pageY)+28 + "px");
                                                                                                                                              d3.select("#tooltipTr31").style("visibility", "visible");
                                                                                                                                              d3.select("#tooltipTr32").style("visibility", "visible");
                                                                                                               return tooltipTr31.style("visibility", "visible");
                                                                                                            })
                                                                                                            .on("mouseout",function(){
                                                                                                              d3.select(this).transition()
                                                                                                                     .duration(100)
                                                                                                                    .attr('opacity', '1')
                                                                                                                    .style("fill", function(){

                                                                                                                                      if(R[i]=="Hispanic/Latino")
                                                                                                                                        return "#99d6ff";
                                                                                                                                      if(R[i]=="WhiteNon-Hispanic")
                                                                                                                                         return "#ff99ff";
                                                                                                                                         if(R[i]=="American Indian/Alaska NativeNon-Hispanic")
                                                                                                                                            return "#df80ff";
                                                                                                                                            if(R[i]=="AsianNon-Hispanic")
                                                                                                                                               return "#d4d4aa";
                                                                                                                                               if(R[i]=="Black Non-Hispanic")
                                                                                                                                                  return "#ffd24d";
                                                                                                                                                  if(R[i]=="Native Hawaiian/Other Pacific Islander Non-Hispanic")
                                                                                                                                                     return "#ffc266";
                                                                                                                                                     if(R[i]=="Multiple/Other Non-Hispanic")
                                                                                                                                                        return "#ff9999";
                                                                                                                                                      })
                                                                                                                                                      d3.select("#tooltipTr31").style("visibility", "hidden");
                                                                                                                                                      d3.select("#tooltipTr32").style("visibility", "hidden");

                                                                                                                    return tooltipTr31.style("visibility", "hidden");

                                                                                                                  })
                                                                                                                }

                                                                                                                var tooltip = d3.select("body")
                                                                                                                .append("div")
                                                                                                                .attr('id', 'tooltipTr31')
                                                                                                                .style("font-size", "25px")
                                                                                                                .style("position","absolute")
                                                                                                                .style("z-index", "10")
                                                                                                                .style("visibility", "hidden")
                                                                                                                .style("background", "#ffffe6")
                                                                                                                .style("font-width","700")
                                                                                                                .style("stroke","black")

                                                                                                                var tooltip = d3.select("body")
                                                                                                                 .append("div")
                                                                                                                 .attr('id', 'tooltipTr32')
                                                                                                                 .style("font-size", "25px")
                                                                                                                 .style("position","absolute")
                                                                                                                 .style("z-index", "10")
                                                                                                                 .style("visibility", "hidden")
                                                                                                                 .style("background", "#ffffe6")
                                                                                                                 .style("font-width","700")
                                                                                                                 .style("stroke","black")


                                                                                                                           var myimage = svgTr3.append('image')
                                                                                                                                            .attr('xlink:href', 'img1.png')
                                                                                                                                           .attr('width', 1000)
                                                                                                                                           .attr('height', 150)
                                                                                                                                           .attr("x", 765)
                                                                                                                                           .attr("y",100)


                                                                                                                           svgTr3.append("rect")
                                                                                                                                    .attr("x", 1200)
                                                                                                                                    .attr("y",150)
                                                                                                                                    .attr("height",50)
                                                                                                                                    .attr("width", 600*RTper[0])
                                                                                                                                    .style("stroke", "black")
                                                                                                                                    .style("fill", "#b3ffda")
                                                                                                                                    .style("stroke-width", 0)
                                                                                                                                    .on("mouseover",function(){
                                                                                                                                      d3.select(this).transition()
                                                                                                                                             .duration(100)
                                                                                                                                            .attr('opacity', '1')
                                                                                                                                            .style("fill","#2BF0CD")
                                                                                                                                            d3.select("#tooltipTr31").transition().text("Total percent of Population")
                                                                                                                                                                          .style("left", (d3.event.pageX) + "px")
                                                                                                                                                                           .style("top", (d3.event.pageY) + "px");
                                                                                                                                          d3.select("#tooltipTr32").transition().text("vaccinated is "+ftr2(100*RTper[0])+"%")
                                                                                                                                                                            .style("left", (d3.event.pageX) + "px")
                                                                                                                                                                            .style("top", (d3.event.pageY)+33 + "px");
                                                                                                                                                                            d3.select("#tooltipTr31").style("visibility", "visible");
                                                                                                                                                                            d3.select("#tooltipTr32").style("visibility", "visible");
                                                                                                                                             return tooltipTr31.style("visibility", "visible");
                                                                                                                                          })
                                                                                                                                          .on("mouseout",function(){
                                                                                                                                            d3.select(this).transition()
                                                                                                                                                   .duration(100)
                                                                                                                                                  .attr('opacity', '1')
                                                                                                                                                  .style("fill", "#b3ffda")

                                                                                                                                                                                    d3.select("#tooltipTr31").style("visibility", "hidden");
                                                                                                                                                                                    d3.select("#tooltipTr32").style("visibility", "hidden");

                                                                                                                                                  return tooltipTr31.style("visibility", "hidden");

                                                                                                                                                })

                                                                                                                                    svgTr3.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1", 1200).attr("y1",200).attr("x2", 1000).attr("y2",300);
                                                                                                                                    svgTr3.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1",1200+600*RTper[0]).attr("y1",200).attr("x2", 1600).attr("y2",300);





                                                                                                                                    var tr2xp={}
                                                                                                                                    tr2xp=0;



                                                                                                                                  for (let i = 0; i < 8; i++) {

                                                                                                                                    svgTr3.append("rect")
                                                                                                                                             .attr("x", 1000+tr2xp)
                                                                                                                                             .attr("y",300)
                                                                                                                                             .attr("height",50)
                                                                                                                                             .attr("width", 6*Rper[i])
                                                                                                                                             .style("stroke", "black")
                                                                                                                                             .style("fill", function(){

                                                                                                                                                               if(R[i]=="Hispanic/Latino")
                                                                                                                                                                 return "#008ae6";
                                                                                                                                                               if(R[i]=="WhiteNon-Hispanic")
                                                                                                                                                                  return "#990099";
                                                                                                                                                                  if(R[i]=="American Indian/Alaska NativeNon-Hispanic")
                                                                                                                                                                     return "#cc33ff";
                                                                                                                                                                     if(R[i]=="AsianNon-Hispanic")
                                                                                                                                                                        return "#666633";
                                                                                                                                                                        if(R[i]=="Black Non-Hispanic")
                                                                                                                                                                           return "#806000";
                                                                                                                                                                           if(R[i]=="Native Hawaiian/Other Pacific Islander Non-Hispanic")
                                                                                                                                                                              return "#e68a00";
                                                                                                                                                                              if(R[i]=="Multiple/Other Non-Hispanic")
                                                                                                                                                                                 return "#e60000";
                                                                                                                                                                               })
                                                                                                                                             .style("stroke-width", 0)
                                                                                                                                             .on("mouseover",function(){
                                                                                                                                               d3.select(this).transition()
                                                                                                                                                      .duration(100)
                                                                                                                                                     .attr('opacity', '1')
                                                                                                                                                     .style("fill","#2BF0CD")
                                                                                                                                                     d3.select("#tooltipTr31").transition().text(R[i]+" are")
                                                                                                                                                                                   .style("left", (d3.event.pageX) + "px")
                                                                                                                                                                                    .style("top", (d3.event.pageY) + "px");
                                                                                                                                                   d3.select("#tooltipTr32").transition().text(ftr2(Rper[i])+"%")
                                                                                                                                                                                     .style("left", (d3.event.pageX) + "px")
                                                                                                                                                                                     .style("top", (d3.event.pageY)+33 + "px");
                                                                                                                                                                                     d3.select("#tooltipTr31").style("visibility", "visible");
                                                                                                                                                                                     d3.select("#tooltipTr32").style("visibility", "visible");
                                                                                                                                                      return tooltipTr31.style("visibility", "visible");
                                                                                                                                                   })
                                                                                                                                                   .on("mouseout",function(){
                                                                                                                                                     d3.select(this).transition()
                                                                                                                                                            .duration(100)
                                                                                                                                                           .attr('opacity', '1')
                                                                                                                                                           .style("fill", function(){

                                                                                                                                                                             if(R[i]=="Hispanic/Latino")
                                                                                                                                                                               return "#008ae6";
                                                                                                                                                                             if(R[i]=="WhiteNon-Hispanic")
                                                                                                                                                                                return "#990099";
                                                                                                                                                                                if(R[i]=="American Indian/Alaska NativeNon-Hispanic")
                                                                                                                                                                                   return "#cc33ff";
                                                                                                                                                                                   if(R[i]=="AsianNon-Hispanic")
                                                                                                                                                                                      return "#666633";
                                                                                                                                                                                      if(R[i]=="Black Non-Hispanic")
                                                                                                                                                                                         return "#806000";
                                                                                                                                                                                         if(R[i]=="Native Hawaiian/Other Pacific Islander Non-Hispanic")
                                                                                                                                                                                            return "#e68a00";
                                                                                                                                                                                            if(R[i]=="Multiple/Other Non-Hispanic")
                                                                                                                                                                                               return "#e60000";
                                                                                                                                                                                             })

                                                                                                                                                                                             d3.select("#tooltipTr31").style("visibility", "hidden");
                                                                                                                                                                                             d3.select("#tooltipTr32").style("visibility", "hidden");

                                                                                                                                                           return tooltipTr31.style("visibility", "hidden");

                                                                                                                                                         })

                                                                                                                                           tr2xp=tr2xp+Rper[i]*6;

                                                                                                                                           }

                                                                                                                                           var tr2xp1={}
                                                                                                                                           tr2xp1=0;
                                                                                                                                           tr2xp=0;

                                                                                                                                           svgTr3.append("text").attr("x", 80).attr("y", 200).text("").style("font-family", "Prompt").style("font-weight","700").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")


                                                                                                                                           for (let i = 0,j=0; i < 8; i++,j=j+120) {

                                                                                                                                             svgTr3.append("rect")
                                                                                                                                                      .attr("x", 900+j)
                                                                                                                                                      .attr("y",450)
                                                                                                                                                      .attr("height",50)
                                                                                                                                                      .attr("width", 100*RD1Per[i])
                                                                                                                                                      .style("stroke", "black")
                                                                                                                                                      .style("fill", function(){

                                                                                                                                                                        if(R[i]=="Hispanic/Latino")
                                                                                                                                                                          return "#99d6ff";
                                                                                                                                                                        if(R[i]=="WhiteNon-Hispanic")
                                                                                                                                                                           return "#ff99ff";
                                                                                                                                                                           if(R[i]=="American Indian/Alaska NativeNon-Hispanic")
                                                                                                                                                                              return "#df80ff";
                                                                                                                                                                              if(R[i]=="AsianNon-Hispanic")
                                                                                                                                                                                 return "#d4d4aa";
                                                                                                                                                                                 if(R[i]=="Black Non-Hispanic")
                                                                                                                                                                                    return "#ffd24d";
                                                                                                                                                                                    if(R[i]=="Native Hawaiian/Other Pacific Islander Non-Hispanic")
                                                                                                                                                                                       return "#ffc266";
                                                                                                                                                                                       if(R[i]=="Multiple/Other Non-Hispanic")
                                                                                                                                                                                          return "#ff9999";
                                                                                                                                                                                        })
                                                                                                                                                      .style("stroke-width", 0)
                                                                                                                                                      .on("mouseover",function(){
                                                                                                                                                        d3.select(this).transition()
                                                                                                                                                               .duration(100)
                                                                                                                                                              .attr('opacity', '1')
                                                                                                                                                              .style("fill","#2BF0CD")
                                                                                                                                                              d3.select("#tooltipTr31").transition().text("In "+R[i])
                                                                                                                                                                                            .style("left", (d3.event.pageX) + "px")
                                                                                                                                                                                             .style("top", (d3.event.pageY) + "px");
                                                                                                                                                            d3.select("#tooltipTr32").transition().text("1st Dose vaccinations are "+ftr2(100*RD1Per[i])+"%")
                                                                                                                                                                                              .style("left", (d3.event.pageX) + "px")
                                                                                                                                                                                              .style("top", (d3.event.pageY)+33 + "px");
                                                                                                                                                                                              d3.select("#tooltipTr31").style("visibility", "visible");
                                                                                                                                                                                              d3.select("#tooltipTr32").style("visibility", "visible");
                                                                                                                                                               return tooltipTr31.style("visibility", "visible");
                                                                                                                                                            })
                                                                                                                                                            .on("mouseout",function(){
                                                                                                                                                              d3.select(this).transition()
                                                                                                                                                                     .duration(100)
                                                                                                                                                                    .attr('opacity', '1')
                                                                                                                                                                    .style("fill", function(){

                                                                                                                                                                                      if(R[i]=="Hispanic/Latino")
                                                                                                                                                                                        return "#99d6ff";
                                                                                                                                                                                      if(R[i]=="WhiteNon-Hispanic")
                                                                                                                                                                                         return "#ff99ff";
                                                                                                                                                                                         if(R[i]=="American Indian/Alaska NativeNon-Hispanic")
                                                                                                                                                                                            return "#df80ff";
                                                                                                                                                                                            if(R[i]=="AsianNon-Hispanic")
                                                                                                                                                                                               return "#d4d4aa";
                                                                                                                                                                                               if(R[i]=="Black Non-Hispanic")
                                                                                                                                                                                                  return "#ffd24d";
                                                                                                                                                                                                  if(R[i]=="Native Hawaiian/Other Pacific Islander Non-Hispanic")
                                                                                                                                                                                                     return "#ffc266";
                                                                                                                                                                                                     if(R[i]=="Multiple/Other Non-Hispanic")
                                                                                                                                                                                                        return "#ff9999";
                                                                                                                                                                                                      })


                                                                                                                                                                                                      d3.select("#tooltipTr31").style("visibility", "hidden");
                                                                                                                                                                                                      d3.select("#tooltipTr32").style("visibility", "hidden");

                                                                                                                                                                    return tooltipTr31.style("visibility", "hidden");

                                                                                                                                                                  })

                                                                                                                                                     tr2xp1=tr2xp1+100*RD1Per[i];

                                                                                                                                                      svgTr3.append("rect")
                                                                                                                                                               .attr("x", 900+j+tr2xp1)
                                                                                                                                                               .attr("y",450)
                                                                                                                                                               .attr("height",50)
                                                                                                                                                               .attr("width", 100*RD2Per[i])
                                                                                                                                                               .style("stroke", "black")
                                                                                                                                                               .style("fill", function(){

                                                                                                                                                                                 if(R[i]=="Hispanic/Latino")
                                                                                                                                                                                   return "#008ae6";
                                                                                                                                                                                 if(R[i]=="WhiteNon-Hispanic")
                                                                                                                                                                                    return "#990099";
                                                                                                                                                                                    if(R[i]=="American Indian/Alaska NativeNon-Hispanic")
                                                                                                                                                                                       return "#cc33ff";
                                                                                                                                                                                       if(R[i]=="AsianNon-Hispanic")
                                                                                                                                                                                          return "#666633";
                                                                                                                                                                                          if(R[i]=="Black Non-Hispanic")
                                                                                                                                                                                             return "#806000";
                                                                                                                                                                                             if(R[i]=="Native Hawaiian/Other Pacific Islander Non-Hispanic")
                                                                                                                                                                                                return "#e68a00";
                                                                                                                                                                                                if(R[i]=="Multiple/Other Non-Hispanic")
                                                                                                                                                                                                   return "#e60000";
                                                                                                                                                                                                 })
                                                                                                                                                               .style("stroke-width", 0)
                                                                                                                                                               .on("mouseover",function(){
                                                                                                                                                                 d3.select(this).transition()
                                                                                                                                                                        .duration(100)
                                                                                                                                                                       .attr('opacity', '1')
                                                                                                                                                                       .style("fill","#2BF0CD")
                                                                                                                                                                       d3.select("#tooltipTr31").transition().text("In "+R[i])
                                                                                                                                                                                                     .style("left", (d3.event.pageX) + "px")
                                                                                                                                                                                                      .style("top", (d3.event.pageY) + "px");
                                                                                                                                                                     d3.select("#tooltipTr32").transition().text("2nd Dose vaccinations are "+ftr2(100*RD2Per[i])+"%")
                                                                                                                                                                                                       .style("left", (d3.event.pageX) + "px")
                                                                                                                                                                                                       .style("top", (d3.event.pageY)+33 + "px");
                                                                                                                                                                                                       d3.select("#tooltipTr31").style("visibility", "visible");
                                                                                                                                                                                                       d3.select("#tooltipTr32").style("visibility", "visible");
                                                                                                                                                                        return tooltipTr31.style("visibility", "visible");
                                                                                                                                                                     })
                                                                                                                                                                     .on("mouseout",function(){
                                                                                                                                                                       d3.select(this).transition()
                                                                                                                                                                              .duration(100)
                                                                                                                                                                             .attr('opacity', '1')
                                                                                                                                                                             .style("fill", function(){

                                                                                                                                                                                               if(R[i]=="Hispanic/Latino")
                                                                                                                                                                                                 return "#008ae6";
                                                                                                                                                                                               if(R[i]=="WhiteNon-Hispanic")
                                                                                                                                                                                                  return "#990099";
                                                                                                                                                                                                  if(R[i]=="American Indian/Alaska NativeNon-Hispanic")
                                                                                                                                                                                                     return "#cc33ff";
                                                                                                                                                                                                     if(R[i]=="AsianNon-Hispanic")
                                                                                                                                                                                                        return "#666633";
                                                                                                                                                                                                        if(R[i]=="Black Non-Hispanic")
                                                                                                                                                                                                           return "#806000";
                                                                                                                                                                                                           if(R[i]=="Native Hawaiian/Other Pacific Islander Non-Hispanic")
                                                                                                                                                                                                              return "#e68a00";
                                                                                                                                                                                                              if(R[i]=="Multiple/Other Non-Hispanic")
                                                                                                                                                                                                                 return "#e60000";
                                                                                                                                                                                                               })

                                                                                                                                                                                                               d3.select("#tooltipTr31").style("visibility", "hidden");
                                                                                                                                                                                                               d3.select("#tooltipTr32").style("visibility", "hidden");

                                                                                                                                                                             return tooltipTr31.style("visibility", "hidden");

                                                                                                                                                                           })

                                                                                                                                                               if(i<7){

                                                                                                                                                               svgTr3.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1", 1000+tr2xp).attr("y1",350).attr("x2",900+j).attr("y2",450);
                                                                                                                                                               svgTr3.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1",1000+tr2xp+6*Rper[i]).attr("y1",350).attr("x2", 900+j+tr2xp1+100*RD2Per[i]).attr("y2",450);
                                                                                                                                                                 }
                                                                                                                                                               tr2xp1=0;
                                                                                                                                                               tr2xp=tr2xp+Rper[i]*6;

                                                                                                                                                    }

              })
