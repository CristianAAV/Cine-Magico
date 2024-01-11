export class ReviewRaw {
    movie: string;
    text: string;
    score: number;
    creator: string;

    constructor(
        movie: string,
        text: string,
        score: number,
        creator: string,
      ) {
        this.movie = movie;
        this.text = text;
        this.score = score;
        this.creator = creator;
      }
}

  