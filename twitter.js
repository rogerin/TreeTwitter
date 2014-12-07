var Twitter = require('node-tweet-stream')
  , t = new Twitter({
    consumer_key: 'SEU-KEY-AQUI',
    consumer_secret: 'SEU-KEY-AQUI',
    token: 'SEU-KEY-AQUI',
    token_secret: 'SEU-KEY-AQUI'
  });


t.on('tweet', function (tweet) {
  console.log('========================================================================');
  console.log('========================================================================');

  //console.log('tweet received', tweet);
  //console.log('tweet received', tweet.text);

  console.log('Original: ', tweet.text);
  
  var texto = tweet.text.toLowerCase();
  console.log('Minuscula: ', texto);

  var n = texto.indexOf("#");
  console.log('N: ', n);

  var res = texto.substring(n, n+8);
  console.log('res:', res);

  if(res.toString() == '#treeoff') {
    console.log('Desliga!');
    // implementar GPIO para desligar
  } else if (res.toString() == '#treeon') {
    console.log('Ligar!');
    // implementar GPIO para ligar
  } else {
    console.log('faz nada, :/ ');
  }

});

t.on('error', function (err) {
  console.log('Oh no')
});

t.track('@rogerin')
t.track('#treeon')
t.track('#treeoff')


// 10 minutes later
//t.untrack('pizza')