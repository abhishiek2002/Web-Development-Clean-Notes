# Use MiddleWares To Prepare App For Productions

- **helmet()**
    - For extra security , it add some headers
```js
app.use(helmet());
```

- compression()
    - For response data compression(like json, image, css, html, js etc.)
```js
app.use(compression());
```

- morgan()
    - For logging requests in seperate file
```js
app.use(morgan())
```

- cors()
    - For handling cross origin requests
```js
app.use(cors({origin: "https://expense-tracker-full-fledged-web-ap.vercel.app"}));
```