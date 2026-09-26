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


function getGrade(mark) {

    if (mark >= 90) {
        return "A+ 🏆";
    } else if (mark >= 80) {
        return "A ⭐";
    } else if (mark >= 70) {
        return "B+ 👍";
    } else if (mark >= 60) {
        return "B 📈";
    } else if (mark >= 40) {
        return "C 📚";
    } else {
        return "F 🚨";
    }
}


function getColorClass(mark) {

    if (mark >= 90) {
        return "excellent";
    } else if (mark >= 80) {
        return "very-good";
    } else if (mark >= 70) {
        return "good";
    } else if (mark >= 60) {
        return "average";
    } else if (mark >= 40) {
        return "improve";
    } else {
        return "poor";
    }
}


function displaySubjects() {

    let list = "";

    subjects.forEach(function(subject) {

        let grade = getGrade(subject.mark);
        let colorClass = getColorClass(subject.mark);

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


function analyzePerformance() {

    if (subjects.length === 0) {
        alert("Please add at least one subject.");
        return;
    }

    let total = 0;
    let strongest = subjects[0];
    let weakest = subjects[0];

    subjects.forEach(function(subject) {

        total = total + subject.mark;

        if (subject.mark > strongest.mark) {
            strongest = subject;
        }

        if (subject.mark < weakest.mark) {
            weakest = subject;
        }

    });

    let average = total / subjects.length;

    let performance;

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


    let recommendation;

    if (weakest.mark >= 90) {

        recommendation =
            "🏆 Excellent! All your subjects are performing strongly. Keep maintaining your consistency.";

    } else if (weakest.mark >= 75) {

        recommendation =
            "⭐ You're performing very well. Maintain your performance and try to improve your lowest subject further.";

    } else if (weakest.mark >= 60) {

        recommendation =
            "📈 You have a good foundation. Spend some extra time practicing your lowest subject.";

    } else if (weakest.mark >= 40) {

        recommendation =
            "📚 This subject needs improvement. Revise the basic concepts and practice regularly.";

    } else {

        recommendation =
            "🚨 This subject needs immediate attention. Start with the basics and practice step by step.";
    }


    document.getElementById("result").innerHTML = `

        <h2>${performance}</h2>

        <p>
            📊 Average:
            <strong>${average.toFixed(2)}%</strong>
        </p>

        <p>
            💪 Strongest Subject:
            <strong>${strongest.name}</strong>
            — ${strongest.mark}%
            — ${getGrade(strongest.mark)}
        </p>

        <p>
            📚 Lowest Subject:
            <strong>${weakest.name}</strong>
            — ${weakest.mark}%
            — ${getGrade(weakest.mark)}
        </p>

        <p>
            💡 <strong>Recommendation:</strong><br>
            ${recommendation}
        </p>

    `;
}


function resetAll() {

    subjects = [];

    document.getElementById("name").value = "";
    document.getElementById("subjectName").value = "";
    document.getElementById("subjectMark").value = "";

    document.getElementById("subjectList").innerHTML = "";
    document.getElementById("result").innerHTML = "";
}