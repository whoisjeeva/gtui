function initAllSwitch() {
    _(".gt.switch").each(function() {
        console.log(this)
        this.on("click", e => {
            let checkbox = this[0].querySelector("input[type='checkbox']")
            checkbox.checked = !checkbox.checked 
        })
    })
}

export { initAllSwitch }
