var quiz = {
    user: "Dave",
    questions: [
       {
          text: "1/10 background-reapet hosasi nima uchun ishlatiladi ?",
          responses: [
             { text: "Rasm moslashtirishda ishlatiladi." },
             { text: "Rasm takrorlanmasligi uchun", correct: true },
             
          ]
       },
       {
          text: "2/10 Rasm formati nechi turga bulinadi ?",
          responses: [
             { text: "3", correct: true },
             { text: "4" },
             { text: "2" },
             { text: "6" }
          ]
       },
       {
          text: "3/10 object-fit hosasi nima vazifani bajaradi ?",
          responses: [
             { text: "Rasm xiraligidan asraydi" },
             { text: "Rasmni formatini tug'irlaydi ", correct: true },
             { text: "Rasmni kichkina qiladi" },
             
          ]
       },
       {
          text: "4/10 Nechi xil selector bor ?",
          responses: [
             { text: "3"},
             { text: "5", correct: true },
             { text: "4"},
             { text: "6"},
             
          ]
       },
       {
          text: "5/10 Htmlga nechi xil yul bilan css ulashimiz mumkin",
          responses: [
             { text: "4 xil " },
             {
                text: "2 xil"
             },
             { text: "3 xil", correct: true },
             
          ]
       },
       {
          text:
             "6/10 Table da qator ochishimiz uchun qaysi tegdan foydalanamiz ?",
          responses: [
             { text: "tr" , correct: true },
             { text: "td" },
             { text: "th"},
             { text: "tb" }
          ]
       },
       {
          text: "7/10 Position relative nima qilib beradi",
          responses: [
             { text: "Elementni boshqa element ustiga chiqarishda ishlatiladi", correct: true },
             { text: "Elementni surishda ishlatiladi" },
             {
                text: "Elementni garizantal surishda ishlatiladi"
             },
            
          ]
       },
       {
          text: "8/10 Float nima vazifani bajarib beradi ?",
          responses: [
             { text: "Elementni chapga yoki unga utgizishda ishlatiladi" , correct: true  },
             { text: "Elementni urtaga utgizib beradi"},
             { text: "Elementni tepadan pastga utgizib beradi"}, 
          ]
       },
       {
          text:
             "9/10 Inline elementni block qilolamizmi ?",
          responses: [
             { text: "xa", correct: true},
             { text: "yoq" },
             
          ]
       },
       {
          text: "10/10 Transform Skew nima vazifa bajaradi ?",
          responses: [
             { text: "Elementni chapdan unga surib beradi"},
             { text: "Elementni oldi va orqa tomonga surib beradi", correct: true },
            
          ]
         }
    ]
 },
 userResponseSkelaton = Array(quiz.questions.length).fill(null);

var app = new Vue({
 el: "#app",
 data: {
    quiz: quiz,
    questionIndex: 0,
    userResponses: userResponseSkelaton,
    isActive: false
 },
 filters: {
    charIndex: function(i) {
       return String.fromCharCode(97 + i);
    }
 },
 methods: {
       restart: function(){
               this.questionIndex=0;
               this.userResponses=Array(this.quiz.questions.length).fill(null);
       },
    selectOption: function(index) {
       Vue.set(this.userResponses, this.questionIndex, index);
       //console.log(this.userResponses);
    },
    next: function() {
       if (this.questionIndex < this.quiz.questions.length)
          this.questionIndex++;
    },

    prev: function() {
       if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function() {
       var score = 0;
       for (let i = 0; i < this.userResponses.length; i++) {
          if (
             typeof this.quiz.questions[i].responses[
                this.userResponses[i]
             ] !== "undefined" &&
             this.quiz.questions[i].responses[this.userResponses[i]].correct
          ) {
             score = score + 1;
          }
       }
       return score;

      //return this.userResponses.filter(function(val) { return val }).length;
    }
 }
});
