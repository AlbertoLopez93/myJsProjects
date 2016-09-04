"use strict"

// Names of the students who are forever-alone (no friends).
function foreverAlone(schools) {
    let result = [];
    schools.forEach(function (school) {
        school.students.forEach(function (student) {
            if (student.friends.length === 0) {
                result.push(student.name.first + " " + student.name.last);
            }
        });
    });
    return result;
}

// Names of the students who are super popular and have 4 or more friends.
function namesOfSuperPopular(schools) {
    let result = [];
    schools.forEach(function (school) {
        school.students.forEach(function (student) {
            if (student.friends.length >= 4) {
                result.push(student.name.first);
            }
        });
    });
    return result;
}

// Names of students taking any given course
function studentsPerCourse(schools, courseToFind) {
    let result = [];
    schools.forEach(function (school) {
        school.students.forEach(function (student) {
            student.courses.forEach(function (course) {
                if (course.name === courseToFind) {
                    result.push(student.name.first + " " + student.name.last);
                }
            });
        });
    });
    return result;
}

// Names of students taking HTML course.
function studentsInHTMLCourse(schools) {
    return studentsPerCourse(schools, "HTML");
}

// Names of students taking CSS course.
function studentsInCSSCourse(schools) {
    return studentsPerCourse(schools, "CSS");
}

// Names of students taking Javascript course.
function studentsInJavascriptCourse(schools) {
    return studentsPerCourse(schools, "Javascript");
}

// Names of students taking PHP course.
function studentsInPHPCourse(schools) {
    return studentsPerCourse(schools, "PHP");
}

// Names of students taking Ruby course.
function studentsInRubyCourse(schools) {
    return studentsPerCourse(schools, "Ruby");
}

// Names of students taking Java course.
function studentsInJavaCourse(schools) {
    return studentsPerCourse(schools, "Java");
}

// Last names of the students who are forever-alones (no friends).
function foreverAloneLastNames(schools) {
    let result = [];
    schools.forEach(function (school) {
        school.students.forEach(function (student) {
            if (student.friends.length === 0) {
                result.push(student.name.last);
            }
        });
    });
    return result;
}

// Full name of the students who are super popular and have 4 or more friends.
function fullNameOfSuperPopular(schools) {
    let result = [];
    schools.forEach(function (school) {
        school.students.forEach(function (student) {
            if (student.friends.length >= 4) {
                result.push(student.name.first + " " + student.name.last);
            }
        });
    });
    return result;
}

function agePerCourse(schools, courseToFind) {
    let result = [];
    schools.forEach(function (school) {
        school.students.forEach(function (student) {
            student.courses.forEach(function (course) {
                if (course.name === courseToFind) {
                    result.push(student.age);
                }
            });
        });
    });
    return result;
}

// Ages of students taking HTML course.
function agesInHTMLCourse(schools) {
    return agePerCourse(schools, "HTML");
}

function numberOfStudentPerCourse(schools, courseToFind) {
    let result = [];
    schools.forEach(function (school) {
        school.students.forEach(function (student) {
            student.courses.forEach(function (course) {
                if (course.name === courseToFind) {
                    result.push(student.phone);
                }
            });
        });
    });
    return result;
}

// Phone numbers of students taking CSS course.
function numberOfStudentsInCSSCourse(schools) {
    return numberOfStudentPerCourse(schools, "CSS");
}

function fullNameOfStudentsInCourses(schools, coursesToFind) {
    let result = [];
    for(let i = 0; i < schools.length; i++) {
        for(let j = 0; j < schools[i].students.length; j++) {
            for(let k = 0; k < schools[i].students[j].courses.length; k++) {
                if (coursesToFind.indexOf(schools[i].students[j].courses[k].name) > -1) {
                    result.push(schools[i].students[j].name.first + " " + schools[i].students[j].name.last);
                    break;
                }
            }
        }
    }
    return result;
}

// Full name of students taking any course related to a backend technology (Javascript, PHP, Ruby, Java)
function fullNameOfStudentsTakingABackendCourse(schools) {
    return fullNameOfStudentsInCourses(schools, ["Javascript", "PHP", "Ruby", "Java"]);
}

