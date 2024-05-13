const averageGrade = 85;

switch (true) {
    case averageGrade < 60:
        console.log("Unsatisfactory!");
        break;
    case averageGrade <= 70:
        console.log("Satisfactory!");
        break;
    case averageGrade <= 80:
        console.log("Good!");
        break;
    case averageGrade <= 90:
        console.log("Very Good!");
        break;
    default:
        console.log("Excellent!")
}