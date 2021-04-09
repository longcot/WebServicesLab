import React from 'react'

const Lab9 = () => {

    const text = "<bookstore><book>" +
    "<title>Everyday Italian</title>" +
    "<author>Giada De Laurentiis</author>" +
    "<year>2005</year>" +
    "</book></bookstore>";

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text,"text/xml");

    // document.getElementById("demo").innerHTML =
    const title = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;

    return (
        <div>
            {title}
        </div>
    )

}

export default Lab9
