function initViz() {
    var containerDiv = document.getElementById("tableauViz"),
        url = "https://prod-apnortheast-a.online.tableau.com/t/xn9csy2c3ycsyap0u3uh2w8acwb/views/_0/Sheet1";

    var viz = new tableau.Viz(containerDiv, url);
}