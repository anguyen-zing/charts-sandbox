
window.addEventListener('load', async () => {

    const response = await fetch('/assets/data_samples/worldcup_groupstanding.json');
    const data = await response.json();

    const matchLabels = data.matches;
    const teams = data.teams;


    var myConfig = {
        "type": "rankflow",
        "globals": {
            "font-family": "Arial",
        },
        "options": {
            "global-ranking": false,
            "color-type": "palette",
            "palette": ['#b70606', '#018ab8', '#1e6b38', '#93cdd8'],
            "style": {
                "label-overall": {
                    "text": "Group Standings Over Time",
                    "font-weight": "bold"
                },
                "tooltip": {
                    "font-size": "13px",
                    "font-color": "#fff",
                    "background-color": "#424242",
                    "shadow": false,
                    "border-width": "0px",
                    "border-color": "none",
                    "border-radius": "8px"
                },
                "flow": {
                    "border-width": "0px",
                    "border-color": "none",
                    "shadow": false
                },
                "item-flow": {
                    "font-size": "13px",
                    "font-color": "#ffffff"
                },
                "rank-overall": {
                    "background-color": "#393d4b",
                    "font-size": "13px",
                    "font-color": "#d8d9db"
                },
                "rank-left": {
                    "visible": 1
                },
                "rank-right": {
                    "visible": 0
                }
            }
        },
        "plotarea": {
            "margin": 20
        },
        "scale-x": {
            "labels": matchLabels,
            "item": {
                "font-color": "#b1b5bf",
                "font-size": "14px",
                "font-weight": "normal"
            },
            "values": matchLabels,
        },
        "series": teams.map(team => ({
            "text": team.name,
            "ranks": team.ranklist,
            "rank": team.ranklist[team.ranklist.length - 1]
        }))
    };

    zingchart.render({
        id: 'myChart',
        data: myConfig,
        height: "100%",
        width: "100%",
        output: "svg"
    });
    console.log(document.getElementById("myChart").innerHTML);
});






