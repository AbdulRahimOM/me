jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z]+$/i.test(value);
  }, "Invalid. Enter letters only");
$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            required:true,
            name:{
                minlength:2,
                maxlength:50,
                lettersonly: true 
            },
            email:{
                email:true
            }
        },
        messages:{
            required: "This field is mandatory",
            email:{
                email:"Not a valid email ID"
            }
            
        }

    })
})
