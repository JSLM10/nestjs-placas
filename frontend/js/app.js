document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('placaForm');
    const tableBody = document.getElementById('placasTable');

    async function loadPlacas() {
        const placas = await placaService.getPlacas();
        tableBody.innerHTML = '';
        placas.forEach(placa => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${placa.placa}</td>
                <td>${placa.marca}</td>
                <td>${placa.modelo}</td>
                <td>${placa.color}</td>
                <td><button onclick="deletePlaca('${placa.placa}')">Eliminar</button></td>
            `;
            tableBody.appendChild(row);
        });
    }

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const placa = document.getElementById('placa').value.trim();
        const marca = document.getElementById('marca').value.trim();
        const modelo = parseInt(document.getElementById('modelo').value, 10);
        const color = document.getElementById('color').value.trim();

        if (!placa || !marca || isNaN(modelo) || !color) {
            console.error("Todos los campos son obligatorios.");
            return;
        }

        await placaService.addPlaca({ placa, marca, modelo, color });
        form.reset();
        loadPlacas();
    });

    window.deletePlaca = async (placa) => {
        await placaService.deletePlaca(placa);
        loadPlacas();
    };

    loadPlacas();
});
