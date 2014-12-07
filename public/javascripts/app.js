$(function(){
	'use strict';

	var socket = io.connect();
	//var socket = io.connect('http://localhost');
	
	socket.on('tweets', function (data) {
		console.log(data);
		$('#tweets').prepend("<img src=\'"+data.tweet.user.profile_image_url+"\' /> "+data.tweet.text +" <br/><hr />");
	});

	$(".ligaluz").on('click', function (data) {
		//socket.emit('ligaLuz', { luz: idLuz });
	});
});