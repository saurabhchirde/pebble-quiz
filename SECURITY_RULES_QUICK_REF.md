# 🔐 Firebase Security Rules - Quick Reference

## 📊 Firestore Rules Summary

### `users` Collection

| Action        | Who Can Do It                  | Requirements                                              |
| ------------- | ------------------------------ | --------------------------------------------------------- |
| 👀 **Read**   | ✅ Everyone (including guests) | None - Public access for leaderboard                      |
| ➕ **Create** | ✅ Authenticated users only    | Must be creating their own document + All required fields |
| ✏️ **Update** | ✅ Authenticated users only    | Must be their own document + Cannot change email          |
| 🗑️ **Delete** | ✅ Authenticated users only    | Must be their own document                                |

### Required Fields for User Documents

```javascript
{
  name: string,
  email: string,
  id: string,
  profileImg: string,
  quizGiven: number,
  winningStreak: number,
  level: number,
  gameWin: number,
  totalScore: number,
  highestScore: number,
  correctAnswers: number,
  badges: array,
  notifications: array
}
```

---

## 🗄️ Realtime Database Rules Summary

### `quizDB` Path

| Action       | Who Can Do It | Requirements                            |
| ------------ | ------------- | --------------------------------------- |
| 👀 **Read**  | ✅ Everyone   | None - Public access for quiz questions |
| ✏️ **Write** | ❌ No one     | Only via Firebase Console or Admin SDK  |

---

## 🚀 Quick Deploy

```bash
# One-line deploy
./deploy-rules.sh

# Or using Firebase CLI
firebase deploy --only firestore:rules,database
```

---

## ✅ What's Allowed

- ✅ Anyone can view the leaderboard (read all users)
- ✅ Anyone can read quiz questions
- ✅ Logged-in users can create their profile
- ✅ Logged-in users can update their own profile
- ✅ Logged-in users can delete their own account

## ❌ What's Blocked

- ❌ Users cannot modify other users' profiles
- ❌ Users cannot change their email after registration
- ❌ Clients cannot write quiz questions (admin only)
- ❌ Unauthenticated users cannot create/update/delete profiles

---

## 🔍 Testing Your Rules

### Test in Firebase Console

1. Go to Firestore → Rules
2. Click "Rules Playground"
3. Test different scenarios

### Test Scenarios

**✅ Should Work:**

```javascript
// Read leaderboard (no auth needed)
getDocs(collection(firestore, "users"));

// Update own profile (authenticated)
updateDoc(doc(firestore, `users/${currentUser.email}`), { name: "New Name" });
```

**❌ Should Fail:**

```javascript
// Update another user's profile
updateDoc(doc(firestore, `users/other@example.com`), { totalScore: 9999 });

// Change own email
updateDoc(doc(firestore, `users/${currentUser.email}`), {
  email: "new@email.com",
});
```

---

## 📚 Full Documentation

See [FIREBASE_SECURITY_RULES.md](./FIREBASE_SECURITY_RULES.md) for complete documentation.

---

**Last Updated**: February 12, 2026
