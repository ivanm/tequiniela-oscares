# Tequiniela Oscares 2023

![image](https://user-images.githubusercontent.com/32628/222035770-a1f3aae2-fef5-4071-8aa9-3c8b13de86ff.png)

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