// Full name of students taking any course related to a frontend technology (Javascript, HTML, CSS)
function fullNameOfStudentsTakingAFrontendCourse(schools) {
    return fullNameOfStudentsInCourses(schools, ["Javascript", "HTML", "CSS"]);
}

function averageAgeOfStudentsInCourses(schools, coursesToFind) {
    let result = [];

    for(let i = 0; i < schools.length; i++) {
        for(let j = 0; j < schools[i].students.length; j++) {
            for(let k = 0; k < schools[i].students[j].courses.length; k++) {
                if (coursesToFind.indexOf(schools[i].students[j].courses[k].name) > -1) {
                    result.push(schools[i].students[j].age);
                    break;
                }
            }
        }
    }
    return result.reduce(function (prev, current) {
        return prev + current;
    }, 0) / result.length;
}

// Average age of students taking any of these courses: HTML, CSS, Javascript
function averageAgeOfStudentsTakingAFrontendCourse(schools) {
    return averageAgeOfStudentsInCourses(schools, ["HTML", "CSS", "Javascript"]);
}

function averageGradeOfStudentsInCourses(schools, coursesToFind) {
    let studentsAverages = [];
    let sum = 0;
    let result;

    for(let i = 0; i < schools.length; i++) {
        for(let j = 0; j < schools[i].students.length; j++) {
            let grades = [];
            let sum = 0;
            for(let k = 0; k < schools[i].students[j].courses.length; k++) {
                if (coursesToFind.indexOf(schools[i].students[j].courses[k].name) > -1) {
                    grades.push(schools[i].students[j].courses[k].grade);
                }
            }
            grades.forEach(function (grade) {
                sum += grade;
            });
            studentsAverages.push(sum/grades.length);
        }
    }
    studentsAverages.forEach(function (averagePerStudent) {
        sum += averagePerStudent;
    });
    result = sum / studentsAverages.length;
    return result;
}

// Average grade of students taking any of these courses: HTML, CSS, Javascript
function averageGradeOfStudentsTakingAFrontendCourse(schools) {
    return averageGradeOfStudentsInCourses(schools, ["HTML", "CSS", "Javascript"]);
}

// Average grade of the students who are forever-alone (no friends).
function averageGradeOfForeverAlones(schools) {
    let studentsAverages = [];
    let sum = 0;
    let result;

    for (let i = 0; i < schools.length; i++) {
        for (let j = 0; j < schools[i].students.length; j++) {
            if (schools[i].students[j].friends.length === 0) {
                let grades = [];
                let sum = 0;
                for (let k = 0; k < schools[i].students[j].courses.length; k++) {
                    grades.push(schools[i].students[j].courses[k].grade);
                }
                grades.forEach(function (grade) {
                    sum += grade;
                });
                studentsAverages.push(sum / grades.length);
            }
        }
    }
    studentsAverages.forEach(function (averagePerStudent) {
        sum += averagePerStudent;
    });
    result = sum / studentsAverages.length;
    return result;
}

// Average of ages of students.
function averageAgeOfAllStudents(schools) {
    let ages = [];
    let sum = 0;
    let result;
    schools.forEach(function (school) {
        school.students.forEach(function (student) {
            ages.push(student.age);
        });
    });
    ages.forEach(function (age) {
        sum += age;
    });
    result = sum / ages.length;
    return result;
}

// Percentage of active students and inactive students.
function percentageOfStatus(schools) {
    let active = 0;
    let inActive = 0;
    let studentsCounter = 0;
    schools.forEach(function (school) {
        school.students.forEach(function (student) {
            if (student.isActive) {
                active++;
            } else {
                inActive++;
            }
            studentsCounter++;
        });
    });
    return {
        activePercentage: (active / studentsCounter) * 100,
        inactivePercentage: (inActive / studentsCounter) * 100
    };
}

function getIDsOfStudentsForGivenColor(schools, color) {
    let ids = [];
    schools.forEach(function (school) {
        school.students.forEach(function (student) {
            if (student.eyeColor === color) {
                ids.push(student._id);
            }
        });
    });
    return ids;
}

