// Seleccionar los nodos del dom que voy a valorar.
let numOne = $("#primary-number").text();
let numTwo = $("#secondary-number").text();
let sum = parseInt(numOne) + parseInt(numTwo);


//generar un evento click en el boton de check.
$("#btn").click(function(){
    

    //comprobar si la suma de los dos numeros es correcta mostrar en alerta un mensaje que diga correct. Si es incorrecto debe decir "incorrecto y dar la respuesta correcta"
    
    if ($("#guess").val() == sum){
        alert("correct")

    } 
    else {
        alert("Incorrecto. La respuesta es " + sum)
    }
    

});