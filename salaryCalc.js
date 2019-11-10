
// A 'Submit' button should collect the form information, store the information to 
// calculate monthly costs, append information to the DOM and clear the input fields. 
// Using the stored information, calculate monthly costs and append this to the to 
// DOM. If the total monthly cost exceeds $20,000, add a red background color to the 
// total monthly cost.

//still need: 
//store info to calculate montly costs
//calc monthly costs and append DOM
//if exceeds $20,000, red background color to monthly costs
//css stuff! 

//------------------------------------------------------------------------------

$(document).ready(onReady);

function onReady(){
//click events here:
$('#addEmployee').on('click', addEmployee);
$('#tableBody').on('click', '.delete', removeEmployee);
} 

const employee = [];
let salaries = [];

function addEmployee () {
// get values from all inputs and put into employee array
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
// calling functions  
  employeeDOM(employee);
  createSalariesVar();
  calcMonthly();
// empty and refocus cursor to beginning of inputs
  $('#inFirstName').val('');
  $('#inLastName').val('');
  $('#inId').val('');
  $('#inTitle').val('');
  $('#inSalary').val('');
  $('#inFirstName').focus();
}

function employeeDOM (array){
// push information into table
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
// remove with delete button
    console.log('this is:', this);
    let button = $(this);
    button.closest('tr').remove();
}

function createSalariesVar (){
// push each salary into salaries array
    event.preventDefault();
    let individualSalary = $('#inSalary').val();
    salaries.push(individualSalary)
}
// *****TO DO: calculate monthly cost 

function calcMonthly (){
    let totalMonthly = salaries / 12;
    for (let index = 0; index < salaries.length; index++) {
        totalMonthly += Number(salaries[index].individualSalary);
    }
    console.log('total monthly:', totalMonthly);
}  


