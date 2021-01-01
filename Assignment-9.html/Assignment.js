<!DOCTYPE html>
<html>
    <head>
        <title>Login Form</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="library/bootstrap.min.css">
        <script src="library/jquery.min.js"></script>
        <script src="library/bootstrap.min.js">
        </script> 
    <style>
      .page1{
        width: 50%;
        margin-left: 25%;
      }
      .page2{
        width: 50%;
        margin-left: 25%;
      }

      
    
    </style>
    </head>

    <body>

      <div class="jumbotron">
        <div class="pull-right">
            <button type="button" class="btn btn-md btn-success" id="login" onclick="switchForms('login')">Login</button>
            <button type="button" class="btn btn-md btn-success" id="create" onclick="switchForms('createAccount')">Create Account</button>
        </div>
        
            
          <div class="page1" id="loginForm">
            <h1 style="margin-left: -50%;">Login Form</h1>
            <form action="/action_page.php" id="form1" method="post">
                <div class="form-group">
                    <label for="userName">Username:</label>
                    <input type="text" class="form-control" id="userName" placeholder="Enter Username" required>
                    <span class="userError" style="color: red;"></span>
                  </div>
                  <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" class="form-control" id="password" name="password" placeholder="Enter Password" required>
                  </div> 
                  <div class="text-center">
                      <button type="button" id="log" 22 class="btn btn-md btn-success" onclick="login()">Login</button>
                  </div>
                </form>
            </div>

                <div class="page2" style="display: none;" id="createAccount">
                  <h1 style="margin-left: -50%;">Create Account Form</h1>
                    <form action="/action_page.php" id="form2" method="post">
                        <div class="form-group">
                            <label for="firstName">First Name:</label>
                            <input type="text" class="form-control" id="firstName" placeholder="Enter firstname" required>
                            <span class="firstError" style="color: red;"></span>
                          </div>
                          <div class="form-group">
                            <label for="lastName">Last Name:</label>
                            <input type="text" class="form-control" id="lastName" placeholder="Enter lastname" required>
                            <span class="lastError" style="color: red;"></span>
                          </div> 
                          <div class="form-group" >
                            <label for="email">Email:</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter Email" required="required">
                            <span class="emailError" style="color: red;"></span>
                          </div>

                          <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="password" class="form-control" id="createPassword" placeholder="Enter password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>
                          </div> 
                          <div class="form-group">
                            <label for="confirmPassword">Confirm Password:</label>
                            <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm password" required> 
                          </div> 
                          <div class="registrationFormAlert" style="color:green;" id="CheckPasswordMatch"></div>
                          <div class="form-group">
                            <label for="age">Age:</label>
                            <input type="number" class="form-control" id="age" placeholder="Enter age" required>
                            <span class="ageError" style="color: red;"></span>
                          </div>

                          <label id="gender">Gender:</label><br>
                            <label><input type="radio" name="gender" id="gender" value="female">Female</label><br>
                            <label><input type="radio" name="gender" id="gender" value="male">Male</label><br>
                            <label><input type="radio" name="gender" id="gender" value="others">Others</label><br>

                          <label for="hero">Favorite Hero :</label><br>
                            <select id="hero" name="favHero">
                                <option value="select">Select</option>
                                <option value="rajini">Rajini</option>
                                <option value="kamal">Kamal</option>
                                <option value="ajithKumar">Ajith Kumar</option>
                                <option value="vijay">Vijay</option>
                            </select><br>

                            <input type="checkbox" id="admin" name="admin" checked="checked" >
                            <label for="admin">Is Admin</label><br>

                          <div class="text-center">
                              <button type="button" id="create" class="btn btn-md btn-success" onclick="createAccount()">Create Account</button>
                          </div>
                          
                        </form>
                        </div>
                        
                        <script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
		                    <script src="https://ajax.aspnetcdn.com/ajax/jquery.validate/1.13.1/jquery.validate.min.js"></script>		
                        <script src="Assignment-9.js"></script>
                        <script type="text/javascript">
                          $(document).ready(function(){
                           
                      });

                      function checkPasswordMatch() {
                      var password = $("#createPassword").val();
                      var confirmPassword = $("#confirmPassword").val();
                      if (password != confirmPassword)
                          $("#CheckPasswordMatch").html("Passwords does not match!");
                      else
                          $("#CheckPasswordMatch").html("Passwords match.");
                  }
                  $(document).ready(function () {
                    $("#confirmPassword").keyup(checkPasswordMatch);
                  });

                 
                        
                       
        </script>
    </body>
</html>

 //////////////////////////////////////-----------------------------------JS FILE ----------------------------------------//////////////////////////////////
 
 var userList = [];
function login(){
    
    console.log(JSON.parse(localStorage.getItem("UserList") || "[]"));
    userList1 = JSON.parse(localStorage.getItem("UserList") || "[]");
    if(userList1.length !==0){        
        userList1.forEach(function(e) {            
            if ($("#userName").val() == e.Email && $("#password").val() == e.Password){
                console.log("Username : " + $("#userName").val());
                console.log("Password : " + $("#password").val());
                alert('Successfully logged.')
            }else{
                alert('Enter valid username and Password')
            }
          }); 
    }
}

function createAccount(){
    
    console.log("firstname: " + $("#firstName").val());
    console.log("lastname: " + $("#lastName").val());
    console.log("email: " + $("#email").val());
    console.log("password: " + $("#createPassword").val());
    console.log("age: " + $("#age").val());
    console.log("gender : " + $("input[id='gender']:checked").val());
    console.log("favhero: " + $("#hero").val());
    console.log("check: " + $('input[type=checkbox]').prop('checked'));

    

var userDetails = {
    FirstName : $("#firstName").val(),
    LastName : $("#lastName").val(),
    Email : $("#email").val(),
    Password : $("#createPassword").val(),
    Age : $("#age").val(),
    Gender : $("input[id='gender']:checked").val(),
    FavHero : $("#hero").val(),
    Check : $('input[type=checkbox]').prop('checked')
}

// password check 
function checkPasswordMatch() {
    var password = $("#createPassword").val();
    var confirmPassword = $("#confirmPassword").val();
    if (password != confirmPassword)
        $("#CheckPasswordMatch").html("Passwords does not match!");
    else
        $("#CheckPasswordMatch").html("Passwords match.");
}
$(document).ready(function () {
   $("#confirmPassword").keyup(checkPasswordMatch);
});
var x ='';
if(userList.length !==0){
    userList.forEach(function(e) {
        if ($("#email").val() == e.Email){
            window.alert('Email : ' + $("#email").val() + ' already exist');
            x = 1;
        }
      }); 
}
if(x != 1){
userList.push(userDetails);
console.log(userList);
localStorage.setItem('UserList', JSON.stringify(userList));
}


}

function switchForms(formType){
    if(formType === "login"){
        $("#pageTittle").text("Login Form");
        $("#loginForm").show();
        $("#createAccount").hide();
    }else{
        $("#pageTittle").text("Create Account Form");
        $("#loginForm").hide();
        $("#createAccount").show();
    }
}

$("#userName").keyup(function(event){
    if($("#userName").val() == "")
    $(".userError").text("Username can not be empty");
    else
    $(".userError").text("");
  });

  $("#firstName").keyup(function(event){
    if($("#firstName").val() == "")
    $(".firstError").text("Firstname can not be empty");
    else
    $(".firstError").text("");
  });

  $("#lastName").keyup(function(event){
    if($("#lastName").val() == "")
    $(".lastError").text("Lastname can not be empty");
    else
    $(".lastError").text("");
  });
  $("#email").keyup(function(event){
    if($("#email").val() == "")
    $(".emailError").text("email can not be empty");
    else
    $(".emailError").text("");
  });
  $("#age").keyup(function(event){
    if($("#age").val() == "")
    $(".ageError").text("age can not be empty");
    else
    $(".ageError").text("");
  });
