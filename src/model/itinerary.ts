class Itinerary {
    duration: number
    start: Date
    end: Date
    node: Array<Node>

    countDuration() {
        let durationDifference = this.end.getTime() - this.start.getTime();
        durationDifference = durationDifference / (1000 * 3600 * 24);
        return durationDifference;
    }
}

