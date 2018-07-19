# Terrapin

Terrapin is a programming environment for javascript that allows you to use a
programmable turtle to create pretty patterns.

Many other languages have turtles built into them (like in python) which can
help newcomers learn more about programming. However, javascript has no such
functionality, so I've created a simple to use program allowing anyone to make
turtle patterns directly in their browser.

Have a go right [here](https://jedevc.github.io/terrapin/)!

## Installation

While you can easily access terrapin online, you may find yourself wanting to
install it yourself and play around with the source code.

To install terrapin, simply execute the following commands:

	$ git clone https://github.com/jedevc/terrapin.git
	$ cd terrapin
	$ npm install
	$ npm run build

The site should then be built and placed in the `dist/` directory.

	$ cd dist

Then simply host using your webserver of choice.

	$ python3 -m http.server

## License

Terrapin is licensed under the MIT license. Enjoy!
