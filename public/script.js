// script.js
const API_BASE = 'api';
// Función para agregar un producto
function realizarOperacion() {
    const op1 = document.getElementById('operando1').value;
    const op2 = document.getElementById('operando2').value;

    if (!op1 || !op2) {
        alert('Por favor, completa todos los campos.');
        return;
    }
    console.log("Realizar operacion");
    fetch(`${API_BASE}/suma`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ op1, op2}),
    })
    .then(response => response.json())
    .then(data => {
        alert('Operacion realizada con exito');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}





