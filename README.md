# NodeFM

NodeFM is a simple command-line note-taking application built with Node.js. It allows users to create, retrieve, search, and manage notes efficiently. The application uses a JSON file as its database to store notes persistently.

## Features
- Create new notes with optional tags.
- Retrieve all notes.
- Search notes by content.
- Remove notes by ID.
- Remove all notes.
- Launch a web interface to view notes (future implementation).

## Prerequisites
- Node.js (v16 or higher)
- npm (Node Package Manager)

## Installation
1. Clone the repository or download the source code:
   ```bash
   git clone <repository-url>
   cd NodeFM
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Link the application globally (optional):
   ```bash
   npm link
   ```
   This will allow you to use the `ragBin` command globally.

## Usage
After setting up the application, you can use the following commands:

### Create a New Note
```bash
ragBin new "Your note content here" --tags tag1,tag2
```
- `--tags` or `-t`: Optional. Add tags to the note, separated by commas.

### Get All Notes
```bash
ragBin all
```

### Find Notes by Content
```bash
ragBin find "search term"
```

### Remove a Note by ID
```bash
ragBin remove <id>
```
- Replace `<id>` with the ID of the note you want to remove.

### Remove All Notes
```bash
ragBin clean
```

### Launch Web Interface (Future Implementation)
```bash
ragBin web --port 5000
```
- `--port`: Optional. Specify the port to bind the web interface (default: 5000).

## Project Structure
```
NodeFM/
├── db.json          # JSON file used as the database
├── demo.js          # Demo script
├── index.js         # Entry point for the application
├── package.json     # Project metadata and dependencies
├── src/
│   ├── command.js   # Command-line interface logic
│   ├── db.js        # Database operations
```

## Contributing
Feel free to fork this repository and submit pull requests. Contributions are welcome!

## License
This project is licensed under the MIT License.

---

Enjoy using NodeFM for your note-taking needs!
