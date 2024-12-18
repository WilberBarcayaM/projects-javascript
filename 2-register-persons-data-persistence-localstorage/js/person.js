class Person{
    static accountantPerson = 0;
    constructor( name, lastName, ci, phone, email, direction){
        this._number = ++Person.accountantPerson;
        this._name = name;
        this._lastName = lastName;
        this._ci = ci;
        this._phone = phone;
        this._email = email;
        this._direction = direction;
    }

    get number(){
        return this._number;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(lastName){
        this._lastName = lastName;
    }

    get ci(){
        return this._ci;
    }

    set ci(ci){
        this._ci = ci;
    }

    get phone(){
        return this._phone;
    }

    set phone(phone){
        this._phone = phone;
    }

    get email(){
        return this._email;
    }

    set email(email){
        this._email = email;
    }

    get direction(){
        return this._direction;
    }

    set direction(direction){
        this._direction = direction;
    }
}