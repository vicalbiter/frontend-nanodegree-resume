/*
This is empty on purpose! Your code to build the resume will go here.
 */
var work = {
    "jobs": [{
        "employer": "Procter & Gamble",
        "title": "Technical Engineer (Intern)",
        "location": "Toluca",
        "dates": "June 2013 - December 2014",
        "description": "Internship in the central engineering organization in the P&G Latin America - Household Care business."
    }, {
        "employer": "Procter & Gamble",
        "title": "Control & Information Systems Engineer",
        "location": "Mexico City",
        "dates": "January 2015 - Present",
        "description": "Regional leader of the C&IS organization in the P&G Latin America - Household Care business. "
    }]
};

var projects = {
    "projects": [{
        "title": "Django and Wes",
        "dates": "November 2015 - Present",
        "description": "As I do not have any relevant web-development project to show yet, I'm placeholding this section with Django Reinhardt and Wes Montgomery, two of my favorite guitarists of all time.",
        "images": ["images/django.jpg", "images/wes.jpg"]
    }],
    "porfolioURL": "#"
};

var bio = {
    "name": "Vicente Albiter",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+52 1 55 45 07 17 00",
        "email": "vic.albiter@gmail.com",
        "github": "vicalbiter",
        "twitter": "@vicalbiter",
        "location": "Mexico City"
    },
    "biopic": "images/me.jpg",
    "welcomeMessage": "Welcome to my page",
    "skills": ["Programming", "Teamwork", "Leadership"]
};

var education = {
    "schools": [{
        "name": "Universidad Nacional Autónoma de México",
        "location": "Mexico City",
        "degree": "B.Eng",
        "major": "Mechatronics Engineering",
        "dates": "2009 - 2014"
    }],
    "onlineClasses": [{
        "title": "Front-End Web Development Nanodegree",
        "school": "Udacity",
        "dates": "September 2015 - Present",
        "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

var keySkills = {
    "programming": [{
        "language": "JavaScript",
        "level": "Beginner"
    }, {
        "language": "HTML",
        "level": "Beginner"
    }, {
        "language": "CSS",
        "level": "Beginner"
    }],
    "languages": [{
        "language": "Spanish",
        "level": "Native"
    }, {
        "language": "English",
        "level": "Proficient"
    }],
    "soft": ["Self-Taught", "Team-Player", "Adaptable"]
};

//encapsulate display() function to the projects object
projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            $(".project-entry:last").append(HTMLprojectImageHolder);
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".img-holder:last").append(formattedImage);
            }

            var portfolioButton = $(HTMLprojectButton.replace("%data%", projects.porfolioURL));
            portfolioButton.insertAfter("#projects");
        }
    }
};

//encapsulate display() function to the work object
work.display = function() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedJob = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedJob;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

//encapsulate display() function to the education object
education.display = function() {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedMajor);

    }

    $("#education").append(HTMLonlineClasses);
    for (var onlineClass in education.onlineClasses) {
        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[onlineClass].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[onlineClass].school);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedTitleSchool);

        formattedDates = HTMLonlineDates.replace("%data%", education.onlineClasses[onlineClass].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineClasses[onlineClass].url);
        $(".education-entry:last").append(formattedURL);
    }
};

//encapsulate display() function to the bio object
bio.display = function() {

    //divide name into first and last
    var name = bio.name.split(" ");
    var firstName = name[0];
    var lastName = name[1];

    var formattedFirstName = HTMLheaderName.replace("%data%", firstName);
    var formattedLastName = HTMLheaderLastName.replace("%data%", lastName);
    var formattedName = formattedFirstName + formattedLastName;
    $("#header").append(formattedName);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formattedRole);

    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);

    /*As I already built a skills section, there is no need to display this
        //fill the skills section
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
            $("#skills").append(formattedSkill);

            formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
            $("#skills").append(formattedSkill);

            formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
            $("#skills").append(formattedSkill);
        }
        */

    //fill the top contacts section
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#footerContacts").append(formattedEmail);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#footerContacts").append(formattedTwitter);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#footerContacts").append(formattedGithub);

};

keySkills.display = function() {

    //fill the programming skills column
    if (keySkills.programming.length > 0) {
        $("#keySkills").append(HTMLkeySkillStart);
        $(".skillcolumn-entry:last").append(HTMLkeyProgramming);
        for (var programmingSkill in keySkills.programming) {
            var formattedSkillTitle = HTMLkeySkillTitle.replace("%data%", keySkills.programming[programmingSkill].language);
            var formattedSkillLevel = HTMLkeySkillLevel.replace("%data%", keySkills.programming[programmingSkill].level);
            $(".skillcolumn-entry:last").append(formattedSkillTitle);
            $(".title-text:last").append(formattedSkillLevel);
        }
    }

    //fill the languages column
    if (keySkills.languages.length > 0) {
        $("#keySkills").append(HTMLkeySkillStart);
        $(".skillcolumn-entry:last").append(HTMLkeyLanguages);
        for (var languageSkill in keySkills.languages) {

            var formattedSkillTitle = HTMLkeySkillTitle.replace("%data%", keySkills.languages[languageSkill].language);
            var formattedSkillLevel = HTMLkeySkillLevel.replace("%data%", keySkills.languages[languageSkill].level);
            $(".skillcolumn-entry:last").append(formattedSkillTitle);
            $(".title-text:last").append(formattedSkillLevel);
        }
    }

    //fill the languages column
    if (keySkills.soft.length > 0) {
        $("#keySkills").append(HTMLkeySkillStart);
        $(".skillcolumn-entry:last").append(HTMLkeySoft);
        for (var softSkill = 0; softSkill < keySkills.soft.length; softSkill++) {
            var formattedSkillSoft = HTMLkeySkillSoft.replace("%data%", keySkills.soft[softSkill]);
            $(".skillcolumn-entry:last").append(formattedSkillSoft);
        }
    }
};

//display the projects section
//buildGrid('_header');
work.display();
projects.display();
education.display();
bio.display();
keySkills.display();

//include a map
$("#mapDiv").append(googleMap);

/*The following is a function that takes a string (which represents a specific section
 in the DOM) an argument. From this, it builds a bootstrap with a container -> row -> col-sm-12
 structure. The input string, which is in the form of "_section" will generate the
 proper newID that corresponds to what is already coded in the original solution. That is,
 a "_header" section will build a grid with its inner column labeled as "header", a 
 "_workExperience" section will build a grid with its inner column labeled as "workExperience", 
 etcetera.*/

/***Experimental function 
function buildGrid(_section) {
    var selector = $('#' + _section)
    var newID = _section.slice(1);
    var container = $('<div class="container"></div>');
    var row = $('<div class="row"></div>');
    var column = $('<div id="' + newID + '" class="col-sm-12 center-content clear-fix"></div>')
    selector.append(container);
    container.append(row);
    row.append(column);
}
***/