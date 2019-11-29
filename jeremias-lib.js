var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var boxImage = /** @class */ (function () {
        function boxImage(box_, images_) {
            if (box_ === void 0) { box_ = null; }
            if (images_ === void 0) { images_ = null; }
            this.box = 'null';
            this.images = 'null';
            if ((box_ !== null) && (images_ !== null)) {
                this.box = box_;
                this.images = images_;
            }
        }
        boxImage.prototype.setPlaceToModal = function (place) {
            document.body.appendChild(place);
        };
        boxImage.prototype.modalSetAttribute = function (modal) {
            modal.setAttribute("class", "modal");
            modal.setAttribute("id", "modal");
        };
        boxImage.prototype.imageSetAttribute = function (imageFromModal, route) {
            imageFromModal.setAttribute("class", "imageFromModal");
            imageFromModal.setAttribute("id", "imageFromModal");
            imageFromModal.setAttribute("src", "route");
        };
        boxImage.prototype.createModal = function () {
            var htmlElementModal = document.createElement("section");
            // attribute modal
            this.modalSetAttribute(htmlElementModal);
            this.setPlaceToModal(htmlElementModal);
        };
        boxImage.prototype.createImage = function (route) {
            var modal = document.getElementById("modal"), htmlImage = document.createElement("img");
            htmlImage.setAttribute("src", route);
            modal.appendChild(htmlImage);
            this.imageSetAttribute(modal, route);
        };
        return boxImage;
    }());
    var clientModal = /** @class */ (function (_super) {
        __extends(clientModal, _super);
        function clientModal() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        clientModal.prototype.clickOnImage = function () {
            var _this = this;
            var _loop_1 = function (i) {
                this_1.images[i].addEventListener("click", function (e) {
                    _this.createModal();
                    _this.createImage(_this.images[i].src);
                }, false);
            };
            var this_1 = this;
            for (var i = 0; i < this.images.length; i++) {
                _loop_1(i);
            }
        };
        return clientModal;
    }(boxImage));
    var boxImages = document.getElementById("box--images"), imagesFromBox = boxImages.getElementsByTagName("img");
    var modal1 = new clientModal(boxImages, imagesFromBox);
    modal1.clickOnImage();
})();
