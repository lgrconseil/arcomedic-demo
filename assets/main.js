(function(){
  var f=document.getElementById('devis'), m=document.getElementById('form-msg');
  if(!f) return;
  f.addEventListener('submit',function(e){
    e.preventDefault();
    if(!f.nom.value.trim()||!f.tel.value.trim()){
      m.textContent='Indiquez votre nom et votre téléphone pour être rappelé.';
      (f.nom.value.trim()?f.tel:f.nom).focus();
      return;
    }
    m.textContent='Démonstration : dans la version finale, cette demande arrivera directement dans la boîte mail d’Arcomedic.';
  });
})();
