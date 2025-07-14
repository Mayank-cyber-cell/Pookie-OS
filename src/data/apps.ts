import { AppConfig, AppType } from '../types';

export const apps: Record<AppType, AppConfig> = {
  about: {
    title: 'About Us',
    width: 500,
    height: 600
  },
  gallery: {
    title: 'Our Gallery',
    width: 600,
    height: 500
  },
  notepad: {
    title: 'Love Notes',
    width: 500,
    height: 450
  },
  terminal: {
    title: 'Secret Terminal',
    width: 600,
    height: 400
  },
  music: {
    title: 'Our Playlist',
    width: 400,
    height: 600
  },
  calendar: {
    title: 'Special Dates',
    width: 500,
    height: 500
  },
  quiz: {
    title: 'Love Quiz',
    width: 500,
    height: 400
  },
  memory: {
    title: 'Memory Game',
    width: 400,
    height: 450
  },
  resume: {
    title: 'Resume of Love',
    width: 500,
    height: 600
  },
  recycle: {
    title: 'Recycle Bin',
    width: 450,
    height: 400
  },
  surprise: {
    title: 'Hidden Surprise',
    width: 400,
    height: 300
  },
  gift: {
    title: 'Special Gift',
    width: 400,
    height: 400
  },
  secret: {
    title: 'Secret Unlocked!',
    width: 500,
    height: 400
  }
};