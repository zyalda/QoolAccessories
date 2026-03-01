
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
   '<div class="infosection"><a class="contactus-anchor" href="contactus.html">Kontakta oss</a></div>';
    }
}

customElements.define('my-header', AddHeaderComponent);

function customizedTitle(titleID, title) {
    document.getElementById(titleID).style.display = "inline-block";
    document.getElementById(titleID).innerHTML = title;
}
function hideTitle(titleid){
     document.getElementById(titleid).style.display = "none";
     document.getElementById(titleid).style.top = 0;
}

$(document).ready(function(){
    $pageHead = "head.html";
    $pageFooter = "footer.html";
    $socialMedia = "socialMedia.html";

    $("head").load($pageHead);
    $("footer").load($pageFooter);
    $("socialmedia").load($socialMedia);
});