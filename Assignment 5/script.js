// Trigger the main getJSON function when button is clicked
$(document).ready(function () {
  $('#seeMyDegrees').click(function () {
    getJSON('degrees.json');
  });
});

// This function gets runs the function to get the JSON file and gvies an alert if an error is returned
// If no error is returned, it initiates the code to parse the JSON and add the elements to the DOM
function getJSON (file) {
  getURL(file, function (content, error) {
    if (error != null) {
      alert(`Failed to fetch file ${file}: ${error}`);
    } else {
      parseJSON(content);
    }
  });
}

// This function gets the JSON file and checks to make sure the error code is acceptable.
function getURL (url, callback) {
  var req = new XMLHttpRequest();
  req.open('GET', url, true);
  req.addEventListener('load', function () {
    if (req.status < 400) {
      callback(req.responseText);
    } else {
      callback(null, new Error('Request failed: ' + req.statusText));
    }
  });

  req.addEventListener('error', function () {
    callback(null, new Error('Network error'));
  });

  req.send(null);
}

// This function parses the JSON and adds the elements to the DOM
function parseJSON (content) {
  if ($('#degreeTable').css('visibility') !== 'visible') {
    const degrees = JSON.parse(content).myDegrees;
    for (const entry of degrees) {
      const newRow = document.createElement('tr');

      const school = document.createElement('td');
      school.innerHTML = entry.degree.school;
      newRow.append(school);

      const major = document.createElement('td');
      major.innerHTML = entry.degree.major;
      newRow.append(major);

      const type = document.createElement('td');
      type.innerHTML = entry.degree.type;
      newRow.append(type);

      const year = document.createElement('td');
      year.innerHTML = entry.degree.year;
      newRow.append(year);

      $('#degreeTable').append(newRow);
      $('#degreeTable').css('visibility', 'visible');
    }
  }
}
