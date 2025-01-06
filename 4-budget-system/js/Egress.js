class Egress extends Data {
    static counterEgress = 0;
    constructor(description, value, date){
        super(description, value, date);
        this._id = ++Egress.counterEgress;
    }

    get id(){
        return this._id;
    }
}