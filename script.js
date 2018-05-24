
function submitForm(e){
  e.preventDefault()
  
  var firstName = document.getElementById('firstName').value;

  document.getElementById('valueFirstName').innerHTML = firstName;

  alert('Your name is' + ' ' + firstname);
}