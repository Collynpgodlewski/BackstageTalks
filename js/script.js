// 834px

$(document).ready(function(){

//     console.log("ready")
//     var vis = $('.content-container').is(':visible');
//     console.log(vis)
//    console.log($('.content-container:visible'))

    console.log($('#container').height())
  $('#container').height(function(index, currentheight){
    $('#container').on('scroll', function(){

        console.log(currentheight)
    })
    
  }) 
    
})