## PaperUI is a UI Library for the Web

PaperUI let's you mockup or create your front-end development much easier with built-in UI kit.


## Components

We have many pre made components that you can use on your websites.

### Button

The icons are from Material Icons.

```html
<button class="paper btn">Button</button>
<button class="paper btn rounded">Rounded</button>
<button class="paper btn primary">Primary</button>
<button class="paper btn rounded primary">Primary Rounded</button>
<button class="paper btn outlined rounded">Outlined</button>
<button class="paper btn primary"><i class="icon">download</i> Download</button>
<button class="paper btn only-icon rounded">
    <i class="icon">settings</i>
</button>
<button class="paper btn only-icon rounded flat">
    <i class="icon">settings</i>
</button>
```

### Input

```html
<div class="paper input outlined">
    <i class="icon">search</i>
    <input type="text" placeholder="Search...">
</div>

<br><br>

<div class="paper textarea outlined">
    <textarea name="msg" id="msg" cols="30" rows="10" placeholder="Message..."></textarea>
</div>

<br><br>

<div class="paper select outlined" style="width: 300px;">
    <i class="icon">account_circle</i>
    <select name="ops" id="ops">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
</div>
```


### File Input

```html
<div class="paper file-input">
    <i class="icon">upload_file</i>
    <p>Drag and drop an image file or click to choose</p>
    <p>No max file size</p>            
</div>
```

```js
let fileInput = new FileInput()
fileInput.initialize(".paper.file-input", isMultiple = true)
fileInput.onSelect(files => {
    fileInput.fileToBase64(files[0])
        .then(data => console.log(data))
})
```


### Card

```html
<div class="paper card" style="width: 280px">
    <img style="padding: 24px 24px 0px 24px;" src="https://scontent-frx5-2.xx.fbcdn.net/v/t1.6435-9/p75x225/120195241_100755238470158_7699068114533862023_n.png?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vBEOKW8IVsQAX9KTwzJ&_nc_ht=scontent-frx5-2.xx&oh=00_AT9ncM5db9WDfI5NP8zRNH-gCogA1EfA-btDmSWUr7AzLQ&oe=621D8F16">

    <div class="paper row space-between" style="padding: 10px 24px;border-bottom: 1px solid #eee;">
        <h3>Hello, World</h3>
        <div class="paper tag">png</div>
    </div>

    <div style="padding: 0 24px 24px 24px;">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam voluptatum nobis voluptatibus facilis fugiat praesentium asperiores assumenda, id fuga. Quidem nemo quibusdam architecto cum perspiciatis ab molestias accusamus aspernatur!</p>

        <button class="paper btn flat"><i class="icon">download</i></button>
    </div>
</div>
```


### Switch

```html
<div class="paper switch">
    <input type="checkbox">
    <span class="check"></span>
    <span class="label">Remember last extracted images</span>
</div>
```


### Dialog

```js
let dialog = new Dialog()
    .setTitle('<i class="icon">report_problem</i> Alert')
    .setContent("Hello, World!")
    .addButton('Cancel', () => {
        console.log('Cancel')
    })
    .addButton('OK', () => {
        console.log('OK')
        dialog.dismiss()
    })
    .create()
dialog.show()
```


### Taskbar

```js
let taskbar = new Taskbar()
let current = 1
let total = 5
let messages = ['Processing', "Verifiying", "Downloading", "Extracting", "Finished"]
taskbar.setProgress(current, total, messages[current-1])
taskbar.show()

_(".paper.btn").click(e => {
    current += 1
    taskbar.setProgress(current, total, messages[current-1])
})
```
