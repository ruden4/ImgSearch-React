import css from "./Button.module.css"

export const Button = ({loadMore}) => {
    return(
        <button className={css.btn} type='button' onClick={loadMore}>Load more</button>
    )
}