//TODO: add restore function to new function
function hookit_pre(parent, funcname, callback){
  var _ori = parent[funcname];
  parent[funcname] = function(){
    arguments = callback.apply(this, arguments);
    return _ori.apply(this, arguments);
  }
}
function hookit_post(parent, funcname, callback){
  var _ori = parent[funcname];
  parent[funcname] = function(){
    var _ret = _ori.apply(this, arguments);
    _ret = callback.apply(this, [arguments, _ret]);
    return _ret;
  };
}
