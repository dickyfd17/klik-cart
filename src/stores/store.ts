import { create } from 'zustand';

interface QuantitiesState {
  quantities: Record<number, number>;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

const useStore = create<QuantitiesState>((set) => ({
  quantities: {},
  increaseQuantity: (id) =>
    set((state) => {
      const currentQty = state.quantities[id] || 0;
      return {
        quantities: {
          ...state.quantities,
          [id]: currentQty + 1,
        },
      };
    }),
  decreaseQuantity: (id) =>
    set((state) => {
      const currentQty = state.quantities[id] || 0;
      if (currentQty === 0) return {};
      return {
        quantities: {
          ...state.quantities,
          [id]: currentQty - 1,
        },
      };
    }),
}));

export default useStore;
