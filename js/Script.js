
function FormSubmit(event) {
    event.preventDefault();
    
    //creating the object
    const orderDetails = {};
    
    //adding properties of the object
    orderDetails.name = document.forms["myForm"]["fName"].value;
    orderDetails.email = document.forms["myForm"]["email"].value;
    orderDetails.Flavor = document.forms["myForm"]["smoothieType"].value;
    orderDetails.Size = document.forms["myForm"]["smoothieSize"].value;
    
    //sending my object to the funcion Show alert
    ShowAlert(orderDetails);

}

function ShowAlert(objectFromForm){
    
    
    //getting the values from my object  in a string to save them in a variable
    let greeting = `Hi,${objectFromForm.name} we sent the recept to ${objectFromForm.email} about your Order Details, You selected a ${objectFromForm.Size} ${objectFromForm.Flavor} Smoothie .`
    
    //display the variable freeting
    alert(greeting);

}

//event listener when user press submit
document.getElementById("smoothieForm").addEventListener("submit", FormSubmit);

//------------------------------------------------------------------------------------

//Extra changes

//selecting the field we will used by id
const selectedElement = document.querySelector("#Smothie");

//when the user change between option an event will happen, and will change the backgound color depeding on the element selected
selectedElement.addEventListener("change", function() {

    //getting value from the selected field
    smothieColor= selectedElement.value;

    if (smothieColor == "Strawberry"){
        document.body.style.backgroundColor = "pink";
    }
    else if (smothieColor == "Chocolate") {
        document.body.style.backgroundColor = "brown";
        
    } else if (smothieColor =="Cookie") {
        document.body.style.backgroundColor = "sandybrown";
        
    }
  });



// Resources Used for my javascript:

// For object creation: https://www.w3schools.com/js/js_object_definition.asp

// To get values from the form https://www.w3schools.com/js/js_validation.asp

//The feature change event, to be able to change color of the background when user select an element. 
//I got it this site: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event

//borders of my form https://www.w3schools.com/cssref/playdemo.php?filename=playcss_border-style&preval=groove