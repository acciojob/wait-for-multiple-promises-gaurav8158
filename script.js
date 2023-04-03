//your JS code here. If required.
const tableBody = document.getElementById('output');

// Add a loading row to the table
tableBody.innerHTML = `<tr><td colspan="2">Loading...</td></tr>`;

// Fetch the data from the server
fetch('https://myserver.com/data')
  .then(response => response.json())
  .then(data => {
    // Remove the loading row from the table
    tableBody.innerHTML = '';

    // Loop through the data and populate the table rows
    data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${item.promiseName}</td><td>${item.timeTaken}</td>`;
      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error(error);
    // Display an error message in the table
    tableBody.innerHTML = `<tr><td colspan="2">An error occurred while fetching the data</td></tr>`;
  });