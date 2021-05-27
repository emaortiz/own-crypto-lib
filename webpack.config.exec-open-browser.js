const path = require('path');
const express = require("express");

const Lib = require(path.join(__dirname, './mylib.min'));
const Encrypter = Lib.default;


module.exports = {
    mode: 'development',
    //DevServer is used for the test that the library is working on the browser
    devServer: {
        open: true,
        openPage: [`client/index.html`],
        contentBase: path.join(__dirname, '/'),
        quiet: true,
        port: 3000,
        host: '0.0.0.0',
        disableHostCheck: true,
		setup(app){

			app.use(express.json());
			app.use(express.urlencoded());

	
			app.post("/api/send", function(req, res){
				var messageToDecrypt = req.body.message;
				const encrypter = new Encrypter();
				var text = encrypter.decrypt('mysecret', messageToDecrypt, );
				return res.send(text);
			})
		}
    }
};