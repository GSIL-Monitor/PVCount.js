(function(window) {
  
  var api = 'https://cloudapi.bytedance.com/faas/invoke/tt38525201v3v92d84/collect'
  var pvCount = undefined
  var post = function (url, params, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(params));
    xhr.onreadystatechange = function() {
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            callback(JSON.parse(xhr.response))
        }
    }
  }

  var initCSS = function () {
    var string = '#___pv_footer { position: absolute; bottom: 2px; right: 10px; font-size: 0.8rem; color: rgba(0, 0, 0, 0.3) }'
    var elem = window.document.createElement('style')
    elem.innerHTML = string
    window.document.body.appendChild(elem)
  }


  var _getPVCount = function () {
    return pvCount
  }


  var generatePvDom = function (count) {
    var domString = count + ' Reads'
    var dom = window.document.createElement('div')
    dom.setAttribute('id', '___pv_footer')
    dom.innerHTML = domString
    window.document.body.appendChild(dom)
  }

  var initTools = function (res) {
    pvCount = res.count
    window._getPVCount = _getPVCount
    generatePvDom(pvCount)
  }

  var main = function () {
    initCSS()

    post(api, {
      url: window.location.href
    }, function(res) {
      initTools(res)
    })
  }
  
  main()

})(window)
