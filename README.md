## Green Tea UI is an UI Library for the Web

Green Tea UI let's you mockup or create your front-end development much easier with built-in UI kit.


## Components

We have many pre made components that you can use on your websites.

### Button

The icons are from Material Icons.

```
<button class="gt btn">Button</button>
<button class="gt btn rounded">Rounded</button>
<button class="gt btn primary">Primary</button>
<button class="gt btn rounded primary">Primary Rounded</button>
<button class="gt btn outlined rounded">Outlined</button>
<button class="gt btn primary"><i class="icon">download</i> Download</button>
```

### Input

```
<div class="gt input outlined">
    <i class="icon">search</i>
    <input type="text" placeholder="Search...">
</div>
```


### File Input

```
<div class="gt file-input">
    <i class="icon">upload_file</i>
    <p>Drag and drop an image file or click to choose</p>
    <p>No max file size</p>            
</div>
```

```
let fileInput = new FileInput()
fileInput.initialize(".gt.file-input", isMultiple = true)
fileInput.onSelect(files => {
    fileInput.fileToBase64(files[0])
        .then(data => console.log(data))
})
```
