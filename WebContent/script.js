$(document).ready(function(){
	

	//var url = "http://gateway.marvel.com:80/v1/public/comics?dateDescriptor=thisWeek?apikey=";
	//var API_KEY = "c079b73dc1cb547b47fd711959d23ac9";
	//var HASH = "0efd48c2d45f8e4f5afd7ca6e1690b52";
	//var ts = "2";
	//var ts = new Date().getTime();
	var url = "http://gateway.marvel.com/v1/public/comics?dateDescriptor=thisWeek&ts=2&apikey=c079b73dc1cb547b47fd711959d23ac9&hash=0efd48c2d45f8e4f5afd7ca6e1690b52"
	// url += "&ts=" + ts + "&apikey=" + API_KEY + "&hash" + HASH;
	
	$.getJSON(url, function(oneItem){
		var dataTotal = oneItem.data.total;
		$("section").append(dataTotal);
		console.log(oneItem.data.results);
		
		for (var i = 0; i < 1; i++){
			//var resultsID = oneItem.data.results[i].id;
			//$("section").append(resultsID);
			
			//var creators = oneItem.data.results[i].creators.items[i].name;
			//$("section").append(creators);
			var name = oneItem.data.results[i].creators.items.name;
			if (isArray(name)){
			console.log("name");
			} else {
				console.log("not Array");
			}
			console.log(name.length);
			
		}
		
//		for (var i = 0; i < oneItem.data.results.length ; i++) {
//			var creators = oneItem.data.results[i].creators.items[i].name;
//			$("section").append(creators);
//		}

		
		//$("section").append("<img src ='" + thumbnail + +".jpg"+ "'>" + "<br>");
	
	
	
	
//	$.get(url, function(comicsThisWeek){
//		for (var i = 0; i < 5; i++){
//			console.log(comicsThisWeek.data.children[i]);
//			
//			var thumbnail = comicsThisWeek.data.children[i].data.thumbnail;
//			var title = comicsThisWeek.data.children[i].data.title;
//			var creator = comicsThisWeek.data.children[i].data.creators.items.name;
//			var marvelUrl = comicsThisWeek.data.children[i].data.urls.url;
//			
//		$("section").append(
//				"<div class='post container'>" + 
//				"<img src ='" + thumbnail +"'>" + "<br>" + 
//				"Title: " + title + "<br>" + 
//				"Creator: " + creator + "<br>" + 
//				"Url: " + "<a href=" + marvelUrl + "></a>" + "<br>" + 
//				"</div>");}

});
});
	
//});