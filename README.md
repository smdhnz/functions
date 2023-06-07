# Serverless functions

## Hello | https://functions-smdhnz.vercel.app/api/hello

Response

```json
{
  "message": "Hello world"
}
```

# Edge functions

## Translator ( Text generation ) | https://functions-smdhnz.vercel.app/api/translate?key=&targ=&text=

- `key`: Auth key
- `targ`: Translation target language code
- `text`: Content

## Text to Emoji | https://functions-smdhnz.vercel.app/api/emoji?key=&text=

- `key`: Auth key
- `text`: From text
