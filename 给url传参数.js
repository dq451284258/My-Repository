function addUrlPara(key,val){
		var cururl = window.location.href;
		laterurl = cururl.split('?')[1];
		reurl = laterurl.split('&');
		var newurl = '';
		var hasreurl = 0;
		if(reurl) {
			for(var i = 0; i < reurl.length; i++) {
				if(key&&val){
					if(reurl[i].split('=')[0] == key) {
						reurl[i] = key + '=' + val;
						hasreurl =  hasreurl + 1;
					}
					if(i == 0) {
						newurl = newurl + reurl[i];
					} else {
						newurl = newurl + '&' + reurl[i];
					}
				}
			}
		}
		if(hasreurl==0){
			newurl = newurl + '&' + key + '=' + val;
		}
		window.location.href = cururl.split('?')[0] + '?' + newurl;
}
