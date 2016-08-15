export class Booking {
    name: String;
    date: String;
    time: String;
    venue: String;
    location: String;
    size: String;
    hours: String;
    specialRequirements: String;

    constructor(
        name: String,
        date: String,
        time: String,
        venue: String,
        location: String,
        size: String,
        hours: String,
        specialRequirements: String
    ) {
        this.name = name;
        this.date = date;
        this.time = time;
        this.venue = venue;
        this.location = location;
        this.size = size;
        this.hours = hours;
        this.specialRequirements = specialRequirements;
    }
}