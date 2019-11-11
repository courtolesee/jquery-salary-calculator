$(document).ready(onReady);

function onReady(){
//click events here:
$('#addEmployee').on('click', addEmployee);
$('#tableBody').on('click', '.delete', removeEmployee);
} 

const employee = [];
const salaries = [];
let totalYearly = 0;


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
    <td>$${person.salary}</td>
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

function calculateMonthly (){
    event.preventDefault();
// create totalYearly and calculate monthly from that
    for (let index = 0; index < salaries.length; index++) {
        totalYearly += Number(salaries[index]);
    }
    let monthlyBudget = totalYearly / 12; 
    let monthlyBudgetFixed = monthlyBudget.toFixed(2)
    let el = $('#monthlyBudget');
    el.empty();
    el.append(monthlyBudgetFixed);
    changeToRed(monthlyBudgetFixed);
    }

    //change to red if over $20,000
    function changeToRed(red){
        if (red >= 20000){
            $('#monthlyBudget').addClass('makeRed');
        }
    }