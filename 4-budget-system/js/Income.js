class Income extends Data{
    static counterIncome = 0;
    constructor(description, value, date){
        super(description, value, date);
        this._id = ++Income.counterIncome;
    }

    get id(){
        return this._id;
    }
}
