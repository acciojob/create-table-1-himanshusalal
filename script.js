function insert_Row() {
    //Write your code here

    // Step 1: Get the table
    let table = document.getElementById("sampleTable");

    // Step 2: Insert new row at top (index 0)
    let row = table.insertRow(0);

    // Step 3: Insert two cells
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    // Step 4: Add text to cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}
  

