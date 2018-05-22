(function () {
    let CSS_COLOR_NAMES = ["Red", "Blue", "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue"];

    let container = document.getElementById('container');
    let palette = document.getElementById('palette')
    let canvas = document.getElementById('canvas');
    let colorSection = document.getElementById('color-section');
    let brushColor = document.getElementById("brush-color");
    let redColor = document.getElementById('red');
    let blueColor = document.getElementById('blue');
    let currentColor = 'red'; //when page loads, color brush is red.


    // canvas.addEventListener('click', function (event) {
    //     event.target.style.backgroundColor = currentColor;

    // });

    colorSection.addEventListener('click', function (event) {
        currentColor = event.target.style.backgroundColor; //selects each color from colorSection.
        brushColor.style.backgroundColor = event.target.style.backgroundColor; //creates brush color.
    });

    canvas.addEventListener('mousedown', startBrushStroke); //mousedown- fires when pointing device is pressed onto an element.

    function startBrushStroke() {
       console.log('start');
       event.preventDefault(); //this overrides the default event listener
       colorCell();
       canvas.addEventListener('mouseover', drawBrushStroke); //mouseover=fires when cursor is moved onto the element
       canvas.addEventListener('mouseup', releaseBrushStroke); //mouseup- fires when cursor is released
    }

    function drawBrushStroke() {
       console.log('draw');
       event.preventDefault();
       colorCell();
    }

    function releaseBrushStroke() {
       event.preventDefault();
       canvas.removeEventListener('mouseover', drawBrushStroke);
    }

    function colorCell() {
        console.log('paint');
        event.preventDefault();
        event.target.style.backgroundColor = currentColor;
    }


    function generatePixelBoard() {
        for (let i = 0; i < 600; i++) {

            let pixelSquare = document.createElement('div');
            pixelSquare.classList.add('canvas-box');
            canvas.append(pixelSquare);
            //creates 600 divs that make up the pixel boxes
        }
    }

    function generateColorBoard() {
        for (let i = 0; i < CSS_COLOR_NAMES.length; i++) {
            let colorSquare = document.createElement('div');
            colorSquare.classList.add('color-box');
            colorSquare.style.backgroundColor = CSS_COLOR_NAMES[i];
            //creates colors based off of the css variable within the array above.
            colorSection.append(colorSquare);
        }
    }

    generatePixelBoard();
    generateColorBoard();
})();
