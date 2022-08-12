function s_(a) {
    document.getElementById(a).focus();
    document.getElementById(a).select()
}

function toggle(source) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != source)
            checkboxes[i].checked = source.checked;
    }
}

function cY_(e) {
    var a = ["apple", "bestbuy", "coffee", "drip", "egg", "fruit", "golf", "hulu", "iphone", "jack", "korean", "laptop", "music", "nut", "omelet", "park", "queen", "rope", "skype", "tokyo", "usa", "visa", "walmart", "xbox", "yelp", "zip"];
    var d = "";
    for (var b = 0; b < e.length; b++) {
        var f = e.charCodeAt(b);
        if (65 <= f && f <= 90) {
            f -= 65;
            d += a[f].toUpperCase()
        } else {
            if (97 <= f && f <= 122) {
                f -= 97;
                d += a[f]
            } else {
                d += e.substring(b, b + 1)
            }
        }
        d += " "
    }
    return d
}

function AY_(a, f, b) {
    var d = Math.floor(Math.random() * a.length);
    var c = Math.floor(Math.random() * f);
    var e = b.substring(0, c) + a.substring(d, d + 1) + b.substring(c, f);
    b = e;
    return b
}

function Em0(r, k, l, m, o, c, x9) {
    var d = "abcdefghjkmnpqrstuvwxyz";
    var h = "ABCDEFGHJKLMNPQRSTUVWXYZ";
    var p = "23456789";
    var j = "!#$%&*+-=?@^_";
    if (!k) {
        d += "ilo";
        h += "IO";
        p += "01";
        j += "|"
    }
    var a = "";
    var g = 0;
    if (!x9) {
        j += "{}[]()\/'\"`~,;:.<>\\";
    }
    if (l == 1) {
        a += d;
        g++
    }
    if (m == 1) {
        a += h;
        g++
    }
    if (o == 1) {
        a += p;
        g++
    }
    if (c == 1) {
        a += j;
        g++
    }
    if (g == 0) {
        q = "You must select at least one character set!";
        return q
    }
    var n = a.length;
    var f = r - g;
    var q = "";
    for (var e = 0; e < f; e++) {
        var b = Math.floor(Math.random() * n);
        q += a.substring(b, b + 1)
    }
    if (m) {
        q = AY_(h, f, q);
        f++
    }
    if (l) {
        q = AY_(d, f, q);
        f++
    }
    if (o) {
        q = AY_(p, f, q);
        f++
    }
    if (c) {
        q = AY_(j, f, q)
    }
    return q
}

function d2O() {
    var b = document.getElementById("pgLength").value;
    var f = 0;
    if (document.getElementById("Nosimilar").checked) {
        f = 1
    }
    var a = 0;
    if (document.getElementById("Symbols").checked) {
        a = 1
    }
    var a6 = 0;
    if (document.getElementById("NoAmb").checked) {
        a6 = 1
    }
    var g = 0;
    if (document.getElementById("Lowercase").checked) {
        g = 1
    }
    var b7 = 0;
    if (document.getElementById("AutoSelect").checked) {
        b7 = 1
    }
    var l = 0;
    if (document.getElementById("Uppercase").checked) {
        l = 1
    }
    var p = 0;
    if (document.getElementById("Numbers").checked) {
        p = 1
    }
    var e = true;
    if (e) {
        var o = Em0(b, f, g, l, p, a, a6);
        var k = cY_(o);
        document.getElementById("final_pass").value = o;
        if (b > 50) k = "";
        if (b7) s_('final_pass');
    }
}

function Jx2(a, d, b) {
    var e = new Date();
    e.setDate(e.getDate() + b);
    var c = escape(d) + ((b == null) ? "" : "; expires=" + e.toUTCString());
    document.cookie = a + "=" + c
}

function x2J() {
    var d = document.cookie.split(";");
    for (var c = 0; c < d.length; c++) {
        var b = d[c];
        var e = b.indexOf("=");
        var a = e > -1 ? b.substr(0, e) : b;
        document.cookie = a + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
    }
}

function BBB(b, c) {
    var a = document.getElementById(b).checked;
    Jx2(b, a, c)
}

function S7P(a) {
    var c = true;
    var d = 60;
    if (c) {
        BBB("Symbols", d);
        BBB("Lowercase", d);
        BBB("Uppercase", d);
        BBB("Numbers", d);
        BBB("Nosimilar", d);
        BBB("NoAmb", d);
        BBB("AutoSelect", d);
        var b = document.getElementById("pgLength").value;
        Jx2("pgLength", b, d)
    } else {
        if (a) {
            x2J()
        }
    }
};

function $(id) {
    return document.getElementById(id);
}