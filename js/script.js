var credits= [0,0,0,0,0,0,0,0,0,0,0,0,0];
var grade=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var credits_sum =0;
var mulgrades_sum=0;

//For table generation
var sno__first=2;
var sno__second=2;
var first__rowspan=3;
var second__rowspan=3;

var margin_top=39;
var choice;
var i=0;

var gpa;
var pair;
var newOption;
var isSecondYear;

var getValue;
$(document).ready(function(){

  function addBatch(s1,s2){
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    s2.innerHTML = "";
    if (s1.value == 'COE') {
      addSubOptions(28);
    }
    else if(s1.value == 'ECE' || s1.value == 'ENC') {
      addSubOptions(8)
    }
    else if(s1.value == 'CHE') {
      addSubOptions(1);
    }
    else if(s1.value == 'EIC') {
      addSubOptions(3);
    }
    else if(s1.value == 'BTD') {
      addSubOptions(3,2);
    }
    else if(s1.value == 'CIE') {
      addSubOptions(4);
    }
    else if(s1.value == 'MEE') {
      addSubOptions(12);
    }
    else if(s1.value == 'ELE') {
      addSubOptions(6);
    }
    else if(s1.value == 'CHE') {
      addSubOptions(1);
    }
    else if(s1.value == 'MTX' || s1.value == 'MTP') {
      addSubOptions(2);
    }
    else {
      addSubOptions(5); //First Year and Default For:
    }

    function addSubOptions (num, exep){
      var subbatches = [];
        for ( var i = 1; i <= num ; i++ ){
          subbatches.push(s1.value + i + '|' + s1.value + i );
        }
      if (exep == 2) {
        for(var option in subbatches) {
          pair = subbatches[option].split("|");
          newOption = document.createElement("option");
          newOption.value = '' + exep + pair[0];
          newOption.innerHTML = pair[1];
          s2.options.add(newOption);
        }
      }
      else {
        for(var option in subbatches) {
          pair = subbatches[option].split("|");
          newOption = document.createElement("option");
          newOption.value = pair[0];
          newOption.innerHTML = pair[1];
          s2.options.add(newOption);
        }
      }
    }
  }

  function addYear(s1,s2){
      var s1 = document.getElementById(s1);
      var s2 = document.getElementById(s2);

      if(s1.value == "second-yr"){
          s2.innerHTML = "";
          stream = ['COE|Computer (COE)',
                    'ECE|Electronics and Communication (ECE)',
                    'CHE|Chemical (CHE)',
                    'CIE|Civil (CIE)',
                    'MEE|Mechanical (MEE)',
                    'ELE|Electrical (ELE)',
                    'BTD|Biotechnology (BTD)',
                    'EIC|Electronics and Instrumentation (EIC)',
                    'ENC|Electronics and Computer (ENC)',
                    'MPE|Mechanical Production (MPE)',
                    'MTX|Mechatronics (MTX)'];
          for (var option in stream) {
            pair = stream[option].split('|')
            newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            s2.options.add(newOption);
          }
      }

      if(s1.value == "first-yr") {
        s2.innerHTML = "";
        batch = ["A|A",
                 "B|B",
                 "C|C",
                 "D|D",
                 "E|E",
                 "F|F",
                 "G|G",
                 "H|H",
                 "I|I",
                 "J|J",
                 "K|K",
                 "L|L",
                 "M|M",
                 "N|N",
                 "O|O",
                 "P|P"];
          for(var option in batch) {
            pair = batch[option].split("|");
            newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            s2.options.add(newOption);
          }
      }
        addBatch("popup__selector-batch","popup__selector-subbatch");
    }

    function addSubjects(s1,s2){
        var s1 = document.getElementById(s1);
        var s2 = document.getElementById(s2);

        s2.innerHTML="";

        if(s1.value == 0)
        {
            var subjects = ["0|Select Subject",
                            "4|Biochemistry",
                            "3.5|Biophysics",
                            "4|Food Science",
                            "4|Immunotechnology",
                            "3.5|Material and Energy Balance",
                            "4.5|Molecular Biology",
                            "4|Bioanalytical Techniques",
                            "2.5|Biosafety, Bioethics & IPR",
                            "3|Energy & Environment",
                            "4|Genetic & Metagbolic Engineering",
                            "4|Industrial Biotechnology",
                            "4.5|Unit Operations"];
        }
        else if(s1.value == 1)
        {
            var subjects = ["0|Select Subject",
                            "6|Engieering Design Project-2",
                            "3.5|Manufacturing Process",
                            "3.5|Optimization Techniques",
                            "4.5|Solids and Structures",
                            "4.5|Thermo-Fluids",
                            "3.5|Material and Energy Balances",
                            "4.5|Engineering Materials",
                            "4.5|Numerical Analysis",
                            "3.5|Chemical Engineering Thermodynamics",
                            "4|Chemical Process Industries",
                            "4.5|Fluid & Particle Mechanics",
                            "4.5|Heat Transfer"];
        }
        else if(s1.value == 2)
        {
            var subjects = ["0|Select Subject",
                            "6|Engieering Design Project-2",
                            "3.5|Manufacturing Process",
                            "3.5|Optimization Techniques",
                            "4.5|Solids and Structures",
                            "4.5|Thermo-Fluids",
                            "3|Architecture Drawing & Construction",
                            "3|Building Materials",
                            "4.5|Engineering Materials",
                            "4.5|Numerical Analysis",
                            "3.5|Design of Concrete Structures",
                            "8|Structural Analysis",
                            "5|Surveying"];
        }
        else if(s1.value == 3)
        {
            var subjects = ["0|Select Suject",
                            "5|Engineering Design Project-1",
                            "4.5|Engineering Materials",
                            "4.5|Numerical Analysis",
                            "4|Computer Networks",
                            "6|Data Structures & Algorithms",
                            "2|Inventions & Innovations in Computing",
                            "4|Operating Systems",
                            "6|Engineering Design Project-2",
                            "3.5|Manufacturing Processes",
                            "3.5|Otimization Techniques",
                            "4.5|Solids and Strcutures",
                            "4.5|Thermo-Fluids",
                            "4|Database Management Systems",
                            "3.5|Discrete Mathematical Structures"];
        }
        else if(s1.value == 4)
        {
            var subjects = ["0|Select Suject",
                            "6|Engineering Design Project-1",
                            "4.5|Engineering Materials",
                            "4.5|Numerical Analysis",
                            "3.5|Circuit Analysis & Synthesis",
                            "4.5|Microprocessors & their Applications",
                            "4.5|Signals & Systems",
                            "6|Engineering Design Project-2",
                            "3.5|Manufacturing Processes",
                            "3.5|Otimization Techniques",
                            "4.5|Solids and Strcutures",
                            "4.5|Thermo-Fluids",
                            "4.5|Analog and Electronic Circuits"];
        }

        else if(s1.value == 5)
        {
            var subjects = ["0|Select Suject",
                            "6|Engineering Design Project-1",
                            "4.5|Engineering Materials",
                            "4.5|Numerical Analysis",
                            "4.5|Microprocessors & their Applications",
                            "3.5|Network Analysis & Synthesis",
                            "4.5|Signals & Systems",
                            "6|Engineering Design Project-2",
                            "3.5|Manufacturing Processes",
                            "3.5|Otimization Techniques",
                            "4.5|Solids and Strcutures",
                            "4.5|Thermo-Fluids",
                            "4.5|Analog and Electronic Circuits"];
        }

        else if(s1.value == 6)
        {
            var subjects = ["0|Select Suject",
                            "6|Engieering Design Project-2",
                            "3.5|Manufacturing Process",
                            "3.5|Optimization Techniques",
                            "4.5|Solids and Structures",
                            "4.5|Thermo-Fluids",
                            "4.5|Electrical & Electronic Measurements",
                            "3|Humanities for Engiineers",
                            "4.5|Engineering Materials",
                            "4.5|Numerical Analysis",
                            "8|Sensors and Signal Conditioning with Project",
                            "3.5|Techniques on Sigal and Systems"];
        }

        else if(s1.value == 7)
        {
            var subjects = ["0|Select Suject",
                            "6|Engieering Design Project-2",
                            "3.5|Manufacturing Process",
                            "3.5|Optimization Techniques",
                            "4.5|Solids and Structures",
                            "4.5|Thermo-Fluids",
                            "3.5|Engineering Electromagnetics",
                            "3.5|Transmission and Distributon of Power",
                            "4.5|Engineering Materials",
                            "4.5|Numerical Analysis",
                            "4.5|Analog and Electronic Circuits",
                            "4.5|DC Machines and Transformers",
                            "3.5|Network Analysis & Synthesis",
                            "3|Power System Practices"];
                        }

        else if(s1.value == 8)
        {
            var subjects = ["0|Select Suject",
                            "6|Engieering Design Project-2",
                            "3.5|Manufacturing Process",
                            "3.5|Optimization Techniques",
                            "4.5|Solids and Structures",
                            "4.5|Thermo-Fluids",
                            "4.5|Mechanics of Machines",
                            "4.5|Engineering Materials",
                            "4.5|Numerical Analysis",
                            "4|Mechatronics",
                            "4|Machine Design",
                            "8|Computer Aided Design & Analysis"];
        }
        else if(s1.value == 9)
        {
            var subjects = ["0|Select Suject",
                            "6|Engieering Design Project-2",
                            "3.5|Manufacturing Process",
                            "3.5|Optimization Techniques",
                            "4.5|Solids and Structures",
                            "4.5|Thermo-Fluids",
                            "4.5|Mechanics of Machines",
                            "4.5|Engineering Materials",
                            "4.5|Numerical Analysis",
                            "3|Humanities for Engineers",
                            "4.5|Signals & Systems",
                            "8|Computer Aided Design & Analysis"]
        }
        else if(s1.value == 10)
        {
            var subjects = ["0|Select Suject",
                            "6|Engieering Design Project-2",
                            "3.5|Manufacturing Process",
                            "3.5|Optimization Techniques",
                            "4.5|Solids and Structures",
                            "4.5|Thermo-Fluids",
                            "4.5|Mechanics of Machines",
                            "4.5|Engineering Materials",
                            "4.5|Numerical Analysis",
                            "4|Industrial Automation",
                            "8|Computer Aided Design & Analysis",
                            "4|Machine Design"];
        }



        for(var option in subjects)
        {
            pair = subjects[option].split("|");
            newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            s2.options.add(newOption);
        }


    }

    $(".gpa__stream").on('change',function (){
        $("tr:not(#keep)").remove();
        addSubjects(this.id,"gpa__subject--second-"+1);
        $(".gpa__add-row--second").css('visibility','visible');
        sno__second = 2;
        second__rowspan=3;
    });

    $(".popup__selector-batch").on('change', function (){
      addBatch("popup__selector-batch","popup__selector-subbatch");
      $("#popup__selector-batch").css("border","default");
    });
    $(".popup__selector-yr").on('change', function (){
      addYear("popup__selector-yr","popup__selector-batch");
    });

    $("#gpa__add-row--first").click(function (){
        var table = document.getElementById("gpa__table--first");
        var row = table.insertRow(sno__first);
        var first__cell1 = row.insertCell(0);
        var first__cell2 = row.insertCell(1);
        var first__cell3 = row.insertCell(2);
        first__cell1.innerHTML = '<div class="display7">'+sno__first+'</div>';
        sno__first++;
        first__cell2.innerHTML = '<select name="subject" id="gpa__subject--first-'+(sno__first-1)+'" class="col col-lg-12 display7">'
                + '<option value="0" disabled selected>Select Subject</option>'
                + '<option value="4.5">Applied Chemistry</option>'
                + '<option value="4.5">Applied Physics</option>'
                + '<option value="4">Computer Science 1</option>'
                + '<option value="4">Computer Science 2</option>'
                + '<option value="4.5">Electrical</option>'
                + '<option value="4.5">Electronics</option>'
                + '<option value="4">Engineering Drawing 1</option>'
                + '<option value="5">Engineering Drawing 2</option>'
                + '<option value="3">Environment</option>'
                + '<option value="3.5">Mathematics 1</option>'
                + '<option value="3.5">Mathematics 2</option>'
                + '<option value="2.5">Mechanics</option>'
                + '<option value="3">Professional Communication</option>'
                + '</select>';
        first__cell3.innerHTML = '<select name="grade" id="gpa__grade--first-'+(sno__first-1)+'" class="col-lg-10 display7">'
                + '<option class="gpa__select--default" value="0" disabled selected>Grade &nbsp; &nbsp;</option>'
                + '<option class="gpa__select--item" value="10">A+</option>'
                + '<option class="gpa__select--item" value="10">A</option>'
                + '<option class="gpa__select--item" value="9">A-</option>'
                + '<option class="gpa__select--item" value="8">B</option>'
                + '<option class="gpa__select--item" value="7">B-</option>'
                + '<option class="gpa__select--item" value="6">C</option>'
                + '<option class="gpa__select--item" value="5">C-</option>'
                + '<option class="gpa__select--item" value="0">F</option>'
                +'</select>';

        $(".gpa__calculate--first").attr('rowspan',first__rowspan);
            first__rowspan++;
        $(".gpa__table--first").css('top',margin_top+'%');
            margin_top--;
        if(sno__first==8) //Remove button after adding 7 subjects
            {
                $(".td__add").css('visibility','hidden');
            }
        $(".gpa__calculate--first").html("Calculate"); //Reset Button

    });

    $("#gpa__add-row--second").click(function (){
        var table = document.getElementById("gpa__table--second");
        var row = table.insertRow(sno__second);
        var second__cell1 = row.insertCell(0);
        var second__cell2 = row.insertCell(1);
        var second__cell3 = row.insertCell(2);
        second__cell1.innerHTML = '<div class="display7">'+sno__second+'</div>';
        sno__second++;
        second__cell2.innerHTML = '<select name="subject" id="gpa__subject--second-'+(sno__second-1)+'" class="display7 col-lg-12" style="min-width: 412px;">    <option value="0" class="display7" disabled selected>Select Subject</option></select>;';
        addSubjects("gpa__stream","gpa__subject--second-"+(sno__second-1));
        second__cell3.innerHTML = '<select name="grade" id="gpa__grade--second-'+(sno__second-1)+'" class="col-lg-10 display7">'
                + '<option class="display7" value="0" disabled selected>Grade &nbsp; &nbsp;</option>'
                + '<option class="display7" value="10">A+</option>'
                + '<option class="display7" value="10">A</option>'
                + '<option class="display7" value="9">A-</option>'
                + '<option class="display7" value="8">B</option>'
                + '<option class="display7" value="7">B-</option>'
                + '<option class="display7" value="6">C</option>'
                + '<option class="display7" value="5">C-</option>'
                + '<option class="display7" value="0">F</option>'
                +'</select>';
        $(".gpa__calculate--second").attr('rowspan',second__rowspan);
            second__rowspan++;
        if(sno__second==8) //Remove button after adding 7 subjects
            {
                $(".gpa__add-row--second").css('visibility','hidden');
            }
        $(".gpa__calculate--second").html("Calculate"); //Reset Button

    });


   /*$(".delete").click( function deleteRow() {
        document.getElementById("table").deleteRow(sno-1);
        sno--;

    });*/
    $(".gpa__calculate--first").click(function (){

        var credits_sum =0;
        var mulgrades_sum=0;

        credits[0] = $("#gpa__subject--first-1").val();
        credits[1] = $("#gpa__subject--first-2").val();
        credits[2] = $("#gpa__subject--first-3").val();
        credits[3] = $("#gpa__subject--first-4").val();
        credits[4] = $("#gpa__subject--first-5").val();
        credits[5] = $("#gpa__subject--first-6").val();
        credits[6] = $("#gpa__subject--first-7").val();
        console.log(credits);
        grade[0] = $("#gpa__grade--first-1").val();
        grade[1] = $("#gpa__grade--first-2").val();
        grade[2] = $("#gpa__grade--first-3").val();
        grade[3] = $("#gpa__grade--first-4").val();
        grade[4] = $("#gpa__grade--first-5").val();
        grade[5] = $("#gpa__grade--first-6").val();
        grade[6] = $("#gpa__grade--first-7").val();
        console.log(grade);
        for(var i=0;grade[i]!=null ;i++)
        {
            console.log(grade[i]);
            console.log(credits[i]);
            mulgrades_sum = mulgrades_sum + grade[i]*credits[i];
            credits_sum = +credits_sum + +credits[i];
            console.log(mulgrades_sum);
            console.log(credits_sum);
        }

        gpa = mulgrades_sum/credits_sum;
        gpa = Math.round(gpa * 100) / 100
        $(".gpa__calculate--first").html("Your GPA : <br>" + gpa);
    });

    $(".gpa__calculate--second").click(function (){

        var credits_sum =0;
        var mulgrades_sum=0;

        credits[0] = $("#gpa__subject--second-1").val();
        credits[1] = $("#gpa__subject--second-2").val();
        credits[2] = $("#gpa__subject--second-3").val();
        credits[3] = $("#gpa__subject--second-4").val();
        credits[4] = $("#gpa__subject--second-5").val();
        credits[5] = $("#gpa__subject--second-6").val();
        credits[6] = $("#gpa__subject--second-7").val();
        grade[0] = $("#gpa__grade--second-1").val();
        grade[1] = $("#gpa__grade--second-2").val();
        grade[2] = $("#gpa__grade--second-3").val();
        grade[3] = $("#gpa__grade--second-4").val();
        grade[4] = $("#gpa__grade--second-5").val();
        grade[5] = $("#gpa__grade--second-6").val();
        grade[6] = $("#gpa__grade--second-7").val();

        for(var i=0;grade[i]!=null ;i++)
        {
            console.log(grade[i]);
            console.log(credits[i]);
            mulgrades_sum = mulgrades_sum + grade[i]*credits[i];
            credits_sum = +credits_sum + +credits[i];
            console.log(mulgrades_sum);
            console.log(credits_sum);
        }

        gpa = mulgrades_sum/credits_sum;
        gpa = Math.round(gpa * 100) / 100
        $(".gpa__calculate--second").html("Your GPA : <br>" + gpa);
    });

    $(".gpa__choice--first").click(function (){
        sno__first=2;
        first__rowspan=3;
        $(".gpa__first-year").css('display','block');
        $(".gpa__second-year").css('display','none');
        $(this).css('color','black');
        $(this).css('background-color','#eee');
        $(".gpa__choice--second").css('color','white');
        $(".gpa__choice--second").css('background-color','#F6C342');
        $("tr:not(#keep)").remove();
        $(".gpa__calculate--first").html("Calculate"); //Reset Button
        $(".gpa__calculate--second").html("Calculate"); //Reset Button
    });

    $(".gpa__choice--second").click(function (){
        $("tr:not(#keep)").remove();
        $(".gpa__second-year").css('display','block');
        $(".gpa__first-year").css('display','none');
        $(this).css('color','black');
        $(this).css('background-color','#eee');
        $(".gpa__choice--first").css('color','white');
        $(".gpa__choice--first").css('background-color','#F6C342');
    });

    $(".btn__society").click(function (){
        $(".btn__society").css('background-color','white');
        $(".btn__society").css('color','black');
        $(".news__society").css('display','block');
        $(".btn__reset").css('display','block');
        $("section:not(.news__society)").css('display','none');
        $("li:not(.btn__society)").css('background-color','black');
        $("li:not(.btn__society)").css('color','white');
    });
    $(".btn__academic").click(function (){

        $(".btn__academic").css('background-color','white');
        $(".btn__academic").css('color','black');
        $(".news__academic").css('display','block');
        $(".btn__reset").css('display','block');
        $("section:not(.news__academic)").css('display','none');
        $("li:not(.btn__academic)").css('background-color','black');
        $("li:not(.btn__academic)").css('color','white');

    });
    $(".btn__other").click(function (){
        $(".btn__other").css('background-color','white');
        $(".btn__other").css('color','black');
        $(".news__other").css('display','block');
        $(".btn__reset").css('display','block');
        $("section:not(.news__other)").css('display','none');
        $("li:not(.btn__other)").css('background-color','black');
        $("li:not(.btn__other)").css('color','white');

    });
    $(".btn__reset").click(function (){
        $("section").css('display','block');
        $("li:not(.btn__reset)").css('background-color','black');
        $("li:not(.btn__reset)").css('color','white');
        $(this).css('display','none');
    });
    $(".wifi__choice--passwords").click(function (){
        $(".wifi__passwords").css('display','block');
        $(".wifi__sophos--choice").css('display','none');
        $(".sophos").css('display','none');
        $(this).css('color','white');
        $(this).css('background-color','black');
        $(".wifi__choice--sophos").css('color','white');
        $(".wifi__choice--sophos").css('background-color','#E94B3C');
    });

    $(".wifi__choice--sophos").click(function (){
        $(".sophos").css('display','block');
        $(".wifi__passwords").css('display','none');
        $(this).css('background-color','black');
        $(".wifi__choice--passwords").css('background-color','#E94B3C');
        $(".wifi__sophos--choice").css('display','block');
        $(".sophos__pc").css('display','none');
        $(".sophos__info").css('display','none');
        $(".wifi__choice-mobile").css('color','#185ABD');
        $(".wifi__choice--pc").css('color','white');
        $(".wifi__choice--info").css('color','white');
    });

    $(".wifi__choice--pc").click(function (){
        $(".sophos__pc").css('display','block');
        $(".sophos__mobile").css('display','none');
        $(".sophos__info").css('display','none');
        $(this).css('color','#185ABD');
        $(".wifi__choice--mobile").css('color','white');
        $(".wifi__choice--info").css('color','white');

    });

    $(".wifi__choice--mobile").click(function (){
        $(".sophos__mobile").css('display','block');
        $(".sophos__pc").css('display','none');
        $(".sophos__info").css('display','none');
        $(this).css('color','#185ABD');
        $(".wifi__choice--pc").css('color','white');
        $(".wifi__choice--info").css('color','white');

    });
    $(".wifi__choice--info").click(function (){
        $(".sophos__info").css('display','block');
        $(".sophos__pc").css('display','none');
        $(".sophos__mobile").css('display','none');
        $(this).css('color','#185ABD');
        $(".wifi__choice--pc").css('color','white');
        $(".wifi__choice--mobile").css('color','white');

    });
    $(".gpa__table--plus").click(function (){
    });

    $(".submit").click(function (){
        var v1 = document.getElementById("popup__selector-subbatch");
        // Replace this by sheets maintained online
        if(v1.value == "A1")
             window.open("https://calendar.google.com/calendar?cid=dmw1MW9kaXQ0NmRnNjNrYzQxdjh1bTI5a29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "A2")
            window.open("https://calendar.google.com/calendar?cid=ZGlyOXZoNzI5bmsybHBkZ2RrZGM2ZDM3bWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "A3")
            window.open("https://calendar.google.com/calendar?cid=MzVtNDltbnZsZjJsa29kYzFiazZuYTJzb2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "A4")
            window.open("https://calendar.google.com/calendar?cid=cWdyZW1zMnQ0aWx2dTlnOGN2ZW5uY2UxZDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "A5")
            window.open("https://calendar.google.com/calendar?cid=MnRlYWkwdThwbHJjN2Nucm10cmFmMmNrNW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "B1")
            window.open("https://calendar.google.com/calendar?cid=ZXUxcm1yaWthcG1idjZvbTR0dHQ0bnE0Y2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "B2")
            window.open("https://calendar.google.com/calendar?cid=MHFxdGduZHM3MjFycGpycXZqNWlpMnZ0aXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "B3")
            window.open("https://calendar.google.com/calendar?cid=MzljbmVtaXRldWUwN2ZzdHVtbDRsdGc2MmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "B4")
            window.open("https://calendar.google.com/calendar?cid=a2YzZHUzYzZuMWlmaHI2MWtqM3ZrbzVkOGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "B5")
            window.open("https://calendar.google.com/calendar?cid=ZzcxdG9ka29hOTQwN2R1b3IyaWhnOXJoMWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "C1")
            window.open("https://calendar.google.com/calendar?cid=Yjk4ZHRzcmw1M2xma2l0MjFnNGhoZmlhajhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "C2")
            window.open("https://calendar.google.com/calendar?cid=MmNibmNmMDNyOG1lMnVucGs4Mmd2NnF0ZzRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "C3")
            window.open("https://calendar.google.com/calendar?cid=YmdkM3RrcDZ1YTBxMTQxODJyM3Uxc3VmYTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "C4")
            window.open("https://calendar.google.com/calendar?cid=NG8xMjlnaDJrdHRkODQ3NzlwMjlkc2Rtc2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "C5")
            window.open("https://calendar.google.com/calendar?cid=ZjdwbGo3YTVjZTcxNWNzbzlyN2R2M2wyYXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "D1")
            window.open("https://calendar.google.com/calendar?cid=YWpxNDl2YXVham0ydG51OTNyM2luZ3FwZDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "D2")
            window.open("https://calendar.google.com/calendar?cid=aGZoNGk0dG1kY2MzdWxsaGNuMTd0aWlkazhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "D3")
            window.open("https://calendar.google.com/calendar?cid=dGFnMnR0dnI3ZGgzdGJ0MXNpdnJmazA2MzBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "D4")
            window.open("https://calendar.google.com/calendar?cid=NmplZzQ3ZnR0MXY5bHYzNDk1NWtkYjRuZ3NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "D5")
            window.open("https://calendar.google.com/calendar?cid=dDBldWNiamk2YzdzN2UxdW1waWY2dHBxYnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "E1")
            window.open("https://calendar.google.com/calendar?cid=b3QxcXBuczkzaTM0ZnY5MnV0ZmMyMDNwaWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "E2")
            window.open("https://calendar.google.com/calendar?cid=c3NwNGVscGFjcm9taG8waGdmZW12N3E5cjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "E3")
            window.open("https://calendar.google.com/calendar?cid=M2VqNTQ0cjRpcDhscmdicThoYWljaW05b2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "E4")
            window.open("https://calendar.google.com/calendar?cid=N2tlZ2Q4dWNzcnBwdmFvZm12bzVwNXU0OWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "E5")
            window.open("https://calendar.google.com/calendar?cid=NTcyM2tlZXN1czc2djhkdHV2NWgxZ2JmZmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "F1")
            window.open("https://calendar.google.com/calendar?cid=dWs4aDViYzhncGczNG12NXI5bWh2YTA4NDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "F2")
            window.open("https://calendar.google.com/calendar?cid=YTBkdmM3NGJpMWZqaTRmbjgyODF2bmlxZDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "F3")
            window.open("https://calendar.google.com/calendar?cid=YTk5NTBxMms1YXEzNHAxZ2k1YmxkZWt2bThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "F4")
            window.open("https://calendar.google.com/calendar?cid=bmVhZTd1NWN0ZzFubW9hYjNhc3EzdWprbThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "F5")
            window.open("https://calendar.google.com/calendar?cid=amk5bmNkNmM5cHZxZWJlZHJmY2VmZmFlcW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "G1")
            window.open("https://calendar.google.com/calendar?cid=MnZuZ2lmb3V2bnM1MnJpdnZhMmxwZDBtcDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "G2")
            window.open("https://calendar.google.com/calendar?cid=dGxvcWxvdmtnbTMxbXNmZ3I3YjVmbDdra2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "G3")
            window.open("https://calendar.google.com/calendar?cid=NTY3OHJ0NTFwM21hbTVocDB0aTk2M21ha2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "G4")
            window.open("https://calendar.google.com/calendar?cid=amhlZ2dncTFpNXQ3bjJhZGIwb3ViMGo1a2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "G5")
            window.open("https://calendar.google.com/calendar?cid=bDZqbGl0dTQxaG1jM201YTlmN3Noc3NwaWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "H1")
            window.open("https://calendar.google.com/calendar?cid=M2p2aHBndGdpczIwOXRvNmxoa2Z1MXNua29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "H2")
            window.open("https://calendar.google.com/calendar?cid=OTdiaG41MjQ4Z3ZlYmoxa2VyZnRsMnY2Z29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "H3")
            window.open("https://calendar.google.com/calendar?cid=aXVrYm1oaHR0dDhnbzllZjhmZXM0dTJpODBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "H4")
            window.open("https://calendar.google.com/calendar?cid=bnJxanJuaTI1M3FqZ3N2cXM1c3VsMDQxczRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "H5")
            window.open("https://calendar.google.com/calendar?cid=bGxyZW5xbDY3dGllaDc2ZmxlM3V2Z3BiZmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "I1")
            window.open("https://calendar.google.com/calendar?cid=b3Zzc29mamMyNXM1dTYzbzk5NGd1amRkZjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "I2")
            window.open("https://calendar.google.com/calendar?cid=bW9iMzU3M2g1OTZ0cDBvcjl1a2dvNnI1bjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "I3")
            window.open("https://calendar.google.com/calendar?cid=cWN1bTZmcm9iMWVjMGxqYmc0dDdzZ2ljaThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "I4")
            window.open("https://calendar.google.com/calendar?cid=MWhjZmdyNnZ0Yzc2bjdrYjkzY3Axbm9odG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "I5")
            window.open("https://calendar.google.com/calendar?cid=YWY4NHYyaWY0NGlkNWxoZDZzOWEwMWVsMDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "J1")
            window.open("https://calendar.google.com/calendar?cid=ZW81OG1zcGcycTl1c3Z2cDBjNmdib3BtaWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "J2")
            window.open("https://calendar.google.com/calendar?cid=YjVoN2JvajhqYmYydWhpZmdnM2NpbWpnNXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "J3")
            window.open("https://calendar.google.com/calendar?cid=MDEwdTYxNmZnbG1sNGkxdmdnbDN0ZWkxbXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "J4")
            window.open("https://calendar.google.com/calendar?cid=bjU5dm5mdjdnOTludmJsaHFhM2FiMG84MnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "J5")
            window.open("https://calendar.google.com/calendar?cid=cnJwaDlrcjE4bnZxazZkOW9xYzE0ajdkamNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "K1")
            window.open("https://calendar.google.com/calendar?cid=ZWIwNG05dWlwcWxzOHIzMHEya3VxOGQ3ZThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "K2")
            window.open("https://calendar.google.com/calendar?cid=NWVkamRlcnM0YmxjNmFuMjlxZmllZWo0azBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "K3")
            window.open("https://calendar.google.com/calendar?cid=NWY3MTVkdTA2NHZuajhqZmsxdTJpa3E2dm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "K4")
            window.open("https://calendar.google.com/calendar?cid=bnE0ZjlybXBzZzk0OWNjcWk4ZzVhb284bnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "K5")
            window.open("https://calendar.google.com/calendar?cid=azNoZ3FkZmZsYjZhODQ3YmE5aDRmbzg0b2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "L1")
            window.open("https://calendar.google.com/calendar?cid=YmVtbTFvbzVkbm85NnZnaXBtbnR0cGlxbHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "L2")
            window.open("https://calendar.google.com/calendar?cid=ZWUxb2wybW0wdXI4aGhkbDRyZzZibTEwa2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "L3")
            window.open("https://calendar.google.com/calendar?cid=cTk2Ymg3N20xdTNja3V2MXFzNmxnbGh2ZDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "L4")
            window.open("https://calendar.google.com/calendar?cid=aWtqajNoc29paWg5bnQ4bWl1azFhamlmM2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "L5")
            window.open("https://calendar.google.com/calendar?cid=aGxiOW02a3QyY28xdHRsb3Jtc3NrcDFlZ2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "M1")
            window.open("https://calendar.google.com/calendar?cid=Z3Z0ZWt2bWJzM3Y3NjhqZ3E1Z3BvOHZ0ZDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "M2")
            window.open("https://calendar.google.com/calendar?cid=NHBlZ2xucTZpODdrOHZ1b3M2bG10NHMxbmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "M3")
            window.open("https://calendar.google.com/calendar?cid=OXJnMW4wcDc1ZTQwYnFjMmllZm04ZDh2bW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "M4")
            window.open("https://calendar.google.com/calendar?cid=YjNpcmpsM2FrMXZsNmpsODE2a2JhcGtxNmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "M5")
            window.open("https://calendar.google.com/calendar?cid=M3ZoNXBsZzh1MXI5amVsamRxZzJsaGVkNTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "N1")
            window.open("https://calendar.google.com/calendar?cid=ZmwwMzB2YnYyb3BxdHI4NGtlcWRrNjc0YzRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "N2")
            window.open("https://calendar.google.com/calendar?cid=cTdnY2VyYzFza2pyYTFhdmZrcW9qb25jajBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "N3")
            window.open("https://calendar.google.com/calendar?cid=MTI3aG5rNmZnY2FqYmNjcWU2bmh0dXY5ZjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "N4")
            window.open("https://calendar.google.com/calendar?cid=dmhkcW1oOXNzZGplanA0cDhhZ250ZGZhZ29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "N5")
            window.open("https://calendar.google.com/calendar?cid=M2luaTBwOHJpc28wZGNna3JtNjg0cTJ0cWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "O1")
            window.open("https://calendar.google.com/calendar?cid=MGdwOWw0aWFmbjA2cXUybTdxODF0dHMybThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "O2")
            window.open("https://calendar.google.com/calendar?cid=bzExNXZsa3RrZGRzdWt1MXBodDBmazZvc2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "O3")
            window.open("https://calendar.google.com/calendar?cid=cmdwbGs1YThtdTExMWx2Z3U5ZGYydDh2MnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "O4")
            window.open("https://calendar.google.com/calendar?cid=bmJkNTdjamk5Ym91ZjVhNnZuc2FjZjNhZGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "O5")
            window.open("https://calendar.google.com/calendar?cid=azduczVrbjFybWd1M202NTQxc2R2YTlndjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "P1")
            window.open("https://calendar.google.com/calendar?cid=N2o3NDAyMTN2M241dnBmdnZuNW9nNXJwb2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "P2")
            window.open("https://calendar.google.com/calendar?cid=cmtodmk1NHB2ZWR1bmJlODBnbGNydjNkMjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "P3")
            window.open("https://calendar.google.com/calendar?cid=YWdlc2dlcjZhdmpqam04aTBya3F2bWRpMmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "P4")
            window.open("https://calendar.google.com/calendar?cid=ZTE4ZG82YjAwNHNpNzc2MmFyMGk1cmFlMGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "P5")
            window.open("https://calendar.google.com/calendar?cid=ajJ1ZXBrYTdtc3Z2N25pMzIyZzZnNHNlMWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "BTD1")
            window.open("https://calendar.google.com/calendar?cid=bmo3bXF2aW9xMDFmbnBjbm9iM2dzaGNlazBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "BTD2")
            window.open("https://calendar.google.com/calendar?cid=dmE2Zm9tZmpyajQzNWU4ZnFza2lzbjBqcWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "BTD3")
            window.open("https://calendar.google.com/calendar?cid=b250MXBvN3NqbWdyN2huYWpjc3U0ZWVnZDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");

        else if(v1.value == "COE1")
            window.open("https://calendar.google.com/calendar?cid=aDcycHVrdm85c3JhNmEyMmtraWxlM2MzMGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "COE2")
            window.open("https://calendar.google.com/calendar?cid=OHEwaHZhNjMwazR2dXNycmlyamZyOXQ0MjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "COE3")
            window.open("https://calendar.google.com/calendar?cid=Y3E0NWR1bTZsNGg3YWFpMWE5dTg1cGRlamtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "COE4")
            window.open("https://calendar.google.com/calendar?cid=cnZyMWlvOGQ4a2hocm80MzM3Nm9oajJqdjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "COE5")
            window.open("https://calendar.google.com/calendar?cid=aXVpNzhuZGo5bXF2YnJoZWQyZjF0cjZiZ3NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "COE6")
            window.open("https://calendar.google.com/calendar?cid=MTdjYjFncm8wNWY3M3EyaGs4NW5wbGtpaDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "COE7")
            window.open("https://calendar.google.com/calendar?cid=NHFoYmttbGVjZnZmYWNoNTZoOHZicG43Y2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "COE8")
            window.open("https://calendar.google.com/calendar?cid=dHZxOGptcTZ2bG5xN21rNGV2bnFkMmpta2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "COE9")
            window.open("https://calendar.google.com/calendar?cid=bzM0NXVoYnRpdThyOWpsZnBuOW9tbnA5NThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "COE10")
            window.open("https://calendar.google.com/calendar?cid=OTNyN2docjZja2xoMGJpb2trZGF0aXY2bjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "COE11")
            window.open("https://calendar.google.com/calendar?cid=bzlzaGQ4cGRkc3BmYmNmbGNiYm5xcTM5NmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "COE12")
            window.open("https://calendar.google.com/calendar?cid=ZG5wb2cyamhkcWoybmZjczlrNmZhcjE1bXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "COE13")
            window.open("https://calendar.google.com/calendar?cid=NHNjdG9vMG91cjE5YzZpZDk1dDA2bzYwc2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "COE14")
            window.open("https://calendar.google.com/calendar?cid=MGJ0NzVnbGxwbmJmOWVodWVpdW83czZxYXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "COE15")
            window.open("https://calendar.google.com/calendar?cid=aml1N3IzMTJrMDVtdDVldmd2MTVqNmdqZmNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "COE16")
            window.open("https://calendar.google.com/calendar?cid=NWVuZDR1MnBnOG9qNWRnZWNxMmppZ3ZscjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "COE17")
            window.open("https://calendar.google.com/calendar?cid=OGRtdGFzcmNhbDZib2t0ajdrdjQ1ZWY3ZGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "COE18")
            window.open("https://calendar.google.com/calendar?cid=bnZubWtyYnE1OHN2OTNucHNndTNyMTVmcDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "COE19")
            window.open("https://calendar.google.com/calendar?cid=OTl0cXA0dHA5YWlnYzhraGlkMTlyNGRqNDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "COE20")
            window.open("https://calendar.google.com/calendar?cid=dGcwYzcyYjBjcW03Ym9udDRycnM2c3JhYmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "COE21")
            window.open("https://calendar.google.com/calendar?cid=MXA3bmI0dGJlbXE1aGh1aG1tazVvMDAwbXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "COE22")
            window.open("https://calendar.google.com/calendar?cid=cGt1NmQ1Y3Y3NTE0bGRhMHRvMDI5ZTZrNzBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "COE23")
            window.open("https://calendar.google.com/calendar?cid=MWVocTg4NXRuNGxtOHJmcWl1cXYyOGk1NGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "COE24")
            window.open("https://calendar.google.com/calendar?cid=cDBmajllczVzb285OTl0MWdmYXJxMWgzcWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "COE25")
            window.open("https://calendar.google.com/calendar?cid=ZmNsYnY3N3NsM3U4bGczMWQ1NTNjYWdranNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "COE26")
            window.open("https://calendar.google.com/calendar?cid=YWoydjNjbzE5OHB0YXZnZXZiN2QxdWVzZ2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "COE27")
            window.open("https://calendar.google.com/calendar?cid=MmdrYnZya29lZjN0NTljbnB2ZjdrdW5ib29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "COE28")
            window.open("https://calendar.google.com/calendar?cid=YWoydjNjbzE5OHB0YXZnZXZiN2QxdWVzZ2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "ECE1")
            window.open("https://calendar.google.com/calendar/b/2?cid=djludThiaG41OHJrcnZxZTJsYWxsZTdxZnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "ECE2")
            window.open("https://calendar.google.com/calendar/b/2?cid=NWQxMmUyZXJjdjRxbGx2aDcxdm9lcWoxNWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "ECE3")
            window.open("https://calendar.google.com/calendar/b/2?cid=aWp1aWdoNmE0NjMxbDFuOGRvaGZscWR1cXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "ECE4")
            window.open("https://calendar.google.com/calendar/b/2?cid=ZGI5djk4OTJydG4yY3A2Mmc3YmVxMTRwczRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "ECE5")
            window.open("https://calendar.google.com/calendar/b/2?cid=ZGdmZjVkN25xNmY3OGJxbTkzdnN2bTMwdmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "ECE6")
            window.open("https://calendar.google.com/calendar/b/2?cid=c2JnM2Zuamk5Y25jZ3RwZHI5ZGtxODdvZW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "ECE7")
            window.open("https://calendar.google.com/calendar/b/2?cid=MDFkNGoyZ3Flcm5mcmZrbmdncHYxbzNiM29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "ECE8")
            window.open("https://calendar.google.com/calendar/b/2?cid=Njh0dXUyaW1yOWp0N205MzNnOTZqaDE0cGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "ENC1")
            window.open("https://calendar.google.com/calendar/b/1?cid=bzF1bmo2bThvM3AycXY4azJsbDZvaWdhaHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "ENC2")
            window.open("https://calendar.google.com/calendar/b/1?cid=dDU3YnM1ZDFjNG9uOGJ2N2tidnFvanRiNmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "ENC3")
            window.open("https://calendar.google.com/calendar/b/1?cid=MWlydWRlMHV0OWo1OTM4MnNpMHAyc3FmdjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "ENC4")
            window.open("https://calendar.google.com/calendar/b/1?cid=MXVkZmlycmJtY3AzbjQ0ZzBtbHVjdTVnMW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "ENC5")
            window.open("https://calendar.google.com/calendar/b/1?cid=cjllNDdybzcyNnNicnJmZGNtZmEzNmdxOHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "ENC6")
            window.open("https://calendar.google.com/calendar/b/2?cid=MGgydGI4dTN1NXA0dnVidDhpM3ZncmNpdTRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "ENC7")
            window.open("https://calendar.google.com/calendar/b/2?cid=dGJxYnVvM3VtYTBxM2gxNjQ1dmNjNmQ4cGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "ENC8")
            window.open("https://calendar.google.com/calendar/b/2?cid=N2s0czRvZHZwZGJrOXFoNTA0bWVjdXNtMDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "CHE")
            window.open("https://calendar.google.com/calendar/b/2?cid=OTUzMWI0NGhxaDBidDhoMDRzdWpnMnRuNnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "CIE1")
            window.open("https://calendar.google.com/calendar/b/2?cid=am50dThjdG43aTc0ajQ0ZDNibjBma2g5azRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "CIE2")
            window.open("https://calendar.google.com/calendar/b/2?cid=NXJoNWRuNjFtcjBldWhuZG5yZGcxNzI4bGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "CIE3")
            window.open("https://calendar.google.com/calendar/b/2?cid=ajZiMXA0MzgybGMzcnNlbGUyOG9lbWtqaWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "CIE4")
            window.open("https://calendar.google.com/calendar/b/2?cid=Z3RtdDdzdjFzYjg1ZGZvcG0zbWxoMjB1N29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "EIC1")
            window.open("https://calendar.google.com/calendar/b/2?cid=Nmplbmg0bWJhOXZubW5samZsZGduMHJodG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "EIC2")
            window.open("https://calendar.google.com/calendar/b/2?cid=N3VmMHJuZG5wZjZlYmNscjNzMzk4c2w3OHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "EIC3")
            window.open("https://calendar.google.com/calendar/b/2?cid=MHMybW9ob251ZnVhYnRobm4yMDE3djB2MjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "ELE1")
            window.open("https://calendar.google.com/calendar/b/1?cid=YnAzbDEyMXVmY201cXNwdDY0ZzFjNGFwZHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "ELE2")
            window.open("https://calendar.google.com/calendar/b/1?cid=cWdrbzZrZDQwMWticXZicGUwMHM1dGIzZjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "ELE3")
            window.open("https://calendar.google.com/calendar/b/1?cid=bnFsNzRyMmFtZ2o0YWJ1Z3BpYms0cmlmNjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "ELE4")
            window.open("https://calendar.google.com/calendar/b/1?cid=cG9xMTRwOGVzMGxvbjhlZ3NmZ2gzam83OWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "ELE5")
            window.open("https://calendar.google.com/calendar/b/1?cid=bXFrbmpxMWQyanVlMTJnc2c1aWwxdXJxdHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "ELE6")
            window.open("https://calendar.google.com/calendar/b/1?cid=aWdoM2NwMzRtbmYwYmI1MDc4bGZlcGowdW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "MEE1")
            window.open("https://calendar.google.com/calendar/b/1?cid=aGt2dHF2cWhsN2U5YjFjYzVvanVxbmpnb2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "MEE2")
            window.open("https://calendar.google.com/calendar/b/1?cid=dWNyb2QycHRsMHBmb3V0b2d2czFtdmc4dWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "MEE3")
            window.open("https://calendar.google.com/calendar/b/1?cid=cW0xZWduaXRsbG8xZ3VwY2IzMDVhNGY0ZDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "MEE4")
            window.open("https://calendar.google.com/calendar/b/1?cid=bjJyODZ0aGpma3Y0cjQ4c3FtaWRhZGFvc3NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "MEE5")
            window.open("https://calendar.google.com/calendar/b/1?cid=NDg0NGRvMGlqMmZoc2llMGd2aTAyN280cmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "MEE6")
            window.open("https://calendar.google.com/calendar/b/1?cid=ZWtmdjRxN3NuZDRwYzYzdDUzdXNjYWdkN3NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "MEE7")
            window.open("https://calendar.google.com/calendar/b/1?cid=ZDBnY2djM2o3NmsyZjB2OHMzZzlqM2lzcGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "MEE8")
            window.open("https://calendar.google.com/calendar/b/1?cid=N3FpcjgxcTkxZ2I0bjNqNG1ibm5wMm92dmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "MEE9")
            window.open("https://calendar.google.com/calendar/b/1?cid=ZnRtMTMyODM5OWZ0b2g1N2c5MnBjbjFqYjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "MEE10")
            window.open("https://calendar.google.com/calendar/b/1?cid=M2Y0b2JrZTZ0cHE3bmk0MTZiNDRnYzFrbGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "MEE11")
            window.open("https://calendar.google.com/calendar/b/1?cid=cTRyMmNtNWo1aG1lMmphMmo4ZGJxb2ljbHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "MEE12")
            window.open("https://calendar.google.com/calendar/b/1?cid=Zm1nYTI1OG1hbDh2NWg1ZnVzdGpjbGF0ODhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "MPE1")
            window.open("https://calendar.google.com/calendar/b/1?cid=dWZlZms1c203YWc0M3Fta2lxNzhjbmdyaWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "MPE2")
            window.open("https://calendar.google.com/calendar/b/1?cid=a2JsdGk1MDZ0MWN2aTE4MTZ2OWtqNXNtaHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "MTX1")
            window.open("https://calendar.google.com/calendar/b/1?cid=amozOXRwNHI0bm80aThycmY3bDlxNGRtajRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "MTX2")
            window.open("https://calendar.google.com/calendar/b/1?cid=YWxlb25vZWZ0ZWoxaDJsZnByaTRyNDBrc2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "2BTD1")
            window.open("https://calendar.google.com/calendar/b/1?cid=dm1yN20ycm12YTMyMXNpM2xnZTZxdmtudTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "2BTD2")
            window.open("https://calendar.google.com/calendar/b/1?cid=N25qYTVwcTEwcWM4aXE2M3JzZzE0dTk1NDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "2BTD3")
            window.open("https://calendar.google.com/calendar/b/1?cid=dWFianF1cXY3aWtlZ2hqMjVnaXJ1dWRucTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");

        else
        {
            if(v1.value == "selector")
            $("#popup__selector-subbatch").css("border","1px solid red");
            else {
            $("#popup__selector-subbatch").css("border","1 px solid gray");
            }
        }
    });
});
