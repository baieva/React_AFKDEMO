import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { incrementHp, decrementHp, incrementByAmountHp, decrementByAmountHp, setAmountHp, incrementHpM, decrementHpM, incrementByAmountHpM, decrementByAmountHpM, setAmountHpM, checkHpLimit, setOverloadHp } from './reducers/hpSlice'
import { incrementMp, decrementMp, incrementByAmountMp, decrementByAmountMp, setAmountMp, incrementMpM, decrementMpM, incrementByAmountMpM, decrementByAmountMpM, setAmountMpM, checkMpLimit, setOverloadMp } from './reducers/mpSlice'
import { incrementAgi, decrementAgi, incrementByAmountAgi, decrementByAmountAgi, setAmountAgi } from './reducers/agilitySlice'
import { incrementAtk, decrementAtk, incrementByAmountAtk, decrementByAmountAtk, setAmountAtk } from './reducers/atkSlice'
import { incrementDef, decrementDef, incrementByAmountDef, decrementByAmountDef, setAmountDef } from './reducers/defSlice'
import { incrementLuk, decrementLuk, incrementByAmountLuk, decrementByAmountLuk, setAmountLuk } from './reducers/lukSlice'
import { incrementPow, decrementPow, incrementByAmountPow, decrementByAmountPow, setAmountPow } from './reducers/powSlice'
import { incrementRes, decrementRes, incrementByAmountRes, decrementByAmountRes, setAmountRes } from './reducers/resSlice'
import { incrementSpd, decrementSpd, incrementByAmountSpd, decrementByAmountSpd, setAmountSpd } from './reducers/spdSlice'
import { incrementStr, decrementStr, incrementByAmountStr, decrementByAmountStr, setAmountStr } from './reducers/strengthSlice'
import { incrementWis, decrementWis, incrementByAmountWis, decrementByAmountWis, setAmountWis } from './reducers/wisdomSlice'
import { Layout } from './components/Layout';
//TODO    react.persist   buff/debuff   shop
function App() {
  const hp = useSelector((state) => state.hp.value)
  const hpMaxEx = useSelector((state) => state.hp.max)
  const mp = useSelector((state) => state.mp.value)
  const mpMaxEx = useSelector((state) => state.mp.max)
  const agility = useSelector((state) => state.agi.value)
  const strength = useSelector((state) => state.str.value)
  const wisdom = useSelector((state) => state.wis.value)
  const attackEx = useSelector((state) => state.atk.value)
  const defenceEx = useSelector((state) => state.def.value)
  const powerEx = useSelector((state) => state.pow.value)
  const resistEx = useSelector((state) => state.res.value)
  const speedEx = useSelector((state) => state.spd.value)
  const luckEx = useSelector((state) => state.luk.value)
  const dispatch = useDispatch()

  const [hpMax, setHpMax] = useState(hpMaxEx + strength * 20)
  const [mpMax, setMpMax] = useState(mpMaxEx + wisdom * 10)
  const [attack, setAttack] = useState(attackEx + strength * 2 + agility * 2)
  const [defence, setDefence] = useState(defenceEx + strength + agility)
  const [power, setPower] = useState(powerEx + wisdom * 4)
  const [resist, setResist] = useState(resistEx + wisdom + strength)
  const [speed, setSpeed] = useState(speedEx + agility)
  const [luck, setLuck] = useState(luckEx + agility + wisdom)

  const overloadHp = useSelector((state) => state.hp.overload)
  const overloadMp = useSelector((state) => state.mp.overload)

    // dispatch(setAmountHp(hpMax))
    // dispatch(setAmountMp(mpMax))

    useEffect(() => {
        setHpMax(hpMaxEx + strength * 20)
        if(hpMaxEx + strength * 20 > hpMax && hpMaxEx + strength * 20 - hpMax + hp > hpMax) {
          dispatch(setOverloadHp(hpMaxEx + strength * 20 - hpMax + hp - hpMax))
        }
        dispatch(incrementByAmountHp(hpMaxEx + strength * 20 - hpMax))
    },[hpMaxEx, strength])

    useEffect(() => {
        setMpMax(mpMaxEx + wisdom * 10)
        if(mpMaxEx + wisdom * 10 > mpMax && mpMaxEx + wisdom * 10 - mpMax + mp > mpMax) {
          dispatch(setOverloadMp(mpMaxEx + wisdom * 10 - mpMax + mp - mpMax))
        }
        dispatch(incrementByAmountMp(mpMaxEx + wisdom * 10 - mpMax))
    },[mpMaxEx, wisdom])

    useEffect(() => {
        setAttack(attackEx + strength * 2 + agility)
    },[attackEx, strength, agility])

    useEffect(() => {
        setDefence(defenceEx + agility * 2)
    },[defenceEx, strength, agility])

    useEffect(() => {
        setPower(powerEx + wisdom)
    },[powerEx, wisdom])

    useEffect(() => {
        setResist(resistEx + wisdom + strength)
    },[resistEx, wisdom, strength])

    useEffect(() => {
        setSpeed(speedEx + agility)
    },[speedEx, agility])

    useEffect(() => {
        setLuck(luckEx + agility + wisdom)
    },[luckEx, agility, wisdom])
    
    useEffect(() => {
        if(hp <= 0){
          alert("You Lose!")
          window.location.href = window.location.href 
        } else if(hp > hpMax){
          dispatch(setAmountHp(hpMax + overloadHp))
          dispatch(setOverloadHp(0))
        }
    },[hp])

    useEffect(() => {
      if(mp > mpMax){
        dispatch(setAmountMp(mpMax + overloadMp))
        dispatch(setOverloadMp(0))
      }
  },[mp])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Layout hp={hp} hpMax={hpMax} mp={mp} mpMax={mpMax} 
      attack={attack} defence={defence} power={power} resist={resist} speed={speed} luck={luck} 
      agility={agility} strength={strength} wisdom={wisdom}/>
    <div>
      
    </div>
    </div>
  );
}

export default App;
