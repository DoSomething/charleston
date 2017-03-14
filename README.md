# static-rapid-response
__Static markup for DoSomething.org rapid responses.__ We've applied this as a [Fastly synthetic response](https://docs.fastly.com/guides/basic-configuration/creating-error-pages-with-custom-responses)
override on the "homepage" route in cases where we needed a way to highlight our member's voices for a holiday or tragic event.

### Steps
1. Update the quote & description markup. There's a fantastically hacky "CSV to HTML" script in `scripts/`.
2. Make sure links & meta-information (like the member count) are all up-to-date.
3. Create the [synthetic response](https://docs.fastly.com/guides/basic-configuration/creating-error-pages-with-custom-responses) with the given markup.
4. Apply the synthetic response to this condition: `req.url.path == "/" || req.url.path == "/us"`

:heart:
