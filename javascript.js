


var studentData = []; 


var fname_field, lname_field, grade_field, add_btn;


                     

                     
                     
                     
                     
function init() {
 fname_field =$('#fname').val();
 lname_field = $('#lname').val();
 grade_field = $('#grade').val();
 add_btn = $('#add-button'); 
                     
 add_btn.click(addStudent);
                    
}

function addStudent() {
    
    var student = {firstName:fname_field, lastName:lname_field, grade:parseFloat(grade_field)}
  
    studentData.push(student);
    
}


$(function () {
   init();
    console.log(fname_field);
    add_btn.click(function () {
            $('ul').append('<li>' + fname_field + lname_field + grade_field + '<button type = "button" class = "btn btn-danger">' + '<span class= "glyphicon glyphicon-remove"></span>'+ '</button>' +'</li>');
    
    });
    
});

 
                    
                    
                                           
                                           