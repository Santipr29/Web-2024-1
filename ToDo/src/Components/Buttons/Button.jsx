import "./Button.css"

export const Button = (props) => {
    const {title, type, onClick, uid} = props

    const handleClick = () => onClick(type);

    return (
      <button className="button"
                    id={uid}
                    type = {type}
                    onClick={handleClick}>
                    {title}
      </button>
    )
}
