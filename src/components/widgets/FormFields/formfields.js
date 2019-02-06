import React from 'react';
import styles from './formfields.css';

const formFields = ({ id, formdata, change }) => {
  const renderTemplate = () => {
    let formTemplate = null;

    switch (formdata.element) {
      case 'input':
        formTemplate = <div>input</div>;
        break;
      default:
        formTemplate = null;
    }
    return formTemplate;
  };

  return <div>{renderTemplate()}</div>;
};

export default formFields;
