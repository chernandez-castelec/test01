document.getElementById('captureForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Capturar los datos del formulario
    const nom_prosi = document.getElementById('nom_prosi').value;
    const tel1_prosi = document.getElementById('tel1_prosi').value;
    const contactoi = document.getElementById('contactoi').value;

    // Preparar los datos para enviarlos a la API
    const data = { nom_prosi, tel1_prosi, contactoi };

    try {
        const response = await fetch('https://mty.alphaerponline.mx/AlphaErpApi/api/empresas/13/Prospectos', { // Cambia esta URL por la de tu API
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Api-key': 'SK_9vFRro6xU10G_GfZ1p4N!F8WuiZzyBYJYz51R7pa6WS', // Reemplaza con tu Api-key
                'User-key': 'chtest01' // Reemplaza con tu User-key
            },
            body: JSON.stringify(data)
        });

        // Manejar la respuesta de la API
        const result = await response.json();
        document.getElementById('response').innerText = `Respuesta: ${result.message}`;
    } catch (error) {
        console.error('Error al enviar datos:', error);
        document.getElementById('response').innerText = 'Error al enviar los datos.';
    }
});
