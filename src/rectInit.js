import Konva from 'konva';

module.exports.createRect = function() {
    var rectangle = new Konva.Rect({
        x: 100,
        y: 100,
        width: 100,
        height: 50,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
        shadowOffsetX: 20,
        shadowOffsetY: 25,
        shadowBlur: 40,
        opacity: 0.5
    });
    
    rectangle.draggable('true');
    return rectangle;
}
