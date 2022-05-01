type LocationType = {
    country: string
    city: string
    address: string
}

export type UsersType = {
    _id: string
    user: string
    location: LocationType
    rate: number
    description: string
    review: Array<string>
    cost: number
    bookmark: boolean
}

const lodgingObjects: Array<UsersType> = [
    {
        _id: "1",
        user: "Joan Slash",
        location: {country: "Thailand", city: "Bangkok", address: "Soi Sukhumvit 22"},
        rate: 4.1,
        description: "Large and Spacious Studio Bedroom with Private Bathroom. A Comfortable King Size Beds and seating area.Located in Arawana Regency Park in downtown Bangkok. There is a Family Mart located right downstairs",
        review: ["this is The place is neat and near to BTS so no hassle in terms of transportation.", "its very aweasom", "i'm happy", "good job bro"],
        cost: 2090,
        bookmark: false
    },
    {
        _id: "2",
        user: "Emery Hall",
        location: {country: "Thailand", city: "Bangkok", address: "4/12 Soi Sukhumvit"},
        rate: 4.7,
        description: "Near BTS Thong Lo sky train station 300 meter.Centre of convenience life. Cozy studio room apartment will full equipment. This room there are 1 king bed (quality bed), 1 dinning table, 1 small kitchen, and 1 bathrooms. Free Wi-Fi. You can enjoy cooking light meals with cooking tools in the kitchen. There are convenience store and street food shops nearby.",
        review: ["Awesome place. Amenities are great. Near BTS - 5 to 10min walk. A station away from my favorite malls EmQuartier and Emporium. The room is spacious and clean. Had a great stay, and will stay here again. Thanks for the accomodation.", "its very aweasomWhat a cool place! I love staying here!"],
        cost: 1173,
        bookmark: false
    },
    {
        _id: "3",
        user: "Ludoping",
        location: {country: "Thailand", city: "Bangkok", address: "403-403/1, 407 407/1 Sukhumvit Rd"},
        rate: 4.8,
        description: "A warm and welcoming Stay at a classically designed 1 bedroom located and surrounded by the young money of Thonglor/Ekkamai area. 200 meters to Skytrain BTS Ekkamai station. 2 Balconies, one in living room and one in bedroom, Japanese Minimalist style interior design.Well-equipped facilities with pool and Gym. Prime location to all the Chilling restaurants, bars, clubs and street food",
        review: ["Realy nice an clean place close to public transportation. Recommended if you want to look around in Bangkok.", "Hi. It’s a clean room and well located. Just need some stuff like glasses and microwave. All the rest was ok. Thanks."],
        cost: 5382,
        bookmark: false
    },
    {
        _id: "4",
        user: "Khalil Miller",
        location: {country: "Thailand", city: "Bangkok", address: "4/12 Soi Sukhumvit"},
        rate: 4.5,
        description: "This room are 1 bedroom which have 1 king size bed. This room is located at the area of Asoke, with a 3 minutes by walk to BTS Asoke and Nana, also Terminal 21 and a few minutes from the Airport Link also near to Siam, Siam Paragon, Restaurants, Bars, Clubs, Massages, Siam mall, nightlife, great views. You’ll love my place because of the views, the location, the ambiance, Bangkok heart's. My place is good for every group such as family couple friends est.rent at least one month",
        review: ["Pretty good place for the price, just next to terminal 21 and BTS Asoke. They answer quickly to your message if you need information or help.", "Entire staff, I applaud. A definite keeper. I would stay again FACT.", "Appartement spacieux, bien équipé et bien situé. Recommande fortement"],
        cost: 1729,
        bookmark: false
    },
    {
        _id: "5",
        user: "Nathanael Barnes",
        location: {country: "Thailand", city: "Bangkok", address: "29 Soi Sukhumvit"},
        rate: 4.6,
        description: "Enjoy ease of access to taxis, just a 3 minutes away is Pak Nam Skytrain Station, connecting you to most popular destinations including the Chao Praya Pier, Airport Rail Link, and MRT Subway. This will give you access to Paragon & Emporium, Suvarnabhumi Airport and even Chatuchak Market. Also 2 minutes away is a popular Thai restaurant called Sanctuary and Illy Cafe with garden-decor, and a romantic ambience.",
        review: ["Great value for money ", "Very Thoughtful. Highly recommended", "Great Place with free breakfast and 2 swimming pools. Located within 1 min walking distance from Pak Nam BTS station.", "The host is very responsive. The place is very clean and smells good. All the staffs are kind and hospitable. Though it's quite far from Bangkok (1hr approx. via metro, 30mins via Grab/taxi) what's good about this apartment is it's very near to a train station, Pak Nam. We really had fun and it was nice staying in this apartment."],
        cost: 2058,
        bookmark: false
    },
    {
        _id: "6",
        user: "Xever Cooper",
        location: {country: "Thailand", city: "Phuket", address: "29 Moo 4 Srisoonthorn Road"},
        rate: 4.9,
        description: "My apartment is located in the heart of Laguna, in a beach luxury condominium , only 250 meters from Laguna Bangtao legendary beach. Breakfast buffet included in the price. Sea view infinity pool. You’ll love my place because of the location, the views, and the coziness. Pool and Bar with Sunset Sea view. Special and really unique. Easy to walk everywhere. Very quiet, peaceful and secure area. Gym. Parking. Free housekeeping services are provided once every two days.",
        review: ["The pictures do not do this place justice. We have been visiting Phuket Lagoona for over 15 years and my girlfriends father has a villa around the corner but we wanted some space of our own. The location is unbeatable, overlooking the golf course on a quiet strip but a few minutes from the beach and the town. The room is lovely and we frequently stay in 5 star hotels around the world and we would not have complained if we were given this room in one of them. The two hosts are a pleasure and for the price it is a bargain. We will be back next year! Thank you again for having us", "I have nothing but great things to say about this hosting.Kind owners who will give you all the information you need for restaurants, shops, everything you need. Very easy and on time communication. A crystal clear, modern, comfortable and functional apartment, even better than the photos show, very very well located, 15 min walk to the beach and 10 min to the Canal Village Laguna where you can find restaurants and shops.Jean tnx for staying in your apartment."],
        cost: 6164,
        bookmark: false
    },
    {
        _id: "7",
        user: "Griffin Morgan",
        location: {country: "Thailand", city: "Phuket", address: "10 Moo 4, Srisoonthorn road"},
        rate: 4.9,
        description: "Our apartment is located in Cassia Residence in Laguna BangTao Beach area with 24 hr security. Free parking, High-speed internet, Netflix & Youtube available TV, united all kitchen types of equipment. Two bedrooms with two bathrooms, also with two private balconies. Make you staying more comfortable with family and friends! Walking distance to beach and Boat Avenue. Many choices of restos/brunch place/Barkey /beach bar/ beach resto/bars. Free shuttle bus within Laguna area!",
        review: ["If you looking for a house for your family this place is the best to stay in Phuket. You need a car for go visit around the city. House is very clean like a new one I love it. Best price and convenient. Renee is very nice and quick response. Cheer to get this place you will have a good time in Phuket", "If you’re planning to stay around bang tao, this is the place. Jean & Bruno’s place is located in the centre of Laguna, minutes away from the beach. You have your own private room with great amenities and a nice little balcony overlooking the golf course.", "Place was fantastic, very clean all amenities were working perfectly. I stayed for a wedding at Angsana and was so close to the venue. Very close walk to many shops and restaurants or you can ride a short distance into town. Hosts were very pleasant and warm, always there to help. Highly recommend staying here!"],
        cost: 6059,
        bookmark: false
    },
    {
        _id: "8",
        user: "Abraham Smith",
        location: {country: "Thailand", city: "Phuket", address: "Soi Had Surin 8"},
        rate: 4.8,
        description: "Our ground floor condo is located 150m from Bangtao beach, one of Phuket's longest and most beautiful beaches. Bangtao Beach Gardens is a residential estate of modern spacious apartments. It boasts superb swimming pools, gymnasium facilities and beautiful garden surroundings against a backdrop of tropical mountains. Our ground floor condominium has two en-suite bedrooms, European kitchen facilities and large dining / living area as well as a garden terrace.",
        review: ["Absolutely lovely and spacious condo equipped with everything. Outside patio, area is a lovely tranquil place to sit. Pool was shut for our stay but it is a nice pool. Beaches were also shut but only a 5 min walk away from condominium as well as great restaurants. Will definitely return and throughly recommend a stay/holiday in this condominium and area. Thanks Mark.", "Mark's place is superb! It has all the essentials to make you feel at home. The closest beach is only 10 mins away from the apartment, or 20 mins walking to Surin beach to watch sunset and enjoy Thai massage. I have no problem communicating with Mark and he's very helpful. I highly recommend staying at his place. PS. Love the secret bookcase door!"],
        cost: 9078,
        bookmark: false
    },
    {
        _id: "9",
        user: "Chase Price",
        location: {country: "Thailand", city: "Phuket", address: "Soi Had Surin 8"},
        rate: 4.7,
        description: "Newly built Resort , located at Surin Beach, it is about 45 minutes’ drive from Phuket international airport",
        review: ["This property is in a great location, next to bars, restaurants, the beach, has fantastic facilities and is very much child friendly. My wife and daughter had a great time and we could not have asked for a better stay.", "Exactly as advertised, clean & comfortable. Came with exceptional welcome items. Great location, excellent complex & host was very helpful. Had a great time & would definitely book here again.", "Lovely place to stay just a little far away from town."],
        cost: 6982,
        bookmark: false
    },
    {
        _id: "10",
        user: "Gentry Cooper",
        location: {country: "Thailand", city: "Phuket", address: "Soi Had Surin 8"},
        rate: 4.3,
        description: " Cozy, well furnished, fully equipped, this lovely Studio in the heart of Surin, is located in a beautiful complex just 800m to crystal clear water white sandy beach of Surin. The condominium is Hotel managed providing full service: reception/lobby, rooftop restaurant, lounge bar, full-equipped gym, rooftop sea view swimming pool, pool bar. Shuttle bus service makes it even more convenient to reach the beach in just 2 minutes. Restaurants, Spa and shops beside the complex are just few meters walk",
        review: ["Apartment / block was perfect. Amazing pool with sea view, and gym. Surin is near to Pa Tong a tourist hotspot. Although we had to get a taxi to Pa Tong we were happy to be out of the hustle and bustle. If you wish to island hop, Surin is a 45 minute drive from Phuket.", "Exactly 6th Avenue Surin Beach and with price breakdown there is an additional charge 1000 u better rent a hotel room arrange by 6th Avenue which have daily cpeaning service instead of one after u leave if u allergy to mold this is not your place room 315.", "Really enjoyed our stay here. The pool, gym and terrace area on the roof is amazing, lovely place to chill out. Apartment was nice, really good AC and the bed was the comfiest weve had so far on our travels! Only thing that was lacking was we only got two towels - could have done with hand towels for washing up/bathroom. Would recommend.", "Nice apartment! Great pool."],
        cost: 4130,
        bookmark: false
    },
    {
        _id: "11",
        user: "Maxus Ioannis",
        location: {country: "Cyprus", city: "Polis", address: "Poli Crysochous"},
        rate: 4.3,
        description: "This apartment is located just opposite the famous Lachi harbor. It is an all air-conditioned unit that includes a fully equipped kitchen, a great view to the complex pool. It has a smart tv and shares a 300Mps wireless internet connection with few other apartments. Many fish taverns and restaurants, a taxi office, two Watersports centres, two supermarkets, a pharmacy and a jewellery are located just across the road. Beach organised by municipality is also within walking distance.",
        review: ["We were in Cyprus to dive at Latchi and this apartment was perfect. Right across the road from Latchi harbour and dive centre and the supermarkets and restaurants. The apartment is very well equipped, a washing machine and full-size fridge freezer were very useful. Perfect for our needs and if you want to explore the Akamas, enjoy the sea, water sports or exploring the northwest of the island. Communication from Yiannis was always quick when we had questions with regard to anything in or around the apartment. Definitely returning here next year.", "Location is great, very close to the beach and all activities in Latchi. Apartment is fully equipped. Great choice for a small budget. But you should notice that this is a ground floor and all the windows in the bedroom look into the yard. So you should hear all your neighbors (( Bathroom needs a renovation"],
        cost: 3383,
        bookmark: false
    },
    {
        _id: "12",
        user: "Joan Gemma",
        location: {country: "Cyprus", city: "Polis", address: "Poli Crysochous"},
        rate: 4.6,
        description: "Situated on the beach at the popular resort of Latchi, this ground floor 1 bedroom apartment is in a great location. The restaurants, shops and bars of Latchi are within easy walking distance, making it ideal for those who want to relax and unwind. The apartment has an open plan living/kitchen area with patio doors leading to a covered terrace with great sea views, perfect for breakfast and for that evening cocktail",
        review: ["This is an amazing place to stay, very central to most places in Latsi and a stones throw from the beach.", "Near the sea as we wanted and the air condition with a timer was very useful in such a heat.", "Great Location! Private parking. Comfortable bed. Kitchen fully equiped. Needs better cleaning.", "This is a wonderful place to stay. A wonderful, clean apartment. A very short walk to the beach, with local shops restaurants and harbor within easy walking distance. There is plenty of things to do in the area. This is a superb place to stay and I would highly recommend it."],
        cost: 2902,
        bookmark: false
    },
    {
        _id: "13",
        user: "Corallia Hill",
        location: {country: "Cyprus", city: "Polis", address: "Akamantos Avenue"},
        rate: 4.7,
        description: "The upper floor house is located in a complex of houses in the middle of Polis Chrysohous, Prodromi and Latsi villages. Because of it΄s location, access to the different villages become more efficient. The beach is around 600meters away and you can even go on foot if are not having a car. The bus stop is outside in the main street (again walking distance) and there is a small Supermarket opposite the main road that you can supply anything you may need for your holidays.",
        review: ["Nice, cozy and clean house. Good and fast communication with Corallia. Very easy with self check-in. We can definately recommend it.", "Lovely clean house, comfy beds, modern furnishings, great location and even better we got to take our pooch with us on this holiday. we had a wonderful time thank you", "Quick responses from host, good location , close to the beaches in latchi and plenty of good restaurants in both latchi and polis. Good supermarket nearby, plenty of space and storage, decent parking although poor lighting around drive area. Neighbours dogs very loud barking most nights."],
        cost: 3731,
        bookmark: false
    },
    {
        _id: "14",
        user: "Neal Despina",
        location: {country: "Cyprus", city: "Polis", address: "Akamantos Avenue"},
        rate: 4.8,
        description: " This is a beautiful two-bedroom house with private roof terrace. It is modernly decorated with air condition in all rooms. Netflix is provided free of charge. You can use the private roof terrace to sunbathe in the sun or drink a glass of wine under the skylight while looking over the beautiful sea and mountain views. The house has a communal pool and an allocated underground parking space. It is located close to amenities and a few minutes’ drive to the beach.",
        review: ["Lovely place to relax. Clean house and helpful host", "That was second time we rent this place. It is nice and cozy, well equipped. I’m strongly recommend rent a car because house is not so close to beaches and restaurants but it is very quiet and calm.", "Great place to stay, we really enjoyed it. Fantastic location. Terrance area really adds to stay. Very clean and kitchen is well equipped. Few minutes drive to old town area or coast. Would recommend.", "Nice modern townhouse at the top of the town with great views of the sunset from the roof terrace. Good communication with Despina. Tip: turn the front door key the wrong way to open it!"],
        cost: 4975,
        bookmark: false
    },
    {
        _id: "15",
        user: "Lara Anna",
        location: {country: "Cyprus", city: "Polis", address: "Akamantos Avenue"},
        rate: 4.6,
        description: "Crocus Veneris is a beautiful home in the Prodromi area, ideal for relaxed holidays close to nature and some of the most beautiful beaches of Cyprus and the Latchi harbor. With three available bedrooms, the main bedroom on the ground floor, a single bedroom and a twin bedroom on the first floor, up to five people can be hosted. This house features a Yoga Studio and a big garden, the ultimate space to relax having your afternoon coffee, accompanied with fruit from its trees.",
        review: ["Clean, perfect location , quiet neighbourhood, good communication with the host", "Very nice villa in a calm neighborhood with a neat garden and pleasant terrace in a shade.", "Crocus Veneris is a beautiful house, very spacious, suitable for families, with a large garden and three cats that never disturb. it is advisable to have a car to reach in a few minutes beaches and restaurants in the area. Ideal for a quiet holiday. I spent a wonderful week with my two children."],
        cost: 5113,
        bookmark: false
    },
    {
        _id: "16",
        user: "Constantine Moore",
        location: {country: "Cyprus", city: "Limassol", address: "Anexartisias"},
        rate: 4.7,
        description: "Welcome! Comfortable apartment with a magnificent view of the Limassol bay, access to the center. Sights of Limassol - Marina, Old Town and City Park, Beach 3 minutes walk !!! 2 air conditioners, kitchen, washing machine, shower. In the hall there is a dining table, a sofa bed, LCD-TV with 40 international channels, including CTC, Ru TV., Wifi - 5 Mb / sec., Iron, iron. board and hairdryer. Large built-in wardrobe in the bedroom, office desk. At the request of guests with children, a playpen, a bathtub and a table for feeding. Have a great rest !!!",
        review: ["Photos are better than in real life. But everything was good. Price is perfect.", "It’s a nice place for a short stay, the location is prefect. The noise didn’t disturb me.", "Everything was beautiful, would recommend!"],
        cost: 5721,
        bookmark: false
    },
    {
        _id: "17",
        user: "Niklaus Pampos",
        location: {country: "Cyprus", city: "Limassol", address: "Anexartisias"},
        rate: 4.8,
        description: "Each studio apartment is individually furnished with custom fittings and furnishings. Set in the heart of the city. A 5-minute walk from the shops, bars, cafes, the University, The Medieval Castle, the Old Port & the Limassol Marina.",
        review: ["The apartment is perfectly located - restaurants, bars and marina from the one side and beach road from the other. It is very clean, during our stay spreadsheets and towels were changed regularly, very modern and cosy. Pambos is a great host, his bar Gin Garden is a must to visit. The only disadvantage for us was that due to central location it is noisy till early morning, and we used to go to bed not late. Nevertheless, the stay was very good. ", "Purely recommendable apartment, right in the center of Limassol.", "Amazing! Beautiful location, great communication. Felt very welcome."],
        cost: 7463,
        bookmark: false
    },
    {
        _id: "18",
        user: "Rhett Jennifer",
        location: {country: "Cyprus", city: "Limassol", address: "Agiou Andreou"},
        rate: 4.6,
        description: "Recently renovated 1 bed apartment (sleeps 4). Located on the popular Street of 'St Andrews' in Limassol, which is adjacent to the seafront & beach. Sitting room with dining area, separate kitchen fully equipped, shower room & balcony, brand new fittings & furniture. This reasonably priced accommodation offers travellers home comforts (wifi/satellite TV) and an ideal central location in Limassol as a home base. Perfect for 2 adults, groups upto 4. Mountain views, street parking - free wifi",
        review: ["We enjoyed stay at this place very much. A very convenient location, close to all amenities. A very nice flat with everything needed for a comfortable stay. We were very pleased to have a bottle of wine and water upon arrival.", "Excellent location in the city center close to the sea and all interesting places, the house has a good supermarket. The apartment is not big, but very comfortable, clean, with a fresh renovation. The kitchen is well equipped. Good It is very convenient to transfer the key through the keybox. Recommend", "Highly recommend Jen’s place. Not only is the place extremely well located but Jen really goes extra mile to the experience is smooth. Thank you!"],
        cost: 3918,
        bookmark: false
    },
    {
        _id: "19",
        user: "Ignace Konstantinos",
        location: {country: "Cyprus", city: "Limassol", address: "Digeni Akrita"},
        rate: 4.9,
        description: "Beautiful, cosy and stylish One bedroom apartment, located in the heart of the Old City of Limassol across the Mediterranean Coast Road near the New Marina of Limassol, the Municipal City Park and the Downtown. Less than a minute walking distance to the beach, coffee shops and restaurants.Larnaka International Airport and Paphos Airport are just 50' minutes far . The apartment has a unique sunset view of the old and the modern city and it is extremely central with a very convenient location.",
        review: ["The apartment is an amazing! I felt like home! There is everything you need! Location is good, near sea and market also it is just 15 min on foot to old town. I really love this place. The bed is comfortable, everything is really clean! Konstantinos is a good polite hostess, he always ready to help. Thank you so much, it was a pleasure!!!", "Apartments have great location near beach and promenade, quite a lot of restaurants and supermarkets. We stayed with two kids and apartments had everything that we needed.", "Stylish place and clean! We stayed there while working remotely and the Internet was reliable too. Overall we liked it! Located close to the beach, restaurants and bars, but not too close, so it’s still a quiet block! Be careful to check out on time", "This place was worth the stay as it was comfortable, private and conveniently located by the sea front & close to a kiosk and ATM"],
        cost: 8292,
        bookmark: false
    },
    {
        _id: "20",
        user: "Tadeo Simmons",
        location: {country: "Cyprus", city: "Limassol", address: "Olympion"},
        rate: 5,
        description: "Our apartment is situated in the centre of Limassol just across the Blue flagged beach. Private Complex, which used to be a hotel passed the full renovation and is now offering private accommodation with some hotel facilities. Security entrance, reception, camera system and a security guard for your safety. Roof top pool is a unique one in Limassol and is available for all the residence, as well as common gym.",
        review: ["Everything was okay, the staff are great and attentive.", "Very nice host, easy communication, Clean and spacy apartment. Very good location near the beach and center of the town.", "The host canceled this reservation 3 days before arrival. This is an automated posting."],
        cost: 7877,
        bookmark: false
    },
    {
        _id: "21",
        user: "Mohamed Ramirez",
        location: {country: "Spain", city: "Barcelona", address: "Carrer de Balboa"},
        rate: 4.8,
        description: "Newly renovated cozy bedroom with private bathroom (outside the room). The bedroom is equipped with a private small fridge, Nespresso coffee machine and kettle so you can wake up to a nice cup of coffee without leaving your bedroom! It's an room with a concept of a hotel room inside a shared apartment.The perfect concept for a comfortable stay at a cheaper price!",
        review: ["A perfect location and a lovely clean room with good facilities. Would highly recommend and great value for money", "Clean accommodation in a central environment", "Nice location, good host, good room. Bathroom is in the hallway, but privat, so okay! We enjoyed our stay really much!"],
        cost: 5445,
        bookmark: false
    },
    {
        _id: "22",
        user: "Lina Paola",
        location: {country: "Spain", city: "Barcelona", address: "Carrer de Pizarro"},
        rate: 4.8,
        description: "Your studio apartment is waiting for you here, everything you need in a unique, stylishly refurbished, welcoming and light-filled space. On your right when you walk in is a bathroom with a shower, and a lovely open-plan kitchen with a dining table and everything you need to knock up a meal if you don’t fancy going out. On the other side lies the sleeping area, complete with a comfortable double bed, and a small balcony from which you can lean over and take in the narrow little streets of La Barceloneta. The apartment is on the fifth floor in a building without an elevator! Once you’ve settled in, all you have to do is decide whether to head downtown or go to the beach.",
        review: ["The communication was good, checkin went smooth and the room was very nice and comfortable. In the great area El Born. Would recommend!", "Great location and very nice place to stay for a couple days. I would just note that the bathroom is private but outside of the room.", "Very nice place, clean, accessible to good neighborhoods and metro. Perfect for my needs. Recommend."],
        cost: 12052,
        bookmark: false
    },
    {
        _id: "23",
        user: "Bego Y JuanCa",
        location: {country: "Spain", city: "Barcelona", address: "Carrer de Balboa"},
        rate: 4.5,
        description: "Best location to enjoy Barcelona, 2 minutes walking distance to the beach and easy access to Barcelona´s turistic places with excellent transport comunications and close to the metro station. Modern 2 bedroom apartment, well equiped, fast wifi. Close to trendy stores, bars and restaurants. Ideal for families or friends. Adults alone ONLY over 27 years old. We have 4 apartments in the same building all with same size and design, if you need more than one apartment please contact us.",
        review: ["Great Location. Clean and Friendly. Please respect the apartment the team try very hard to keep the location fun and peaceful.", "First of all our appartment was very clean, but in the entrance area were a hand full of cockroaches. After the check in the communication was sparse. But all in all it was good appartment with good position.", "Very nice and peaceful place."],
        cost: 13681,
        bookmark: false
    },
    {
        _id: "24",
        user: "Fernanda Perez",
        location: {country: "Spain", city: "Barcelona", address: "Passeig de Joan Borbo"},
        rate: 4.8,
        description: "Elegant and luxury studio designed for an amazing stay for you, your friends and family. Steps from the famous Barceloneta beach, in a brand-new building featuring a sunny rooftop garden and modern amenities. Come to tan in all-year sunshine, surf the Mediterranean blue, and taste the Catalan delicacies, all in one unique stay with surprising discoveries!",
        review: ["Awesome location! Great experience overall.", "Great studio, very clean. Awesome location, just by the beach. Will was super helpful. Great Wi-Fi for work and streaming. We want to come back again! A few things to be mindful: there is no elevator and the stairs are a bit narrow, but that seems to be common in Barceloneta as a whole. The building outside door makes a lot of noise when it closes but we had no trouble sleeping.", "Nice apartment with easy access to the sea and beach! The rooftop is great for breakfast. The apartment is a good combination between modern decoration and existing building.great job guys! ", "Great cozy and modern apartment in an awesome location. Fantastic rooftop."],
        cost: 8762,
        bookmark: false
    },
    {
        _id: "25",
        user: "Austin Clark",
        location: {country: "Spain", city: "Barcelona", address: "Carrer del Mar"},
        rate: 4.2,
        description: "Cozy bright 1br apartment located in Barceloneta beach, just steps to the beach and within a walking distance to all mayor tourist attractions like The Ramblas, Gothic Quarter , Cathedral, Museo Picasso. The area is full of restaurants and tapas bars. The apartment has been renovated and decorated with modern furniture. It has plenty of light and a balcony with lateral views to the sea (Not suitable for seating ).",
        review: ["A nice small apartment very close to the beach in the lovely Barceloneta.", "Great apartment and location. It has a coded entr and a large electronic and secure locking system (rather than a key) so you can feel safe knowing a previous key holder cannot gain entry. I write this having heard that another Airbnb was burgled with no forced entry. The only negative is that the stairs are very narrow and quite steep so probably not suitable for anyone with any mobility issues.", "We had a great time in barcelona and the location of the apartment is great, footsteps away from the beach and perfect for morning coffee right there. The AC occupies the little balcony almost entirely which doesn’t come across on the photos but isn’t that important either."],
        cost: 6633,
        bookmark: false
    },
    {
        _id: "26",
        user: "Luis Edison",
        location: {country: "Spain", city: "Valencia", address: "C. de la Purissima"},
        rate: 4.9,
        description: "Bohemian loft + terrace in the old town of Valencia. Next to many turistic places as Valencia's Central Market and Santa Catalina's Church (1 min walk). This loft is in an old building of flats that have been just rehabilitated in order to offer the best confort to our guests. It's a great place to share with your couple or family",
        review: ["The apartment is amazing - perfect location and amenities were fantastic. We will definitely book again next year.", "Beautiful apartment with great terrace - didn't want to leave it! Communication with the host is easy and check in/check out procedure is smooth. Definitely recommend staying here while visiting Valencia.", "Don't miss the opportunity if you have it! Stayed four nights and was so comfortable, convenient, amazing location."],
        cost: 12106,
        bookmark: false
    },
    {
        _id: "27",
        user: "Federica Bell",
        location: {country: "Spain", city: "Valencia", address: "Carrer de Betlem"},
        rate: 4.6,
        description: "Splendid apartment recently and elegantly renovated in the heart of Valencia close to all major tourist attractions. The house is made up of three tastefully decorated double bedrooms, one with a double sofa bed. There is one comfortable bathroom, a living room and an equipped kitchen.",
        review: ["The apartment is located optimal in the old town and Federica is a good, helpful and communicative host.", "The appartement is very well located in the city center. You can do a lot of things by foot. It is also very clean and well-equipped. The communication with the host was also great. I totally recommend it!", "Amazing place, I have stayed one month and wanted to stay more if the apartment was free! I have been in few apartments in Valencia and this one is the best!"],
        cost: 7463,
        bookmark: false
    },
    {
        _id: "28",
        user: "Olga Perry",
        location: {country: "Spain", city: "Valencia", address: "Carrer de Les Cuines"},
        rate: 4.6,
        description: "Habitación para 2 personas con increíbles vistas a la Catedral de Valencia y Torre del Miguelete.",
        review: ["A wonderful cozy flat right in the heart of the city. Olga was the perfect host, offering both support and privacy. Staying with her greatly contributed to the great experience we had in lovely Valencia.", "Incredibile position. Right beside the cathedral in the very heart of the city. The room is bright and spacious enough with plenty of storage space for clothes and luggage. The mattress is very comfortable and the house is always fresh thanks to the air conditioning, a must in the summer."],
        cost: 4892,
        bookmark: false
    },
    {
        _id: "29",
        user: "Joan Slash",
        location: {country: "Spain", city: "Palma", address: "Carrer de Jaume Ferrer"},
        rate: 4.6,
        description: "Compact apartment up to 3 in the historic center of Palma. Completely renovated in 2020. Full of small details designed for comfort. Ideal for long and short term rentals. All amenities at walking distance. Air conditioning.",
        review: ["Really enjoyable stay. Not a big apartment, but well designed and equipment, we got everything needed. Perfect position in the middle of Palma. Host is very sweet and responsive. Would come again, can only recommend.", "Apartment was very clean and good location! Also quiet at night. Host was very nice and helped with everything.", "A nice place just in the heart of the Palma with lots of good restaurants around", "Our stay was great! The place is really confortable and the location is amazing."],
        cost: 7546,
        bookmark: false
    },
    {
        _id: "30",
        user: "Sandra Diaz",
        location: {country: "Spain", city: "Palma", address: "Passeig de Sagrera"},
        rate: 5,
        description: "MARsuites 3 is a bright and cozy accommodation unit perfectly located at one of the most beautiful streets in Old Town, in front of Almudaina Royal Palace. Maximum Capacity 2 adults and 2 kids under 12. It belongs to MARsuites, an Old Town building recently renewed with 4 accommodation units with lift. MARsuites 1 has been designed and decorated with a cozy taste to offer comfortable place to stay. It has a little balcony from where you will enjoy amazing views over the Palace and Cathedral.",
        review: ["We had such a great experience of this place, I simply can’t fault it. It really felt a home from home and was so centrally located in Palma. We can highly recommend this place and we will definitely be returning. Thanks Sandra for such a lovely experience.", "This is a very comfortable, well-equipped apartment in a perfect location. The small square just steps from the apartment has many charming bars and restaurants, and it's only a few minutes’ walk from the beautiful marine, cathedral, and the shopping streets of the old city. Highly recommend!", "The apartment is lovely, it may not have much natural light but with the lighting they have it feels warm and cosy. We had such a comfortable stay and would happily come back here again when we're in the area. Highly recommend."],
        cost: 13129,
        bookmark: false
    },
    {
        _id: "31",
        user: "Pearson Martin",
        location: {country: "France", city: "Paris", address: "Burke"},
        rate: 4.6,
        description: "Charming, typically Parisian studio with old parquet and moldings of 18 m² located in an old hotel. Can accommodate 2 people in a comfortable convertible sofa. Has an equipped kitchen with a dining table, a bathroom with a shower and a separate toilet. Wifi and Tv. Rue Durantin is located in the heart of the famous Montmartrois village with its many restaurants and cafes. The Sacré Coeur is a few minutes’ walk away. Come live the real Parisian life!",
        review: ["Excellent apartment! Wonderful host. So responsive. Perfect Montmartre location! Will stay again.", "Very cosy flat located in a great spot of Paris with a very kind and helpful host!", "Had a lovely stay at the apartment! The apartment had all what I needed, was super cute, and was only a short walk to metro stop too. I’d definitely stay there again!!"],
        cost: 8430,
        bookmark: false
    },
    {
        _id: "32",
        user: "Oren Christophe",
        location: {country: "France", city: "Paris", address: "Orsham"},
        rate: 4.7,
        description: "Magnificent apartment with garden located in the heart of Montmartre, 100 meters from Abbesses metro station. Its exposed beams and its parquet floor are in harmony with the wooden terrace! A few steps from the Sacré Coeur and the Moulin Rouge! Perfect for a romantic getaway!",
        review: ["Top located! Very good communication! Very nice, clean and beautiful place. Well recommended", "Great location for exploring Montmartre! He also let us check in very early, which was helpful with jet lag and a toddler in tow. His communication was excellent, and he always checked in with us every day!", "Great location, well equipped, all the art books, spices & cooking stuff in the kitchen, espresso machine & even some milk and eggs in the fridge :)"],
        cost: 9453,
        bookmark: false
    },
    {
        _id: "33",
        user: "Patrick Walker",
        location: {country: "France", city: "Paris", address: "Passage de Abbes"},
        rate: 4.7,
        description: "Studio in the heart of Montmartre, a stone's throw from the Place des Abbesses, in a small quiet street, accommodation facing an interior courtyard, not overlooked. Near Sacré Coeur, Moulin Rouge, Place du Tertre, Pigalle. Renovated studio with all the comforts for your stay.",
        review: ["What a perfect little spot this was for my Paris vacation! It is in a great area of Montmartre - close to transportation, restaurants, the funicular, and just lovely little charming streets. The listing says small and it is indeed small - but if you are spending your days out and about in Paris as I did, then this is not a problem at all. It is a tiny bit noisy when the restaurant next door is open, but it’s not anything major. The host was very helpful when I needed anything and made my stay just right. For a solo traveler or a couple who wants to be in one of the most charming areas of Paris for a very reasonable price, this is the place to stay!", "We enjoyed our stay here. Flat is smaller but has everything what we needed. Area where is located is perfect.", "The apartment although small, was clean and had everything you need for a comfortable stay. The location was also great! Overall, we had a very pleasant stay!", "The apartment is exactly as seen in the pictures, very clean and close to the metro station."],
        cost: 6633,
        bookmark: false
    },
    {
        _id: "34",
        user: " Antoine Diaz",
        location: {country: "France", city: "Paris", address: "Rue Yvonne le Tac"},
        rate: 4.1,
        description: "Facing East (the morning sun floods the studio), overlooking a large courtyard with trees and flowers with . The studio is not overlooked, and what you see is just flowers and trees, which is rare in Paris!",
        review: ["Great location , thank u )", "Lovely little nest in Monmartre"],
        cost: 7830,
        bookmark: false
    },
    {
        _id: "35",
        user: "Ubaldo Gauthier",
        location: {country: "France", city: "Paris", address: "Rue la Bruyere"},
        rate: 4.9,
        description: "Studio located in the 9th arrondissement, close to Galeries Lafayette, Printemps, Sacré Coeur, Theaters, cinemas, cafes, restaurants, many Metro and Bus stations. With underground parking included in the price. Washing machine with integrated dryer. Wifi. There is a quality sofa bed with a real slatted bed and latex mattress for two people. The kitchen is fully equipped. With an induction hob, hood, toaster, Nespresso machine, kettle, plates, dishwasher.",
        review: ["Lovely Studio with the perfect location! Parking was an added bonus.", "The apartment was small but there was really everething you needed. The location was perfect and close to metro. The host responded very quickly. The parking place was perfect!", "The parking and location of the flat was perfect. If you are looking for a place to stay in Paris, conveniently located with a great host, this is the perfect place!", "The studio was so beautiful. It was very tidy and the location was perfect to discover the city. Especially it was nice to have a private parking lot nearby. Also was the Check-in and Check-out good organized and easy. We would absolutely recommend this apartment"],
        cost: 7877,
        bookmark: false
    },
    {
        _id: "36",
        user: "Manuel Angelide",
        location: {country: "France", city: "Marseilles", address: "Vincent LeBlanc"},
        rate: 4.4,
        description: "T2 apartment of 33 m2 in the Joliette rented furnished, with internet connection. An open and fully equipped kitchen with plates, cutlery, pots, cups, coffee machine, linen, dishwasher, oven, hotplates, kettle and crockery. A double bedroom. A sofa bed. Large bathroom with bathtub. Storage (cupboard). Placed Close to all amenities and trade road. Near the Corniche du Littoral, the Docks, the Mucem, the terrace, the basket, the Major, the old port.",
        review: ["Conveniently located flat with comfortable beds and pillows. The flat is part of an elegant and quiet building. Unfortunately, hot water wasn’t available throughout our stay, because of a boiler failure.", "Apartment as described. Functional and fairly well located. Thank you to your mom for being able to give us the keys despite our late arrival.", "The apartment was perfect for our stay, really comfortable and in a great location! If I'm ever in Marseille again I would be happy to stay here."],
        cost: 4478,
        bookmark: false
    },
    {
        _id: "37",
        user: "Samir Turner",
        location: {country: "France", city: "Marseilles", address: "Duverger"},
        rate: 4.7,
        description: "Cozy and very bright studio in the center of Marseille, close to all the main points of the city. It is 5 minutes’ walk from the basket, the emblematic district of the city, and 10 minutes’ walk from the Old Port.",
        review: ["Very friendly host and great location", "Great communication, and the coffee machine was a big plus! Perfect for a couple on a short stay."],
        cost: 3496,
        bookmark: false
    },
    {
        _id: "38",
        user: "Angelique Morris",
        location: {country: "France", city: "Marseilles", address: "Saint-Francoise"},
        rate: 4.9,
        description: "Exceptional location to explore the city’s emblematic sites on foot. In the historic center of Le Panier, in the quiet of a pedestrian street. Restaurants, cafes, shops. Fully equipped accommodation, sheets and towels provided.The Cathedral of the Major and its sea view from the square will be your daily life!The Mucem museum and the Old Port at 5 min.Boat trips to our creeks and the Frioul Islands from the quays.Notre Dame de la Garde and the beach accessible by bus stop 2 min.",
        review: ["Perfect accommodation for a family weekend: location, functional, clean, warm...", "Lovely apartment, very clean and well placed. Very warm welcome and easy communication. Very nice decor too!", "Great location and a very cozy apartment!"],
        cost: 5942,
        bookmark: false
    },
    {
        _id: "39",
        user: "Thierry Miller",
        location: {country: "France", city: "Lyon", address: "Rue Gasparin"},
        rate: 4.6,
        description: "Lyon, Place des Célestins, 8th floor not overlooked with elevator in the heart of the peninsula: T2 crossing fully equipped: bedroom, sofa, bathroom, toilet, kitchen. Terrace with stunning views over Fourviere and Place des Celestins. Ideal festival of lights! Shops, Restaurants, Parking lots nearby.",
        review: ["We visited Lyon for festival of lights! The location in the center of Lyon and the Presqu'île was just perfect. The view from the apartment was extraordinary, overlooking Lyon's roofs to both sides!", "The location and the apartment are great!"],
        cost: 10503,
        bookmark: false
    },
    {
        _id: "40",
        user: "Yasser Sebastien",
        location: {country: "France", city: "Lyon", address: "Pl. des Jacobins"},
        rate: 4.4,
        description: "Splendid apartment in the heart of the Lyonnaise peninsula, a few steps from the famous Place des Jacobins. 2 room apartment of 50 m2, completely renovated, decorated and equipped. Ideal for an enchanted Lyonnaise break on your own, as a couple or as a couple. All the comforts available: high-end 160 cm bedding, fully equipped kitchen, 140 cm LED screen, optical fiber, Netflix. Please note:' Themeritorious Jacobins'... must be earned, great calm and light on the 5th floor BUT no lift!",
        review: ["Apartment very well located and pleasant. Very easy communication. We had a very good stay!", "Perfect location, Great apartment for a weekend", "Location in the center of it all"],
        cost: 9453,
        bookmark: false
    },
    {
        _id: "41",
        user: "Francesca Ward",
        location: {country: "Italy", city: "Roma", address: "Via del Collegio Romano"},
        rate: 4.7,
        description: "UNIQUE LOCATION! - This cozy apartment, with its modern furnishing and the excellent location, is a great deal for your holiday in Rome.",
        review: ["The apartment is in the very center, all the sights are nearby. I really liked the separate entrance and that the apartment has a heater.", "Walkable to main attractions. The apartment is awesome. Highly recommend!", "Great communication and check in/out, clean and perfect location! We totally recommend it! Cheers.", "The flat is perfect and the location is very convenient to visit the City."],
        cost: 9867,
        bookmark: false
    },
    {
        _id: "42",
        user: "Verge Afm",
        location: {country: "Italy", city: "Roma", address: "Via del Corso"},
        rate: 4.5,
        description: "A well-designed suite next to the travel fountain. This recently renovated loft has a set up complete with a queen bed, corner breakfast area, full kitchen & bathroom, wifi, heating & ac, all in the heart of Rome.",
        review: ["Small apartment in the heart of the city. Very close to the main attractions, there are many cafes and shops nearby. The apartment is small, but cozy, it has everything you need. Recommend.", "Lovely little apartment with all the amenities you need, 10 minute walk to the old town!", "Don’t hesitate! Pietro is very Nice and helpful for your arrival and departure!"],
        cost: 5804,
        bookmark: false
    },
    {
        _id: "43",
        user: "Joan Slash",
        location: {country: "Italy", city: "Roma", address: "Via del Corso"},
        rate: 4.7,
        description: "Exceptional location 20 meters from the splendid Piazza Venezia with the Altare della Patria, the Imperial Forums. A stone's throw from Palazzo Montecitorio, the Pantheon and the Roman shopping streets. All the monuments of the Eternal City can be visited on foot, even if the bus stop is a few meters from the door. Fantastic for a couple looking for a magical and romantic moment and very comfortable for a family of four with a fully equipped kitchen, a comfortable walk-in closet where you can store your empty suitcases. The marble bathroom with shower and complimentary toiletries, terry towels, slippers, and on request we also provide soft terry bathrobes. Finally there is a large terrace of twenty square meters with a sofa and table with chairs for moments of relaxation or for dinner in the evening.",
        review: ["Everything very good! Clean, beautiful, comfortable! All the sights of Rome 5-10 minutes walk.", "Great apartment, central location, and friendly host! Accurate pics and description - nice professional touches with robes, towels, and bathroom amenities. Fully stocked kitchen. Patio was a plus, quiet and spacious. Building felt very safe and had an elevator, if you’re feeling lazy after walking the city all day :-). Rome is amazing, and our stay here made it even better!", "I recommend, excellent location, cozy apartment with large terrace."],
        cost: 13510,
        bookmark: false
    },
    {
        _id: "44",
        user: "Francesca Taylor",
        location: {country: "Italy", city: "Roma", address: "Salita del Grillo"},
        rate: 4.8,
        description: "The apartment is located in the HEART of the Imperial Forums, HISTORICAL and ARCHAEOLOGICAL area, two minutes’ walk from the Colosseum, Piazza Venezia, Campidoglio, Trevi Fountain, Piazza di Spagna. The apartment is located in the vault of the ancient 'Mater Boni Consilii' Chapel of 1834 with overlooking UNIQUE on the Markets of Trajan, has an INDEPENDENT, EXCLUSIVE, PRIVATE entrance, is perfectly connected by public transport, has a DELIGHTFUL PRIVATE PATIO to enjoy a good glass of wine.",
        review: ["A cosy apartment in the very heart of Rome. Francesca was a great host easy to communicate and helpful. This place is perfect for a couple exploring the Eternal City, Apart from being right in the middle of the historic center it's also very well connected to the rest of Rome by public transport. Highly recommended.", "Amaz place to stay. Super cute place with a very unique style. Convenient location. So close to the Colosseum(6min by walk). You basically can go everywhere in ancient Rome by walk, which is what I did. Francesca give me a lot of tips about the trip. Very useful. And prepared some food and water for me, which is very heartwarming. Nice and hospitality host!!", "The communication is always good, the location is great and safe. It’s an excellent central point to walk through Rome."],
        cost: 5536,
        bookmark: false
    },
    {
        _id: "45",
        user: "Giacomo Hall",
        location: {country: "Italy", city: "Palermo", address: "Piazza S. Domenico"},
        rate: 5,
        description: "The apartment is located on the second floor (with lift) of an ancient historic building (former convent of the Catalan period in Sicily). Located in the heart of the historic center of Palermo (in the famous 'La Vucciria' market) Very close to via Roma / piazza San Domenico, 5 minutes on foot from the bus stop to / from Falcone and Borsellino Airport.",
        review: ["The climate on every floor is very pleasant. The apartment is ideally located in the middle of life and yet quiet. At the balcony door there is a window open at the top, I think it's too high to get at it. If someone is afraid of mosquitoes, he / she should better take a fly plug with them. It wasn't an exaggeration, but there have always been some. The apartment is very nice. A perfect retreat. With pleasure again.", "Apartment is very functional and very well decorated: the kitchen is well equipped, the air conditioning saved us. We were staying in the middle of the Vucciria market! In the morning, coffee on the balcony with the locals talking to each other from their balconies, it was amazing!"],
        cost: 4975,
        bookmark: false
    },
    {
        _id: "46",
        user: "Giulia Davis",
        location: {country: "Italy", city: "Palermo", address: "Via Coltellieri"},
        rate: 4.5,
        description: "Located in Palermo this boutique holiday home has 2 bedrooms which can accommodate 4 people. Suitable for a family, the house has a terrace where you can spend some quality time with your loved ones.Located on a strategical place the house is just 25 m away from the restaurant where you can have the taste of delicious local cuisines. For stocking up on your supplies you can hit the grocery store 350 m away. You can participate in various water sport activities going on in the region.The air-conditioning will help you beat the heat and stay comfortable. On a sunny day, you can also bask in the sun while relaxing on the sun loungers.Palermo Airport lies 30.5 km away from this place.",
        review: ["Great apartment with a view of the Mercato Vucciri and the fantastic old town. Particularly suitable for night owls, i.e. young people without a car and no pronounced need for sleep. I had a great time.", "The house is very particular in a typical neighborhood of Palermo that should be experienced if you want to immerse yourself in the Vuccirìa!"],
        cost: 9547,
        bookmark: false
    },
    {
        _id: "47",
        user: "Corbin Noemi",
        location: {country: "Italy", city: "Palermo", address: "Via Coltellieri"},
        rate: 4.5,
        description: "The Klimt holiday home is a small two-room apartment of 40 square meters located on the fourth floor in the heart of Palermo. The house is located in the vucciria district, where there is one of the oldest markets.",
        review: ["The strong point is the location of the room. Noemi is also a great host proving to be helpful.", "Excellent location, within walking distance of the important places in Palermo. Naomi was fine, she let me check in before three thank you very much Naomi.", "Very helpful host, apartment in great location.", "The apartment is nice, but it has no private parking and it is suggested to leave the car in an unsuitable area. The house is located in the heart of the Palermo nightlife, so it is convenient for visiting the main attractions, but very noisy at night. Noemi was very kind in resolving some unexpected events."],
        cost: 4478,
        bookmark: false
    },
    {
        _id: "48",
        user: "Francesco Martin",
        location: {country: "Italy", city: "Catania", address: "Via Toledo"},
        rate: 4.8,
        description: "This property is 11 minutes’ walk from the beach. Loft di Nonna Vincenza is located in Catania. It offers free WiFi and units with a kitchen. All rooms feature a balcony, flat-screen TV, air conditioning, seating and / or dining area and a private bathroom with bidet. Nonna Vincenza's Lofts are 600 meters from Piazza Duomo, a 5-minute walk from Ursino Castle and 3 km from the nearest Catania Fontanarossa Airport.",
        review: ["The apartment looks great (he did the wood work himself), it has air conditioning, and is very clean. There‘s a beach really close to the apartment and the apartment is also a great base to get to other beaches with the car for example Fontane Bianche or Taormina. There‘s also restaurants close by which are quite cheap and you can also have a drink just a few minutes away where the castle is. We used the private parking, which was also great, because we did not have to look for a parking spot on the street. And there’s a little super market right next to the apartment.", "Incredibly friendly and caring host!Excellent location near the heart of the city.", "Spacious and clean apartment with good location.Host was very helpful throughout our stay and even provided us a ride to the airport.Would recommend to anyone."],
        cost: 4975,
        bookmark: false
    },
    {
        _id: "49",
        user: "Rafael Ramirez",
        location: {country: "Italy", city: "Catania", address: "Via degli Invalidi di Guerra"},
        rate: 4.5,
        description: "Exclusive apartments located on one of the main historical attractions of Catania, the Bellini Opera House. This luxurious house faces directly onto Piazza Vincenzo Bellini, and 3 of its 4 balconies open directly onto one of Catania's top attractions, the Bellini Opera House! The apartment is located in a prestigious 18th century building and includes a living and dining room, kitchen, 1 bedroom, bathroom and 4 open balconies.",
        review: ["The balcony and location can’t be beat.", "This apartment is amazing! Nicely renovated, high ceilings, historical building, great view from the front balconies. The only thing that you have to be aware of - the square is loud with party noise at night (live music etc. won’t stop until 1 am even during weekdays.. at least when we were there). Other than that, it’s just astonishing.", " This is a beautiful apartment in the Opera house, Plaza. The balconies overlooking the Opera house on this and the apartment its self-spacious spotlessly clean and a delight, it was a pleasure to stay over, hopefully I will go back again.", "It is a nice flat with stylished flat design at the center of Catania. The Piazza Vincenzo Bellini is a bit noisy in the evening and at night but it’s nice to watch it from the balcony. We would stay there again."],
        cost: 4892,
        bookmark: false
    },
    {
        _id: "50",
        user: "Stefania Colton",
        location: {country: "Italy", city: "Catania", address: "Via Francesco Crispi"},
        rate: 4.9,
        description: "Discover a quiet escape in this expansive apartment. The residence features soaring wood beam ceilings, minimalist design touches, industrial surfaces, contrasting colors, and an upper level bedroom.",
        review: ["We have a fantastic stay at Stefy’s place. The Apartment is clean, stylish, cozy and includes everything you need. The location is perfect! 10 minutes to the city center. Just 2 minutes to Catania Centrale and Bus Station. The owner of the Apartment is Stefy. She is the best one! Stefy helps us with everything. She is very kind and communicative. We definitely will come there again.", "It’s very hard to write when you have a lot of emotions! But I will try) the first thing is awesome house. Design is very impressive, everything is clear and conveniently! My friend and I arrived at different time and this wasn’t a problem for our mistress. Stefania was too kind to us, she told everything about Catania and places to go, she made for us the most delicious breakfast for whole our life!!! I recommend Stefania everyone who wants staying in Catania!", "The stay at the apartment was really great. It is located close to the city center and it we felt very comfortable. Especially the way Stefy was caring for us, making sure we feel good, was extraordinary. Thank you for being so kind to us!", "We enjoyed our stay in Stefy‘s apartment so much. Communication was really easy. Highly recommened:)"],
        cost: 6633,
        bookmark: false
    },
]

const fetchAll = () => new Promise((resolve) => {
    window.setTimeout(function () {
        resolve(lodgingObjects);
    }, 1000)
});

export default {
    fetchAll
};
