import React, { useState } from "react";
import Section from "./ui/Section";
import Button from "./ui/Button";

const Playlist = ({ playlist, setCurrentSongIndex, setPlaylist }) => {

    const [showModal, setShowModal] = useState(false)
    const [newSong, setNewSong] = useState({
        title: "",
        artist: "",
        album: "",
        cover: "",
        file: null
    })
    const deleteSong = (index) => {
        const updated = [...playlist]
        updated.splice(index, 1)
        setPlaylist(updated)
    }

    const addSong = () => {
        if (!newSong.file || !newSong.title || !newSong.artist) return alert("Please fill all the data")

        const songObject = {
            id: Date.now(),
            title: newSong.title,
            artist: newSong.artist,
            album: newSong.album || "Unknown Album",
            cover: newSong.cover || "/assets/img/default.svg",
        }

        setPlaylist((prev) => [...prev, songObject])
        setShowModal(false)
        setNewSong({title: "", artist: "", album: "", cover: "", file: null})
    }

    const handleInputChange = (e) => {
        const { name, value, files } = e.target
        if (name === "file") {
            setNewSong((prev) => ({ ...prev, file: files[0]}))
        } else if(name === "cover"){
            const file = files[0]
            const coverUrl = URL.createObjectURL(file)
            setNewSong((prev) => ({...prev, cover: coverUrl}))
        } else {
            setNewSong((prev) => ({ ...prev, [name]: value }))
        }
    }

    return (
        <Section>
        <h3 className="text-lg font-semibold mb-2 text-center">Playlist</h3>
        <Button onClick={() => setShowModal(true)} variant="default">Add Song</Button>
        <ul className="divide-y divide-gray-200">
            {playlist.map((song, index) => (
            <li
                key={song.id}
                className="p-3 hover:bg-gray-100 cursor-pointer"
            >
                <div onClick={() => setCurrentSongIndex(index)}>
                    <div className="font-medium">{song.title}</div>
                    <div className="text-sm text-gray-500">{song.artist}</div>
                </div>
                <button className="text-red-500 hover:text-red-600 font-bold" onClick={() => deleteSong(index)}>Delete</button>
            </li>
            ))}
        </ul>

        {showModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 shadow-lg w-96">
                    <h2 className="text-lg font-bold mb-4">Adding Music</h2>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Title"
                        className="w-full mb-2 border rounded p-2"
                        value={newSong.title}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="album"
                        placeholder="Álbum (opcional)"
                        className="w-full mb-2 border rounded p-2"
                        value={newSong.album}
                        onChange={handleInputChange}
                    />

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Music Cover (optional)
                        </label>

                        <label className="cursor-pointer inline-block px-4 py-2 bg-slate-100 text-gray-700 rounded hover:bg-slate-200 transition">
                            Choose Image
                            <input
                            type="file"
                            name="cover"
                            accept="image/*"
                            className="hidden"
                            onChange={handleInputChange}
                            />
                        </label>

                        {newSong.cover && (
                            <p className="mt-1 text-sm text-green-600">Selected Image ✅</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Audio File
                        </label>

                        <label className="cursor-pointer inline-block px-4 py-2 bg-slate-100 text-gray-700 rounded hover:bg-slate-200 transition">
                            Choose Music File
                            <input
                            type="file"
                            name="file"
                            accept="audio/*"
                            className="hidden"
                            onChange={handleInputChange}
                            />
                        </label>

                        {newSong.file ? (
                            <p className="mt-1 text-sm text-green-600">🎵 {newSong.file.name}</p>
                        ) : (
                            <p className="mt-1 text-sm text-gray-500">No File Selected</p>
                        )}
                    </div>


                    <div className="flex justify-between">
                        <Button variant="default" onClick={() => setShowModal(false)}>
                            Cancelar
                        </Button>
                        <Button variant="primary" onClick={addSong}>
                            Adicionar
                        </Button>
                    </div>
                </div>
            </div>
        )}
        </Section>
    );
};

export default Playlist;
