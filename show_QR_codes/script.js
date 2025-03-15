const render = (guests) => {
    console.log(guests);
    const main = document.getElementById('main');
    // Clear previous content
    main.innerHTML = '';
  
    // Create the table element
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    table.style.width = '100%';
  
    // Create the header row
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
  
    // Create and append "Kod" header
    const thKod = document.createElement('th');
    thKod.textContent = 'Kod';
    thKod.style.border = '1px solid #ddd';
    thKod.style.padding = '8px';
    headerRow.appendChild(thKod);
  
    // Create and append "account" header
    const thAccount = document.createElement('th');
    thAccount.textContent = 'account';
    thAccount.style.border = '1px solid #ddd';
    thAccount.style.padding = '8px';
    headerRow.appendChild(thAccount);
  
    thead.appendChild(headerRow);
    table.appendChild(thead);
  
    // Create the table body
    const tbody = document.createElement('tbody');
  
    // Iterate through guests and create a row for each
    guests.forEach((guest) => {
      const row = document.createElement('tr');
  
      // Code cell
      const cellCode = document.createElement('td');
      cellCode.textContent = guest.code;
      cellCode.style.border = '1px solid #ddd';
      cellCode.style.padding = '8px';
      row.appendChild(cellCode);
  
      // forGreeting cell as account
      const cellAccount = document.createElement('td');
      cellAccount.textContent = guest.forGreeting;
      cellAccount.style.border = '1px solid #ddd';
      cellAccount.style.padding = '8px';
      row.appendChild(cellAccount);
  
      tbody.appendChild(row);
    });
  
    table.appendChild(tbody);
    main.appendChild(table);
  };
  
  fetch('../guestAccessList.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((guests) => {
      render(guests);
    })
    .catch((error) =>
      console.error('There was a problem with the fetch operation:', error)
    );
  