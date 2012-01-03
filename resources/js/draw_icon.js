var scale = 1;
    function drawTrapezoidal5(ctx, color, num, canvas, x, y){
        ctx.fillStyle = color;
        ctx.beginPath();
        max_width = (x - 3* scale + 3 * scale  ) /2;
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
            max_width = (x - 2.4* scale + 12 * scale  ) /2;
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
        max_width = (x + 4.7 * scale  ) /2;
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

