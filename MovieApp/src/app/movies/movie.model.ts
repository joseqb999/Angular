export class Movie {
    public id: number;
    public title: string;
    public summary: string;
    public inTheaters: string;
    public releaseDate: Date;
    public poster: string;
  
    constructor(id: number, title: string, summary: string,inTheaters: string,
        releaseDate: Date,poster: string) {
      this.id = id;
      this.title = title;
      this.summary = summary;
      this.inTheaters = inTheaters;
      this.releaseDate = releaseDate;
      this.poster = poster;
    }
  }