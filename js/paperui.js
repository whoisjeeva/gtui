import { _ } from "./libs/domlang"
import { FileInput } from "./components/fileInput"
import { initAllSwitch } from "./components/switch"
import { Dialog } from "./components/dialog"
import { initAllInput } from "./components/input"
import { Taskbar } from "./components/taskbar"


// GTUI init

window._ = _
window.FileInput = FileInput
window.Dialog = Dialog
window.Taskbar = Taskbar
initAllSwitch()
initAllInput()
