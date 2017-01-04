$(function(){
function affiche (){
 $.ajax({
  type :'GET',
  url : '/api/affiche',
  success : function(data){
   $('#liste').html('');
   $('#liste').append('<h1>Liste des adhérents</h1>');
   for (var i=0;i<data.length;i++){
    $('#liste').append('<h3>Identifiant : n° '+(i+1)+'</h3>');
    $('#liste').append('<p>Nom : '+data[i].nom+'</p>');
    $('#liste').append('<p>Prénom : '+data[i].prenom+'</p>');
   }
  }
 })
}
$('#monForm').on('submit',function(e){
 e.preventDefault();
 var nomForm=$('#nom').val();
 var prenomForm=$('#prenom').val();
 $.ajax({
  type:'POST',
  url:'/api/formulaire',
  data:{nom:nomForm,prenom:prenomForm},
  success:function(){
   affiche();
   $('#nom').val('');
   $('#prenom').val('');
  }
 });
})
affiche();
});