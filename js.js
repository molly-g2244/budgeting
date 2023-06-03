
function submitForm() {
   // Get the first form with the name
   // Hopefully there is only one, but there are more, select the correct index
   var frm = document.getElementsByName('bookForm')[0];
   frm.submit(); // Submit
   frm.reset();  // Reset
   return false; // Prevent page refresh
}


function submitForm() {
  // Get the first form with the name
  // Hopefully there is only one, but there are more, select the correct index
  var frm = document.getElementsByName('contactform')[0];
  frm.submit(); // Submit
  frm.reset();  // Reset
  return false; // Prevent page refresh
}
