Parse.initialize("9xjMXioZPbkyAxbJWSG4VpFN2orZ1taMj0kYKVUc", "1OpAAKiJumZGibsjQ5eX8g0EkNAKr3cD35XiX3AJ");
Parse.serverURL = "https://parseapi.back4app.com/";
const Comment = Parse.Object.extend('Comment');
function post(user,body,cmnum){{
    var myNewObject = new Comment();
    myNewObject.set('user', 'A string');
    myNewObject.set('body', 'A string');
    myNewObject.set('comic', 1);

    myNewObject.save().then(
        (result) => {{
        load()
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
        results.forEach(function(element,index){{
            p4=document.createElement("li");
            p=document.createElement("div");
            p4.appendChild(p);
            pp=document.createElement("p");
            ppp=document.createElement("p");
            arena.appendChild(p4);
            ppp.innerText=element.get("body");
            p.className="comment_box";
            pp.className="comment_user_text";
            pp.innerText=element.get("user");
            p.appendChild(pp);
            p.appendChild(ppp);
        }});
    }}, (error) => {{
        if (typeof document !== 'undefined') document.write(`Error while fetching Comment data. Please reload this page or submit a bug report to my email address (plupy44@gmail.com)}}`);
    }});
}}
load();
