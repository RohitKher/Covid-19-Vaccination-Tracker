var svgsinst = d3.select("#svgStateinst");

svgsinst.append("rect")
         .attr("x", 0)
         .attr("y", 0)
         .attr("height", 100)
         .attr("width", 1800)
         .style("stroke", "#808080")
         .style("fill", "none")
         .style("stroke-width", 0.5);

svgsinst.append("text").attr("x", 80).attr("y", 50).text("-Kindly click on ").style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")
svgsinst.append("text").attr("x", 274).attr("y", 50).text("United States Covid-19 Vaccine Dashboard ").style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#1FD1B2").attr("alignment-baseline","middle")
svgsinst.append("text").attr("x", 790).attr("y", 50).text("on the right corner to go back. ").style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")
