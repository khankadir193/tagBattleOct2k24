// json Object for data
var eventData = {
	"eng":[
		{
 		"id" : "rulesList",
 		"type" : "list",
 		"desc" : [{
	 			"rules" :"Every week there will be a status challenge which will be based on different themes."
	 		},{
	 			"rules" : "Everyone will have to post the relevant content under the status challenge."
	 		},{
	 			"rules" : "At the end of the challenge, the leader board will rank participants according to the likes they receive on the post and <b>top 5 users</b> will get rewards.<br><h3>1 like = 10points. </h3>participants will be ranked on the leaderboard according to the likes they receive. "
	 		},{
	 			"rules" : "Eg:- Status challenge is about #Christmas2021. During those 6 days of the challenge, users have to post relevant content with that hashtag and the person with the highest likes will be the winner."
	 		},{
	 			"rules" : "Note: If the post is not relevant to the status challenge then, even if the user is in <b>top 5</b>, they won’t receive any rewards. (to be checked manually)"
	 		},{
	 			"rules" : "Likes will be counted only by <b>Level 3 + </b>users. If a user gets 20 likes in total out of which 10 are from users whose level are below level 3 then, it will not be counted on leaderboard. Similarly, talent level should be above Level3."
	 		},
			{
				"rules" : "There will be only 1 web page with 4 different tabs for different hashtags. When a hashtag challenge starts, the leaderboard will automatically show the ranking of that respective hashtag. (Similar to Miss SK)"
			}]
 	}
 	],
	"roman":[
			{
 		"id" : "rulesList",
 		"type" : "list",
 		"desc" : [{
	 			"rules" :"Status challenge <b>harr week </b>ek alag theme par based hoga. "
	 		},{
	 			"rules" : "Event ke dauran, dhyaan rahe ki aap<b> hashtag </b>se related content hi post kare."
	 		},{
	 			"rules" : " Harr hafte ke end me, aapke post par likes ke hisaab se, saare users ko rank kiya jaayega aur <b>Top 5 </b>users ko rewards milenge. <h3>1 like = 10points. </h3>"
	 		},{
	 			"rules" : "Dhyaan Rahe: Users ko rewards tab hi milenge jab unka post hashtag se related hoga. Agar aapka post <b>Top 5 </b>me aata hai aur agar woh hashtag se related nahi rahi toh aapko koi rewards nahi milenge.."
	 		},{
	 			"rules" : "<b>Level 3+</b> users and talents ki likes count kiya jaayega. Jinn users and talents ka<b> level 3+</b> nahi hai unka likes count nahi kiya jaayega."
	 		}]
 	}
		]
	};

function contentChange(x){
// content Populate //
	if (x==1) {
		for (var i = 0; i < eventData.eng.length; i++) {
		var type = eventData.eng[i]['type'];
		var ids = eventData.eng[i]['id'];
		$('#' + ids).html('');

		var cont;
			if(type == "image"){
				cont = eventData.eng[i]['desc'];
				$('#' + ids).attr('src', cont);
			}else if(type == "list"){
				//console.log("no of list:"+eventData.eng[i]['desc'][0]['rules']);
				for (var j = 0; j<= eventData.eng[i]['desc'].length-1; j++) {
					var typ = eventData.eng[i]['desc'][j]['type'];
					if(typ == "list1"){
						for (var k = 0; k<= eventData.eng[i]['desc'][j]['rules'].length-1; k++) {
							cont = eventData.eng[i]['desc'][j]['rules'][k]['rules'];
							// console.log(cont);
							$('#' + ids).append('<ul><li><span>' + eventData.eng[i]['desc'][j]['rule'][k]['rule'] + '</span></li></ul>');
						}
					}else{
						cont = eventData.eng[i]['desc'][j]['rules'];
						$('#' + ids).append('<li><span>' + cont + '</span></li>');
					}
				}
			}else{
				cont = eventData.eng[i]['desc'];
				$('#'+ids).append(cont);
			}
		}
	}else if(x==2){
		for (var i = 0; i < eventData.roman.length; i++) {
		var type = eventData.roman[i]['type'];
		var ids = eventData.roman[i]['id'];
		var cont = eventData.roman[i]['desc'];
		$('#' + ids).html('');
			if(type == "image"){
				$('#' + ids).attr('src', cont);
			}else if(type == "list"){
				
				for (var j = 0; j<= eventData.roman[i]['desc'].length-1; j++) {
					var typ = eventData.roman[i]['desc'][j]['type'];
					if(typ == "list1"){
						for (var k = 0; k<= eventData.roman[i]['desc'][j]['rules'].length-1; k++) {
							cont = eventData.roman[i]['desc'][j]['rules'][k]['rules'];
							// console.log(cont);
							$('#' + ids).append('<ul><li><span>' + eventData.roman[i]['desc'][j]['rule'][k]['rule'] + '</span></li></ul>');
						}
					}else{
						cont = eventData.roman[i]['desc'][j]['rules'];
						$('#' + ids).append('<li><span>' + cont + '</span></li>');
					}
				}
			}else{
				//console.log(cont);
				$('#'+ids).append(cont);
			}
		}
	}

}
// $(document).ready(function(){
// 	contentChange();
// });
