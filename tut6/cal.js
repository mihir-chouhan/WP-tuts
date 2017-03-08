
	function print9(){
		var a = document.getElementById("9");
		document.getElementById("box2").innerHTML += a.value;
		return false;
	}
	function print8(){
		var a = document.getElementById("8");
		document.getElementById("box2").innerHTML += a.value;
		return false;
	}
	function print7(){
		var a = document.getElementById("7");
		document.getElementById("box2").innerHTML += a.value;
		return false;
	}	
	function print6(){
		var a = document.getElementById("6");
		document.getElementById("box2").innerHTML += a.value;
		return false;
	}
	function print5(){
		var a = document.getElementById("5");
		document.getElementById("box2").innerHTML += a.value;
		return false;
	}
	function print4(){
		var a = document.getElementById("4");
		document.getElementById("box2").innerHTML += a.value;
		return false;
	}
	function print3(){
		var a = document.getElementById("3");
		document.getElementById("box2").innerHTML += a.value;
		return false;
	}
	function print2(){
		var a = document.getElementById("2");
		document.getElementById("box2").innerHTML += a.value;
		return false;
	}
	function print1(){
		var a = document.getElementById("1");
		document.getElementById("box2").innerHTML += a.value;
		return false;
	}
	function print0(){
		var a = document.getElementById("0");
		document.getElementById("box2").innerHTML += a.value;
		return false;
	}
	function printmul(){
		var a = document.getElementById("mul");
		document.getElementById("box2").innerHTML += "*";
		return false;
	}
	function printdiv(){
		var a = document.getElementById("div");
		document.getElementById("box2").innerHTML += "/";
		return false;
	}
	function printplus(){
		var a = document.getElementById("plus");
		document.getElementById("box2").innerHTML += "+";
		return false;
	}
	function printminus(){
		var a = document.getElementById("minus");
		document.getElementById("box2").innerHTML += "-";
		return false;
	}
	function printclear(){
		var a = document.getElementById("clr");
		document.getElementById("box2").innerHTML = "";
		return false;
	}
	function myFunction(){
	 	var c = document.getElementById("box2").innerHTML;
	 	var z = eval(c);
	 	document.getElementById("box2").innerHTML = z;
	 	}	 	