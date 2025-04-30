# Music Player

A simple and modern music player web application built with React 19, Vite, and TailwindCSS. This app allows you to play, pause, skip, and control the volume of songs from a playlist with a clean and responsive user interface.

## Live Link

You can test the project by clicking here: https://student-teacher-appointment-eight.vercel.app/. Enjoy!
## Features

- Play, pause, and skip songs (next/previous)
- Volume control with slider
- Seek bar to navigate within the current song
- Display of song title, artist, album cover, and duration
- Playlist management with sample songs
- Responsive and user-friendly UI styled with TailwindCSS

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd music-player
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

## Usage

- Use the play/pause button to start or pause the current song.
- Use the next and previous buttons to navigate through the playlist.
- Adjust the volume using the slider.
- Click or drag on the progress bar to seek to a different part of the song.
- The playlist displays the available songs; clicking on a song will start playing it.

## Technologies Used

- React 19
- Vite (build tool)
- TailwindCSS (styling)
- JavaScript (ES Modules)

## Project Structure

```
.
├── public/                  # Static assets (images, music files)
│   ├── assets/
│       ├── img/             # Cover images and icons
│       └── music/           # Audio files
├── src/                     # Source files
│   ├── components/          # React components (Player, Controls, Playlist, UI elements)
│   ├── data/                # Sample data (sampleSongs.js)
│   ├── utils/               # Utility functions (e.g., formatTime)
│   ├── App.jsx              # Main app component
│   ├── App.css              # App-specific styles
│   └── main.jsx             # Entry point
├── package.json             # Project metadata and scripts
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality

## Sample Songs Data

The app uses a sample playlist defined in `src/data/sampleSongs.js` with song objects containing:

- `id`: Unique identifier
- `title`: Song title
- `artist`: Artist name
- `album`: Album name
- `cover`: Path to cover image
- `src`: Path to audio file

## License

This project is private and not licensed for public use.

---

If you have any questions or want to contribute, feel free to reach out or open an issue.
