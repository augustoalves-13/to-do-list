import './index.scss'

const StandartInput = (props) => {
   return (
      <div className="inp-container">
         <label>{props.label}</label>
         <input className={`input ${props.changeClass}`} type="text" value={props.value} onChange={e => props.onChangeText(e.target.value)}/>
      </div>
   )
}

export default StandartInput