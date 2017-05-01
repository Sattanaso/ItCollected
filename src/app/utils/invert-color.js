"use strict";
var RGB_1 = require('./RGB');
function invert(color) {
    if (color instanceof RGB_1.RGB) {
        return color.invert();
    }
    var div = document.createElement('div');
    div.style.color = color;
    document.body.appendChild(div);
    var style = window.getComputedStyle(div);
    var rgbColor = RGB_1.RGB.fromRgbString(style.color);
    return rgbColor.invert();
}
exports.invert = invert;
;
//# sourceMappingURL=invert-color.js.map