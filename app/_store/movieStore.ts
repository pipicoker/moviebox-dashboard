import {create} from 'zustand'

interface MovieDetails {
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

  interface UpcomingmovieState {
    upcomingMovies: MovieDetails[]
    loading: boolean
    error: string | null
    fetchUpcomingMoviesDetails: () => Promise<void>
}

  interface PopularmovieState {
    popularMovies: MovieDetails[]
    loading: boolean
    error: string | null
    fetchPopularMoviesDetails: () => Promise<void>
}

export const usePopularMovieStore = create<PopularmovieState>((set) => ({
  popularMovies: [],
    loading: true,
    error: null,
    fetchPopularMoviesDetails: async () => {
        set({loading: true, error: null})
        try{
            const popularMoviesResponse = await fetch(
                        `https://api.themoviedb.org/3/movie/popular?api_key=7efe6b1ac9de4ce890572da979564372&page=1`
            )

            const popularMoviesData = await popularMoviesResponse.json()

            // Create an array to store detailed movie data
      const detailedMovies: MovieDetails[] = [];

      // Fetch detailed data for each movie
      for (const movie of popularMoviesData.results) {
        const movieDetailResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}?api_key=7efe6b1ac9de4ce890572da979564372`
        );
        const movieDetailData = await movieDetailResponse.json();
        detailedMovies.push(movieDetailData);
      }

      // Set the detailed movies in the store
      set({ popularMovies: detailedMovies, loading: false, error: null });
        } catch (error) {
          console.error(error);
          
            set({ loading: false, error: 'Failed to fetch movie details' });

        }
    }
}))


export const useUpcomingMovieStore = create<UpcomingmovieState>((set) => ({
  upcomingMovies: [],
    loading: true,
    error: null,
    fetchUpcomingMoviesDetails: async () => {
        set({loading: true, error: null})
        try{
            const upcomingMoviesResponse = await fetch(
                        `https://api.themoviedb.org/3/movie/upcoming?api_key=7efe6b1ac9de4ce890572da979564372&page=1`
            )

            const popularMoviesData = await upcomingMoviesResponse.json()

            // Create an array to store detailed movie data
      const detailedMovies: MovieDetails[] = [];

      // Fetch detailed data for each movie
      for (const movie of popularMoviesData.results) {
        const movieDetailResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}?api_key=7efe6b1ac9de4ce890572da979564372`
        );
        const movieDetailData = await movieDetailResponse.json();
        detailedMovies.push(movieDetailData);
      }

      // Set the detailed movies in the store
      set({ upcomingMovies: detailedMovies, loading: false, error: null });
        } catch (error) {
          console.error(error);
            set({ loading: false, error: 'Failed to fetch movie details' });

        }
    }
}))