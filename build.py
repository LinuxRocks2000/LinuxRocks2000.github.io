import os
from git import Repo
print("No errors. Begin python build.")
pages=os.listdir(path="pages/")
for x in pages:
    file=open("pages/"+x,"r")
    new="""
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <div id="main-content">
            """+file.read()+"""
        </div>
    </body>
</html>
"""
    print(x+".html")
    newfile=open(x+".html","w+")
    newfile.write(new)
    file.close()
    newfile.close()
print("Built file. Pushing git.")

repo=Repo(r"/home/awesome/desk/programs/web-based/github-pages/LinuxRocks2000.github.io")
repo.git.add(update=True)
repo.index.commit("Updating my webcomic from an automated build helper I scripted in python")
origin=repo.remote(name="origin")
origin.push()
    
print("Build completed successfully.")
