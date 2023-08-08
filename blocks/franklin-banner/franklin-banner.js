fetch('/demosheet.json', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
   .then(response => response.json())
   .then(response => createTable((JSON.stringify(response))));

function createTable(json){
    let divElement = document.querySelectorAll("div.franklin-banner")[0];
    let table = document.createElement("table");
    for (let i of JSON.parse(json).data) {
        let item = document.createElement("tr");
        item.innerHTML = "<td>"+i.A+"</td><td>"+i.B+"</td><td>"+i.C+"</td><td>"+i.D+"</td>";
        table.appendChild(item);
      }
      divElement.appendChild(table);
}