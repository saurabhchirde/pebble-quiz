# Pebble Quiz

## Play Fun Trivia Quizzes.

#### - by Saurabh Chirde

<img src="https://user-images.githubusercontent.com/92800463/168157436-9da42e34-c688-439f-bf2e-08e2cac40d7f.svg" width="500px" height="auto" alt="logo" />

## Demo

### Link

[Pebble Quiz](https://quiz.saurabhchirde.com/)

### Game flow for Guest Users

![Quiz Guest](https://user-images.githubusercontent.com/92800463/169605486-9303ac7e-e176-474f-a173-07392f9b25a1.gif)

### Game flow for Registered User

![Quiz User](https://user-images.githubusercontent.com/92800463/169605595-117260b9-04a1-4daf-a92b-c0d6a295c732.gif)

### Achievements Badges for registred Users

![Quiz Achievement](https://user-images.githubusercontent.com/92800463/169605682-073fec09-6588-450f-9168-ba42cf359e88.gif)

</br>

## Features

- User Authorization
  - Sign In
  - Sign Up
  - Sign Out
- Protected/Private Routes with users quiz data
- Categorywise Quiz
- Pointwise Leaderboard
- Different levels with Achievement Badges
- User Account Page
- Change Display Names
- Set new account password
- Delete Account

</br>

## Tech Stack

**Client side:** React, React Router, Context API, [Pebble UI](https://ui.saurabhchirde.com/)

**Server side:** Firebase

</br>

## Run Locally

Clone the project

```bash
  git clone https://github.com/saurabhchirde/pebble-quiz.git
```

Go to the project directory

```bash
  cd pebble-quiz
```

Install dependencies

```bash
  npm install
```

Configure Firebase

1. Create a `.env` file in the root directory (use `.env.example` as template)
2. Add your Firebase configuration values to `.env`
3. Get your Firebase config from [Firebase Console](https://console.firebase.google.com/)

```bash
  # Copy the example file
  cp .env.example .env

  # Edit .env and add your Firebase credentials
```

Deploy Firebase Security Rules (Optional)

```bash
  # Make sure Firebase CLI is installed
  npm install -g firebase-tools

  # Run the deployment script
  ./deploy-rules.sh

  # Or manually deploy
  firebase deploy --only firestore:rules,database
```

See [FIREBASE_SECURITY_RULES.md](./FIREBASE_SECURITY_RULES.md) for detailed security rules documentation.

Start the server

```bash
  npm run start
```

<br>

#### 👨‍💻 lets connect !

<br>

<a href="https://twitter.com/saurabhchirde"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" width="93px"/></a>
<a href="https://www.linkedin.com/in/saurabhchirde/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" width="100px"/></a>
