const ARRAY_LENGTH = 15;
const ARRAY_OF_COLORS = [
    "#7BDFF2", // MEDIUM SKY BLUE
    "#B2F7EF", // PALE TURQUOISE
    "#EFF7F6", // WHITE SMOKE
    "#F7D6E0", // PALE PINK
    "#F2B5D4", // ORCHID PINK
    "#2EC4B6", // MAXIMUM BLUE GREEN
    "#CBF3F0", // AERO BLUE
    "#FFFFFF", // WHITE
    "#FFBF69", // TOPAZ
    "#FF9F1C", // BRIGHT YELLOW (CRAYOLA)
    "#A9DEF9", // NON-PHOTO BLUE
    "#EDE7B1", // PALE GOLDENROD
    "#F694C1", // PASTEL MAGENTA
    "#E4C1F9", // MAUVE
    "#D3F8E2" // AERO BLUE
]
const ARRAY_OF_FONTS = [
    'Roboto',
    'Open Sans',
    'Lato',
    'Roboto Condensed',
    'Oswald',
    'Montserrat',
    'Source Sans Pro',
    'Slabo 27px',
    'Raleway',
    'PT Sans',
    'Roboto Slab',
    'Merriweather',
    'Open Sans Condensed',
    'Ubuntu',
    'Noto Sans'
]
var rand = function () {
    return Math.floor(Math.random() * ARRAY_LENGTH)
}
var randomEntity = function (array) {
    var entity = array[rand()];
    return entity;
}

$(document).ready(function () {
    $("button").click(function () {
        $("body").css("background-color", randomEntity(ARRAY_OF_COLORS));
        $(".row div").css("font-family", randomEntity(ARRAY_OF_FONTS));
    });
});