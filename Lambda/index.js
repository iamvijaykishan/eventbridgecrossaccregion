const AWS = require('aws-sdk');
const eventBridge = new AWS.EventBridge();
exports.handler = async (event) => {
 
    
  const params = {
    Entries: [ 
      {
        Detail: JSON.stringify({
          "dest":"CMS.01",
          "title" : "JAI",
          "duration" : 591
        }),
        DetailType: 'Media Added',
        EventBusName: 'media-event-bus',
        Source: 'Transcoder',
        Time: new Date 
      }
    ]
  }
    
    console.log(params);
    const result = await eventBridge.putEvents(params).promise();
    console.log(result);
   
};
