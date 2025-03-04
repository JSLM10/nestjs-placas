const API_URL = 'http://localhost:4000/placas'; // Asegúrate de que el puerto sea el correcto

class PlacaService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async getPlacas() {
        const response = await fetch(this.apiUrl);
        return response.json();
    }

    async addPlaca(placaData) {
        const response = await fetch(this.apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(placaData)
        });

        if (!response.ok) {
            const error = await response.json();
            console.error("Error al agregar placa:", error);
        }
    }

    async deletePlaca(placa) {
        await fetch(`${this.apiUrl}/${placa}`, { method: 'DELETE' });
    }
}

const placaService = new PlacaService(API_URL);
