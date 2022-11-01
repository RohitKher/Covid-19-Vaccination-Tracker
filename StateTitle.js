var svgsT = d3.select("#svgStateTitle");


svgsT.append("rect")
         .attr("x", 0)
         .attr("y", 0)
         .attr("height", 95)
         .attr("width", 1800)
         .style("stroke", "black")
         .style("fill", "none")
         .style("stroke-width", 0.25);

         d3.csv("https://raw.githubusercontent.com/RohitKher/datafiles/main/finalpop.csv", function(csv){
               console.log(csv)
                var PopST = {};
                var nameST = {};
                      csv.forEach(function(d,i){
                        nameST[d.id]=d.State;


                      })

           svgsT.append("text").attr("x", 50).attr("y", 50).text(nameST[State_id]+" Covid-19 Vaccine Dashboard").style("font-family", "Prompt").style("font-weight","800").style("font-size", "40px").style("fill", "#1FD1B2").attr("alignment-baseline","middle")
           svgsT.append("text").attr("x", 1250).attr("y", 70).text("United States Covid-19 Vaccine Dashboard").style("font-family", "Prompt").style("font-weight","800").style("font-size", "25px").style("fill", "#1FD1B2").attr("alignment-baseline","middle")
           .on("click",function loadpage(d){
              URL='USA.html'
              window.location = URL;
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
})
