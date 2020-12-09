import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { AddNewReservedDate, GetProvider } from '../../../items/state'

export function Modal({ id, type, date, toggleModal, showModal, setDate }) {

  const refInput = useRef(null);

  const RenderModalWindow = () => {
    return <>
      <div className="cl_modaloverlay">
        <div className="cl_modalcontent">
          <p>Book a date for me: {date.day}.{date.month}.{date.year}</p>
          <p>From provider: {GetProvider(id).name}</p>
          <label >I agree
            <input type="checkbox" className="btn btn-warning" ref={refInput} />
          </label>
          <div style={{ display: 'flex', justifyContent: 'space-around', width: '200px', height: '50px', padding: '5px' }}>
            <button type="button" className="btn btn-warning" onClick={handleClick}>Reserve </button>
            <button type="button" className="btn btn-warning" onClick={toggleModal}>Return</button>
          </div>
        </div>
      </div>
    </>
  };

  const componentUnMount = () => {
    setDate(undefined);
  };

  const handleClick = () => {
    if (refInput.current?.checked === true) {
      AddNewReservedDate(id, type, date.year, date.month, date.day);
      componentUnMount();
      toggleModal();
    };
  };

  const ComponentMount = () => {
    return <>
      <div className="cl_modalbuttonwrap">
        <button type="button" className="btn btn-outline-warning" onClick={toggleModal}>
          Choose date:  {date.day}.{date.month}.{date.year}
        </button>
        {
          showModal &&
          ReactDOM.createPortal(<RenderModalWindow />, document.getElementById('root'))
        }
      </div>
    </>
  };

  return (date !== undefined)
    ? <ComponentMount />
    : null
};