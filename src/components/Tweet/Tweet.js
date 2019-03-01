import React, { useState } from 'react';
import Modal from 'react-responsive-modal';
import { v4 as generateUuid } from 'uuid';
import './tweet.scss';

export default props => {
  const { addNewTweet } = props;
  const [isModalOpen, updateModalVisiblity] = useState(false);
  const [newTweetValue, updateTweetValue] = useState('');

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
          value={newTweetValue}
          onChange={e => updateTweetValue(e.target.value)}
          autoFocus
        />
        <button
          type="button"
          className="tweet__modal__submit"
          onClick={() =>
            addNewTweet({
              uuid: generateUuid(),
              date: new Date(),
              value: newTweetValue
            })
          }
        >
          <i className="fa fa-twitter margin--base--right" />
          Tweet
        </button>
      </Modal>
    </React.Fragment>
  );
};
