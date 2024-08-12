const API_URL = 'http://localhost:8000/' 

async function getHands({ categories }) {
    try {
        if (!Object.keys(categories).some(key => categories[key])) {
            return [];
        }
        const response = await fetch(
            categories.all 
            ? `${API_URL}`
            : `${API_URL}?${Object.keys(categories).filter(key => categories[key]).map(key => `class_names=${key}`).join('&')}`
        );
        console.log({categories})
        console.log({response})
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching cards');
    }
}

export { getHands }