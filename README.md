# animation-graph

# What is that ?
It is a lib of animation that allows the creation of an animation in the form of a network of moving graphs

# Install

# How to use ?

Import the plugin:

```html
<script type="text/javascript" src="dist/bundle-graph.min.js"></script>
```

Next:
```javascript
    <script type="text/javascript">
		var cores = ['255, 0, 0','191, 85, 236', '0,0,255'];
		graphAnimation.animate({
		    selector: 'demo-canvas',
			colors: cores,
			speed: 300,
			density: 100
		});
	</script>
```

## Properties:

#### selector [Required]:
  Html selector  
   
#### colors [Optional]:
  Array of colors ---- RGB
    
#### speed [optional]:
  Speed of transition between colors ---- milliseconds
    

#### density [Optional]:
  Number of points per area ---- from 1 to 100
    

# License

The MIT License (MIT)

Copyright (c) 2016 Fábio Pereira

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.