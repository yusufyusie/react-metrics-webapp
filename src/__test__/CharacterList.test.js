import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import CharacterList from '../components/CharacterList';
import '@testing-library/jest-dom';

describe('CharacterList component test', () => {
  const Varys = {
    fullName: 'Varys',
    id: 19,
  };

  it('Check if the component changed', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <CharacterList
              key={Varys.id}
              id={Varys.id}
              fullName={Varys.fullName}
            />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
