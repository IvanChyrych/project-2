import style from './Container.module.css'

export function Container (props) {
  const className = props.sm ? style.containerSm : style.container

  return <div className={className}>{props.children}</div>
}
