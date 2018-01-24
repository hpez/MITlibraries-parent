$(function(){

// cookie set up from PPK https://www.quirksmode.org/js/cookies.html
  function createCookie(name,value,days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
  }

  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }

  function eraseCookie(name) {
    createCookie(name,"",-1);
  }

  var splashStatus = readCookie('brand_closed');
  if (splashStatus == 'true') {
  	$('.brand-splash').removeClass('big').addClass('compact');
  } 

	$('.btn-minimize').click(function(){
		$('.brand-splash').removeClass('big').addClass('compact');
		createCookie('brand_closed','true',99999);
		return false;
	});




});
