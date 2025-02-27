function getFormvalue(e) {
    //Write your code here
            e.preventDefault();
	let firstName=document.querySelector('input[name="fname"]').value;
	let lastName=document.querySelector('input[name="lname"]').value;
	alert(firstName + " " + lastName);
}
