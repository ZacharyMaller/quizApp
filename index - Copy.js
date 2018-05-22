


var questionsDefined = [{
  
  
    Question: 'During what year was Nintendo founded?',
    
    Choices: ['1933', '1976', '1889', '1964'],
    
    Answer: '1889',
    
    Explanation:
      'Nintendo was originally founded as a playing card company by Fusajiro Yamauchi on 23 September 1889.',
   

   imgSource:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/2000px-Nintendo.svg.png',

   imgCss:'200px',

   alt: ' What was Nintendo originally'
  },
  {
    Question: "Which of the following is a Tony Hawk's Pro Skater Game?",
    Choices: [
      'Abandoned Wasteland',
      'American Wasteland',
      'Animal Wasteland',
      'Accidental Wasteland',
    ],
    Answer: 'American Wasteland',

    Explanation:
      "Tony Hawk's American Wasteland is a sports video game that was released for GameCube, PlayStation 2 and Xbox on October 18, 2005 in North America and October 28, 2005 in Europe. An Xbox 360 version was released a month later on November 22, 2005 in North America and December 2, 2005 in Europe as a launch title and a Microsoft Windows port was issued on February 6, 2006 in North America and April 7, 2006 in Europe.",
  
    

    imgSource:'https://upload.wikimedia.org/wikipedia/en/6/63/Tony_Hawk%27s_American_Wasteland_coverart.jpg', 
    
    imgCss: '300px',

    alt: "Tony hawk's American Wasteland",

  },
  {
    Question:
      'What is the name of the main villain in the original Legend of Zelda?',
    Choices: ['Ganondwarf', 'Gannondorf', 'Ganondorf', 'Ganondarf'],

    Answer: 'Ganondorf',

  
    Explanation:
      'The Legend of Zelda is an action-adventure video game developed and published by Nintendo and designed by Shigeru Miyamoto and Takashi Tezuka in the year 1986.',


   imgSource: 'https://vignette.wikia.nocookie.net/zelda/images/a/a8/Ganondorf_Ocarina_of_Time_Costume_%28Hyrule_Warriors%29.png/revision/latest?cb=20151216040032',


    imgCss: '300px',

    alt: 'Main Villain in Zelda',

  },
  {
    Question: 'What company created the orignal Halo games?',

    Choices: ['Bungie', 'Antler Corp', 'Steamboat Productions', 'Lava studios'],

    Answer: 'Bungie',

    Explanation:
      'Halo (series) Halo is a military science fiction first-person shooter video game franchise created by Bungie in 2001, and now managed and developed by 343 Industries, a subsidiary of Microsoft Studios.',
  
    imgSource: 'https://orig00.deviantart.net/072c/f/2016/322/1/9/halo_combat_evolved___icon_by_blagoicons-daosyh9.png',
    
    imgCss: '350px',

    alt: 'Company that created Halo',


  },

  {
    Question: "What was Mario's original profession?",

    Choices: ['Plumber', 'Electrician', 'Mechanic', 'Carpenter'],

    Answer: 'Carpenter',

    Explanation:
      'Mario was at one time a plumber, but even earlier than that he was a carpenter.',

    imgSource: 'https://vignette.wikia.nocookie.net/fantendo/images/6/6f/MarioSMRS.png/revision/latest?cb=20171203234053',
      
    imgCss: '300px',

    alt: 'Mario original profession',
  },

  {
    Question: 'Who is not a character in the Super Smash Bros. Series?',

    Choices: ['Mr. Game and Watch', 'Marth', 'Beetlejuice', 'Olimar'],

    Answer: 'Beetlejuice',


    Explanation:
      'Beetlejuice is not a character from the Super Smash Bros. Series.',

    imgSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWphG0azZgAV0THr4r2lBpWxWcXuKMv4mdndpL_oMMBu3tsXEPYA',
  
    imgCss: '300px',


    alt: 'Super Smash Bros characters',

      },

  {
    Question: "Who is Trunks's father in Dragonball Z?",

    Choices: ['Vegeta', 'Piccolo', 'Goku', 'Master Roshi' ],

    Answer: 'Vegeta',

    Explanation: 'Trunks is the son of Vegeta (Father) and Bulma (Mother).',

    imgSource: 'https://www.episodegenerator.com/wp-content/uploads/Dragon-Ball-Z-Style-Wallpaper.jpg',

    imgCss: '450px',

    alt: "Trunk's father in Dragonball Z",

   
  },
  {
    Question: 'Which of the following is not a character from Naruto?',

    Choices: ['Sasuke', 'Rock Lee', 'Gaara', 'Fujimoto'],

    Answer: 'Fujimoto',

    Explanation:
      'fujimoto is not a character from Naruto, a Japanese manga series written and illustrated by Masashi Kishimoto.',


    imgSource: 'https://ibhuluimcom-a.akamaihd.net/ib.huluim.com/show/1304?region=US&size=952x536',

      
    imgCss: '200px',

    alt: 'Naruto Characters',

  },
  
  {
    Question: 'Super Mario DS is a remake of what poular Nintendo 64 game?',

    Choices: ['Super Mario Plus', 'Super Mario 64', 'Super Mario Ages', 'Super mario Worlds',],

    Answer: 'Super Mario 64',

    Explanation:
      'None of the above are games except Super Mario 64.  Hence, that must be the answer.',

    imgSource:'https://webgames.host/uploads/2017/06/super-mario-64.png',

    imgCss: '300px',

    alt: 'Super Mario DS',
      
      
  },
  {
    Question: 'What animal is Donkey Kong?',

    Choices: ['Donkey', 'Cow', 'Ape', 'Bear'],
    
    Answer: 'Ape',
    
    Explanation:'Donkey Kong, along with much of his family and friends are Apes.',
  
    imgSource:'http://www.smashbros.com/wiiu-3ds/images/character/donkey_kong/main.png',

    imgCss: '300px',

    alt: 'Donkey Kong',


}
];


