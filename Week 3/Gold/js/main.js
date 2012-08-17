$('#home').on('pageinit', function(){
	
});	

var storeData = function(data){
	console.log(data);
}
		
$('#addItem').on('pageinit', function(){

	var myForm = $('#projectform');
	    myForm.validate({
		invalidHandler: function(form, validator) {},
		submitHandler: function() {
			var data = myForm.serializeArray();
			storeData(data);
		}
	});

});