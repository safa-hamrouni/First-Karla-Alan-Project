
$("main").css({"background-image":"url('https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')", "background-size":"cover"});
$("body").css("background-image", "url('https://previews.123rf.com/images/drekhann/drekhann1809/drekhann180900241/109238524-funny-doodle-monsters-seamless-pattern-for-prints-designs-and-coloring-books-vector-illustration.jpg')");
$("header").css({"background-color":"black", "color":"white"})

var array = [
    {question: 'Which instrument has forty-seven strings and seven pedals?', answer:['Piano','Kanoon','Harp']},
    {question:'What is the most common colour of toilet paper in France?', answer:['Pink','White','Black']},
    {question:'Coprastastaphobia is the fear of what?', answer:['JavaScript','Spiders', 'Constipation']},
    {question: 'It\'s illegal in Texas to put what on your neighbour\’s Cow?', answer:['A bell','Graffiti', 'Your Picture 🤭']},
    {question:' Who entered a contest to find his own look-alike and came 3rd?', answer:['Mr.Bean','Charlie Chaplin', 'Assia(from Nouba)🙄']},
    {question: 'French artist Aquabouse paints cows with what material?', answer1:['Cow-Blood','Cow-Milk','Cow-DunG']},
    {question:'What were the first ice hockey pucks made out of?', answer:['Wood','Frozen Cow-DunG','Vulcanized Rubber']},
    {question:'In which country are there six villages called Silly and 12 called Billy?', answer1:['Grenada','France','Mangolia']},
    {question:'In the Caribbean, what sort of animal is the mountain chicken?', answer:['Frogs','Birds','Parrots']},
    {question:'Who invented the word vomit?', answer:['Karla Ben Moncef','Khawarzmi','William Shakespear']},
    {question:'The leader of which country has his face on all the joghurt pots?', answer:['Tanzania','Azarbidjan','Turkmenistan']},
    {question:'What is the cross between a donkey and a zebra known as?', answer:['ZeeDonk','DonKra','CapyBara']}
			]
 var didYouKnow = ['did you really think we meant kanoun.... it\'s 9anoun', 'Yup it\'s pink.. Don\'t be sexist !','It’s natural to be afraid of JavaScript but This one was a real phobia !', 
 	'I really hope you didn\'t think you can put your picture on a cow',
	'If you didn\'t see Nouba.. you wouldn\'t know ! 😅', 'You don\'t know what cow-dung is ??? Look it up (link)', 'Now you should know what cow dung is !', 'I thought France had more vocabulary than just that !',
	'Who would ever think that Chickens could be frogs ! Magic..', 'Yup! invented Romeo and Juliet, Hamlet AND vomit .. ', 'I think Trump is expected to do it next !','You probably guessed it right away !'];

 var correctAnswer = ['harp','Pink','Constipation','Graffiti','Charlie Chaplin','Cow-DunG','frozen Cow-DunG','France','Frogs','William Shakespear','Turkmenistan','ZeeDonk']

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
			$(' ul > .answer1').text(arr[i].answer[0])
			$(' ul > .answer2').text(arr[i].answer[1])
			$(' ul > .answer3').text(arr[i].answer[2])
		},
		correct: function(didYouKnow, correctAnswer){
			$('.answer1, .answer2, .answer3').on("click", function(){
               var test = $(this)
	 		if(test.text() === correctAnswer[i]){
	 			test.css('background-color', 'green');
	 			$('#reveal').text(didYouKnow[i]);
		}
		  alert('sdsdf')
	   })
      }
	};
}

var nextQuestion = display()
nextQuestion.questionAnswer(array)

$('#confirm').on('click', function(){
    nextQuestion.correct(didYouKnow,correctAnswer)
	nextQuestion.up()
	nextQuestion.questionAnswer(array)
	
})


 // var x = display()
 // x.correct(didYouKnow, correctAnswer)	
 // console.log(x)
 // x.up()
 // console.log(x)


 