// Settings
var settings;

var phrases = ["Source", "Video", "Here"];

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
	window.onload = FindSource;
}

function FindSource()
{
	var paragraphs = document.getElementsByTagName("p");
	
	for (var i = 0; i < paragraphs.length; i++)
	{
		var links = paragraphs[i].getElementsByTagName("a");
		
		for (var l = 0; l < links.length; l++)
		{
			GetConfidencePercentage(links[l].innerHTML, links[l].href);
		}
	}
}

function AddSauce(url)
{
	var siteTable = document.getElementById("siteTable");
	
	var entry = siteTable.getElementsByClassName("entry")[0];
	
	var node = document.createElement("img");
	node.src = chrome.extension.getURL("sauce.png");
	node.style.height = "32px";
	node.style.padding = "5px";
	node.style.cssFloat = "left";
	
	node.onclick = function()
	{ //attach click event to link
        window.open(url);
    }
	
	entry.appendChild(node);
}

function GetConfidencePercentage(paragraph, url)
{
	var words = paragraph.split(' ');
	
	for (var p = 0; p < phrases.length; p++)
	{
		for (var i = 0; i < words.length; i++)
		{
			var occurence = CountStringOccurences(words, phrases[p]);
			console.log(occurence);
			
			if (occurence > 0)
			{
				AddSauce(url);
			}
		}
	}
}

function CountStringOccurences(array, valueToLookFor)
{
	var occurences = 0;
	
	for (i = 0; i < array.length; i++)
	{
		if (array[i].toUpperCase() == valueToLookFor.toUpperCase())
			occurences++;
	}
	
	return occurences;
}