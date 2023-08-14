// import React, { useEffect, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { incrementHp, decrementHp, incrementByAmountHp, decrementByAmountHp, setAmountHp, incrementHpM, decrementHpM, incrementByAmountHpM, decrementByAmountHpM, setAmountHpM, checkHpLimit } from '../reducers/hpSlice'
// import { incrementMp, decrementMp, incrementByAmountMp, decrementByAmountMp, setAmountMp, incrementMpM, decrementMpM, incrementByAmountMpM, decrementByAmountMpM, setAmountMpM, checkMpLimit } from '../reducers/mpSlice'
// import { incrementAgi, decrementAgi, incrementByAmountAgi, decrementByAmountAgi, setAmountAgi } from '../reducers/agilitySlice'
// import { incrementAtk, decrementAtk, incrementByAmountAtk, decrementByAmountAtk, setAmountAtk } from '../reducers/atkSlice'
// import { incrementDef, decrementDef, incrementByAmountDef, decrementByAmountDef, setAmountDef } from '../reducers/defSlice'
// import { incrementLuk, decrementLuk, incrementByAmountLuk, decrementByAmountLuk, setAmountLuk } from '../reducers/lukSlice'
// import { incrementPow, decrementPow, incrementByAmountPow, decrementByAmountPow, setAmountPow } from '../reducers/powSlice'
// import { incrementRes, decrementRes, incrementByAmountRes, decrementByAmountRes, setAmountRes } from '../reducers/resSlice'
// import { incrementSpd, decrementSpd, incrementByAmountSpd, decrementByAmountSpd, setAmountSpd } from '../reducers/spdSlice'
// import { incrementStr, decrementStr, incrementByAmountStr, decrementByAmountStr, setAmountStr } from '../reducers/strengthSlice'
// import { incrementWis, decrementWis, incrementByAmountWis, decrementByAmountWis, setAmountWis } from '../reducers/wisdomSlice'

// export function Status() {
//   const hp = useSelector((state) => state.hp.value)
//   const hpMaxEx = useSelector((state) => state.hp.max)
//   const mp = useSelector((state) => state.mp.value)
//   const mpMaxEx = useSelector((state) => state.mp.max)
//   const agility = useSelector((state) => state.agi.value)
//   const strength = useSelector((state) => state.str.value)
//   const wisdom = useSelector((state) => state.wis.value)
//   const attackEx = useSelector((state) => state.atk.value)
//   const defenceEx = useSelector((state) => state.def.value)
//   const powerEx = useSelector((state) => state.pow.value)
//   const resistEx = useSelector((state) => state.res.value)
//   const speedEx = useSelector((state) => state.spd.value)
//   const luckEx = useSelector((state) => state.luk.value)
//   const dispatch = useDispatch()

//   let [hpMax, setHpMax] = useState(hpMaxEx + strength * 20)
//   let [mpMax, setMpMax] = useState(mpMaxEx + wisdom * 10)
//   let [attack, setAttack] = useState(attackEx + strength * 2 + agility )
//   let [defence, setDefence] = useState(defenceEx + strength + agility * 2)
//   let [power, setPower] = useState(powerEx + wisdom)
//   let [resist, setResist] = useState(resistEx + wisdom * 2 + strength)
//   let [speed, setSpeed] = useState(speedEx + agility)
//   let [luck, setLuck] = useState(luckEx + agility + wisdom)

//     useEffect(() => {
//         dispatch(setAmountHp(hpMax))
//         dispatch(setAmountMp(mpMax))
//     })

//     useEffect(() => {
//         setHpMax(hpMaxEx + strength * 20)
//     },[hpMaxEx, strength])

//     useEffect(() => {
//         setMpMax(mpMaxEx + wisdom * 10)
//     },[mpMaxEx, wisdom])

//     useEffect(() => {
//         setAttack(attackEx + strength * 2 + agility )
//     },[attackEx, strength, agility])

//     useEffect(() => {
//         setDefence(defenceEx + strength + agility * 2)
//     },[defenceEx, strength, agility])

//     useEffect(() => {
//         setPower(powerEx + wisdom)
//     },[powerEx, wisdom])

//     useEffect(() => {
//         setResist(resistEx + wisdom * 2 + strength)
//     },[resistEx, wisdom, strength])

//     useEffect(() => {
//         setSpeed(speedEx + agility)
//     },[speedEx, agility])

//     useEffect(() => {
//         setLuck(luckEx + agility + wisdom)
//     },[luckEx, agility, wisdom])

//   return (
//     <div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(incrementHpM())}
//         >
//           Increment
//         </button>
//         <span>{hp}/{hpMax}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrementHpM())}
//         >
//           Decrement
//         </button>
//       </div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(incrementMpM())}
//         >
//           Increment
//         </button>
//         <span>{mp}/{mpMax}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrementMpM())}
//         >
//           Decrement
//         </button>
//       </div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(incrementAtk())}
//         >
//           Increment
//         </button>
//         <span>{attack}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrementAtk())}
//         >
//           Decrement
//         </button>
//       </div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(incrementDef())}
//         >
//           Increment
//         </button>
//         <span>{defence}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrementDef())}
//         >
//           Decrement
//         </button>
//       </div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(incrementPow())}
//         >
//           Increment
//         </button>
//         <span>{power}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrementPow())}
//         >
//           Decrement
//         </button>
//       </div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(incrementRes())}
//         >
//           Increment
//         </button>
//         <span>{resist}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrementRes())}
//         >
//           Decrement
//         </button>
//       </div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(incrementSpd())}
//         >
//           Increment
//         </button>
//         <span>{speed}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrementSpd())}
//         >
//           Decrement
//         </button>
//       </div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(incrementLuk())}
//         >
//           Increment
//         </button>
//         <span>{luck}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrementLuk())}
//         >
//           Decrement
//         </button>
//       </div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(incrementAgi())}
//         >
//           Increment
//         </button>
//         <span>agility</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrementAgi())}
//         >
//           Decrement
//         </button>
//       </div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(incrementStr())}
//         >
//           Increment
//         </button>
//         <span>strength</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrementStr())}
//         >
//           Decrement
//         </button>
//       </div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(incrementWis())}
//         >
//           Increment
//         </button>
//         <span>wisdom</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrementWis())}
//         >
//           Decrement
//         </button>
//       </div>
//     </div>
//   )
// }

// // export const { hpMax, mpMax, attack, defence, power, resist, speed, luck, agility, strength, wisdom} = Status.arguments