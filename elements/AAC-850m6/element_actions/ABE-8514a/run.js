function(instance, properties, context) {

	let div = document.getElementById(properties.id);
    let name = properties.name;
    PrintDiv(div);
    
function PrintDiv(div)
{
    html2canvas(div, { useCORS: true }).then(canvas => {
        var myImage = canvas.toDataURL();
        let base64 = myImage.split(',')[1]
        instance.publishState('base64',base64)
    });
}


}