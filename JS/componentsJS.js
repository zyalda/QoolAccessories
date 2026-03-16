
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

function AddProductsComponent(start) {
  return class extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback(){
        const price = 800;
    jQuery.get('produkterTxt.txt', (data) => {
    const productArray = data.split("\r\n");

    for (let index = start; index < productArray.length; index+=3) {
       this.innerHTML += '<div class="pro"><a target="_new" href="#">'+
        '<img class="item-'+index+'" src="' + productArray[index] + '" alt="purse"/><p>Pris: '+price+'kr</p></a></div>';
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