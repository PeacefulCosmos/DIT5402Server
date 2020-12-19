class BaseNode {
    name: string;
    day: number;
    duration: Date;
    cost: number;

    constructor(name, day: number, duration: Date, cost: number) {
        this.name = name;
        this.day = day;
        this.duration = duration;
        this.cost = cost;
    }

}
