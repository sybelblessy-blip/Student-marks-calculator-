let subjects = [];

function addSubject() {

    let subjectName = document.getElementById("subjectName").value.trim();
    let markInput = document.getElementById("subjectMark").value;
    let subjectMark = Number(markInput);

    if (subjectName === "" || markInput === "") {
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

     function displaySubjects() {

    let list = "";

    subjects.forEach(function(subject) {

        let grade;
        let colorClass;

        if (subject.mark >= 90) {
            grade = "A+ 🏆";
            colorClass = "excellent";
        } else if (subject.mark >= 80) {
            grade = "A ⭐";
            colorClass = "very-good";
        } else if (subject.mark >= 70) {
            grade = "B+ 👍";
            colorClass = "good";
        } else if (subject.mark >= 60) {
            grade = "B 📈";
            colorClass = "average";
        } else if (subject.mark >= 40) {
            grade = "C 📚";
            colorClass = "improve";
        } else {
            grade = "F 🚨";
            colorClass = "poor";
        }

        list += `
            <div class="subject-card">

                <div class="subject-title">
                    📚 ${subject.name}
                </div>

                <div class="performance-bar">
                    <div class="bar-fill ${colorClass}"
                         style="width: ${subject.mark}%">
                    </div>
                </div>

                <div class="subject-info">
                    <strong>${subject.mark}%</strong>
                    <span>${grade}</span>
                </div>

            </div>
        `;
    });

    document.getElementById("subjectList").innerHTML = list;
}