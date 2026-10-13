/* ═══════════════════════════════════════════════════════════════
   MENTAKI MOUNT VILLAGE — 360° TOUR
   FSM Jayapena & Co.   |   Reka Jadi Sdn Bhd — Tuan Yahaya

   Panorama set : REV05 FINAL, 8192 × 4096 equirectangular
   Views        : 15  (7 exterior, 8 interior)
   Navigation   : 26 doorways, every view reachable
   Material hotspots : none in this edition

   Doorway bearings were measured off the panoramas themselves,
   so `north` stays at 0 for every view. Changing north will
   rotate every arrow in that view away from its door.
   ═══════════════════════════════════════════════════════════════ */

window.TOUR = {

  project: "Mentaki Mount Village",
  client:  "Disediakan untuk Reka Jadi Sdn Bhd — Tuan Yahaya",

  cover: "MMV_Cover_Page.png",

  thumbFolder: "thumbs",

  audio:       "ambience.mp3",
  audioVolume: 0.32,

  info: "# Mentaki Mount Village\n\nKafe tanah tinggi di Kundasang, Sabah — Lot 063107808 & 063107817.\n\nGunakan jari atau tetikus untuk memusing 360°. Tekan anak panah untuk berpindah ruang. Pelan lantai di bawah kiri menunjukkan kedudukan anda.\n\n*Visualisasi oleh FSM Jayapena & Co.*",

  plan: {
    image:    "plan_v2.jpg",
    title:    "Floor Plan",
    rotation: 0,
    size:     "300px",
    zoom:     14
  },

  views: [

    /* ───────────────────────── EXTERIOR ───────────────────────── */

    { id: "front",
      file: "mmv-ext-01-front.jpg",
      name: "Front Elevation",
      group: "Exterior",
      heading: 0,
      north: 0,
      links: [
        { to: "dining",     yaw: 285, pitch: -5 },
        { to: "entrance",   yaw: 325, pitch: -5 },
        { to: "side",       yaw: 205, pitch: -5 },
        { to: "washfemale", yaw: 228, pitch: -5 },
        { to: "washmale",   yaw: 236, pitch: -5 }
      ] },

    { id: "entrance",
      file: "mmv-ext-02-entrance.jpg",
      name: "Entrance Approach",
      group: "Exterior",
      heading: 0,
      north: 0,
      links: [
        { to: "dining",      yaw: 260, pitch: -5 },
        { to: "pavilionext", yaw: 300, pitch: -5 },
        { to: "front",       yaw: 225, pitch: -5 }
      ] },

    { id: "pavilionext",
      file: "mmv-ext-03-pavilion.jpg",
      name: "Glass Pavilion — Exterior",
      group: "Exterior",
      heading: 0,
      north: 0,
      links: [
        { to: "pavilion", yaw: 285, pitch: -5 },
        { to: "entrance", yaw: 250, pitch: -5 }
      ] },

    { id: "rear",
      file: "mmv-ext-04-rear.jpg",
      name: "Rear Elevation",
      group: "Exterior",
      heading: 0,
      north: 0,
      links: [
        { to: "roof",        yaw: 276, pitch: -2 },
        { to: "pavilionext", yaw: 240, pitch: -5 },
        { to: "side",        yaw: 310, pitch: -5 }
      ] },

    { id: "side",
      file: "mmv-ext-05-side.jpg",
      name: "Side Elevation",
      group: "Exterior",
      heading: 0,
      north: 0,
      links: [
        { to: "rear",      yaw: 240, pitch: -5 },
        { to: "roof",      yaw: 272, pitch:  4 },
        { to: "sideentry", yaw: 290, pitch: -5 },
        { to: "front",     yaw: 305, pitch: -5 }
      ] },

    /* Both doors on this gable wall are the carved-screen surau
       doors. The pictogram on the left leaf is the telekung
       figure, the right leaf wears a songkok.                   */
    { id: "sideentry",
      file: "mmv-ext-06-side-entrance.jpg",
      name: "Side Entrance",
      group: "Exterior",
      heading: 0,
      north: 0,
      links: [
        { to: "suraufemale", yaw: 254, pitch: -5 },
        { to: "suraumale",   yaw: 265, pitch: -5 },
        { to: "side",        yaw: 300, pitch: -5 }
      ] },

    { id: "roof",
      file: "mmv-ext-07-roof-terrace.jpg",
      name: "Roof Terrace",
      group: "Exterior",
      heading: 0,
      north: 0,
      links: [
        { to: "rear", yaw: 318, pitch: -8 }
      ] },

    /* ───────────────────────── INTERIOR ───────────────────────── */

    { id: "dining",
      file: "mmv-int-01-dining-hall.jpg",
      name: "Dining Hall",
      group: "Interior",
      heading: 0,
      north: 0,
      links: [
        { to: "pavilion", yaw:  15, pitch: -4 },
        { to: "front",    yaw: 166, pitch: -4 },
        { to: "office",   yaw: 261, pitch: -4 },
        { to: "kitchen",  yaw: 330, pitch: -4 }
      ] },

    { id: "pavilion",
      file: "mmv-int-02-glass-pavilion.jpg",
      name: "Glass Pavilion",
      group: "Interior",
      heading: 0,
      north: 0,
      links: [
        { to: "dining",      yaw:   5, pitch: -4 },
        { to: "pavilionext", yaw: 160, pitch: -8 }
      ] },

    { id: "kitchen",
      file: "mmv-int-03-kitchen.jpg",
      name: "Kitchen",
      group: "Interior",
      heading: 0,
      north: 0,
      links: [
        { to: "dining", yaw: 54, pitch: -4 }
      ] },

    { id: "office",
      file: "mmv-int-04-admin-office.jpg",
      name: "Admin Office",
      group: "Interior",
      heading: 0,
      north: 0,
      links: [
        { to: "dining", yaw: 190, pitch: -4 }
      ] },

    { id: "washfemale",
      file: "mmv-int-05-washroom-female.jpg",
      name: "Washroom — Female",
      group: "Interior",
      heading: 0,
      north: 0,
      links: [
        { to: "front", yaw: 226, pitch: -4 }
      ] },

    { id: "washmale",
      file: "mmv-int-06-washroom-male.jpg",
      name: "Washroom — Male",
      group: "Interior",
      heading: 0,
      north: 0,
      links: [
        { to: "front", yaw: 299, pitch: -4 }
      ] },

    { id: "suraumale",
      file: "mmv-int-07-surau-male.jpg",
      name: "Surau — Male",
      group: "Interior",
      heading: 0,
      north: 0,
      links: [
        { to: "sideentry", yaw: 98, pitch: -4 }
      ] },

    { id: "suraufemale",
      file: "mmv-int-08-surau-female.jpg",
      name: "Surau — Female",
      group: "Interior",
      heading: 0,
      north: 0,
      links: [
        { to: "sideentry", yaw: 73, pitch: -4 }
      ] }

  ]
};
