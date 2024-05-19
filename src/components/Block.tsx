import { useEffect, useState } from 'react';
import style from './Block.module.scss';
import Password from './Password';


const Block = () => {

  //---------------- parameters -------------------------
  const [size, setSize] = useState(5)
  function sizeValue(e:any) {
    setSize(e.target.value)
  }
  // -------------------
  const [uppercase, setUppercase] = useState(false)
  function uppercaseValue() {
    uppercase==false ? setUppercase(true) : setUppercase(false);
    SetPasswordParameter()
  }
  // -------------------
  const [special, setSpecial] = useState(true)
  function specialValue() {
    special==false ? setSpecial(true) : setSpecial(false);
    SetPasswordParameter()
  }
  // -------------------
  const [number, setNumber] = useState(true)
  function numberValue() {
    number==false ? setNumber(true) : setNumber(false);
  }
  // -----------------------------------------------------------------------
  const [password, setPassword] = useState("PASSWORD")
  const randomStringLow = "abcdefghijklmnopqrstuvwxyz"
  const randomStringUpper = "abcdefghijklmnopqrstuvwxyz".toUpperCase()
  const randomStringSpecial = "+-.,/*?!%#@"
  const randomStrinNumber = "0123456789"
  const [randomString,setRandomString] = useState("")

  function SetPasswordParameter() {
    const string =  `${randomStringLow}${uppercase ? randomStringUpper : ""}${special ? randomStringSpecial: ""}${number ? randomStrinNumber: ""}`
    setRandomString(string)
  }
  useEffect(() => {
    SetPasswordParameter()
  })

  function randomPassword() {
    let stringPassword = "";
    for(let i = 0; i<size; i++) {
      const randomIndex = Math.floor(Math.random()*(randomString.length-1))
      stringPassword += randomString[randomIndex]
    }
    setPassword(stringPassword)
  }

  return (
    <div className={style.block}>
      <div className={style.head}>Password Generator</div>
      <form className={style.form}>
        <label className={style.sizeLabel} htmlFor="size">Size </label>
        <select className={style.sizeSelect} defaultValue={5} id="size" onChange={sizeValue}>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <label className={style.upperLabel} htmlFor="uppercase">Uppercase</label>
        <input className={style.upperInput} type="checkbox" id="uppercase" onChange={uppercaseValue}/>

        <label className={style.numLabel} htmlFor="number">Numbers</label>
        <input className={style.numInput} type="checkbox" defaultChecked={true} id="number" onChange={numberValue}/>

        <label className={style.specialLabel} htmlFor="special">Specials item</label>
        <input className={style.specialInput} type="checkbox" defaultChecked={true} id="special" onChange={specialValue}/>
      </form>

      <button className={style.button} id="button" onClick={randomPassword}>Generate</button>

      <Password pass={password}/>
    </div>
  )
}

export default Block;
