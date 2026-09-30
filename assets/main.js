(function(){
  var f=document.getElementById('demande'), m=document.getElementById('form-msg');
  if(!f) return;

  // Pré-remplit le produit quand on arrive depuis "Demander la documentation"
  var doc=new URLSearchParams(location.search).get('doc');
  if(doc){
    f.produit.value=doc;
    f.objet.value='Documentation / dossier technique';
  }

  f.addEventListener('submit',function(e){
    e.preventDefault();
    var miss=['nom','etab','email'].filter(function(k){return !f[k].value.trim();});
    if(miss.length){
      m.textContent='Indiquez votre nom, votre établissement et votre e-mail pour recevoir une réponse.';
      f[miss[0]].focus();
      return;
    }
    m.textContent='Démonstration : dans la version finale, cette demande arrivera directement dans la boîte mail d’Arcomedic.';
  });
})();

// Vignettes : un produit avec plusieurs photos
document.querySelectorAll('.thumbs button').forEach(function(b){
  b.addEventListener('click',function(){
    var card=b.closest('.product'), main=card.querySelector('.ph img');
    main.src=b.dataset.src; main.alt=b.dataset.alt;
    card.querySelectorAll('.thumbs button').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false');});
  });
});
