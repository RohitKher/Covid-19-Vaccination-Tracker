var svgTr2 = d3.select("#svgtrend2");


svgTr2.append("rect")
         .attr("x", 0)
         .attr("y", 0)
         .attr("height", 600)
         .attr("width", 1800)
         .style("stroke", "black")
         .style("fill", "none")
         .style("stroke-width", 0.25);

             var ftr22 = d3.format(".2f");
             svgTr2.append("text").attr("x", 80).attr("y", 50).text("Age Group wise  Covid-19 Vaccine Distribution").style("font-family", "Prompt").style("font-weight","500").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")


             for (let i = 1,j=150,k=30; i < 8; i++,j=j+60,k=k-5) {

             svgTr2.append('line').style("stroke", "black").style("stroke-width", 0.25).attr("x1", 100).attr("y1",j).attr("x2", 750).attr("y2",j);
                svgTr2.append("text").attr("x", 65).attr("y", j).text(k+"M").style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
             }

             d3.csv("https://raw.githubusercontent.com/RohitKher/datafiles/main/AgeGroup.csv", function(csv){
                  console.log(csv)
                  var AD1={};
                  var AD2={};
                  var TA={};
                  var A={};
                  var ATper={};
                  var Aper={};
                  var AD1Per={};
                  var AD2Per={};




                 csv.forEach(function(d,i) {
                      AD1[i]=d.CD1/1000000;
                       AD2[i] = d.CD2/1000000;
                        TA[i] = d.TD/1000000;
                        A[i]=d.AgeGroup;
                        ATper[i]=d.Tgrand/329484123;
                        Aper[i]=d.Tper;
                        AD1Per[i]=d.CD1/d.TD;
                        AD2Per[i]=d.CD2/d.TD;


                })


                                            for (let i = 0,j=0; i < 7; i++,j=j+90) {

svgTr2.append("text").attr("x", 130+j).attr("y", 540).text(A[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")

var tooltip = d3.select("body")
.append("div")
.attr('id', 'tooltipTr21')
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
.attr('id', 'tooltipTr22')
.style("font-size", "25px")
.style("position","absolute")
.style("z-index", "10")
.style("visibility", "hidden")
.style("background", "#ffffe6")
.style("font-family", "Prompt")
.style("font-weight","200")
.style("stroke","black")

                                              svgTr2.append("rect")
                                                       .attr("x", 125+j)
                                                       .attr("y",(25-ftr22(TA[i]))*12+ 209)
                                                       .attr("height",ftr22(TA[i])*12)
                                                       .attr("width", 50)
                                                       .style("stroke", "black")
                                                       .style("fill", "#808080")
                                                       .style("stroke-width", 0)
                                                       .style("fill", function(){

                                                                         if(A[i]=="<18")
                                                                           return "#008ae6";
                                                                         if(A[i]=="18-29")
                                                                            return "#990099";
                                                                            if(A[i]=="30-39")
                                                                               return "#cc33ff";
                                                                               if(A[i]=="40-49")
                                                                                  return "#666633";
                                                                                  if(A[i]=="50-64")
                                                                                     return "#806000";
                                                                                     if(A[i]=="65-74")
                                                                                        return "#e68a00";
                                                                                        if(A[i]=="75+")
                                                                                           return "#e60000";
                                                                                         })
                                                                                         .on("mouseover",function(){
                                                                                           d3.select(this).transition()
                                                                                                  .duration(100)
                                                                                                 .attr('opacity', '1')
                                                                                                 .style("fill","#2BF0CD")
                                                                                                 d3.select("#tooltipTr21").transition().text("2nd Dose="+ftr2(AD2[i])+"M")
                                                                                                                               .style("left", (d3.event.pageX) + "px")
                                                                                                                                .style("top", (d3.event.pageY) + "px");
                                                                                               d3.select("#tooltipTr22").transition().text("Total Dose="+ftr2(TA[i])+"M")
                                                                                                                                 .style("left", (d3.event.pageX) + "px")
                                                                                                                                 .style("top", (d3.event.pageY)+28 + "px");
                                                                                                                                 d3.select("#tooltipTr21").style("visibility", "visible");
                                                                                                                                 d3.select("#tooltipTr22").style("visibility", "visible");
                                                                                                  return tooltipTr21.style("visibility", "visible");
                                                                                               })
                                                                                               .on("mouseout",function(){
                                                                                                 d3.select(this).transition()
                                                                                                        .duration(100)
                                                                                                       .attr('opacity', '1')
                                                                                                       .style("fill", function(){

                                                                                                                         if(A[i]=="<18")
                                                                                                                           return "#008ae6";
                                                                                                                         if(A[i]=="18-29")
                                                                                                                            return "#990099";
                                                                                                                            if(A[i]=="30-39")
                                                                                                                               return "#cc33ff";
                                                                                                                               if(A[i]=="40-49")
                                                                                                                                  return "#666633";
                                                                                                                                  if(A[i]=="50-64")
                                                                                                                                     return "#806000";
                                                                                                                                     if(A[i]=="65-74")
                                                                                                                                        return "#e68a00";
                                                                                                                                        if(A[i]=="75+")
                                                                                                                                           return "#e60000";
                                                                                                                                         })
                                                                                                                                         d3.select("#tooltipTr21").style("visibility", "hidden");
                                                                                                                                         d3.select("#tooltipTr22").style("visibility", "hidden");
                                                                                                       return tooltipTr21.style("visibility", "hidden");

                                                                                                     })



                                                                                         svgTr2.append("rect")
                                                                                                  .attr("x", 125+j)
                                                                                                  .attr("y",(25-ftr22(AD1[i]))*12+ 209)
                                                                                                  .attr("height",ftr22(AD1[i])*12)
                                                                                                  .attr("width", 50)
                                                                                                  .style("stroke", "black")
                                                                                                  .style("fill", "#808080")
                                                                                                  .style("stroke-width", 0)
                                                                                                  .style("fill", function(){

                                                                                                                    if(A[i]=="<18")
                                                                                                                      return "#99d6ff";
                                                                                                                    if(A[i]=="18-29")
                                                                                                                       return "#ff99ff";
                                                                                                                       if(A[i]=="30-39")
                                                                                                                          return "#df80ff";
                                                                                                                          if(A[i]=="40-49")
                                                                                                                             return "#d4d4aa";
                                                                                                                             if(A[i]=="50-64")
                                                                                                                                return "#ffd24d";
                                                                                                                                if(A[i]=="65-74")
                                                                                                                                   return "#ffc266";
                                                                                                                                   if(A[i]=="75+")
                                                                                                                                      return "#ff9999";
                                                                                                                                    })
                                                                                                                                    .on("mouseover",function(){
                                                                                                                                      d3.select(this).transition()
                                                                                                                                             .duration(100)
                                                                                                                                            .attr('opacity', '1')
                                                                                                                                            .style("fill","#2BF0CD")
                                                                                                                                            d3.select("#tooltipTr21").transition().text("1st Dose="+ftr2(AD1[i])+"M")
                                                                                                                                                                          .style("left", (d3.event.pageX) + "px")
                                                                                                                                                                           .style("top", (d3.event.pageY) + "px");
                                                                                                                                          d3.select("#tooltipTr22").transition().text("Total Dose="+ftr2(TA[i])+"M")
                                                                                                                                                                            .style("left", (d3.event.pageX) + "px")
                                                                                                                                                                            .style("top", (d3.event.pageY)+28 + "px");
                                                                                                                                                                            d3.select("#tooltipTr21").style("visibility", "visible");
                                                                                                                                                                            d3.select("#tooltipTr22").style("visibility", "visible");
                                                                                                                                             return tooltipTr21.style("visibility", "visible");
                                                                                                                                          })
                                                                                                                                          .on("mouseout",function(){
                                                                                                                                            d3.select(this).transition()
                                                                                                                                                   .duration(100)
                                                                                                                                                  .attr('opacity', '1')
                                                                                                                                                  .style("fill", function(){

                                                                                                                                                                    if(A[i]=="<18")
                                                                                                                                                                      return "#99d6ff";
                                                                                                                                                                    if(A[i]=="18-29")
                                                                                                                                                                       return "#ff99ff";
                                                                                                                                                                       if(A[i]=="30-39")
                                                                                                                                                                          return "#df80ff";
                                                                                                                                                                          if(A[i]=="40-49")
                                                                                                                                                                             return "#d4d4aa";
                                                                                                                                                                             if(A[i]=="50-64")
                                                                                                                                                                                return "#ffd24d";
                                                                                                                                                                                if(A[i]=="65-74")
                                                                                                                                                                                   return "#ffc266";
                                                                                                                                                                                   if(A[i]=="75+")
                                                                                                                                                                                      return "#ff9999";
                                                                                                                                                                                    })
                                                                                                                                                                                    d3.select("#tooltipTr21").style("visibility", "hidden");
                                                                                                                                                                                    d3.select("#tooltipTr22").style("visibility", "hidden");
                                                                                                                                                  return tooltipTr21.style("visibility", "hidden");

                                                                                                                                                })




                                                       }

                                                       var tooltip = d3.select("body")
                                                       .append("div")
                                                       .attr('id', 'tooltipTr21')
                                                       .style("font-size", "25px")
                                                       .style("position","absolute")
                                                       .style("z-index", "10")
                                                       .style("visibility", "hidden")
                                                       .style("background", "#ffffe6")
                                                       .style("font-width","700")
                                                       .style("stroke","black")

                                                       var tooltip = d3.select("body")
                                                       .append("div")
                                                       .attr('id', 'tooltipTr22')
                                                       .style("font-size", "25px")
                                                       .style("position","absolute")
                                                       .style("z-index", "10")
                                                       .style("visibility", "hidden")
                                                       .style("background", "#ffffe6")
                                                       .style("font-width","700")
                                                       .style("stroke","black")


                                                                var myimage = svgTr2.append('image')
                                                                                 .attr('xlink:href', 'img1.png')
                                                                                .attr('width', 1000)
                                                                                .attr('height', 150)
                                                                                .attr("x", 765)
                                                                                .attr("y",100)

                                                                svgTr2.append("rect")
                                                                         .attr("x", 1200)
                                                                         .attr("y",150)
                                                                         .attr("height",50)
                                                                         .attr("width", 600*ATper[0])
                                                                         .style("stroke", "black")
                                                                         .style("fill", "#b3ffda")
                                                                         .style("stroke-width", 0)
                                                                         .on("mouseover",function(){
                                                                           d3.select(this).transition()
                                                                                  .duration(100)
                                                                                 .attr('opacity', '1')
                                                                                 .style("fill","#2BF0CD")
                                                                                 d3.select("#tooltipTr21").transition().text("Total percent of Population")
                                                                                                               .style("left", (d3.event.pageX) + "px")
                                                                                                                .style("top", (d3.event.pageY) + "px");
                                                                               d3.select("#tooltipTr22").transition().text("vaccinated is "+ftr2(100*ATper[0])+"%")
                                                                                                                 .style("left", (d3.event.pageX) + "px")
                                                                                                                 .style("top", (d3.event.pageY)+33 + "px");
                                                                                                                 d3.select("#tooltipTr21").style("visibility", "visible");
                                                                                                                 d3.select("#tooltipTr22").style("visibility", "visible");
                                                                                  return tooltipTr21.style("visibility", "visible");
                                                                               })
                                                                               .on("mouseout",function(){
                                                                                 d3.select(this).transition()
                                                                                        .duration(100)
                                                                                       .attr('opacity', '1')
                                                                                       .style("fill", "#b3ffda")

                                                                                                                         d3.select("#tooltipTr21").style("visibility", "hidden");
                                                                                                                         d3.select("#tooltipTr22").style("visibility", "hidden");
                                                                                       return tooltipTr21.style("visibility", "hidden");

                                                                                     })

                                                                         svgTr2.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1", 1200).attr("y1",200).attr("x2", 1000).attr("y2",300);
                                                                         svgTr2.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1",1200+600*ATper[0]).attr("y1",200).attr("x2", 1600).attr("y2",300);





                                                                         var xp={}
                                                                         xp=0;



                                                                       for (let i = 0; i < 8; i++) {

                                                                         svgTr2.append("rect")
                                                                                  .attr("x", 1000+xp)
                                                                                  .attr("y",300)
                                                                                  .attr("height",50)
                                                                                  .attr("width", 6*Aper[i])
                                                                                  .style("stroke", "black")
                                                                                  .style("fill", function(){

                                                                                                    if(A[i]=="<18")
                                                                                                      return "#008ae6";
                                                                                                    if(A[i]=="18-29")
                                                                                                       return "#990099";
                                                                                                       if(A[i]=="30-39")
                                                                                                          return "#cc33ff";
                                                                                                          if(A[i]=="40-49")
                                                                                                             return "#666633";
                                                                                                             if(A[i]=="50-64")
                                                                                                                return "#806000";
                                                                                                                if(A[i]=="65-74")
                                                                                                                   return "#e68a00";
                                                                                                                   if(A[i]=="75+")
                                                                                                                      return "#e60000";
                                                                                                                    })
                                                                                  .style("stroke-width", 0)
                                                                                  .on("mouseover",function(){
                                                                                    d3.select(this).transition()
                                                                                           .duration(100)
                                                                                          .attr('opacity', '1')
                                                                                          .style("fill","#2BF0CD")
                                                                                          d3.select("#tooltipTr21").transition().text("Out of Total Vaccinations ")
                                                                                                                        .style("left", (d3.event.pageX) + "px")
                                                                                                                         .style("top", (d3.event.pageY) + "px");
                                                                                        d3.select("#tooltipTr22").transition().text("Age group "+A[i]+" is "+ftr2(Aper[i])+"%")
                                                                                                                          .style("left", (d3.event.pageX) + "px")
                                                                                                                          .style("top", (d3.event.pageY)+28 + "px");
                                                                                                                          d3.select("#tooltipTr21").style("visibility", "visible");
                                                                                                                          d3.select("#tooltipTr22").style("visibility", "visible");
                                                                                           return tooltipTr21.style("visibility", "visible");
                                                                                        })
                                                                                        .on("mouseout",function(){
                                                                                          d3.select(this).transition()
                                                                                                 .duration(100)
                                                                                                .attr('opacity', '1')
                                                                                                .style("fill", function(){

                                                                                                                  if(A[i]=="<18")
                                                                                                                    return "#008ae6";
                                                                                                                  if(A[i]=="18-29")
                                                                                                                     return "#990099";
                                                                                                                     if(A[i]=="30-39")
                                                                                                                        return "#cc33ff";
                                                                                                                        if(A[i]=="40-49")
                                                                                                                           return "#666633";
                                                                                                                           if(A[i]=="50-64")
                                                                                                                              return "#806000";
                                                                                                                              if(A[i]=="65-74")
                                                                                                                                 return "#e68a00";
                                                                                                                                 if(A[i]=="75+")
                                                                                                                                    return "#e60000";
                                                                                                                                  })

                                                                                                                                  d3.select("#tooltipTr21").style("visibility", "hidden");
                                                                                                                                  d3.select("#tooltipTr22").style("visibility", "hidden");
                                                                                                return tooltipTr21.style("visibility", "hidden");

                                                                                              })

                                                                                xp=xp+Aper[i]*6;

                                                                                }

                                                                                var xp1={}
                                                                                xp1=0;
                                                                                xp=0;

                                                                                svgTr2.append("text").attr("x", 80).attr("y", 200).text("").style("font-family", "Prompt").style("font-weight","700").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")


                                                                                for (let i = 0,j=0; i < 8; i++,j=j+120) {

                                                                                  svgTr2.append("rect")
                                                                                           .attr("x", 900+j)
                                                                                           .attr("y",450)
                                                                                           .attr("height",50)
                                                                                           .attr("width", 100*AD1Per[i])
                                                                                           .style("stroke", "black")
                                                                                           .style("fill", function(){

                                                                                                             if(A[i]=="<18")
                                                                                                               return "#99d6ff";
                                                                                                             if(A[i]=="18-29")
                                                                                                                return "#ff99ff";
                                                                                                                if(A[i]=="30-39")
                                                                                                                   return "#df80ff";
                                                                                                                   if(A[i]=="40-49")
                                                                                                                      return "#d4d4aa";
                                                                                                                      if(A[i]=="50-64")
                                                                                                                         return "#ffd24d";
                                                                                                                         if(A[i]=="65-74")
                                                                                                                            return "#ffc266";
                                                                                                                            if(A[i]=="75+")
                                                                                                                               return "#ff9999";
                                                                                                                             })
                                                                                           .style("stroke-width", 0)
                                                                                           .on("mouseover",function(){
                                                                                             d3.select(this).transition()
                                                                                                    .duration(100)
                                                                                                   .attr('opacity', '1')
                                                                                                   .style("fill","#2BF0CD")
                                                                                                   d3.select("#tooltipTr21").transition().text("In Age group "+A[i]+" 1st Dose")
                                                                                                                                 .style("left", (d3.event.pageX) + "px")
                                                                                                                                  .style("top", (d3.event.pageY) + "px");
                                                                                                 d3.select("#tooltipTr22").transition().text("vaccinations are "+ftr2(100*AD1Per[i])+"%")
                                                                                                                                   .style("left", (d3.event.pageX) + "px")
                                                                                                                                   .style("top", (d3.event.pageY)+33 + "px");
                                                                                                                                   d3.select("#tooltipTr21").style("visibility", "visible");
                                                                                                                                   d3.select("#tooltipTr22").style("visibility", "visible");
                                                                                                    return tooltipTr21.style("visibility", "visible");
                                                                                                 })
                                                                                                 .on("mouseout",function(){
                                                                                                   d3.select(this).transition()
                                                                                                          .duration(100)
                                                                                                         .attr('opacity', '1')
                                                                                                         .style("fill", function(){

                                                                                                                           if(A[i]=="<18")
                                                                                                                             return "#99d6ff";
                                                                                                                           if(A[i]=="18-29")
                                                                                                                              return "#ff99ff";
                                                                                                                              if(A[i]=="30-39")
                                                                                                                                 return "#df80ff";
                                                                                                                                 if(A[i]=="40-49")
                                                                                                                                    return "#d4d4aa";
                                                                                                                                    if(A[i]=="50-64")
                                                                                                                                       return "#ffd24d";
                                                                                                                                       if(A[i]=="65-74")
                                                                                                                                          return "#ffc266";
                                                                                                                                          if(A[i]=="75+")
                                                                                                                                             return "#ff9999";
                                                                                                                                           })



                                                                                                                                           d3.select("#tooltipTr21").style("visibility", "hidden");
                                                                                                                                           d3.select("#tooltipTr22").style("visibility", "hidden");
                                                                                                         return tooltipTr21.style("visibility", "hidden");

                                                                                                       })


                                                                                          xp1=xp1+100*AD1Per[i];

                                                                                           svgTr2.append("rect")
                                                                                                    .attr("x", 900+j+xp1)
                                                                                                    .attr("y",450)
                                                                                                    .attr("height",50)
                                                                                                    .attr("width", 100*AD2Per[i])
                                                                                                    .style("stroke", "black")
                                                                                                    .style("fill", function(){

                                                                                                                      if(A[i]=="<18")
                                                                                                                        return "#008ae6";
                                                                                                                      if(A[i]=="18-29")
                                                                                                                         return "#990099";
                                                                                                                         if(A[i]=="30-39")
                                                                                                                            return "#cc33ff";
                                                                                                                            if(A[i]=="40-49")
                                                                                                                               return "#666633";
                                                                                                                               if(A[i]=="50-64")
                                                                                                                                  return "#806000";
                                                                                                                                  if(A[i]=="65-74")
                                                                                                                                     return "#e68a00";
                                                                                                                                     if(A[i]=="75+")
                                                                                                                                        return "#e60000";
                                                                                                                                      })
                                                                                                    .style("stroke-width", 0)
                                                                                                    .on("mouseover",function(){
                                                                                                      d3.select(this).transition()
                                                                                                             .duration(100)
                                                                                                            .attr('opacity', '1')
                                                                                                            .style("fill","#2BF0CD")
                                                                                                            d3.select("#tooltipTr21").transition().text("In Age group "+A[i]+" 2nd Dose")
                                                                                                                                          .style("left", (d3.event.pageX) + "px")
                                                                                                                                           .style("top", (d3.event.pageY) + "px");
                                                                                                          d3.select("#tooltipTr22").transition().text("vaccinations are "+ftr2(100*AD2Per[i])+"%")
                                                                                                                                            .style("left", (d3.event.pageX) + "px")
                                                                                                                                            .style("top", (d3.event.pageY)+33 + "px");
                                                                                                                                            d3.select("#tooltipTr21").style("visibility", "visible");
                                                                                                                                            d3.select("#tooltipTr22").style("visibility", "visible");
                                                                                                             return tooltipTr21.style("visibility", "visible");
                                                                                                          })
                                                                                                    .on("mouseout",function(){
                                                                                                      d3.select(this).transition()
                                                                                                             .duration(100)
                                                                                                            .attr('opacity', '1')
                                                                                                            .style("fill", function(){

                                                                                                                              if(A[i]=="<18")
                                                                                                                                return "#008ae6";
                                                                                                                              if(A[i]=="18-29")
                                                                                                                                 return "#990099";
                                                                                                                                 if(A[i]=="30-39")
                                                                                                                                    return "#cc33ff";
                                                                                                                                    if(A[i]=="40-49")
                                                                                                                                       return "#666633";
                                                                                                                                       if(A[i]=="50-64")
                                                                                                                                          return "#806000";
                                                                                                                                          if(A[i]=="65-74")
                                                                                                                                             return "#e68a00";
                                                                                                                                             if(A[i]=="75+")
                                                                                                                                                return "#e60000";
                                                                                                                                              })



                                                                                                                                              d3.select("#tooltipTr21").style("visibility", "hidden");
                                                                                                                                              d3.select("#tooltipTr22").style("visibility", "hidden");
                                                                                                            return tooltipTr21.style("visibility", "hidden");

                                                                                                          })

                                                                                                    if(i<7){

                                                                                                    svgTr2.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1", 1000+xp).attr("y1",350).attr("x2",900+j).attr("y2",450);
                                                                                                    svgTr2.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1",1000+xp+6*Aper[i]).attr("y1",350).attr("x2", 900+j+xp1+100*AD2Per[i]).attr("y2",450);
                                                                                                      }
                                                                                                    xp1=0;
                                                                                                    xp=xp+Aper[i]*6;

                                                                                         }
                                                     });
