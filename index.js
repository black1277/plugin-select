import {Index} from './select'

document.addEventListener("DOMContentLoaded", () => {

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

    window.s = select

    document.getElementById('op').addEventListener("click", ()=>{select.open()})
    document.getElementById('s1').addEventListener("click", ()=>{select.select('1')})
    document.getElementById('s2').addEventListener("click", ()=>{select.select('2')})
    document.getElementById('tg').addEventListener("click", ()=>{select.toggle()})
    document.getElementById('ds').addEventListener("click", ()=>{select.destroy()})
})