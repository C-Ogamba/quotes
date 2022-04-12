export class Quote {
    splice(index: number, arg1: number) {
      throw new Error('Method not implemented.');
    }
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
