	function close(){
		let close = document.querySelectorAll('.close');
		if(close){
			for(let closes=0; closes<close.length; closes+=1){
				close[closes].textContent = "X";
				close[closes].addEventListener("click", (e)=>{
					close[closes].parentNode.remove();
				})
			}
		}	
	}
	close()