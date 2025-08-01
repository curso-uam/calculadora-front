const API_BASE = 'api';

function realizarOperacion() {
    const op1 = document.getElementById('operando1').value;
    const op2 = document.getElementById('operando2').value;

    if (!op1 || !op2) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    fetch(`${API_BASE}/suma`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ a: Number(op1), b: Number(op2) })
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => {
                throw new Error(`HTTP ${response.status}: ${text}`);
            });
        }
        return response.json();
    })
    .then(data => {
        alert(`Resultado: ${data.resultado}`);
        document.getElementById('resultado').value = data.resultado;
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });
}

