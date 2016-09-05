
function foreverAlone(moreSchools) {
  var alone=[];
  for (var i = 0; i < moreSchools.length; i++) {

    for (var j = 0; j <moreSchools[i].students.length; j++) {


    if(moreSchools[i].students[j].friends.length===0){

    name:"";
    name=moreSchools[i].students[j].name.first + " "+moreSchools[i].students[j].name.last
    alone[alone.length]=name;
  }
  }

}

return alone;
}


function superPopular(moreSchools) {
  var popular=[];
  for (var i = 0; i < moreSchools.length; i++) {

    for (var j = 0; j <moreSchools[i].students.length; j++) {


    if(moreSchools[i].students[j].friends.length>=4){

    name:"";
    name=moreSchools[i].students[j].name.first
    popular[popular.length]=name;
  }
  }

}

return popular;
}

function numberHtml(moreSchools) {
 html=[];
  for (var i = 0; i < moreSchools.length; i++) {

    for (var j = 0; j <moreSchools[i].students.length; j++) {
        for (var k = 0; k <moreSchools[i].students[j].courses.length; k++){

          if (moreSchools[i].students[j].courses[k].name==="HTML") {

            var name="";
            name=moreSchools[i].students[j].name.first + " "+moreSchools[i].students[j].name.last
            html[html.length]=name;
          }
        }

}}

return html;}

function numberCss(moreSchools) {
 css=[];
  for (var i = 0; i < moreSchools.length; i++) {

    for (var j = 0; j <moreSchools[i].students.length; j++) {
        for (var k = 0; k <moreSchools[i].students[j].courses.length; k++){

          if (moreSchools[i].students[j].courses[k].name==="CSS") {
          //  console.log(moreSchools[i].students[j].name.first);
            var name="";
            name=moreSchools[i].students[j].name.first + " "+moreSchools[i].students[j].name.last
            css[css.length]=name;
          }
        }

}}
return css;
}

function numberJavasc(moreSchools) {
javaSC=[];
  for (var i = 0; i < moreSchools.length; i++) {

    for (var j = 0; j <moreSchools[i].students.length; j++) {
        for (var k = 0; k <moreSchools[i].students[j].courses.length; k++){

          if (moreSchools[i].students[j].courses[k].name==="Javascript") {

            var name="";
            name=moreSchools[i].students[j].name.first + " "+moreSchools[i].students[j].name.last
            javaSC[javaSC.length]=name;
          }
        }

}}
return javaSC;}

function numberPhp(moreSchools) {
php=[];
  for (var i = 0; i < moreSchools.length; i++) {

    for (var j = 0; j <moreSchools[i].students.length; j++) {
        for (var k = 0; k <moreSchools[i].students[j].courses.length; k++){

          if (moreSchools[i].students[j].courses[k].name==="PHP") {

            var name="";
            name=moreSchools[i].students[j].name.first + " "+moreSchools[i].students[j].name.last
            php[php.length]=name;
          }
        }

}}
return php;}

function numberRuby(moreSchools) {
ruby=[];
  for (var i = 0; i < moreSchools.length; i++) {

    for (var j = 0; j <moreSchools[i].students.length; j++) {
        for (var k = 0; k <moreSchools[i].students[j].courses.length; k++){

          if (moreSchools[i].students[j].courses[k].name==="Ruby") {

            var name="";
            name=moreSchools[i].students[j].name.first + " "+moreSchools[i].students[j].name.last
            ruby[ruby.length]=name;
          }
        }

}}
return ruby;}

function numberJava(moreSchools) {
java=[];
  for (var i = 0; i < moreSchools.length; i++) {

    for (var j = 0; j <moreSchools[i].students.length; j++) {
        for (var k = 0; k <moreSchools[i].students[j].courses.length; k++){

          if (moreSchools[i].students[j].courses[k].name==="Java") {

            var name="";
            name=moreSchools[i].students[j].name.first + " "+moreSchools[i].students[j].name.last
            java[java.length]=name;
          }
        }

}}
return java;}

function AloneLast(moreSchools) {
  var aloneLast=[];
  for (var i = 0; i < moreSchools.length; i++) {

    for (var j = 0; j <moreSchools[i].students.length; j++) {


    if(moreSchools[i].students[j].friends.length===0){

    name:"";
    name=moreSchools[i].students[j].name.last
    aloneLast[aloneLast.length]=name;
  }
  }
}
return aloneLast;
}

