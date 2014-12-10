// Step 1: Add data to students array
 
 
var students = [
    //{fname: "Joe", lname: "Schmoe", grade: 55}
];

var fname_field, lname_field, grade_field, add_btn;

function init() {
    // Assign references to various elements
    fname_field = $('#fname');
    lname_field = $('#lname');
    grade_field = $('#grade');
    add_btn = $('#btn-add-student');
    
    // Create click event for add student button
    
    add_btn.click(addStudent);
    add_btn.click(calcAvg);

    
    
    
    
}
function addStudent() {
    
    // Create object with the three values
    var student = {
        fname: fname_field.val(),
        lname: lname_field.val(),
        grade: parseFloat(grade_field.val())
    }
    
    // Add the physical rows to our table
     addRow(student);
    
    
    // Add student object into students array
    students.push(student);
    
    // Clear out fields
    fname_field.val('');
    lname_field.val('');
    grade_field.val('');
    
    console.log(students);
   
}



function addRow(student) {
    var tr = $('<tr>'); //storing the entire tr element in tr variable
    var td_name = $('<td>').html(student.fname + ' ' + student.lname);
    //table data element with object values,  .html adds these values inside element
    var td_grade = $('<td>').html(student.grade);
    
    var button = $('<button>').addClass('btn btn-danger').html('X');
    //button element with class !Do not do $('<button class = 'blahblah')
    
    var td_button=$('<td>').append(button); 
    // pay attention to the html, this is just the third td element inside the table row
    
    tr.append(td_name).append(td_grade).append(td_button);
    //adds everything to the table row
    
    $('#grades-table tbody').append(tr);
    
   
}
var total = 0;
var avg = 0;
function calcAvg() {
    console.log("hi");
    var current_total=0
    for (var i = 0; i<students.length; i++) {
       
        current_total += students[i].grade;
        console.log("index " + i);
        console.log("grade " + students[i].grade);
        console.log("local running total " + current_total);
        
        avg = current_total/(students.length);
        

    }
    total+=students[students.length-1].grade;
    console.log("global running total " + total);
$('#avg').text("Class Average: " + avg);   
    
};



/*var max = students[0].grade;
var maxIndex = 0;
function checkMax() {
    for(var i = 1; i < students.length i++)
        if (students[i].grade>max) {
            max = students[i].grade;
            maxIndex=i;
        }
    return maxIndex;
        

}

function highLightMax() { //To link the and highLight the object with the highest grade value.
    $('#maxIndex').addClass("btn btn-success");

}
var min = students[0].grade;
var minIndex = 0;
function checkMin() {
    for(var i = 1; i < students.length i++)
        if (students[i].grade<min) {
            min = students[i].grade;
            minIndex = i;
        }
    return minIndex;

} */

$(document).ready(init);