window.onload = PopulatePage;



function PopulatePage()
{
	var goToRedditButton = document.getElementById('goToReddit');
		
	var btnOptions = document.getElementById('btnOptions');
	
	goToRedditButton.addEventListener('click', function()
	{
			NavigateToReddit();
	}, false);
	
	btnOptions.addEventListener('click', function()
	{
			NavigateToOptions();
	}, false);
}

function NavigateToReddit()
{
	window.open("http://reddit.com");
}

function NavigateToOptions()
{
	chrome.tabs.create({'url': "/options.html" } );
}