let people = JSON.parse(localStorage.getItem('people'))?.map(personData => new Person(
    personData._name,
    personData._lastName,
    personData._ci,
    personData._phone,
    personData._email,
    personData._direction,
)) 
    ||[

    // new Person('Wilber', 'Barcaya', 736472, 637647, 'Wilber@gmail.com', 'B. 3 de Abril'),
    // new Person('Juan', 'Perez', 736472, 637647, 'juan@gmail.com', 'B. 3 de Abril'),
];

function listPeople(){
    console.log('Mostrar personas...');
    console.log(localStorage)
    let text = `
                <tr>
                    <th class="first-col-title">N°</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>C.I</th>
                    <th>Celular</th>
                    <th>Email</th>
                    <th>Dirección</th>
                    <th>Opciones</th>
                </tr>
    `;
    for(let person of people){
        console.log(person);
        text += `
                <tr>
                    <td class="first-col-people">${person.number}</td>
                    <td>${person.name}</td>
                    <td>${person.lastName}</td>
                    <td>${person.ci}</td>
                    <td>${person.phone}</td>
                    <td>${person.email}</td>
                    <td>${person.direction}</td>
                    <td class="button-delete"><button onclick="deletePerson('${person.number}')">🗑️</button></td>
                </tr>
                `;
    }
    
    document.getElementById('people').innerHTML = text;
}

function addPerson(){
    const form = document.forms['form'];
    const name = form['name'];
    const lastName = form['lastName'];
    const ci = form['ci'];
    const phone = form['phone'];
    const email = form['email'];
    const direction = form['direction'];

    if(name.value != '' && lastName.value !='' && ci.value !='' && phone.value !='' && email.value !='' && direction.value !='') {
        const person = new Person(name.value, lastName.value, ci.value, phone.value, email.value, direction.value);
        console.log(person);

        people.push(person);

        localStorage.setItem('people', JSON.stringify(people));

        listPeople();
    }else{
        alert('No hay información para agregar o no lleno todos los campos');
        
    }
}

function deletePerson(number){
    // console.log(number);

    people = people.filter(person => person.number != number);


    localStorage.setItem('people', JSON.stringify(people));

    listPeople();
}
    