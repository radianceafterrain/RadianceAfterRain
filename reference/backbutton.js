document.getElementById('backLink').addEventListener('click', function (e) {
  let fromMySite = false;
  try {
    fromMySite = document.referrer &&
      new URL(document.referrer).origin === location.origin;
  } catch (err) {}

  // Only go "back" if we came from this site AND there's history to go back to
  if (fromMySite && history.length > 1) {
    e.preventDefault();
    history.back();
  }
  // otherwise the link's normal href is followed
});