var svg1 = d3.select("#svgdash");

svg1.append("rect")
         .attr("x", 0)
         .attr("y", 0)
         .attr("height", 500)
         .attr("width", 900)
         .style("stroke", "black")
         .style("fill", "none")
         .style("stroke-width", 0.25);

         d3.csv("https://raw.githubusercontent.com/RohitKher/datafiles/main/VaccineData.csv", function(csv){
                console.log(csv)
                csv.forEach(function(d){
                     Del=d.Delivered;
                     Adm=d.Administered;
                     OneD=d.OneDose;
                     TwoD=d.TwoDose;
                     Pf=d.Pfizer;
                     UId=d.NI;
                     Mdrn=d.Moderna;
                     TPer=d.Per;
                })

            svg1.append("text").attr("x", 150).attr("y", 30).text(TPer +"%").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#2BF0CD").attr("alignment-baseline","middle")
            svg1.append("text").attr("x", 245).attr("y", 30).text(" of Population have been vaccinated").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")

            svg1.append("text").attr("x", 80).attr("y", 100).text("Total Doses Delivered").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")
            svg1.append("text").attr("x", 155).attr("y", 130).text(Del.replace(/,/g, "")).style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#2BF0CD").attr("alignment-baseline","middle")

            svg1.append("text").attr("x", 460).attr("y", 100).text("Total Doses Administered").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")
            svg1.append("text").attr("x", 570).attr("y", 130).text(Adm).style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#2BF0CD").attr("alignment-baseline","middle")

            svg1.append("text").attr("x", 80).attr("y", 200).text("No of People Receiving").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")
            svg1.append("text").attr("x", 110).attr("y", 230).text("1 or More Doses").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")
            svg1.append("text").attr("x", 155).attr("y", 260).text(OneD).style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#2BF0CD").attr("alignment-baseline","middle")

            svg1.append("text").attr("x", 460).attr("y", 200).text("No of People Receiving").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")
            svg1.append("text").attr("x", 520).attr("y", 230).text("2 or more Doses").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")
            svg1.append("text").attr("x", 570).attr("y", 260).text(TwoD).style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#2BF0CD").attr("alignment-baseline","middle")

            svg1.append("text").attr("x", 80).attr("y", 330).text("Pfizer-BioNTech Doses").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")
            svg1.append("text").attr("x", 155).attr("y", 360).text(Pf.replace(/,/g, "")).style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#2BF0CD").attr("alignment-baseline","middle")

            svg1.append("text").attr("x", 540).attr("y", 330).text("Moderna Doses").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")
            svg1.append("text").attr("x", 570).attr("y", 360).text(Mdrn.replace(/,/g, "")).style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#2BF0CD").attr("alignment-baseline","middle")

            svg1.append("text").attr("x", 300).attr("y", 430).text("Unidentified Doses").style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#808080").attr("alignment-baseline","middle")
            svg1.append("text").attr("x", 370).attr("y", 460).text(UId).style("font-family", "Prompt").style("font-weight","500").style("font-size", "30px").style("fill", "#2BF0CD").attr("alignment-baseline","middle")
  })
