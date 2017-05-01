"use strict";
var RGB = (function () {
    function RGB(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
    RGB.fromRgbString = function (colorString) {
        var _a = colorString.substring('rgb()'.length, colorString.length - 1)
            .split(',')
            .map(Number), red = _a[0], green = _a[1], blue = _a[2];
        return new RGB(red, green, blue);
    };
    RGB.prototype.invert = function () {
        return new RGB(255 - this.red, 255 - this.green, 255 - this.blue);
    };
    RGB.prototype.toString = function () {
        return "rgb(" + this.red + ", " + this.green + ", " + this.blue + ")";
    };
    return RGB;
}());
exports.RGB = RGB;
//# sourceMappingURL=RGB.js.map