# QR Code generator

A simple project to generate QR Code.

Key features:

1. Input any text & QR code will be generated dynamically
2. Debouncing effect --> QR code will be generated only after user finished typing
3. Allow user to download generated QR code as .png file

![Screenshot 01](https://github.com/arifoyong/qr-generator/blob/master/screenshots/Screenshot_01.gif)

## How to use

```
docker build -t <your-tag-name> .
docker run -d -p 3000:3000 <your-tag-name>
```

\*\* be careful of the "." on docker build (I often missed it)

## Technology used

Next.js, docker
