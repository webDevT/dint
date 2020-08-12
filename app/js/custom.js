


function loadScript(url)
{    
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = url;
	head.appendChild(script);
}		
loadScript('js/bootstrap.min.js');
loadScript('js/jquery.menu-aim.js');
loadScript('js/main.js');



