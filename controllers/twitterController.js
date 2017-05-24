var methods = {}
var OAuth = require('oauth');
require('dotenv').config()

methods.searchSomething = function(req,res){
  // it('tests trends Twitter API v1.1',function(done){
    var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.CONSUMER_KEY,
      process.env.CONSUMER_SECRET,
      '1.0A',
      null,
      'HMAC-SHA1'
    );
  // })

  oauth.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${encodeURIComponent(req.body.search)}`,
      process.env.ACCESS_TOKEN,
      process.env.ACCESS_TOKEN_SECRET,
      function (e, data){
        if (e) console.error(e);
        let tmp = JSON.parse(data)
        res.send(tmp.statuses)
      });
}
// methods.timeLine = function(req,res){
//   console.log(req.body.user);
//   // it('tests trends Twitter API v1.1',function(done){
//     var oauth = new OAuth.OAuth(
//       'https://api.twitter.com/oauth/request_token',
//       'https://api.twitter.com/oauth/access_token',
//       process.env.CONSUMER_KEY,
//       process.env.CONSUMER_SECRET,
//       '1.0A',
//       null,
//       'HMAC-SHA1'
//     );
//   // })
//
//   oauth.get(
//       `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${req.body.user}`,
//       process.env.ACCESS_TOKEN,
//       process.env.ACCESS_TOKEN_SECRET,
//       function (e, data){
//         if (e) console.error(e);
//         let tmp = JSON.parse(data)
//         res.send(tmp)
//       });
// }


module.exports = methods
