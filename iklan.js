var ads = [document.getElementById(&quot;ads1&quot;).innerHTML, document.getElementById(&quot;ads2&quot;).innerHTML];
var positionAds = [&quot;35&quot;, &quot;90&quot;];
var artikel = document.getElementById(&quot;post<data:post.id/>&quot;);
var artikelEnter = artikel.innerHTML.split(&quot;&lt;br&gt;&quot;);
var fixArtikel = &quot;&quot;;
for(var i = 0; i &lt; artikelEnter.length; i++){
var artikelTemporary = &quot;&quot;;
if(positionAds.length &gt; 0){
for(var j = 0; j &lt; positionAds.length; j++){
if(typeof positionAds[j] != &quot;undefined&quot; &amp;&amp; positionAds[j] != &quot;&quot;){
if(positionAds[j] == i){
artikelTemporary += artikelEnter[i];
if(typeof ads[j] != &quot;undefined&quot; &amp;&amp; ads[j] != &quot;&quot;){
artikelTemporary += &quot;&lt;br&gt;&quot;;
artikelTemporary += &quot;&lt;br&gt;&quot;;
artikelTemporary += ads[j];
artikelTemporary += &quot;&lt;br&gt;&quot;;
break;
}
}
}
}

fixArtikel += artikelTemporary == &quot;&quot; ? artikelEnter[i] : artikelTemporary;
fixArtikel += &quot;&lt;br&gt;&quot;;
} else {
fixArtikel += artikelEnter[i];
fixArtikel += &quot;&lt;br&gt;&quot;;
}
}

artikel.innerHTML = fixArtikel;