var Twitter = require('node-tweet-stream')
  , t = new Twitter({
    consumer_key: 'gS7SNA6Vbl5Y6YVabNg9OFVwT',
    consumer_secret: 'j6hfOF8xOtmyOj0HcIL4OBMCjSXFdCqsYP6huDAinGeEQp3xSC',
    token: '25347187-etaDV7xBi2t4LQQm1JM7iDLwinp3oPiQ8zyXDyWmn',
    token_secret: '99lYSCn8BEG8VAzEKAoW1EmaNrxWsZuF6XJGq9dyuXvCv'
  });

t.on('tweet', function (tweet) {

  console.log('========================================================================');
  console.log('========================================================================');
  console.log('========================================================================');
  console.log('========================================================================');
  console.log('========================================================================');
  console.log('========================================================================');
  console.log('========================================================================');

  //console.log('tweet received', tweet);

  console.log('tweet received', tweet.text);


  console.log('========================================================================');
  console.log('========================================================================');
  console.log('========================================================================');
  console.log('========================================================================');
  console.log('========================================================================');
  console.log('========================================================================');
  console.log('========================================================================');
  


});

t.on('error', function (err) {
  console.log('Oh no')
});

t.track('@rogerin')

// 10 minutes later
//t.untrack('pizza')