const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
    const allMessages = parseInt(document.querySelectorAll('.unread-badge')[1].getAttribute('data-badge-count'));

    // set Franz badge
    Franz.setBadge(allMessages);
  };


  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
