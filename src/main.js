$('.face,.mouth').hover(() => {
  var txt = `<img src="./images/flash.gif" />`
  var audio = `<audio src="./images/f-18-1-18-27.mp3" autoplay="autoplay"></audio>`
  $('.face').append(txt)
  $('.skin').append(audio)
  setTimeout(() => {
    $('.xxx').addClass('www')
    $('.xxx').removeClass('xxx')
    $('.qqq').addClass('lip')
    $('.qqq').removeClass('qqq')
    $('.eee').addClass('down')
    $('.eee').removeClass('eee')
  }, 200);
}, () => {
  $('.face').find('img').remove()
  $('.skin').find('audio').remove()
  setTimeout(() => {
    $('.www').addClass('xxx')
    $('.www').removeClass('www')
    $('.lip').addClass('qqq')
    $('.lip').removeClass('lip')
    $('.down').addClass('eee')
    $('.down').removeClass('down')
  }, 200);
});

// const fn = () => {
//   setTimeout(() => {
//     if ($('.xxx')[0]) {
//       //       var txt1 = `<div class="lip left"></div>
//       //   <div class="lip right"></div>`
//       //       var txt2 = `<div class="down">
//       //   <div class="yuan1">
//       //     <div class="yuan2"></div>
//       //   </div>
//       // </div>`
//       //       $('.xxx').remove()
//       //       $('.up').append(txt1)
//       //       $('.mouth').append(txt2)
//       $('.xxx').addClass('www')
//       $('.xxx').removeClass('xxx')
//       $('.qqq').addClass('lip')
//       $('.qqq').removeClass('qqq')
//       $('.eee').addClass('down')
//       $('.eee').removeClass('eee')
//       fn()
//     } else {
//       // var txt3 = `<div class="xxx"></div>`
//       // $('.lip').remove()
//       // $('.down').remove()
//       // $('.up').append(txt3)
//       $('.www').addClass('xxx')
//       $('.www').removeClass('www')
//       $('.lip').addClass('qqq')
//       $('.lip').removeClass('lip')
//       $('.down').addClass('eee')
//       $('.down').removeClass('down')
//       fn()
//     }
//   }, 2000)
// }
// // fn()