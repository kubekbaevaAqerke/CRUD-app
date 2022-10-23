let high = [];
let userIndex = -1;

function highOne() {
    let userName = document.getElementById('username').value;
    let surName = document.getElementById('surname').value;
    let userDate = document.getElementById('userdate').value;
    let actionUser = document.getElementById('action').value;

    document.getElementById('username').value = "";
    document.getElementById('surname').value = "";
    document.getElementById('userdate').value = "";
    document.getElementById('action').value = "";

    let newUser = {
        username: userName,
        surname: surName,
        daTe: userDate,
        actIon: actionUser

    }
    if (userIndex >= 0){
        high[userIndex] = newUser;
        userIndex = -1;
    } else {
        high.push(newUser);
    }
    console.log(high);
    table()
}
function table() {
    let result = "";

    for (let i = 0; i < high.length; i++){
        result +=
            "<tr>" +
            "<td>"+ (i + 1) +"</td>" +
            "<td>"+ high[i].username +"</td>" +
            "<td>"+ high[i].surname +"</td>" +
            "<td>"+ high[i].daTe +"</td>" +
            "<td>"+ high[i].actIon +"</td>" +
            "<td class='d-flex justify-content-between align-items-center'>" +
            "<button type='button' class='btn btn-primary' onclick='editUser("+ i +")'>Edit</button>" +
            "<button type='button' class='btn btn-danger' onclick='deleteUser("+ i +")'>Delete</button>" +
            "</td>" +
            "</tr>"
    }
    document.getElementById('result').innerHTML = result;
}

function deleteUser(index) {
    high.splice(index, 1);
    table();
}

function editUser(index) {
    document.getElementById('username').value = high[index].username;
    document.getElementById('surname').value = high[index].surname;
    document.getElementById('userdate').value = high[index].daTe;
    document.getElementById('action').value = high[index].actIon;
    userIndex = index;
}
