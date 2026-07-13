
// DEFINING DATA 

const chefs = [
    { x: -94, y: -100, name: "Gas Station Sushi Chef", marker: "/assets/pictures/chefs/sushi-gas_station.png" },
    { x: -87, y: 37, name: '"I Learned This on TikTok" Cook', marker: "/assets/pictures/chefs/tiktok.png" },
    { x: -81, y: -44, name: "College Student with a Hot Plate", marker: "/assets/pictures/chefs/college_cook.png" },
    { x: -74, y: 79, name: "Waffle House Cook at 2 AM", marker: "/assets/pictures/chefs/waffle_house.png" },
    { x: -66, y: -17, name: "Uncle Who Grills Everything Well-Done", marker: "/assets/pictures/chefs/cooking_uncle.png" },

    { x: -58, y: 100, name: "Grandma Who Never Uses Recipes", marker: "/assets/pictures/chefs/cooking_grandma.png" },
    { x: -49, y: -71, name: "Microwave Meal Expert", marker: "/assets/pictures/chefs/microwave-expert.png" },
    { x: -42, y: 15, name: "Dad at the BBQ", marker: "/assets/pictures/chefs/remy.png" },
    { x: -25, y: 56, name: "Costco Sample Lady", marker: "/assets/pictures/chefs/costco_sample.png" },
    { x: -17, y: -39, name: "Air Fryer Addict", marker: "/assets/pictures/chefs/airfryer.png" },

    { x: -8, y: 88, name: "Gordon Ramsay", marker: "/assets/pictures/chefs/remy.png" },
    { x: 0, y: 0, name: "Average Home Cook", marker: "/assets/pictures/chefs/remy.png" },
    { x: 9, y: -84, name: '"Medium Rare Chicken" Fan', marker: "/assets/pictures/chefs/remy.png" },
    { x: 27, y: -23, name: "YouTube Shorts Chef", marker: "/assets/pictures/chefs/remy.png" },
    { x: 39, y: 96, name: "Remy (Ratatouille)", marker: "/assets/pictures/chefs/remy.png" },
    { x: 51, y: -58, name: "Kitchen Fire Starter", marker: "/assets/pictures/chefs/remy.png" },

    { x: 63, y: 33, name: "Instagram Food Influencer", marker: "/assets/pictures/chefs/remy.png" },
    { x: 74, y: -100, name: "Cafeteria Mystery Meat Chef", marker: "/assets/pictures/chefs/remy.png" },
    { x: 82, y: 81, name: "Michelin Star Chef", marker: "/assets/pictures/chefs/remy.png" },
    { x: 90, y: -6, name: '"Trust Me, I Eyeball Everything"', marker: "/assets/pictures/chefs/remy.png" },
    { x: 100, y: 100, name: "Mom", marker: "/assets/pictures/chefs/remy.png" }
];

// const chefMapCoordinates = chefs.map(chef => ( [chef.x, chef.y] ));
// const chefToolTipLabel = chefs.map(label => { label.name});
const chefSeries = chefs.map(chef => ({

    "values": [[chef.x, chef.y]],
    "text": chef.name,
    "marker": {
        "size": "75px",
        "background-color": 'none',
        "background-image": chef.marker,
        "background-repeat": 'no-repeat',
        "background-scale": 0.25,
    },

    "highlight-marker": {
        "size": 1,
        "background-image": chef.marker
    }
}));


var myConfig4 = {
    "type": "scatter",

    "title": {
        text: "Should You Trust that Chef?",
        adjustLayout: true
    },

    "tooltip": {
        "text": "%t: %v",
        "font-color": "black",
        "font-family": "Georgia, serif",
        "background-color": "white",
        "border-color": "black",
        "border-width": 2
    },

    "scaleX": {
        "min-value": "-100",
        "max-value": 100,
        "label": "Very Truthworthy",
        "refLine": {
            visible: true,
            lineColor: 'gray',
            lineWidth: '2px',
            lineStyle: 'solid'
        }
    },

    "scaleY": {
        "min-value": -100,
        "max-value": 100,

        "refLine": {
            visible: true,
            lineColor: 'gray',
            lineWidth: '2px',
            lineStyle: 'solid'
        }
    },

    "series": chefSeries
};

zingchart.render({
    id: 'myChart',
    data: myConfig4,
    height: "100%",
    width: "100%"
});


