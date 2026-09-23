function calculateMarks() {

    let name = document.getElementById("name").value;

    let mark1 = Number(document.getElementById("mark1").value);
    let mark2 = Number(document.getElementById("mark2").value);
    let mark3 = Number(document.getElementById("mark3").value);

    let total = mark1 + mark2 + mark3;
    let average = total / 3;

    let result;

    if (average >= 35) {
        result = "PASS";
    } else {
        result = "FAIL";
    }

    document.getElementById("result").innerHTML =
        "Name: " + name +
        "<br>Total: " + total +
        "<br>Average: " + average.toFixed(2) +
        "<br>Result: " + result;
}
