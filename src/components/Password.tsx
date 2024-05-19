import style from './Password.module.scss'

const Password = (props: any) => {
  return (
    <div className={style.password}>
        {props.pass}
    </div>
  )
}

export default Password
