function getEventConsole(url, successCallBack, errorCallBack){
    var event_json='{"action":"EventsRouter","method":"query","data":[{"start":0,"limit":100,"dir":"DESC","sort":"severity","params":"{\\"severity\\":[5,4,3,2],\\"eventState\\":[0,1]}"}],"type":"rpc","tid":30}';
    if (url[url.length - 1] != "/")
        url += "/"
    var url = url + "zport/dmd/Events/evconsole_router";

    $.ajax({
        type: "POST", 
        url:url, 
        dataType: 'json', 
        data: event_json, 
        contentType: "application/json",
        success: successCallBack ,
        error: errorCallBack ,
    });
}
