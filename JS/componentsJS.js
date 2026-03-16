
class AddArticleComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 'Jag är en person med genuint intresse för och kunskap om utveckling och problemlösning och finner det mycket spännande.'+
        'Aktiv och gillar att röra på mig och träna. Bra på färg och former där skapa hjälper mig med CSS och att skpa mina smycken och väskor jag desinar och utför.'+
        'En familj människa som älskar barn, men gillar utmaningar genom teknik och tittar på som är nytt i branchen.';
    }
}
customElements.define('my-article', AddArticleComponent);

class AddHeaderComponent extends HTMLElement{
    connectedCallback(){
        this.innerHTML = '<div class="home"><a class="home-anchor" href="index.html"><i class="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp;Home</a></div>'+
                           '<p class="logo">Qool</p>'+
   '<div class="infosection"><a class="contactus-anchor" href="contactus.html">Kontakta oss</a>'+
   '<a class="contactus-anchor" href="aboutMe.html">Om oss</a></div>';
    }
}
customElements.define('my-header', AddHeaderComponent);

async function loadprodukterTxt() {
  let response = await fetch("produkterTxt.txt");
  let data = await response.text();
  return data;
}

function AddProductsComponent(start) {
  return class extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback(){
        const price = 800;
        // const products = ["produkter/ARM02701.JPG","produkter/ARM02702.JPG","produkter/ARM02703.JPG",
        //                 "produkter/ARM02705.JPG","produkter/ARM02706.JPG","produkter/ARM02708.JPG",
        //                 "produkter/ARM02709.JPG","produkter/ARM02710.JPG","produkter/ARM02711.JPG",
        //                 "produkter/ARM02714.JPG","produkter/ARM02719.JPG","produkter/ARM02720.JPG",
        //                 "produkter/HALS02701.JPG","produkter/IMG_1335.JPG","produkter/IMG_1545.JPG",
        //                 "produkter/IMG_4314.JPG","produkter/BYVF0822.JPG","produkter/FRKW2469.JPG",
        //                 "produkter/FRKW1286.JPG","produkter/FRKW6601.JPG","produkter/FRKW1288.JPG",
        //                 "produkter/FRKW1295.JPG","produkter/QQWX1606.JPG","produkter/FRKW1562.JPG",
        //                 "produkter/FRKW1563.PNG"];
loadprodukterTxt().then((data) => {
    const productsArray = data.split(",");
    for (let index = start; index < productsArray.length; index+=3) {
       this.innerHTML += '<div class="pro"><a target="_new" href="#">'+
        '<img class="item-'+index+'" src="./' + productsArray[index] + '" alt="purse"/></a><div><p>Pris: '+price+'kr</p></div></div>';
        }
        });
        }
    }
}

customElements.define('first-section', AddProductsComponent(0));
customElements.define('second-section', AddProductsComponent(1));
customElements.define('third-section', AddProductsComponent(2));


function customizedTitle(titleID, title) {
    document.getElementById(titleID).style.visibility = 'visible';
    document.getElementById(titleID).style.opacity = "1.0";
    document.getElementById(titleID).innerHTML = title;
}
function hideTitle(titleId){
     document.getElementById(titleId).style.opacity = "0.0";
}

$(document).ready(function(){
    $pageHead = "head.html";
    $pageFooter = "footer.html";
    $socialMedia = "socialMedia.html";

    $("head").load($pageHead);
    $("footer").load($pageFooter);
    $("socialmedia").load($socialMedia);
});