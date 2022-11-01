var statesvgTr2 = d3.select("#svgStatetrend2");


statesvgTr2.append("rect")
         .attr("x", 0)
         .attr("y", 0)
         .attr("height", 600)
         .attr("width", 1800)
         .style("stroke", "black")
         .style("fill", "none")
         .style("stroke-width", 0.25);

             var ftr22 = d3.format(".2f");
             var ftr21 = d3.format(".1f");




             d3.csv("https://raw.githubusercontent.com/RohitKher/datafiles/main/StateAgegroup.csv", function(csv){
                  console.log(csv)
                  var name={};
                  var total={};
                  var per={};
                  var l18per={};
                  var f18t29per={};
                  var f30t39per={};
                  var f40t49per={};
                  var f50t64per={};
                  var f65t74per={};
                  var f75pper={};
                  var l18={};
                  var f18t29={};
                  var f30t39={};
                  var f40t49={};
                  var f50t64={};
                  var f65t74={};
                  var f75p={};
                  var l18D1per={};
                  var f18t29D1per={};
                  var f30t39D1per={};
                  var f40t49D1per={};
                  var f50t64D1per={};
                  var f65t74D1per={};
                  var f75pD1per={};
                  var l18D1={};
                  var f18t29D1={};
                  var f30t39D1={};
                  var f40t49D1={};
                  var f50t64D1={};
                  var f65t74D1={};
                  var f75pD1={};
                  var l18D2per={};
                  var f18t29D2per={};
                  var f30t39D2per={};
                  var f40t49D2per={};
                  var f50t64D2per={};
                  var f65t74D2per={};
                  var f75pD2per={};
                  var l18D2={};
                  var f18t29D2={};
                  var f30t39D2={};
                  var f40t49D2={};
                  var f50t64D2={};
                  var f65t74D2={};
                  var f75pD2={};
                  var AD1={};
                  var AD2={};
                  var AD1Per={};
                  var AD2Per={};
                  var A={};
                  var Aper={};
                  var Ag={};



                 csv.forEach(function(d,i) {
                    name[d.id]=d.State;
                    total[d.id]=d.Administered;
                    per[d.id]=d.Administered/d.Popu;
                    l18per[d.id]=d.less18per;
                    f18t29per[d.id]=d.f18t29per;
                    f30t39per[d.id]=d.f30t39per;
                    f40t49per[d.id]=d.f40t49per;
                    f50t64per[d.id]=d.f50t64per;
                    f65t74per[d.id]=d.f65t74per;
                    f75pper[d.id]=d.f75pper;
                    l18[d.id]=d.less18;
                    f18t29[d.id]=d.f18t29;
                    f30t39[d.id]=d.f30t39;
                    f40t49[d.id]=d.f40t49;
                    f50t64[d.id]=d.f50t64;
                    f65t74[d.id]=d.f65t74;
                    f75p[d.id]=d.f75p;
                    l18D1per[d.id]=d.less18D1per	;
                    f18t29D1per[d.id]=d.f18t29D1per;
                    f30t39D1per[d.id]=d.f30t39D1per	;
                    f40t49D1per[d.id]=d.f40t49D1per;
                    f50t64D1per[d.id]=d.f50t64D1per;
                    f65t74D1per[d.id]=d.f65t74D1per;
                    f75pD1per[d.id]=d.f75pD1per;
                    l18D1[d.id]=d.less18D1;
                    f18t29D1[d.id]=d.f18t29D1;
                    f30t39D1[d.id]=d.f30t39D1;
                    f40t49D1[d.id]=d.f40t49D1;
                    f50t64D1[d.id]=d.f50t64D1;
                    f65t74D1[d.id]=d.f65t74D1;
                    f75pD1[d.id]=d.f75pD1;
                    l18D2per[d.id]=d.less18D2per;
                    f18t29D2per[d.id]=d.f18t29D2per;
                    f30t39D2per[d.id]=d.f30t39D2per;
                    f40t49D2per[d.id]=d.f40t49D2per;
                    f50t64D2per[d.id]=d.f50t64D2per;
                    f65t74D2per[d.id]=d.f65t74D2per;
                    f75pD2per[d.id]=d.f75pD2per;
                    l18D2[d.id]=d.less18D2;
                    f18t29D2[d.id]=d.f18t29D2;
                    f30t39D2[d.id]=d.f30t39D2;
                    f40t49D2[d.id]=d.f40t49D2;
                    f50t64D2[d.id]=d.f50t64D2;
                    f65t74D2[d.id]=d.f65t74D2;
                    f75pD2[d.id]=d.f75pD2;




                })
                per[36]=0.1682;


             if(total[State_id]>1000000){
                   Ag[0]="<18"
                   Ag[1]="18-29"
                   Ag[2]="30-39"
                   Ag[3]="40-49"
                   Ag[4]="50-64"
                   Ag[5]="65-74"
                   Ag[6]=">75"

                   AD1[0]=l18D1[State_id]/1000000;
                   AD1[1]=f18t29D1[State_id]/1000000;
                   AD1[2]=f30t39D1[State_id]/1000000;
                   AD1[3]=f40t49D1[State_id]/1000000;
                   AD1[4]=f50t64D1[State_id]/1000000;
                   AD1[5]=f65t74D1[State_id]/1000000;
                   AD1[6]=f75pD1[State_id]/1000000;

                    AD2[0]=l18D2[State_id]/1000000;
                    AD2[1]=f18t29D2[State_id]/1000000;
                    AD2[2]=f30t39D2[State_id]/1000000;
                    AD2[3]=f40t49D2[State_id]/1000000;
                    AD2[4]=f50t64D2[State_id]/1000000;
                    AD2[5]=f65t74D2[State_id]/1000000;
                    AD2[6]=f75pD2[State_id]/1000000;



                     A[0]= l18[State_id]/1000000;
                     A[1]=f18t29[State_id]/1000000;
                     A[2]=f30t39[State_id]/1000000;
                     A[3]=f40t49[State_id]/1000000;
                     A[4]=f50t64[State_id]/1000000;
                     A[5]=f65t74[State_id]/1000000;
                     A[6]= f75p[State_id]/1000000;



                    Aper[0]= l18per[State_id];
                    Aper[1]= f18t29per[State_id];
                   Aper[2]= f30t39per[State_id];
                   Aper[3]= f40t49per[State_id];
                   Aper[4]= f50t64per[State_id];
                   Aper[5]= f65t74per[State_id];
                   Aper[6]= f75pper[State_id];


                     AD1Per[0]=l18D1per[State_id];
                     AD1Per[1]=f18t29D1per[State_id];
                     AD1Per[2]=f30t39D1per[State_id];
                     AD1Per[3]=f40t49D1per[State_id];
                     AD1Per[4]=f50t64D1per[State_id];
                     AD1Per[5]=f65t74D1per[State_id];
                     AD1Per[6]=f75pD1per[State_id];

                     AD2Per[0]=l18D2per[State_id];
                     AD2Per[1]=f18t29D2per[State_id];
                     AD2Per[2]=f30t39D2per[State_id];
                     AD2Per[3]=f40t49D2per[State_id];
                     AD2Per[4]=f50t64D2per[State_id];
                     AD2Per[5]=f65t74D2per[State_id];
                     AD2Per[6]=f75pD2per[State_id];

                     statesvgTr2.append("text").attr("x", 80).attr("y", 50).text(name[State_id]+" Age Group wise  Covid-19 Vaccine Distribution").style("font-family", "Prompt").style("font-weight","500").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")


                     for (let i = 0,j=150,k=3; i < 7; i++,j=j+60,k=k-0.5) {

                     statesvgTr2.append('line').style("stroke", "black").style("stroke-width", 0.25).attr("x1", 100).attr("y1",j).attr("x2", 750).attr("y2",j);
                        statesvgTr2.append("text").attr("x", 60).attr("y", j).text(k+"M").style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
                     }



                                              for (let i = 0,j=0; i < 7; i++,j=j+90) {

                statesvgTr2.append("text").attr("x", 125+j).attr("y", 540).text(Ag[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")

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

                                                statesvgTr2.append("rect")
                                                         .attr("x", 125+j)
                                                         .attr("y",(3-ftr22(A[i]))*120+ 150)
                                                         .attr("height",ftr22(A[i])*120)
                                                         .attr("width", 50)
                                                         .style("stroke", "black")
                                                         .style("fill", "#808080")
                                                         .style("stroke-width", 0)
                                                         .style("fill", function(){

                                                                           if(i==0)
                                                                             return "#008ae6";
                                                                           if(i==1)
                                                                              return "#990099";
                                                                              if(i==2)
                                                                                 return "#cc33ff";
                                                                                 if(i==3)
                                                                                    return "#666633";
                                                                                    if(i==4)
                                                                                       return "#806000";
                                                                                       if(i==5)
                                                                                          return "#e68a00";
                                                                                          if(i==6)
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
                                                                                                 d3.select("#tooltipTr22").transition().text("Total Dose="+ftr2(A[i])+"M")
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

                                                                                                                           if(i==0)
                                                                                                                             return "#008ae6";
                                                                                                                           if(i==1)
                                                                                                                              return "#990099";
                                                                                                                              if(i==2)
                                                                                                                                 return "#cc33ff";
                                                                                                                                 if(i==3)
                                                                                                                                    return "#666633";
                                                                                                                                    if(i==4)
                                                                                                                                       return "#806000";
                                                                                                                                       if(i==5)
                                                                                                                                          return "#e68a00";
                                                                                                                                          if(i==6)
                                                                                                                                             return "#e60000";
                                                                                                                                           })
                                                                                                                                           d3.select("#tooltipTr21").style("visibility", "hidden");
                                                                                                                                           d3.select("#tooltipTr22").style("visibility", "hidden");
                                                                                                         return tooltipTr21.style("visibility", "hidden");

                                                                                                       })



                                                                                           statesvgTr2.append("rect")
                                                                                                    .attr("x", 125+j)
                                                                                                    .attr("y",(3-ftr22(AD1[i]))*120+ 150)
                                                                                                    .attr("height",ftr22(AD1[i])*120)
                                                                                                    .attr("width", 50)
                                                                                                    .style("stroke", "black")
                                                                                                    .style("fill", "#808080")
                                                                                                    .style("stroke-width", 0)
                                                                                                    .style("fill", function(){

                                                                                                                      if(i==0)
                                                                                                                        return "#99d6ff";
                                                                                                                      if(i==1)
                                                                                                                         return "#ff99ff";
                                                                                                                         if(i==2)
                                                                                                                            return "#df80ff";
                                                                                                                            if(i==3)
                                                                                                                               return "#d4d4aa";
                                                                                                                               if(i==4)
                                                                                                                                  return "#ffd24d";
                                                                                                                                  if(i==5)
                                                                                                                                     return "#ffc266";
                                                                                                                                     if(i==6)
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
                                                                                                                                            d3.select("#tooltipTr22").transition().text("Total Dose="+ftr2(A[i])+"M")
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

                                                                                                                                                                      if(i==0)
                                                                                                                                                                        return "#99d6ff";
                                                                                                                                                                      if(i==1)
                                                                                                                                                                         return "#ff99ff";
                                                                                                                                                                         if(i==2)
                                                                                                                                                                            return "#df80ff";
                                                                                                                                                                            if(i==3)
                                                                                                                                                                               return "#d4d4aa";
                                                                                                                                                                               if(i==4)
                                                                                                                                                                                  return "#ffd24d";
                                                                                                                                                                                  if(i==5)
                                                                                                                                                                                     return "#ffc266";
                                                                                                                                                                                     if(i==6)
                                                                                                                                                                                        return "#ff9999";
                                                                                                                                                                                      })
                                                                                                                                                                                      d3.select("#tooltipTr21").style("visibility", "hidden");
                                                                                                                                                                                      d3.select("#tooltipTr22").style("visibility", "hidden");
                                                                                                                                                    return tooltipTr21.style("visibility", "hidden");

                                                                                                                                                  })



                                                         }
                                                       }





              else if(total[State_id]<1000000 &&total[State_id]>600000){
                 Ag[0]="<18"
                 Ag[1]="18-29"
                 Ag[2]="30-39"
                 Ag[3]="40-49"
                 Ag[4]="50-64"
                 Ag[5]="65-74"
                 Ag[6]=">75"

                 AD1[0]=l18D1[State_id]/1000000;
                 AD1[1]=f18t29D1[State_id]/1000000;
                 AD1[2]=f30t39D1[State_id]/1000000;
                 AD1[3]=f40t49D1[State_id]/1000000;
                 AD1[4]=f50t64D1[State_id]/1000000;
                 AD1[5]=f65t74D1[State_id]/1000000;
                 AD1[6]=f75pD1[State_id]/1000000;

                  AD2[0]=l18D2[State_id]/1000000;
                  AD2[1]=f18t29D2[State_id]/1000000;
                  AD2[2]=f30t39D2[State_id]/1000000;
                  AD2[3]=f40t49D2[State_id]/1000000;
                  AD2[4]=f50t64D2[State_id]/1000000;
                  AD2[5]=f65t74D2[State_id]/1000000;
                  AD2[6]=f75pD2[State_id]/1000000;



                   A[0]= l18[State_id]/1000000;
                   A[1]=f18t29[State_id]/1000000;
                   A[2]=f30t39[State_id]/1000000;
                   A[3]=f40t49[State_id]/1000000;
                   A[4]=f50t64[State_id]/1000000;
                   A[5]=f65t74[State_id]/1000000;
                   A[6]= f75p[State_id]/1000000;



                  Aper[0]= l18per[State_id];
                  Aper[1]= f18t29per[State_id];
                 Aper[2]= f30t39per[State_id];
                 Aper[3]= f40t49per[State_id];
                 Aper[4]= f50t64per[State_id];
                 Aper[5]= f65t74per[State_id];
                 Aper[6]= f75pper[State_id];


                   AD1Per[0]=l18D1per[State_id];
                   AD1Per[1]=f18t29D1per[State_id];
                   AD1Per[2]=f30t39D1per[State_id];
                   AD1Per[3]=f40t49D1per[State_id];
                   AD1Per[4]=f50t64D1per[State_id];
                   AD1Per[5]=f65t74D1per[State_id];
                   AD1Per[6]=f75pD1per[State_id];

                   AD2Per[0]=l18D2per[State_id];
                   AD2Per[1]=f18t29D2per[State_id];
                   AD2Per[2]=f30t39D2per[State_id];
                   AD2Per[3]=f40t49D2per[State_id];
                   AD2Per[4]=f50t64D2per[State_id];
                   AD2Per[5]=f65t74D2per[State_id];
                   AD2Per[6]=f75pD2per[State_id];

                   statesvgTr2.append("text").attr("x", 80).attr("y", 50).text(name[State_id]+" Age Group wise  Covid-19 Vaccine Distribution").style("font-family", "Prompt").style("font-weight","500").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")


                   for (let i = 0,j=150,k=1.2; i < 7; i++,j=j+60,k=k-0.2) {

                   statesvgTr2.append('line').style("stroke", "black").style("stroke-width", 0.25).attr("x1", 100).attr("y1",j).attr("x2", 750).attr("y2",j);
                      statesvgTr2.append("text").attr("x", 60).attr("y", j).text(ftr21(k)+"M").style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
                   }



                                            for (let i = 0,j=0; i < 7; i++,j=j+90) {

statesvgTr2.append("text").attr("x", 125+j).attr("y", 540).text(Ag[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")

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

                                              statesvgTr2.append("rect")
                                                       .attr("x", 125+j)
                                                       .attr("y",(1.2-ftr22(A[i]))*300+ 150)
                                                       .attr("height",ftr22(A[i])*300)
                                                       .attr("width", 50)
                                                       .style("stroke", "black")
                                                       .style("fill", "#808080")
                                                       .style("stroke-width", 0)
                                                       .style("fill", function(){

                                                                         if(i==0)
                                                                           return "#008ae6";
                                                                         if(i==1)
                                                                            return "#990099";
                                                                            if(i==2)
                                                                               return "#cc33ff";
                                                                               if(i==3)
                                                                                  return "#666633";
                                                                                  if(i==4)
                                                                                     return "#806000";
                                                                                     if(i==5)
                                                                                        return "#e68a00";
                                                                                        if(i==6)
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
                                                                                               d3.select("#tooltipTr22").transition().text("Total Dose="+ftr2(A[i])+"M")
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

                                                                                                                         if(i==0)
                                                                                                                           return "#008ae6";
                                                                                                                         if(i==1)
                                                                                                                            return "#990099";
                                                                                                                            if(i==2)
                                                                                                                               return "#cc33ff";
                                                                                                                               if(i==3)
                                                                                                                                  return "#666633";
                                                                                                                                  if(i==4)
                                                                                                                                     return "#806000";
                                                                                                                                     if(i==5)
                                                                                                                                        return "#e68a00";
                                                                                                                                        if(i==6)
                                                                                                                                           return "#e60000";
                                                                                                                                         })
                                                                                                                                         d3.select("#tooltipTr21").style("visibility", "hidden");
                                                                                                                                         d3.select("#tooltipTr22").style("visibility", "hidden");
                                                                                                       return tooltipTr21.style("visibility", "hidden");

                                                                                                     })



                                                                                         statesvgTr2.append("rect")
                                                                                                  .attr("x", 125+j)
                                                                                                  .attr("y",(1.2-ftr22(AD1[i]))*300+ 150)
                                                                                                  .attr("height",ftr22(AD1[i])*300)
                                                                                                  .attr("width", 50)
                                                                                                  .style("stroke", "black")
                                                                                                  .style("fill", "#808080")
                                                                                                  .style("stroke-width", 0)
                                                                                                  .style("fill", function(){

                                                                                                                    if(i==0)
                                                                                                                      return "#99d6ff";
                                                                                                                    if(i==1)
                                                                                                                       return "#ff99ff";
                                                                                                                       if(i==2)
                                                                                                                          return "#df80ff";
                                                                                                                          if(i==3)
                                                                                                                             return "#d4d4aa";
                                                                                                                             if(i==4)
                                                                                                                                return "#ffd24d";
                                                                                                                                if(i==5)
                                                                                                                                   return "#ffc266";
                                                                                                                                   if(i==6)
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
                                                                                                                                          d3.select("#tooltipTr22").transition().text("Total Dose="+ftr2(A[i])+"M")
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

                                                                                                                                                                    if(i==0)
                                                                                                                                                                      return "#99d6ff";
                                                                                                                                                                    if(i==1)
                                                                                                                                                                       return "#ff99ff";
                                                                                                                                                                       if(i==2)
                                                                                                                                                                          return "#df80ff";
                                                                                                                                                                          if(i==3)
                                                                                                                                                                             return "#d4d4aa";
                                                                                                                                                                             if(i==4)
                                                                                                                                                                                return "#ffd24d";
                                                                                                                                                                                if(i==5)
                                                                                                                                                                                   return "#ffc266";
                                                                                                                                                                                   if(i==6)
                                                                                                                                                                                      return "#ff9999";
                                                                                                                                                                                    })
                                                                                                                                                                                    d3.select("#tooltipTr21").style("visibility", "hidden");
                                                                                                                                                                                    d3.select("#tooltipTr22").style("visibility", "hidden");
                                                                                                                                                  return tooltipTr21.style("visibility", "hidden");

                                                                                                                                                })



                                                       }
                                                     }

                                                     if(total[State_id]<600000 && total[State_id]>300000){
                                                      Ag[0]="<18"
                                                      Ag[1]="18-29"
                                                      Ag[2]="30-39"
                                                      Ag[3]="40-49"
                                                      Ag[4]="50-64"
                                                      Ag[5]="65-74"
                                                      Ag[6]=">75"

                                                      AD1[0]=l18D1[State_id]/1000;
                                                      AD1[1]=f18t29D1[State_id]/1000;
                                                      AD1[2]=f30t39D1[State_id]/1000;
                                                      AD1[3]=f40t49D1[State_id]/1000;
                                                      AD1[4]=f50t64D1[State_id]/1000;
                                                      AD1[5]=f65t74D1[State_id]/1000;
                                                      AD1[6]=f75pD1[State_id]/1000;

                                                       AD2[0]=l18D2[State_id]/1000;
                                                       AD2[1]=f18t29D2[State_id]/1000;
                                                       AD2[2]=f30t39D2[State_id]/1000;
                                                       AD2[3]=f40t49D2[State_id]/1000;
                                                       AD2[4]=f50t64D2[State_id]/1000;
                                                       AD2[5]=f65t74D2[State_id]/1000;
                                                       AD2[6]=f75pD2[State_id]/1000;



                                                        A[0]= l18[State_id]/1000;
                                                        A[1]=f18t29[State_id]/1000;
                                                        A[2]=f30t39[State_id]/1000;
                                                        A[3]=f40t49[State_id]/1000;
                                                        A[4]=f50t64[State_id]/1000;
                                                        A[5]=f65t74[State_id]/1000;
                                                        A[6]= f75p[State_id]/1000;



                                                       Aper[0]= l18per[State_id];
                                                       Aper[1]= f18t29per[State_id];
                                                      Aper[2]= f30t39per[State_id];
                                                      Aper[3]= f40t49per[State_id];
                                                      Aper[4]= f50t64per[State_id];
                                                      Aper[5]= f65t74per[State_id];
                                                      Aper[6]= f75pper[State_id];


                                                        AD1Per[0]=l18D1per[State_id];
                                                        AD1Per[1]=f18t29D1per[State_id];
                                                        AD1Per[2]=f30t39D1per[State_id];
                                                        AD1Per[3]=f40t49D1per[State_id];
                                                        AD1Per[4]=f50t64D1per[State_id];
                                                        AD1Per[5]=f65t74D1per[State_id];
                                                        AD1Per[6]=f75pD1per[State_id];

                                                        AD2Per[0]=l18D2per[State_id];
                                                        AD2Per[1]=f18t29D2per[State_id];
                                                        AD2Per[2]=f30t39D2per[State_id];
                                                        AD2Per[3]=f40t49D2per[State_id];
                                                        AD2Per[4]=f50t64D2per[State_id];
                                                        AD2Per[5]=f65t74D2per[State_id];
                                                        AD2Per[6]=f75pD2per[State_id];

                                                        statesvgTr2.append("text").attr("x", 80).attr("y", 50).text(name[State_id]+" Age Group wise  Covid-19 Vaccine Distribution").style("font-family", "Prompt").style("font-weight","500").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")


                                                        for (let i = 0,j=150,k=600; i < 7; i++,j=j+60,k=k-100) {

                                                        statesvgTr2.append('line').style("stroke", "black").style("stroke-width", 0.25).attr("x1", 100).attr("y1",j).attr("x2", 750).attr("y2",j);
                                                           statesvgTr2.append("text").attr("x", 60).attr("y", j).text(k+"K").style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
                                                        }



                                                                                 for (let i = 0,j=0; i < 7; i++,j=j+90) {

                                     statesvgTr2.append("text").attr("x", 125+j).attr("y", 540).text(Ag[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")

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

                                                                                   statesvgTr2.append("rect")
                                                                                            .attr("x", 125+j)
                                                                                            .attr("y",(600-ftr22(A[i]))*0.6+ 150)
                                                                                            .attr("height",ftr22(A[i])*0.6)
                                                                                            .attr("width", 50)
                                                                                            .style("stroke", "black")
                                                                                            .style("fill", "#808080")
                                                                                            .style("stroke-width", 0)
                                                                                            .style("fill", function(){

                                                                                                              if(i==0)
                                                                                                                return "#008ae6";
                                                                                                              if(i==1)
                                                                                                                 return "#990099";
                                                                                                                 if(i==2)
                                                                                                                    return "#cc33ff";
                                                                                                                    if(i==3)
                                                                                                                       return "#666633";
                                                                                                                       if(i==4)
                                                                                                                          return "#806000";
                                                                                                                          if(i==5)
                                                                                                                             return "#e68a00";
                                                                                                                             if(i==6)
                                                                                                                                return "#e60000";
                                                                                                                              })
                                                                                                                              .on("mouseover",function(){
                                                                                                                                d3.select(this).transition()
                                                                                                                                       .duration(100)
                                                                                                                                      .attr('opacity', '1')
                                                                                                                                      .style("fill","#2BF0CD")
                                                                                                                                      d3.select("#tooltipTr21").transition().text("2nd Dose="+ftr2(AD2[i])+"K")
                                                                                                                                                                    .style("left", (d3.event.pageX) + "px")
                                                                                                                                                                     .style("top", (d3.event.pageY) + "px");
                                                                                                                                    d3.select("#tooltipTr22").transition().text("Total Dose="+ftr2(A[i])+"K")
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

                                                                                                                                                              if(i==0)
                                                                                                                                                                return "#008ae6";
                                                                                                                                                              if(i==1)
                                                                                                                                                                 return "#990099";
                                                                                                                                                                 if(i==2)
                                                                                                                                                                    return "#cc33ff";
                                                                                                                                                                    if(i==3)
                                                                                                                                                                       return "#666633";
                                                                                                                                                                       if(i==4)
                                                                                                                                                                          return "#806000";
                                                                                                                                                                          if(i==5)
                                                                                                                                                                             return "#e68a00";
                                                                                                                                                                             if(i==6)
                                                                                                                                                                                return "#e60000";
                                                                                                                                                                              })
                                                                                                                                                                              d3.select("#tooltipTr21").style("visibility", "hidden");
                                                                                                                                                                              d3.select("#tooltipTr22").style("visibility", "hidden");
                                                                                                                                            return tooltipTr21.style("visibility", "hidden");

                                                                                                                                          })



                                                                                                                              statesvgTr2.append("rect")
                                                                                                                                       .attr("x", 125+j)
                                                                                                                                       .attr("y",(600-ftr22(AD1[i]))*0.6+ 150)
                                                                                                                                       .attr("height",ftr22(AD1[i])*0.6)
                                                                                                                                       .attr("width", 50)
                                                                                                                                       .style("stroke", "black")
                                                                                                                                       .style("fill", "#808080")
                                                                                                                                       .style("stroke-width", 0)
                                                                                                                                       .style("fill", function(){

                                                                                                                                                         if(i==0)
                                                                                                                                                           return "#99d6ff";
                                                                                                                                                         if(i==1)
                                                                                                                                                            return "#ff99ff";
                                                                                                                                                            if(i==2)
                                                                                                                                                               return "#df80ff";
                                                                                                                                                               if(i==3)
                                                                                                                                                                  return "#d4d4aa";
                                                                                                                                                                  if(i==4)
                                                                                                                                                                     return "#ffd24d";
                                                                                                                                                                     if(i==5)
                                                                                                                                                                        return "#ffc266";
                                                                                                                                                                        if(i==6)
                                                                                                                                                                           return "#ff9999";
                                                                                                                                                                         })
                                                                                                                                                                         .on("mouseover",function(){
                                                                                                                                                                           d3.select(this).transition()
                                                                                                                                                                                  .duration(100)
                                                                                                                                                                                 .attr('opacity', '1')
                                                                                                                                                                                 .style("fill","#2BF0CD")
                                                                                                                                                                                 d3.select("#tooltipTr21").transition().text("1st Dose="+ftr2(AD1[i])+"K")
                                                                                                                                                                                                               .style("left", (d3.event.pageX) + "px")
                                                                                                                                                                                                                .style("top", (d3.event.pageY) + "px");
                                                                                                                                                                               d3.select("#tooltipTr22").transition().text("Total Dose="+ftr2(A[i])+"K")
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

                                                                                                                                                                                                         if(i==0)
                                                                                                                                                                                                           return "#99d6ff";
                                                                                                                                                                                                         if(i==1)
                                                                                                                                                                                                            return "#ff99ff";
                                                                                                                                                                                                            if(i==2)
                                                                                                                                                                                                               return "#df80ff";
                                                                                                                                                                                                               if(i==3)
                                                                                                                                                                                                                  return "#d4d4aa";
                                                                                                                                                                                                                  if(i==4)
                                                                                                                                                                                                                     return "#ffd24d";
                                                                                                                                                                                                                     if(i==5)
                                                                                                                                                                                                                        return "#ffc266";
                                                                                                                                                                                                                        if(i==6)
                                                                                                                                                                                                                           return "#ff9999";
                                                                                                                                                                                                                         })
                                                                                                                                                                                                                         d3.select("#tooltipTr21").style("visibility", "hidden");
                                                                                                                                                                                                                         d3.select("#tooltipTr22").style("visibility", "hidden");
                                                                                                                                                                                       return tooltipTr21.style("visibility", "hidden");

                                                                                                                                                                                     })



                                                                                            }
                                                                                          }

                                                                                          if(total[State_id]<300000){
                                                                                           Ag[0]="<18"
                                                                                           Ag[1]="18-29"
                                                                                           Ag[2]="30-39"
                                                                                           Ag[3]="40-49"
                                                                                           Ag[4]="50-64"
                                                                                           Ag[5]="65-74"
                                                                                           Ag[6]=">75"

                                                                                           AD1[0]=l18D1[State_id]/1000;
                                                                                           AD1[1]=f18t29D1[State_id]/1000;
                                                                                           AD1[2]=f30t39D1[State_id]/1000;
                                                                                           AD1[3]=f40t49D1[State_id]/1000;
                                                                                           AD1[4]=f50t64D1[State_id]/1000;
                                                                                           AD1[5]=f65t74D1[State_id]/1000;
                                                                                           AD1[6]=f75pD1[State_id]/1000;

                                                                                            AD2[0]=l18D2[State_id]/1000;
                                                                                            AD2[1]=f18t29D2[State_id]/1000;
                                                                                            AD2[2]=f30t39D2[State_id]/1000;
                                                                                            AD2[3]=f40t49D2[State_id]/1000;
                                                                                            AD2[4]=f50t64D2[State_id]/1000;
                                                                                            AD2[5]=f65t74D2[State_id]/1000;
                                                                                            AD2[6]=f75pD2[State_id]/1000;



                                                                                             A[0]= l18[State_id]/1000;
                                                                                             A[1]=f18t29[State_id]/1000;
                                                                                             A[2]=f30t39[State_id]/1000;
                                                                                             A[3]=f40t49[State_id]/1000;
                                                                                             A[4]=f50t64[State_id]/1000;
                                                                                             A[5]=f65t74[State_id]/1000;
                                                                                             A[6]= f75p[State_id]/1000;



                                                                                            Aper[0]= l18per[State_id];
                                                                                            Aper[1]= f18t29per[State_id];
                                                                                           Aper[2]= f30t39per[State_id];
                                                                                           Aper[3]= f40t49per[State_id];
                                                                                           Aper[4]= f50t64per[State_id];
                                                                                           Aper[5]= f65t74per[State_id];
                                                                                           Aper[6]= f75pper[State_id];


                                                                                             AD1Per[0]=l18D1per[State_id];
                                                                                             AD1Per[1]=f18t29D1per[State_id];
                                                                                             AD1Per[2]=f30t39D1per[State_id];
                                                                                             AD1Per[3]=f40t49D1per[State_id];
                                                                                             AD1Per[4]=f50t64D1per[State_id];
                                                                                             AD1Per[5]=f65t74D1per[State_id];
                                                                                             AD1Per[6]=f75pD1per[State_id];

                                                                                             AD2Per[0]=l18D2per[State_id];
                                                                                             AD2Per[1]=f18t29D2per[State_id];
                                                                                             AD2Per[2]=f30t39D2per[State_id];
                                                                                             AD2Per[3]=f40t49D2per[State_id];
                                                                                             AD2Per[4]=f50t64D2per[State_id];
                                                                                             AD2Per[5]=f65t74D2per[State_id];
                                                                                             AD2Per[6]=f75pD2per[State_id];

                                                                                             statesvgTr2.append("text").attr("x", 80).attr("y", 50).text(name[State_id]+" Age Group wise  Covid-19 Vaccine Distribution").style("font-family", "Prompt").style("font-weight","500").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")


                                                                                             for (let i = 0,j=150,k=300; i < 7; i++,j=j+60,k=k-50) {

                                                                                             statesvgTr2.append('line').style("stroke", "black").style("stroke-width", 0.25).attr("x1", 100).attr("y1",j).attr("x2", 750).attr("y2",j);
                                                                                                statesvgTr2.append("text").attr("x", 60).attr("y", j).text(k+"K").style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
                                                                                             }



                                                                                                                      for (let i = 0,j=0; i < 7; i++,j=j+90) {

                                                                          statesvgTr2.append("text").attr("x", 125+j).attr("y", 540).text(Ag[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")

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

                                                                                                                        statesvgTr2.append("rect")
                                                                                                                                 .attr("x", 125+j)
                                                                                                                                 .attr("y",(300-ftr22(A[i]))*1.2+ 150)
                                                                                                                                 .attr("height",ftr22(A[i])*1.2)
                                                                                                                                 .attr("width", 50)
                                                                                                                                 .style("stroke", "black")
                                                                                                                                 .style("fill", "#808080")
                                                                                                                                 .style("stroke-width", 0)
                                                                                                                                 .style("fill", function(){

                                                                                                                                                   if(i==0)
                                                                                                                                                     return "#008ae6";
                                                                                                                                                   if(i==1)
                                                                                                                                                      return "#990099";
                                                                                                                                                      if(i==2)
                                                                                                                                                         return "#cc33ff";
                                                                                                                                                         if(i==3)
                                                                                                                                                            return "#666633";
                                                                                                                                                            if(i==4)
                                                                                                                                                               return "#806000";
                                                                                                                                                               if(i==5)
                                                                                                                                                                  return "#e68a00";
                                                                                                                                                                  if(i==6)
                                                                                                                                                                     return "#e60000";
                                                                                                                                                                   })
                                                                                                                                                                   .on("mouseover",function(){
                                                                                                                                                                     d3.select(this).transition()
                                                                                                                                                                            .duration(100)
                                                                                                                                                                           .attr('opacity', '1')
                                                                                                                                                                           .style("fill","#2BF0CD")
                                                                                                                                                                           d3.select("#tooltipTr21").transition().text("2nd Dose="+ftr2(AD2[i])+"K")
                                                                                                                                                                                                         .style("left", (d3.event.pageX) + "px")
                                                                                                                                                                                                          .style("top", (d3.event.pageY) + "px");
                                                                                                                                                                         d3.select("#tooltipTr22").transition().text("Total Dose="+ftr2(A[i])+"K")
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

                                                                                                                                                                                                   if(i==0)
                                                                                                                                                                                                     return "#008ae6";
                                                                                                                                                                                                   if(i==1)
                                                                                                                                                                                                      return "#990099";
                                                                                                                                                                                                      if(i==2)
                                                                                                                                                                                                         return "#cc33ff";
                                                                                                                                                                                                         if(i==3)
                                                                                                                                                                                                            return "#666633";
                                                                                                                                                                                                            if(i==4)
                                                                                                                                                                                                               return "#806000";
                                                                                                                                                                                                               if(i==5)
                                                                                                                                                                                                                  return "#e68a00";
                                                                                                                                                                                                                  if(i==6)
                                                                                                                                                                                                                     return "#e60000";
                                                                                                                                                                                                                   })
                                                                                                                                                                                                                   d3.select("#tooltipTr21").style("visibility", "hidden");
                                                                                                                                                                                                                   d3.select("#tooltipTr22").style("visibility", "hidden");
                                                                                                                                                                                 return tooltipTr21.style("visibility", "hidden");

                                                                                                                                                                               })



                                                                                                                                                                   statesvgTr2.append("rect")
                                                                                                                                                                            .attr("x", 125+j)
                                                                                                                                                                            .attr("y",(300-ftr22(AD1[i]))*1.2+ 150)
                                                                                                                                                                            .attr("height",ftr22(AD1[i])*1.2)
                                                                                                                                                                            .attr("width", 50)
                                                                                                                                                                            .style("stroke", "black")
                                                                                                                                                                            .style("fill", "#808080")
                                                                                                                                                                            .style("stroke-width", 0)
                                                                                                                                                                            .style("fill", function(){

                                                                                                                                                                                              if(i==0)
                                                                                                                                                                                                return "#99d6ff";
                                                                                                                                                                                              if(i==1)
                                                                                                                                                                                                 return "#ff99ff";
                                                                                                                                                                                                 if(i==2)
                                                                                                                                                                                                    return "#df80ff";
                                                                                                                                                                                                    if(i==3)
                                                                                                                                                                                                       return "#d4d4aa";
                                                                                                                                                                                                       if(i==4)
                                                                                                                                                                                                          return "#ffd24d";
                                                                                                                                                                                                          if(i==5)
                                                                                                                                                                                                             return "#ffc266";
                                                                                                                                                                                                             if(i==6)
                                                                                                                                                                                                                return "#ff9999";
                                                                                                                                                                                                              })
                                                                                                                                                                                                              .on("mouseover",function(){
                                                                                                                                                                                                                d3.select(this).transition()
                                                                                                                                                                                                                       .duration(100)
                                                                                                                                                                                                                      .attr('opacity', '1')
                                                                                                                                                                                                                      .style("fill","#2BF0CD")
                                                                                                                                                                                                                      d3.select("#tooltipTr21").transition().text("1st Dose="+ftr2(AD1[i])+"K")
                                                                                                                                                                                                                                                    .style("left", (d3.event.pageX) + "px")
                                                                                                                                                                                                                                                     .style("top", (d3.event.pageY) + "px");
                                                                                                                                                                                                                    d3.select("#tooltipTr22").transition().text("Total Dose="+ftr2(A[i])+"K")
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

                                                                                                                                                                                                                                              if(i==0)
                                                                                                                                                                                                                                                return "#99d6ff";
                                                                                                                                                                                                                                              if(i==1)
                                                                                                                                                                                                                                                 return "#ff99ff";
                                                                                                                                                                                                                                                 if(i==2)
                                                                                                                                                                                                                                                    return "#df80ff";
                                                                                                                                                                                                                                                    if(i==3)
                                                                                                                                                                                                                                                       return "#d4d4aa";
                                                                                                                                                                                                                                                       if(i==4)
                                                                                                                                                                                                                                                          return "#ffd24d";
                                                                                                                                                                                                                                                          if(i==5)
                                                                                                                                                                                                                                                             return "#ffc266";
                                                                                                                                                                                                                                                             if(i==6)
                                                                                                                                                                                                                                                                return "#ff9999";
                                                                                                                                                                                                                                                              })
                                                                                                                                                                                                                                                              d3.select("#tooltipTr21").style("visibility", "hidden");
                                                                                                                                                                                                                                                              d3.select("#tooltipTr22").style("visibility", "hidden");
                                                                                                                                                                                                                            return tooltipTr21.style("visibility", "hidden");

                                                                                                                                                                                                                          })



                                                                                                                                 }
                                                                                                                               }

                                                                                          var myimage = statesvgTr2.append('image')
                                                                                                           .attr('xlink:href', 'img1.png')
                                                                                                          .attr('width', 1000)
                                                                                                          .attr('height', 150)
                                                                                                          .attr("x", 765)
                                                                                                          .attr("y",100)

                                                                statesvgTr2.append("rect")
                                                                         .attr("x", 1200)
                                                                         .attr("y",150)
                                                                         .attr("height",50)
                                                                         .attr("width", 600*per[State_id])
                                                                         .style("stroke", "black")
                                                                         .style("fill", "#b3ffda")
                                                                         .style("stroke-width", 0)
                                                                         .on("mouseover",function(){
                                                                           d3.select(this).transition()
                                                                                  .duration(100)
                                                                                 .attr('opacity', '1')
                                                                                 .style("fill","#2BF0CD")
                                                                                 d3.select("#tooltipTr21").transition().text("Out of Total Population")
                                                                                                               .style("left", (d3.event.pageX) + "px")
                                                                                                                .style("top", (d3.event.pageY) + "px");
                                                                               d3.select("#tooltipTr22").transition().text("people vaccinated are "+ftr2(100*per[State_id])+"%")
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
                                                                                       .style("fill", "#b3ffda")

                                                                                                                         d3.select("#tooltipTr21").style("visibility", "hidden");
                                                                                                                         d3.select("#tooltipTr22").style("visibility", "hidden");
                                                                                       return tooltipTr21.style("visibility", "hidden");

                                                                                     })

                                                                         statesvgTr2.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1", 1200).attr("y1",200).attr("x2", 1000).attr("y2",300);
                                                                         statesvgTr2.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1",1200+600*per[State_id]).attr("y1",200).attr("x2", 1600).attr("y2",300);





                                                                         var xp={}
                                                                         xp=0;



                                                                       for (let i = 0; i < 8; i++) {

                                                                         statesvgTr2.append("rect")
                                                                                  .attr("x", 1000+xp)
                                                                                  .attr("y",300)
                                                                                  .attr("height",50)
                                                                                  .attr("width", 600*Aper[i])
                                                                                  .style("stroke", "black")
                                                                                  .style("fill", function(){

                                                                                                    if(i==0)
                                                                                                      return "#008ae6";
                                                                                                    if(i==1)
                                                                                                       return "#990099";
                                                                                                       if(i==2)
                                                                                                          return "#cc33ff";
                                                                                                          if(i==3)
                                                                                                             return "#666633";
                                                                                                             if(i==4)
                                                                                                                return "#806000";
                                                                                                                if(i==5)
                                                                                                                   return "#e68a00";
                                                                                                                   if(i==6)
                                                                                                                      return "#e60000";
                                                                                                                    })
                                                                                  .style("stroke-width", 0)
                                                                                  .on("mouseover",function(){
                                                                                    d3.select(this).transition()
                                                                                           .duration(100)
                                                                                          .attr('opacity', '1')
                                                                                          .style("fill","#2BF0CD")
                                                                                          d3.select("#tooltipTr21").transition().text("Age group "+Ag[i])
                                                                                                                        .style("left", (d3.event.pageX) + "px")
                                                                                                                         .style("top", (d3.event.pageY) + "px");
                                                                                        d3.select("#tooltipTr22").transition().text("vaccinations are "+ftr2(100*Aper[i])+"%")
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

                                                                                                                  if(i==0)
                                                                                                                    return "#008ae6";
                                                                                                                  if(i==1)
                                                                                                                     return "#990099";
                                                                                                                     if(i==2)
                                                                                                                        return "#cc33ff";
                                                                                                                        if(i==3)
                                                                                                                           return "#666633";
                                                                                                                           if(i==4)
                                                                                                                              return "#806000";
                                                                                                                              if(i==5)
                                                                                                                                 return "#e68a00";
                                                                                                                                 if(i==6)
                                                                                                                                    return "#e60000";
                                                                                                                                  })


                                                                                                                                  d3.select("#tooltipTr21").style("visibility", "hidden");
                                                                                                                                  d3.select("#tooltipTr22").style("visibility", "hidden");
                                                                                                return tooltipTr21.style("visibility", "hidden");

                                                                                              })

                                                                                xp=xp+Aper[i]*600;

                                                                                }

                                                                                var xp1={}
                                                                                xp1=0;
                                                                                xp=0;

                                                                                statesvgTr2.append("text").attr("x", 80).attr("y", 200).text("").style("font-family", "Prompt").style("font-weight","700").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")


                                                                                for (let i = 0,j=0; i < 8; i++,j=j+120) {

                                                                                  statesvgTr2.append("rect")
                                                                                           .attr("x", 900+j)
                                                                                           .attr("y",450)
                                                                                           .attr("height",50)
                                                                                           .attr("width", 100*AD1Per[i])
                                                                                           .style("stroke", "black")
                                                                                           .style("fill", function(){

                                                                                                             if(i==0)
                                                                                                               return "#99d6ff";
                                                                                                             if(i==1)
                                                                                                                return "#ff99ff";
                                                                                                                if(i==2)
                                                                                                                   return "#df80ff";
                                                                                                                   if(i==3)
                                                                                                                      return "#d4d4aa";
                                                                                                                      if(i==4)
                                                                                                                         return "#ffd24d";
                                                                                                                         if(i==5)
                                                                                                                            return "#ffc266";
                                                                                                                            if(i==6)
                                                                                                                               return "#ff9999";
                                                                                                                             })
                                                                                           .style("stroke-width", 0)
                                                                                           .on("mouseover",function(){
                                                                                             d3.select(this).transition()
                                                                                                    .duration(100)
                                                                                                   .attr('opacity', '1')
                                                                                                   .style("fill","#2BF0CD")
                                                                                                   d3.select("#tooltipTr21").transition().text("In Age group "+Ag[i]+" 1st Dose")
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

                                                                                                                           if(i==0)
                                                                                                                             return "#99d6ff";
                                                                                                                           if(i==1)
                                                                                                                              return "#ff99ff";
                                                                                                                              if(i==2)
                                                                                                                                 return "#df80ff";
                                                                                                                                 if(i==3)
                                                                                                                                    return "#d4d4aa";
                                                                                                                                    if(i==4)
                                                                                                                                       return "#ffd24d";
                                                                                                                                       if(i==5)
                                                                                                                                          return "#ffc266";
                                                                                                                                          if(i==6)
                                                                                                                                             return "#ff9999";
                                                                                                                                           })


                                                                                                                                           d3.select("#tooltipTr21").style("visibility", "hidden");
                                                                                                                                           d3.select("#tooltipTr22").style("visibility", "hidden");
                                                                                                         return tooltipTr21.style("visibility", "hidden");

                                                                                                       })

                                                                                          xp1=xp1+100*AD1Per[i];

                                                                                           statesvgTr2.append("rect")
                                                                                                    .attr("x", 900+j+xp1)
                                                                                                    .attr("y",450)
                                                                                                    .attr("height",50)
                                                                                                    .attr("width", 100*AD2Per[i])
                                                                                                    .style("stroke", "black")
                                                                                                    .style("fill", function(){

                                                                                                                      if(i==0)
                                                                                                                        return "#008ae6";
                                                                                                                      if(i==1)
                                                                                                                         return "#990099";
                                                                                                                         if(i==2)
                                                                                                                            return "#cc33ff";
                                                                                                                            if(i==3)
                                                                                                                               return "#666633";
                                                                                                                               if(i==4)
                                                                                                                                  return "#806000";
                                                                                                                                  if(i==5)
                                                                                                                                     return "#e68a00";
                                                                                                                                     if(i==6)
                                                                                                                                        return "#e60000";
                                                                                                                                      })
                                                                                                    .style("stroke-width", 0)
                                                                                                    .on("mouseover",function(){
                                                                                                      d3.select(this).transition()
                                                                                                             .duration(100)
                                                                                                            .attr('opacity', '1')
                                                                                                            .style("fill","#2BF0CD")
                                                                                                            d3.select("#tooltipTr21").transition().text("In Age group "+Ag[i]+" 2nd Dose")
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

                                                                                                                                    if(i==0)
                                                                                                                                      return "#008ae6";
                                                                                                                                    if(i==1)
                                                                                                                                       return "#990099";
                                                                                                                                       if(i==2)
                                                                                                                                          return "#cc33ff";
                                                                                                                                          if(i==3)
                                                                                                                                             return "#666633";
                                                                                                                                             if(i==4)
                                                                                                                                                return "#806000";
                                                                                                                                                if(i==5)
                                                                                                                                                   return "#e68a00";
                                                                                                                                                   if(i==6)
                                                                                                                                                      return "#e60000";
                                                                                                                                                    })


                                                                                                                                                    d3.select("#tooltipTr21").style("visibility", "hidden");
                                                                                                                                                    d3.select("#tooltipTr22").style("visibility", "hidden");
                                                                                                                  return tooltipTr21.style("visibility", "hidden");

                                                                                                                })

                                                                                                    if(i<7){

                                                                                                    statesvgTr2.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1", 1000+xp).attr("y1",350).attr("x2",900+j).attr("y2",450);
                                                                                                    statesvgTr2.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1",1000+xp+600*Aper[i]).attr("y1",350).attr("x2", 900+j+xp1+100*AD2Per[i]).attr("y2",450);
                                                                                                      }
                                                                                                    xp1=0;
                                                                                                    xp=xp+Aper[i]*600;

                                                                                         }



                                                     });
