function date_time(id)
	{
	        date = new Date;
	        year = date.getFullYear();
	        month = date.getMonth();
	        months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec');
	        d = date.getDate();
	        day = date.getDay();
	        days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
	        h = date.getHours();
	        if(h<10)
	        {
	                h = "0"+h;
	        }
	        m = date.getMinutes();
	        if(m<10)
	        {
	                m = "0"+m;
	        }
	        s = date.getSeconds();
	        if(s<10)
	        {
	                s = "0"+s;
	        }
	        result = ''+'  '+d+' '+months[month]+' '+year+' '+h+':'+m+':'+s;
	        document.getElementById(id).innerHTML = result;
	        setTimeout('date_time("'+id+'");','1000');
	        return true;
	}