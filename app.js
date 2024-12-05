var quiz = {
    user: "Dave",
    questions: [
       {
          text: "<title> qaysi element ichida buladi",
          responses: [
             { text: "<body> element ichida" },
             { text: "<head> element ichida", correct: true },
             
          ]
       },
       {
          text: "HTML tuliq yozilgan qismi toping",
          responses: [
             { text: "Hyper Text Markup Language", correct: true },
             { text: "Hyper Text Modul Language" },
             { text: "Hyper Test Markup Language" },
             { text: "Hyperlink Markup Language" }
          ]
       },
       {
          text: "<style> tegidan qayerda foylanamiz ?",
          responses: [
             { text: "Faqat <body> elementi ichida" },
             { text: "Faqat <head> elementi ichida", correct: true },
             { text: "<body> ning ham <head> ning ham ichida" },
             
          ]
       },
       {
          text: "<h3> eng katta sarlavha tegidir.",
          responses: [
             { text: "Xa", correct: true },
             { text: "Yoq" },
             
          ]
       },
       {
          text: "Yangi paragraf uchun qaysi HTML tegi toʻgʻri?",
          responses: [
             { text: "<paragraph>" },
             {
                text: "<pre>"
             },
             { text: "<p>", correct: true },
             
          ]
       },
       {
          text:
             "<img> tegi ichidagi rasmning joylashuviga havola qilish uchun HTML atributi nima?",
          responses: [
             { text: "src" , correct: true },
             { text: "href" },
             { text: "location"},
             { text: "link" }
          ]
       },
       {
          text: "Qaysi teg foydalanuvchi katta hajmdagi matn kiritishi mumkin bo'lgan shakl maydonini bildiradi? ",
          responses: [
             { text: "<textarea>", correct: true },
             { text: "<button>" },
             {
                text: "<a>"
             },
             { text: "<label>" }
          ]
       },
       {
          text: "Jadval qatorini yaratish uchun qaysi HTML tegidan foydalaniladi?",
          responses: [
             { text: "<tr>" , correct: true  },
             { text: "<td>"},
             { text: "<th>" },
             { text: "<table>" }
          ]
       },
       {
          text:
             "Raqamlangan ro'yxatni yaratish uchun qaysi HTML tegidan foydalaniladi?",
          responses: [
             {
                text: "<ul>"
             },
             { text: "<li>" },
             { text: "<ol>", correct: true },
             { text: "<dl>" }
          ]
       },
       {
          text: "<p> tegi inline elementmi yoki block elementmi ?",
          responses: [
             { text: "inline element" },
             { text: "block element", correct: true },
            
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
