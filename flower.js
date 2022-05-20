// OOGA DOJO
// ;)
// Flower Animation Modified from https://codepen.io/brettclanton001/pen/abNMZZ
(function () {
  $(function () {
    var c, d, e, i, j, left, n, r, ref, top;
    n = 50; // number of overlapping circles

    d = 800; // diameter of circles (px)

    r = d / 2; // radius

    e = 0.9; // eye dilation

    c = ""; // circles html

    top = function (i, e) {
      return -r + r * e * Math.cos(2 * Math.PI * i / n);
    };

    left = function (i, e) {
      return -r + r * e * Math.sin(2 * Math.PI * i / n);
    };

    for (i = j = 1, ref = n; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
      c += `<circle id=\"${i}\" style=\"width:${d}px; height:${d}px; top:${top(i, e)}px; left:${left(i, e)}px;\"></circle>`;
    }

    return $('circles').html(c);
  });
}).call(this);
