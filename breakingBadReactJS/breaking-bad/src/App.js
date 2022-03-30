import styled from 'styled-components'; 
import walterImg from "./Img/walter.png";
import { Quotes } from './components/Quotes/Quotes';
import { getQuote } from './services/quotesService';
import React, { useEffect, useState, useRef } from "react";


export function App() {
  const isMounted = useRef(true);

  const [quoteState, setQuoteState] = useState({ 
    quote: '_', 
    author: 'asdadbhf' 
  });

  const onUpdate = async () => {
      const quote = await getQuote();
      

      if (isMounted.current) {
        setQuoteState(quote[0]);
      }
      
  }

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    }
  }, []);


  return (
    <Content>
      <div className='divQuote'>
        <Quotes 
          {...quoteState}
          onUpdate= {onUpdate} 
        />
      </div>
      <WalterImg src={walterImg} alt='Walter White'/> 
      
    </Content>
  );
}

const Content = styled.div `
  height: 100vh;
  width: 80%;
  margin: 0 auto;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const WalterImg = styled.img `
  max-width: 30vw;
  align-self: flex-end;
`


export default App;
