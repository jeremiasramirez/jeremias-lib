	function close(){
		let close = document.querySelectorAll('.close');
		if(close){
			for(let closes=0; closes<close.length; closes+=1){
				close[closes].textContent = "X";
				close[closes].addEventListener("click", (e)=>{
					if(close[closes].parentNode.id === "parent"){
						close[closes].parentNode.remove();
					}
					else if (close[closes].parentNode.parentNode.id === "parent"){
						close[closes].parentNode.parentNode.remove();	
					}
					else if (close[closes].parentNode.parentNode.parentNode.id === "parent"){
						close[closes].parentNode.parentNode.parentNode.remove();	
					}
					else if (close[closes].parentNode.parentNode.parentNode.parentNode.id === "parent"){
						close[closes].parentNode.parentNode.parentNode.parentNode.remove();	
					}
					else if (close[closes].parentNode.parentNode.parentNode.parentNode.parentNode.id === "parent"){
						close[closes].parentNode.parentNode.parentNode.parentNode.parentNode.remove();	
					}
					else if (close[closes].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id === "parent"){
						close[closes].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();	
					}
				})
			}
		}	
	}
	close()