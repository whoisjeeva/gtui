export class FileInput {
    constructor() {
        this.onSelectCallback = () => {}
    }

    onSelect(callback) {
        this.onSelectCallback = callback
    }

    fileToBase64(file) {
        return new Promise((resolve, reject) => {
            let reader = new FileReader()
            reader.onload = e => {
                resolve(reader.result)
            }
            reader.onerror = e => {
                reject(e)
            }
            reader.readAsDataURL(file)
        })
    }

    handleDrop(files) {
        // let reader = new FileReader()
        // reader.onload = e => {
        //     let dataURL = reader.result
            // let img = document.createElement('img')
            // img.src = dataURL
            // img.classList.add('img-thumbnail')
            // img.style.width = '100%'
            // img.style.height = 'auto'
            // document.querySelector('body').appendChild(img)
        // }
        // reader.readAsDataURL(files[0])
        this.onSelectCallback(files)
    }

    initialize(sel, isMultiple=false) {
        let inp = _(sel)
        let fileInput = _("<input type='file' />")
        if (isMultiple) {
            fileInput.attr("multiple", "multiple")
        }

        inp.click(e => {
            fileInput[0].click()
        })

        fileInput.on("change", e => {
            if (fileInput.val()) {
                this.handleDrop([...fileInput[0].files])
            }
        })

        inp.on("dragenter", e => {
            e.preventDefault()
            inp.addClass("active")
        })
        inp.on("dragover", e => {
            e.preventDefault()
            inp.addClass("active")
        })
        inp.on("dragleave", e => {
            e.preventDefault()
            inp.removeClass("active")
        })
        inp.on("drop", e => {
            e.preventDefault()
            inp.removeClass("active")
            let dt = e.dataTransfer
            let files = [...dt.files]

            this.handleDrop(files)
        })
    }
}

export default _ => {
    
}