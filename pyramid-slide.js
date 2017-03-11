select = document.getElementById("bricks");
select.onchange = function() {

    // figure out the height the user typed
    heightStr = document.getElementById("height").value;
    

    // convert the string to an int
    height = parseInt(heightStr);
    brick = document.getElementById("bricks").value;

    // draw pyramid with that height
    drawPyramid(height,brick);
}
document.getElementById('height').addEventListener("input",myFunction);
function myFunction() {
    heightStr = document.getElementById("height").value

// convert the string to an int
    height = parseInt(heightStr);
    brick = document.getElementById("bricks").value;

// draw pyramid with that height
    drawPyramid(height,brick);
}



/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
 function drawPyramid(height,brick) {

     // first, clear the old content
     document.getElementById("pyramid").innerHTML = "";

     // for each row....
     for (var row = 0; row < height; row++) {

         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         // build up a string for this row
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += "&nbsp;";
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr +=brick;
         }

        // create a text element with the string of characters
        // textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        // rowElem.appendChild(textElem);
        rowElem.innerHTML = rowStr;

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
