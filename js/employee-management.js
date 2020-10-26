/*eslint-env browser*/
const $ = function (id) {
    "use strict";
    return document.getElementById(id);
}

let employees = [
    ["Somnath Shantveer", "CEO", "2828"],
    ["Shweta S", "President", "3838"],
    ["Tanvi S", "VP", "1818"],
    ["Maahi S", "Developer", "3232"],
    ["Nancy P", "QA", "4141"],
    ["Scott D", "HR", "900"]
];

function display() {
    var empTable = $("empDetails");

    while (empTable.rows.length > 1) {
        empTable.deleteRow(1);
    }

    for (var employee of employees) {
        empTable.insertRow();
        for (var cell of employee) {
            var newCell = empTable.rows[empTable.rows.length - 1].insertCell();
            newCell.textContent = cell;
        }

        var deleteCell = empTable.rows[empTable.rows.length - 1].insertCell();
        var button = document.createElement("input");
        var i = 1;
        button.class = "deleteButton";
        button.type = "button";
        button.value = "Delete";
        button.id = employee[2];

        deleteCell.appendChild(button);
        deleteCell.className = "deleteCell";
    }

    for (let index = 0; index < employees.length; index++) {
        $(employees[index][2]).addEventListener("click", deleteEmployee);
    }

    updateEmployeeCount();
}

const deleteEmployee = function (e) {
    var deleteButton = e.currentTarget;
    for (let index = 0; index < employees.length; index++) {
        if (employees[index][2] == deleteButton.id) {
            employees.splice(index, 1);
            break;
        }
    }
    display();
}

function updateEmployeeCount() {
    $("empCount").innerHTML = employees.length;
}

var addEmployeeToTable = function () {
    "use strict";
    let isError = false;
    var name = $("name").value;
    var title = $("title").value;
    let extension = $("extension").value;

    if (name === "") {
        $("errorName").innerHTML = "Please enter a name.";
        isError = true;
    }
    if (title === "") {
        $("errorTitle").innerHTML = "Please enter a title.";
        isError = true;
    }
    if (extension === "") {
        $("errorExtension").innerHTML = "Please enter an extension.";
        isError = true;
    }
    if (isError !== true) {
        $("errorName").innerHTML = "";
        $("errorTitle").innerHTML = "";
        $("errorExtension").innerHTML = "";

        employees.push([$("name").value, $("title").value, $("extension").value]);
        $("empForm").reset();
        display();
    }
};


window.addEventListener("load", function () {
    "use strict";
    display();
    $("add").addEventListener("click", addEmployeeToTable);
});
