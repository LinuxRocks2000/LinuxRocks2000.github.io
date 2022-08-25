Parse.initialize("9xjMXioZPbkyAxbJWSG4VpFN2orZ1taMj0kYKVUc", "1OpAAKiJumZGibsjQ5eX8g0EkNAKr3cD35XiX3AJ");
Parse.serverURL = "https://parseapi.back4app.com/";
const Comment = Parse.Object.extend('Comment');
var usernamefield=document.getElementById("username");
if (localStorage.username){{
	usernamefield.value = localStorage.username;
}}
var bodyfield=document.getElementById("body");
function post(){{
    _post(usernamefield.value,bodyfield.innerText,{comicnum});
    localStorage.username = usernamefield.value;
}}
function _post(user,body,cmnum){{
    var myNewObject = new Comment();
    myNewObject.set('user', user);
    myNewObject.set('body', body);
    myNewObject.set('comic', cmnum);

    myNewObject.save().then(
        (result) => {{
            document.getElementById("comments-arena").innerHTML="";
            load();
        }},
        (error) => {{
        if (typeof document !== 'undefined') document.write(`Error while creating Comment: ${{JSON.stringify(error)}}`);
      		console.error('Error while creating Comment: ', error);
        }}
    );
}}
function load(){{
    query = new Parse.Query(Comment);
    query.equalTo("comic", {comicnum});
    query.find().then((results) => {{
        arena=document.getElementById("comments-arena");
        results.reverse();
        results.forEach(function(element,index){{
            p4=document.createElement("li");
            p=document.createElement("div");
            p4.appendChild(p);
            pp=document.createElement("p");
            ppp=document.createElement("p");
            arena.appendChild(p4);
            p4.className="comment-listitem";
            ppp.innerText=element.get("body");
            p.className="comment_box";
            pp.className="comment_user_text";
            pp.innerText=element.get("user");
            pp.className="username_p";
            p.appendChild(pp);
            p.appendChild(ppp);
        }});
    }}, (error) => {{
        if (typeof document !== 'undefined') document.write(`Error while fetching Comment data. Please reload this page or submit a bug report to my email address (plupy44@gmail.com)}}`);
    }});
}}
load();

