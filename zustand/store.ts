import { Character } from '@/types';
import { create } from 'zustand';


interface IRickStore {
  ricks: Character[];
  addRick: (rick: Character) => void;
  removeRick: (id:number) => void;
}

interface ISearch {
  searchValue: string;
  setSearchValue: ( value : string ) => void
}

const useRickStore = create<IRickStore>((set) => ({
  ricks: [],
  addRick: (rick: Character) =>
    set((state) => ({ ricks: [...state.ricks, rick] })),
  removeRick: (id:number) =>
    set((state) => ({ ricks: state.ricks.filter((rick) => rick.id !== id) })),
}));

export const useSearch = create<ISearch>((set) => ({
  searchValue: "",
  setSearchValue: (value: string) => set({ searchValue: value }),
}));

export default useRickStore;
