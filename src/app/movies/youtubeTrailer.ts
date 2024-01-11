export class YoutubeTrailer {
    id:string;
    name:string;
    url:string;
    score:number;
    channel:string;

    constructor(
        id:string,
        name:string,
        url:string,
        score:number,
        channel:string
    )
    {
        this.id = id;
        this.name = name;
        this.url = url;
        this.score = score;
        this.channel = channel;
    }
    


}
