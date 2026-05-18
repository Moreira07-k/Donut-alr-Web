function getUrlParameter(name) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(window.location.href);
    if (! results) 
      return null;
    if (! results[2]) 
      return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  
  function obterUrlStore(url) {
      const startIndex = url.indexOf('urlStore=') + 9;
      const endIndex = url.indexOf('&');
    
      if (endIndex !== -1) {
        return url.slice(startIndex, endIndex);
      } else {
        return url.slice(startIndex);
      }
    }

  var iframe = document.getElementById("extension_logistica_fullcomm");
  if(!iframe) {
      iframe = document.getElementById("extension");
  }

  var nameParam = getUrlParameter('name');
  var emailParam = getUrlParameter('email');
  
  var urlStore = obterUrlStore(document.currentScript.src);
  if(iframe) {
      if (nameParam && emailParam) {
        iframe.src = `https://extension-logistica.checkstore.app/tracking/${urlStore}/${nameParam}/${emailParam}`;
      } else {
        iframe.src = 'https://extension-logistica.checkstore.app/' + urlStore;
      }
  }
  window.addEventListener("message", function(event) {
    var altura = parseInt(event.data);
    if (!isNaN(altura) && altura > 100) {
      iframe.style.height = (altura + 2) + "px";
    }
  });