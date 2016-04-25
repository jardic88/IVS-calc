clear:
	rm -f .gitignore README.md LICENSE
doc:
	doxygen ./doc/doxyfile
test:
	xdg-open mat_test.html
pack:
