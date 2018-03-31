const ARRAY_LENGTH = 15;

const ARRAY_OF_COLORS = [
    "#000000", // MEDIUM SKY BLUE
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
    "#D3F8E2", // AERO BLUE
    "#7B5D2F", // SIENNA
    "#271D12", // DARK OLIVE GREEN
    "#C4B9A5", // ROSY BROWN
    "#E2E2DE", // GAINSBORO
    "#FCC47C", // LIGHT SALMON
    "#D1A185", // TAN
    "#5A4943", // DIM GRAY
    "#BEB6B1", // SILVER
    "#151D39", // MIDNIGHT BLUE
    "#7D7770", // GRAY
    "#5C6C74", // SLATE GRAY
    "#96A9AD", // LIGHT SLATE GRAY
    // Light Blue
    "#03A9F4",
    "#E1F5FE",
    "#B3E5FC",
    "#81D4FA",
    "#4FC3F7",
    "#29B6F6",
    "#03A9F4",
    "#039BE5",
    "#0288D1",
    "#0277BD",
    "#01579B",
    "#80D8FF",
    "#40C4FF",
    "#00B0FF",
    "#0091EA",
    // Blue Grey
    "#607D8B",
    "#ECEFF1",
    "#CFD8DC",
    "#B0BEC5",
    "#90A4AE",
    "#78909C",
    "#607D8B",
    "#546E7A",
    "#455A64",
    "#37474F",
    "#263238",
    // Grey
    "#9E9E9E",
    "#FAFAFA",
    "#F5F5F5",
    "#EEEEEE",
    "#E0E0E0",
    "#BDBDBD",
    "#9E9E9E",
    "#757575",
    "#616161",
    "#424242",
    "#212121",
    // Deep Orange
    "#FF5722",
    "#FBE9E7",
    "#FFCCBC",
    "#FFAB91",
    "#FF8A65",
    "#FF7043",
    "#FF5722",
    "#F4511E",
    "#E64A19",
    "#D84315",
    "#BF360C",
    "#FF9E80",
    "#FF6E40",
    "#FF3D00",
    "#DD2C00",
    // Brown
    "#795548",
    "#EFEBE9",
    "#D7CCC8",
    "#BCAAA4",
    "#A1887F",
    "#8D6E63",
    "#795548",
    "#6D4C41",
    "#5D4037",
    "#4E342E",
    "#3E2723",
    // Cyan
    "#00BCD4",
    "#E0F7FA",
    "#B2EBF2",
    "#80DEEA",
    "#4DD0E1",
    "#26C6DA",
    "#00BCD4",
    "#00ACC1",
    "#0097A7",
    "#00838F",
    "#006064",
    "#84FFFF",
    "#18FFFF",
    "#00E5FF",
    "#00B8D4",
    // BLUE
    "#2196F3",
    "#E3F2FD",
    "#BBDEFB",
    "#90CAF9",
    "#64B5F6",
    "#42A5F5",
    "#2196F3",
    "#1E88E5",
    "#1976D2",
    "#1565C0",
    "#0D47A1",
    "#82B1FF",
    "#448AFF",
    "#2979FF",
    "#2962FF",
    // Deep Purple
    "#673AB7",
    "#EDE7F6",
    "#D1C4E9",
    "#B39DDB",
    "#9575CD",
    "#7E57C2",
    "#673AB7",
    "#5E35B1",
    "#512DA8",
    "#4527A0",
    "#311B92",
    "#B388FF",
    "#7C4DFF",
    "#651FFF",
    "#6200EA",
    // Indigo
    "#3F51B5",
    "#E8EAF6",
    "#C5CAE9",
    "#9FA8DA",
    "#7986CB",
    "#5C6BC0",
    "#3F51B5",
    "#3949AB",
    "#303F9F",
    "#283593",
    "#1A237E",
    "#8C9EFF",
    "#536DFE",
    "#3D5AFE",
    "#304FFE",
    // Purple
    "#9C27B0",
    "#F3E5F5",
    "#E1BEE7",
    "#CE93D8",
    "#BA68C8",
    "#AB47BC",
    "#9C27B0",
    "#8E24AA",
    "#7B1FA2",
    "#6A1B9A",
    "#4A148C",
    "#EA80FC",
    "#E040FB",
    "#D500F9",
    "#AA00FF",
    // Red
    "#F44336",
    "#FFEBEE",
    "#FFCDD2",
    "#EF9A9A",
    "#E57373",
    "#EF5350",
    "#F44336",
    "#E53935",
    "#D32F2F",
    "#C62828",
    "#B71C1C",
    "#FF8A80",
    "#FF5252",
    "#FF1744",
    "#D50000",
    // Pink
    "#E91E63",
    "#FCE4EC",
    "#F8BBD0",
    "#F48FB1",
    "#F06292",
    "#EC407A",
    "#E91E63",
    "#D81B60",
    "#C2185B",
    "#AD1457",
    "#880E4F",
    "#FF80AB",
    "#FF4081",
    "#F50057",
    "#C51162",
    // Teal
    "#009688",
    "#E0F2F1",
    "#B2DFDB",
    "#80CBC4",
    "#4DB6AC",
    "#26A69A",
    "#009688",
    "#00897B",
    "#00796B",
    "#00695C",
    "#004D40",
    "#A7FFEB",
    "#64FFDA",
    "#1DE9B6",
    "#00BFA5"
]

