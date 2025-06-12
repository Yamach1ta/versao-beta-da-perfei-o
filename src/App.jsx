// estrutura inicial

import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { motion } from "framer-motion";

const App = () => {
  const [editMode, setEditMode] = useState(true);
  const [names, setNames] = useState("Ariel & Elisa");
  const [message, setMessage] = useState("Vocês são a prova de que o amor verdadeiro existe!");
  const [musicUrl, setMusicUrl] = useState("");
  const [date, setDate] = useState("2023-01-01");
  const [emojis, setEmojis] = useState("💖✨🌟");
  const [photos, setPhotos] = useState([]);

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setPhotos(urls);
  };

  const daysTogether = () => {
    const start = new Date(date);
    const now = new Date();
    const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
    return diff;
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center p-4">
      {editMode ? (
        <div className="w-full max-w-2xl space-y-4">
          <h1 className="text-3xl font-bold text-center">Criar Memória</h1>
          <Input value={names} onChange={(e) => setNames(e.target.value)} placeholder="Nomes (ex: Ariel & Elisa)" />
          <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Mensagem especial" />
          <Input type="url" value={musicUrl} onChange={(e) => setMusicUrl(e.target.value)} placeholder="Link da música (YouTube/Spotify)" />
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <Input value={emojis} onChange={(e) => setEmojis(e.target.value)} placeholder="Emojis (ex: 💖✨🌟)" />
          <Input type="file" multiple accept="image/*" onChange={handlePhotoUpload} />
          <Button onClick={() => setEditMode(false)}>Visualizar Memória</Button>
        </div>
      ) : (
        <div className="w-full max-w-3xl">
          <Button onClick={() => setEditMode(true)} className="mb-4">Editar</Button>
          <Card className="relative">
            <CardContent className="p-4 text-center space-y-4">
              <h2 className="text-4xl font-bold">{names}</h2>
              <p className="text-lg">{message}</p>
              <p className="text-pink-600">{daysTogether()} dias juntos</p>
              <div className="grid grid-cols-2 gap-2">
                {photos.map((url, index) => (
                  <img key={index} src={url} alt={`Foto ${index}`} className="rounded-xl w-full h-auto object-cover" />
                ))}
              </div>
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-2xl"
                    style={{ top: Math.random() * 100 + "%", left: Math.random() * 100 + "%" }}
                    animate={{ y: [0, -200], opacity: [1, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: i * 0.3 }}
                  >
                    {emojis[Math.floor(Math.random() * emojis.length)]}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
          {musicUrl && (
            <div className="mt-4">
              <iframe
                width="100%"
                height="80"
                src={musicUrl}
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;