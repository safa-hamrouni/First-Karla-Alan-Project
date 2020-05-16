
$("main").css({"background-image":"url('https://thumbs.dreamstime.com/z/brown-blue-wooden-background-light-brown-wooden-floor-blue-light-wooden-wall-background-126467038.jpg')", "background-size":"initial"});
//$("body").css("background-image", "url('https://previews.123rf.com/images/aliasching/aliasching1604/aliasching160400949/54725367-fun-pixel-squares-background-design-element.jpg')");
$("body").css("background-color", "white")
//$("header").css("background-image","url('https://cdn.pixabay.com/photo/2017/02/12/12/42/wall-2059909_960_720.png')")
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
 var didYouKnow = ['Did you really think we meant kanoun.... it\'s 9anoun', 'It\'s pink.. Can you believe it 🤦‍♀️ !','It’s natural to be afraid of JavaScript but This one was a real phobia !', 
 	'I really hope you didn\'t think you can put your picture on a cow',
	'If you didn\'t see Nouba.. you wouldn\'t know ! 😅', 'You don\'t know what cow-dung is ??? Look it up (link)', 'Now you should know what cow dung is !', 'I thought France had more vocabulary than just that !',
	'Who would ever think that Chickens could be frogs ! Magic..', 'Yup! invented Romeo and Juliet, Hamlet AND vomit .. ', 'I think Trump is expected to do it next !','You probably guessed it right away !'];

 var correctAnswer = ['Harp','Pink','Constipation','Graffiti','Charlie Chaplin','Cow-DunG','Frozen Cow-DunG','France','Frogs','William Shakespear','Turkmenistan','ZeeDonk']


function display(){
	var i = 0;
	return {
		up: function(){
			 i++ ;
            

			// $(".end").hide()
   //   		$('main').append('<div><img src="https://thumbs.gfycat.com/FatherlyUnfoldedCommongonolek-max-1mb.gif"></div>')
			
		},
		// reset: function(){
		// 	if(i === array.length){
		// 	i = 0
		// }
		// },
		start: function(){
			$(".decoo").hide()
			 $("#start").on("click", function(){
			 	setTimeout(function(){

			 		$(".decoo").show()
			 	$("#start").hide()
			 },1000)
			})
		},
		// end : function(){
		// 		 $(".end").hide()
		// 		 $('main').append('<div><img src="https://thumbs.gfycat.com/FatherlyUnfoldedCommongonolek-max-1mb.gif"></div>')
			
			//},
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
					 	$('h3').append('<div class= "monkey"><img src = "https://2.bp.blogspot.com/-S0fFka6A4vE/WLojzomGEfI/AAAAAAANzHc/HJWE1Ui_OrQlNxhV6bEWNTLGyWWjmHu9wCLcB/s1600/AW386483_01.gif" ></div>')
					 	$('h3 > .monkey').show()
					 	setTimeout(function(){
					 	$('.monkey').hide()
					 	$('#answers').show()
					 	}, 5000)
					}
					 else {
					 	e.css("background-color", "red")
					 	$('#answers').hide()
					 	$('h3').append('<div class = "monkey"><img src = "https://2.bp.blogspot.com/-E46xUM32mqQ/WhwcIrEXsyI/AAAAAAAN200/yZ1CjxpR8CEyjxnHZiWqo2soQAPN4BQVwCLcBGAs/s1600/AW648334_19.gif" ></div>')
					 	$('h3 > .monkey').show()
					 	setTimeout(function(){
					 	$('.monkey').hide()
					 	$('#answers').show()
					 	}, 5000)
					 }
					$('#reveal').text(didYouKnow[i]);
				})
		},
		default : function(){
				$('li').css("background-color", "pink")
				$('#reveal').text('')
		},
// 				last : function(x){
// 		      if( i === x.length - 1){
// 			$('#confirm .btn').addClass('hide')
// 		    $('.btn').removeClass('hide')
//   }
// }
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
	$('main').append('<div><img src="https://thumbs.gfycat.com/FatherlyUnfoldedCommongonolek-max-1mb.gif"></div>')

});

 