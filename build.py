import os
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
    
print("Build completed successfully.")
open("NewFile.txt","w+").close()
