$('#home').on('pageinit', function(){
	
});	
		
$('#addItem').on('pageinit', function(){
	delete $.validator.methods.date;
	var myForm = $('#projectform');
	    myForm.validate({
		invalidHandler: function(form, validator) {
		},
		submitHandler: function() {
   	 	var data = $("myForm").serializeArray();
    	localStorage.setItem("formdata", data);
    	}

	});

});

var autofillData = function(){
	
};

var getData = function(){
	
};

var storeData = function(data){

};

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};
