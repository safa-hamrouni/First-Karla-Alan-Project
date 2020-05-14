
$("main").css({"background-image":"url('https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')", "background-size":"cover"});
$("body").css("background-image", "url('https://previews.123rf.com/images/drekhann/drekhann1809/drekhann180900241/109238524-funny-doodle-monsters-seamless-pattern-for-prints-designs-and-coloring-books-vector-illustration.jpg')");
$("header").css({"background-color":"black", "color":"white"})

var array = [
    {question: 'Which instrument has forty-seven strings and seven pedals?', answer1: 'piano', answer2: 'Kanoon', answer3:' Harp'},
    {question:'What is the most common colour of toilet paper in France?', answer1:'Pink', answer2:'White', answer3:'Black'},
    {question:'Coprastastaphobia is the fear of what?', answer1:'JavaScript', answer2:'Spiders', answer3:'Constipation'},
    {question: 'It\'s illegal in Texas to put what on your neighbour\’s Cow?', answer1:'A bell', answer2:'Graffiti', answer3: 'Your Picture 🤭'},
    {question:' Who entered a contest to find his own look-alike and came 3rd?', answer1:'Mr.Bean', answer2:'Charlie Chaplin', answer3:'Assia(from Nouba)🙄'},
    {question: 'French artist Aquabouse paints cows with what material?', answer1:'Cow-Blood', answer2:'Cow-Milk', answer3: 'Cow-DunG'},
    {question:'What were the first ice hockey pucks made out of?', answer1:'Wood', answer2:'frozen Cow-DunG', answer3:'Vulcanized Rubber'},
    {question:'In which country are there six villages called Silly, 12 called Billy, and two called Pratt?', answer1:'Grenada', answer2:'France', answer3:'Mangolia'},
    {question:'In the Caribbean, what sort of animal is the mountain chicken?', answer1:'Frogs', answer2: 'Birds', answer3:'Parrots'},
    {question:'Who invented the word vomit?', answer1:'Karla Ben Moncef', answer2:'Khawarzmi', answer3:'William Shakespear'},
    {question:'The leader of which country has his face on all the joghurt pots and has named the month January after himself', answer1:'Tanzania', answer2: 'Azarbidjan',answer3:'Turkmenistan'},
    {question:'What is the cross between a donkey and a zebra known as?', answer1:'ZeeDonk', answer2:'DonKra', answer3:'CapyBara'}
			]
 var didYouKnow = ['did you really think we meant kanoun.... it\'s 9anoun', 'Yup it\'s pink.. Don\'t be sexist !','It’s natural to be afraid of JavaScript but This one was a real phobia !', 
 	'I really hope you didn\'t think you can put your picture on a cow',
	'If you didn\'t see Nouba.. you wouldn\'t know ! 😅', 'You don\'t know what cow-dung is ??? Look it up (link)', 'Now you should know what cow dung is !', 'I thought France had more vocabulary than just that !',
	'Who would ever think that Chickens could be frogs ! Magic..', 'Yup! invented Romeo and Juliet, Hamlet AND vomit .. ', 'I think Trump is expected to do it next !','You probably guessed it right away !'];
 var correctAnswer = ['harp','Pink','Constipation','Graffiti','Charlie Chaplin','Cow-DunG','frozen Cow-DunG','France','Frogs','William Shakespear','Turkmenistan','ZeeDonk']

  // function reveal(){
	 // 	$('ul').append("<li>class = 'answer1'</li>")
	 // 	$('ul').append("<li>class = 'answer2'</li>")
	 // 	$('ul').append("<li>class = 'answer3'</li>")
	 // }

function display(){
	var i = 0;
	return {
		up: function(){
			i++
		},
		reset: function(){
			i = 0
		},
		questionAnswer: function(arr){
			$('div > h3').text(arr[i].question)
			$(' ul > .answer1').text(arr[i].answer1)
			$(' ul > .answer2').text(arr[i].answer2)
			$(' ul > .answer3').text(arr[i].answer3)
		},
		 reveal: function(arr){
          if (correctAnswer.indexOf($('#question').children[i].children[i].innerHTML) !== -1){
          	$('#reveal').append('"correct! "+ didYouKnow[i]')
          }
           $('#reveal').append('"Wrong "+ didYouKnow[i]')
		 }
	};
}

var nextQuestion = display()
nextQuestion.questionAnswer(array)



$('#confirm').on('click', function(){
	nextQuestion.up()
	nextQuestion.questionAnswer(array)
})
 $('.ans').on("click", function(){
 	if (reveal)
 });


 // function reveal(){
	// 	$('ul').append("<li>class = 'answer1'</li>")
	// 	$('ul').append("<li>class = 'answer2'</li>")
	// 	$('ul').append("<li>class = 'answer3'</li>")
	// }
