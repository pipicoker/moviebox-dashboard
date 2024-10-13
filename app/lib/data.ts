export async function fetchMovies() {
    const res = await fetch('https://freetestapi.com/api/v1/movies')

    if(!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    console.log(data)

    fetchMovies()
}