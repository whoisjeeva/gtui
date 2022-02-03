export class Taskbar {
    constructor() {
        this.el = _("<div class='paper taskbar'>").css({
            position: "fixed",
            bottom: "-100%",
            left: "50%",
            transform: "translateX(-50%)",
        })
        let topContent = _("<div class='top-content'>")
        let taskCount = _("<div class='task-count'>")
        this.currentTask = _("<span class='current'>")
        this.totalTask = _("<span class='total'>")
        
        taskCount.append(this.currentTask)
        taskCount.append(_("<span> / </span>"))
        taskCount.append(this.totalTask)

        topContent.append(taskCount)
        topContent.append(_("<div class='sep'>•</div>"))

        this.taskMessage = _("<p>")
        topContent.append(this.taskMessage)

        let progressBar = _("<div class='progressbar'>")
        this.progress = _("<div class='progress'>")
        progressBar.append(this.progress)

        this.el.append(topContent)
        this.el.append(progressBar)
        _("body").append(this.el)

        setInterval(() => {
            let msg = this.taskMessage.text()
            if (msg.endsWith("...")) {
                this.taskMessage.text(msg.substr(0, msg.length - 3))
            } else {
                this.taskMessage.text(msg + ".")
            }
        }, 200)
    }

    show() {
        this.el.css({
            bottom: "10%",
        })
    }

    hide() {
        this.el.css({
            bottom: "-100%",
        })
    }

    setProgress(current, total, message) {
        this.taskMessage.text(message)
        this.currentTask.text(current)
        this.totalTask.text(total)
        this.progress.css({
            width: `${(current / total) * 100}%`
        })
    }
}