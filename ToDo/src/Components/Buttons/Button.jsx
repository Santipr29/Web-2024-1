import "./Button.css"

export const Button = (props) => {
    const {title, type, onClick, uid} = props

    return (
      <button className="button" id={uid} type={type} onClick={()=> {onClick(type)}}>{title}</button>
    )
}
