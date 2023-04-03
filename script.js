//your JS code here. If required.
// Select the table element
const table = document.querySelector('table');

// Add a loading row
const loadingRow = table.insertRow();
const loadingCell = loadingRow.insertCell();
loadingCell.colSpan = 2;
loadingCell.textContent = 'Loading...';

// Create an array of three Promises
const promises = [];
for (let i = 1; i <= 3; i++) {
  const promise = new Promise((resolve) => {
    const randomTime = Math.floor(Math.random() * 3000) + 1000;
    setTimeout(() => {
      resolve(randomTime / 1000);
    }, randomTime);
  });
  promises.push(promise);
}

// Wait for all promises to resolve
Promise.all(promises)
  .then((results) => {
    // Remove the loading row
    table.deleteRow(loadingRow.rowIndex);

    // Add the results rows
    for (let i = 0; i < results.length; i++) {
      const row = table.insertRow();
      const nameCell = row.insertCell();
      const timeCell = row.insertCell();
      nameCell.textContent = `Promise ${i + 1}`;
      timeCell.textContent = `${results[i]}`;
    }

    // Add the total row
    const totalRow = table.insertRow();
    const totalNameCell = totalRow.insertCell();
    const totalTimeCell = totalRow.insertCell();
    totalNameCell.textContent = 'Total';
    totalTimeCell.textContent = `${results.reduce((acc, val) => acc + val, 0)}`;
  })
  .catch((error) => {
    console.error(error);
  });
     // Select the table element
const table = document.querySelector('table');

// Add a loading row
const loadingRow = table.insertRow();
const loadingCell = loadingRow.insertCell();
loadingCell.colSpan = 2;
loadingCell.textContent = 'Loading...';

// Create an array of three Promises
const promises = [];
for (let i = 1; i <= 3; i++) {
  const promise = new Promise((resolve) => {
    const randomTime = Math.floor(Math.random() * 3000) + 1000;
    setTimeout(() => {
      resolve(randomTime / 1000);
    }, randomTime);
  });
  promises.push(promise);
}

// Wait for all promises to resolve
Promise.all(promises)
  .then((results) => {
    // Remove the loading row
    table.deleteRow(loadingRow.rowIndex);

    // Add the results rows
    for (let i = 0; i < results.length; i++) {
      const row = table.insertRow();
      const nameCell = row.insertCell();
      const timeCell = row.insertCell();
      nameCell.textContent = `Promise ${i + 1}`;
      timeCell.textContent = `${results[i]}`;
    }

    // Add the total row
    const totalRow = table.insertRow();
    const totalNameCell = totalRow.insertCell();
    const totalTimeCell = totalRow.insertCell();
    totalNameCell.textContent = 'Total';
    totalTimeCell.textContent = `${results.reduce((acc, val) => acc + val, 0)}`;
  })
  .catch((error) => {
    console.error(error);
  });