function superPopular2(moreSchools) {
  var popular2=[];
  for (var i = 0; i < moreSchools.length; i++) {

    for (var j = 0; j <moreSchools[i].students.length; j++) {


    if(moreSchools[i].students[j].friends.length>=4){

    name:"";
    name=moreSchools[i].students[j].name.first + " "+moreSchools[i].students[j].name.last
    popular2[popular2.length]=name;
  }
  }

}
return popular2;
}
function numberHtmlAge(moreSchools) {
 htmlAge=[];
  for (var i = 0; i < moreSchools.length; i++) {

    for (var j = 0; j <moreSchools[i].students.length; j++) {
        for (var k = 0; k <moreSchools[i].students[j].courses.length; k++){

          if (moreSchools[i].students[j].courses[k].name==="HTML") {

            var name="";
            name=moreSchools[i].students[j].age
            htmlAge[htmlAge.length]=name;
          }
        }

}}
return htmlAge;}

function numberCsstel(moreSchools) {
 csstel=[];
  for (var i = 0; i < moreSchools.length; i++) {

    for (var j = 0; j <moreSchools[i].students.length; j++) {
        for (var k = 0; k <moreSchools[i].students[j].courses.length; k++){

          if (moreSchools[i].students[j].courses[k].name==="CSS") {

            var name="";
            name=moreSchools[i].students[j].phone
            csstel[csstel.length]=name;
          }
        }

}}
return csstel;}


function backend (moreSchools) {
  backendAry=[];
    for (var i = 0; i < moreSchools.length; i++) {

      for (var j = 0; j <moreSchools[i].students.length; j++) {
      for (var k = 0; k <moreSchools[i].students[j].courses.length; k++){

            if (moreSchools[i].students[j].courses[k].name==="Javascript"||moreSchools[i].students[j].courses[k].name==="PHP"||moreSchools[i].students[j].courses[k].name==="Ruby"||moreSchools[i].students[j].courses[k].name==="Java") {

              var name="";
              name=moreSchools[i].students[j].name.first + " "+moreSchools[i].students[j].name.last

              backendAry[backendAry.length]=name;
              break;
            }
          }

  }}
  return backendAry;}

  function frontend (moreSchools) {
    frontendAry=[];
      for (var i = 0; i < moreSchools.length; i++) {

        for (var j = 0; j <moreSchools[i].students.length; j++) {
        for (var k = 0; k <moreSchools[i].students[j].courses.length; k++){

              if (moreSchools[i].students[j].courses[k].name==="Javascript"||moreSchools[i].students[j].courses[k].name==="HTML"||moreSchools[i].students[j].courses[k].name==="CSS") {

                var name="";
                name=moreSchools[i].students[j].name.first + " "+moreSchools[i].students[j].name.last

                frontendAry[frontendAry.length]=name;
                break;
              }
            }

    }}
    return frontendAry;}


