class Income extends Data{
    static counterIncome = 0;
    constructor(description, value){
        super(description, value);
        this._id = ++Income.counterIncome;
    }

    get id(){
        return this._id;
    }
}
