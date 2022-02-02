export class Dialog {
    constructor(el) {
        this.overlay = _("<div class='gt overlay'>").hide()
        _("body").append(this.overlay)
        this.isBtnContainerAdded = false
        if (el === undefined || el === null) {
            this.el = _("<div class='gt dialog'>").hide()
            this.isCustom = false
        } else {
            this.el = _(el).hide()
            this.isCustom = true
        }   
    }

    setTitle(title) {
        let el = _("<div class='title'>").text(title)
        this.el.append(el)
        return this
    }

    setContent(content) {
        let el = _("<div class='content'>").text(content)
        this.el.append(el)
        return this
    }

    addButton(text, callback) {
        if (!this.isBtnContainerAdded) {
            this.btnsContainer = _("<div class='btns-container'>")
            this.el.append(this.btnsContainer)
            this.isBtnContainerAdded = true
        }
        let button = _("<button class='gt btn flat'>").text(text)
        button.on("click", callback)
        this.btnsContainer.append(button)
        return this
    }

    create() {
        if (!this.isCustom) {
            _("body").append(this.el)
        }
        return this
    }

    show() {
        this.el.show()
        this.overlay.show()
        return this
    }

    hide() {
        this.el.hide()
        this.overlay.show()
        return this
    }

    dismiss() {
        this.el.remove()
        this.overlay.remove()
        return this
    }
}