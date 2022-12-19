const linkContainer = document.getElementById("link-container");

const posthref = "../posts/";

const posts = [
    {
        dateAdded: "19.12.22",
        link: posthref + "PostOne.html",
        title: "Post One"
    },
    {
        dateAdded: "19.12.22",
        link: posthref + "PostTwo.html",
        title: "Post Two"
    }
]

let content = "<table>";

for(let i in posts) {
    content += "<tr><td>" + posts[i].dateAdded + "</td>" + "<td>" + '<a href="' + posts[i].link + '">' + posts[i].title + "</a></td></tr>";
}

content += "</table>";

linkContainer.innerHTML = content;