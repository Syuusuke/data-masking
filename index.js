function masking(str, beginLen, endLen, replaceStr = '*') {
  const firstStr = str.slice(0, beginLen);
  const middleStr = str.slice(beginLen, endLen).replace(/[\s\S]/ig, replaceStr);
  const lastStr = str.slice(endLen);

  return `${firstStr}${middleStr}${lastStr}`;
}

function show(str, beginLen, endLen, replaceStr = '*') {
  const firstStr = str.slice(0, beginLen).replace(/[\s\S]/ig, replaceStr);
  const middleStr = str.slice(beginLen, endLen);
  const lastStr = endLen ? str.slice(endLen).replace(/[\s\S]/ig, replaceStr) : '';

  return `${firstStr}${middleStr}${lastStr}`;
}

module.exports = { masking, show };
