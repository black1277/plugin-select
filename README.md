# plugin-select

Select plugin

Install: 

```js
npm install -g parcel-bundler
```

Start:

```js
parcel index.html
```

![Banner](https://github.com/black1277/plugin-select/blob/master/screen.jpg?raw=true)

## Example of use in the index file:
```js
import {Index} from './select'

    const select = new Index('#select', {
        placeholder: 'Please, select item',
        //selectedId: '2',
        data: [
            {id: '1', value: 'HTML'},
            {id: '2', value: 'JavaScript'},
            {id: '3', value: 'CSS'},
            {id: '4', value: 'Python'},
            {id: '5', value: 'Next'},
            {id: '6', value: 'Nest'}
        ],
        onSelect(item) {
            console.log('Selected Item', item)
        }
    })
```
