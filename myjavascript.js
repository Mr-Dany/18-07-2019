var contador=0;
$(document).ready(function(){
	$('#agregar').click(function(){
		if($('#nombre').val()==""){
			$('#mnombre').css({'color':'red','font-size':'10px'})
			$('#mnombre').html("Los campos son obligatotios");
		}
		if($('#apellido').val()==""){
			$('#mapellido').css({'color':'red','font-size':'10px'})
			$('#mapellido').html("Los campos son obligatotios");
		}
		if($('#cedula').val()==""){
			$('#mcedula').css({'color':'red','font-size':'10px'})
			$('#mcedula').html("Los campos son obligatotios");
		}

		

	});
});






// var contador=0;
// $(document).ready(function(){
// 	$('#agregar').click(function(){
// 		$('#prueba').css({'color':'red','font-size':'50px'})
// 		if($('#nombre').val()=="" && $('#apellido').val()=="" && $('#cedula').val()==""  ){
// 			$('#prueba').html("Los campos son obligatotios");
// 		}
		

// 	});
// });