javascript:(function(){
	if ((!navigator.answer) || (navigator.answer=='') ){
		void(navigator.answer = prompt('Um hi...I\'m Spookmarklet. If you scare me, I will hide. Type something here to calm me down.', ''));
	} else if ((navigator.answer == ' ') || (navigator.answer == 'Just type something here...please?')) {
		void(my_note_new = prompt('You already clicked on me. Don\'t ghost me like this! \:\'\(', 'Just type something here...please?'));
		if (my_note_new != null) void(navigator.answer = my_note_new)
	} else if ((navigator.answer == 'no') || (navigator.answer == 'No') || (navigator.answer == 'NO')) {
		void(my_note_new = prompt('I understand you\'re frustrated, but there wasn\'t any need to be rude! Now type something that actually helps so we can both be done with this business \>\:\(', navigator.answer));
		if (my_note_new != null) void(navigator.answer=my_note_new);
	} else if ((navigator.answer == 'something') || (navigator.answer == 'Change it \-\-\> something')) {
		void(my_note_new = prompt('Yeah I\'m easily spooked, but that doesn\'t mean I don\'t care about your capitalization \:\<', 'Change it \-\-\> something'));
		if (my_note_new != null) void(navigator.answer = my_note_new)
	} else if (navigator.answer == 'Something') {
		alert('Whew, you nearly scared me there...but it was just the calming mantra I needed \:3 Thank you! \np.s. If you want us to start afresh, click refresh to give me amnesia.')
	} else {
		void(my_note_new = prompt('AHHH how could you?! I asked you not to scare me \>\< Type something here...but I beg you, please make it less scary than this  v', navigator.answer));
		if (my_note_new != null) void(navigator.answer = my_note_new)
	}
})();