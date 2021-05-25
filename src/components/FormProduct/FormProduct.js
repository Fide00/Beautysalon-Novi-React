import React from 'react'

export default function FormProduct (props) {
  return (
        <article>
            <input type="checkbox" name="item" className="checkbox-style" id={props.id} value={props.price} onChange={props.onChange}/>
            <label htmlFor={props.id}> {props.title}: €{props.price} </label>
        </article>
  )
}
