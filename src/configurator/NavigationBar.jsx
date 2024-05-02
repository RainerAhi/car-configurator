import React, { useEffect, useState } from "react";

export default function NavigationBar() {
  const [audio] = useState(new Audio('/sound.mp3'));
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const [soundTextVisible, setSoundTextVisible] = useState(true);

  useEffect(() => {
    // Set up audio loop
    audio.loop = true;

    const handleInteraction = () => {
      // Start playing audio after user interaction
      audio.play().then(() => {
        setIsSoundPlaying(true); // Update state when audio starts playing
      }).catch(error => {
        console.error('Failed to play audio:', error);
      });

      // Remove the event listener after playing the audio
      document.removeEventListener('click', handleInteraction);
    };

    // Add event listener to wait for user interaction
    document.addEventListener('click', handleInteraction);

    return () => {
      // Clean up audio on component unmount
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const toggleSound = () => {
    setIsSoundPlaying(prevState => !prevState);
    if (isSoundPlaying) {
      audio.pause();
    } else {
      audio.play().then(() => {
        setIsSoundPlaying(true);
      }).catch(error => {
        console.error('Failed to play audio:', error);
      });
    }
    setSoundTextVisible(false); // Hide sound-text permanently after first click
  };

  const handleClick = (linkUrl) => {
    // Open the specified webpage link in a new tab when carousel-content is clicked
    window.open(linkUrl, '_blank');
  };

  return (
    <div className="navigation">
      <i onClick={() => handleClick('https://peakcreations.vercel.app/')} class="fa-solid fa-user"></i>
      <h1>PORSCHE</h1>
      <i className={isSoundPlaying ? "fa-solid fa-volume-xmark " : "fa-solid fa-volume-high"} onClick={toggleSound}></i>
    </div>
  );
}