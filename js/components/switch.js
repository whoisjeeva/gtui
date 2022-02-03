function initAllSwitch() {
    _(".paper.switch").each(function() {
        this.on("click", e => {
            let checkbox = this[0].querySelector("input[type='checkbox']")
            checkbox.checked = !checkbox.checked 
        })
    })
}

export { initAllSwitch }
