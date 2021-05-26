import { isArray } from 'lodash-es'
import { counter } from 'custom/Counter'
import './main.css'

counter()

const list = []
const arrayCheck = (array) => {
    return console.log(isArray(array))
}

arrayCheck(list)
