import axios from 'axios';
import { Quotes } from '../models/Quotes';

export const getQuotes = () => {
    return axios.get<Quotes[]>('https://grandcircusco.github.io/demo-apis/quotes.json');
};
