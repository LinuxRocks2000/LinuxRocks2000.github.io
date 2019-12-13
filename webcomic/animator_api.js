function animate(tck,stp){
  console.log("Started Animate function! (Don't be a dum-dum)");
  setInterval(frame,stp||0);
  var tick=tck||0;
  for (var x=0;x<animation.length;x++){
    var task=animation[x];
    if (task[0]=="offonoff"){
      task[3].style.display="none";
    }
    if (task[0]=="setX"){
      if (Array.isArray(task[4])){
        for (var i=0; i<task[4].length;i++){
          task[4][i].setAttribute("transform","translate("+task[3]+",0)");
        }
      }
      else{
        task[4].setAttribute("transform","translate("+task[3]+",0)");
      }
    }
    if (task[0]=="setY"){
      if (Array.isArray(task[4])){
        for (var i=0; i<task[4].lengths;i++){
          task[4][i].setAttribute("transform","translate(0,"+task[3]+")");
        }
      }
      else{
        task[4].setAttribute("transform","translate(0,"+task[3]+")");
      }
    }
    if (task[0]=="onoff"){
      if (Array.isArray(task[3])){
        for (var i=0; i<task[3].length;i++){
          task[3][i].style.display="block";
        }
      }
      else{
        task[3].style.display="block";
      }
    }
    if (task[0]=="onoffon"){
      task[3].style.display="block";
    }
    if (task[0]=="offon"){
      if (Array.isArray(task[3])){
        for (var i=0; i<task[3].length;i++){
          task[3][i].style.display="none";
        }
      }
      else{
        task[3].style.display="none";
      }
    }
  }
  function frame(){
    var curtasks=[];
    var toend=[];
    var tostart=[]
    for (var x=0;x<animation.length;x++){
      c=animation[x];
      if (c[1]<tick && c[1]+c[2]>tick || c[0]=="flipperforever" || c[0]=="randomflipperforever"){
        curtasks.push(c);
      }
      if (c[1]+c[2]==tick){
        toend.push(c);
      }
      if (c[1]==tick){
        tostart.push(c);
      }
    }

    // Start the tasks
    for (var x=0;x<tostart.length;x++){
      var task=tostart[x];
      if (task[0]=="offonoff"){
        task[3].style.display="block";
      }
      if (task[0]=="onoffon"){
        task[3].style.display="none";
      }
      if (task[0]=="offon"){
        if (Array.isArray(task[3])){
          for (var i=0; i<task[3].length;i++){
            task[3][i].style.display="none";
          }
        }
        else{
          task[3].style.display="none";
        }
      }
      if (task[0]=="off"){
        if (Array.isArray(task[3])){
          for (var i=0; i<task[3].length;i++){
            task[3][i].style.display="none";
          }
        }
        else{
          task[3].style.display="none";
        }
      }
            if (task[0]=="on"){
              if (Array.isArray(task[3])){
                for (var i=0; i<task[3].length;i++){
                  task[3][i].style.display="block";
                }
              }
              else{
                task[3].style.display="block";
              }
            }
            if (task[0]=="off"){
              if (Array.isArray(task[3])){
                for (var i=0; i<task[3].length;i++){
                  task[3][i].style.display="none";
                }
              }
              else{
                task[3].style.display="none";
              }
            }
        if (task[0]=="flip"){
          task[3].setAttribute("transform-origin","center");
          task[3].setAttribute("transform",(task[3].getAttribute("transform")||"")+" scale(-1,1)");
        }
    }

    // Run the tasks
    for (var x=0;x<curtasks.length;x++){
      var task=curtasks[x];
      if (task[0]=="growFade"){
        task[4].setAttribute("transform-origin","center");
        task[4].setAttribute("transform",(task[4].getAttribute("transform")||"")+" scale("+task[3]+","+task[3]+")");
        //task[4].setAttribute("opacity",""+(parseFloat(task[4].getAttribute("opacity"))/task[3]));
      }
      if (task[0]=="moveX"){
        task[4].setAttribute("transform",(task[4].getAttribute("transform")||"")+" translate("+(tick-task[1])*task[3]+",0)");
      }
      if (task[0]=="moveY"){
        task[4].setAttribute("transform",(task[4].getAttribute("transform")||"")+" translate(0,"+(tick-task[1])*task[3]+")");
      }
      if (task[0]=="physics"){
        // The physics task: [type, starttime, endtime, yacc, xres, yv, xv, object, posx (set by computer), posy (set by computer)].
        var reference=animation.indexOf(task);
        animation[reference][5]*=task[4];
        animation[reference][6]+=task[3];
        animation[reference][8]+=task[5];
        animation[reference][9]+=task[6];
        task=animation[reference];
        var action=(task[7].getAttribute("transform")||"")+" translate("+task[8]+","+task[9]+")";
        task[7].setAttribute("transform",action);
      }
      if (task[0]=="splotcher"){
        // [type,start,duration,object,text,textDuration]
        var ct=task[4].length/task[5]*(tick-task[1]);
        task[3].innerHTML=task[4].substring(0,ct);
      }
      if (task[0]=="flipper" || task[0]=="flipperforever"){
        for (var i=0; i<task[3].length; i++){
          if (i==Math.round((tick-task[1])/task[4])%task[3].length){
            task[3][i].style.display="block";
          }
          else{
            task[3][i].style.display="none";
          }
        }
      }
      if (task[0]=="randomflipper" || task[0]=="randomflipperforever"){
        var d=Math.round(Math.random()*(task[3].length-1));
        if (tick%task[4]==0){
          for (var i=0; i<task[3].length; i++){
            if (i==d){
              task[3][i].style.display="block";
            }
            else{
              task[3][i].style.display="none";
            }
          }
        }
      }
      if (task[0]=="bottomcollision"){
        // The collision task: [type, start, duration, bottom, object]
        var rect=task[4].getBoundingClientRect();
        if (rect.bottom>task[3]){
          var push=-1;
          while (rect.bottom>task[3]) {
            push-=1;
            task[4].setAttribute("transform",(task[4].getAttribute("transform")||"")+" translate(0,"+push+")");
          }
        }
      }
    }

    // End the tasks
    for (var x=0;x<toend.length;x++){
      var task=toend[x];
      if (task[0]=="growFade"){
        task[4].style.display="none";
      }
      if (task[0]=="offonoff"){
        task[3].style.display="none";
      }
      if (task[0]=="splotcher"){
        task[3].innerHTML="";
      }
      if (task[0]=="onoffon"){
        task[3].style.display="block";
      }
      if (task[0]=="onoff"){
        if (Array.isArray(task[3])){
          for (var i=0;i<task[3].length;i++){
            task[3][i].style.display="none";
          }
        }
        else{
          task[3].style.display="none";
        }
      }
      if (task[0]=="offon"){
        if (Array.isArray(task[3])){
          for (var i=0;i<task[3].length;i++){
            task[3][i].style.display="block";
          }
        }
        else{
          task[3].style.display="block";
        }
      }
    }
    tick++;
  }
}
