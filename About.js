var svgabt = d3.select("#svgAbout");

svgabt.append("rect")
         .attr("x", 0)
         .attr("y", 0)
         .attr("height", 350)
         .attr("width", 1800)
         .style("stroke", "#808080")
         .style("fill", "none")
         .style("stroke-width", 0.5);

svgabt.append("text").attr("x", 80).attr("y", 60).text("Created by-").style("font-family", "Prompt").style("font-weight","200").style("font-size", "40px").style("fill", "#808080").attr("alignment-baseline","middle")
svgabt.append("text").attr("x", 315).attr("y", 60).text("Rohit Kher").style("font-family", "Prompt").style("font-weight","200").style("font-size", "40px").style("fill", "#1FD1B2").attr("alignment-baseline","middle")
svgabt.append("text").attr("x", 80).attr("y", 110).text("-Kindly make sure your browser's zoom is set at 100 percent.").style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")
svgabt.append("text").attr("x", 80).attr("y", 145).text("-The data used for this project is stored in the github repositiory i.e., it is dependent on the internet.Kindly refresh if it doesn't load.").style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")
svgabt.append("text").attr("x", 80).attr("y", 180).text("-The covid-19 progress graph has data from 13th Dec 2020 to 26th Feb 2021.").style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")
svgabt.append("text").attr("x", 80).attr("y", 215).text("-The state covid-19 progress graph has data from 30th Dec 2020 to 7th March 2021.").style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")
svgabt.append("text").attr("x", 80).attr("y", 250).text("-CDC started to report separate 1st dose and 2nd dose from 12th Jan 2021 at state level.").style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")
svgabt.append("text").attr("x", 80).attr("y", 285).text("-USA choropleth map shows data as of 26th Feb 2021 same goes for the table.").style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")
svgabt.append("text").attr("x", 80).attr("y", 315).text("-State choropleth map shows data as of 7th March 2021.").style("font-family", "Prompt").style("font-weight","200").style("font-size", "25px").style("fill", "#808080").attr("alignment-baseline","middle")
