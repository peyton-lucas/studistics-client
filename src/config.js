const dev = {
  STRIPE_KEY: "pk_test_vZh6QAvxjmF1x1cHO8NlpPXh00XG8jvgv6",
  s3: {
    REGION: "us-east-1",
    BUCKET: "studistics-livestock-csv-attachments-dev"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://xqw8tec2af.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_pw7cVqMDy",
    APP_CLIENT_ID: "2fogls2mbl2lthuamtni08tjnu",
    IDENTITY_POOL_ID: "us-east-1:2cccc427-352f-46fe-975f-9c0a4d9167ac"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_vZh6QAvxjmF1x1cHO8NlpPXh00XG8jvgv6",
  s3: {
    REGION: "us-east-1",
    BUCKET: "studistics-livestock-csv-attachments-prod"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://p2dhsq9h0g.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_U5SamYy1w",
    APP_CLIENT_ID: "ts2agpq14t147bot56fan1cl0",
    IDENTITY_POOL_ID: "us-east-1:569c4aa0-dd36-4bdb-89b8-fba7af439427"
  }
};

// console.log(process.env.REACT_APP_TEST_VAR);
// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};