var svgs1 = d3.select("#svgStateDash");


svgs1.append("rect")
         .attr("x", 0)
         .attr("y", 0)
         .attr("height", 500)
         .attr("width", 900)
         .style("stroke", "black")
         .style("fill", "none")
         .style("stroke-width", 0.25);

         d3.csv("https://raw.githubusercontent.com/RohitKher/datafiles/main/covid19_vaccinations_states.csv", function(csv){
                console.log(csv)
                var nameS = {};
                var AdmS100k = {};
                var DelS100k = {};
                var OneD = {};
                var OneD100k = {};
                var AdmS = {};
                var DelS={};
                var TwoD={};
                var TwoD100k={};
                  csv.forEach(function(d,i){
                   nameS[d.id] = d.State;
                    AdmS100k[d.id] = d.Administered_IOOK;
                    DelS100k[d.id] =  d.Delivered_IOOK;
                   OneD[d.id] =  d.One_Dose;
                   OneD100k[d.id] =  d.One_Dose_IOOK;
                   AdmS[d.id]  =  d.Total_Administered;
                   DelS[d.id] =  d.Total_Delivered;
                     TwoD[d.id]    =  d.Two_Dose;
                     TwoD100k[d.id]    =  d.Two_Dose_IOOK;
                  })

                  d3.csv("https://raw.githubusercontent.com/RohitKher/datafiles/main/finalpop.csv", function(csv){
                         console.log(csv)
                          var PerS = {};
                          var PopS = {};
                           csv.forEach(function(d,i){
                                PerS[d.id] =d.Administered*100/d.Popu;
                                PerS[36]=16.82;
                                PopS[d.id] = d.Popu;
                           })
         var fS = d3.format(".2f");

         svgs1.append("text").attr("x", 80).attr("y", 30).text(fS(PerS[State_id])+"%").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#2BF0CD").attr("alignment-baseline","middle")
         svgs1.append("text").attr("x", 195).attr("y", 30).text(" people of "+nameS[State_id]+" have been vaccinated ").style("font-family", "Prompt").style("font-weight","500").style("font-size", "27px").style("fill", "#808080").attr("alignment-baseline","middle")


         svgs1.append("text").attr("x", 80).attr("y", 100).text("Total Doses Delivered").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")
         svgs1.append("text").attr("x", 155).attr("y", 135).text(DelS[State_id]).style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#2BF0CD").attr("alignment-baseline","middle")

         svgs1.append("text").attr("x", 460).attr("y", 100).text("Total Doses Administered").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")
         svgs1.append("text").attr("x", 570).attr("y", 135).text(AdmS[State_id]).style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#2BF0CD").attr("alignment-baseline","middle")

         svgs1.append("text").attr("x", 80).attr("y", 200).text("No of People Receiving").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")
         svgs1.append("text").attr("x", 165).attr("y", 235).text("1 Dose").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")
         svgs1.append("text").attr("x", 165).attr("y", 270).text(OneD[State_id]).style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#2BF0CD").attr("alignment-baseline","middle")

         svgs1.append("text").attr("x", 460).attr("y", 200).text("No of People Receiving").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")
         svgs1.append("text").attr("x", 570).attr("y", 235).text("2 Dose").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")
         svgs1.append("text").attr("x", 570).attr("y", 270).text(TwoD[State_id]).style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#2BF0CD").attr("alignment-baseline","middle")

         svgs1.append("text").attr("x", 120).attr("y", 330).text("1 Dose per 100k").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")
         svgs1.append("text").attr("x", 175).attr("y", 365).text(OneD100k[State_id]).style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#2BF0CD").attr("alignment-baseline","middle")

         svgs1.append("text").attr("x", 500).attr("y", 330).text("2 Doses per 100k").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")
         svgs1.append("text").attr("x", 590).attr("y", 365).text(TwoD100k[State_id]).style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#2BF0CD").attr("alignment-baseline","middle")

         svgs1.append("text").attr("x", 370).attr("y", 430).text("Population").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")
         svgs1.append("text").attr("x", 380).attr("y", 465).text(PopS[State_id]).style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#2BF0CD").attr("alignment-baseline","middle")
})})
