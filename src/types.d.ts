export interface QuoteType {
  text: string;
  author: string;
  category: string;
  id: string
}

export interface QuotesType {
  [id: string]: QuoteType;
}