export default class RecordModel {
    constructor(id, date, distance = 0) {
        this.id = id;
        this.date = date;
        this.distance = distance;
    }
}