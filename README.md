# Tequiniela Oscares 2024
![image](https://user-images.githubusercontent.com/32628/223587651-29aa841b-90e5-4f75-80cb-3757bb48d5f5.png)

# Deploy instrucitions

## ENV
You will need to provide a `.env` file with the follwing information:

```
VITE_REACT_APP_FIREBASE_API_KEY_OSCARIN_7B95C=[REPLACE-WITH-API-KEY]
VITE_REACT_APP_FIREBASE_AUTH_DOMAIN_OSCARIN_7B95C=[REPLACE-WITH-AUTH-DOMAIN]
VITE_REACT_APP_FIREBASE_PROJECT_ID_OSCARIN_7B95C=[REPLACE-WITH-PROJECT-ID]
VITE_REACT_APP_FIREBASE_STORAGE_BUCKET_OSCARIN_7B95C=[REPLACE-WITH-STORAGE-BUCKET]
VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID_OSCARIN_7B95C=[REPLACE-WITH-MESSAGING-SENDER-ID]
VITE_REACT_APP_FIREBASE_APP_ID_OSCARIN_7B95C=[REPLACE-WITH-APP-ID]
VITE_REACT_APP_FIREBASE_MEASUREMENT_ID_OSCARIN_7B95C=[REPLACE-WITH-MEASUREMENT-ID]
```
## Local Development

After cloning this repo, run

```
npm install
npm run dev
```

You can also use `yarn eslint` to check type errors, and `yarn eslint:fix` to fix them.

## Production Development

Make sure you are building using the correct env values, and run:

```
npm run build
```

It will generate a bundled folder on `dist`.
