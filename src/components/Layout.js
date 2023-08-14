import "./Layout.css"
import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Event } from "./Event"
import { View } from "./View"
import skills from "../utils/skills"
import { incrementHp, decrementHp, incrementByAmountHp, decrementByAmountHp, setAmountHp, incrementHpM, decrementHpM, incrementByAmountHpM, decrementByAmountHpM, setAmountHpM, checkHpLimit } from '../reducers/hpSlice'
import { incrementMp, decrementMp, incrementByAmountMp, decrementByAmountMp, setAmountMp, incrementMpM, decrementMpM, incrementByAmountMpM, decrementByAmountMpM, setAmountMpM, checkMpLimit } from '../reducers/mpSlice'
import { incrementAgi, decrementAgi, incrementByAmountAgi, decrementByAmountAgi, setAmountAgi } from '../reducers/agilitySlice'
import { incrementAtk, decrementAtk, incrementByAmountAtk, decrementByAmountAtk, setAmountAtk } from '../reducers/atkSlice'
import { incrementDef, decrementDef, incrementByAmountDef, decrementByAmountDef, setAmountDef } from '../reducers/defSlice'
import { incrementLuk, decrementLuk, incrementByAmountLuk, decrementByAmountLuk, setAmountLuk } from '../reducers/lukSlice'
import { incrementPow, decrementPow, incrementByAmountPow, decrementByAmountPow, setAmountPow } from '../reducers/powSlice'
import { incrementRes, decrementRes, incrementByAmountRes, decrementByAmountRes, setAmountRes } from '../reducers/resSlice'
import { incrementSpd, decrementSpd, incrementByAmountSpd, decrementByAmountSpd, setAmountSpd } from '../reducers/spdSlice'
import { incrementStr, decrementStr, incrementByAmountStr, decrementByAmountStr, setAmountStr } from '../reducers/strengthSlice'
import { incrementWis, decrementWis, incrementByAmountWis, decrementByAmountWis, setAmountWis } from '../reducers/wisdomSlice'

