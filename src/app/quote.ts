export class Quote {
    author: string;
    quote: string;
    like: number;
    dislike: number;
    constructor(author:string, quote:string, like: number, dislike: number){
        this.author = author;
        this.quote = quote;
        this.like= like;
        this.dislike = dislike;
    }
}
