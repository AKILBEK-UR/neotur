/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Modal.css';

export default function Modal({ show, children }){
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
        </div>
      </div>
    </div>
  );
}