export function Layout(props) {
    const [devMode, setDevMode] = useState(true)
    const [startTime, setStartTime] = useState(null)
    const [now, setNow] = useState(null)
    const [oldSeconds, setOldSeconds] = useState(0)
    const [pause, setPause] = useState(true)
    const [eventTrigger, setEventTrigger] = useState(false)

    const refs = useRef(null)
    var secondPassed = 0

    const skillSet = useSelector((state) => state.skill.value)

    const dispatch = useDispatch()
    if (startTime != null && now != null && !pause) {
        secondPassed = (now - startTime) / 1000 + oldSeconds
    }

    function handleStart() {
        if (pause && !eventTrigger) {
            setPause(false)
            setStartTime(Date.now())
            setNow(Date.now())
            clearInterval(refs.current)
            refs.current = setInterval(() => {
                setNow(Date.now())
            }, 10)
        }
    }

    function handleStop() {
        if (!pause) setOldSeconds(secondPassed)
        setPause(true)
        clearInterval(refs.current)
    }

    function getEventTrigger(val) {
        setEventTrigger(val)
    }

    useEffect(() => {
        if (eventTrigger) {
            handleStop()
        }
    }, [eventTrigger])

    function skillList() {
        let list = []
        skillSet.forEach(skill => {
            list.push(<h4>{skills[skill].name}</h4>)
        })
        return list
    }

    return (
        <div className='MainUI'>
            <div className='TimeHead'>
                {!pause ? <h1>Time:{secondPassed.toFixed(0)}</h1> : <h1>Pause</h1>}
            </div>
            <div className="UIBody">
                <div className='LeftUI'>
                    <table className="Status">
                        <thead><tr><td colSpan="2"><h3>Status</h3></td></tr></thead>
                        <tbody>
                            <tr>
                                <td>HP:{props.hp}/{props.hpMax}</td>
                                {devMode ?
                                    <td>
                                        <button
                                            aria-label="Increment value"
                                            onClick={() => dispatch(incrementHpM())}
                                        >
                                            ^
                                        </button>
                                        <button
                                            aria-label="Decrement value"
                                            onClick={() => dispatch(decrementHpM())}
                                        >
                                            v
                                        </button>
                                    </td>
                                    : null}
                            </tr>
                            <tr>
                                <td>MP:{props.mp}/{props.mpMax}</td>
                                {devMode ?
                                    <td>
                                        <button
                                            aria-label="Increment value"
                                            onClick={() => dispatch(incrementMpM())}
                                        >
                                            ^
                                        </button>
                                        <button
                                            aria-label="Decrement value"
                                            onClick={() => dispatch(decrementMpM())}
                                        >
                                            v
                                        </button>
                                    </td>
                                    : null}
                            </tr>
                            <tr>
                                <td>Atk:{props.attack}</td>
                                {devMode ?
                                    <td>
                                        <button
                                            aria-label="Increment value"
                                            onClick={() => dispatch(incrementAtk())}
                                        >
                                            ^
                                        </button>
                                        <button
                                            aria-label="Decrement value"
                                            onClick={() => dispatch(decrementAtk())}
                                        >
                                            v
                                        </button>
                                    </td>
                                    : null}
                            </tr>
                            <tr>
                                <td>Def:{props.defence}</td>
                                {devMode ?
                                    <td>
                                        <button
                                            aria-label="Increment value"
                                            onClick={() => dispatch(incrementDef())}
                                        >
                                            ^
                                        </button>
                                        <button
                                            aria-label="Decrement value"
                                            onClick={() => dispatch(decrementDef())}
                                        >
                                            v
                                        </button>
                                    </td>
                                    : null}
                            </tr>
                            <tr>
                                <td>Pow:{props.power}</td>
                                {devMode ?
                                    <td>
                                        <button
                                            aria-label="Increment value"
                                            onClick={() => dispatch(incrementPow())}
                                        >
                                            ^
                                        </button>
                                        <button
                                            aria-label="Decrement value"
                                            onClick={() => dispatch(decrementPow())}
                                        >
                                            v
                                        </button>
                                    </td>
                                    : null}
                            </tr>
                            <tr>
                                <td>Res:{props.resist}</td>
                                {devMode ?
                                    <td>
                                        <button
                                            aria-label="Increment value"
                                            onClick={() => dispatch(incrementRes())}
                                        >
                                            ^
                                        </button>
                                        <button
                                            aria-label="Decrement value"
                                            onClick={() => dispatch(decrementRes())}
                                        >
                                            v
                                        </button>
                                    </td>
                                    : null}
                            </tr>
                            <tr>
                                <td>Spd:{props.speed}</td>
                                {devMode ?
                                    <td>
                                        <button
                                            aria-label="Increment value"
                                            onClick={() => dispatch(incrementSpd())}
                                        >
                                            ^
                                        </button>
                                        <button
                                            aria-label="Decrement value"
                                            onClick={() => dispatch(decrementSpd())}
                                        >
                                            v
                                        </button>
                                    </td>
                                    : null}
                            </tr>
                            <tr>
                                <td>Luk:{props.luck}</td>
                                {devMode ?
                                    <td>
                                        <button
                                            aria-label="Increment value"
                                            onClick={() => dispatch(incrementLuk())}
                                        >
                                            ^
                                        </button>
                                        <button
                                            aria-label="Decrement value"
                                            onClick={() => dispatch(decrementLuk())}
                                        >
                                            v
                                        </button>
                                    </td>
                                    : null}
                            </tr>
                            <tr>
                                <td>Agility:{props.agility}</td>
                                {devMode ?
                                    <td>
                                        <button
                                            aria-label="Increment value"
                                            onClick={() => dispatch(incrementAgi())}
                                        >
                                            ^
                                        </button>
                                        <button
                                            aria-label="Decrement value"
                                            onClick={() => dispatch(decrementAgi())}
                                        >
                                            v
                                        </button>
                                    </td>
                                    : null}
                            </tr>
                            <tr>
                                <td>Strength:{props.strength}</td>
                                {devMode ?
                                    <td>
                                        <button
                                            aria-label="Increment value"
                                            onClick={() => dispatch(incrementStr())}
                                        >
                                            ^
                                        </button>
                                        <button
                                            aria-label="Decrement value"
                                            onClick={() => dispatch(decrementStr())}
                                        >
                                            v
                                        </button>
                                    </td>
                                    : null}
                            </tr>
                            <tr>
                                <td>Wisdom:{props.wisdom}</td>
                                {devMode ?
                                    <td>
                                        <button
                                            aria-label="Increment value"
                                            onClick={() => dispatch(incrementWis())}
                                        >
                                            ^
                                        </button>
                                        <button
                                            aria-label="Decrement value"
                                            onClick={() => dispatch(decrementWis())}
                                        >
                                            v
                                        </button>
                                    </td>
                                    : null}
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td  colSpan="2">
                                    <h3>Skills</h3>
                                    <div className="SkillSet">
                                        {
                                            skillList()
                                        }
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className='RightUI'>
                    <div className='Map'>
                        <div className='EventArea'>
                            <Event seconds={secondPassed.toFixed(0)} getTrigger={getEventTrigger}
                                hp={props.hp} hpMax={props.hpMax} mp={props.mp} mpMax={props.mpMax}
                                attack={props.attack} defence={props.defence} power={props.power} resist={props.resist} speed={props.speed} luck={props.luck}
                                agility={props.agility} strength={props.strength} wisdom={props.wisdom} skillSet={skillSet}/>
                        </div>
                        <div className='ViewArea'>
                            <View seconds={secondPassed.toFixed(0)} />
                        </div>
                    </div>
                    <div className='Movement'>
                        <button aria-label='Forward' onClick={() => handleStart()}>Go!</button>
                        <button aria-label='Pause' onClick={() => handleStop()}>Stop!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}