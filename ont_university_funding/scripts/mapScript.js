jQuery(document).ready(function($){
	
	function setDescription(univ, fed, prov, perc){
		$("#hoverTitle").text(univ);
		$("#hoverText1").text("Provincial Funding: $"+prov);
		$("#hoverText2").text("Federal Funding: $"+fed);
		$("#hoverText3").text("Overall: "+perc+"%");
	}

	$("#mpTrent").mouseenter(function(){
		setDescription("Trent University", "8,762,000", "51,992,287", "1.2");
	});
	$("#mpOttawa").mouseenter(function(){
		setDescription("University of Ottawa", "123,603,001", "410,403,627", "9.7");
	});
	$("#mpOntario").mouseenter(function(){
		setDescription("University of Ontario Institute of Technology", "79,125,000", "70,347,585", "1.7");
	});
	$("#mpWaterloo").mouseenter(function(){
		setDescription("University of Waterloo", "388,310,000", "276,841,346", "6.6");
	});
	$("#mpLakehead").mouseenter(function(){
		setDescription("Lakehead University", "80,424,000", "65,637,146", "1.6");
	});
	$("#mpOcad").mouseenter(function(){
		setDescription("OCAD University", "28,126,750", "26,271,728", "0.6");
	});
	$("#mpWindsor").mouseenter(function(){
		setDescription("University of Windsor", "137,101,000", "107,940,040", "2.6");
	});
	$("#mpMaster").mouseenter(function(){
		setDescription("McMaster University", "495,785,000", "326,601,071", "7.7");
	});
	$("#mpYork").mouseenter(function(){
		setDescription("York University", "408,706,826", "338,933,693", "8");
	});
	$("#mpBrock").mouseenter(function(){
		setDescription("Brock University", "123,232,000", "94,460,666", "2.2");
	});
	$("#mpLaurier").mouseenter(function(){
		setDescription("Wilfried Laurier", "5,933,958", "131,066,504", "3.1");
	});
	$("#mpQueens").mouseenter(function(){
		setDescription("Queen's University", "351,315,000", "230,581,176", "5.5");
	});
	$("#mpWestern").mouseenter(function(){
		setDescription("Western University", "75,372,000", "338,831,551", "8");
	});
	$("#mpRyerson").mouseenter(function(){
		setDescription("Ryerson University", "259,181,000", "245,505,665", "5.8");
	});
	$("#mpToronto").mouseenter(function(){
		setDescription("University of Toronto", "1,450,000,000", "896,797,914", "21.3");
	});
	$("#mpGuelph").mouseenter(function(){
		setDescription("University of Guelph", "316,770,000", "297,625,254", "7.1");
	});
	$("#mpAlgoma").mouseenter(function(){
		setDescription("Algoma University", "unknown", "14,259,778", "0.3");
	});
	$("#mpNipissing").mouseenter(function(){
		setDescription("Nipissing University", "unknown", "35,356,143", "0.8");
	});
	$("#mpLaurentian").mouseenter(function(){
		setDescription("Laurentian University", "unknown", "86,128,654", "2");
	});
	$("#mpCarleton").mouseenter(function(){
		setDescription("Carleton University", "unknown", "172,244,851", "4.1");
	});
});