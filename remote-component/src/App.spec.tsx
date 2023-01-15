import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import reactI18next from 'react-i18next';
import { chance } from '../tests/chance';
import App from './App';

describe('<App />', () => {
  let isInitialized = true;

  beforeEach(() => {
    jest.spyOn<any, any>(reactI18next, 'useTranslation').mockImplementation(() => ({
      i18n: {
        isInitialized,
        changeLanguage: jest.fn(),
        dir: jest.fn(),
      },
      t: (str: string) => str,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render call page', async () => {
    render(<App name={chance.string()} />);
    expect(screen.getByTestId('app-remote-comp-root')).toBeInTheDocument();
  });

  it('should render call page', async () => {
    isInitialized = false;
    render(<App name={chance.string()} />);
    waitFor(() => expect(screen.getByTestId('loader')).toBeInTheDocument());
  });
});
