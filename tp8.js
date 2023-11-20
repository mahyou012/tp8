function seconnecter() {
    var login = prompt("Donner votre nom d'utilisateur")
    var mdp = prompt("Donner votre mot de passe")
    if (login == "admin" && mdp == "admin") {
        document.write(`Bienvenue ${login}`);
    }
    else {
        alert("Accès refusé")
    }
}

function seconnecter2() {
    window.location.href='https://mahyou012.github.io/login/'
}

function cdc() {
    var chaine = prompt("Donnez un mot");
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("La chaîne contient " + chaine.length + " caractères" + "<br>");
    document.write("La première lettre est " + chaine.substring(0,1) + "<br>");
}

function swich() {
    var color = prompt("Entrez une couleur");
    switch (color) {
        case "rouge":
            document.body.style.background = "red";
            break;
        case "ROUGE":
            document.body.style.background = "red";
            break;
	case "Rouge":
            document.body.style.background = "red";
            break;
        case "bleu":
            document.body.style.background = "blue";
            break;
	case "Bleu":
            document.body.style.background = "blue";
            break;
        case "BLEU":
            document.body.style.background = "blue";
            break;
        case "violet":
            document.body.style.background = "purple";
            break;
	case "Violet":
            document.body.style.background = "purple";
            break;
        case "VIOLET":
            document.body.style.background = "purple";
            break;
        case "vert":
            document.body.style.background = "green";
            break;
	case "Vert":
            document.body.style.background = "green";
            break;
        case "VERT":
            document.body.style.background = "green";
            break;
    
        default:
            alert("Couleur non prise en charge, veuillez choisir parmis : Bleu, Violet, Rouge et Vert");
    }
}

function affichagetab() {
    document.write('<table border=2px width=30%>');
    for(var i = 0; i<=5; i++) {
        document.write('<tr><td>*</td><td>*</td><td>*</td></tr>');
    }
    document.write('</table>');
}

function affichagetab2() {
    var count = prompt("Entrez le nombre de lignes pour votre tableau");
    document.write('<table border=2px width=30%');
    for(var i = 1; i <= count; i++) {
        document.write(`<tr><td>${i}</td><td>*</td><td>*</td></tr>`);
    }
    document.write("</table>");
}



function bonus() {
    var affich1 = "";
    var somme_tot = 0;
    do {
        var article = prompt("Votre article");
        var prix = prompt("Le prix");
        var quantite = prompt("La quantité");
        var somme = (Number(prix) * Number(quantite));
        somme_tot += somme;
        alert("Vos " + article + " coûteront " + somme + " €");
        affich1 += ("Article : " + article + "<br> Prix : " + prix + "€" + "<br> Quantité : " + quantite + "<br> Total : " + somme + " € " + "<br><br><br>");
        alert("Vos articles additionnés coûteront " + somme_tot + " €");
        var suite = prompt("Voulez-vous continuer (OUI/STOP) ?")
    }while(suite == "OUI");
    if (suite == "STOP") {
        document.write(affich1);
        document.write("Prix total : " + somme_tot + " €");

    }

}
