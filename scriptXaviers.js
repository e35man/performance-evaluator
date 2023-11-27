const showECC = () => {
    let collectedECC = document.getElementById("collectedPoints").value;
    let requiredECC = document.getElementById("totalPoints").value;
    let showECCMessage = document.getElementById("ecc");

    if((requiredECC != 0)) {
        showECCMessage.innerHTML =  
            (collectedECC == requiredECC) 
            ? `<span style="color: green">Complete</span>`
            : (collectedECC < requiredECC)
            ? `<span style="color: red">Incomplete</span>`
            : `<span style="color: grey">Invalid values </span>`  
    } 
}

const showAttendence = () => {
    let attendedLectures = getAttendedLectures();
    let totalLectures = getTotalLectures();
    let aP = attendedLectures*100/totalLectures;
    let showaP = document.getElementById("attendencePercent");

    if((totalLectures != 0)){
        showaP.innerHTML = (attendedLectures > totalLectures) 
            ? `<span style="color: grey">Invalid values</span>`
            : ((aP>=75) && (attendedLectures<=100) && (totalLectures<=100) && (attendedLectures>=0) && (totalLectures>=0))
            ? `<span style="color: green">(${aP.toFixed(2) + "%"})</span>`
            : ((aP<75) && (attendedLectures<=100) && (totalLectures<=100) && (attendedLectures>=0) && (totalLectures>=0))
            ? `<span style="color: red">(${aP.toFixed(2) + "%"})</span>`
            : `<span style="color: grey">Invalid values</span>`
    }
}

const showCGPA = () => {
    let oddSGPA = getOddSGPA();
    let evenSGPA = getEvenSGPA();
    let CGPA = (oddSGPA + evenSGPA) / 2;
    let showResult = document.getElementById("CGPA");
    showResult.innerHTML = (oddSGPA >=4 && oddSGPA<=10 && evenSGPA>=4 && evenSGPA<=10)
    ? `<span>You scored ${CGPA.toFixed(2)} GPA</span>`
    : `<span style="color: grey">Invalid values</span>`;
}


const showSummary = () =>{
        
    let summaryElement = document.getElementById("summary");

    let summaryEccResult = summaryEcc();
    let summaryAttResult = summaryAtt();
    let summaryGpaResult = summaryGpa();

    if((getCollectedECC() >= 0) && (getRequiredECC() > 0) && (getAttendedLectures() >= 0) &&
       (getTotalLectures() > 0) && (getOddSGPA() >= 0) && (getEvenSGPA() >= 0)) {
           summaryElement.innerHTML = `<span class="summary-text">${summaryEccResult}<br>${summaryAttResult}<br>${summaryGpaResult}</span>`;
            
    }
}

const summaryEcc = () => {
    let summaryEccResult = (getCollectedECC() === getRequiredECC())
        ? `Hooray! All ECC's collected.`
        : (getCollectedECC() != getRequiredECC())
        ? `Hurry, collect more ECC points.`
        : `Sorry, you have entered invalid values.`;
    return summaryEccResult;
}

const summaryAtt = () => { 
    let summaryAttResult = "";
    let attendedLectures = getAttendedLectures();
    let totalLectures = getTotalLectures();
    let aP = attendedLectures*100/totalLectures;
    if((totalLectures != 0)){
    summaryAttResult = (attendedLectures > totalLectures) 
            ? `Invalid values.`
            : ((aP>=75) && (attendedLectures<=100) && (totalLectures<=100) && (attendedLectures>=0) && (totalLectures>=0))
            ? `You can appear for End Sems.`
            : ((aP<75) && (attendedLectures<=100) && (totalLectures<=100) && (attendedLectures>=0) && (totalLectures>=0))
            ? `Defaulter.`
            : `Invalid values.`;
    }
    return summaryAttResult;
}

const summaryGpa = () => {
    let summaryGpaResult = "";
    let oddSGPA = getOddSGPA();
    let evenSGPA = getEvenSGPA();
    let CGPA = (oddSGPA + evenSGPA) / 2;
    if (CGPA <= 10){
        summaryGpaResult = CGPA >= 9 ? `Outstanding Grades!`
            : CGPA >= 8 ? `Excellent Grades!`
            : CGPA >= 7 ? `Good Grades.`
            : CGPA >= 6 ? `OK Grades.`
            : CGPA >= 5 ? `Can do better in Grades.`
            : `Sorry, ou have failed.`;
    } else { summaryGpaResult = `Invalid GPA.`}
    return summaryGpaResult;
}

const getCollectedECC = () => document.getElementById("collectedPoints").value;
const getRequiredECC = () => document.getElementById("totalPoints").value;
const getAttendedLectures = () => document.getElementById("attendedLecs").value;
const getTotalLectures = () => document.getElementById("totalLecs").value;
const getOddSGPA = () => parseFloat(document.getElementById("oddSGPA").value);
const getEvenSGPA = () => parseFloat(document.getElementById("evenSGPA").value);
