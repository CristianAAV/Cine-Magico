
export class Movie {
    
    id:string;
    title:string;
    poster:string;
    duration:number;
    country:string;
    releaseDate:any;
    popularity:number;
    genre:any;
    director:any;
    youtubeTrailer:any;

    constructor(
        id:string,
        title:string,
        poster:string,
        duration:number,
        country:string,
        releaseDate:any,
        popularity:number,
    ){        
        this.id = id;
        this.title = title;
        this.poster = poster;
        this.duration = duration;
        this.country = country;
        this.releaseDate = releaseDate;
        this.popularity = popularity;
    }
}
