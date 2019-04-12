export function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  Logger.log(data);
  if (data && data.action === 'opened') {
    if (
      data.issue &&
      data.issue.labels &&
      ( // tmp
        data.issue.labels[0].name === 'request' ||
        data.issue.labels[1].name === 'request' ||
        data.issue.labels[2].name === 'request' ||
        data.issue.labels[3].name === 'request'
      )
    ) {
      const urlFetchOption: any = {
        method: 'post', 
        contentType: 'application/json; charset=utf-8',
        muteHttpExceptions: true,
        payload: JSON.stringify({
          text: `hey <@${process.env.SLACK_MENTION_ID}>\n` + 'created LP creationn request ' + '<' + data.issue.html_url + '>',
        }),
      };
      UrlFetchApp.fetch(process.env.SLACK_WEBHOOK_URL, urlFetchOption);
    }
  }
}
