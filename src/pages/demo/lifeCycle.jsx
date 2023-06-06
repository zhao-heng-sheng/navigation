import React from "react";
import { useState } from "react";
function FunctionLifecycle(props){
    const [num,setNum] = useState(0)
    React.useEffect(()=>{
         /* 请求数据 ， 事件监听 ， 操纵dom  ， 增加定时器 ， 延时器 */
         console.log('组件挂载完成：componentDidMount')
         return function componentWillUnmount(){
                /* 清除定时器 ， 清除事件监听 ， 清除延时器 */
                console.log('组件卸载完成：componentWillUnmount')
         }
    },[])
    React.useEffect(()=>{
        console.log('prpos更新：componentWillReceiveProps')
    },[props])
    React.useEffect(()=>{
        console.log('组件更新完成：componentDidUpdate')
    })
    return (
        <div>
            <div>props:{props.number}</div>
            <div>states:{num}</div>
            <button onClick={()=>setNum(state=>state+1)}>改变state</button>
        </div>
    )
}


export default () => {
    const [number,setNumber] = React.useState(0)
    const [isRender,setRender] = React.useState(true)
    return (
        <div>
            {isRender&&<FunctionLifecycle number={number}/>}
            <button onClick={()=>setNumber(state=>state+1)}>改变props</button>
            <button onClick={()=>setRender(false)}>卸载组件</button>
            <button onClick={()=>setRender(true)}>加载组件</button>
        </div>
    )
}