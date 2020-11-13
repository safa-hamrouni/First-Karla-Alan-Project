
$("main").css({"background-image":"url('https://ak.picdn.net/shutterstock/videos/1038439244/thumb/1.jpg?ip=x480"});
$("body").css("background-image","url('https://image.freepik.com/free-photo/cluster-bright-lights_23-2147798863.jpg')")

var array = [
    {question: 'Which instrument has forty-seven strings and seven pedals?', answer:['Piano','Kanoon','Harp']},
    {question:'What is the most common colour of toilet paper in France?', answer:['Pink','White','Black']},
    {question:'Coprastastaphobia is the fear of what?', answer:['JavaScript','Spiders', 'Constipation']},
    {question: 'It\'s illegal in Texas to put what on your neighbour\’s Cow?', answer:['A bell','Graffiti', 'Your Picture 🤭']},
    {question:' Who entered a contest to find his own look-alike and came 3rd?', answer:['Mr.Bean','Charlie Chaplin', 'Assia(from Nouba)🙄']},
    {question: 'French artist Aquabouse paints cows with what material?', answer:['Cow-Blood','Cow-Milk','Cow-DunG']},
    {question:'What were the first ice hockey pucks made out of?', answer:['Wood','Frozen Cow-DunG','Vulcanized Rubber']},
    {question:'In which country are there six villages called Silly and 12 called Billy?', answer:['Grenada','France','Mangolia']},
    {question:'In the Caribbean, what sort of animal is the mountain chicken?', answer:['Frogs','Birds','Parrots']},
    {question:'Who invented the word vomit?', answer:['Karla Ben Moncef','Khawarzmi','William Shakespear']},
    {question:'The leader of which country has his face on all the joghurt pots?', answer:['Tanzania','Azarbidjan','Turkmenistan']},
    {question:'What is the cross between a donkey and a zebra known as?', answer:['ZeeDonk','DonKra','CapyBara']}
			]

 var didYouKnow = ['It\'s Harp.. Did you really think we meant kanoun.... it\'s 9anoun', 'It\'s pink.. Can you believe it 🤦‍♀️ !','It’s natural to be afraid of JavaScript but This one was a real phobia !', 
 	'I really hope you didn\'t think you can put your picture on a cow',
	'If you didn\'t see Nouba.. you wouldn\'t know ! 😅', 'You don\'t know what cow-dung is ??? Look it up (link)', 'Now you should know what cow dung is !', 'I thought France had more vocabulary than just that !',
	'Who would ever think that Chickens could be frogs ! Magic..', 'Yup! invented Romeo and Juliet, Hamlet AND vomit .. ', 'I think Trump is expected to do it next !','You probably guessed it right away !'];

 var correctAnswer = ['Harp','Pink','Constipation','Graffiti','Charlie Chaplin','Cow-DunG','Frozen Cow-DunG','France','Frogs','William Shakespear','Turkmenistan','ZeeDonk']


function display(){
	var i = 0;
	return {
		up: function(){
			 i++ ;
			},
		start: function(){
			$(".decoo").hide()
			 $("#start").on("click", function(){
			 	setTimeout(function(){
			 		$(".decoo").show()
			 	$("#start").hide()
			 },1000)
			})
		},
		questionAnswer: function(array){
			$('div > h3').text(array[i].question)
			$(' ul > .answer1').text(array[i].answer[0])
			$(' ul > .answer2').text(array[i].answer[1])
			$(' ul > .answer3').text(array[i].answer[2])
		},
		correct: function(didYouKnow, correctAnswer){
				$('.ans').on("click", function(){
					var e = $(this)
					if(e.text() === correctAnswer[i]){
			 			e.css('background-color', 'green');	
			 			$('#answers').hide()
					 	$('#monkey1').show()
					 	setTimeout(function(){
					 	$('#monkey1').hide()
					 	$('#answers').show()					 	
					 	}, 3000)
					}
					 else {
					 	e.css("background-color", "red")
					 	$('#answers').hide()
					 	$('#monkey2').show()
					 	setTimeout(function(){
					 	$('#monkey2').hide()
					 	$('#answers').show()
					 	}, 3000)
					 }
					$('#reveal').text(didYouKnow[i]);
				})
		},
		default : function(){
				$('li').css("background-color", "black")
				$('#reveal').text('')
		},
	}
}

var start = display()
start.start()

var nextQuestion = display()
nextQuestion.questionAnswer(array)
$('.ans').hover(function(){
nextQuestion.correct(didYouKnow,correctAnswer)
})

$('#confirm').on('click', function(){
	nextQuestion.default()
	nextQuestion.up()
	nextQuestion.questionAnswer(array)
})

$('#finish').on("click", function(){
	$('.deco').hide()
	$('main').append('<div><img class="monkey" src="https://thumbs.gfycat.com/FatherlyUnfoldedCommongonolek-max-1mb.gif"></div>')
	setTimeout(function(){
		$(".monkey").hide()
		$('main').hide()
		$("footer").append('<img class = "thank-you" src="https://ak.picdn.net/shutterstock/videos/1048337131/thumb/2.jpg">')
	},3000)
});


 