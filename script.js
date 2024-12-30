// Selecciona el formulario
const form = document.getElementById('dataForm');
const responseMessage = document.getElementById('responseMessage');

// Escucha el evento de envío del formulario
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Obtén los valores de los campos
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const contact = document.getElementById('contact').value;

    // Crea el objeto con los datos
    const data = { name, phone, contact };

    try {
        // Realiza la solicitud a la API
        const response = await fetch('https://mty.alphaerponline.mx/AlphaErpApi/api/empresas/13/Prospectos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        // Procesa la respuesta
        if (response.ok) {
            const result = await response.json();
            responseMessage.innerHTML = `<div class="alert alert-success">Datos enviados con éxito: ${JSON.stringify(result)}</div>`;
        } else {
            responseMessage.innerHTML = `<div class="alert alert-danger">Error al enviar los datos: ${response.status}</div>`;
        }
    } catch (error) {
        responseMessage.innerHTML = `<div class="alert alert-danger">Error de conexión: ${error.message}</div>`;
    }
});
