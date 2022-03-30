import { render, screen, fireEvent } from '@testing-library/react';
import { Quotes } from './Quotes';
import App from '../../App'

const quote = 'Loading quote...';
const author = 'Loanding author...';

test('renders received quote, speaker and a button', () => {
    render(<Quotes quote={quote} author={author} />);

    const quoteEl = screen.getByText(quote);
    const speakerEl = screen.getByText(`- ${author}`);
    const buttonEl = screen.getByRole('button');

    expect(quoteEl).toBeInTheDocument();
    expect(speakerEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
});

test('calls a callback when button is pressed', () => {
    const callback = () => {
        return fireEvent.click(buttonEl);
    }
    render(<Quotes quote={quote} author={author} onUpdate={callback} />);
    const buttonEl = screen.getByRole('button');
    expect(callback == 1);
});
