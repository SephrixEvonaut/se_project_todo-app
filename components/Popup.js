export default class Popup {
    constructor(popupSelector){ 
        this._popup = document.querySelector(popupSelector);
        

    }
    open(){
        this._popup.classList.add("popup_visible");
    }; 

    close(){
        this._popup.classList.remove("popup_visible");

    };
    
    setEventListeners(){
        this._popup.addEventListener("mousedown", (event)=> {
            if (event.target.classList.contains("popup") || 
        event.target.classList.contains("popup__close")
        ) {
                this.close();
            }
        })

    }

    _handleEscapeClose() {
        this._popup.addEventListener("Keydown", (event)=> {
            if (event.key=== "Escape") {
                this.close();
            }
        })
    }

}

