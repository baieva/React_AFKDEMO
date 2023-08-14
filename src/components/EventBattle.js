import React, { useEffect, useState } from 'react';
import skills from '../utils/skills';
import "./EventBattle.css"
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
import { wait } from '@testing-library/user-event/dist/utils';

export function EventBattle({ enemyObj, endFunc, hp, hpMax, mp, mpMax, attack, defence, power, resist, speed, luck, agility, strength, wisdom, skillSet }) {
    const [enemyHp, setEnemyHp] = useState(0)
    const [enemyMp, setEnemyMp] = useState(0)
    const [enemyStats, setEnemyStats] = useState([0,0,0,0,0,0])

    const [speedLineSelf, setSpeedLineSelf] = useState([0,0])
    const [speedLineEnemy, setSpeedLineEnemy] = useState([0,0])

    const [turn, setTurn] = useState(-1)
    const [battleMsg, setBattleMsg] = useState(" ")
    const [battleMsgOld, setBattleMsgOld] = useState(" ")

    const [settle, setSettle] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        console.log(turn)
        if(turn == -1 && settle == false){
            setEnemyHp(enemyObj.stats.hp)
            setEnemyMp(enemyObj.stats.mp)
            setEnemyStats([enemyObj.stats.atk, enemyObj.stats.def, enemyObj.stats.pow, enemyObj.stats.res, enemyObj.stats.spd, enemyObj.stats.luk])
            setSpeedLineEnemy([0, findFloor(enemyStats[4])])
            setSpeedLineSelf([0, findFloor(speed)])
            setTurn(2)
        }
        if (turn == 2) {
            let spdLE = speedLineEnemy[0]
            let spdLS = speedLineSelf[0]
            let count = true
            while(spdLE < speedLineEnemy[1] || spdLS < speedLineSelf[1]){
                if(count)
                    spdLS += speed
                else
                    spdLE += enemyStats[4]

                count = !count
            }
            if(speedLineEnemy[0] > speedLineEnemy[1]){
                setSpeedLineEnemy([0,speedLineEnemy[1]])
                setSpeedLineSelf([spdLS,speedLineSelf[1]])
                setTurn(1)
            }else{
                setSpeedLineEnemy([spdLE,speedLineEnemy[1]])
                setSpeedLineSelf([0,speedLineSelf[1]])
                setTurn(0)
            }
        } else if (turn == 1){
            var skill_choose = enemyObj.skill[Math.floor(Math.random() * enemyObj.skill.length)]
            console.log("skill" + skill_choose)
            while(!handleSkill(skills[skill_choose], "enemy")){
                skill_choose = enemyObj.skill[Math.floor(Math.random() * enemyObj.skill.length)]
                console.log("skill" + skill_choose)
            }
            setTurn(2)
        }
    }, [turn])

    useEffect(() => {
        if(enemyHp <= 0 && settle == true){
            setEnemyHp(0)
            setEnemyMp(0)
            setEnemyStats([0,0,0,0,0,0])
            setSpeedLineEnemy([0, 0])
            setSpeedLineSelf([0, 0])
            setTurn(-1)
            setBattleMsg("")
            setSettle(false)
            endFunc()
        }else if(enemyHp > 0){
            setSettle(true)
        }
    },[enemyHp])

    function findFloor(num) {
        let t = num
        let count = 0
        while (t >= 1) {
            t = t / 10
            count++
        }
        return Math.pow(10, count)*5
    }
    // name: "slash",
    // decideBy: "atk",
    // target: "opponent",
    // baseHpDamage: 1,
    // baseMpDamage: 0,
    // buff: [],
    // debuff: [],
    // costType: "mp",
    // costValue: 0,
    // damage reduce : 2/(1 + pow(1.02, -x)) - 1
    // critical : 2/(1 + pow(1.04,-x-4)) - 1
    function handleSkill(skillObj, user) {
        if ((user == "you" && (skillObj.costType == "mp" ? skillObj.costValue <= mp : skillObj.costValue < hp)) || (user == "enemy" && (skillObj.costType == "mp" ? skillObj.costValue <= enemyMp : skillObj.costValue < enemyHp))) {
            console.log("attack succeed")
            let dice = Math.floor(Math.random() * 100 + 1) <= (user == "you" ? (luck - enemyStats[5]) : (enemyStats[5] - luck)) ? 2 : 1
            if (skillObj.target == "opponent") {
                if (skillObj.decideBy == "atk") { //decide by atk
                    if (user == "you") {
                        if(!isNaN(skillObj.baseHpDamage)) setEnemyHp(enemyHp - Math.max(1,(skillObj.baseHpDamage + attack - enemyStats[1])) * dice)
                        if(!isNaN(skillObj.baseMpDamage)) setEnemyMp(enemyMp - Math.max(1,(skillObj.baseMpDamage + attack - enemyStats[1])) * dice)
                        if (skillObj.costType == "mp") {
                            dispatch(decrementByAmountMp(skillObj.costValue))
                        } else {
                            dispatch(decrementByAmountHp(skillObj.costValue))
                        }
                        setBattleMsgOld(battleMsg)
                        setBattleMsg("You dealt " + (isNaN(skillObj.baseHpDamage) ? 0 : Math.max(1,((skillObj.baseHpDamage + attack - enemyStats[1]) * dice))) + ":" + (isNaN(skillObj.baseMpDamage) ? 0 : Math.max(1,((skillObj.baseMpDamage + attack - enemyStats[1]) * dice))) + " by using " + skillObj.name)
                    }
                    if (user == "enemy") {
                        if(!isNaN(skillObj.baseHpDamage)) dispatch(decrementByAmountHp(Math.max(1,(skillObj.baseHpDamage + enemyStats[0] - defence)) * dice))
                        if(!isNaN(skillObj.baseMpDamage)) dispatch(decrementByAmountMp(Math.max(1,(skillObj.baseMpDamage + enemyStats[0] - defence)) * dice))
                        if (skillObj.costType == "mp") {
                            setEnemyMp(enemyMp - skillObj.costValue)
                        } else {
                            setEnemyHp(enemyHp - skillObj.costValue)
                        }
                        setBattleMsgOld(battleMsg)
                        setBattleMsg("Enemy dealt " + (isNaN(skillObj.baseHpDamage) ? 0 : Math.max(1,((skillObj.baseHpDamage + enemyStats[0] - defence) * dice))) + ":" + (isNaN(skillObj.baseMpDamage) ? 0 : Math.max(1,((skillObj.baseMpDamage + enemyStats[0] - defence) * dice))) + " by using " + skillObj.name)
                    }
                } else if (skillObj.decideBy == "pow") { //decide by pow
                    if (user == "you") {
                        if(!isNaN(skillObj.baseHpDamage)) setEnemyHp(enemyHp - Math.max(1,(skillObj.baseHpDamage + power - enemyStats[3])) * dice)
                        if(!isNaN(skillObj.baseMpDamage)) setEnemyMp(enemyMp - Math.max(1,(skillObj.baseMpDamage + power - enemyStats[3])) * dice)
                        if (skillObj.costType == "mp") {
                            dispatch(decrementByAmountMp(skillObj.costValue))
                        } else {
                            dispatch(decrementByAmountHp(skillObj.costValue))
                        }
                        setBattleMsgOld(battleMsg)
                        setBattleMsg("You dealt " + (isNaN(skillObj.baseHpDamage) ? 0 : Math.max(1,((skillObj.baseHpDamage + power - enemyStats[3]) * dice))) + ":" + (isNaN(skillObj.baseMpDamage) ? 0 : Math.max(1,((skillObj.baseMpDamage + power - enemyStats[3]) * dice))) + " by using " + skillObj.name)
                    }
                    if (user == "enemy") {
                        if(!isNaN(skillObj.baseHpDamage)) dispatch(decrementByAmountHp(Math.max(1,(skillObj.baseHpDamage + enemyStats[2] - resist)) * dice))
                        if(!isNaN(skillObj.baseMpDamage)) dispatch(decrementByAmountMp(Math.max(1,(skillObj.baseMpDamage + enemyStats[2] - resist)) * dice))
                        if (skillObj.costType == "mp") {
                            setEnemyMp(enemyMp - skillObj.costValue)
                        } else {
                            setEnemyHp(enemyHp - skillObj.costValue)
                        }
                        setBattleMsgOld(battleMsg)
                        setBattleMsg("Enemy dealt " + (isNaN(skillObj.baseHpDamage) ? 0 : Math.max(1,((skillObj.baseHpDamage + enemyStats[2] - resist) * dice))) + ":" + (isNaN(skillObj.baseMpDamage) ? 0 : Math.max(1,((skillObj.baseMpDamage + enemyStats[2] - resist) * dice))) + " by using " + skillObj.name)
                    }
                } else { //decide by true
                    if (user == "you") {
                        setEnemyHp(enemyHp - (skillObj.baseHpDamage) * dice)
                        setEnemyMp(enemyMp - (skillObj.baseMpDamage) * dice)
                        if (skillObj.costType == "mp") {
                            dispatch(decrementByAmountMp(skillObj.costValue))
                        } else {
                            dispatch(decrementByAmountHp(skillObj.costValue))
                        }
                        setBattleMsgOld(battleMsg)
                        setBattleMsg("You dealt " + ((skillObj.baseHpDamage) * dice) + ":" + ((skillObj.baseMpDamage) * dice) + " by using " + skillObj.name)
                    }
                    if (user == "enemy") {
                        dispatch(decrementByAmountHp((skillObj.baseHpDamage) * dice))
                        dispatch(decrementByAmountMp((skillObj.baseMpDamage) * dice))
                        if (skillObj.costType == "mp") {
                            setEnemyMp(enemyMp - skillObj.costValue)
                        } else {
                            setEnemyHp(enemyHp - skillObj.costValue)
                        }
                        setBattleMsgOld(battleMsg)
                        setBattleMsg("Enemy dealt " + ((skillObj.baseHpDamage) * dice) + ":" + ((skillObj.baseMpDamage) * dice) + " by using " + skillObj.name)
                    }
                }
            } else {
                if (skillObj.decideBy == "atk") {
                    if (user == "you") {
                        if(!isNaN(skillObj.baseHpDamage)) dispatch(incrementByAmountHp((skillObj.baseHpDamage + attack) * dice))
                        if(!isNaN(skillObj.baseMpDamage)) dispatch(incrementByAmountMp((skillObj.baseMpDamage + attack) * dice))
                        if (skillObj.costType == "mp") {
                            dispatch(decrementByAmountMp(skillObj.costValue))
                        } else {
                            dispatch(decrementByAmountHp(skillObj.costValue))
                        }
                        setBattleMsgOld(battleMsg)
                        setBattleMsg("You heal " + (isNaN(skillObj.baseHpDamage) ? 0 : ((skillObj.baseHpDamage + attack) * dice)) + ":" + (isNaN(skillObj.baseMpDamage) ? 0 : ((skillObj.baseMpDamage + attack) * dice)) + " by using " + skillObj.name)
                    }
                    if (user == "enemy") {
                        if(!isNaN(skillObj.baseHpDamage)) setEnemyHp(enemyHp + (skillObj.baseHpDamage + enemyStats[0]) * dice)
                        if(!isNaN(skillObj.baseMpDamage)) setEnemyMp(enemyMp + (skillObj.baseMpDamage + enemyStats[0]) * dice)
                        if (skillObj.costType == "mp") {
                            setEnemyMp(enemyMp - skillObj.costValue)
                        } else {
                            setEnemyHp(enemyHp - skillObj.costValue)
                        }
                        setBattleMsgOld(battleMsg)
                        setBattleMsg("Enemy heal " + (isNaN(skillObj.baseHpDamage) ? 0 : ((skillObj.baseHpDamage + enemyStats[0]) * dice)) + ":" + (isNaN(skillObj.baseMpDamage) ? 0 : ((skillObj.baseMpDamage + enemyStats[0]) * dice)) + " by using " + skillObj.name)
                    }
                } else if (skillObj.decideBy == "pow") {
                    if (user == "you") {
                        if(!isNaN(skillObj.baseHpDamage)) dispatch(incrementByAmountHp((skillObj.baseHpDamage + power) * dice))
                        if(!isNaN(skillObj.baseMpDamage)) dispatch(incrementByAmountMp((skillObj.baseMpDamage + power) * dice))
                        if (skillObj.costType == "mp") {
                            dispatch(decrementByAmountMp(skillObj.costValue))
                        } else {
                            dispatch(decrementByAmountHp(skillObj.costValue))
                        }
                        setBattleMsgOld(battleMsg)
                        setBattleMsg("You heal " + (isNaN(skillObj.baseHpDamage) ? 0 : ((skillObj.baseHpDamage + power) * dice)) + ":" + (isNaN(skillObj.baseMpDamage) ? 0 : ((skillObj.baseMpDamage + power) * dice)) + " by using " + skillObj.name)
                    }
                    if (user == "enemy") {
                        if(!isNaN(skillObj.baseHpDamage)) setEnemyHp(enemyHp + (skillObj.baseHpDamage + enemyStats[2]) * dice)
                        if(!isNaN(skillObj.baseMpDamage)) setEnemyMp(enemyMp + (skillObj.baseMpDamage + enemyStats[2]) * dice)
                        if (skillObj.costType == "mp") {
                            setEnemyMp(enemyMp - skillObj.costValue)
                        } else {
                            setEnemyHp(enemyHp - skillObj.costValue)
                        }
                        setBattleMsgOld(battleMsg)
                        setBattleMsg("Enemy heal " + (isNaN(skillObj.baseHpDamage) ? 0 : ((skillObj.baseHpDamage + enemyStats[2]) * dice)) + ":" + (isNaN(skillObj.baseMpDamage) ? 0 : ((skillObj.baseMpDamage + enemyStats[2]) * dice)) + " by using " + skillObj.name)
                    }
                } else {
                    if (user == "you") {
                        dispatch(incrementByAmountHp((skillObj.baseHpDamage) * dice))
                        dispatch(incrementByAmountMp((skillObj.baseMpDamage) * dice))
                        if (skillObj.costType == "mp") {
                            dispatch(decrementByAmountMp(skillObj.costValue))
                        } else {
                            dispatch(decrementByAmountHp(skillObj.costValue))
                        }
                        setBattleMsgOld(battleMsg)
                        setBattleMsg("You heal " + ((skillObj.baseHpDamage) * dice) + ":" + ((skillObj.baseMpDamage) * dice) + " by using " + skillObj.name)
                    }
                    if (user == "enemy") {
                        setEnemyHp(enemyHp + (skillObj.baseHpDamage) * dice)
                        setEnemyMp(enemyMp + (skillObj.baseMpDamage) * dice)
                        if (skillObj.costType == "mp") {
                            setEnemyMp(enemyMp - skillObj.costValue)
                        } else {
                            setEnemyHp(enemyHp - skillObj.costValue)
                        }
                        setBattleMsgOld(battleMsg)
                        setBattleMsg("Enemy heal " + ((skillObj.baseHpDamage) * dice) + ":" + ((skillObj.baseMpDamage) * dice) + " by using " + skillObj.name)
                    }
                }
            }
            if (turn == 0) setTurn(2)
        }else{
            console.log("attack failed")
            if(turn == 0) {
                setBattleMsgOld(battleMsg)
                setBattleMsg("not enough cost")
            }
            return false
        }
        return true
    }

    function skillButtons() {
        let list = []
        skillSet.forEach(skill => {
            list.push(<button onClick={() => { if (turn == 0) handleSkill(skills[skill], "you") }}>{skills[skill].name}:{skills[skill].description}</button>)
        })
        return list
    }

    return (
        <div className='battleArea'>
            <div className='portraitsArea'>
                <div id='l'>
                    <p>\( 0 _ 0 \)</p>
                    <p>You</p>
                </div>
                <div id='m'>
                    <p>X</p>
                </div>
                <div id='r'>
                    <p>{enemyObj.portrait}</p>
                    <p>{enemyObj.name}:{enemyHp}</p>
                </div>
            </div>
            <div className='battleMessages'>
                {turn == 2 ? <h4 id='up'>Moving</h4> : turn == 0 ? <h4 id='up'>Your Turn</h4> : <h4 id='up'>Enemy Turn</h4>}
                <h4 id='mid'>{battleMsgOld}</h4>
                <h4 id='down'>{battleMsg}</h4>
            </div>
            <div className='skillArea'>
                {
                    skillButtons()
                }
            </div>
        </div>
    )
}