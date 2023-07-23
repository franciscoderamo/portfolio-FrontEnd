export class Experience {
    id?: number;
    position: string;
    ages: number;
    //person_id: number;


    constructor(position: string, ages: number ) { //person_id: number

        this.position = position;
        this.ages = ages;
        //this.person_id = person_id;
    }
}
