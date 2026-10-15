import type { Photo, PhotoKey } from "@/types";

// Captions stay factual and generic until Christabel confirms each photo's event, place and year.
export const PHOTOS: Record<PhotoKey, Photo> = {
  portrait: {
    src: "/images/portrait-outdoor.jpg",
    alt: "Portrait of Christabel Fremah Owusu smiling outdoors, holding a notebook and documents",
    caption: "Ing. Christabel Fremah Owusu",
    width: 810,
    height: 1080,
    showsOthers: false,
  },
  factoryFloor: {
    src: "/images/factory-floor.jpg",
    alt: "Christabel in a hard hat taking notes on a transformer factory floor beside high-voltage safety barriers",
    caption: "Transformer factory visit, China",
    width: 810,
    height: 1080,
    showsOthers: false,
  },
  corridor: {
    src: "/images/corridor.jpg",
    alt: "Christabel walking along a corridor carrying a safety helmet and notebook",
    caption: "Between factory sessions",
    width: 810,
    height: 1080,
    showsOthers: false,
  },
  trainingSession: {
    src: "/images/training-session.jpg",
    alt: "Christabel guiding a colleague through work on a laptop during a technical training session",
    caption: "Technical training session",
    width: 1280,
    height: 962,
    showsOthers: true,
  },
  relayPanel: {
    src: "/images/relay-panel.jpg",
    alt: "Christabel operating a protection and control test panel with relay and merging-unit equipment",
    caption: "Hands-on protection and control equipment training",
    width: 810,
    height: 1080,
    showsOthers: false,
  },
  siteDrone: {
    src: "/images/site-drone.jpg",
    alt: "Christabel in a hard hat and hi-vis vest reviewing a laptop on site, with a drone and controller beside her and a transmission tower behind",
    caption: "Site work with drone documentation",
    width: 810,
    height: 1080,
    showsOthers: false,
  },
  factoryShowroom: {
    src: "/images/factory-showroom.jpg",
    alt: "A group of engineers being shown a manufacturer's exhibition hall",
    caption: "Manufacturer facility tour, China",
    width: 1080,
    height: 809,
    showsOthers: true,
  },
  fatMeeting: {
    src: "/images/fat-meeting.jpg",
    alt: "Engineers reviewing test documentation around a conference table at a transformer manufacturer",
    caption: "Factory acceptance test review meeting",
    width: 1080,
    height: 809,
    showsOthers: true,
  },
};
