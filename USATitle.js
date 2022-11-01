var svgT = d3.select("#svgTitle");


svgT.append("rect")
         .attr("x", 0)
         .attr("y", 0)
         .attr("height", 95)
         .attr("width", 1800)
         .style("stroke", "black")
         .style("fill", "none")
         .style("stroke-width", 0.25);

         svgT.append("text").attr("x", 50).attr("y", 50).text("United States Covid-19 Vaccine Dashboard").style("font-family", "Prompt").style("font-weight","800").style("font-size", "40px").style("fill", "#1FD1B2").attr("alignment-baseline","middle")
