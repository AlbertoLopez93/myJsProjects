var schools = require("../../../Data/schools.js");
var functions = require("../functions.js");

describe("Schools functions exercise", function () {
    describe("foreverAlone function", function () {
        it("should exist", function () {
            expect(functions.foreverAlone).toBeDefined();
        });
        it("should return 9 for the given schools", function () {
            expect(functions.foreverAlone(schools).length).toBe(9);
        });
    });

    describe("namesOfSuperPopular function", function () {
        it("should exist", function () {
            expect(functions.namesOfSuperPopular).toBeDefined();
        });
        it("should return 62 for the given schools", function () {
            expect(functions.namesOfSuperPopular(schools).length).toBe(62);
        });
    });

    describe("studentsInHTMLCourse function", function () {
        it("should exist", function () {
            expect(functions.studentsInHTMLCourse).toBeDefined();
        });
        it("should return 38 for the given schools", function () {
            expect(functions.studentsInHTMLCourse(schools).length).toBe(38);
        });
    });

    describe("studentsInCSSCourse function", function () {
        it("should exist", function () {
            expect(functions.studentsInCSSCourse).toBeDefined();
        });
        it("should return 34 for the given schools", function () {
            expect(functions.studentsInCSSCourse(schools).length).toBe(34);
        });
    });

    describe("studentsInJavascriptCourse function", function () {
        it("should exist", function () {
            expect(functions.studentsInJavascriptCourse).toBeDefined();
        });
        it("should return 28 for the given schools", function () {
            expect(functions.studentsInJavascriptCourse(schools).length).toBe(28);
        });
    });

    describe("studentsInPHPCourse function", function () {
        it("should exist", function () {
            expect(functions.studentsInPHPCourse).toBeDefined();
        });
        it("should return 34 for the given schools", function () {
            expect(functions.studentsInPHPCourse(schools).length).toBe(34);
        });
    });

    describe("studentsInRubyCourse function", function () {
        it("should exist", function () {
            expect(functions.studentsInRubyCourse).toBeDefined();
        });
        it("should return 40 for the given schools", function () {
            expect(functions.studentsInRubyCourse(schools).length).toBe(40);
        });
    });

    describe("studentsInJavaCourse function", function () {
        it("should exist", function () {
            expect(functions.studentsInJavaCourse).toBeDefined();
        });
        it("should return 26 for the given schools", function () {
            expect(functions.studentsInJavaCourse(schools).length).toBe(26);
        });
    });

    describe("foreverAloneLastNames function", function () {
        it("should exist", function () {
            expect(functions.foreverAloneLastNames).toBeDefined();
        });
        it("should return 9 for the given schools", function () {
            expect(functions.foreverAloneLastNames(schools).length).toBe(9);
        });
    });

    describe("fullNameOfSuperPopular function", function () {
        it("should exist", function () {
            expect(functions.fullNameOfSuperPopular).toBeDefined();
        });
        it("should return 62 for the given schools", function () {
            expect(functions.fullNameOfSuperPopular(schools).length).toBe(62);
        });
    });

    describe("agesInHTMLCourse function", function () {
        it("should exist", function () {
            expect(functions.agesInHTMLCourse).toBeDefined();
        });
        it("should return 38 for the given schools", function () {
            expect(functions.agesInHTMLCourse(schools).length).toBe(38);
        });
    });

    describe("numberOfStudentsInCSSCourse function", function () {
        it("should exist", function () {
            expect(functions.numberOfStudentsInCSSCourse).toBeDefined();
        });
        it("should return 34 for the given schools", function () {
            expect(functions.numberOfStudentsInCSSCourse(schools).length).toBe(34);
        });
    });

    describe("fullNameOfStudentsTakingABackendCourse function", function () {
        it("should exist", function () {
            expect(functions.fullNameOfStudentsTakingABackendCourse).toBeDefined();
        });
        it("should return 100 for the given schools", function () {
            expect(functions.fullNameOfStudentsTakingABackendCourse(schools).length).toBe(100);
        });
    });

    describe("fullNameOfStudentsTakingAFrontendCourse function", function () {
        it("should exist", function () {
            expect(functions.fullNameOfStudentsTakingAFrontendCourse).toBeDefined();
        });
        it("should return 100 for the given schools", function () {
            expect(functions.fullNameOfStudentsTakingAFrontendCourse(schools).length).toBe(100);
        });
    });

    describe("averageAgeOfStudentsTakingAFrontendCourse function", function () {
        it("should exist", function () {
            expect(functions.averageAgeOfStudentsTakingAFrontendCourse).toBeDefined();
        });
        it("should return 19.48 for the given schools", function () {
            expect(functions.averageAgeOfStudentsTakingAFrontendCourse(schools)).toBe(19.48);
        });
    });

    describe("averageGradeOfStudentsTakingAFrontendCourse function", function () {
        it("should exist", function () {
            expect(functions.averageGradeOfStudentsTakingAFrontendCourse).toBeDefined();
        });
        it("should return 7.41 for the given schools", function () {
            expect(functions.averageGradeOfStudentsTakingAFrontendCourse(schools)).toBe(7.41);
        });
    });

    describe("averageGradeOfForeverAlones function", function () {
        it("should exist", function () {
            expect(functions.averageGradeOfForeverAlones).toBeDefined();
        });
        it("should return 6.703703703703703 for the given schools", function () {
            expect(functions.averageGradeOfForeverAlones(schools)).toBe(6.703703703703703);
        });
    });

    describe("averageAgeOfAllStudents function", function () {
        it("should exist", function () {
            expect(functions.averageAgeOfAllStudents).toBeDefined();
        });
        it("should return 19.48 for the given schools", function () {
            expect(functions.averageAgeOfAllStudents(schools)).toBe(19.48);
        });
    });

    describe("percentageOfStatus function", function () {
        it("should exist", function () {
            expect(functions.percentageOfStatus).toBeDefined();
        });
        it("should have activePercentage property defined", function () {
            expect(functions.percentageOfStatus(schools).activePercentage).toBeDefined();
        });
        it("should have inactivePercentage property defined", function () {
            expect(functions.percentageOfStatus(schools).inactivePercentage).toBeDefined();
        });
        it("should have 54 activePercentage for the given schools", function () {
            expect(functions.percentageOfStatus(schools).activePercentage).toBe(54);
        });
        it("should have 46 inactivePercentage for the given schools", function () {
            expect(functions.percentageOfStatus(schools).inactivePercentage).toBe(46);
        });
    });

    describe("getIDsOfStudentsWithBlueEyes function", function () {
        it("should exist", function () {
            expect(functions.getIDsOfStudentsWithBlueEyes).toBeDefined();
        });
        it("should return 22 IDs for the given schools", function () {
            expect(functions.getIDsOfStudentsWithBlueEyes(schools).length).toBe(22);
        });
    });

    describe("getFirstNameOfStudentsWithGreenEyes function", function () {
        it("should exist", function () {
            expect(functions.getFirstNameOfStudentsWithGreenEyes).toBeDefined();
        });
        it("should return 15 first names for the given schools", function () {
            expect(functions.getFirstNameOfStudentsWithGreenEyes(schools).length).toBe(15);
        });
    });

    describe("getLastNameOfStudentsWithBrownEyes function", function () {
        it("should exist", function () {
            expect(functions.getLastNameOfStudentsWithBrownEyes).toBeDefined();
        });
        it("should return 22 last names for the given schools", function () {
            expect(functions.getLastNameOfStudentsWithBrownEyes(schools).length).toBe(22);
        });
    });

    describe("getFullNameOldestStudent function", function () {
        it("should exist", function () {
            expect(functions.getFullNameOldestStudent).toBeDefined();
        });
        it("should return Bessie Myers for the given schools", function () {
            expect(functions.getFullNameOldestStudent(schools)).toBe("Bessie Myers");
        });
    });

    describe("getFullNameYoungestStudent function", function () {
        it("should exist", function () {
            expect(functions.getFullNameYoungestStudent).toBeDefined();
        });
        it("should return Cooley Blackwell for the given schools", function () {
            expect(functions.getFullNameYoungestStudent(schools)).toBe("Cooley Blackwell");
        });
    });

    describe("averageGradeAllStudentsAllCourses function", function () {
        it("should exist", function () {
            expect(functions.averageGradeAllStudentsAllCourses).toBeDefined();
        });
        it("should return 7.316666666666666 for the given schools", function () {
            expect(functions.averageGradeAllStudentsAllCourses(schools)).toBe(7.316666666666666);
        });
    });

    describe("averageGradeOfStudensInHTMLCourse function", function () {
        it("should exist", function () {
            expect(functions.averageGradeOfStudensInHTMLCourse).toBeDefined();
        });
        it("should return 7.342105263157895 for the given schools", function () {
            expect(functions.averageGradeOfStudensInHTMLCourse(schools)).toBe(7.342105263157895);
        });
    });

    describe("averageGradeOfStudensInCSSCourse function", function () {
        it("should exist", function () {
            expect(functions.averageGradeOfStudensInCSSCourse).toBeDefined();
        });
        it("should return 7.411764705882353 for the given schools", function () {
            expect(functions.averageGradeOfStudensInCSSCourse(schools)).toBe(7.411764705882353);
        });
    });

    describe("averageGradeOfStudensInJavascriptCourse function", function () {
        it("should exist", function () {
            expect(functions.averageGradeOfStudensInJavascriptCourse).toBeDefined();
        });
        it("should return 7.5 for the given schools", function () {
            expect(functions.averageGradeOfStudensInJavascriptCourse(schools)).toBe(7.5);
        });
    });

    describe("averageGradeOfStudensInPHPCourse function", function () {
        it("should exist", function () {
            expect(functions.averageGradeOfStudensInPHPCourse).toBeDefined();
        });
        it("should return 7.588235294117647 for the given schools", function () {
            expect(functions.averageGradeOfStudensInPHPCourse(schools)).toBe(7.588235294117647);
        });
    });

    describe("averageGradeOfStudensInRubyCourse function", function () {
        it("should exist", function () {
            expect(functions.averageGradeOfStudensInRubyCourse).toBeDefined();
        });
        it("should return 6.85 for the given schools", function () {
            expect(functions.averageGradeOfStudensInRubyCourse(schools)).toBe(6.85);
        });
    });

    describe("averageGradeOfStudensInJavaCourse function", function () {
        it("should exist", function () {
            expect(functions.averageGradeOfStudensInJavaCourse).toBeDefined();
        });
        it("should return 7.153846153846154 for the given schools", function () {
            expect(functions.averageGradeOfStudensInJavaCourse(schools)).toBe(7.153846153846154);
        });
    });

    describe("fullNameOfStudentsWhoFailedACourse function", function () {
        it("should exist", function () {
            expect(functions.fullNameOfStudentsWhoFailedACourse).toBeDefined();
        });
        it("should return 46 students for the given schools", function () {
            expect(functions.fullNameOfStudentsWhoFailedACourse(schools).length).toBe(46);
        });
    });

    describe("agesOfStudentsWhoFailedACourse function", function () {
        it("should exist", function () {
            expect(functions.agesOfStudentsWhoFailedACourse).toBeDefined();
        });
        it("should return 46 students for the given schools", function () {
            expect(functions.agesOfStudentsWhoFailedACourse(schools).length).toBe(46);
        });
    });
});