var currentQuestion = 0;
function loadQuestion(questionNum) {
  $('#next').hide();
  $('#questions').text('Question '+ (currentQuestion + 1));
  $('#questions1').text(questionsDefined[questionNum].Question);
  
}

function loadChoices(options) {
  var choices=questionsDefined[options].Choices;
  $('label[for="choice1"]').text(choices[0]);
  $('label[for="choice2"]').text(choices[1]);
  $('label[for="choice3"]').text(choices[2]);
  $('label[for="choice4"]').text(choices[3]);
  $('input').prop('checked', false);
}

$('#submitButton').on('click', function (event) {
  event.preventDefault();
  $('#results').show()
  var input1 = $('input[name="choicer"]');
  $('input[name="choicer"]').each( function(index, element){
     console.log(element);
    if($(element).prop('checked')){
      var text= $('label[for="choice'+(index + 1) +'"]').text();
      var correctAnswer = questionsDefined[currentQuestion].Answer;
      
      if (text===correctAnswer){
        score++;
        $('#results').text('correct');
      }      
        if (text!== correctAnswer){
        score--;
        $('#results').text('incorrect');
        $('#results3').text('The Correct Answer is '+ questionsDefined[currentQuestion].Answer);
        $('#results3').show();
      }  
      $('restart').on('click', function (event){
        event.preventDefault();
        score === 0;
      });
    }
  });    
  $('#results2').text('current score = '+ score);
});

$ ("#finalScore").hide();
$("#submitButton").click(function(){
  $('#next').show();
  $('#submitButton').hide();
  console.log(currentQuestion, questionsDefined.length)
  if(currentQuestion === questionsDefined.length-1){
    $("#finalScore").show();
  } 
});
var score = 0;

loadQuestion(currentQuestion);
loadChoices(currentQuestion);

$('#hidden').hide();
$('#start').show();
$('#start').on('click', function(){
  $('#hidden').show();
  $('#start').hide();
  $('.images').hide();
});
  

$('#submitButton').on('click', function(){
  let exp = questionsDefined[currentQuestion].Explanation;

  var imgDefine= $('<img id="dynamicImg">').attr('src', questionsDefined[currentQuestion].imgSource);
  $('#dynamicImg').remove();
  $('#imgContainer').append(imgDefine);
  $('#dynamicImg').hide();
  $('#dynamicImg').on('load', function(){
    $(this).css('width', questionsDefined[currentQuestion].imgCss);
    $(this).attr('alt', questionsDefined[currentQuestion].alt);
    $(this).show(500);
  
  });
  $('#explanations').text(exp);
});
     
function goToNextQuestion(){
  $('#next').on('click', function(event){
    event.preventDefault();

    $('#dynamicImg').hide();
    currentQuestion++;
    $('#results3').hide();
    $('#results').hide();
    loadQuestion(currentQuestion);
    loadChoices(currentQuestion);
    $('#explanations').text('');
    $('#submitButton').show();
  });
}

function hideExplanation(){
  $('#explanations').hide();
}

function finalScore(){
  $('#finalScore').on('click', function (event){
    event.preventDefault();
    $('#restart').show()
    $('#hidden').hide();
    $('#score').text('Your Score is ' + score);
   
  })
}

function restartGame(){

  $('#restart').on('click', function(e){
    e.preventDefault();
    score=0;
    currentQuestion=0
    loadQuestion(currentQuestion);
    loadChoices(currentQuestion);
    $('#results2').text('current score = '+ score);
    $('#results').text('');
    $('#explanations').text('');
    $('#dynamicImg').hide();
    $('#submitButton').show();

  });
}
goToNextQuestion();
restartGame();
finalScore();
      