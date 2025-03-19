        function getFormvalue(event) {
            event.preventDefault();
            let firstName = document.querySelector("input[name='fname']").value.trim();
            let lastName = document.querySelector("input[name='lname']").value.trim();
            if (firstName && lastName) {
                alert(`${firstName} ${lastName}`);
            } else {
                alert("Please enter both first and last names.");
            }
        }
        
        document.getElementById("nameForm").addEventListener("submit", getFormvalue);
