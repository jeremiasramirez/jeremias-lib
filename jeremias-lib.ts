(function(){

	class boxImage{

		public box : any = 'null';
		public images : any = 'null';

		constructor(box_ : any = null, images_ : any = null){

			if((box_ !== null)  &&  (images_ !== null)){
				this.box = box_;
				this.images = images_;
			}
	 

		}

		setPlaceToModal(place:any){
			document.body.appendChild(place);
		}

		modalSetAttribute(modal:any){
			modal.setAttribute("class", "modal");
			modal.setAttribute("id", "modal");
		}

		imageSetAttribute(imageFromModal:any, route:any){
			imageFromModal.setAttribute("class", "imageFromModal");
			imageFromModal.setAttribute("id", "imageFromModal");
			imageFromModal.setAttribute("src", "route");
		}

		createModal(){
			let htmlElementModal = document.createElement("section")

				// attribute modal
				this.modalSetAttribute(htmlElementModal);



			this.setPlaceToModal(htmlElementModal);
			
		}
		createImage(route:any){
			let modal = document.getElementById("modal"),
				htmlImage = document.createElement("img");
				
			
				htmlImage.setAttribute("src", route);
				modal.appendChild(htmlImage)
				this.imageSetAttribute(modal, route);
		}

	}
	class clientModal extends boxImage{
	 
		clickOnImage(){
			
			for(let i=0; i<this.images.length; i++){
				this.images[i].addEventListener("click", (e:any)=>{
					
					this.createModal();
				
					this.createImage(this.images[i].src); 
					
				}, false);
			}

		}

	}
	
	let boxImages = document.getElementById("box--images"),
		imagesFromBox = boxImages.getElementsByTagName("img"); 

	let modal1 = new clientModal(boxImages, imagesFromBox);
		modal1.clickOnImage();




	 


})();