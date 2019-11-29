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

		setPlaceTo(destiny:any, element:any){

			if( (destiny !== null && destiny !== undefined) ){

				destiny.appendChild(element);

			}

		
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

				// place to modal
				this.setPlaceTo(document.body, htmlElementModal);
			

		}
		createImage(route:any){

			let modal = document.getElementById("modal"),
				
				htmlImage = document.createElement("img");
				htmlImage.setAttribute("src", route);

				if( (route !== null && route !== undefined) ){

					this.setPlaceTo(modal, htmlImage);
					this.imageSetAttribute(modal, route);

				}

		}

	}



	class clientModal extends boxImage{

		deleteModal(){
			let modalExistent = document.getElementById("imageFromModal");

			if(modalExistent){

				modalExistent.addEventListener("click", (e)=>{

					modalExistent.remove();

				}, false);


			}
		}

		clickOnImage(){
			
			for(let i=0; i<this.images.length; i++){

				this.images[i].addEventListener("click", (e:any)=>{
					
					this.createModal();
					this.createImage(this.images[i].src); 
					this.deleteModal();

				}, false);

			}

		}

	}
	
	let boxImages = document.getElementById("box--images"),
		imagesFromBox = boxImages.getElementsByTagName("img"); 

	let modal1 = new clientModal(boxImages, imagesFromBox);
		modal1.clickOnImage();




	 


})();