//still need: 
//append monthly cost to DOM
//if exceeds $20,000, red background color to monthly costs

//------------------------------------------------------------------------------

$(document).ready(onReady);

function onReady(){
//click events here:
$('#addEmployee').on('click', addEmployee);
$('#tableBody').on('click', '.delete', removeEmployee);
} 

const employee = [];
const salaries = [];
let totalYearly = 0;
let monthlyBudget = totalYearly / 12; 


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
  calculateMonthly();
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
    console.log('individual salary', individualSalary);   
}

function calculateMonthly (){
// create totalYearly and calculate monthly from that
    for (let index = 0; index < salaries.length; index++) {
        totalYearly += Number(salaries[index]);
    }
    console.log('total yearly:', totalYearly);
    let el = $('#monthlyBudget');
    el.empty();
    el.append('<span>${#monthlyBudget}</span>');
}  



// $("div.totalMonthly").each(function(){
//     $this.html() >= 20000 ? $(this).css('color', 'red') : null;
// }
// );