let subjects = [];

function addSubject() {

    let subjectName = document.getElementById("subjectName").value;
    let subjectMark = Number(document.getElementById("subjectMark").value);

    if (subjectName === "" || isNaN(subjectMark)) {
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

    if (average >= 90) {

        performance = "🏆 Excellent";

        recommendation =
            "Amazing performance! Keep maintaining your consistency and challenge yourself with advanced topics.";

    } else if (average >= 75) {

        performance = "⭐ Very Good";

        recommendation =
            "Great work! Your fundamentals are strong. Regular revision and practice can help you improve further.";

    } else if (average >= 60) {

        performance = "📈 Good";

        recommendation =
            "You are doing well. Focus more on your weaker subject and practice regularly.";

    } else if (average >= 40) {

        performance = "📚 Needs Improvement";

        recommendation =
            "Spend more time revising your concepts and practice questions regularly.";

    } else {

        performance = "💪 Needs Attention";

        recommendation =
            "Start with the basics, study in small sessions, and practice simple questions before moving to difficult topics.";

    }

    document.getElementById("result").innerHTML = `

        <h2>${performance}</h2>

        <p>📊 Average: <strong>${average.toFixed(2)}%</strong></p>

        <p>💪 Strongest Subject:
        <strong>${strongest.name}</strong> — ${strongest.mark}%</p>

        <p>📚 Focus More On:
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