// Regular expressions for the expressions
const expressions = {
    Email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    "Phone Number": /^\d{11}$/,
    "Post Code": /^\d{4}$/,
};

function validateInput() {
    // Taking user input
    let inputType = document.getElementById("expressionType").value;
    let inputValue = document.getElementById("inputValue").value;

    // Checking with regular expression using switch condition
    switch (inputType) {
        case "Email":
        case "Phone Number":
        case "Post Code":
            if (expressions[inputType].test(inputValue)) {
                document.getElementById("result").innerHTML =
                    "The expression is valid.";
                document.getElementById("result").style.backgroundColor =
                    "#4CAF50";
            } else {
                document.getElementById("result").innerHTML =
                    "The expression is invalid.";
                document.getElementById("result").style.backgroundColor =
                    "#F44336";
            }
            document.getElementById("result").style.display = "block";
            break;
        default:
            document.getElementById("result").innerHTML =
                "Sorry, Invalid type of expression.";
            document.getElementById("result").style.backgroundColor = "#F44336";
            document.getElementById("result").style.display = "block";
    }
}