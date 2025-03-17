
function showFontStyle(font, style, url=""){
    var tr = document.createElement('tr');
    tr.setAttribute("style", "font: " + style + " 1em '" + font + "';");

    if( url.length > 0 ){
        var td = document.createElement('td');
        td.setAttribute("rowspan", 3);
        // td.appendChild(document.createTextNode(font));
        var a = document.createElement('a');
        a.href = url;
        a.innerText = font;
        a.target = "_blank";
        td.appendChild(a);
        tr.appendChild(td);
    }

    var td = document.createElement('td');
    td.appendChild(document.createTextNode(style));
    tr.appendChild(td);

    td = document.createElement('td');
    td.appendChild(document.createTextNode("0Oo"));
    tr.appendChild(td);

    td = document.createElement('td');
    td.appendChild(document.createTextNode("1lI"));
    tr.appendChild(td);

    td = document.createElement('td');
    td.appendChild(document.createTextNode("6X9"));
    tr.appendChild(td);

    td = document.createElement('td');
    td.appendChild(document.createTextNode("*²°"));
    tr.appendChild(td);

    td = document.createElement('td');
    td.appendChild(document.createTextNode("q_p"));
    tr.appendChild(td);

    td = document.createElement('td');
    td.appendChild(document.createTextNode("_-=~+"));
    tr.appendChild(td);

    td = document.createElement('td');
    td.appendChild(document.createTextNode("{([|])}"));
    tr.appendChild(td);

    td = document.createElement('td');
    td.appendChild(document.createTextNode("-> != >= /= ++ <!-- <=> "));
    tr.appendChild(td);

    td = document.createElement('td');
    td.appendChild(document.createTextNode("ABCDEFGHIJKLMNOPQRSTUVWXYZ_1742536890_abcdefghijklmnopqrstuvwxyz"));
    tr.appendChild(td);

    return tr;
}

function showFont(font,url) {
    var table = document.getElementById("showFontsHere");
    table.appendChild( showFontStyle(font, "italic",url));
    table.appendChild( showFontStyle(font, "normal")  );
    table.appendChild( showFontStyle(font, "bold")   );
}

function fillTable(){
    showFont("Consola",                "https://learn.microsoft.com/fr-fr/typography/font-list/consolas");
    showFont("Courier New",            "https://learn.microsoft.com/fr-fr/typography/font-list/courier-new");
    showFont("Cascadia Code",          "https://github.com/microsoft/cascadia-code");
    showFont("Cascadia Mono",          "https://github.com/microsoft/cascadia-code");
    showFont("DejaVu Sans Mono",       "https://dejavu-fonts.github.io/");
    showFont("Fira Code",              "https://fonts.google.com/specimen/Fira+Code");
    showFont("IBM Plex Mono",          "https://fonts.google.com/specimen/IBM+Plex+Mono");
    showFont("JetBrains Mono NL",      "https://www.jetbrains.com/lp/mono/");
    showFont("JetBrains Mono",         "https://www.jetbrains.com/lp/mono/");
    showFont("JuliaMono",              "https://juliamono.netlify.app/");
    showFont("Lucida Sans Typewriter", "https://learn.microsoft.com/fr-fr/typography/font-list/lucida-sans-typewriter");
    showFont("Noto Mono",              "https://fonts.google.com/noto/specimen/Noto+Sans+Mono");
    showFont("Source Code Pro",        "https://github.com/adobe-fonts/source-code-pro/releases");
}
