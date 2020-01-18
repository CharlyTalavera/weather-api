
if [ !$(command -v nodemon) ]
then
    npm i -g nodemon
fi

cd /app
nodemon index.js
