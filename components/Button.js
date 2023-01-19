import AuthorCss from '../styles/author.module.scss'

export default function  Button (props){

      
    return (
        <div>
        <button  className={AuthorCss.btn}  onClick={props.onClick}>
        {props.title}
      </button>
      
         </div>
    )
}