## TypeScript in HTML Setup

This guide demonstrates how to compile TypeScript and run it in a web browser using a simple HTML file.

## Steps

1. **Install TypeScript Compiler**

To compile your TypeScript code into JavaScript, you need to install TypeScript globally on your machine. You can do this using npm (Node Package Manager):

```bash
npm install -g typescript
```

2. **Create Your TypeScript File**

Create an `index.ts` file with your TypeScript code.

```typescript
// index.ts
console.log('Hello, TypeScript!');
```

3. **Compile TypeScript into JavaScript**

Once you have your TypeScript file ready, you need to compile it into JavaScript. Open a terminal and run the following command:

```bash
tsc index.ts
```

This will generate an `index.js` file that can be used by the browser.

4. **Update HTML to Use the Compiled JavaScript**

In your `index.html` file, update the `<script>` tag to reference the compiled `index.js` file (not the TypeScript .ts file, since browsers only understand JavaScript).

```html
<!DOCTYPE html>
<html lang="en">
  <head></head>
  <body style="background-color: black">
    <script type="module" src="./index.js"></script>
  </body>
</html>
```

## Summary

1. Install TypeScript (npm install -g typescript).
2. Write your TypeScript code in .ts files.
3. Compile your TypeScript to JavaScript using tsc.
4. Update your HTML to reference the compiled JavaScript (index.js).
5. Optionally, use tsconfig.json for larger projects.

Now you're ready to develop TypeScript in the browser!
