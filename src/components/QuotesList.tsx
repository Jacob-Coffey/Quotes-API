import { useEffect, useState } from "react";
import { Quotes } from "../models/Quotes";
import { getQuotes } from "../services/QuotesApi";

export const QuotesList = () => {
    const [quote, setQuote] = useState<Quotes[]>([]);

    useEffect(() => {
        getQuotes().then((response) => {
        setQuote(response.data)
        });
    }, []);

    return(
    <>
        <div className="quotes">
            {quote.map((quotes, i) => (
                <ul> 
                    <li key={i}>Author: {quotes.author} <br></br>
                    Quote: {quotes.text}</li>
                </ul>
            ))}
            </div>
    </>
    )
}