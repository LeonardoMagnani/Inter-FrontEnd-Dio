import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

const response = {Author: 'author', quote: 'test quote'};

const server = setupServer(
  rest.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes', (req, res, ctx) => {
      return res(ctx.json(response));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the app with a button and a quote', () => {
  render(<App />);
  
  const buttonEl = screen.getByRole('button');
  const imageEl = screen.getByRole('img');
  // const textEl = screen.getByText(/loanding author/);

  expect(buttonEl).toBeInTheDocument;
  expect(imageEl).toBeInTheDocument;
  // expect(textEl).toBeInTheDocument;

});