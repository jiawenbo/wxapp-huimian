//common/tag.js
function sayHello(name) {
  console.log('Hello ' + name + '!')
}

function turnToTag(event) {
  var tagId = event.currentTarget.id;
  var tagUrl = '/pages/news/list/news';
  if(tagId=='news'){
    tagUrl = '/pages/news/list/news';
  }else if(tagId=='audio'){
    tagUrl = '/pages/radio/list/radiolist';
  }else if(tagId=='china'){
    tagUrl = '/pages/china/list/news';
  }else if(tagId=='zhengzhou'){
    tagUrl = '/pages/zhengzhou/list/zhengzhoulist';
  }else if(tagId=='ballot'){
    tagUrl = '/pages/ballot/list/ballotlist';
  }
  
  wx.redirectTo({
    url: tagUrl
  })
}
module.exports = {
  sayHello: sayHello,
  turnToTag:turnToTag
}