// Get the ids of the students with blue eyes.
function getIDsOfStudentsWithBlueEyes(schools) {
    return getIDsOfStudentsForGivenColor(schools, "blue");
}

function getFirstNameForEyesColor(schools, color) {
    let firstNames = [];
    schools.forEach(function (school) {
        school.students.forEach(function (student) {
            if (student.eyeColor === color) {
                firstNames.push(student.name.first);
            }
        });
    });
    return firstNames;
}

// Get the first name of the students with green eyes.
function getFirstNameOfStudentsWithGreenEyes(schools) {
    return getFirstNameForEyesColor(schools, "green");
}

function getLastNameForEyesColor(schools, color) {
    let firstNames = [];
    schools.forEach(function (school) {
        school.students.forEach(function (student) {
            if (student.eyeColor === color) {
                firstNames.push(student.name.last);
            }
        });
    });
    return firstNames;
}

// Get the last name of the students with brown eyes.
function getLastNameOfStudentsWithBrownEyes(schools) {
    return getLastNameForEyesColor(schools, "brown");
}

// Get the full name of the oldest student.
function getFullNameOldestStudent(schools) {
    let oldestStudent;
    schools.forEach(function (school) {
        school.students.forEach(function (student) {
            if (oldestStudent === undefined) {
                oldestStudent = student;
            } else if (student.age >= oldestStudent.age) {
                oldestStudent = student;
            }
        });
    });
    return oldestStudent.name.first + " " + oldestStudent.name.last;
}

// Get the full name of the youngest student.
function getFullNameYoungestStudent(schools) {
    let youngestStudent;
    schools.forEach(function (school) {
        school.students.forEach(function (student) {
            if (youngestStudent === undefined) {
                youngestStudent = student;
            } else if (student.age <= youngestStudent.age) {
                youngestStudent = student;
            }
        });
    });
    return youngestStudent.name.first + " " + youngestStudent.name.last;
}

// Average of grades of all students all courses
function averageGradeAllStudentsAllCourses(schools) {
    let studentsAverages = [];
    let sum = 0;
    let result;

    for (let i = 0; i < schools.length; i++) {
        for (let j = 0; j < schools[i].students.length; j++) {
            let grades = [];
            let sum = 0;
            for (let k = 0; k < schools[i].students[j].courses.length; k++) {
                grades.push(schools[i].students[j].courses[k].grade);
            }
            grades.forEach(function (grade) {
                sum += grade;
            });
            studentsAverages.push(sum / grades.length);
        }
    }
    studentsAverages.forEach(function (averagePerStudent) {
        sum += averagePerStudent;
    });
    result = sum / studentsAverages.length;
    return result;
}

function averageGradeForGivenCourse(schools, courseToFind) {
    let studentsAverages = [];
    let sum = 0;
    let result;

    for (let i = 0; i < schools.length; i++) {
        for (let j = 0; j < schools[i].students.length; j++) {
            for(let k = 0; k < schools[i].students[j].courses.length; k++) {
                if (schools[i].students[j].courses[k].name === courseToFind) {
                    studentsAverages.push(schools[i].students[j].courses[k].grade)
                }
            }
        }
    }
    studentsAverages.forEach(function (averagePerStudent) {
        sum += averagePerStudent;
    });
    result = sum / studentsAverages.length;
    return result;
}

// Average grade of all the students in the HTML course.
function averageGradeOfStudensInHTMLCourse(schools) {
    return averageGradeForGivenCourse(schools, "HTML");
}

// Average grade of all the students in the CSS course.
function averageGradeOfStudensInCSSCourse(schools) {
    return averageGradeForGivenCourse(schools, "CSS");
}

// Average grade of all the students in the Javascript course.
function averageGradeOfStudensInJavascriptCourse(schools) {
    return averageGradeForGivenCourse(schools, "Javascript");
}

// Average grade of all the students in the PHP course.
function averageGradeOfStudensInPHPCourse(schools) {
    return averageGradeForGivenCourse(schools, "PHP");
}

// Average grade of all the students in the Ruby course.
function averageGradeOfStudensInRubyCourse(schools) {
    return averageGradeForGivenCourse(schools, "Ruby");
}

