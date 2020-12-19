class Transportation extends BaseNode {
    name: string
    type: string;
    operator: string;
    isPublic: boolean

    // constructor(day: number, duration: Date, cost: number){
    //     super(day, duration,cost);
    // }

    constructor(name: string, day: number, duration: Date, cost: number,
        type: string, operator: string, isPublic: boolean) {
        super(name, day, duration, cost);
    }



}
