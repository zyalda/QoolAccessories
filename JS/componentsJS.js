
class AddAboutMeArticleComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<h2>About us</h2>'+
        '<div>Qool a small private project to create a daily, simple accessories yet elegant and fit all occusions.'+
        ' With my passion for color, forms and a unik version to create my own designs of purses and accessories.'+
        '</div>Inspired by people and enviroments around me, I represent here my collections available for you to complete your look'+
        ' and your home decorations. <div>My purses made of pearls can be ues as decoration as well as usual purse.</div>';
    }
}
customElements.define('my-article', AddAboutMeArticleComponent);

// //My weather section.
class AddweatherComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML ='<input type="text" id="city" name="city" required pattern="[a-z A-Z]+"'+
                        'onfocus="myOnfocus(this)" value="Stockholm"/>'+
                        '<button id="getWeather-btn" onclick="GetTheWeather()">Vädret</button>'+
                        '<div id="weatherInfo"></div>';
    }
}
customElements.define('my-weather', AddweatherComponent);

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

        loadprodukterTxt().then((data) => {
        const productsArray = data.split(",");
        for (let index = start; index < productsArray.length; index+=3) {
        this.innerHTML += '<div class="item"><a target="_new" href="product.html">'+
                        '<img class="item-'+index+'" src="./' + productsArray[index] + '" alt="purse"/>'+
                        '<div><p>Pris: '+price+'kr</p></div></a>'+
                        '<div><button id="btn-'+index+'" class="buy-btn">KÖP Nu</button></div></div>';
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