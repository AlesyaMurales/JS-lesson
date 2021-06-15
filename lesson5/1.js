var container = document.querySelector(".container");
container.style.background = "#DEB887";
container.style.width = "700px";
container.style.height = "700px";
container.style.paddingLeft = "70px";
container.style.paddingBottom = "70px";
container.style.margin = "0 auto";
container.style.display = "flex";
container.style.flexWrap = "wrap";

function my_initiation() {
    var cell = document.createElement("div");
    cell.className = "cell";
    cont.append(cell);
    cell.style.width = "60px";
    cell.style.height = "60px";
    cell.style.margin = "0px";
    cell.style.padding = "0px";
    cell.style.fontSize = "40px";
    cell.style.fontWeight = "bold";
    cell.style.textAlign = "center";

}
window.onload = my_initiation;

for (var n = 0; (n != 121); n++) {
    window.onload = my_initiation();
};

var masCell = document.querySelectorAll(".cell");
for (var i = 0; (i < masCell.length); i++) {
    var c;
    if (i % 2 == 0) {
        c = "dimgrey";
    } else {
        c = "bisque";
    }
    masCell[i].style.background = c;
    if ((i > 33) && (i < 42)) {
        masCell[i].innerText = "П";
    };
    if ((i > 88) && (i < 97)) {
        masCell[i].innerText = "П";
    };

    masCell[23].innerText = "Л";
    masCell[24].innerText = "К";
    masCell[25].innerText = "С";
    masCell[26].innerText = "Ф";
    masCell[27].innerText = "К";
    masCell[28].innerText = "С";
    masCell[29].innerText = "К";
    masCell[30].innerText = "Л";

    masCell[100].innerText = "Л";
    masCell[101].innerText = "К";
    masCell[102].innerText = "С";
    masCell[103].innerText = "Ф";
    masCell[104].innerText = "К";
    masCell[105].innerText = "С";
    masCell[106].innerText = "К";
    masCell[107].innerText = "Л";

    for (var f = 89; (f < 108); f++) {
        masCell[f].style.color = "black";
    }
    for (var f = 0; (f < 22); f++) {
        masCell[f].style.background = "#DEB887";
    }
    for (var f = 110; (f < 121); f++) {
        masCell[f].style.background = "#DEB887";
    }

    masCell[22].innerText = "1";
    masCell[33].innerText = "2";
    masCell[44].innerText = "3";
    masCell[55].innerText = "4";
    masCell[66].innerText = "5";
    masCell[77].innerText = "6";
    masCell[88].innerText = "7";
    masCell[99].innerText = "8";
    masCell[31].innerText = "1";
    masCell[42].innerText = "2";
    masCell[53].innerText = "3";
    masCell[64].innerText = "4";
    masCell[75].innerText = "5";
    masCell[86].innerText = "6";
    masCell[97].innerText = "7";
    masCell[108].innerText = "8";
    masCell[12].innerText = "A";
    masCell[13].innerText = "B";
    masCell[14].innerText = "C";
    masCell[15].innerText = "D";
    masCell[16].innerText = "E";
    masCell[17].innerText = "F";
    masCell[18].innerText = "G";
    masCell[19].innerText = "H";
    masCell[111].innerText = "A";
    masCell[112].innerText = "B";
    masCell[113].innerText = "C";
    masCell[114].innerText = "D";
    masCell[115].innerText = "E";
    masCell[116].innerText = "F";
    masCell[117].innerText = "G";
    masCell[118].innerText = "H";

    masCell[22].style.background = "#DEB887";
    masCell[33].style.background = "#DEB887";
    masCell[44].style.background = "#DEB887";
    masCell[55].style.background = "#DEB887";
    masCell[66].style.background = "#DEB887";
    masCell[77].style.background = "#DEB887";
    masCell[88].style.background = "#DEB887";
    masCell[99].style.background = "#DEB887";
    masCell[31].style.background = "#DEB887";
    masCell[32].style.background = "#DEB887";
    masCell[42].style.background = "#DEB887";
    masCell[43].style.background = "#DEB887";
    masCell[53].style.background = "#DEB887";
    masCell[54].style.background = "#DEB887";
    masCell[64].style.background = "#DEB887";
    masCell[65].style.background = "#DEB887";
    masCell[75].style.background = "#DEB887";
    masCell[76].style.background = "#DEB887";
    masCell[86].style.background = "#DEB887";
    masCell[87].style.background = "#DEB887";
    masCell[97].style.background = "#DEB887";
    masCell[98].style.background = "#DEB887";
    masCell[108].style.background = "#DEB887";
    masCell[109].style.background = "#DEB887";
}
