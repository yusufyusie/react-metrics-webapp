import { getAllCharacters } from '../redux/characterSlice';
import store from '../redux/configureStore'


describe('configureStore', () => {
    test('character that the state is empty', () => {
      const initialState = store.getState().character;
      expect(initialState).toEqual({ characters: [], Loading: false, error: null });
    });
  
    test('characters that the state is having the data', async () => {
      await store.dispatch(getAllCharacters());
      const updatedState = store.getState().character;
      expect(updatedState.characters.length).toBeGreaterThan(1);
    });
  });
  