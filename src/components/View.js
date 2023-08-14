import React, { useEffect, useRef, useState } from 'react'
import views from '../utils/views'

export function View(props) {
    const[inQueue,setInQueue] = useState(0)
    const[queNum,setQueNum] = useState(11)
    const [lines,setLines] = useState([[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,1,1,1,0,0],[0,0,0,0,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,1,0,0,0],[1,1,1,1,1,1,1,1,1,1,1]])

    useEffect(() => {
        console.log(props.seconds)
        let temp = lines
        for(let i = 0; i < temp.length; i++){
            temp[i].shift()
            temp[i].push(views[inQueue].view[i][queNum])
        }
        setLines(temp)
        if(queNum + 1 < views[inQueue].view[0].length) setQueNum(queNum+1)
        else {
            setInQueue(Math.floor(Math.random() * views.length))
            setQueNum(0)
        }
    },[props.seconds])

    return(
        <div>
            <table>
                <tbody>
                    <tr>
                    {lines[0][0] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[0][1] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[0][2] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[0][3] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[0][4] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[0][5] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[0][6] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[0][7] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[0][8] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[0][9] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    </tr>
                    <tr>
                    {lines[1][0] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[1][1] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[1][2] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[1][3] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[1][4] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[1][5] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[1][6] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[1][7] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[1][8] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[1][9] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    </tr>
                    <tr>
                    {lines[2][0] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[2][1] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[2][2] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[2][3] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[2][4] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[2][5] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[2][6] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[2][7] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[2][8] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[2][9] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    </tr>
                    <tr>
                    {lines[3][0] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[3][1] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[3][2] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[3][3] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[3][4] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[3][5] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[3][6] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[3][7] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[3][8] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[3][9] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    </tr>
                    <tr>
                    {lines[4][0] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[4][1] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[4][2] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[4][3] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[4][4] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[4][5] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[4][6] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[4][7] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[4][8] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[4][9] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    </tr>
                    <tr>
                    {lines[5][0] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[5][1] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[5][2] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[5][3] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[5][4] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[5][5] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[5][6] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[5][7] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[5][8] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    {lines[5][9] == 0 ? <td bgcolor="FFFFFF" /> : <td bgcolor="000000"/>}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}