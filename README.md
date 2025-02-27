# Redis Intro

A simple introduction to Redis and its basic operations.

## Features
- Basic Redis commands
- Examples of CRUD operations
- Connection setup

## Installation

### Prerequisites
- Redis server installed and running
- Node.js installed

### Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/Er-luffy-D/redis-intro.git
    cd redis-intro
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the application:
    ```bash
    node app.js
    ```

## Usage
### Connecting to Redis
To connect to Redis, use the following command:
```javascript
const redis = require('redis');
const client = redis.createClient();

client.on('connect', function() {
    console.log('Connected to Redis...');
});
```

### Basic Commands
Here are some basic Redis commands:

- **SET**: Set a key-value pair
    ```javascript
    client.set('key', 'value', redis.print);
    ```

- **GET**: Get the value of a key
    ```javascript
    client.get('key', function(err, reply) {
        console.log(reply);
    });
    ```

- **DEL**: Delete a key
    ```javascript
    client.del('key', redis.print);
    ```

Creating something similar to this
![architechure](https://github.com/user-attachments/assets/b055bb0d-e2e4-4c04-bfff-c505bf5e10c4)


## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
