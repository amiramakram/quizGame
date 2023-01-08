function audioo() {
    var icon = document.getElementById("sound");
    if (icon.getAttribute('type') == 'off') {
        icon.setAttribute('type','on')
         icon.setAttribute('class','fa-solid fa-volume-high');
    }
    else {
        icon.setAttribute('type','off');
        icon.setAttribute('class','fa-solid fa-volume-xmark');
    }
}


























// const questions = [
//   {
//     question: 'What does the abbreviation HTML stand for?',
//     answers: [
//       { text: 'HTML stands for HyperText Markup Language.', correct: true },
//       { text: 'HighText Markup Language.', correct: false },
//       { text: 'HyperText Markdown Language.', correct: false },
//       { text: 'None of the above.', correct: false }
//     ]
//   },
//   {
//     question: 'There are ___ levels of heading in HTML',
//     answers: [
//       { text: 'Three', correct: false },
//       { text: 'Four', correct: false },
//       { text: 'Five', correct: false },
//       { text: 'Six', correct: true }
//     ]
//   },
//   {
//     question: 'html document have a extension ______',
//     answers: [
//       { text: '.htx or .htxl', correct: false },
//       { text: '.htm or .html', correct: true },
//       { text: '.hmt or hmtl', correct: false },
//       { text: 'none of the above', correct: false }
//     ]
//   },
//   {
//     question: 'Which one is the HTML document’s root tag?',
//     answers: [
//       { text: '<head>', correct: false },
//       { text: '<title>', correct: false },
//       { text: '<html>', correct: true },
//       { text: '<document>', correct: false }
//     ]
//   },
//     {
//     question: 'What tag is used to display a picture in a HTML page?',
//     answers: [
//       { text: 'picture', correct: false },
//       { text: 'img', correct: true },
//       { text: 'image', correct: false },
//       { text: 'src', correct: false }
//     ]
//   },
//     {
//     question: 'To create HTML page, you need _____',
//     answers: [
//       { text: 'Web browser', correct: false },
//       { text: 'text editor', correct: false },
//       { text: 'Both [A] and [B]', correct: true },
//       { text: 'None of the above', correct: false }
//     ]
//   },
//    {
//     question: '<a> and </a> are the tags used for ______',
//     answers: [
//       { text: 'Adding image', correct: false },
//       { text: 'Aligning text', correct: false },
//       { text: 'Audio-voiced text', correct: false },
//       { text: 'Adding links to your page', correct: true }
//     ]
//   },
//    {
//     question: 'What does the <br> tag add to your webpage?',
//     answers: [
//       { text: 'Long break', correct: false },
//       { text: 'Paragraph break', correct: false },
//       { text: 'Line break', correct: true },
//       { text: 'None of the above', correct: false }
//     ]
//   },
//    {
//     question: 'To create HTML page, you need _____',
//     answers: [
//       { text: 'Web browser', correct: false },
//       { text: 'text editor', correct: false },
//       { text: 'Both [A] and [B]', correct: true },
//       { text: 'None of the above', correct: false }
//     ]
//   }
// ]