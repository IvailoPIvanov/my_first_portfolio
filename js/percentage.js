/**
 * Created by Ivailo on 9.6.2016 ã..
 */

var dark = document.getElementsByClassName('dark'),
    radius = document.getElementsByClassName('svg')[0].getBBox().width / 2,
    t = 0.5,
    x = 0,
    y = 0,
    theta = {},
    maxTheta = calcTheta(document.getElementsByClassName('perc')),
    intervals = [];

function calcTheta(el) {
    var jbo = {};
    for (i = 0; i < el.length; i++) {
        theta[i] = 0;
        dark[i].setAttribute('transform', 'translate(' + radius + ',' + radius + ')');
        jbo[i] = (180 * parseInt(el[i].innerHTML.slice(0, -1), 10)) / 50;
    }
    return jbo;
}

var anim = function (j) {
    return function () {
        theta[j] += 0.5;
        var d = 'M0,0 v' + -radius + 'A' + radius + ',' + radius + ' 1 ' + ((theta[j] > 180) ? 1 : 0) + ',1 ' + Math.sin(theta[j] * Math.PI / 180) * radius + ',' + Math.cos(theta[j] * Math.PI / 180) * -radius + 'z';
        dark[j].setAttribute('d', d);
        if (theta[j] > maxTheta[j]) {
            clearInterval(intervals[j]);
        }
    }
};

for (var j = 0; j < dark.length; j++) {
    intervals.push(setInterval(anim(j), t));
}