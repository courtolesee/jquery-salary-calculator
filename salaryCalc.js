// The application should have an input form that collects _employee first name, 
// last name, ID number, job title, annual salary_.

// A 'Submit' button should collect the form information, store the information to 
// calculate monthly costs, append information to the DOM and clear the input fields. 
// Using the stored information, calculate monthly costs and append this to the to 
// DOM. If the total monthly cost exceeds $20,000, add a red background color to the 
// total monthly cost.

// Create a delete button that removes an employee from the DOM. For Base mode, 
// it does **not** need to remove that Employee's salary from the reported total.

//------------------------------------------------------------------------------

$(document).ready(onReady);

function onReady(){
//click events are going in here:
$('#addEmployee').on('click', addEmployee)
$('#tableBody').on('click', '.delete', removeEmployee)
} 

const employee = [];

function addEmployee () {
  event.preventDefault();
  let firstName = $('#inFirstName').val();
  let lastName = $('#inLastName').val();
  let ID = $('#inId').val();
  let title = $('#inTitle').val();
  let salary = $('#inSalary').val();
  employee.push({
    firstName: firstName,
    lastName: lastName,
    ID: ID,
    title: title,
    salary: salary
  })
  employeeDOM(employee);
  $('#inFirstName').val('');
  $('#inLastName').val('');
  $('#inId').val('');
  $('#inTitle').val('');
  $('#inSalary').val('');
  $('#inFirstName').focus();
}

function employeeDOM (array){
$('#tableBody').empty();
for (let person of array){
    $('#tableBody').append(`<tr>
    <td>${person.firstName}</td>
    <td>${person.lastName}</td>
    <td>${person.ID}</td>
    <td>${person.title}</td>
    <td>${person.salary}</td>
    <td><button class="delete">Delete</button></td>
    </tr>`);
    }
}

function removeEmployee(){
    console.log('this is:', this);
    let button = $(this);
    button.closest('tr').remove();
}