function frontendAge (moreSchools) {
var suma=0,contadorAge=0,promediofrontend=0;
    for (var i = 0; i < moreSchools.length; i++) {

      for (var j = 0; j <moreSchools[i].students.length; j++) {
      for (var k = 0; k <moreSchools[i].students[j].courses.length; k++){

            if (moreSchools[i].students[j].courses[k].name==="Javascript"||moreSchools[i].students[j].courses[k].name==="HTML"||moreSchools[i].students[j].courses[k].name==="CSS") {
              contadorAge++;
            suma=suma+moreSchools[i].students[j].age;
            }
          }

  }}
  promediofrontend=suma/contadorAge;

  console.log("La edad promedio de los alumnos de frontend es "+ promediofrontend.toFixed(2));
  ;}

  function frontendAverage (moreSchools) {
  var suma=0,contadorAverage=0,promediofrontendAverage=0;
      for (var i = 0; i < moreSchools.length; i++) {

        for (var j = 0; j <moreSchools[i].students.length; j++) {
        for (var k = 0; k <moreSchools[i].students[j].courses.length; k++){

              if (moreSchools[i].students[j].courses[k].name==="Javascript"||moreSchools[i].students[j].courses[k].name==="HTML"||moreSchools[i].students[j].courses[k].name==="CSS") {
                contadorAverage++;
              suma=suma+moreSchools[i].students[j].courses[k].grade;
              }
            }

    }}
    promediofrontendAverage=suma/contadorAverage;

    console.log("El promedio de los alumnos de frontend es "+ promediofrontendAverage.toFixed(2));
    ;}

    function foreverAloneAverage(moreSchools) {
      var alone=[],suma=0,promedio=0;
      for (var i = 0; i < moreSchools.length; i++) {

        for (var j = 0; j <moreSchools[i].students.length; j++) {
          for (var k = 0; k <moreSchools[i].students[j].courses.length; k++){

        if(moreSchools[i].students[j].friends.length===0){

        name:"";
        name=moreSchools[i].students[j].name.first + " "+moreSchools[i].students[j].name.last
        alone[alone.length]=name;
        suma=suma+moreSchools[i].students[j].courses[k].grade;

      }}
      }

    }
    promedio=suma/alone.length;
    console.log("Promedio de los alumnos independientes es:"+promedio.toFixed(2));

    }

    function Age (moreSchools) {
    var suma=0,contAge=0,promedioAge=0;
        for (var i = 0; i < moreSchools.length; i++) {

          for (var j = 0; j <moreSchools[i].students.length; j++) {


                contAge++;
                suma=suma+moreSchools[i].students[j].age;



      }}
      promedioAge=suma/contAge;

      console.log("La edad promedio de los alumnos es "+ promedioAge.toFixed(2));
      ;}

      function isActive (moreSchools) {
      var contadorEstudents=0,active=0,noActive=0,promedioIsActive=0,promedioNoActive=0;
          for (var i = 0; i < moreSchools.length; i++) {

            for (var j = 0; j <moreSchools[i].students.length; j++) {
                    contadorEstudents++;
                  if (moreSchools[i].students[j].isActive) {
                    active++;
                  }
                else{noActive++; }



        }}
        promedioIsActive=active/contadorEstudents*100;
        promedioNoActive=noActive/contadorEstudents*100;
        console.log("El porcentaje de los alunmos activos es "+ promedioIsActive+ " y el de los inactivos es "+ promedioNoActive);
        }

        function blueEyes (moreSchools) {
      blueEye=[];
            for (var i = 0; i < moreSchools.length; i++) {

              for (var j = 0; j <moreSchools[i].students.length; j++) {
                if (moreSchools[i].students[j].eyeColor==="blue") {

                  blueEye[blueEye.length]=moreSchools[i].students[j]._id;

                  }

          }}
          console.log("Hay "+ blueEye.length + " con ojos azules");
          return blueEye;
          }

          function greenEye (moreSchools) {
        greenEye=[];
              for (var i = 0; i < moreSchools.length; i++) {

                for (var j = 0; j <moreSchools[i].students.length; j++) {
                  if (moreSchools[i].students[j].eyeColor==="green") {

                    greenEye[greenEye.length]=moreSchools[i].students[j].name.first;

                    }

            }}
            console.log("Hay "+ greenEye.length + " con ojos verdes");
          return greenEye;
            }

            function brownEye (moreSchools) {
          brownEye=[];
                for (var i = 0; i < moreSchools.length; i++) {

                  for (var j = 0; j <moreSchools[i].students.length; j++) {
                    if (moreSchools[i].students[j].eyeColor==="brown") {

                      brownEye[brownEye.length]=moreSchools[i].students[j].name.last;

                      }

              }}
              console.log("Hay "+ brownEye.length + " con ojos marrones");
            return brownEye;
              }

              function AgeOld (moreSchools) {
              var auxAge=0,old=[];
                  for (var i = 0; i < moreSchools.length; i++) {

                    for (var j = 0; j <moreSchools[i].students.length; j++) {
                            if (j===0) {
                              auxAge=moreSchools[i].students[j].age;
                            }else {
                              if (auxAge<moreSchools[i].students[j].age) {
                              auxAge=moreSchools[i].students[j].age;}

                              }}}
                              for (var i = 0; i < moreSchools.length; i++) {

                                for (var j = 0; j <moreSchools[i].students.length; j++) {
                                  if (moreSchools[i].students[j].age===auxAge) {
                                    var name="";
                                    name=moreSchools[i].students[j].name.first + " "+moreSchools[i].students[j].name.last
                                    old[old.length]=name;

                                }}}
                                console.log( "Son "+old.length+ " alumnos de "+auxAge);

                                return old;}

                                function younges (moreSchools) {
                                var auxYoung=0,young=[];
                                    for (var i = 0; i < moreSchools.length; i++) {

                                      for (var j = 0; j <moreSchools[i].students.length; j++) {
                                              if (j===0) {
                                                auxYoung=moreSchools[i].students[j].age;
                                              }else {
                                                if (auxYoung>moreSchools[i].students[j].age) {
                                                auxYoung=moreSchools[i].students[j].age;}

                                                }}}
                                                for (var i = 0; i < moreSchools.length; i++) {

                                                  for (var j = 0; j <moreSchools[i].students.length; j++) {
                                                    if (moreSchools[i].students[j].age===auxYoung) {
                                                      var name="";
                                                      name=moreSchools[i].students[j].name.first + " "+moreSchools[i].students[j].name.last
                                                      young[young.length]=name;

                                                  }}}
                                                  console.log( "Son "+young.length+ " alumnos de "+auxYoung);

                                                  return young;}

                  function Average(moreSchools) {
                    var students=0,sumaTotal=0,promedioTotal=0;
                    for (var i = 0; i < moreSchools.length; i++) {

                      for (var j = 0; j <moreSchools[i].students.length; j++) {
                        for (var k = 0; k <moreSchools[i].students[j].courses.length; k++){
                            students++;

                      sumaTotal=sumaTotal+moreSchools[i].students[j].courses[k].grade;

                    }
                                                    }

                  }
                  promedioTotal=sumaTotal/students;
                  console.log("Promedio de los alumnos  es:"+promedioTotal.toFixed(2));

                  }

                  function AverageHtml(moreSchools) {
                  var students=0,sumaHtml=0,promedioHtml=0
                    for (var i = 0; i < moreSchools.length; i++) {

                      for (var j = 0; j <moreSchools[i].students.length; j++) {
                          for (var k = 0; k <moreSchools[i].students[j].courses.length; k++){

                            if (moreSchools[i].students[j].courses[k].name==="HTML") {
                                students++;
                            sumaHtml=sumaHtml+moreSchools[i].students[j].courses[k].grade;

                            }
                          }

                  }}
                  promedioHtml=sumaHtml/students;
                  console.log("El promedio de los alumnos de HTML es: "+ promedioHtml.toFixed(2));
                  }

                  function AverageCss(moreSchools) {
                  var students=0,sumaCss=0,promedioCss=0
                    for (var i = 0; i < moreSchools.length; i++) {

                      for (var j = 0; j <moreSchools[i].students.length; j++) {
                          for (var k = 0; k <moreSchools[i].students[j].courses.length; k++){

                            if (moreSchools[i].students[j].courses[k].name==="CSS") {
                                students++;
                            sumaCss=sumaCss+moreSchools[i].students[j].courses[k].grade;

                            }
                          }

                  }}
                  promedioCss=sumaCss/students;
                  console.log("El promedio de los alumnos de CSS es: "+ promedioCss.toFixed(2));
                  }

                  function AverageJavasc(moreSchools) {
                  var students=0,sumaJavasc=0,promedioJavasc=0
                    for (var i = 0; i < moreSchools.length; i++) {

                      for (var j = 0; j <moreSchools[i].students.length; j++) {
                          for (var k = 0; k <moreSchools[i].students[j].courses.length; k++){

                            if (moreSchools[i].students[j].courses[k].name==="Javascript") {
                                students++;
                            sumaJavasc=sumaJavasc+moreSchools[i].students[j].courses[k].grade;

                            }
                          }

                  }}
                  promedioJavasc=sumaJavasc/students;
                  console.log("El promedio de los alumnos de Javascript es: "+ promedioJavasc.toFixed(2));
                  }

                  function AveragePhp(moreSchools) {
                  var students=0,sumaPhp=0,promedioPhp=0
                    for (var i = 0; i < moreSchools.length; i++) {

                      for (var j = 0; j <moreSchools[i].students.length; j++) {
                          for (var k = 0; k <moreSchools[i].students[j].courses.length; k++){

                            if (moreSchools[i].students[j].courses[k].name==="PHP") {
                                students++;
                            sumaPhp=sumaPhp+moreSchools[i].students[j].courses[k].grade;

                            }
                          }

                  }}
                  promedioPhp=sumaPhp/students;
                  console.log("El promedio de los alumnos de PHP es: "+ promedioPhp.toFixed(2));
                  }

                  function AverageRuby(moreSchools) {
                  var students=0,sumaRuby=0,promedioRuby=0
                    for (var i = 0; i < moreSchools.length; i++) {

                      for (var j = 0; j <moreSchools[i].students.length; j++) {
                          for (var k = 0; k <moreSchools[i].students[j].courses.length; k++){

                            if (moreSchools[i].students[j].courses[k].name==="Ruby") {
                                students++;
                            sumaRuby=sumaRuby+moreSchools[i].students[j].courses[k].grade;

                            }
                          }

                  }}
                  promedioRuby=sumaRuby/students;
                  console.log("El promedio de los alumnos de Ruby es: "+ promedioRuby.toFixed(2));
                  }

                  function AverageJava(moreSchools) {
                  var students=0,sumaJava=0,promedioJava=0
                    for (var i = 0; i < moreSchools.length; i++) {

                      for (var j = 0; j <moreSchools[i].students.length; j++) {
                          for (var k = 0; k <moreSchools[i].students[j].courses.length; k++){

                            if (moreSchools[i].students[j].courses[k].name==="Java") {
                                students++;
                            sumaJava=sumaJava+moreSchools[i].students[j].courses[k].grade;

                            }
                          }

                  }}
                  promedioJava=sumaJava/students;
                  console.log("El promedio de los alumnos de Java es: "+ promedioJava.toFixed(2));
                  }

                  function reprobado(moreSchools) {
                    reprobado=[];
                     for (var i = 0; i < moreSchools.length; i++) {

                       for (var j = 0; j <moreSchools[i].students.length; j++) {
                           for (var k = 0; k <moreSchools[i].students[j].courses.length; k++){

                             if (moreSchools[i].students[j].courses[k].grade<6) {

                               var name="";
                               name=moreSchools[i].students[j].name.first +" "+ moreSchools[i].students[j].name.last
                               reprobado[reprobado.length]=name;
                             }
                           }

                   }}
                   console.log(reprobado.length+ " alumnos reprobados");
                   return reprobado;
                  }

                  function reprobadoAge(moreSchools) {
                    reprobadoAge=[];
                     for (var i = 0; i < moreSchools.length; i++) {

                       for (var j = 0; j <moreSchools[i].students.length; j++) {
                           for (var k = 0; k <moreSchools[i].students[j].courses.length; k++){

                             if (moreSchools[i].students[j].courses[k].grade<6) {


                               reprobadoAge[reprobadoAge.length]=moreSchools[i].students[j].age;
                             }
                           }

                   }}

                  return reprobadoAge;
                  }


                  function favFruitsOfStudentsByFruitName(moreSchools) {
                      "use strict"
                      let result = {};

                      for(let i = 0; i < moreSchools.length; i++) {
                          for(let j = 0; j < moreSchools[i].students.length; j++) {
                              let fruit = moreSchools[i].students[j].favoriteFruit; // banana appla pineapple
                              if (result[fruit] === undefined) {
                                  result[fruit] = [];
                              }
                              result[fruit][result[fruit].length] = moreSchools[i].students[j].name.first + " " + moreSchools[i].students[j].name.last;
                          }
                      }
                      return result;
                  }

