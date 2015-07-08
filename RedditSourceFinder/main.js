// Settings
var settings;

//Pull in stored settings.
GetSettings();

function GetSettings()
{
	chrome.storage.sync.get(
	{
	}, function(items)
	{
		settings = items;
		
		//Start the scanner.
		DOMModificationHandler(); //TODO: Put this in a proper method so a chain is established. This is a execution null fix.
	});
}

//Function is recursive. It will continually subscribe and unsubscribe from the document change event so that it does not get stuck in a loop.
function DOMModificationHandler()
{
	//Remove previous event.
    document.removeEventListener('DOMSubtreeModified', DOMModificationHandler);
	
	//After timeout prevent spoilers and add this function back to the event handlers in case of change.
    setTimeout(function()
	{
		FindSource();
        document.addEventListener('DOMSubtreeModified', DOMModificationHandler);
    }, 50);
}

function FindSource()
{
	
}