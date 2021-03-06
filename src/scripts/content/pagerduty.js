'use strict';

togglbutton.render(
  '.pd-incident-actions:not(.toggl)',
  { observe: true },
  function () {
    const projectElem = $('.pd-service-name__name a');

    const description = document.title.replace(
      /\[#(\d*)\]([\w\W]*) - PagerDuty/g,
      'Pagerduty $1:$2'
    );

    const link = togglbutton.createTimerLink({
      className: 'pagerduty',
      description: description,
      projectName: projectElem && projectElem.textContent
    });

    $('.pd-incident-actions').appendChild(link);
  }
);
