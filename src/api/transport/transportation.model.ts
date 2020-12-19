export interface Transportation {
    name: string;
    duration: Date;
    cost: string
    isPublic: boolean
    type: string;
    operator: string;
    //location: Array<string>; // to store bus stops, should be array?
}

