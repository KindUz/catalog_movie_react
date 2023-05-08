import React from 'react'

const Pagination = (props) => {
  const change = (p) => {
    props.changePage(p);
  }

  if (!props.numbers) return ''
  return (
    <div className="wrapper__pagination">
        {props.numbers.map(p => 
          <button key={p} onClick={() => change(p)} className={props.page === p ? 'btn__pagination active' : 'btn__pagination'}>{p}</button>
        )}
      </div>
  )
}

export default Pagination