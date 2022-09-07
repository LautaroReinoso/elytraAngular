export class QueHacemos {
    public id: number;
    public src: string;
    public subtitle: string; 
    public text: string;

    constructor(id: number, src: string, subtitle: string, text: string, ) {
        this.id = id;
        this.src = src;
        this.subtitle = subtitle;
        this.text = text; 
    }
}


export class Card {
    public id: number;
    public title: string; 
    public text: string;
    public src: string;

    constructor(id: number, title: string, text: string, src: string) {
        this.id = id;
        this.title = title;
        this.text = text; 
        this.src = src;
    }
}