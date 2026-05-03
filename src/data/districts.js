const districts = [
  {
    id: 1,
    name: "Chennai",
    tagline: "Capital City & IT Hub",
    region: "North",
    type: "City",
    image: "src/assets/download1.jpg",
    history:
      "Chennai has a rich cultural and historical background that dates back centuries. It has been an important center for trade, religion, and architecture. The region is known for its temples, traditions, and contributions to Tamil heritage. Over time, it has evolved into a modern destination while preserving its historical roots.",
    overview:
      "Chennai is one of the most visited destinations in Tamil Nadu. It offers a mix of cultural heritage, scenic beauty, and vibrant local life.",
    famousFor: "Culture, Tourism",
    famousPlaces: [
      {
        name: "Marina Beach",
        description: "One of the longest urban beaches in India",
        image: "/places/chennai-marina.jpg",
      },
      {
        name: "Kapaleeshwarar Temple",
        description: "Ancient temple dedicated to Lord Shiva",
        image: "/places/chennai-temple.jpg",
      },
      {
        name: "Fort St. George",
        description: "Historic British fort built in 1644",
        image: "/places/chennai-fort.jpg",
      },
    ],
   
    map: {
      location: "13.0827,80.2707",
      nearby: ["Mahabalipuram", "Kanchipuram", "Pondicherry"],
    },
  },
  {
    id: 2,
    name: "Madurai",
    tagline: "Temple City",
    region: "South",
    type: "Temple",
    image: "/districts/madurai.jpg",
    history:
      "Madurai is one of the oldest continuously inhabited cities in the world, with a history spanning over 2,500 years. It was the capital of the Pandya dynasty and is famous for the Meenakshi Amman Temple.",
    overview:
      "Madurai is a cultural hub known for its ancient temples, vibrant markets, and rich traditions.",
    famousFor: "Temples, History, Culture",
    famousPlaces: [
      {
        name: "Meenakshi Amman Temple",
        description: "Historic temple dedicated to Goddess Meenakshi",
        image: "/places/madurai-temple.jpg",
      },
      {
        name: "Thirumalai Nayakar Palace",
        description: "Magnificent palace built in 1636",
        image: "/places/madurai-palace.jpg",
      },
      {
        name: "Gandhi Museum",
        description: "Museum dedicated to Mahatma Gandhi",
        image: "/places/madurai-museum.jpg",
      },
    ],
  
    map: {
      location: "9.9252,78.1198",
      nearby: ["Rameshwaram", "Kanyakumari", "Dindigul"],
    },
  },
  {
    id: 3,
    name: "Ooty",
    tagline: "Queen of Hills",
    region: "West",
    type: "Hill",
    image: "/districts/ooty.jpg",
    history:
      "Ooty was developed by the British in the 19th century as a summer retreat. It was known as 'Udhagamandalam' and became popular for its tea plantations and colonial architecture.",
    overview:
      "Ooty is a popular hill station known for its lush green tea gardens, colonial charm, and pleasant climate.",
    famousFor: "Tea Gardens, Scenic Beauty, Toy Train",
    famousPlaces: [
      {
        name: "Tea Gardens",
        description: "Famous for tea plantations and factory tours",
        image: "/places/ooty-tea.jpg",
      },
      {
        name: "Nilgiri Mountain Railway",
        description: "UNESCO World Heritage toy train",
        image: "/places/ooty-train.jpg",
      },
      {
        name: "Botanical Garden",
        description: "Beautiful garden with exotic plants",
        image: "/places/ooty-garden.jpg",
      },
    ],
   
    map: {
      location: "11.4102,76.6950",
      nearby: ["Coimbatore", "Mysore", "Wayanad"],
    },
  },
  {
    id: 4,
    name: "Kanyakumari",
    tagline: "Land's End",
    region: "South",
    type: "Beach",
    image: "/districts/kanyakumari.jpg",
    history:
      "Kanyakumari is the southernmost point of mainland India, known for its confluence of three seas - Arabian Sea, Bay of Bengal, and Indian Ocean. It has been a pilgrimage site for centuries.",
    overview:
      "Kanyakumari offers stunning sunrises and sunsets, with iconic monuments and spiritual significance.",
    famousFor: "Sunrise, Temples, Beaches",
    famousPlaces: [
      {
        name: "Vivekananda Rock Memorial",
        description: "Monument dedicated to Swami Vivekananda",
        image: "/places/kanyakumari-rock.jpg",
      },
      {
        name: "Thiruvalluvar Statue",
        description: "Statue of the Tamil poet philosopher",
        image: "/places/kanyakumari-statue.jpg",
      },
      {
        name: "Kanyakumari Beach",
        description: "Beautiful beach at the confluence of three seas",
        image: "/places/kanyakumari-beach.jpg",
      },
    ],
   
    map: {
      location: "8.0883,77.5385",
      nearby: ["Rameshwaram", "Kochi", "Madurai"],
    },
  },
  {
    id: 5,
    name: "Thanjavur",
    tagline: "Rice Bowl & Heritage",
    region: "Delta",
    type: "Temple",
    image: "/districts/thanjavur.jpg",
    history:
      "Thanjavur was the capital of the Chola dynasty and is known for its rich cultural heritage. The Brihadeeswarar Temple, a UNESCO World Heritage site, is its crown jewel.",
    overview:
      "Thanjavur is famous for its ancient temples, classical dance forms, and handcrafted bronze sculptures.",
    famousFor: "Temples, Art, History",
    famousPlaces: [
      {
        name: "Brihadeeswarar Temple",
        description: "UNESCO World Heritage temple built by Raja Raja I",
        image: "/places/thanjavur-temple.jpg",
      },
      {
        name: "Thanjavur Maratha Palace",
        description: "Historic palace of the Maratha rulers",
        image: "/places/thanjavur-palace.jpg",
      },
      {
        name: "Saraswathi Mahal Library",
        description: "Ancient library with rare manuscripts",
        image: "/places/thanjavur-library.jpg",
      },
    ],
    
    map: {
      location: "10.7870,79.1378",
      nearby: ["Tiruchirappalli", "Chidambaram", "Kumbakonam"],
    },
  },
];

export default districts;