module.exports = {
  foreverAlone: foreverAlone,
  namesOfSuperPopular: superPopular,
  studentsInHTMLCourse: numberHtml,
  studentsInCSSCourse: numberCss,
  studentsInJavascriptCourse: numberJavasc,
  studentsInPHPCourse: numberPhp,
  studentsInRubyCourse: numberRuby,
  studentsInJavaCourse: numberJava,
  foreverAloneLastNames: AloneLast,
  fullNameOfSuperPopular: superPopular2,
  agesInHTMLCourse: numberHtmlAge,
  numberOfStudentsInCSSCourse: numberCsstel,
  fullNameOfStudentsTakingABackendCourse: backend,
  fullNameOfStudentsTakingAFrontendCourse: frontend,
  averageAgeOfStudentsTakingAFrontendCourse: frontendAge,
  averageGradeOfStudentsTakingAFrontendCourse: frontendAverage,
  averageGradeOfForeverAlones: foreverAloneAverage,
  averageAgeOfAllStudents: Age,
  percentageOfStatus: isActive,
  getIDsOfStudentsWithBlueEyes: blueEyes,
  getFirstNameOfStudentsWithGreenEyes: greenEye,
  getLastNameOfStudentsWithBrownEyes: brownEye,
  getFullNameOldestStudent: AgeOld,
  getFullNameYoungestStudent: younges,
  averageGradeAllStudentsAllCourses: Average,
  averageGradeOfStudensInHTMLCourse: AverageHtml,
  averageGradeOfStudensInCSSCourse: AverageCss,
  averageGradeOfStudensInJavascriptCourse: AverageJavasc,
  averageGradeOfStudensInPHPCourse: AveragePhp,
  averageGradeOfStudensInRubyCourse: AverageRuby,
  averageGradeOfStudensInJavaCourse: AverageJava,
  fullNameOfStudentsWhoFailedACourse: reprobado,
  agesOfStudentsWhoFailedACourse: reprobadoAge
}