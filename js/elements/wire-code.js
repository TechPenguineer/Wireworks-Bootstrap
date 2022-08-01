class WireCode extends HTMLElement { 
    get open()
    {
        return this.hasAttribute('open');
    }

    set open(val)
    {
        if(val){
            this.setAttribute('open', '');
        }
        else{
            this.removeAttribute('open');
        }
        this.toggleCodeblock();
    }

    get disabled()
    {
        return this.hasAttribute('disabled');
    }

    set disabled(val) 
    {
        if(val){
            this.setAttribute('disabled', '');
        }
        else{
            this.removeAttribute('disabled');
        }
    }

    constructor () 
    {
        super()
        this.addEventListener('click', e => 
        {
            if(this.disabled){
                return;
            }
            this.toggleCodeblock();
        })
    }

    toggleAttribute()
    {
        
    }
}
window.customElements.define('wire-code', WireCode);
window.customElements.define('wire-code', class extends HTMLElement{});