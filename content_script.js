var links = document.getElementsByTagName("a");
for ( var i = 0; i < links.length; i++ )
{
    if ( links[i].href.indexOf("youtube") != -1 )
    {
        links[i].href = links[i].href.replace("watch?v=", "v/");
    }
}
