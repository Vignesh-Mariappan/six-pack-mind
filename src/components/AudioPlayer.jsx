import React, { useEffect, useRef, useState } from 'react';
import { FaPause, FaPlay, FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";
import { MdOutlineReplay } from "react-icons/md";

import useSound from 'use-sound';
import audioEndedDingSound from '../assets/audios/Ending_sounds/ding.mp3';

const AudioPlayer = ({ id, audioTitle = "", audioPath = "", currentPlayingAudioId, setCurrentPlayingAudioId, imgSrc }) => {
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  const animationRef = useRef(null);
  const [ showPlay, setShowPlay ] = useState(true);
  const [ showReplay, setShowReplay ] = useState(false);
  const [ muted, setMuted ] = useState(false);
  const [ volume, setVolume ] = useState(1);
  const [ duration, setDuration ] = useState("--:--");
  const [ currentTime, setCurrentTime ] = useState(0);
  const [ playDing ] = useSound(audioEndedDingSound)

  useEffect(() => {
    if(id !== currentPlayingAudioId) {
      if (!showReplay)
        setShowPlay(true);
      audioRef?.current?.pause();
      cancelAnimationFrame(animationRef);
    }
  }, [id, currentPlayingAudioId, showReplay])

  const calculateTime = (seconds) => {
    if(isNaN(seconds)) {
      return;
    }

    const secondsInt = parseInt(seconds);
    const minutes = Math.floor(secondsInt / 60);
    const returnedMins = minutes > 9 ? `${minutes}` : `0${minutes}`;
    const secs = Math.floor(secondsInt % 60); 
    const returnedSecs = secs > 9 ? `${secs}` : `0${secs}`;
    return `${returnedMins}:${returnedSecs}`
  }

  const whilePlaying = () => {
    if (progressBarRef && progressBarRef?.current) {
      progressBarRef.current.value = audioRef?.current?.currentTime;
      setCurrentTime(progressBarRef?.current?.value);
    }
    animationRef.current = requestAnimationFrame(whilePlaying)
  }

  const audioPlayControl = () => {
    if (showPlay === true) {
        audioRef.current.play();
        setCurrentPlayingAudioId(id);
        setShowPlay(false);
        animationRef.current = requestAnimationFrame(whilePlaying)
    } else if (showPlay === false) {
        audioRef.current.pause();
        setShowPlay(true);
        cancelAnimationFrame(animationRef.current)
    }  else if (showReplay) {
        audioRef.current.play();
        setCurrentPlayingAudioId(id);
        progressBarRef.current.value = 0;
        animationRef.current = requestAnimationFrame(whilePlaying)
        setShowPlay(false);
        setShowReplay(false);
    }
  }

  const onAudioEnded = () => {
    setShowReplay(true);
    setShowPlay(null);
    playDing();
  }

  const handleVolumeChange = event => {
    const vol = parseFloat(event.target.value);

    setVolume(vol);
    setMuted(false);
    
    if(audioRef?.current) {
        audioRef.current.volume = vol;
    }

    String(vol) === "0" && setMuted(true)
  };

  const muteAudio = () => {
    setMuted(true);
    setVolume(0);
  }

  const unmuteAudio = () => {
    setMuted(false);
    setVolume(1);
  }

  const changeRange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
    setCurrentTime(progressBarRef.current.value);
    if(calculateTime(progressBarRef.current.value) >= duration) {
      setShowReplay(true);
      setShowPlay(null);
    } else {
      setShowReplay(false);
      setShowPlay(oldShowPlay => {
        if(oldShowPlay === null) {
          return true;
        } else {
          return oldShowPlay;
        }
      })
    }
  }

  return (
    <div className="card w-[345px] max-[345px]:w-[300px] md:w-[600px] md:card-side bg-neutral shadow-xl max-w-[600px] animate__animated animate__fadeIn animate__slow">
      <figure className='md:min-w-[200px] card-figure'><img className="w-[300px] mt-6 md:mt-0 md:w-[200px] h-[100%]" src={imgSrc} alt="Meditation"/></figure>
      <div className="card-body p-4 md:p-8">
          <h2 className="card-title text-wrap font-normal md:font-semibold">{ audioTitle }</h2>
          <div className="flex relative items-center justify-start gap-2">
              <button className="btn btn-circle btn-outline" onClick={audioPlayControl}>
                { showPlay === true && <FaPlay size={"1rem"} /> }
                { showPlay === false && (
                    <FaPause size={"1rem"} />
                    )
                }
                {
                    showReplay === true && (
                    <MdOutlineReplay size={"1.5rem"} />
                    )
                }
              </button> 
              { !muted ? (
                  <button className="btn btn-circle btn-outline btn-success"  onClick={muteAudio}>
                      <FaVolumeHigh size={"1rem"} />
                  </button>
              ) : (
                  <button className="btn btn-circle btn-outline btn-error" onClick={unmuteAudio}>
                      <FaVolumeXmark size={"1rem"} />
                  </button>
              )}
              <input type="range" min={"0"} max="1" value={ volume } onChange={handleVolumeChange} step={"0.05"} className="range range-xs w-[100px] range-accent" />
          </div>
          <input ref={progressBarRef} type="range" defaultValue={"0"} className="range range-xs" onChange={changeRange} />
          <div className="flex justify-between items-center">
              <span>{ calculateTime(currentTime) }</span>
              <span>{ duration }</span>
          </div>
          <audio  className='hidden' preload="metadata" ref={audioRef} muted={muted} onEnded={onAudioEnded} controls src={ audioPath } onLoadedMetadata={event => {
            const seconds = Math.round(event?.target?.duration);
            setDuration(calculateTime(seconds));
            progressBarRef.current.max = seconds;
          }} />
      </div>
    </div>
  )
}

export default AudioPlayer