const ARRAY_OF_FONTS = [
    'Roboto',
    'Open Sans',
    'Lato',
    'Roboto Condensed',
    'Oswald',
    'Montserrat',
    'Raleway',
    'Slabo 27px',
    'Source Sans Pro',
    'PT Sans',
    'Roboto Slab',
    'Merriweather',
    'Noto Sans',
    'Ubuntu',
    'Open Sans Condensed',
    'Playfair Display',
    'Lora',
    'Poppins',
    'Arimo',
    'PT Serif',
    'Roboto Mono',
    'Titillium Web',
    'Muli',
    'PT Sans Narrow',
    'Fira Sans',
    'Nunito',
    'Noto Serif',
    'Dosis',
    'Indie Flower',
    'Inconsolata',
    'Anton',
    'Bitter',
    'Crimson Text',
    'Oxygen',
    'Nanum Gothic',
    'Lobster',
    'Cabin',
    'Fjalla One',
    'Josefin Sans',
    'Libre Baskerville',
    'Quicksand',
    'Work Sans'
]

var rand = function (arr) {
    return Math.floor(Math.random() * arr.length);
}

var randomEntity = function (array) {
    let entity = array[rand(array)];
    return entity;
}

$(document).ready(function () {
    $("button").click(function () {
        let background_color = randomEntity(ARRAY_OF_COLORS),
            font_family = randomEntity(ARRAY_OF_FONTS);

        $("body").css("background-color", background_color);
        $("body").css("font-family", font_family);

        console.log("Background color = " + background_color);

        Decide_Text_color(background_color);

        function Decide_Text_color(hex_color) {
            let R = parseInt(hex_color.slice(1, 3), 16),
                G = parseInt(hex_color.slice(3, 5), 16),
                B = parseInt(hex_color.slice(5, 7), 16),
                RGB_color = "rgb(" + R + ", " + G + ", " + B + ")",
                color_brightness = Math.round(((R * 299) + (G * 587) + (B * 114)) / 1000),
                text_color = (color_brightness > 125) ? "#000" : "#FFF";

            $("body").css("color", text_color);
        }

        // console.log("color brightness = " + brightness);
        // if (brightness > 125) {
        //     $("body").css("color", "white");
        // } else {
        //     $("body").css("color", "black");
        // }

        // Used from
        // http://www.w3.org/TR/AERT#color-contrast
        // if (randomEntity((ARRAY_OF_COLORS) / 1000) > 200) {
        //     $("body").css("color", "black");
        // } else {
        //     $("body").css("color", "white");
        // }
        // var o = Math.round(((parseInt(rgb[0]) * 299) +
        //     (parseInt(rgb[1]) * 587) +
        //     (parseInt(rgb[2]) * 114)) / 1000);
        // var fore = (o > 125) ? 'black' : 'white';
        // var back = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';




        // $.ajax({
        //     url: "select.php",
        //     method: "POST"
        //
        // }).done(function (result) {
        //     $(".row").hide().html(result).fadeIn();
        //     $("body").css("background-color", randomEntity(ARRAY_OF_COLORS));
        //     $("blockquote p").css("font-family", randomEntity(ARRAY_OF_FONTS));
        //
        //

        //     $('#bg').css('color', fore);
        //     $('#body').css('background-color', back);
        //
        // }).fail(function (err) {
        //     // throw err;
        //     $(".row").html(err);
        //     console.log(err);
        // });
    });
});