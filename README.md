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


### Card

```
<div class="gt card" style="width: 280px">
    <img style="padding: 24px 24px 0px 24px;" src="https://scontent-frx5-2.xx.fbcdn.net/v/t1.6435-9/p75x225/120195241_100755238470158_7699068114533862023_n.png?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vBEOKW8IVsQAX9KTwzJ&_nc_ht=scontent-frx5-2.xx&oh=00_AT9ncM5db9WDfI5NP8zRNH-gCogA1EfA-btDmSWUr7AzLQ&oe=621D8F16">

    <div class="gt row space-between" style="padding: 10px 24px;border-bottom: 1px solid #eee;">
        <h3>Hello, World</h3>
        <div class="gt tag">png</div>
    </div>

    <div style="padding: 0 24px 24px 24px;">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam voluptatum nobis voluptatibus facilis fugiat praesentium asperiores assumenda, id fuga. Quidem nemo quibusdam architecto cum perspiciatis ab molestias accusamus aspernatur!</p>

        <button class="gt btn flat"><i class="icon">download</i></button>
    </div>
</div>
```
