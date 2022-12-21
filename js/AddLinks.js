const linkContainer = document.getElementById("link-container");

const posthref = "../blogs/";

const posts = [
    {
        dateAdded: "19.12.22",
        link: posthref + "FirstPost.html",
        title: "Post One"
    }
]

let content = "<table>";

for(let i in posts) {
    content += "<tr><td>" + posts[i].dateAdded + "</td>" + "<td>" + '<a href="' + posts[i].link + '">' + posts[i].title + "</a></td></tr>";
}

content += "</table>";

linkContainer.innerHTML = content;