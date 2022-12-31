     


        function valdiateform1()
        {
            var username= document.form2.username.value;
            var password= document.form2.password.value;
            var email =document.form2.email.value;
            var cpassword=document.form2.cpassword.value;
            var regexp=/\S+@\S+\.\S+/;
            
            if(username==null || username=="")
            {
                document.getElementById("usererr").innerHTML="Please enter Username";
                return false;
            }
        }