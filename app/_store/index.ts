import {create} from 'zustand'

interface Movie {
    id: number;
    title: string;
    year: number;
    genre: string[];
    rating: number;
    director: string;
    actors: string[];
    plot: string;
    poster: string;
    trailer: string;
    runtime: number;
    awards: string;
    country: string;
    language: string;
    boxOffice: string;
    production: string;
    website: string;
  }
  
interface MovieState {
    movies: Movie[]
    loading: boolean
    error: string | null
    fetchMovies: () => Promise<void>
}

export const useMovieStore = create<MovieState>((set) => ({
    movies: [],
    loading: true,
    error: null,
    fetchMovies: async () => {
        set({loading: true, error: null})
        try{
            const response = await fetch('https://freetestapi.com/api/v1/movies')
            if(!response.ok) {
                throw new Error('Failed to fetch movies')
            }
            const data = await response.json()
            set({movies: data, loading: false})
        } catch(error) {
            set({error: error instanceof Error ? error.message : "Unknown error", loading:false})
        }
    }
}))

