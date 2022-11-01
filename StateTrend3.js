var statesvgTr3 = d3.select("#svgStatetrend3");


statesvgTr3.append("rect")
         .attr("x", 0)
         .attr("y", 0)
         .attr("height", 600)
         .attr("width", 1800)
         .style("stroke", "black")
         .style("fill", "none")
         .style("stroke-width", 0.25);

             var ftr3 = d3.format(".2f");
             var ftr31 = d3.format(".1f");



             d3.csv("https://raw.githubusercontent.com/RohitKher/datafiles/main/StateRace.csv", function(csv){
                  console.log(csv)
                  var  name={};
                  var  Administered={};
                  var per={};
                  var  Whiteper={};
                  var  Blackper={};
                  var  Hispanicper={};
                  var  Asianper={};
                  var  American__Indian_AlaskaNativeper={};
                  var  Native__Hawaiian_Pacific_Islanderper={};
                  var  Otherper={};
                  var  White={};
                  var  Black={};
                  var  Hispanic={};
                  var  Asian={};
                  var  American__Indian_AlaskaNative={};
                  var  Native__Hawaiian_Pacific_Islander={};
                  var  Other={};
                  var  WhiteD1per={};
                  var  BlackD1per={};
                  var  HispanicD1per={};
                  var  AsianD1per={};
                  var  American__Indian_AlaskaNativeD1per={};
                  var  Native__Hawaiian_Pacific_IslanderD1per={};
                  var  OtherD1per={};
                  var  WhiteD1={};
                  var  BlackD1={};
                  var  HispanicD1={};
                  var  AsianD1={};
                  var  American__Indian_AlaskaNativeD1={};
                  var  Native__Hawaiian_Pacific_IslanderD1={};
                  var  OtherD1={};
                  var  WhiteD2per={};
                  var  BlackD2per={};
                  var  HispanicD2per={};
                  var  AsianD2per={};
                  var  American__Indian_AlaskaNativeD2per={};
                  var  Native__Hawaiian_Pacific_IslanderD2per={};
                  var  OtherD2per={};
                  var  WhiteD2={};
                  var  BlackD2={};
                  var  HispanicD2={};
                  var  AsianD2={};
                  var  American__Indian_AlaskaNativeD2={};
                  var  Native__Hawaiian_Pacific_IslanderD2={};
                  var  OtherD2={};

                  var RD1={};
                  var RD2={};

                  var RL1={};
                  var RL2={};
                  var RL3={};
                  var RL4={};
                  var RL5={};

                  var Rper={};
                  var RD1Per={};
                  var RD2Per={};
                  var R={};



                 csv.forEach(function(d,i) {
                   name[d.id]=d.State;
                   Administered[d.id]=d.Administered;
                   per[d.id]=d.Administered/d.Popu;
                   Whiteper[d.id]=d.Whiteper;
                   Blackper[d.id]=d.Blackper;
                   Hispanicper[d.id]=d.Hispanicper;
                   Asianper[d.id]=d.Asianper;
                   American__Indian_AlaskaNativeper[d.id]=d.American__Indian_AlaskaNativeper;
                   Native__Hawaiian_Pacific_Islanderper[d.id]=d.Native__Hawaiian_Pacific_Islanderper;
                   Otherper[d.id]=d.Otherper;
                   White[d.id]=d.White;
                   Black[d.id]=d.Black;
                   Hispanic[d.id]=d.Hispanic;
                   Asian[d.id]=d.Asian;
                   American__Indian_AlaskaNative[d.id]=d.American__Indian_AlaskaNative;
                   Native__Hawaiian_Pacific_Islander[d.id]=d.Native__Hawaiian_Pacific_Islander;
                   Other[d.id]=d.Other;
                   WhiteD1per[d.id]=d.WhiteD1per;
                   BlackD1per[d.id]=d.BlackD1per;
                   HispanicD1per[d.id]=d.HispanicD1per;
                   AsianD1per[d.id]=d.AsianD1per;
                   American__Indian_AlaskaNativeD1per[d.id]=d.American__Indian_AlaskaNativeD1per;
                   Native__Hawaiian_Pacific_IslanderD1per[d.id]=d.Native__Hawaiian_Pacific_IslanderD1per;
                   OtherD1per[d.id]=d.OtherD1per;
                   WhiteD1[d.id]=d.WhiteD1;
                   BlackD1[d.id]=d.BlackD1;
                   HispanicD1[d.id]=d.HispanicD1;
                   AsianD1[d.id]=d.AsianD1;
                   American__Indian_AlaskaNativeD1[d.id]=d.American__Indian_AlaskaNativeD1;
                   Native__Hawaiian_Pacific_IslanderD1[d.id]=d.Native__Hawaiian_Pacific_IslanderD1;
                   OtherD1[d.id]=d.OtherD1;
                   WhiteD2per[d.id]=d.WhiteD2per;
                   BlackD2per[d.id]=d.BlackD2per;
                   HispanicD2per[d.id]=d.HispanicD2per;
                   AsianD2per[d.id]=d.AsianD2per;
                   American__Indian_AlaskaNativeD2per[d.id]=d.American__Indian_AlaskaNativeD2per;
                   Native__Hawaiian_Pacific_IslanderD2per[d.id]=d.Native__Hawaiian_Pacific_IslanderD2per;
                   OtherD2per[d.id]=d.OtherD2per;
                   WhiteD2[d.id]=d.WhiteD2;
                   BlackD2[d.id]=d.BlackD2;
                   HispanicD2[d.id]=d.HispanicD2;
                   AsianD2[d.id]=d.AsianD2;
                   American__Indian_AlaskaNativeD2[d.id]=d.American__Indian_AlaskaNativeD2;
                   Native__Hawaiian_Pacific_IslanderD2[d.id]=d.Native__Hawaiian_Pacific_IslanderD2;
                   OtherD2[d.id]=d.OtherD2;

                })

                per[36]=0.1682;

                  if(Administered[State_id]>1000000){
                statesvgTr3.append("text").attr("x", 80).attr("y", 50).text(name[State_id]+" Race wise Covid-19 Vaccine Distribution").style("font-family", "Prompt").style("font-weight","500").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")



                RD1[0]=WhiteD1[State_id]/1000000;
                RD1[1]=BlackD1[State_id]/1000000;
                RD1[2]=HispanicD1[State_id]/1000000;
                RD1[3]=AsianD1[State_id]/1000000;
                RD1[4]=American__Indian_AlaskaNativeD1[State_id]/1000000;
                RD1[5]=Native__Hawaiian_Pacific_IslanderD1[State_id]/1000000;
                RD1[6]=OtherD1[State_id]/1000000;


                 RD2[0] =WhiteD2[State_id]/1000000;
                 RD2[1] =BlackD2[State_id]/1000000;
                 RD2[2] =HispanicD2[State_id]/1000000;
                 RD2[3] =AsianD2[State_id]/1000000;
                 RD2[4] =American__Indian_AlaskaNativeD2[State_id]/1000000;
                 RD2[5] =Native__Hawaiian_Pacific_IslanderD2[State_id]/1000000;
                 RD2[6] =OtherD2[State_id]/1000000;




                  R[0]=White[State_id]/1000000;
                  R[1]=Black[State_id]/1000000;
                  R[2]=Hispanic[State_id]/1000000;
                  R[3]=Asian[State_id]/1000000;
                  R[4]=American__Indian_AlaskaNative[State_id]/1000000;
                  R[5]=Native__Hawaiian_Pacific_Islander[State_id]/1000000;
                  R[6]=Other[State_id]/1000000;

                  RL1[0]="Hispanic/";
                  RL1[1]="White";
                  RL1[2]="American";
                  RL1[3]="Asian";
                  RL1[4]="Black";
                  RL1[5]="Native";
                  RL1[6]="Multiple/";

                  RL2[0]="Latino";
                  RL2[1]="Non-Hispanic";
                  RL2[2]="Indian/";
                  RL2[3]="Non-Hispanic";
                  RL2[4]="Non-Hispanic";
                  RL2[5]="Hawaiian/";
                  RL2[6]="Other";

                  RL3[0]="";
                  RL3[1]="";
                  RL3[2]="Alaska";
                  RL3[3]="";
                  RL3[4]="";
                  RL3[5]="Other Pacific";
                  RL3[6]="Non-Hispanic";

                  RL4[0]="";
                  RL4[1]="";
                  RL4[2]="Native";
                  RL4[3]= "";
                  RL4[4]="";
                  RL4[5]="Islander";
                  RL4[5]="";

                  RL5[0]="";
                  RL5[1]="";
                  RL5[2]="Non-Hispanic";
                  RL5[3]="";
                  RL5[4]="";
                  RL5[5]="Non-Hispanic";
                  RL5[6]="";

                  Rper[0]=Whiteper[State_id];
                  Rper[1]=Blackper[State_id];
                  Rper[2]=Hispanicper[State_id];
                  Rper[3]=Asianper[State_id];
                  Rper[4]=American__Indian_AlaskaNativeper[State_id];
                  Rper[5]=Native__Hawaiian_Pacific_Islanderper[State_id];
                  Rper[6]=Otherper[State_id];


                  RD1Per[0]=WhiteD1per[State_id];
                  RD1Per[1]=BlackD1per[State_id];
                  RD1Per[2]=HispanicD1per[State_id];
                  RD1Per[3]=AsianD1per[State_id];
                  RD1Per[4]=American__Indian_AlaskaNativeD1per[State_id];
                  RD1Per[5]=Native__Hawaiian_Pacific_IslanderD1per[State_id];
                  RD1Per[6]=OtherD1per[State_id];


                  RD2Per[0]=WhiteD2per[State_id];
                  RD2Per[1]=BlackD2per[State_id];
                  RD2Per[2]=HispanicD2per[State_id];
                  RD2Per[3]=AsianD2per[State_id];
                  RD2Per[4]=American__Indian_AlaskaNativeD2per[State_id];
                  RD2Per[5]=Native__Hawaiian_Pacific_IslanderD2per[State_id];
                  RD2Per[6]=OtherD2per[State_id];

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

                 for (let i = 1,j=120,k=3; i < 8; i++,j=j+60,k=k-0.5) {

                 statesvgTr3.append('line').style("stroke", "black").style("stroke-width", 0.25).attr("x1", 100).attr("y1",j).attr("x2", 800).attr("y2",j);
                    statesvgTr3.append("text").attr("x", 60).attr("y", j).text(k+"M").style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
                 }

                for (let i = 0,j=0; i < 7; i++,j=j+100) {

statesvgTr3.append("text").attr("x", 130+j).attr("y", 500).text(RL1[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
statesvgTr3.append("text").attr("x", 130+j).attr("y", 500+18).text(RL2[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
statesvgTr3.append("text").attr("x", 130+j).attr("y", 500+18*2).text(RL3[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
statesvgTr3.append("text").attr("x", 130+j).attr("y", 500+18*3).text(RL4[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
statesvgTr3.append("text").attr("x", 130+j).attr("y", 500+18*4).text(RL5[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")


                statesvgTr3.append("rect")
                         .attr("x", 130+j)
                         .attr("y",(3-ftr3(R[i]))*120+ 119)
                         .attr("height",ftr3(R[i])*120)
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
                                                                   d3.select("#tooltipTr31").transition().text("2nd Dose="+ftr2(RD2[i])+"M")
                                                                                                 .style("left", (d3.event.pageX) + "px")
                                                                                                  .style("top", (d3.event.pageY) + "px");
                                                                 d3.select("#tooltipTr32").transition().text("Total Dose="+ftr2(R[i])+"M")
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
                                                                                                           d3.select("#tooltipTr31").style("visibility", "hidden");
                                                                                                           d3.select("#tooltipTr32").style("visibility", "hidden");

                                                                         return tooltipTr31.style("visibility", "hidden");

                                                                       })



                                                           statesvgTr3.append("rect")
                                                                    .attr("x", 130+j)
                                                                    .attr("y",(3-ftr3(RD1[i]))*120+ 119)
                                                                    .attr("height",ftr3(RD1[i])*120)
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
                                                                                                              d3.select("#tooltipTr31").transition().text("1st Dose="+ftr2(RD1[i])+"M")
                                                                                                                                            .style("left", (d3.event.pageX) + "px")
                                                                                                                                             .style("top", (d3.event.pageY) + "px");
                                                                                                            d3.select("#tooltipTr32").transition().text("Total Dose="+ftr2(R[i])+"M")
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
                                                                                                                                                      d3.select("#tooltipTr31").style("visibility", "hidden");
                                                                                                                                                      d3.select("#tooltipTr32").style("visibility", "hidden");
                                                                                                                    return tooltipTr31.style("visibility", "hidden");

                                                                                                                  })

                                                                                                                }
                                                                                                              }

                                                                                                              if(Administered[State_id]<1000000 && Administered[State_id]>600000 ){
                                                                                                            statesvgTr3.append("text").attr("x", 80).attr("y", 50).text(name[State_id]+" Race wise Covid-19 Vaccine Distribution").style("font-family", "Prompt").style("font-weight","500").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")



                                                                                                            RD1[0]=WhiteD1[State_id]/1000000;
                                                                                                            RD1[1]=BlackD1[State_id]/1000000;
                                                                                                            RD1[2]=HispanicD1[State_id]/1000000;
                                                                                                            RD1[3]=AsianD1[State_id]/1000000;
                                                                                                            RD1[4]=American__Indian_AlaskaNativeD1[State_id]/1000000;
                                                                                                            RD1[5]=Native__Hawaiian_Pacific_IslanderD1[State_id]/1000000;
                                                                                                            RD1[6]=OtherD1[State_id]/1000000;


                                                                                                             RD2[0] =WhiteD2[State_id]/1000000;
                                                                                                             RD2[1] =BlackD2[State_id]/1000000;
                                                                                                             RD2[2] =HispanicD2[State_id]/1000000;
                                                                                                             RD2[3] =AsianD2[State_id]/1000000;
                                                                                                             RD2[4] =American__Indian_AlaskaNativeD2[State_id]/1000000;
                                                                                                             RD2[5] =Native__Hawaiian_Pacific_IslanderD2[State_id]/1000000;
                                                                                                             RD2[6] =OtherD2[State_id]/1000000;




                                                                                                              R[0]=White[State_id]/1000000;
                                                                                                              R[1]=Black[State_id]/1000000;
                                                                                                              R[2]=Hispanic[State_id]/1000000;
                                                                                                              R[3]=Asian[State_id]/1000000;
                                                                                                              R[4]=American__Indian_AlaskaNative[State_id]/1000000;
                                                                                                              R[5]=Native__Hawaiian_Pacific_Islander[State_id]/1000000;
                                                                                                              R[6]=Other[State_id]/1000000;

                                                                                                              RL1[0]="Hispanic/";
                                                                                                              RL1[1]="White";
                                                                                                              RL1[2]="American";
                                                                                                              RL1[3]="Asian";
                                                                                                              RL1[4]="Black";
                                                                                                              RL1[5]="Native";
                                                                                                              RL1[6]="Multiple/";

                                                                                                              RL2[0]="Latino";
                                                                                                              RL2[1]="Non-Hispanic";
                                                                                                              RL2[2]="Indian/";
                                                                                                              RL2[3]="Non-Hispanic";
                                                                                                              RL2[4]="Non-Hispanic";
                                                                                                              RL2[5]="Hawaiian/";
                                                                                                              RL2[6]="Other";

                                                                                                              RL3[0]="";
                                                                                                              RL3[1]="";
                                                                                                              RL3[2]="Alaska";
                                                                                                              RL3[3]="";
                                                                                                              RL3[4]="";
                                                                                                              RL3[5]="Other Pacific";
                                                                                                              RL3[6]="Non-Hispanic";

                                                                                                              RL4[0]="";
                                                                                                              RL4[1]="";
                                                                                                              RL4[2]="Native";
                                                                                                              RL4[3]= "";
                                                                                                              RL4[4]="";
                                                                                                              RL4[5]="Islander";
                                                                                                              RL4[5]="";

                                                                                                              RL5[0]="";
                                                                                                              RL5[1]="";
                                                                                                              RL5[2]="Non-Hispanic";
                                                                                                              RL5[3]="";
                                                                                                              RL5[4]="";
                                                                                                              RL5[5]="Non-Hispanic";
                                                                                                              RL5[6]="";

                                                                                                              Rper[0]=Whiteper[State_id];
                                                                                                              Rper[1]=Blackper[State_id];
                                                                                                              Rper[2]=Hispanicper[State_id];
                                                                                                              Rper[3]=Asianper[State_id];
                                                                                                              Rper[4]=American__Indian_AlaskaNativeper[State_id];
                                                                                                              Rper[5]=Native__Hawaiian_Pacific_Islanderper[State_id];
                                                                                                              Rper[6]=Otherper[State_id];


                                                                                                              RD1Per[0]=WhiteD1per[State_id];
                                                                                                              RD1Per[1]=BlackD1per[State_id];
                                                                                                              RD1Per[2]=HispanicD1per[State_id];
                                                                                                              RD1Per[3]=AsianD1per[State_id];
                                                                                                              RD1Per[4]=American__Indian_AlaskaNativeD1per[State_id];
                                                                                                              RD1Per[5]=Native__Hawaiian_Pacific_IslanderD1per[State_id];
                                                                                                              RD1Per[6]=OtherD1per[State_id];


                                                                                                              RD2Per[0]=WhiteD2per[State_id];
                                                                                                              RD2Per[1]=BlackD2per[State_id];
                                                                                                              RD2Per[2]=HispanicD2per[State_id];
                                                                                                              RD2Per[3]=AsianD2per[State_id];
                                                                                                              RD2Per[4]=American__Indian_AlaskaNativeD2per[State_id];
                                                                                                              RD2Per[5]=Native__Hawaiian_Pacific_IslanderD2per[State_id];
                                                                                                              RD2Per[6]=OtherD2per[State_id];

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

                                                                                                             for (let i = 1,j=120,k=1.2; i < 8; i++,j=j+60,k=k-0.2) {

                                                                                                             statesvgTr3.append('line').style("stroke", "black").style("stroke-width", 0.25).attr("x1", 100).attr("y1",j).attr("x2", 800).attr("y2",j);
                                                                                                                statesvgTr3.append("text").attr("x", 60).attr("y", j).text(ftr31(k)+"M").style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
                                                                                                             }

                                                                                                            for (let i = 0,j=0; i < 7; i++,j=j+100) {

                                                                                            statesvgTr3.append("text").attr("x", 130+j).attr("y", 500).text(RL1[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
                                                                                            statesvgTr3.append("text").attr("x", 130+j).attr("y", 500+18).text(RL2[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
                                                                                            statesvgTr3.append("text").attr("x", 130+j).attr("y", 500+18*2).text(RL3[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
                                                                                            statesvgTr3.append("text").attr("x", 130+j).attr("y", 500+18*3).text(RL4[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
                                                                                            statesvgTr3.append("text").attr("x", 130+j).attr("y", 500+18*4).text(RL5[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")


                                                                                                            statesvgTr3.append("rect")
                                                                                                                     .attr("x", 130+j)
                                                                                                                     .attr("y",(1.2-ftr3(R[i]))*300+ 119)
                                                                                                                     .attr("height",ftr3(R[i])*300)
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
                                                                                                                                                               d3.select("#tooltipTr31").transition().text("2nd Dose="+ftr2(RD2[i])+"M")
                                                                                                                                                                                             .style("left", (d3.event.pageX) + "px")
                                                                                                                                                                                              .style("top", (d3.event.pageY) + "px");
                                                                                                                                                             d3.select("#tooltipTr32").transition().text("Total Dose="+ftr2(R[i])+"M")
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
                                                                                                                                                                                                       d3.select("#tooltipTr31").style("visibility", "hidden");
                                                                                                                                                                                                       d3.select("#tooltipTr32").style("visibility", "hidden");

                                                                                                                                                                     return tooltipTr31.style("visibility", "hidden");

                                                                                                                                                                   })



                                                                                                                                                       statesvgTr3.append("rect")
                                                                                                                                                                .attr("x", 130+j)
                                                                                                                                                                .attr("y",(1.2-ftr3(RD1[i]))*300+ 119)
                                                                                                                                                                .attr("height",ftr3(RD1[i])*300)
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
                                                                                                                                                                                                          d3.select("#tooltipTr31").transition().text("1st Dose="+ftr2(RD1[i])+"M")
                                                                                                                                                                                                                                        .style("left", (d3.event.pageX) + "px")
                                                                                                                                                                                                                                         .style("top", (d3.event.pageY) + "px");
                                                                                                                                                                                                        d3.select("#tooltipTr32").transition().text("Total Dose="+ftr2(R[i])+"M")
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
                                                                                                                                                                                                                                                  d3.select("#tooltipTr31").style("visibility", "hidden");
                                                                                                                                                                                                                                                  d3.select("#tooltipTr32").style("visibility", "hidden");
                                                                                                                                                                                                                return tooltipTr31.style("visibility", "hidden");

                                                                                                                                                                                                              })

                                                                                                                                                                                                            }
                                                                                                                                                                                                          }


                                                                                                            else if(Administered[State_id]<600000 && Administered[State_id]>300000){
                                                                                                            statesvgTr3.append("text").attr("x", 80).attr("y", 50).text(name[State_id]+" Race wise Covid-19 Vaccine Distribution").style("font-family", "Prompt").style("font-weight","500").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")



                                                                                                            RD1[0]=WhiteD1[State_id]/1000;
                                                                                                            RD1[1]=BlackD1[State_id]/1000;
                                                                                                            RD1[2]=HispanicD1[State_id]/1000;
                                                                                                            RD1[3]=AsianD1[State_id]/1000;
                                                                                                            RD1[4]=American__Indian_AlaskaNativeD1[State_id]/1000;
                                                                                                            RD1[5]=Native__Hawaiian_Pacific_IslanderD1[State_id]/1000;
                                                                                                            RD1[6]=OtherD1[State_id]/1000;


                                                                                                             RD2[0] =WhiteD2[State_id]/1000;
                                                                                                             RD2[1] =BlackD2[State_id]/1000;
                                                                                                             RD2[2] =HispanicD2[State_id]/1000;
                                                                                                             RD2[3] =AsianD2[State_id]/1000;
                                                                                                             RD2[4] =American__Indian_AlaskaNativeD2[State_id]/1000;
                                                                                                             RD2[5] =Native__Hawaiian_Pacific_IslanderD2[State_id]/1000;
                                                                                                             RD2[6] =OtherD2[State_id]/1000;




                                                                                                              R[0]=White[State_id]/1000;
                                                                                                              R[1]=Black[State_id]/1000;
                                                                                                              R[2]=Hispanic[State_id]/1000;
                                                                                                              R[3]=Asian[State_id]/1000;
                                                                                                              R[4]=American__Indian_AlaskaNative[State_id]/1000;
                                                                                                              R[5]=Native__Hawaiian_Pacific_Islander[State_id]/1000;
                                                                                                              R[6]=Other[State_id]/1000;

                                                                                                              RL1[0]="Hispanic/";
                                                                                                              RL1[1]="White";
                                                                                                              RL1[2]="American";
                                                                                                              RL1[3]="Asian";
                                                                                                              RL1[4]="Black";
                                                                                                              RL1[5]="Native";
                                                                                                              RL1[6]="Multiple/";

                                                                                                              RL2[0]="Latino";
                                                                                                              RL2[1]="Non-Hispanic";
                                                                                                              RL2[2]="Indian/";
                                                                                                              RL2[3]="Non-Hispanic";
                                                                                                              RL2[4]="Non-Hispanic";
                                                                                                              RL2[5]="Hawaiian/";
                                                                                                              RL2[6]="Other";

                                                                                                              RL3[0]="";
                                                                                                              RL3[1]="";
                                                                                                              RL3[2]="Alaska";
                                                                                                              RL3[3]="";
                                                                                                              RL3[4]="";
                                                                                                              RL3[5]="Other Pacific";
                                                                                                              RL3[6]="Non-Hispanic";

                                                                                                              RL4[0]="";
                                                                                                              RL4[1]="";
                                                                                                              RL4[2]="Native";
                                                                                                              RL4[3]= "";
                                                                                                              RL4[4]="";
                                                                                                              RL4[5]="Islander";
                                                                                                              RL4[6]="";

                                                                                                              RL5[0]="";
                                                                                                              RL5[1]="";
                                                                                                              RL5[2]="Non-Hispanic";
                                                                                                              RL5[3]="";
                                                                                                              RL5[4]="";
                                                                                                              RL5[5]="Non-Hispanic";
                                                                                                              RL5[6]="";

                                                                                                              Rper[0]=Whiteper[State_id];
                                                                                                              Rper[1]=Blackper[State_id];
                                                                                                              Rper[2]=Hispanicper[State_id];
                                                                                                              Rper[3]=Asianper[State_id];
                                                                                                              Rper[4]=American__Indian_AlaskaNativeper[State_id];
                                                                                                              Rper[5]=Native__Hawaiian_Pacific_Islanderper[State_id];
                                                                                                              Rper[6]=Otherper[State_id];


                                                                                                              RD1Per[0]=WhiteD1per[State_id];
                                                                                                              RD1Per[1]=BlackD1per[State_id];
                                                                                                              RD1Per[2]=HispanicD1per[State_id];
                                                                                                              RD1Per[3]=AsianD1per[State_id];
                                                                                                              RD1Per[4]=American__Indian_AlaskaNativeD1per[State_id];
                                                                                                              RD1Per[5]=Native__Hawaiian_Pacific_IslanderD1per[State_id];
                                                                                                              RD1Per[6]=OtherD1per[State_id];


                                                                                                              RD2Per[0]=WhiteD2per[State_id];
                                                                                                              RD2Per[1]=BlackD2per[State_id];
                                                                                                              RD2Per[2]=HispanicD2per[State_id];
                                                                                                              RD2Per[3]=AsianD2per[State_id];
                                                                                                              RD2Per[4]=American__Indian_AlaskaNativeD2per[State_id];
                                                                                                              RD2Per[5]=Native__Hawaiian_Pacific_IslanderD2per[State_id];
                                                                                                              RD2Per[6]=OtherD2per[State_id];

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

                                                                                                             for (let i = 1,j=120,k=600; i < 8; i++,j=j+60,k=k-100) {

                                                                                                             statesvgTr3.append('line').style("stroke", "black").style("stroke-width", 0.25).attr("x1", 100).attr("y1",j).attr("x2", 800).attr("y2",j);
                                                                                                                statesvgTr3.append("text").attr("x", 60).attr("y", j).text(k+"K").style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
                                                                                                             }

                                                                                                            for (let i = 0,j=0; i < 7; i++,j=j+100) {

                                                                                            statesvgTr3.append("text").attr("x", 130+j).attr("y", 500).text(RL1[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
                                                                                            statesvgTr3.append("text").attr("x", 130+j).attr("y", 500+18).text(RL2[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
                                                                                            statesvgTr3.append("text").attr("x", 130+j).attr("y", 500+18*2).text(RL3[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
                                                                                            statesvgTr3.append("text").attr("x", 130+j).attr("y", 500+18*3).text(RL4[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
                                                                                            statesvgTr3.append("text").attr("x", 130+j).attr("y", 500+18*4).text(RL5[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")


                                                                                                            statesvgTr3.append("rect")
                                                                                                                     .attr("x", 130+j)
                                                                                                                     .attr("y",(600-ftr3(R[i]))*0.6+ 119)
                                                                                                                     .attr("height",ftr3(R[i])*0.6)
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
                                                                                                                                                               d3.select("#tooltipTr31").transition().text("2nd Dose="+ftr2(RD2[i])+"K")
                                                                                                                                                                                             .style("left", (d3.event.pageX) + "px")
                                                                                                                                                                                              .style("top", (d3.event.pageY) + "px");
                                                                                                                                                             d3.select("#tooltipTr32").transition().text("Total Dose="+ftr2(R[i])+"K")
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
                                                                                                                                                                                                       d3.select("#tooltipTr31").style("visibility", "hidden");
                                                                                                                                                                                                       d3.select("#tooltipTr32").style("visibility", "hidden");

                                                                                                                                                                     return tooltipTr31.style("visibility", "hidden");

                                                                                                                                                                   })



                                                                                                                                                       statesvgTr3.append("rect")
                                                                                                                                                                .attr("x", 130+j)
                                                                                                                                                                .attr("y",(600-ftr3(RD1[i]))*0.6+ 119)
                                                                                                                                                                .attr("height",ftr3(RD1[i])*0.6)
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
                                                                                                                                                                                                          d3.select("#tooltipTr31").transition().text("1st Dose="+ftr2(RD1[i])+"K")
                                                                                                                                                                                                                                        .style("left", (d3.event.pageX) + "px")
                                                                                                                                                                                                                                         .style("top", (d3.event.pageY) + "px");
                                                                                                                                                                                                        d3.select("#tooltipTr32").transition().text("Total Dose="+ftr2(R[i])+"K")
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
                                                                                                                                                                                                                                                  d3.select("#tooltipTr31").style("visibility", "hidden");
                                                                                                                                                                                                                                                  d3.select("#tooltipTr32").style("visibility", "hidden");
                                                                                                                                                                                                                return tooltipTr31.style("visibility", "hidden");

                                                                                                                                                                                                              })

                                                                                                                                                                                                            }
                                                                                                                                                                                                          }

                                                                                                                                                                                                          else if(Administered[State_id]<300000){
                                                                                                                                                                                                          statesvgTr3.append("text").attr("x", 80).attr("y", 50).text(name[State_id]+" Race wise Covid-19 Vaccine Distribution").style("font-family", "Prompt").style("font-weight","500").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")



                                                                                                                                                                                                          RD1[0]=WhiteD1[State_id]/1000;
                                                                                                                                                                                                          RD1[1]=BlackD1[State_id]/1000;
                                                                                                                                                                                                          RD1[2]=HispanicD1[State_id]/1000;
                                                                                                                                                                                                          RD1[3]=AsianD1[State_id]/1000;
                                                                                                                                                                                                          RD1[4]=American__Indian_AlaskaNativeD1[State_id]/1000;
                                                                                                                                                                                                          RD1[5]=Native__Hawaiian_Pacific_IslanderD1[State_id]/1000;
                                                                                                                                                                                                          RD1[6]=OtherD1[State_id]/1000;


                                                                                                                                                                                                           RD2[0] =WhiteD2[State_id]/1000;
                                                                                                                                                                                                           RD2[1] =BlackD2[State_id]/1000;
                                                                                                                                                                                                           RD2[2] =HispanicD2[State_id]/1000;
                                                                                                                                                                                                           RD2[3] =AsianD2[State_id]/1000;
                                                                                                                                                                                                           RD2[4] =American__Indian_AlaskaNativeD2[State_id]/1000;
                                                                                                                                                                                                           RD2[5] =Native__Hawaiian_Pacific_IslanderD2[State_id]/1000;
                                                                                                                                                                                                           RD2[6] =OtherD2[State_id]/1000;




                                                                                                                                                                                                            R[0]=White[State_id]/1000;
                                                                                                                                                                                                            R[1]=Black[State_id]/1000;
                                                                                                                                                                                                            R[2]=Hispanic[State_id]/1000;
                                                                                                                                                                                                            R[3]=Asian[State_id]/1000;
                                                                                                                                                                                                            R[4]=American__Indian_AlaskaNative[State_id]/1000;
                                                                                                                                                                                                            R[5]=Native__Hawaiian_Pacific_Islander[State_id]/1000;
                                                                                                                                                                                                            R[6]=Other[State_id]/1000;

                                                                                                                                                                                                            RL1[0]="Hispanic/";
                                                                                                                                                                                                            RL1[1]="White";
                                                                                                                                                                                                            RL1[2]="American";
                                                                                                                                                                                                            RL1[3]="Asian";
                                                                                                                                                                                                            RL1[4]="Black";
                                                                                                                                                                                                            RL1[5]="Native";
                                                                                                                                                                                                            RL1[6]="Multiple/";

                                                                                                                                                                                                            RL2[0]="Latino";
                                                                                                                                                                                                            RL2[1]="Non-Hispanic";
                                                                                                                                                                                                            RL2[2]="Indian/";
                                                                                                                                                                                                            RL2[3]="Non-Hispanic";
                                                                                                                                                                                                            RL2[4]="Non-Hispanic";
                                                                                                                                                                                                            RL2[5]="Hawaiian/";
                                                                                                                                                                                                            RL2[6]="Other";

                                                                                                                                                                                                            RL3[0]="";
                                                                                                                                                                                                            RL3[1]="";
                                                                                                                                                                                                            RL3[2]="Alaska";
                                                                                                                                                                                                            RL3[3]="";
                                                                                                                                                                                                            RL3[4]="";
                                                                                                                                                                                                            RL3[5]="Other Pacific";
                                                                                                                                                                                                            RL3[6]="Non-Hispanic";

                                                                                                                                                                                                            RL4[0]="";
                                                                                                                                                                                                            RL4[1]="";
                                                                                                                                                                                                            RL4[2]="Native";
                                                                                                                                                                                                            RL4[3]= "";
                                                                                                                                                                                                            RL4[4]="";
                                                                                                                                                                                                            RL4[5]="Islander";
                                                                                                                                                                                                            RL4[6]="";

                                                                                                                                                                                                            RL5[0]="";
                                                                                                                                                                                                            RL5[1]="";
                                                                                                                                                                                                            RL5[2]="Non-Hispanic";
                                                                                                                                                                                                            RL5[3]="";
                                                                                                                                                                                                            RL5[4]="";
                                                                                                                                                                                                            RL5[5]="Non-Hispanic";
                                                                                                                                                                                                            RL5[6]="";

                                                                                                                                                                                                            Rper[0]=Whiteper[State_id];
                                                                                                                                                                                                            Rper[1]=Blackper[State_id];
                                                                                                                                                                                                            Rper[2]=Hispanicper[State_id];
                                                                                                                                                                                                            Rper[3]=Asianper[State_id];
                                                                                                                                                                                                            Rper[4]=American__Indian_AlaskaNativeper[State_id];
                                                                                                                                                                                                            Rper[5]=Native__Hawaiian_Pacific_Islanderper[State_id];
                                                                                                                                                                                                            Rper[6]=Otherper[State_id];


                                                                                                                                                                                                            RD1Per[0]=WhiteD1per[State_id];
                                                                                                                                                                                                            RD1Per[1]=BlackD1per[State_id];
                                                                                                                                                                                                            RD1Per[2]=HispanicD1per[State_id];
                                                                                                                                                                                                            RD1Per[3]=AsianD1per[State_id];
                                                                                                                                                                                                            RD1Per[4]=American__Indian_AlaskaNativeD1per[State_id];
                                                                                                                                                                                                            RD1Per[5]=Native__Hawaiian_Pacific_IslanderD1per[State_id];
                                                                                                                                                                                                            RD1Per[6]=OtherD1per[State_id];


                                                                                                                                                                                                            RD2Per[0]=WhiteD2per[State_id];
                                                                                                                                                                                                            RD2Per[1]=BlackD2per[State_id];
                                                                                                                                                                                                            RD2Per[2]=HispanicD2per[State_id];
                                                                                                                                                                                                            RD2Per[3]=AsianD2per[State_id];
                                                                                                                                                                                                            RD2Per[4]=American__Indian_AlaskaNativeD2per[State_id];
                                                                                                                                                                                                            RD2Per[5]=Native__Hawaiian_Pacific_IslanderD2per[State_id];
                                                                                                                                                                                                            RD2Per[6]=OtherD2per[State_id];

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

                                                                                                                                                                                                           for (let i = 1,j=120,k=300; i < 8; i++,j=j+60,k=k-50) {

                                                                                                                                                                                                           statesvgTr3.append('line').style("stroke", "black").style("stroke-width", 0.25).attr("x1", 100).attr("y1",j).attr("x2", 800).attr("y2",j);
                                                                                                                                                                                                              statesvgTr3.append("text").attr("x", 60).attr("y", j).text(k+"K").style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
                                                                                                                                                                                                           }

                                                                                                                                                                                                          for (let i = 0,j=0; i < 7; i++,j=j+100) {

                                                                                                                                                                                          statesvgTr3.append("text").attr("x", 130+j).attr("y", 500).text(RL1[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
                                                                                                                                                                                          statesvgTr3.append("text").attr("x", 130+j).attr("y", 500+18).text(RL2[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
                                                                                                                                                                                          statesvgTr3.append("text").attr("x", 130+j).attr("y", 500+18*2).text(RL3[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
                                                                                                                                                                                          statesvgTr3.append("text").attr("x", 130+j).attr("y", 500+18*3).text(RL4[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
                                                                                                                                                                                          statesvgTr3.append("text").attr("x", 130+j).attr("y", 500+18*4).text(RL5[i]).style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")


                                                                                                                                                                                                          statesvgTr3.append("rect")
                                                                                                                                                                                                                   .attr("x", 130+j)
                                                                                                                                                                                                                   .attr("y",(300-ftr3(R[i]))*1.2+ 119)
                                                                                                                                                                                                                   .attr("height",ftr3(R[i])*1.2)
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
                                                                                                                                                                                                                                                             d3.select("#tooltipTr31").transition().text("2nd Dose="+ftr2(RD2[i])+"K")
                                                                                                                                                                                                                                                                                           .style("left", (d3.event.pageX) + "px")
                                                                                                                                                                                                                                                                                            .style("top", (d3.event.pageY) + "px");
                                                                                                                                                                                                                                                           d3.select("#tooltipTr32").transition().text("Total Dose="+ftr2(R[i])+"K")
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
                                                                                                                                                                                                                                                                                                     d3.select("#tooltipTr31").style("visibility", "hidden");
                                                                                                                                                                                                                                                                                                     d3.select("#tooltipTr32").style("visibility", "hidden");

                                                                                                                                                                                                                                                                   return tooltipTr31.style("visibility", "hidden");

                                                                                                                                                                                                                                                                 })



                                                                                                                                                                                                                                                     statesvgTr3.append("rect")
                                                                                                                                                                                                                                                              .attr("x", 130+j)
                                                                                                                                                                                                                                                              .attr("y",(300-ftr3(RD1[i]))*1.2+ 119)
                                                                                                                                                                                                                                                              .attr("height",ftr3(RD1[i])*1.2)
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
                                                                                                                                                                                                                                                                                                        d3.select("#tooltipTr31").transition().text("1st Dose="+ftr2(RD1[i])+"K")
                                                                                                                                                                                                                                                                                                                                      .style("left", (d3.event.pageX) + "px")
                                                                                                                                                                                                                                                                                                                                       .style("top", (d3.event.pageY) + "px");
                                                                                                                                                                                                                                                                                                      d3.select("#tooltipTr32").transition().text("Total Dose="+ftr2(R[i])+"K")
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
                                                                                                                                                                                                                                                                                                                                                d3.select("#tooltipTr31").style("visibility", "hidden");
                                                                                                                                                                                                                                                                                                                                                d3.select("#tooltipTr32").style("visibility", "hidden");
                                                                                                                                                                                                                                                                                                              return tooltipTr31.style("visibility", "hidden");

                                                                                                                                                                                                                                                                                                            })

                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                        }




                                                                                                                                                                                                          var myimage = statesvgTr3.append('image')
                                                                                                                                                                                                                           .attr('xlink:href', 'img1.png')
                                                                                                                                                                                                                          .attr('width', 1000)
                                                                                                                                                                                                                          .attr('height', 150)
                                                                                                                                                                                                                          .attr("x", 765)
                                                                                                                                                                                                                          .attr("y",100)

                                                                                                                           statesvgTr3.append("rect")
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
                                                                                                                                            d3.select("#tooltipTr31").transition().text("Out of Total Population")
                                                                                                                                                                          .style("left", (d3.event.pageX) + "px")
                                                                                                                                                                           .style("top", (d3.event.pageY) + "px");
                                                                                                                                          d3.select("#tooltipTr32").transition().text("people vaccinated are "+ftr2(100*per[State_id])+"%")
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







                                                                                                                                    var tr2xp={}
                                                                                                                                    tr2xp=0;



                                                                                                                                  for (let i = 0; i < 7; i++) {

                                                                                                                                    statesvgTr3.append("rect")
                                                                                                                                             .attr("x", 1000+tr2xp)
                                                                                                                                             .attr("y",300)
                                                                                                                                             .attr("height",50)
                                                                                                                                             .attr("width", 600*Rper[i])
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
                                                                                                                                                     d3.select("#tooltipTr31").transition().text(RL1[i]+RL2[i]+RL3[i])
                                                                                                                                                                                   .style("left", (d3.event.pageX) + "px")
                                                                                                                                                                                    .style("top", (d3.event.pageY) + "px");
                                                                                                                                                   d3.select("#tooltipTr32").transition().text(RL4[i]+RL5[i]+" vaccinated are "+ftr2(100*Rper[i])+"%")
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


                                                                                                                                                                                             d3.select("#tooltipTr31").style("visibility", "hidden");
                                                                                                                                                                                             d3.select("#tooltipTr32").style("visibility", "hidden");
                                                                                                                                                           return tooltipTr31.style("visibility", "hidden");

                                                                                                                                                         })

                                                                                                                                           tr2xp=tr2xp+Rper[i]*600;

                                                                                                                                           }

                                                                                                                                           statesvgTr3.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1", 1200).attr("y1",200).attr("x2", 1000).attr("y2",300);
                                                                                                                                           statesvgTr3.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1",1200+600*per[State_id]).attr("y1",200).attr("x2",1000+tr2xp).attr("y2",300);

                                                                                                                                           var tr2xp1={}
                                                                                                                                           tr2xp1=0;
                                                                                                                                           tr2xp=0;

                                                                                                                                           statesvgTr3.append("text").attr("x", 80).attr("y", 200).text("").style("font-family", "Prompt").style("font-weight","700").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")


                                                                                                                                           for (let i = 0,j=0; i < 8; i++,j=j+120) {

                                                                                                                                             statesvgTr3.append("rect")
                                                                                                                                                      .attr("x", 900+j)
                                                                                                                                                      .attr("y",450)
                                                                                                                                                      .attr("height",50)
                                                                                                                                                      .attr("width", 100*RD1Per[i])
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
                                                                                                                                                              d3.select("#tooltipTr31").transition().text(RL1[i]+RL2[i]+RL3[i]+RL4[i])
                                                                                                                                                                                            .style("left", (d3.event.pageX) + "px")
                                                                                                                                                                                             .style("top", (d3.event.pageY) + "px");
                                                                                                                                                            d3.select("#tooltipTr32").transition().text(RL5[i]+" 1st Dose vaccinations are "+ftr2(100*RD1Per[i])+"%")
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



                                                                                                                                                                                                      d3.select("#tooltipTr31").style("visibility", "hidden");
                                                                                                                                                                                                      d3.select("#tooltipTr32").style("visibility", "hidden");
                                                                                                                                                                    return tooltipTr31.style("visibility", "hidden");

                                                                                                                                                                  })

                                                                                                                                                     tr2xp1=tr2xp1+100*RD1Per[i];

                                                                                                                                                      statesvgTr3.append("rect")
                                                                                                                                                               .attr("x", 900+j+tr2xp1)
                                                                                                                                                               .attr("y",450)
                                                                                                                                                               .attr("height",50)
                                                                                                                                                               .attr("width", 100*RD2Per[i])
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
                                                                                                                                                                       d3.select("#tooltipTr31").transition().text(RL1[i]+RL2[i]+RL3[i]+RL4[i])
                                                                                                                                                                                                     .style("left", (d3.event.pageX) + "px")
                                                                                                                                                                                                      .style("top", (d3.event.pageY) + "px");
                                                                                                                                                                     d3.select("#tooltipTr32").transition().text(RL5[i]+" 2nd Dose vaccinations are "+ftr2(100*RD2Per[i])+"%")
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


                                                                                                                                                                                                               d3.select("#tooltipTr31").style("visibility", "hidden");
                                                                                                                                                                                                               d3.select("#tooltipTr32").style("visibility", "hidden");
                                                                                                                                                                             return tooltipTr31.style("visibility", "hidden");

                                                                                                                                                                           })

                                                                                                                                                               if(i<7){

                                                                                                                                                               statesvgTr3.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1", 1000+tr2xp).attr("y1",350).attr("x2",900+j).attr("y2",450);
                                                                                                                                                               statesvgTr3.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1",1000+tr2xp+600*Rper[i]).attr("y1",350).attr("x2", 900+j+tr2xp1+100*RD2Per[i]).attr("y2",450);
                                                                                                                                                                 }
                                                                                                                                                               tr2xp1=0;
                                                                                                                                                               tr2xp=tr2xp+Rper[i]*600;

                                                                                                                                                    }
                       })
