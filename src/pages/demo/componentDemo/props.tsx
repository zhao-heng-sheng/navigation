import {useState} from 'react'

/* 父组件 */
function Father(){
    const [childSay, setChildSay] = useState('')
    const [fatherSay, setFatherSay] = useState('')
    return (
        <div className='box father'>
            我是父组件
            <div>子组件对我说：{childSay}</div>
            <input type="text" placeholder='我对子组件说' onChange={e=>setFatherSay(e.target.value)} />
            <Son fatherSay={fatherSay} sayFather={setChildSay} ></Son>
        </div>
    )
}
/* 子组件 */
function Son(props){
    const {fatherSay, sayFather} = props
    return (
        <div className='box son'>
            我是子组件
            <div>父组件对我说：{fatherSay}</div>
            <input type="text" placeholder='我对父组件说' onChange={e=>sayFather(e.target.value)} />
        </div>
    )
}
export default function ComponentPropsPage(){
    return (
        <Father></Father>
    )
}