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
 				"TBC"
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
		"name" : "ITESM",
		"city" : "Toluca, Estado de Mexico",
		"degree" : "International Baccalaurate",
		"major" : "none"
	},
	{
		"name" : "UNAM",
		"city" : "Mexico City",
		"degree" : "B.Eng",
		"major" : "Mechatronics Engineering"
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

    //declare displayWork function
    var displayWork = function() {
      for (job in work.jobs) {
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

    //fill the works section
    displayWork();

    //encapsulate display() function to the projects object
    projects.display = function() {
      for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        if (project.projects[project].images.length > 0) {
          for (image in projects.projects[project].images) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedImage);
          }
        }
      }
    }

    //display the projects section
    projects.display();


 /*

 var awesomeThoughts = "My name is Vicente and I am AWESOME!";
 console.log(awesomeThoughts);

 var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
 console.log(funThoughts);

 var name = "Vicente Albiter";
 var role = "Web Developer"

 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);

 $("#header").prepend([formattedRole]);
 $("#header").prepend([formattedName]);

 $("#main").append([work.position]);
 $("#main").append([education.name]);

 var work = {};
 work.position = "Control Engineer";
 work.employer = "Procter & Gamble";
 work.years = 1;
 work.city = "Mexico City";

 var education = {};
 education["name"] = "UNAM";
 education["years"] = "2009 - 2014";
 education["city"] = "Mexico City"
*/

