export class Quote {
    author: string;
    quote: string;
    like: number;
    dislike: number;
    date: Date;
    constructor(author:string, quote:string, like: number, dislike: number, date:Date){
        this.author = author;
        this.quote = quote;
        this.like= like;
        this.dislike = dislike;
        this.date = date;
    }
}
