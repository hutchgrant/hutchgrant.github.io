jQuery(document).ready(function($){


	function setDescription(school, funding, percent){
		$("#schoolName").text(school);
		$("#schoolDollars").text("Funding: $"+funding);
		$("#schoolPercent").text("Overall: "+percent+"%");
	}

	function scroll(anc){
	    var anchor = $("a[name='"+ anc +"']");
	    $('html,body').animate({scrollTop: anchor.offset().top},'slow');
	}

	$("#mpTrent").mouseenter(function(){
		setDescription("Trent University", "8,762,000.00", "0.2");
	});
	$("#mpTrent").click(function(){
		scroll('trent');
	});
	$("#mpOttawa").mouseenter(function(){
		setDescription("University of Ottawa", "123,603,001.05", "2.8");
	});
	$("#mpOttawa").click(function(){
		scroll('ottawa');
	});
	$("#mpOntario").mouseenter(function(){
		setDescription("University of Ontario Institute of Technology", "79,125,000.00", "1.8");
	});
	$("#mpOntario").click(function(){
		scroll('ontario');
	});
	$("#mpWaterloo").mouseenter(function(){
		setDescription("Waterloo University", "388,310,000.00", "8.9");
	});
	$("#mpWaterloo").click(function(){
		scroll('waterloo');
	});
	$("#mpLakehead").mouseenter(function(){
		setDescription("Lakehead University", "80,424,000.00", "1.8");
	});
	$("#mpLakehead").click(function(){
		scroll('lakehead');
	});
	$("#mpOcad").mouseenter(function(){
		setDescription("OCAD University", "28,126,750.00", "0.6");
	});
	$("#mpOcad").click(function(){
		scroll('ocad');
	});
	$("#mpWindsor").mouseenter(function(){
		setDescription("University of Windsor", "137,101,000.00", "3.1");
	});
	$("#mpWindsor").click(function(){
		scroll('windsor');
	});
	$("#mpMaster").mouseenter(function(){
		setDescription("McMaster University", "495,785,000.00", "11.3");
	});
	$("#mpMaster").click(function(){
		scroll('master');
	});
	$("#mpYork").mouseenter(function(){
		setDescription("York University", "408,706,826.25", "9.3");
	});
	$("#mpYork").click(function(){
		scroll('york');
	});
	$("#mpBrock").mouseenter(function(){
		setDescription("Brock University", "123,232,000.00", "2.8");
	});
	$("#mpBrock").click(function(){
		scroll('brock');
	});
	$("#mpLaurier").mouseenter(function(){
		setDescription("Wilfried Laurier", "5,933,958.00", "0.1");
	});
	$("#mpLaurier").click(function(){
		scroll('laurier');
	});
	$("#mpQueens").mouseenter(function(){
		setDescription("Queen's University", "351,315,000.00", "8");
	});
	$("#mpQueens").click(function(){
		scroll('queens');
	});
	$("#mpWestern").mouseenter(function(){
		setDescription("Western University", "75,372,000.00", "1.7");
	});
	$("#mpWestern").click(function(){
		scroll('western');
	});
	$("#mpRyerson").mouseenter(function(){
		setDescription("Ryerson University", "259,181,000.00", "5.9");
	});
	$("#mpRyerson").click(function(){
		scroll('ryerson');
	});
	$("#mpToronto").mouseenter(function(){
		setDescription("University of Toronto", "1,490,237,000.00", "34");
	});
	$("#mpToronto").click(function(){
		scroll('toronto');
	});
	$("#mpGuelph").mouseenter(function(){
		setDescription("University of Guelph", "316,770,000.00", "7.2");
	});
	$("#mpGuelph").click(function(){
		scroll('guelph');
	});



});