# Image Icon Select
Image Icon Select is an extension of Chosen.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/yourabusufiyan/image-icon-select/master/LICENSE) [![GitHub forks](https://img.shields.io/github/forks/websemantics/Image-Select.svg)](https://github.com/yourabusufiyan/image-icon-select/network) [![GitHub stars](https://img.shields.io/github/stars/websemantics/Image-Select.svg)](https://github.com/yourabusufiyan/image-icon-select/stargazers)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/yourabusufiyan/image-icon-select.svg)](http://isitmaintained.com/project/yourabusufiyan/image-icon-select "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/yourabusufiyan/image-icon-select.svg)](http://isitmaintained.com/project/yourabusufiyan/image-icon-select "Percentage of issues still open")

Image Icon Select provides to select option display image or icon or both at the same time to make user select easy. I designed this plugin extension to use in my Options Framework. Framework is not ready yet.

#### Demo ( https://yourabusufiyan.github.io/image-icon-select/examples.html )
	
![Image-Icon-Select-demo-gif](image-icon-demo.gif?raw=true "Image-icon-selects-demo")


# New Features!

  - You can use Single (one-to-one).
  - You can use Image Icon Selec for modelling multiple (one-to-many)
  - RTL supports
  - Image select
  - Icon select
  - Both image and icon at the same time


##### Hope you find it helpful
Get back if you have any feedback/improvements.


## Installation
- Clone locally,
```bash
    git clone https://github.com/yourabusufiyan/image-icon-select
```
or
- Browse or check `examples.html`

## Usage

You just only need to add `data-img` attribute for image
and `data-icon` to your `<option>` tag.

#### for Image selects

```html
<select class="select-class">
  <option data-img="url" selected>Abu Sufiyan</option>
  <option data-img="url">Desi Coder</option>
  <option data-img="url">Asim Watson</option>
  <option data-img="url">Programmer</option>
</select>
```

#### For Icon selects

```html
<select class="select-class">
  <option data-icon="<i class='fas fa-car'></i>" selected>Car</option>
  <option data-icon="<i class='fas fa-bicycle'></i>">Bicycle</option>
  <option data-icon="<i class='fas fa-bus'></i>">Bus</option>
  <option data-icon="<i class='fas fa-train'></i>">Train</option>
</select>
```

Then call `ImageIconSelect()` as you would with the options you need.
```javascript
$("select-class").ImageIconSelect(options);
```
`'ImageIconSelect'` support all chosen options



### Tech

Image Icon Select uses a number of open source projects to work properly:

* [Chosen](https://harvesthq.github.io/chosen/)
* [jQuery]

### Copyright and license

[MIT license](http://opensource.org/licenses/mit-license.php)
Copyright (c) 2019 Abu Sufiyan.


**Free Software, Hell Yeah!**
