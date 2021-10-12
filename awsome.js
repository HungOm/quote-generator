import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';

library.add(
 faQuoteLeft,
 faTwitter
);

export const QuoteLeft = icon({ prefix: 'fas', iconName: 'quote-left' }).html;
export const Twitter = icon({ prefix: 'fab', iconName: 'twitter' }).html;
