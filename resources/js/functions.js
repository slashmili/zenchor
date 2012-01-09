var scale = 1;
function drawTrapezoidal5(ctx, color, num, canvas, x, y){
    ctx.fillStyle = color;
    ctx.beginPath();
    max_width = (x - 7* scale + 3 * scale  ) /2;
    max_height = (y + 16 * scale   ) /2;

    ctx.moveTo(x + 0 * scale , y + 0 * scale );
    ctx.lineTo(x + 6 * scale , y + 0 * scale );
    ctx.lineTo(x + 9 * scale , y + 3 * scale );
    ctx.lineTo(x + 9 * scale , y + 8 * scale );

    ctx.lineTo(x + 6 * scale , y + 11 * scale );
    ctx.lineTo(x + 0 * scale , y + 11 * scale );

    ctx.lineTo(x + - 3 * scale , y + 8 * scale );

    ctx.lineTo(x + - 3 * scale , y + 3 * scale );

    ctx.fill();
    ctx.font = "bold " + (8 * scale) + "px sans-serif";
    ctx.fillStyle = 'white';
    if (num.length == 1) 
        num = "0" + num;
    ctx.fillText(num, max_width, max_height);
    ctx.fillStyle = 'navy';


}

function drawTrapezoidal4(ctx, color, num, canvas, x, y){
    ctx.fillStyle = color;
    ctx.beginPath();
        max_width = (x - 8* scale + 12 * scale  ) /2;
    max_height = (y + 16.5 * scale   ) /2;

    ctx.moveTo(x + 0 * scale , y + 0 * scale );
    ctx.lineTo(x + 6 * scale , y + 0 * scale );
    ctx.lineTo(x + 9 * scale , y + 3 * scale );
    ctx.lineTo(x + 9 * scale , y + 8 * scale );

    ctx.lineTo(x + 6 * scale , y + 11 * scale );
    ctx.lineTo(x + 0 * scale , y + 11 * scale );

    ctx.lineTo(x + - 3 * scale , y + 8 * scale );

    ctx.lineTo(x + - 3 * scale , y + 3 * scale );

    ctx.fill();
    ctx.font = "bold " + (8 * scale) + "px sans-serif";
    ctx.fillStyle = 'white';
    if (num.length == 1) 
        num = "0" + num;
    ctx.fillText(num, max_width, max_height);
    ctx.fillStyle = 'navy';


}

function drawTrapezoidal3(ctx, color, num, canvas, x, y){
    ctx.fillStyle = color;
    ctx.beginPath();
    max_width = (x + 0.5 * scale  ) /2;
    max_height = (y + 24 * scale   ) /2;

    ctx.moveTo(x + 0 * scale , y + 0 * scale );
    ctx.lineTo(x + 6 * scale , y + 0 * scale );
    ctx.lineTo(x + 9 * scale , y + 3 * scale );
    ctx.lineTo(x + 9 * scale , y + 8 * scale );

    ctx.lineTo(x + 6 * scale , y + 11 * scale );
    ctx.lineTo(x + 0 * scale , y + 11 * scale );

    ctx.lineTo(x + - 3 * scale , y + 8 * scale );

    ctx.lineTo(x + - 3 * scale , y + 3 * scale );

    ctx.fill();
    ctx.font = "bold " + (8 * scale) + "px sans-serif";
    ctx.fillStyle = 'white';
    if (num.length == 1) 
        num = "0" + num;
    ctx.fillText(num, max_width, max_height);
    ctx.fillStyle = 'navy';


}

function drawNotLogin(ctx,canvas) {
    ctx.fillStyle = 'rgba(68, 68, 68, 0.5)';
    ctx.fillRect (0, 0, 19, 19); 
}


function parseEventConsole(json) {
    events = json.result.events ;
    severity5 = 0;
    severity4 = 0;
    severity3 = 0;
    
    localStorage.zenossEventLog  = JSON.stringify(events);

    $(events).each(function () {
        if(this.severity == "4")
            severity4 +=1;
        if(this.severity == "3")
            severity3 +=1;
        if(this.severity == "5")
            severity5 +=1;

    });

   return {severity5: severity5, severity4:severity4, severity3:severity3}
}


function createIMG(imgFile, imgOnload ){
   var img = new Image()
   img.onload = imgOnload;
   img.src = imgFile;
   return img
}
