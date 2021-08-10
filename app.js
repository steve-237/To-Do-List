function add(){
	var e = document.createElement('li');
	var text = document.getElementById('text').value;
	e.className = "element";
	var textNode = document.createTextNode(text);
	e.appendChild(textNode);
	if (text != "") {
		document.getElementById('list').appendChild(e);
	}
	document.getElementById('text').value = "";
}



var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName == 'LI') {
    ev.target.classList.toggle('clicked');
  }
}, false);

