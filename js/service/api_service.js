const API_URL = 'https://neon-evergreen-freeze.glitch.me'

export const fetchCategories = async () => {
    try {
        const responce = await fetch(`${API_URL}/api/category`)

        if(responce.status === 200 || responce.status === 201) {
            const categories = await responce.json();
            return categories;
        } else {
            const error = await responce.json();
            throw error;
        }
    } catch (error) {
        return{ error }
    }
}