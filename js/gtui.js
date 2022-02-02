import { _ } from "./libs/domlang"
import { FileInput } from "./components/fileInput"
import { initAllSwitch } from "./components/switch"
import { Dialog } from "./components/dialog"


// GTUI init

window._ = _
window.FileInput = FileInput
window.Dialog = Dialog
initAllSwitch()
