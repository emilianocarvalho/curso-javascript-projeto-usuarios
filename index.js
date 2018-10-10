let name = document.querySelector('#exampleInputName');
let gender = document.querySelectorAll(
  '#form-user-create [name=gender]:checked'
);
let birth = document.querySelector('#exampleInputBirth');
let country = document.querySelector('#exampleInputCountry');
let email = document.querySelector('#exampleInputEmail');
let password = document.querySelector('#exampleInputPassword');
let photo = document.querySelector('#exampleInputPhoto');
let admin = document.querySelector('#exampleInputAdmin');

// Selectionando o option correto

console.log(gender.value);

var fields = document.querySelectorAll('#form-user-create [name]');

fields.forEach(function(field, index) {
  if (field.name === 'gender') {
    if (field.checked) console.log('SIM', field);    
  } else {
    console.log('NÃO', field);
  }
  
});
