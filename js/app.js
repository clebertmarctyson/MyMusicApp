url = document.getElementById('url').innerHTML
function download(url) {
// $("#loader").show();
var timeleft = 15;
var downloadTimer = setInterval(function(){
    document.getElementById("progressBar").value = 15 - --timeleft;
    document.getElementById('count').innerHTML = document.getElementById('count').innerHTML - 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        // console.log('yes');

        var link = document.createElement("a");
        link.download = name;
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        delete link;
        //console.log(url);
    }

},1000);
}
$(window).load(function() {
  download(url);
});
