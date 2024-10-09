# API Documentation Project

## Endpoints user

### POST /api/user/register

- **Description**: Create a new account
- **Inputs**:
  - `name`: User name.
  - `email`: User email.
  - `password`: User's password.
- **Access**: Public.
- **Returns**: user data and store token in cookies.

### POST /api/user/login

- **Description**:.
- **Inputs**:
  - `email`: User email.
  - `password`: User password.
  - **Returns**: user data and store token in cookies.

### PUT /api/user

- **Description**: Update data user.
- **Inputs**:
  - `name`: User name.
  - `email`: User email.
  - **Returns**:new user informations.

### PUT /api/user/update_password

- **Description**: Update password user.
- **Inputs**:
  - `oldPassword`: old password .
  - `newPassword`: new password .
  - **Returns**:message: update password successfully.

### GET /api/user/checkExpireToken

- **Description**: Check if the token is still valid or expired.

  - **Returns**:message confirming token validity or an error if token is invalid.

  ### GET /api/user/logout

- **Description**:logout , delete token from cookies .
  - **Returns**:message: user logout successfully.

## Endpoints campaign

### POST /api/campaign

- **Description**: Create a new campaign
- **Inputs**:
  - `title`: text.
  - `description`: text .
  - `category`: enum of [ Education,Health,Arts,Tecnology,Social].
  - `goalAmount`: number.
  - `currentAmount`: default (0) .
  - `status`:default (active).
  - `numOfDonors`:default (0).
  - `dateDue`:DateTime.
  - `status`:default (active).
  - `userId`:Int.
  - `image`:file.
- **Access**: only login.
- **Returns**: data new campaign.

### GET /api/campaign , /api/campaign?page=1&limit=6

- **Description**: get campaigns , default page = 1 , default limit = 6
- **Access**: public.
- **Returns**: arrat of campaign , totalpages.

### GET /api/campaign/filter?categoryQuery=Arts , /api/campaign/filter?categoryQuery=Arts&page=1&limit=6

- **Description**: get campaign depended on category , default page = 1 , default limit = 6
- **Access**: public.
- **Returns**: array of campaign , totalpages.

### GET /api/campaign/:campaignId

- **Description**: get details campaign
- **Access**: public.
- **Returns**: campaign

### GET /api/campaign/campaign_user , /api/campaign/campaign_user?page=1&limit=6

- **Description**: get campaign for account login , default page = 1 , default limit = 6
- **Access**: private.
- **Returns**: array of campaigns

## Endpoints Donors

### POST /api/donors

- **Description**: Create a new donors for campaign, updata data campaign for status, numOfDonors, currentAmount
- **Inputs**:
  - `amount`: number.
  - `userId`: Int .
  - `campaignId`: Int .
- **Access**:private only login.
- **Returns**: data new donors.

### GET /api/donors/donors_myCampaigns , /api/campaign/donors_myCampaigns?page=1&limit=2

- **Description**: get campaigns for account login and first five donors for this campaign,default page = 1 , default limit = 2
- **Access**:private only login.
- **Returns**: array of campaigns inside array of donors.

### GET /api/donors/All_donors_myCampaigns/:campaignId , /api/donors/All_donors_myCampaigns/:campaignId?page=1,limit=6

- **Description**: get All donors for specific campaign , default page = 1, default limit = 6
- **Access**:private only login.
- **Returns**: array of donors.

### GET /api/donors/All_myDonors , /api/donors/All_myDonors?page=1,limit=6

- **Description**: Get all donations made by the logged-in user , default page = 1, default limit = 6
- **Access**:private only login.
- **Returns**: array of donations.
