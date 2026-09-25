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

    let list = "";

    subjects.forEach(function(subject) {

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
    let strongest = subjects[0];
    let weakest = subjects[0];

    subjects.forEach(function(subject) {

        total += subject.mark;

        if (subject.mark > strongest.mark) {
            strongest = subject;
        }

        if (subject.mark < weakest.mark) {
            weakest = subject;
        }

    });

    let average = total / subjects.length;

    let performance;
    let recommendation;
    let focusMessage;

    // Overall performance
    if (average >= 90) {

        performance = "🏆 Excellent";

    } else if (average >= 75) {

        performance = "⭐ Very Good";

    } else if (average >= 60) {

        performance = "📈 Good";

    } else if (average >= 40) {

        performance = "📚 Needs Improvement";

    } else {

        performance = "🚨 Needs Attention";

    }

    // Recommendation based on lowest subject
    if (weakest.mark >= 90) {

        focusMessage =
            "🏆 Excellent! Your lowest subject is also very strong. Keep maintaining your performance.";

    } else if (weakest.mark >= 75) {

        focusMessage =
            "⭐ You're performing very well. Maintain your current performance and try to improve this subject further.";

    } else if (weakest.mark >= 60) {

        focusMessage =
            "📈 You have a good foundation. Spend some extra time practicing this subject.";

    } else if (weakest.mark >= 40) {

        focusMessage =
            "📚 This subject needs improvement. Revise the basic concepts and practice regularly.";

    } else {

        focusMessage =
            "🚨 This subject needs immediate attention. Start with the basics and practice step by step.";

    }

    recommendation =
        focusMessage;

    document.getElementById("result").innerHTML = `

        <h2>${performance}</h2>

        <p>📊 Average:
        <strong>${average.toFixed(2)}%</strong></p>

        <p>💪 Strongest Subject:
        <strong>${strongest.name}</strong> — ${strongest.mark}%</p>

        <p>📚 Lowest Subject:
        <strong>${weakest.name}</strong> — ${weakest.mark}%</p>

        <p>💡 <strong>Recommendation:</strong><br>
        ${recommendation}</p>

    `;
}

function resetAll() {

    subjects = [];

    document.getElementById("subjectList").innerHTML = "";
    document.getElementById("result").innerHTML = "";

    document.getElementById("name").value = "";
}