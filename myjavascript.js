var contador=0;
$(document).ready(function(){
	
	$('#agregar').click(function(){
		$('#prueba').html(contador++);
	});
});