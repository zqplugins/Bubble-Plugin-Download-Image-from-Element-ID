function(instance, properties, context) {

	let div = document.getElementById(properties.id);
    let name = properties.name;
    PrintDiv(div, name);
    
function PrintDiv(div, name) {
    html2canvas(div, { useCORS: true }).then(canvas => {
        var myImage = canvas.toDataURL();
        downloadURI(myImage, name);
    });
}

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();   
}


}