function initAllInput() {
    _(".paper.input").each(function() {
        this.on("click", e => {
            let els = this[0].querySelectorAll("input,textarea,select")
            for (let i = 0; i < els.length; i++) {
                console.log(els[i])
                els[i].focus()
            }
        })
    })
}

export { initAllInput }