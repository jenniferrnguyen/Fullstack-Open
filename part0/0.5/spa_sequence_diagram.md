## What happens when user opens/reloads SPA version of of Example App
``` mermaid
sequenceDiagram
  participant browser
  participant server

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
  activate server 
  server-->>browser: HTML document 
  deactivate server

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
  activate server
  server-->>browser: the CSS file
  deactivate server

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
  activate server
  server-->>browser: the JavaScript file
  deactivate server

  Note right of browser: Browser executes JavaScript code which fetches JSON from the server

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
  activate server
  server-->>browser: [{content: "some note", date: "2023-07-17T02:18:17.021z"},...]
  deactivate server

  Note right of browser: The browser executes the callback function that renders the notes  

```
