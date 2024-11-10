


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
    
    
    //getting the values from my object  in a string to sava them in a variable
    let greeting = `Hi,${objectFromForm.name} we sent the recept to ${objectFromForm.email} about your Order Details, You selected a ${objectFromForm.Size} ${objectFromForm.Flavor} Smoothie 
    .`
    
    //display the variable freeting
    alert(greeting);

}

//event listener when user press submit
document.getElementById("smoothieForm").addEventListener("submit", FormSubmit);