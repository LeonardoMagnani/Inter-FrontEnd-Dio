import styled, { StyledComponent } from "styled-components";
import { string, func } from 'prop-types';
import { Button } from '../Button';

export const Quotes = ({ quote, author, onUpdate }) => {
    return (
        <>
            <Quote>{ quote }</Quote>
            <Author>- { author }</Author>
            <Button className='buttonQuotes' onClick={onUpdate}>New quote</Button>
        </>
    )
}

Quotes.propTypes = {
    quote: string,
    author: string,
    onUpdate: func
}

const Quote = styled.p `
    font-size: 1.5em;
    line-height: 2em;
    margin:0;
    color: #fff;
`

const Author = styled(Quote) `
    text-align: right;
    margin-bottom: 50px;
`