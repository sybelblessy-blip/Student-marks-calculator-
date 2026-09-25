let subjects = [];

function addSubject() {

    let subjectName = document.getElementById("subjectName").value;
    let subjectMark = Number(document.getElementById("subjectMark").value);

    if (subjectName === "" || subjectMark === "") {
        alert("Please enter subject name and marks.");
        return;
    }

    if (subjectMark < 0 || subjectMark > 100) {
        alert("Marks should be between 0 and 100.");
        return;
    }

    subjects.push({
        name: subjectName,
        mark: subjectMark
    });

    displaySubjects();

    document.getElementById("subjectName").value = "";
    document.getElementById("subjectMark").value = "";
}

function displaySubjects() {

    let list = "";

    subjects.forEach(function(subject, index) {

        list += `
            <div class="subject-card">
                📚 ${subject.name} — ${subject.mark}%
            </div>
        `;

    });

    document.getElementById("subjectList").innerHTML = list;
}

function analyzePerformance() {

    if (subjects.length === 0) {
        alert("Please add at least one subject.");
        return;
    }

    let total = 0;

    subjects.forEach(function(subject) {
        total += subject.mark;
    });

    let average = total / subjects.length;

    document.getElementById("result").innerHTML =
        "📊 Average: " + average.toFixed(2) + "%";
}

function resetAll() {

    subjects = [];

    document.getElementById("subjectList").innerHTML = "";
    document.getElementById("result").innerHTML = "";

    document.getElementById("name").value = "";
}