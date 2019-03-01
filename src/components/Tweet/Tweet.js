import React, { useState } from 'react';
import Modal from 'react-responsive-modal';
import './tweet.scss';

export default () => {
  const [isModalOpen, updateModalVisiblity] = useState(false);

  return (
    <React.Fragment>
      <button
        className="tweet__button"
        type="button"
        onClick={() => updateModalVisiblity(true)}
      >
        +
      </button>

      <Modal
        open={isModalOpen}
        center
        showCloseIcon={false}
        onClose={() => updateModalVisiblity(false)}
        classNames={{ modal: 'tweet__modal' }}
      >
        <textarea
          placeholder="What's happening?"
          className="tweet__modal__textarea"
          autoFocus
        />
        <button type="button" className="tweet__modal__submit">
          <i className="fa fa-twitter margin--base--right" />
          Tweet
        </button>
      </Modal>
    </React.Fragment>
  );
};