// Average grade of all the students in the Java course.
function averageGradeOfStudensInJavaCourse(schools) {
    return averageGradeForGivenCourse(schools, "Java");
}

// Names of the students who have failed a course.
function fullNameOfStudentsWhoFailedACourse(schools) {
    var failedStudents = [];
    for(var i = 0; i < schools.length; i++){
        for(var j = 0; j < schools[i].students.length; j++) {
            for(var k = 0; k < schools[i].students[j].courses.length; k++) {
                if (schools[i].students[j].courses[k].grade < 6) {
                    failedStudents.push(schools[i].students[j].name.first + " " + schools[i].students[j].name.last);
                    break;
                }
            }
        }
    }
    return failedStudents;
}

// Ages of the students who have failed a course.
function agesOfStudentsWhoFailedACourse(schools) {
    var agesOfFailedStudents = [];
    for(var i = 0; i < schools.length; i++){
        for(var j = 0; j < schools[i].students.length; j++) {
            for(var k = 0; k < schools[i].students[j].courses.length; k++) {
                if (schools[i].students[j].courses[k].grade < 6) {
                    agesOfFailedStudents.push(schools[i].students[j].age);
                    break;
                }
            }
        }
    }
    return agesOfFailedStudents;
}

module.exports = {
  foreverAlone: foreverAlone,
  namesOfSuperPopular: namesOfSuperPopular,
  studentsInHTMLCourse: studentsInHTMLCourse,
  studentsInCSSCourse: studentsInCSSCourse,
  studentsInJavascriptCourse: studentsInJavascriptCourse,
  studentsInPHPCourse: studentsInPHPCourse,
  studentsInRubyCourse: studentsInRubyCourse,
  studentsInJavaCourse: studentsInJavaCourse,
  foreverAloneLastNames: foreverAloneLastNames,
  fullNameOfSuperPopular: fullNameOfSuperPopular,
  agesInHTMLCourse: agesInHTMLCourse,
  numberOfStudentsInCSSCourse: numberOfStudentsInCSSCourse,
  fullNameOfStudentsTakingABackendCourse: fullNameOfStudentsTakingABackendCourse,
  fullNameOfStudentsTakingAFrontendCourse: fullNameOfStudentsTakingAFrontendCourse,
  averageAgeOfStudentsTakingAFrontendCourse: averageAgeOfStudentsTakingAFrontendCourse,
  averageGradeOfStudentsTakingAFrontendCourse: averageGradeOfStudentsTakingAFrontendCourse,
  averageGradeOfForeverAlones: averageGradeOfForeverAlones,
  averageAgeOfAllStudents: averageAgeOfAllStudents,
  percentageOfStatus: percentageOfStatus,
  getIDsOfStudentsWithBlueEyes: getIDsOfStudentsWithBlueEyes,
  getFirstNameOfStudentsWithGreenEyes: getFirstNameOfStudentsWithGreenEyes,
  getLastNameOfStudentsWithBrownEyes: getLastNameOfStudentsWithBrownEyes,
  getFullNameOldestStudent: getFullNameOldestStudent,
  getFullNameYoungestStudent: getFullNameYoungestStudent,
  averageGradeAllStudentsAllCourses: averageGradeAllStudentsAllCourses,
  averageGradeOfStudensInHTMLCourse: averageGradeOfStudensInHTMLCourse,
  averageGradeOfStudensInCSSCourse: averageGradeOfStudensInCSSCourse,
  averageGradeOfStudensInJavascriptCourse: averageGradeOfStudensInJavascriptCourse,
  averageGradeOfStudensInPHPCourse: averageGradeOfStudensInPHPCourse,
  averageGradeOfStudensInRubyCourse: averageGradeOfStudensInRubyCourse,
  averageGradeOfStudensInJavaCourse: averageGradeOfStudensInJavaCourse,
  fullNameOfStudentsWhoFailedACourse: fullNameOfStudentsWhoFailedACourse,
  agesOfStudentsWhoFailedACourse: agesOfStudentsWhoFailedACourse
}
