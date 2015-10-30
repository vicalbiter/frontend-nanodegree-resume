/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var work = {
 	"jobs" : [
 		{
 			"employer" : "Procter & Gamble",
 			"title" : "LA Central Engineering (Intern)",
 			"location" : "Mexico City",
 			"dates" : "June 2013 - December 2014",
 			"description" : "Internship as a tehnical leader for the Latin America Central Engineering Organization for the Homecare Business."
 		},
 		{
 			"employer" : "Procter & Gamble",
 			"title" : "Control & Information Systems Engineer",
 			"location" : "Mexico City",
 			"dates" : "January 2015 - Present",
 			"description" : "Regional leader of the C&IS organization for the P&G Latin America Homecare Business."
 		}
 	]
 }

 var projects = {
 	"projects" : [
 		{
 			"title" : "TBC",
 			"dates" : "TBC",
 			"description" : "TBC",
 			"images" : [
 				
 			]
 		}
 	]
 }

 var bio = {
 	"name" : "Vicente Albiter",
 	"age" : 24,
 	"role" : "Web Developer",
 	"contacts" : {
 		"email" : "vic.albiter@gmail.com",
 		"github" : "vicalbiter",
 		"twitter" : "@vicalbiter",
 		"location" : "Mexico City"
 	}, 
 	"pictureURL" : "images/me.jpg",
 	"welcomeMessage" : "Welcome to my page",
 	"skills" : ["Programming", "Teamwork", "Leadership"]
 };

var education = {
	"schools" : [
		{
			"name" : "UNAM",
			"location" : "Mexico City",
			"degree" : "B.Eng",
			"major" : "Mechatronics Engineering",
			"dates" : "2009 - 2014"
		}
	]
}

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

    //encapsulate display() function to the projects object
    projects.display = function() {
      for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        if (projects.projects[project].images.length > 0) {
          for (image in projects.projects[project].images) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedImage);
          }
        }
      }
    }

    //encapsulate display() function to the work object
    work.display = function() {
      for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedJob = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedJob; 
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        
      }
    }

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
    }

    

    //display the projects section
    work.display();
    projects.display();
    education.display();


    //include a map
    $("#mapDiv").append(googleMap);


