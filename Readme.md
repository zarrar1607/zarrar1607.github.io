# TRM Exam Website:

The idea is to create a exam website where the data will be stored in google sheets. Inorder to do so, I am going to use technolgies like:

1. HTML
2. BOOTSTRAP CDN
3. JQuerry CDN
4. JavaScript

# Structure of Files

<table>
<tr>
<td>index.html</tr>
</tr>
<tr>
<td>success.html</td>
</tr>
<tr>
<td>stylesheets</td>
</tr>
<tr>
<td></td>
<td>main.css</td>
</tr>
<tr>
<td>cse</td>
</tr>
<tr>
<td></td>
<td>cse-2-alpha.html</td>
</tr>
<tr>
<td></td>
<td>cse-1-beta.html</td>
</tr>
<tr>
<td></td>
<td>...</td>
</tr>
<tr>
<td>images</td>
</tr>

<dl>index.html:
<dd>This is main cover page of the website</dd>
</dl>
<dl>success.html:
<dd>This page shows up only when the user is done with the exam </dd>
</dl>
<dl>main.css:
<dd>This file provides us with the styling of cover page and success page</dd>
</dl>
<dl>cse:
<dd>This is folder stores all the question papers. One of the question paper is selected based on the input provided by user in cover page. Eg: User is in 2nd year and prefered field is programming then the question paper will be either cse-2-alpha.html or cse-2-beta.html, as alpha beta are 2 sets and are decided randomly</dd>
</dl>
<dl>images:
<dd>The background gif of cover page and success page is stored in this folder</dd>
</dl>

# Submiting a form to Google Sheets


### First, Create the Spreadsheet

1. Go to [Google Sheets](https://docs.google.com/spreadsheets) and `Start a new spreadsheet` with the `Blank` template. Disclaimer: It doesn't really matter how you name the file.
2. On the first row, write column names and note that these name should match with the input name tag in the form.


### Create a Google Apps Script

1. Click on `Tools > Script Editor…` which should open a new tab.
2. Name the script `Submit Form to Google Sheets` or however you want for you to remember what the script does.
3. Delete the `function myFunction() {}` block withing the `Code.gs` tab.
4. Paste the following script in its place and `File > Save`:

```
var sheetName = 'Sheet1'
var scriptProp = PropertiesService.getScriptProperties()

function intialSetup () {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost (e) {
  var lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
    var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    var sheet = doc.getSheetByName(sheetName)

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    var nextRow = sheet.getLastRow() + 1

    var newRow = headers.map(function(header) {
      return header === 'timestamp' ? new Date() : e.parameter[header]
    })

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
  }
}
```


### Run the setup function

1. Now, go to `Run > Run Function > initialSetup` to run this function.
2. In the `Authorization Required` dialog, click on `Review Permissions`.
3. Sign in or pick the Google account associated with this project.
4. You should see a dialog that says `Hi {Your Name}, Submit Form to Google Sheets wants to...`
5. Then click `Allow`


### Add a new project trigger

1. Click on `triggers > Current project’s triggers`.
2. In the dialog click `No triggers set up. Click here to add one now`.
3. In the dropdowns select `doPost`
4. Set the events fields to `From spreadsheet` and `On form submit`
5. Then click `Save`

### Publish the project as a web app

1. Click on `Deploy > Deploy as web app…`.
2. Set `Project Version` to `New` and put `initial version` in the input field below.
3. Leave `Execute the app as:` set to `Me(your@address.com)`.
4. For `Who has access to the app:` select `Anyone, even anonymous`.
5. Click `Deploy`.
6. In the popup, copy the `Current web app URL` from the dialog.
7. And click `OK`.

### Input your web app URL

Open the file named `index.html`. On line 7 replace `<SCRIPT URL>` with your script url:

```
<form name="submit-to-google-sheet">
  <input name="email" type="email" placeholder="Email" required>
  <button type="submit">Send</button>
</form>

<script>
  const scriptURL = '<SCRIPT URL>'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
</script>
```

As you can see, this script uses the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), a fairly new promise-based mechanism for making web requests. It makes a "POST" request to your script URL and uses [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) to pass in our data as URL parameters.


### Adding form data

To capture data, you'll just need to create new columns with titles matching exactly the `name` values from your form inputs. For example, if you want to add first and last name inputs, you'd give them `name` values like so:

```
<form name="submit-to-google-sheet">
  <input name="email" type="email" placeholder="Email" required>
  <input name="firstName" type="text" placeholder="First Name">
  <input name="lastName" type="text" placeholder="Last Name">
  <button type="submit">Send</button>
</form>
```

Credits ❤️ :[https://dev.to/omerlahav/submit-a-form-to-a-google-spreadsheet-1bia](https://https://dev.to/omerlahav/submit-a-form-to-a-google-spreadsheet-1bia)
