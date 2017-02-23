//给URL动态传递参数
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

//创建select
var MessageInit = function(message,defalut,List)//message('id');default(默认值);List(列表,数组);
{
	var cmbProvince = document.getElementById(message);
	function cmbAddOption(cmb, str, obj)
	{
		var option = document.createElement("OPTION");
		cmb.options.add(option);
		option.innerText = str;
		option.value = str;
		option.obj = obj;
	}
	console.log(worklist[List]);
	List = worklist[List];
	for(var i=0; i<List.length; i++)
	{
		cmbAddOption(cmbProvince, List[i].name, List[i]);
	}
	cmbSelect(cmbProvince,defalut);
	function cmbSelect(cmb, str)
	{
		for(var i=0; i<cmb.options.length; i++)
		{
			if(cmb.options[i].value == str)
			{
				cmb.selectedIndex = i;
				return;
			}
		}
	}
};
//submit
