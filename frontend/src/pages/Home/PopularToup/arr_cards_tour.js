import imgCardCinque from "../../../image/img_cards_tour/Cinque_Terre_Tour/Cinque_Terre_Tour.jpg";
import imgCardFlorence from "../../../image/img_cards_tour/Florence/Florence.jpg";
import imgCardGardaland from "../../../image/img_cards_tour/Gardaland/Gardaland.jpg";
import imgRome from "../../../image/img_cards_tour/Rome/rome.jpg";
import imgCardLuccaHills from "../../../image/img_cards_tour/Tour_of_the_Lucaa_Hils/Tour_of_the_Lucca_Hills.jpg";
import imgCardPisa from "../../../image/img_cards_tour/Pisa/Pisa.jpg";
import imgCardSiena from "../../../image/img_cards_tour/Siena_And_Surroundings/Siena_And_Surroundings.jpg";
import imgCardTuscany from "../../../image/img_cards_tour/Wine_tasting_In_Tuscany/Wine_testring_In_Tuscany.jpg";
import galleryPisa from "./Gallery/galleryPisa";
import galleryFlorence from "./Gallery/galleryFlorence";
import galleryCingueTerre from "./Gallery/galleryCingueTerre";
import gallerySienaSurroundings from "./Gallery/gallerySiena";
import galleryLuccaHills from "./Gallery/galleryLuccaHills";
import galleryRome from "./Gallery/galleryRome";
import galleryVerona from "./Gallery/galleryVerona";
import galleryTuscany from "./Gallery/galleryTuscany";
const arr_cards_cour = [
   {
      id: 1,
      image_main: imgCardPisa,
      name: "Pisa & Lucca",
      price: 34,
      date: "EVERY DAY",
      people: "1-5",
      body: "The 'Pisa & Lucca' tour offers a captivating journey through two of Tuscany's most iconic cities, providing travelers with a rich blend of history, culture, and architectural marvels.",
      duration: "5 hours",
      language: "English, Italian ",
      transport: "Miniven",
      details_text:
         "The tour typically begins with a visit to Pisa, famous worldwide for its iconic Leaning Tower, Cathedral, and Baptistery in the Piazza dei Miracoli (Square of Miracles). Visitors have the opportunity to marvel at the architectural wonders of these UNESCO World Heritage sites, learn about their history, and take iconic photos with the Leaning Tower.",
      gallery: galleryPisa,
      time: `9:00`,
      guide_service: "Incuded",
      entry_fees: "None",
   },
   {
      id: 2,
      image_main: imgRome,
      image_more: [],
      name: "Rome",
      date: "EVERY DAY",
      price: 34,
      // date: [new Date().toISOString().substring(0, 10), "2024-3-19"],
      people: "6-10",
      body: "Embark on an unforgettable journey through the picturesque streets of Lucca with our exhilarating bike tour. Discover the charm of this historic Tuscan city from a unique perspective as you pedal through narrow cobblestone lanes, past ancient churches, and alongside centuries-old city walls.",
      transport: "Miniven",
      duration: "3 - 4 hours",
      language: "English, Italian",
      details_text:
         '"Lucca Bike Tour" offers an immersive and enriching experience for those keen on exploring the captivating Italian city of Lucca on two wheels. Lucca, located in Tuscany, is renowned for its well-preserved Renaissance walls encircling the historic center, cobblestone streets, charming piazzas, and rich cultural heritage.',
      time: `11:00`,
      guide_service: "Incuded",
      entry_fees: "None",
      gallery: galleryRome,
   },

   {
      id: 3,
      image_main: imgCardFlorence,
      name: "Florence",
      price: 66,
      date: "EVERY DAY",
      people: "11-20",
      body: "A tour of Florence, known as the 'Cradle of the Renaissance,' promises an enchanting journey through centuries of art, culture, and history in one of Italy's most captivating cities.",
      duration: "3 hours",
      language: "English, Italian ",
      transport: "Bus",
      details_text:
         "Florence is renowned for its extraordinary artistic heritage, and a visit often begins with iconic landmarks such as the Florence Cathedral (Duomo) with its impressive dome designed by Brunelleschi, the Baptistry's famous bronze doors by Ghiberti, and Giotto's Campanile. Nearby, visitors can explore the bustling Piazza della Signoria, home to the Palazzo Vecchio and a collection of outdoor sculptures including Michelangelo's David replica.",
      guide_service: "Incuded",
      time: `16:00`,
      entry_fees: "None",
      gallery: galleryFlorence,
   },
   {
      id: 4,
      image_main: imgCardCinque,
      name: "Cinque Terre Tour",
      price: 15,
      date: "EVERY DAY",
      people: "1-5",
      body: "Cinque Terre is a breathtaking stretch of coastline in the Liguria region of Italy, renowned for its colorful cliffside villages, stunning views, and picturesque landscapes. A tour of Cinque Terre offers travelers a chance to immerse themselves in the charm of these five charming villages: Monterosso al Mare, Vernazza, Corniglia, Manarola, and Riomaggiore.",
      details_text:
         "Starting in Monterosso al Mare, visitors can explore its sandy beaches, narrow streets lined with pastel-colored houses, and the ancient San Francesco Convent. Moving on to Vernazza, one encounters a small harbor surrounded by medieval buildings, a picturesque castle, and the Santa Margherita di Antiochia Church. Corniglia, perched atop a cliff, offers panoramic views of the coastline and terraced vineyards. ",
      duration: "2 hours",
      language: "English, Italian ",
      transport: "Miniven",
      time: `20:00`,
      guide_service: "Incuded",
      entry_fees: "None",
      gallery: galleryCingueTerre,
   },
   {
      id: 5,
      image_main: imgCardSiena,
      name: "Siena and Surroundings",
      price: 55,
      date: "EVERY DAY",
      people: "1-5",
      body: "Exploring the surroundings of Cinque Terre offers an enriching experience beyond its charming villages. The rugged coastline and lush hillsides provide a backdrop for various outdoor activities and cultural discoveries.",
      duration: "7 hours",
      language: "English, Italian ",
      transport: "Miniven",
      details_text:
         "Hiking trails meander through terraced vineyards and olive groves, offering panoramic views of the Mediterranean Sea. One popular route is the Sentiero Azzurro, connecting the five villages and showcasing the region's stunning landscapes.Boat tours provide an alternative perspective, allowing visitors to admire the colorful villages from the water while discovering hidden coves and sea caves along the coastline.",
      time: `9:00`,
      guide_service: "Incuded",
      entry_fees: "None",
      gallery: gallerySienaSurroundings,
   },
   {
      id: 6,
      image_main: imgCardLuccaHills,
      name: "Tour of the Lucca Hills",
      price: 70,
      date: "EVERY DAY",
      people: "11-20",
      body: "The 'Tour of the Lucca Hills' offers a delightful journey through the scenic countryside surrounding the historic city of Lucca in Tuscany, Italy. This tour provides travelers with an opportunity to escape the bustling city and immerse themselves in the tranquil beauty of the Tuscan landscape.",
      duration: "2 hours",
      language: "English, Italian ",
      transport: "Bus",
      details_text:
         "As participants venture into the Lucca Hills, they are greeted by rolling hills adorned with vineyards, olive groves, and picturesque farmhouses. The lush greenery and charming villages scattered across the countryside create a serene atmosphere that invites relaxation and exploration.",
      time: `11:00`,
      guide_service: "Incuded",
      entry_fees: "None",
      gallery: galleryLuccaHills,
   },
   {
      id: 7,
      image_main: imgCardGardaland,
      name: "Gardaland, Verona",
      price: 150,
      date: "EVERY DAY",
      people: "6-10",
      body: "Gardaland is one of Italy's premier theme parks, located near the charming city of Verona in the Veneto region. This tour to Gardaland promises an exhilarating and fun-filled day for visitors of all ages.",
      duration: "2:30 hours",
      language: "English, Italian ",
      transport: "Bus",
      details_text:
         "The tour to Gardaland from Verona typically includes transportation to and from the park, entrance tickets, and ample free time to explore the attractions at leisure. Whether traveling with family, friends, or as a couple, a visit to Gardaland promises a day of excitement, laughter, and unforgettable memories in the heart of Northern Italy's picturesque landscape.",
      time: `16:00`,
      guide_service: "Incuded",
      entry_fees: "None",
      gallery: galleryVerona,
   },
   {
      id: 8,
      image_main: imgCardTuscany,
      name: "Wine tasting In Tuscany",
      price: 60,
      date: "EVERY DAY",
      people: "More 20",
      body: " Embark on a sensory journey through the picturesque landscapes of Tuscany as you indulge in a captivating wine tasting tour. Nestled amidst rolling hills adorned with vineyards, this enchanting region offers a delightful blend of history, culture, and exquisite flavors.",
      details_text:
         "Your adventure begins at a charming winery, where the air is perfumed with the sweet aroma of ripening grapes. Welcomed by passionate vintners, you'll be guided through lush vineyards, where rows of vines stretch towards the horizon under the warm Tuscan sun. Learn about the unique terroir of the region, the distinct grape varietals, and the meticulous craftsmanship that goes into every bottle of Tuscan wine.",
      transport: "Bus",
      duration: "4-5 hours",
      language: "English, Italian ",
      time: `20:00`,
      guide_service: "Incuded",
      entry_fees: "None",
      gallery: galleryTuscany,
   },
];

export { arr_cards_cour };
