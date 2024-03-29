to build, since this is react and we don't use a index.html file, we have to change "public": "public" to "public": "build"
in firebase.json. then we run npm run build then run firebase deploy
https://stackoverflow.com/questions/74134025/firebase-hosting-at-index-html-i-want-index-js

to run the emulator in localhost, we run firebase emulators:start


In order to see changes, we must firebase deploy. So best to npm run start and work solely in localhost,
then only emulate firebase when needed

TODO: figure out better DX for this



firebase google auth docs
https://firebase.google.com/docs/auth/web/google-signin?authuser=0

fireship.io firebase tutorial
https://www.youtube.com/watch?v=q5J5ho7YUhA