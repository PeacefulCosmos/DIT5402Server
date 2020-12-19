class spot extends BaseNode {
    name: string
    day: number;
    duration: Date;
    cost: number;
    arrival: Date;
    departure: Date;
    recommendedDuration: Date;
    reminder: string;
    purpose: string;
    isOpen: boolean;

    constructor(name: string, day: number, duration: Date, cost: number,
        arrival: Date, departure: Date, recommendedDuration: Date,
        reminder: string, purpose: string, isOpen: boolean) {
        super(name, day, duration, cost);
        this.arrival = arrival;
        this.departure = departure;
        this.recommendedDuration = recommendedDuration;
        this.reminder = reminder;

        this.purpose = purpose;
        this.isOpen = isOpen;
    }


}

