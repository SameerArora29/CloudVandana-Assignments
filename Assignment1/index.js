function addRowBottom() {
    var table = document.getElementById("Table1");
    var lastRow = table.rows.length;
    var newRow = table.insertRow(lastRow);
    var newSL = lastRow;
    var newFirstName = "New";
    var newLastName = "Person";
    var newCity = "City";
    var newCountry = "Country";
 
    var newSLCell = newRow.insertCell(0);
    var newFirstNameCell = newRow.insertCell(1);
    var newLastNameCell = newRow.insertCell(2);
    var newCityCell = newRow.insertCell(3);
    var newCountryCell = newRow.insertCell(4);
 
    newSLCell.innerHTML = newSL;
    newFirstNameCell.innerHTML = newFirstName;
    newLastNameCell.innerHTML = newLastName;
    newCityCell.innerHTML = newCity;
    newCountryCell.innerHTML = newCountry;
 
  }
 
  function addRowTop() {
    // Get a reference to the table
    var table = document.getElementById("Table1");
  
    // Get the number of rows in the table
    var rowCount = table.rows.length;
  
    // Create a new row at the top of the table
    var row = table.insertRow(1);
  
    // Insert new cells into the new row
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
  
    // Add data to the new cells
    cell1.innerHTML = 1;
    cell2.innerHTML = "New";
    cell3.innerHTML = "Person";
    cell4.innerHTML = "New City";
    cell5.innerHTML = "New Country";
  
    // Update the SL.No. for all existing rows
    for(var i = 2; i <= rowCount; i++) {
      table.rows[i].cells[0].innerHTML = i;
    }
  }