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
//环形进度条
var cicle= function(degnum) {
	var oTx = document.getElementById('tx');
	var cicleTransform = function(num, old_num) {
		var b_l_a = document.getElementById("bar-left-an");
		var b_r_a = document.getElementById("bar-right-an");
		var c_num = num;
		if(c_num > 50) {
			setTimeout(function() {
				b_r_a.style.transform="rotate(45deg)";
				b_r_a.style.transition="transform 1s linear";
				setTimeout(function() {
				b_l_a.style.transform="rotate(" + (((c_num-50)/100*360)-135) + "deg)";
				b_l_a.style.transition="transform 0.5s linear";
				},1000);
			},500);
		} else {
			if(old_num > 50) {
				setTimeout(function() {
					b_r_a.style.transform="rotate(" + ((c_num/100*360)-135) + "deg)";
					b_r_a.style.transition="transform 1s linear";
				},1000);
				b_l_a.style.transform="rotate(-135deg)";
				b_l_a.style.transition="transform 1s linear";
			} else {
				setTimeout(function() {
				b_r_a.style.transition="transform 1s linear";
				b_r_a.style.transform="rotate(" + ((c_num/100*360)-135) + "deg)";
				},500);
			}
			
		}
	}
	var setnum = function(num) {
		oTx.value=num+'%';
	}
	var getnum = function() {
		return parseInt(oTx.value);
	}
	if(degnum>=0 && degnum <= 100){
		cicleTransform(degnum, getnum());
		setnum(degnum);
	}
};
