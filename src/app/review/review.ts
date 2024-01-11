export class Review {
    text: string;
    score: number;
    creator: string;

    constructor(
        text: string,
        score: number,
        creator: string,
      ) {
        this.text = text;
        this.score = score;
        this.creator = creator;
      }
}

  