import {create} from 'zustand'

export interface MovieDetails {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: {
      id: number;
      name: string;
      poster_path: string;
      backdrop_path: string;
    } | null;
    budget: number;
    genres: {
      id: number;
      name: string;
    }[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: {
      id: number;
      logo_path: string | null;
      name: string;
      origin_country: string;
    }[];
    production_countries: {
      iso_3166_1: string;
      name: string;
    }[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: {
      english_name: string;
      iso_639_1: string;
      name: string;
    }[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }

interface ViewMovieState {
    movieDetails: MovieDetails | null;
    selectedImage: string | null; 
    setMovieDetails: (movie: MovieDetails, image: string) => void; // Update the function signature
  }

  export const useViewMovieStore = create<ViewMovieState>((set) => ({
    movieDetails: null,
    selectedImage: null, // Initialize selectedImage
    setMovieDetails: (newMovie: MovieDetails, image: string) =>
        set({
            movieDetails: newMovie, // Store movie details
            selectedImage: image, // Store the random image
        }),
}));