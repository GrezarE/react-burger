import style from './orders.module.css'




export const Orders = () => {
  return (
    <section className='pt-25'>
      <div className={style.orders__box}>
        <div className={style.list__box}><h2 className="mb-6 text text_type_main-default">Готовы:</h2><ul className={style.orders__list}><li className={"text text_type_digits-default " + style.ready}>034533</li><li className={"text text_type_digits-default " + style.ready}>034532</li></ul></div>
        <div className={style.list__box}><h2 className="mb-6 text text_type_main-default">В работе:</h2><ul className={style.orders__list}><li className="text text_type_digits-default">034538</li><li className="text text_type_digits-default">034541</li></ul></div>
      </div>
      <div >
        <h2 className="mt-15 text text_type_main-default">Выполнено за все время:</h2>
        <p className="text text_type_digits-large">28 752</p>
      </div>
      <div>
        <h2 className="mt-15 text text_type_main-default">Выполнено за сегодня:</h2>
        <p className="text text_type_digits-large">138</p>
      </div>
    </section>
  )
}

