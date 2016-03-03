var targetSelf = function () {
	for (var links = document.links, i = 0, a; a = links[i]; i++) {
    a.target = '_self';
	}
};

window.setTimeout(targetSelf, 0000);
