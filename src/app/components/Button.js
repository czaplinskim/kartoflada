export default function Button({label, color, size}){

    const colorClassName = color ? "button--" + color : "button--dark-blue"
    const sizeClassName = size ? "button--" + size : "button--regular"

    return <button className={`button button__menu ${colorClassName} ${sizeClassName}`}>{label}</button>
}