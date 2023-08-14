import "./Event.css"
import React, { useEffect, useState } from 'react';
import events from '../utils/events';
import { useSelector, useDispatch } from 'react-redux'
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
import { EventButton } from './EventButton'
import { EventBattle } from "./EventBattle";
import { addSkill } from "../reducers/skillSlice";

export function Event(props) {
    const [triggered, setTriggered] = useState(false)
    const [header, setHeader] = useState("")
    const [content, setContent] = useState("")
    const [eventID, setEventID] = useState(-1)
    const [inFight, setInFight] = useState(false)
    const [enemy, setEnemy] = useState({})

    const dispatch = useDispatch()
    var set = false

    useEffect(() => {
        if (props.seconds >= 3 && !triggered && Math.floor(Math.random() * 100 + 1) >= 80) {
            setTriggered(true)
            props.getTrigger(true)
            var eventId = Math.floor(Math.random() * events.length)
            console.log(eventId)
            while (!events[eventId].head.triggerable) {
                eventId = Math.floor(Math.random() * events.length)
                console.log(eventId)
            }
            setEventID(eventId)
        } else if (props.seconds == 1 && !set) {
            dispatch(setAmountHp(props.hpMax))
            dispatch(setAmountMp(props.mpMax))
            set = true
        }
    }, [props.seconds])

    useEffect(() => {
        if (eventID != -1) {
            setHeader(events[eventID].head.header)
            setContent(events[eventID].contents.content1)
        }
    }, [eventID])

    function handleTag(buttonObj) {
        console.log(buttonObj)
        let j = 0
        for (let i = 0; i < buttonObj.tags.length; i++) {
            switch (buttonObj.tags[i]) {
                case "next_choice":
                    setEventID(buttonObj.nextId)
                    break;
                case "end":
                    handleTrigger()
                    break;
                case "add_skill":
                    buttonObj.skills.forEach(skill => {
                        if (props.skillSet.indexOf(skill) < 0)
                            dispatch(addSkill(skill))
                        else
                            randomAttribute()
                    })
                    break;
                case "battle":
                    handleBattle(buttonObj.enemy)
                    break;
                default:
                    handleAmountChange(buttonObj.tags[i], buttonObj.value[j])
                    j++
                    break;
            }
        }
    }

    function randomAttribute() {
        let flag = Math.floor(Math.random() * 3)
        let value = Math.floor(Math.random() * 10 + 1)
        switch (flag) {
            case 0:
                dispatch(incrementByAmountAgi(value))
                break;
            case 1:
                dispatch(incrementByAmountStr(value))
                break;
            default:
                dispatch(incrementByAmountWis(value))
                break;
        }
    }

    function handleTrigger() {
        setTriggered(false)
        props.getTrigger(false)
        setHeader("")
        setContent("")
        setEventID(-1)
        console.log("canceled")
    }

    function handleBattle(enemyObj) {
        setInFight(true)
        setEnemy(enemyObj)
    }

    function handleBattleEnd() {
        setInFight(false)
        setEnemy({})
    }

    function handleAmountChange(tag, value) {
        switch (tag) {
            case "hp_decrease":
                dispatch(decrementByAmountHp(value))
                break;
            case "hp_increase":
                dispatch(incrementByAmountHp(value))
                break;
            case "hpM_decrease":
                dispatch(decrementByAmountHpM(value))
                break;
            case "hpM_increase":
                dispatch(incrementByAmountHpM(value))
                break;
            case "mp_decrease":
                dispatch(decrementByAmountMp(value))
                break;
            case "mp_increase":
                dispatch(incrementByAmountMp(value))
                break;
            case "mpM_decrease":
                dispatch(decrementByAmountMpM(value))
                break;
            case "mpM_increase":
                dispatch(incrementByAmountMpM(value))
                break;
            case "agility_decrease":
                dispatch(decrementByAmountAgi(value))
                break;
            case "agility_increase":
                dispatch(incrementByAmountAgi(value))
                break;
            case "strength_decrease":
                dispatch(decrementByAmountStr(value))
                break;
            case "strength_increase":
                dispatch(incrementByAmountStr(value))
                break;
            case "wisdom_decrease":
                dispatch(decrementByAmountWis(value))
                break;
            case "wisdom_increase":
                dispatch(incrementByAmountWis(value))
                break;
            case "attack_decrease":
                dispatch(decrementByAmountAtk(value))
                break;
            case "attack_increase":
                dispatch(incrementByAmountAtk(value))
                break;
            case "defence_decrease":
                dispatch(decrementByAmountDef(value))
                break;
            case "defence_increase":
                dispatch(incrementByAmountDef(value))
                break;
            case "power_decrease":
                dispatch(decrementByAmountPow(value))
                break;
            case "power_increase":
                dispatch(incrementByAmountPow(value))
                break;
            case "resist_decrease":
                dispatch(decrementByAmountRes(value))
                break;
            case "resist_increase":
                dispatch(incrementByAmountRes(value))
                break;
            case "speed_decrease":
                dispatch(decrementByAmountSpd(value))
                break;
            case "speed_increase":
                dispatch(incrementByAmountSpd(value))
                break;
            case "luck_decrease":
                dispatch(decrementByAmountLuk(value))
                break;
            case "luck_increase":
                dispatch(incrementByAmountLuk(value))
                break;
            default:
        }
    }

    return (
        <div>
            {inFight ?
                <div className="BattleBox">
                    <EventBattle enemyObj={enemy} endFunc={handleBattleEnd}
                        hp={props.hp} hpMax={props.hpMax} mp={props.mp} mpMax={props.mpMax}
                        attack={props.attack} defence={props.defence} power={props.power} resist={props.resist} speed={props.speed} luck={props.luck}
                        agility={props.agility} strength={props.strength} wisdom={props.wisdom} skillSet={props.skillSet} />
                </div> : null
            }
            {triggered ?
                <div className='EventBox'>
                    <h3 className='EventHeader'>{header}</h3>
                    <div className='EventBody'>
                        {content}
                    </div>
                    <div className='EventChoice' id='Choice'>
                        {Object.keys(events[eventID].buttons).map(button => (
                            <EventButton text={events[eventID].buttons[button].text} onclick={() => handleTag(events[eventID].buttons[button])} />
                        ))}
                    </div>
                </div> : null
            }
        </div>
    )
}