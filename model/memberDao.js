/**
 * Created by hammer on 2016/4/9.
 * member的数据库操作类
 * redis连接池
 */
// redis-test.js

const redis_ip = '127.0.0.1';//服务器ip
const redis_port = 6379; //端口号
var redis = require("redis"),
    client = redis.createClient(redis_port, redis_ip);

client.on('ready',function(res){
    console.log('redis ready');
});

client.on("error", function(err){
    console.log("redis Error: " + err);
});

// client.get("name", function(err, reply){
//     console.log(reply.toString());
// });

module.exports = client;

// client.on("connect", function(){
//     // start server();
//     // client.set("name_key", "hello world", function(err, reply){
//     //     console.log(reply.toString());
//     // });
//
//     client.smembers("hammercui",function(err,reply) {
//         if(err){
//             console.log("Err:"+err);
//             return;
//         }
//         console.dir(reply);
//     })
// });

// exports.getMember = function (name) {
//
// }
//
// exports.setMember = function (member) {
//
// }


// //遍历哈希表"hash key"
// client.hkeys("hammercui", function (err, replies) {
//     console.log(replies.length + " replies:");
//     replies.forEach(function (reply, i) {
//         console.log("    " + i + ": " + reply);
//     });
//     client.hget("hash key","hashtest 1",redis.print);
//
//     /*两种都可以断掉与redis的连接，
//      end()很粗暴，不管3721，一下子退出来了，上面那句获取哈希表"hash key"的某个元素值的表达式将没有结果返回
//      而quit()则是先将语句处理完毕再干净地退出，斯文得很
//      */
// //client.end();
//     client.quit();
// });