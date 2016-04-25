.PHONY: doc
clean:
	rm -f .gitignore README.md LICENSE
doc:
	doxygen ./doc/Doxyfile
	zip -r doc/dokumentace.zip doc/html/
	rm -r doc/html 
test:
	xdg-open mat_test.html
pack:
	cd ../.. && zip -r xchova14_xkovar69_xkutej02/repozitar/xchova14_xkovar69_xkutej02.zip xchova14_xkovar69_xkutej02