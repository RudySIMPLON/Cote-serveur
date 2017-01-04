$(function(){
$('button').on('click',function(){
  console.log('clique')
 $.ajax({
  type :'GET',
  url : '/api/affiche',
  success : function(data){
   $('#liste').html('<h1>Liste des adhérents</h1>');
   for (var i=0;i<data.length;i++){
    $('#liste').append('<h3>Nom: '+data[i].nom+'</h3>');
    $('#liste').append('<p>Prénom : '+data[i].prenom+'</p>');
    $('#liste').append('<p>Age : '+data[i].age+'</p>');
      $('#liste').append('<p>Sexe : '+data[i].sexe+'</p>');
    $('#liste').append('<p>Secret : '+data[i].secret+'</p>');


   }
  }
 })
})
});
    