const Users = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
const table = document.querySelector("#mytable")
function generateTable(table) {
    const div=document.querySelector("#maindiv")
    div.style.width="95vw"
    div.style.height="90vh"
    div.style.display="flex"
    div.style.alignItems="Center"
    div.style.justifyContent="Center"
    const thead = table.createTHead();
    let row = thead.insertRow();
    row.setAttribute("id", "headrow")
    Users.then(data => {
        for (key in data[0]) {
            let th = document.createElement("th")
            let text = document.createTextNode(key.toUpperCase())
            th.appendChild(text)
            row.appendChild(th)
            th.style.border = "1px solid black"
            th.style.backgroundColor = "brown"

        }
        const tbody = table.createTBody();
        for (let i = 0; i < data.length; i++) {
            let row1 = tbody.insertRow();
            row1.setAttribute("id", "datarow")
            for (key in data[i]) {
                let id = data[i].id
                if (key === "address" || key === "company") {
                    for (key1 in data[i][key]) {
                        let td = document.createElement("td")
                        td.setAttribute("id", "user")
                        let text1 = document.createTextNode(data[i][key][key1])
                        td.appendChild(text1)
                        row1.appendChild(td)
                        break
                    }
                }
                else {
                    let td = document.createElement("td")
                    td.setAttribute("id", "user")
                    let text1 = document.createTextNode(data[i][key])
                    td.appendChild(text1)
                    row1.appendChild(td)
                    row1.onclick = function () { window.open(`posts.html?id=${id}`, '_blank') }
                }
            }
        }
        let element = document.querySelectorAll("#user")
        for (let child of element) {
            child.style.cursor = "pointer"
            child.style.border = "1px solid black"
            child.style.backgroundColor = "black"
            child.style.color = "white"
        }
    })
}
generateTable(table)