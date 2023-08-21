let posts = fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
function GeneratePosts() {
    const url = window.location.href
    var id = parseInt(url.substring(url.lastIndexOf('=') + 1))
    let UserPosts = [];
    posts.then(Allposts => {
        for (key in Allposts) {
            if (Allposts[key].userId === id) {
                UserPosts.push(Allposts[key])
            }
        }
        let Main = document.querySelector("#main")
        for (key in UserPosts) {
            let postdiv = document.createElement("div")
            postdiv.setAttribute("id", "postdiv")
            let titlediv = document.createElement("div")
            titlediv.setAttribute("id", "titlediv")
            let bodydiv = document.createElement("div")
            bodydiv.setAttribute("id", "bodydiv")
            let text = document.createTextNode(UserPosts[key].title)
            let text1 = document.createTextNode(UserPosts[key].body)
            titlediv.appendChild(text)
            bodydiv.appendChild(text1)
            postdiv.appendChild(titlediv)
            postdiv.appendChild(bodydiv)
            Main.appendChild(postdiv)
        }
    })
}
GeneratePosts()