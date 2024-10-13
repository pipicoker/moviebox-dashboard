import {create} from 'zustand'

interface MovieState {
    btn: string;
    setBtn: (title: string) => void;
  }

  export const useMovieStore = create<MovieState>((set) => ({
    btn: 'All movies',
    setBtn: (title: string) => set({btn: title})
  }))