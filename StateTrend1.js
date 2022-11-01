var statesvgTr1 = d3.select("#svgStatetrend1");


statesvgTr1.append("rect")
         .attr("x", 0)
         .attr("y", 0)
         .attr("height", 600)
         .attr("width", 1800)
         .style("stroke", "black")
         .style("fill", "none")
         .style("stroke-width", 0.25);

             var ftr2 = d3.format(".2f");





         d3.csv("https://raw.githubusercontent.com/RohitKher/datafiles/main/StateGender.csv", function(csv){
              console.log(csv)
              var MD1={};
              var FD1={};
              var MD2={};
              var FD2={};
              var Total={};
              var MD1per={};
              var FD1per={};
              var MD2per={};
              var FD2per={};
              var F={};
              var M={};
              var Fper={};
              var Mper={};
              var per={};
              var TMF={};
              var D1={};
              var D2={};
              var name={};


             csv.forEach(function(d,i) {
                name[d.id]=d.State;
                MD1[d.id]=d.MD1;
                FD1[d.id]=d.FD1;
                MD2[d.id]=d.MD2;
                FD2[d.id]=d.FD2;
                Total[d.id]=d.Administered;
                MD1per[d.id]=d.MD1per;
                FD1per[d.id]=d.FD1per;
                MD2per[d.id]=d.MD2per;
                FD2per[d.id]=d.FD2per;
                F[d.id]=d.F;
                M[d.id]=d.M;
                Fper[d.id]=d.Fper;
                Mper[d.id]=d.Mper;
                per[d.id]=d.Administered/d.Popu;
            })
               per[36]=0.1682;

                if(Total[State_id]>1000000){
                TMF[0]=F[State_id]/1000000;
                TMF[1]=M[State_id]/1000000;
                D1[0]=FD1[State_id]/1000000;
                D1[1]=MD1[State_id]/1000000;
                D2[0]=FD2[State_id]/1000000;
                D2[1]=MD2[State_id]/1000000;
            statesvgTr1.append("text").attr("x", 80).attr("y", 50).text(name[State_id]+" Sex wise  Covid-19 Vaccine Distribution").style("font-family", "Prompt").style("font-weight","500").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")

            for (let i = 1,j=160,k=6; i < 8; i++,j=j+60,k=k-1) {

            statesvgTr1.append('line').style("stroke", "black").style("stroke-width", 0.25).attr("x1", 100).attr("y1",j).attr("x2", 600).attr("y2",j);
               statesvgTr1.append("text").attr("x", 55).attr("y", j).text(k+"M").style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
            }




            statesvgTr1.append("text").attr("x", 200).attr("y", 550).text("Female").style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")
            statesvgTr1.append("text").attr("x", 420).attr("y", 550).text("Male").style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")



            for (let i = 0,j=0; i < 2; i++,j=j+220) {



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

                     statesvgTr1.append("rect")
                              .attr("x", 180+j)
                              .attr("y",(6-ftr2(TMF[i]))*60+ 160)
                              .attr("height",ftr2(TMF[i])*60)
                              .attr("width", 100)
                              .style("stroke", "black")
                              .style("fill", "#808080")
                              .style("stroke-width", 0)
                              .style("fill", function(){

                                                if(i==0)
                                                  return "#ff8000";
                                                if(i==1)
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

                                                              if(i==0)
                                                                return "#ff8000";
                                                              if(i==1)
                                                                 return "#0066ff";

                                            })
                                            d3.select("#tooltipTr1").style("visibility", "hidden");
                                            d3.select("#tooltipTr2").style("visibility", "hidden");


                                          })

                              statesvgTr1.append("rect")
                                       .attr("x", 180+j)
                                       .attr("y",(6-ftr2(D1[i]))*60+ 160)
                                       .attr("height",ftr2(D1[i])*60)
                                       .attr("width", 100)
                                       .style("stroke", "black")
                                       .style("fill", "#808080")
                                       .style("stroke-width", 0)
                                       .style("fill", function(){

                                                         if(i==0)
                                                           return "#ffbf80";
                                                         if(i==1)
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

                                                                       if(i==0)
                                                                         return "#ffbf80";
                                                                       if(i==1)
                                                                          return "#80b3ff";

                                                     })
                                                     d3.select("#tooltipTr1").style("visibility", "hidden");
                                                     d3.select("#tooltipTr2").style("visibility", "hidden");
                                                     return tooltipTr1.style("visibility", "hidden");

                                                   })
            }
          }

              else if(Total[State_id]<1000000 && Total[State_id]>600000 ){

                TMF[0]=F[State_id]/1000;
                TMF[1]=M[State_id]/1000;
                D1[0]=FD1[State_id]/1000;
                D1[1]=MD1[State_id]/1000;
                D2[0]=FD2[State_id]/1000;
                D2[1]=MD2[State_id]/1000;
            statesvgTr1.append("text").attr("x", 80).attr("y", 50).text(name[State_id]+" Sex wise  Covid-19 Vaccine Distribution").style("font-family", "Prompt").style("font-weight","500").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")

            for (let i = 1,j=160,k=1200; i < 8; i++,j=j+60,k=k-200) {

            statesvgTr1.append('line').style("stroke", "black").style("stroke-width", 0.25).attr("x1", 100).attr("y1",j).attr("x2", 600).attr("y2",j);
               statesvgTr1.append("text").attr("x", 55).attr("y", j).text(k+"K").style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
            }




            statesvgTr1.append("text").attr("x", 200).attr("y", 550).text("Female").style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")
            statesvgTr1.append("text").attr("x", 420).attr("y", 550).text("Male").style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")



            for (let i = 0,j=0; i < 2; i++,j=j+220) {



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

                     statesvgTr1.append("rect")
                              .attr("x", 180+j)
                              .attr("y",(1200-ftr2(TMF[i]))*0.3+ 160)
                              .attr("height",ftr2(TMF[i])*0.3)
                              .attr("width", 100)
                              .style("stroke", "black")
                              .style("fill", "#808080")
                              .style("stroke-width", 0)
                              .style("fill", function(){

                                                if(i==0)
                                                  return "#ff8000";
                                                if(i==1)
                                                   return "#0066ff";

                              })
                              .on("mouseover",function(){
                                d3.select(this).transition()
                                       .duration(100)
                                      .attr('opacity', '1')
                                      .style("fill","#2BF0CD")
                                      d3.select("#tooltipTr1").transition().text("2nd Dose="+ftr2(D2[i])+"K")
                                                                    .style("left", (d3.event.pageX) + "px")
                                                                     .style("top", (d3.event.pageY) + "px");
                                    d3.select("#tooltipTr2").transition().text("Total Dose="+ftr2(TMF[i])+"K")
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

                                                              if(i==0)
                                                                return "#ff8000";
                                                              if(i==1)
                                                                 return "#0066ff";

                                            })
                                            d3.select("#tooltipTr1").style("visibility", "hidden");
                                            d3.select("#tooltipTr2").style("visibility", "hidden");


                                          })

                              statesvgTr1.append("rect")
                                       .attr("x", 180+j)
                                       .attr("y",(1200-ftr2(D1[i]))*0.3+ 160)
                                       .attr("height",ftr2(D1[i])*0.3)
                                       .attr("width", 100)
                                       .style("stroke", "black")
                                       .style("fill", "#808080")
                                       .style("stroke-width", 0)
                                       .style("fill", function(){

                                                         if(i==0)
                                                           return "#ffbf80";
                                                         if(i==1)
                                                            return "#80b3ff";

                                       })
                                       .on("mouseover",function(){
                                         d3.select(this).transition()
                                                .duration(100)
                                               .attr('opacity', '1')
                                               .style("fill","#2BF0CD")
                                               d3.select("#tooltipTr1").transition().text("1st Dose="+ftr2(D1[i])+"K")
                                                                             .style("left", (d3.event.pageX) + "px")
                                                                              .style("top", (d3.event.pageY) + "px");
                                             d3.select("#tooltipTr2").transition().text("Total Dose="+ftr2(TMF[i])+"K")
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

                                                                       if(i==0)
                                                                         return "#ffbf80";
                                                                       if(i==1)
                                                                          return "#80b3ff";

                                                     })
                                                     d3.select("#tooltipTr1").style("visibility", "hidden");
                                                     d3.select("#tooltipTr2").style("visibility", "hidden");
                                                     return tooltipTr1.style("visibility", "hidden");

                                                   })




              }

            }

            else if(Total[State_id]<600000 && Total[State_id]>300000 ){

              TMF[0]=F[State_id]/1000;
              TMF[1]=M[State_id]/1000;
              D1[0]=FD1[State_id]/1000;
              D1[1]=MD1[State_id]/1000;
              D2[0]=FD2[State_id]/1000;
              D2[1]=MD2[State_id]/1000;
          statesvgTr1.append("text").attr("x", 80).attr("y", 50).text(name[State_id]+" Sex wise  Covid-19 Vaccine Distribution").style("font-family", "Prompt").style("font-weight","500").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")

          for (let i = 1,j=160,k=600; i < 8; i++,j=j+60,k=k-100) {

          statesvgTr1.append('line').style("stroke", "black").style("stroke-width", 0.25).attr("x1", 100).attr("y1",j).attr("x2", 600).attr("y2",j);
             statesvgTr1.append("text").attr("x", 55).attr("y", j).text(k+"K").style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
          }




          statesvgTr1.append("text").attr("x", 200).attr("y", 550).text("Female").style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")
          statesvgTr1.append("text").attr("x", 420).attr("y", 550).text("Male").style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")



          for (let i = 0,j=0; i < 2; i++,j=j+220) {



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

                   statesvgTr1.append("rect")
                            .attr("x", 180+j)
                            .attr("y",(600-ftr2(TMF[i]))*0.6+ 160)
                            .attr("height",ftr2(TMF[i])*0.6)
                            .attr("width", 100)
                            .style("stroke", "black")
                            .style("fill", "#808080")
                            .style("stroke-width", 0)
                            .style("fill", function(){

                                              if(i==0)
                                                return "#ff8000";
                                              if(i==1)
                                                 return "#0066ff";

                            })
                            .on("mouseover",function(){
                              d3.select(this).transition()
                                     .duration(100)
                                    .attr('opacity', '1')
                                    .style("fill","#2BF0CD")
                                    d3.select("#tooltipTr1").transition().text("2nd Dose="+ftr2(D2[i])+"K")
                                                                  .style("left", (d3.event.pageX) + "px")
                                                                   .style("top", (d3.event.pageY) + "px");
                                  d3.select("#tooltipTr2").transition().text("Total Dose="+ftr2(TMF[i])+"K")
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

                                                            if(i==0)
                                                              return "#ff8000";
                                                            if(i==1)
                                                               return "#0066ff";

                                          })
                                          d3.select("#tooltipTr1").style("visibility", "hidden");
                                          d3.select("#tooltipTr2").style("visibility", "hidden");


                                        })

                            statesvgTr1.append("rect")
                                     .attr("x", 180+j)
                                     .attr("y",(600-ftr2(D1[i]))*0.6+ 160)
                                     .attr("height",ftr2(D1[i])*0.6)
                                     .attr("width", 100)
                                     .style("stroke", "black")
                                     .style("fill", "#808080")
                                     .style("stroke-width", 0)
                                     .style("fill", function(){

                                                       if(i==0)
                                                         return "#ffbf80";
                                                       if(i==1)
                                                          return "#80b3ff";

                                     })
                                     .on("mouseover",function(){
                                       d3.select(this).transition()
                                              .duration(100)
                                             .attr('opacity', '1')
                                             .style("fill","#2BF0CD")
                                             d3.select("#tooltipTr1").transition().text("1st Dose="+ftr2(D1[i])+"K")
                                                                           .style("left", (d3.event.pageX) + "px")
                                                                            .style("top", (d3.event.pageY) + "px");
                                           d3.select("#tooltipTr2").transition().text("Total Dose="+ftr2(TMF[i])+"K")
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

                                                                     if(i==0)
                                                                       return "#ffbf80";
                                                                     if(i==1)
                                                                        return "#80b3ff";

                                                   })
                                                   d3.select("#tooltipTr1").style("visibility", "hidden");
                                                   d3.select("#tooltipTr2").style("visibility", "hidden");
                                                   return tooltipTr1.style("visibility", "hidden");

                                                 })




            }

          }

          else if(Total[State_id]<300000 ){

            TMF[0]=F[State_id]/1000;
            TMF[1]=M[State_id]/1000;
            D1[0]=FD1[State_id]/1000;
            D1[1]=MD1[State_id]/1000;
            D2[0]=FD2[State_id]/1000;
            D2[1]=MD2[State_id]/1000;
        statesvgTr1.append("text").attr("x", 80).attr("y", 50).text(name[State_id]+" Sex wise  Covid-19 Vaccine Distribution").style("font-family", "Prompt").style("font-weight","500").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")

        for (let i = 1,j=160,k=300; i < 8; i++,j=j+60,k=k-50) {

        statesvgTr1.append('line').style("stroke", "black").style("stroke-width", 0.25).attr("x1", 100).attr("y1",j).attr("x2", 600).attr("y2",j);
           statesvgTr1.append("text").attr("x", 55).attr("y", j).text(k+"K").style("font-family", "Prompt").style("font-weight","200").style("font-size", "15px").style("fill", "#808080").attr("alignment-baseline","middle")
        }




        statesvgTr1.append("text").attr("x", 200).attr("y", 550).text("Female").style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")
        statesvgTr1.append("text").attr("x", 420).attr("y", 550).text("Male").style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")



        for (let i = 0,j=0; i < 2; i++,j=j+220) {



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

                 statesvgTr1.append("rect")
                          .attr("x", 180+j)
                          .attr("y",(300-ftr2(TMF[i]))*1.2+ 160)
                          .attr("height",ftr2(TMF[i])*1.2)
                          .attr("width", 100)
                          .style("stroke", "black")
                          .style("fill", "#808080")
                          .style("stroke-width", 0)
                          .style("fill", function(){

                                            if(i==0)
                                              return "#ff8000";
                                            if(i==1)
                                               return "#0066ff";

                          })
                          .on("mouseover",function(){
                            d3.select(this).transition()
                                   .duration(100)
                                  .attr('opacity', '1')
                                  .style("fill","#2BF0CD")
                                  d3.select("#tooltipTr1").transition().text("2nd Dose="+ftr2(D2[i])+"K")
                                                                .style("left", (d3.event.pageX) + "px")
                                                                 .style("top", (d3.event.pageY) + "px");
                                d3.select("#tooltipTr2").transition().text("Total Dose="+ftr2(TMF[i])+"K")
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

                                                          if(i==0)
                                                            return "#ff8000";
                                                          if(i==1)
                                                             return "#0066ff";

                                        })
                                        d3.select("#tooltipTr1").style("visibility", "hidden");
                                        d3.select("#tooltipTr2").style("visibility", "hidden");


                                      })

                          statesvgTr1.append("rect")
                                   .attr("x", 180+j)
                                   .attr("y",(300-ftr2(D1[i]))*1.2+ 160)
                                   .attr("height",ftr2(D1[i])*1.2)
                                   .attr("width", 100)
                                   .style("stroke", "black")
                                   .style("fill", "#808080")
                                   .style("stroke-width", 0)
                                   .style("fill", function(){

                                                     if(i==0)
                                                       return "#ffbf80";
                                                     if(i==1)
                                                        return "#80b3ff";

                                   })
                                   .on("mouseover",function(){
                                     d3.select(this).transition()
                                            .duration(100)
                                           .attr('opacity', '1')
                                           .style("fill","#2BF0CD")
                                           d3.select("#tooltipTr1").transition().text("1st Dose="+ftr2(D1[i])+"K")
                                                                         .style("left", (d3.event.pageX) + "px")
                                                                          .style("top", (d3.event.pageY) + "px");
                                         d3.select("#tooltipTr2").transition().text("Total Dose="+ftr2(TMF[i])+"K")
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

                                                                   if(i==0)
                                                                     return "#ffbf80";
                                                                   if(i==1)
                                                                      return "#80b3ff";

                                                 })
                                                 d3.select("#tooltipTr1").style("visibility", "hidden");
                                                 d3.select("#tooltipTr2").style("visibility", "hidden");
                                                 return tooltipTr1.style("visibility", "hidden");

                                               })




          }

        }

            statesvgTr1.append("text").attr("x", 80).attr("y", 200).text("").style("font-family", "Prompt").style("font-weight","700").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")

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


                     var myimage = statesvgTr1.append('image')
                                      .attr('xlink:href', 'img1.png')
                                     .attr('width', 1000)
                                     .attr('height', 150)
                                     .attr("x", 765)
                                     .attr("y",100)

                     statesvgTr1.append("rect")
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
                                      d3.select("#tooltipTr1").transition().text("Out of Total Population")
                                                                    .style("left", (d3.event.pageX) + "px")
                                                                     .style("top", (d3.event.pageY) + "px");
                                    d3.select("#tooltipTr2").transition().text("people vaccinated are "+ftr2(100*per[State_id])+"%")
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



                              statesvgTr1.append("rect")
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
                                               d3.select("#tooltipTr1").transition().text("Out of Total Vaccination")
                                                                             .style("left", (d3.event.pageX) + "px")
                                                                              .style("top", (d3.event.pageY) + "px");
                                             d3.select("#tooltipTr2").transition().text("Male vaccinations are "+ftr2(100-100*Fper[State_id])+"%")
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

                                       statesvgTr1.append("rect")
                                                .attr("x", 1000)
                                                .attr("y",300)
                                                .attr("height",50)
                                                .attr("width", 600*Fper[State_id])
                                                .style("stroke", "black")
                                                .style("fill", "#ff8000")
                                                .style("stroke-width", 0)
                                                .on("mouseover",function(){
                                                  d3.select(this).transition()
                                                         .duration(100)
                                                        .attr('opacity', '1')
                                                        .style("fill","#2BF0CD")
                                                        d3.select("#tooltipTr1").transition().text("Out of Total Vaccination")
                                                                                      .style("left", (d3.event.pageX) + "px")
                                                                                       .style("top", (d3.event.pageY) + "px");
                                                      d3.select("#tooltipTr2").transition().text("Female vaccinations are "+ftr2(100*Fper[State_id])+"%")
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

                                                statesvgTr1.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1", 1200).attr("y1",200).attr("x2", 1000).attr("y2",300);
                                                statesvgTr1.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1",1200+600*per[State_id]).attr("y1",200).attr("x2", 1000+600).attr("y2",300);


                                                statesvgTr1.append("rect")
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
                                                                 d3.select("#tooltipTr1").transition().text("Out of Female Vaccination")
                                                                                               .style("left", (d3.event.pageX) + "px")
                                                                                                .style("top", (d3.event.pageY) + "px");
                                                               d3.select("#tooltipTr2").transition().text("2nd Dose are "+ftr2(100-100*FD1per[State_id])+"%")
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

                                                         statesvgTr1.append("rect")
                                                                  .attr("x", 900)
                                                                  .attr("y",450)
                                                                  .attr("height",50)
                                                                  .attr("width", 300*FD1per[State_id])
                                                                  .style("stroke", "black")
                                                                  .style("fill", "#ffbf80")
                                                                  .style("stroke-width", 0)
                                                                  .on("mouseover",function(){
                                                                    d3.select(this).transition()
                                                                           .duration(100)
                                                                          .attr('opacity', '1')
                                                                          .style("fill","#2BF0CD")
                                                                          d3.select("#tooltipTr1").transition().text("Out of Female Vaccination")
                                                                                                        .style("left", (d3.event.pageX) + "px")
                                                                                                         .style("top", (d3.event.pageY) + "px");
                                                                        d3.select("#tooltipTr2").transition().text("1st Dose are "+ftr2(100*FD1per[State_id])+"%")
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

                                                                  statesvgTr1.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1", 1000).attr("y1",350).attr("x2", 900).attr("y2",450);
                                                                  statesvgTr1.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1",1000+600*Fper[State_id]).attr("y1",350).attr("x2", 900+300).attr("y2",450);

                                                                  statesvgTr1.append("rect")
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
                                                                                   d3.select("#tooltipTr1").transition().text("Out of Male Vaccination")
                                                                                                                 .style("left", (d3.event.pageX) + "px")
                                                                                                                  .style("top", (d3.event.pageY) + "px");
                                                                                 d3.select("#tooltipTr2").transition().text("2nd Dose are "+ftr2(100-100*MD1per[State_id])+"%")
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

                                                                           statesvgTr1.append("rect")
                                                                                    .attr("x", 1400)
                                                                                    .attr("y",450)
                                                                                    .attr("height",50)
                                                                                    .attr("width", 300*MD1per[State_id])
                                                                                    .style("stroke", "black")
                                                                                    .style("fill", "#80b3ff")
                                                                                    .style("stroke-width", 0)
                                                                                    .on("mouseover",function(){
                                                                                      d3.select(this).transition()
                                                                                             .duration(100)
                                                                                            .attr('opacity', '1')
                                                                                            .style("fill","#2BF0CD")
                                                                                            d3.select("#tooltipTr1").transition().text("Out of Male Vaccination")
                                                                                                                          .style("left", (d3.event.pageX) + "px")
                                                                                                                           .style("top", (d3.event.pageY) + "px");
                                                                                          d3.select("#tooltipTr2").transition().text("1st Dose are "+ftr2(100*MD1per[State_id])+"%")
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

                                                                                    statesvgTr1.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1",1000+600*Fper[State_id]).attr("y1",350).attr("x2", 1400).attr("y2",450);
                                                                                    statesvgTr1.append('line').style("stroke", "black").style("stroke-width", 0.5).attr("x1",1000+600).attr("y1",350).attr("x2", 1400+300).attr("y2",450);

          })
