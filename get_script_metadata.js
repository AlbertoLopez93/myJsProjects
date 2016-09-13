module.exports = function getScriptMetadata(script) {
  var start = script.indexOf("/*"),
      end = script.indexOf("*/"),
      reMeta = /^([a-zA-Z0-9]+):(.*)$/mg ,
      result = {},
      metadata, match;

  if(start < 0 || end < 0) {
    return result;
  }

  metadata = script.substr(start, end - start);

  while ( match = reMeta.exec(metadata) ) {
    result[match[1].toLowerCase()] = match[2].trim();
  }

  return result;
}