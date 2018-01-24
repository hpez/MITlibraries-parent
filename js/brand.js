$(function(){

// cookie set-up from PPK https://www.quirksmode.org/js/cookies.html
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

  // What variable are we using to store toggle status?
  var toggle = 'brand_closed';

  // This checks if the user has already closed the branding header.
  // If localStorage
  if (Modernizr.localstorage) {
    // Check for the localStorage alert ID item
    if (localStorage.getItem(toggle) === 'true') {
      $('.brand-splash').removeClass('big').addClass('compact');
    } 
  } else {
  	var c = readCookie(toggle);
  	if (c == 'true') {
  		$('.brand-splash').removeClass('big').addClass('compact');
  	} 
  }

	$('.btn-minimize').click(function(){
		$('.brand-splash').removeClass('big').addClass('compact');
		if (Modernizr.localstorage) {
		  // Set the localStorage item, using the post ID
		  localStorage.setItem(toggle, 'true');
		} else {
			createCookie(toggle,'true',99999);		
		}
		return false;
	});




});
