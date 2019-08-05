// $("input[type='text']").on("input", function () {
//   canChangeColor();
// });
//
//
// function canChangeColor(){
//
//   var can = true;
//
//   $("input[type='text']").each(function(){
//      if($(this).val()==''){
//         can = false;
//      }
//   });
//
//   if(can){
//     $('.modal-submit').css({background:'rgba(33, 217, 137, 0.9)'})
//   }else{
//     $('.modal-submit').css({background:'rgba(33, 217, 137, 0.2)'})
//   }
//
// }

$(".mandatoryfields").on("keyup", function () {
    if($(this).val()==''){
    $('.btn').css({background:'rgba(33, 217, 137, 0.2)'})
  }
else{
    $('.btn').css({background:'rgba(33, 217, 137, 0.9)'})
  }

});

function expand_recent(id){
  var element = document.getElementById(id);
  element.style.display = none;
  alert("hi");
  // if (element.style.display != none){
  //   element.style.display = none;
  // } else {
  //   element.style.display = 'block';
  // }
}


jQuery(function($) {
  $('#swapLetters').on('click', function() {
    var $el = $(this),
      textNode = $el.find('.letters');
    $el.find('.recent-swap').toggleClass('fa-arrow-right fa-arrow-down');
    textNode.nodeValue = 'Faf';
    // textNode.nodeValue = ($el.hasClass('letters') ? 'Recent' : 'History')
    // document.getElementById("letters").innerHTML = ($el.hasClass('letters') ? 'Recent' : 'History');
    $el.toggleClass('recent-swap');
  });
});


function fafcity(id){
  document.getElementsByClassName("unread-text").style['font-weight'] = '300';
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


window.dotsGoingUp = true;
    var dots = window.setInterval( function() {
        var wait = document.getElementById("wait");
        if ( window.dotsGoingUp )
            wait.innerHTML += " . ";
        else {
            wait.innerHTML = wait.innerHTML.substring(2, wait.innerHTML.length);
            if ( wait.innerHTML === "")
                window.dotsGoingUp = true;
        }
        if ( wait.innerHTML.length > 8 )
            window.dotsGoingUp = false;



        }, 200);
