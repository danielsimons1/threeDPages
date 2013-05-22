threeDPages
===========

Author: Daniel Simons<br />
Author Email: daniel.simons1@gmail.com<br />
Version: 1.0.0<br />
License: Free General Public License (GPL)<br />

<h2>Brief</h2>
A nifty plugin that allows you to generate blocks of html content that behave a separate pages that you can click to enlarge. Useful for areas of a website where there are lists of content that you want to provide a high level view that can be easily clicked into for further detail.

Very easy to implement please follow the instructions below:

<h3>HTML</h3>

For each unique page, you will define an html element with className "page". As a child of the element for which you define the plugin. NOTE: Optionally you can redefine this className to anything you want by instantiating the plugin with the option - pageSelector : '.page'

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.js"></script>
<script src="3dPages.js"></script>
<link href="3dPages.css" rel="stylesheet" type="text/css">
</head>
<body>
  <div class="threedpages">
		<div class="page" id="page1">Some Plain Text Page Content</div>
		<div class="page" id="page2"><div><h2>HTML Page Content</h2><p>this page contains html content</p></div></div>
		<div class="page" id="page4"><div><h2>HTML Page Content</h2><p>this page contains html content</p></div></div>
		<div class="page" id="page5"><div><h2>HTML Page Content</h2><p>this page contains html content</p></div></div>
	</div>
</body>
</html>
```

<h3>jQuery</h3>

Add the following code to your JavaScript file typically on a document.ready:

```javascript
 $(function() {
 	$('.threedpages').threedPages();
 });
```

<h3>Plugin Options</h3>
```javascript

$('.threedpages').threedPages({
  //The selector to use for each 3D Page
  pageSelector : '.page',
  //The number of pages to show per row
  pagesPerRow : 3
});
```

<h3>Minimum CSS styles</h3>

```css
.threedpages {
	width: 900px;
	height:700px;
	margin: 0px auto;

}
.threedpages > .page{
	border:1px solid silver;
	width: 900px;
	height: 700px;
	transition: all 1s;
	-webkit-transition: all 1s;
	-moz-transition: all 1s;
	position:absolute;
	border-radius:10px;
	-webkit-border-radius:10px;
	-moz-border-radius:10px;
	-webkit-box-shadow:1px 3px 28px gray, -1px 0px 18px gray;
	-moz-box-shadow:1px 3px 28px gray, -1px 0px 18px gray;
	box-shadow:1px 3px 28px gray, -1px 0px 18px gray;
}

.threedpages > .page.inactive {
	opacity:0;
}

.threedpages > .page:hover {
	box-shadow: 2px 2px 18px gray, -2px -2px 18px black;
	-webkit-transform: scale(0.4);
}
```
