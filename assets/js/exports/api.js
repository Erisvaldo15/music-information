export default async function api() {

    const response = await fetch('http://localhost:9000/api/songs');

    try {

        if (response.status === 200) {
            return await response.json();
        }

    } 
    
    catch (error) {
        console.log(error)
    }
    
}