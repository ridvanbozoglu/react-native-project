export const getRicks = async (name: string) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const ricks = await response.json();
        return ricks;
    } catch (error) {
        console.error("Error fetching data:", error);
        return error
    }
}