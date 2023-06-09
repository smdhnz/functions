# Serverless functions

## Say Hello

https://functions-smdhnz.vercel.app/api/hello

Response

```json
{
  "message": "Hello world"
}
```

# Edge functions

## Translator ( Text generation )

https://functions-smdhnz.vercel.app/api/translate?key=&targ=&text=

- `key`: Auth key
- `targ`: Translation target language code
- `text`: Content

## Text to Emoji

https://functions-smdhnz.vercel.app/api/emoji?key=&text=

- `key`: Auth key
- `text`: From text

## Generate commit message

https://functions-smdhnz.vercel.app/api/commit?key=&diff=

- `key`: Auth key
- `diff`: git diff

```sh
git add -A

res=$(curl -sS \
  "https://functions-smdhnz.vercel.app/api/commit?key=&diff=$(echo $(git diff --cached --diff-algorithm=minimal -- ':!package-lock.json' ':!pnpm-lock.yaml' ':!*.lock') | jq -Rr '@uri')")

echo $res

echo -n "Would you like to commit? [Y/n]: "
read ANS

case $ANS in
  "" | [Yy]* )
    # ここに「Yes」の時の処理を書く
    git commit -m "$res"
    ;;
  * )
    # ここに「No」の時の処理を書く
    ;;
esac
```
