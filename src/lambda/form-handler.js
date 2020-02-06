require("dotenv").config();
const fetch = require("node-fetch");

const { HUBSPOT_PORTAL, HUBSPOT_HOMEPAGE_FORM_GUID } = process.env;

const hubSpotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL}/`;

const formNames = {
  contact: "contact"
};

const formGuidMap = {
  [formNames.contact]: HUBSPOT_HOMEPAGE_FORM_GUID
};

exports.handler = async function(event, context) {
  if (!event.body) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false })
    };
  }
  console.log(`Received form submission event: ${event.body}`);

  const eventProperties = JSON.parse(event.body);

  const data = {
    submittedAt: new Date().getTime(),
    fields: [
      {
        name: "email",
        value: eventProperties.email
      },
      {
        name: "firstname",
        value: eventProperties.name
      },
      {
        name: "phone",
        value: eventProperties.phone || ""
      },
      {
        name: "message",
        value: eventProperties.message || ""
      }
    ],
    context: {
      pageUri: `https://www.sheilaanne.com/${eventProperties.page}`,
      pageName: eventProperties.page
    }
  };

  const fullUrl = hubSpotUrl + formGuidMap[eventProperties.page];

  return fetch(fullUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log("Hubspot response: ", data);
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true })
      };
    })
    .catch(err => {
      console.error(err);
      return {
        statusCode: 422,
        body: JSON.stringify({ success: false })
      };
    });
};
