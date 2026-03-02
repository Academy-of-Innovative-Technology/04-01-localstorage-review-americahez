var key = "Review";


// SAVE
document.querySelector(".save").onclick = function() {
    var value = document.querySelector("#saveValue").value;
    localStorage.setItem(key, value);
};


// LOAD
document.querySelector(".load").onclick = function() {
    var value = localStorage.getItem(key);
    document.querySelector("#loadValue").value = value;
};

// LOAD
document.querySelector(".update").onclick = function() {
    var value = document.querySelector("#updateValue").value;
    localStorage.setItem(key, value);
};

// DELETE
document.querySelector(".delete").onclick = function() {
    localStorage.removeItem(key);
};
