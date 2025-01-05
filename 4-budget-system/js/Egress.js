class Egress extends Data {
    static counterEgress = 0;
    constructor(description, value){
        super(description, value);
        this._id = ++Egress.counterEgress;
    }

    get id(){
        return this._id;
    }
}