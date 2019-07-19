var contador=0;
$(document).ready(function(){
	$('#agregar').click(function(){
		$('#prueba').css({'color':'red','font-size':'50px'})
		if($('#nombre').val()=="" && $('#apellido').val()=="" && $('#cedula').val()==""  ){
			$('#prueba').html("Los campos son obligatotios");
		}
		

	});
});