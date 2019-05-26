function cfg(){
	return {
		"token" : {
			'DS_TOKEN' : process.env.BOT_TOKEN,
			'YT_API_V3' : process.env.YT_API_V3,
			'KEY_FT' : ''
		},
		"prefix" : ['s!', 's1', 'S!', 'S1', '<@574657711745007656>'],
		"CNF" : true,
		"emoji" : {
			"loading" : '<a:loading:574291498103996416> ',
			"cross" : '<:cross1:576706947395354634> ',
			"check" : '<:check1:576706984955478016> ',
			"verified" : '<:verified:577546075288633354> ',
			"partners" : '<:partner:577568849587732499> ',
			"online" : '<:online:577575757975650304> ',
			"invis" : '<:invisible:577575719450837038> ',
			"idle" : '<:idle:577575792868065292> ',
			"dnd" : '<:dnd:577575831648600075> ',
			"stream" : '<:stream:577576527135506445> '
		},
    	'ConnectDB' : { // Соединение с сервером!
    		URL : process.env.MONGODB,
	        ObjectDB : function(){
	            return this.URL
	        }
    	},
    	'number' : {
    		MinVolue : 5,
    		MaxVolue : 10
    	}
	}
}

module.exports = cfg();
