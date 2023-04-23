import { Email } from './Email/index.js';
const renderSection = (emails, element) => {
  element = emails.map((email) => {
    let unread = 'opened';
    if (email.unread) {
      unread = 'closed';
    }

    return (element.innerHTML += Email({
      senderName: email.sender.name,
      subject: email.subject,
      time: email.time,
      unread: email.unread,
    }));
  });
};

fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread`)
  .then((response) => response.json())
  .then((data) =>
    renderSection(data.emails, document.getElementById('unread')),
  );

fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read`)
  .then((response) => response.json())
  .then((data) => renderSection(data.emails, document.getElementById('read')));
