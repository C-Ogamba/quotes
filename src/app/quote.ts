export class Quote {
    id: number;
    quote: string;
    like: number;
    dislike: number;
    constructor(id:number, quote:string, like: number, dislike: number){
        this.id = id;
        this.quote = quote;
        this.like= like;
        this.dislike = dislike;
    }
}
