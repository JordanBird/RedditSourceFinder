document.addEventListener('DOMContentLoaded', SetupPage);

// Saves options to chrome.storage
function save_options()
{
	chrome.storage.sync.set(
	{
		
	}, function()
	{
		// Update status to let user know options were saved.
		var status = document.getElementById('status');
		status.textContent = 'Options saved. Please refresh any open Reddit.com pages for chanegs to take effect.';
		setTimeout(function() {
		status.textContent = '';
    }, 2000);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options()
{
	chrome.storage.sync.get(
	{

	}, function(items)
	{

  });
}

function SetupPage()
{
	restore_options();
	document.getElementById("save").addEventListener('click', save_options);
	SetOnChangeFunctions();
}

function ToggleClassSettings(className, checked)
{
	var elements = document.getElementsByClassName(className);
	
	for (i = 0; i < elements.length; i++)
	{
		try
		{
			elements[i].checked = checked;
		}
		catch (e) { }
	}
}

function SetOnChangeFunctions()
{

}