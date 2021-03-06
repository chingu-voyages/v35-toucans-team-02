//Here is the internal data we are accessing. I was planning to remove some of the key/value categories we aren't using to improve performance time. Unfortunately this would have to be done manually. Additionally, if we wanted to add "streaming info" as a category to filter by, that could be done, but would also have to be done manually.

export const MOVIES = [{
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane, David S. Goyer, Christopher Nolan",
    "Actors": "Christian Bale, Michael Caine, Ken Watanabe",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
    "Language": "English, Mandarin",
    "Country": "United Kingdom, United States",
    "Awards": "Nominated for 1 Oscar. 13 wins & 79 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.2/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "84%"
    },
    {
    "Source": "Metacritic",
    "Value": "70/100"
    }
    ],
    "Metascore": "70",
    "imdbRating": "8.2",
    "imdbVotes": "1,362,365",
    "imdbID": "tt0372784",
    "Type": "movie",
    "DVD": "18 Oct 2005",
    "BoxOffice": "$206,852,432",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "Rated": "PG-13",
    "Released": "25 Mar 2016",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Zack Snyder",
    "Writer": "Chris Terrio, David S. Goyer, Bob Kane",
    "Actors": "Ben Affleck, Henry Cavill, Amy Adams",
    "Plot": "Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.",
    "Language": "English",
    "Country": "United States",
    "Awards": "14 wins & 33 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "6.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "29%"
    },
    {
    "Source": "Metacritic",
    "Value": "44/100"
    }
    ],
    "Metascore": "44",
    "imdbRating": "6.4",
    "imdbVotes": "665,992",
    "imdbID": "tt2975590",
    "Type": "movie",
    "DVD": "19 Jul 2016",
    "BoxOffice": "$330,360,194",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Batman",
    "Year": "1989",
    "Rated": "PG-13",
    "Released": "23 Jun 1989",
    "Runtime": "126 min",
    "Genre": "Action, Adventure",
    "Director": "Tim Burton",
    "Writer": "Bob Kane, Sam Hamm, Warren Skaaren",
    "Actors": "Michael Keaton, Jack Nicholson, Kim Basinger",
    "Plot": "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
    "Language": "English, French, Spanish",
    "Country": "United States, United Kingdom",
    "Awards": "Won 1 Oscar. 9 wins & 26 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "7.5/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "71%"
    },
    {
    "Source": "Metacritic",
    "Value": "69/100"
    }
    ],
    "Metascore": "69",
    "imdbRating": "7.5",
    "imdbVotes": "352,984",
    "imdbID": "tt0096895",
    "Type": "movie",
    "DVD": "22 Aug 1997",
    "BoxOffice": "$251,348,343",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Batman Returns",
    "Year": "1992",
    "Rated": "PG-13",
    "Released": "19 Jun 1992",
    "Runtime": "126 min",
    "Genre": "Action, Crime, Fantasy",
    "Director": "Tim Burton",
    "Writer": "Bob Kane, Daniel Waters, Sam Hamm",
    "Actors": "Michael Keaton, Danny DeVito, Michelle Pfeiffer",
    "Plot": "While Batman deals with a deformed man calling himself the Penguin wreaking havoc across Gotham with the help of a cruel businessman, a female employee of the latter becomes the Catwoman with her own vendetta.",
    "Language": "English",
    "Country": "United States, United Kingdom",
    "Awards": "Nominated for 2 Oscars. 2 wins & 29 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "7.0/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "80%"
    },
    {
    "Source": "Metacritic",
    "Value": "68/100"
    }
    ],
    "Metascore": "68",
    "imdbRating": "7.0",
    "imdbVotes": "286,127",
    "imdbID": "tt0103776",
    "Type": "movie",
    "DVD": "22 Aug 1997",
    "BoxOffice": "$162,902,340",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Batman Forever",
    "Year": "1995",
    "Rated": "PG-13",
    "Released": "16 Jun 1995",
    "Runtime": "121 min",
    "Genre": "Action, Adventure",
    "Director": "Joel Schumacher",
    "Writer": "Bob Kane, Lee Batchler, Janet Scott Batchler",
    "Actors": "Val Kilmer, Tommy Lee Jones, Jim Carrey",
    "Plot": "Batman must battle former district attorney Harvey Dent, who is now Two-Face and Edward Nygma, The Riddler with help from an amorous psychologist and a young circus acrobat who becomes his sidekick, Robin.",
    "Language": "English",
    "Country": "United States, United Kingdom",
    "Awards": "Nominated for 3 Oscars. 10 wins & 26 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "5.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "38%"
    },
    {
    "Source": "Metacritic",
    "Value": "51/100"
    }
    ],
    "Metascore": "51",
    "imdbRating": "5.4",
    "imdbVotes": "241,996",
    "imdbID": "tt0112462",
    "Type": "movie",
    "DVD": "22 Aug 1997",
    "BoxOffice": "$184,069,126",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Batman & Robin",
    "Year": "1997",
    "Rated": "PG-13",
    "Released": "20 Jun 1997",
    "Runtime": "125 min",
    "Genre": "Action, Sci-Fi",
    "Director": "Joel Schumacher",
    "Writer": "Bob Kane, Akiva Goldsman",
    "Actors": "Arnold Schwarzenegger, George Clooney, Chris O'Donnell",
    "Plot": "Batman and Robin try to keep their relationship together even as they must stop Mr. Freeze and Poison Ivy from freezing Gotham City.",
    "Language": "English",
    "Country": "United States, United Kingdom",
    "Awards": "10 wins & 22 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "3.8/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "12%"
    },
    {
    "Source": "Metacritic",
    "Value": "28/100"
    }
    ],
    "Metascore": "28",
    "imdbRating": "3.8",
    "imdbVotes": "241,650",
    "imdbID": "tt0118688",
    "Type": "movie",
    "DVD": "21 Oct 1997",
    "BoxOffice": "$107,353,792",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "The Avengers",
    "Year": "2012",
    "Rated": "PG-13",
    "Released": "04 May 2012",
    "Runtime": "143 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Joss Whedon",
    "Writer": "Joss Whedon, Zak Penn",
    "Actors": "Robert Downey Jr., Chris Evans, Scarlett Johansson",
    "Plot": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    "Language": "English, Russian, Hindi",
    "Country": "United States",
    "Awards": "Nominated for 1 Oscar. 38 wins & 80 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.0/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "91%"
    },
    {
    "Source": "Metacritic",
    "Value": "69/100"
    }
    ],
    "Metascore": "69",
    "imdbRating": "8.0",
    "imdbVotes": "1,311,758",
    "imdbID": "tt0848228",
    "Type": "movie",
    "DVD": "25 Sep 2012",
    "BoxOffice": "$623,357,910",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Avengers: Endgame",
    "Year": "2019",
    "Rated": "PG-13",
    "Released": "26 Apr 2019",
    "Runtime": "181 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "Anthony Russo, Joe Russo",
    "Writer": "Christopher Markus, Stephen McFeely, Stan Lee",
    "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo",
    "Plot": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    "Language": "English, Japanese, Xhosa, German",
    "Country": "United States",
    "Awards": "Nominated for 1 Oscar. 70 wins & 123 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "94%"
    },
    {
    "Source": "Metacritic",
    "Value": "78/100"
    }
    ],
    "Metascore": "78",
    "imdbRating": "8.4",
    "imdbVotes": "948,888",
    "imdbID": "tt4154796",
    "Type": "movie",
    "DVD": "30 Jul 2019",
    "BoxOffice": "$858,373,000",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Avengers: Infinity War",
    "Year": "2018",
    "Rated": "PG-13",
    "Released": "27 Apr 2018",
    "Runtime": "149 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Anthony Russo, Joe Russo",
    "Writer": "Christopher Markus, Stephen McFeely, Stan Lee",
    "Actors": "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo",
    "Plot": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Nominated for 1 Oscar. 46 wins & 77 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "85%"
    },
    {
    "Source": "Metacritic",
    "Value": "68/100"
    }
    ],
    "Metascore": "68",
    "imdbRating": "8.4",
    "imdbVotes": "931,550",
    "imdbID": "tt4154756",
    "Type": "movie",
    "DVD": "14 Aug 2018",
    "BoxOffice": "$678,815,482",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Avengers: Age of Ultron",
    "Year": "2015",
    "Rated": "PG-13",
    "Released": "01 May 2015",
    "Runtime": "141 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Joss Whedon",
    "Writer": "Joss Whedon, Stan Lee, Jack Kirby",
    "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo",
    "Plot": "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
    "Language": "English, Korean",
    "Country": "United States",
    "Awards": "8 wins & 49 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "7.3/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "76%"
    },
    {
    "Source": "Metacritic",
    "Value": "66/100"
    }
    ],
    "Metascore": "66",
    "imdbRating": "7.3",
    "imdbVotes": "792,951",
    "imdbID": "tt2395427",
    "Type": "movie",
    "DVD": "02 Oct 2015",
    "BoxOffice": "$459,005,868",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "The Avengers",
    "Year": "1998",
    "Rated": "PG-13",
    "Released": "14 Aug 1998",
    "Runtime": "89 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Jeremiah S. Chechik",
    "Writer": "Sydney Newman, Don MacPherson",
    "Actors": "Ralph Fiennes, Uma Thurman, Sean Connery",
    "Plot": "Two British Agents team up to stop Sir August de Wynter from destroying the world with a weather-changing machine.",
    "Language": "English",
    "Country": "United States",
    "Awards": "4 wins & 17 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "3.8/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "5%"
    },
    {
    "Source": "Metacritic",
    "Value": "12/100"
    }
    ],
    "Metascore": "12",
    "imdbRating": "3.8",
    "imdbVotes": "43,195",
    "imdbID": "tt0118661",
    "Type": "movie",
    "DVD": "09 Nov 2010",
    "BoxOffice": "$23,384,939",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Indiana Jones and the Last Crusade",
    "Year": "1989",
    "Rated": "PG-13",
    "Released": "24 May 1989",
    "Runtime": "127 min",
    "Genre": "Action, Adventure",
    "Director": "Steven Spielberg",
    "Writer": "Jeffrey Boam, George Lucas, Menno Meyjes",
    "Actors": "Harrison Ford, Sean Connery, Alison Doody",
    "Plot": "In 1938, after his father Professor Henry Jones, Sr. goes missing while pursuing the Holy Grail, Professor Henry \"Indiana\" Jones, Jr. finds himself up against Adolf Hitler's Nazis again to stop them from obtaining its powers.",
    "Language": "English, German, Greek, Arabic",
    "Country": "United States",
    "Awards": "Won 1 Oscar. 8 wins & 22 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjNkMzc2N2QtNjVlNS00ZTk5LTg0MTgtODY2MDAwNTMwZjBjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.2/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "88%"
    },
    {
    "Source": "Metacritic",
    "Value": "65/100"
    }
    ],
    "Metascore": "65",
    "imdbRating": "8.2",
    "imdbVotes": "719,331",
    "imdbID": "tt0097576",
    "Type": "movie",
    "DVD": "13 May 2008",
    "BoxOffice": "$197,171,806",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Indiana Jones and the Temple of Doom",
    "Year": "1984",
    "Rated": "PG",
    "Released": "23 May 1984",
    "Runtime": "118 min",
    "Genre": "Action, Adventure",
    "Director": "Steven Spielberg",
    "Writer": "Willard Huyck, Gloria Katz, George Lucas",
    "Actors": "Harrison Ford, Kate Capshaw, Ke Huy Quan",
    "Plot": "In 1935, Indiana Jones arrives in India, still part of the British Empire, and is asked to find a mystical stone. He then stumbles upon a secret cult committing enslavement and human sacrifices in the catacombs of an ancient palace.",
    "Language": "English, Sinhala, Hindi",
    "Country": "United States",
    "Awards": "Won 1 Oscar. 11 wins & 21 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGI1NTk2ZWMtMmI0YS00Yzg0LTljMzgtZTg4YjkyY2E5Zjc0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "7.5/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "84%"
    },
    {
    "Source": "Metacritic",
    "Value": "57/100"
    }
    ],
    "Metascore": "57",
    "imdbRating": "7.5",
    "imdbVotes": "466,424",
    "imdbID": "tt0087469",
    "Type": "movie",
    "DVD": "13 May 2008",
    "BoxOffice": "$179,870,271",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Indiana Jones and the Kingdom of the Crystal Skull",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "22 May 2008",
    "Runtime": "122 min",
    "Genre": "Action, Adventure",
    "Director": "Steven Spielberg",
    "Writer": "David Koepp, George Lucas, Jeff Nathanson",
    "Actors": "Harrison Ford, Cate Blanchett, Shia LaBeouf",
    "Plot": "In 1957, archaeologist and adventurer Dr. Henry \"Indiana\" Jones, Jr. is called back into action and becomes entangled in a Soviet plot to uncover the secret behind mysterious artifacts known as the Crystal Skulls.",
    "Language": "English, German, Russian",
    "Country": "United States",
    "Awards": "10 wins & 42 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDIzNzM5MDUtZmI5MC00NGQ5LWFlNzEtYzE3ODIxNDI3ZmNhXkEyXkFqcGdeQXVyNjQ4ODE4MzQ@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "6.1/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "78%"
    },
    {
    "Source": "Metacritic",
    "Value": "65/100"
    }
    ],
    "Metascore": "65",
    "imdbRating": "6.1",
    "imdbVotes": "438,979",
    "imdbID": "tt0367882",
    "Type": "movie",
    "DVD": "14 Oct 2008",
    "BoxOffice": "$317,101,119",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Raiders of the Lost Ark",
    "Year": "1981",
    "Rated": "PG",
    "Released": "12 Jun 1981",
    "Runtime": "115 min",
    "Genre": "Action, Adventure",
    "Director": "Steven Spielberg",
    "Writer": "Lawrence Kasdan, George Lucas, Philip Kaufman",
    "Actors": "Harrison Ford, Karen Allen, Paul Freeman",
    "Plot": "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers.",
    "Language": "English, German, Hebrew, Spanish, Arabic, Nepali",
    "Country": "United States",
    "Awards": "Won 5 Oscars. 37 wins & 24 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "95%"
    },
    {
    "Source": "Metacritic",
    "Value": "85/100"
    }
    ],
    "Metascore": "85",
    "imdbRating": "8.4",
    "imdbVotes": "919,650",
    "imdbID": "tt0082971",
    "Type": "movie",
    "DVD": "13 May 2008",
    "BoxOffice": "$248,159,971",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Boogie Nights",
    "Year": "1997",
    "Rated": "R",
    "Released": "31 Oct 1997",
    "Runtime": "155 min",
    "Genre": "Drama",
    "Director": "Paul Thomas Anderson",
    "Writer": "Paul Thomas Anderson",
    "Actors": "Mark Wahlberg, Julianne Moore, Burt Reynolds",
    "Plot": "Back when sex was safe, pleasure was a business and business was booming, an idealistic porn producer aspires to elevate his craft to an art when he discovers a hot young talent.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Nominated for 3 Oscars. 36 wins & 64 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BY2E2YWYxY2QtZmJmZi00MjJlLWFiYWItZTk5Y2IyMWQ1ZThhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "7.9/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "93%"
    },
    {
    "Source": "Metacritic",
    "Value": "85/100"
    }
    ],
    "Metascore": "85",
    "imdbRating": "7.9",
    "imdbVotes": "250,754",
    "imdbID": "tt0118749",
    "Type": "movie",
    "DVD": "08 May 2007",
    "BoxOffice": "$26,400,640",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "The Master",
    "Year": "2012",
    "Rated": "R",
    "Released": "21 Sep 2012",
    "Runtime": "138 min",
    "Genre": "Drama",
    "Director": "Paul Thomas Anderson",
    "Writer": "Paul Thomas Anderson",
    "Actors": "Philip Seymour Hoffman, Joaquin Phoenix, Amy Adams",
    "Plot": "A Naval veteran arrives home from war unsettled and uncertain of his future - until he is tantalized by the Cause and its charismatic leader.",
    "Language": "English, Filipino",
    "Country": "United States",
    "Awards": "Nominated for 3 Oscars. 75 wins & 187 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NjQ5MzMwMF5BMl5BanBnXkFtZTcwMjczNTAzOA@@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "7.2/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "84%"
    },
    {
    "Source": "Metacritic",
    "Value": "86/100"
    }
    ],
    "Metascore": "86",
    "imdbRating": "7.2",
    "imdbVotes": "163,939",
    "imdbID": "tt1560747",
    "Type": "movie",
    "DVD": "26 Feb 2013",
    "BoxOffice": "$16,377,274",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Magnolia",
    "Year": "1999",
    "Rated": "R",
    "Released": "07 Jan 2000",
    "Runtime": "188 min",
    "Genre": "Drama",
    "Director": "Paul Thomas Anderson",
    "Writer": "Paul Thomas Anderson",
    "Actors": "Tom Cruise, Jason Robards, Julianne Moore",
    "Plot": "An epic mosaic of interrelated characters in search of love, forgiveness, and meaning in the San Fernando Valley.",
    "Language": "English, German, French",
    "Country": "United States",
    "Awards": "Nominated for 3 Oscars. 28 wins & 59 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjk3YThkNDktNjZjMS00MTBiLTllNTAtYzkzMTU0N2QwYjJjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.0/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "83%"
    },
    {
    "Source": "Metacritic",
    "Value": "77/100"
    }
    ],
    "Metascore": "77",
    "imdbRating": "8.0",
    "imdbVotes": "300,127",
    "imdbID": "tt0175880",
    "Type": "movie",
    "DVD": "08 May 2007",
    "BoxOffice": "$22,455,976",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Punch-Drunk Love",
    "Year": "2002",
    "Rated": "R",
    "Released": "01 Nov 2002",
    "Runtime": "95 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Paul Thomas Anderson",
    "Writer": "Paul Thomas Anderson",
    "Actors": "Adam Sandler, Emily Watson, Philip Seymour Hoffman",
    "Plot": "A frustrated Barry Egan calls a phone-sex line to curb his loneliness. Little does he know that he will land in huge trouble and will also jeopardise his relationship with Lena.",
    "Language": "English",
    "Country": "United States",
    "Awards": "14 wins & 37 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmE1OTY4NjgtYjcwNC00NWE4LWJiNGMtZmVhYTdlMWE1YzIxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "7.3/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "79%"
    },
    {
    "Source": "Metacritic",
    "Value": "78/100"
    }
    ],
    "Metascore": "78",
    "imdbRating": "7.3",
    "imdbVotes": "155,804",
    "imdbID": "tt0272338",
    "Type": "movie",
    "DVD": "24 Jun 2003",
    "BoxOffice": "$17,844,216",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Sucker Punch",
    "Year": "2011",
    "Rated": "PG-13",
    "Released": "25 Mar 2011",
    "Runtime": "110 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Zack Snyder",
    "Writer": "Zack Snyder, Steve Shibuya",
    "Actors": "Emily Browning, Vanessa Hudgens, Abbie Cornish",
    "Plot": "A young girl institutionalized by her abusive stepfather retreats to an alternative reality as a coping strategy and envisions a plan to help her escape.",
    "Language": "English, German",
    "Country": "United States, Canada",
    "Awards": "1 win & 11 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDEwNGRlNjQtZjI4OC00ZmMxLWEyYmQtNGI1NDk4YmUyYTNkXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "6.0/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "22%"
    },
    {
    "Source": "Metacritic",
    "Value": "33/100"
    }
    ],
    "Metascore": "33",
    "imdbRating": "6.0",
    "imdbVotes": "237,590",
    "imdbID": "tt0978764",
    "Type": "movie",
    "DVD": "28 Jun 2011",
    "BoxOffice": "$36,392,502",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "The Royal Tenenbaums",
    "Year": "2001",
    "Rated": "R",
    "Released": "04 Jan 2002",
    "Runtime": "110 min",
    "Genre": "Comedy, Drama",
    "Director": "Wes Anderson",
    "Writer": "Wes Anderson, Owen Wilson",
    "Actors": "Gene Hackman, Gwyneth Paltrow, Anjelica Huston",
    "Plot": "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons.",
    "Language": "English, Italian",
    "Country": "United States",
    "Awards": "Nominated for 1 Oscar. 11 wins & 46 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmUzODQ5MGItZTZlNy00MDBhLWIxMmItMjg4Y2QyNDFlMWQ2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "7.6/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "81%"
    },
    {
    "Source": "Metacritic",
    "Value": "76/100"
    }
    ],
    "Metascore": "76",
    "imdbRating": "7.6",
    "imdbVotes": "277,517",
    "imdbID": "tt0265666",
    "Type": "movie",
    "DVD": "07 Sep 2004",
    "BoxOffice": "$52,364,010",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Rushmore",
    "Year": "1998",
    "Rated": "R",
    "Released": "19 Feb 1999",
    "Runtime": "93 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Wes Anderson",
    "Writer": "Wes Anderson, Owen Wilson",
    "Actors": "Jason Schwartzman, Bill Murray, Olivia Williams",
    "Plot": "A teenager at Rushmore Academy falls for a much older teacher and befriends a middle-aged industrialist. Later, he finds out that his love interest and his friend are having an affair, which prompts him to begin a vendetta.",
    "Language": "English, Spanish, Latin, French",
    "Country": "United States",
    "Awards": "16 wins & 16 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE2OTc3OTk2M15BMl5BanBnXkFtZTgwMjg2NjIyMDE@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "7.7/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "90%"
    },
    {
    "Source": "Metacritic",
    "Value": "86/100"
    }
    ],
    "Metascore": "86",
    "imdbRating": "7.7",
    "imdbVotes": "176,311",
    "imdbID": "tt0128445",
    "Type": "movie",
    "DVD": "18 Jan 2000",
    "BoxOffice": "$17,105,219",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "The Grand Budapest Hotel",
    "Year": "2014",
    "Rated": "R",
    "Released": "28 Mar 2014",
    "Runtime": "99 min",
    "Genre": "Adventure, Comedy, Crime",
    "Director": "Wes Anderson",
    "Writer": "Stefan Zweig, Wes Anderson, Hugo Guinness",
    "Actors": "Ralph Fiennes, F. Murray Abraham, Mathieu Amalric",
    "Plot": "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    "Language": "English, French, German",
    "Country": "United States, Germany",
    "Awards": "Won 4 Oscars. 134 wins & 226 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.1/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "92%"
    },
    {
    "Source": "Metacritic",
    "Value": "88/100"
    }
    ],
    "Metascore": "88",
    "imdbRating": "8.1",
    "imdbVotes": "749,583",
    "imdbID": "tt2278388",
    "Type": "movie",
    "DVD": "17 Jun 2014",
    "BoxOffice": "$59,301,324",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Jurassic Park",
    "Year": "1993",
    "Rated": "PG-13",
    "Released": "11 Jun 1993",
    "Runtime": "127 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Steven Spielberg",
    "Writer": "Michael Crichton, David Koepp",
    "Actors": "Sam Neill, Laura Dern, Jeff Goldblum",
    "Plot": "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
    "Language": "English, Spanish",
    "Country": "United States",
    "Awards": "Won 3 Oscars. 44 wins & 27 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.1/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "92%"
    },
    {
    "Source": "Metacritic",
    "Value": "68/100"
    }
    ],
    "Metascore": "68",
    "imdbRating": "8.1",
    "imdbVotes": "912,883",
    "imdbID": "tt0107290",
    "Type": "movie",
    "DVD": "28 Oct 2003",
    "BoxOffice": "$404,214,720",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Jurassic World",
    "Year": "2015",
    "Rated": "PG-13",
    "Released": "12 Jun 2015",
    "Runtime": "124 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Colin Trevorrow",
    "Writer": "Rick Jaffa, Amanda Silver, Colin Trevorrow",
    "Actors": "Chris Pratt, Bryce Dallas Howard, Ty Simpkins",
    "Plot": "A new theme park, built on the original site of Jurassic Park, creates a genetically modified hybrid dinosaur, the Indominus Rex, which escapes containment and goes on a killing spree.",
    "Language": "English",
    "Country": "United States",
    "Awards": "15 wins & 58 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzQ3OTY4NjAtNzM5OS00N2ZhLWJlOWUtYzYwZjNmOWRiMzcyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "7.0/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "71%"
    },
    {
    "Source": "Metacritic",
    "Value": "59/100"
    }
    ],
    "Metascore": "59",
    "imdbRating": "7.0",
    "imdbVotes": "602,811",
    "imdbID": "tt0369610",
    "Type": "movie",
    "DVD": "20 Oct 2015",
    "BoxOffice": "$652,385,625",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "The Lost World: Jurassic Park",
    "Year": "1997",
    "Rated": "PG-13",
    "Released": "23 May 1997",
    "Runtime": "129 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Steven Spielberg",
    "Writer": "Michael Crichton, David Koepp",
    "Actors": "Jeff Goldblum, Julianne Moore, Pete Postlethwaite",
    "Plot": "A research team is sent to the Jurassic Park Site B island to study the dinosaurs there, while an InGen team approaches with another agenda.",
    "Language": "English, Spanish",
    "Country": "United States",
    "Awards": "Nominated for 1 Oscar. 4 wins & 28 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDFlMmM4Y2QtNDg1ZS00MWVlLTlmODgtZDdhYjY5YjdhN2M0XkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "6.6/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "53%"
    },
    {
    "Source": "Metacritic",
    "Value": "59/100"
    }
    ],
    "Metascore": "59",
    "imdbRating": "6.6",
    "imdbVotes": "394,914",
    "imdbID": "tt0119567",
    "Type": "movie",
    "DVD": "03 Nov 2009",
    "BoxOffice": "$229,086,679",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Roma",
    "Year": "2018",
    "Rated": "R",
    "Released": "21 Nov 2018",
    "Runtime": "135 min",
    "Genre": "Drama",
    "Director": "Alfonso Cuar??n",
    "Writer": "Alfonso Cuar??n",
    "Actors": "Yalitza Aparicio, Marina de Tavira, Diego Cortina Autrey",
    "Plot": "A year in the life of a middle-class family's maid in Mexico City in the early 1970s.",
    "Language": "Spanish, Mixtec, English, Japanese, German, French, Norwegian",
    "Country": "Mexico",
    "Awards": "Won 3 Oscars. 250 wins & 218 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTU0OTc3ODk4Ml5BMl5BanBnXkFtZTgwMzM4NzI5NjM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "7.7/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "96%"
    },
    {
    "Source": "Metacritic",
    "Value": "96/100"
    }
    ],
    "Metascore": "96",
    "imdbRating": "7.7",
    "imdbVotes": "148,988",
    "imdbID": "tt6155172",
    "Type": "movie",
    "DVD": "15 Dec 2018",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Cronos",
    "Year": "1993",
    "Rated": "R",
    "Released": "01 May 1994",
    "Runtime": "94 min",
    "Genre": "Fantasy, Horror",
    "Director": "Guillermo del Toro",
    "Writer": "Guillermo del Toro",
    "Actors": "Federico Luppi, Ron Perlman, Claudio Brook",
    "Plot": "A mysterious device designed to provide its owner with eternal life resurfaces after four hundred years, leaving a trail of destruction in its path.",
    "Language": "Spanish, English",
    "Country": "Mexico",
    "Awards": "23 wins & 13 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzBjOWUxMTItYWY1OC00Zjg5LTlhYWMtMjI3YjUyMjVkMWFmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "6.7/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "91%"
    },
    {
    "Source": "Metacritic",
    "Value": "70/100"
    }
    ],
    "Metascore": "70",
    "imdbRating": "6.7",
    "imdbVotes": "28,646",
    "imdbID": "tt0104029",
    "Type": "movie",
    "DVD": "11 Mar 2008",
    "BoxOffice": "$621,392",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Stalker",
    "Year": "1979",
    "Rated": "Not Rated",
    "Released": "17 Apr 1980",
    "Runtime": "162 min",
    "Genre": "Drama, Sci-Fi",
    "Director": "Andrei Tarkovsky",
    "Writer": "Arkadiy Strugatskiy, Boris Strugatskiy, Andrei Tarkovsky",
    "Actors": "Alisa Freyndlikh, Aleksandr Kaydanovskiy, Anatoliy Solonitsyn",
    "Plot": "A guide leads two men through an area known as the Zone to find a room that grants wishes.",
    "Language": "Russian",
    "Country": "Soviet Union",
    "Awards": "2 wins & 2 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDgwODNmMGItMDcwYi00OWZjLTgyZjAtMGYwMmI4N2Q0NmJmXkEyXkFqcGdeQXVyNzY1MTU0Njk@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.1/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "100%"
    }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.1",
    "imdbVotes": "126,808",
    "imdbID": "tt0079944",
    "Type": "movie",
    "DVD": "19 Jun 2001",
    "BoxOffice": "$292,049",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Breaking the Waves",
    "Year": "1996",
    "Rated": "R",
    "Released": "13 Nov 1996",
    "Runtime": "159 min",
    "Genre": "Drama",
    "Director": "Lars von Trier",
    "Writer": "Lars von Trier, Peter Asmussen, David Pirie",
    "Actors": "Emily Watson, Stellan Skarsg??rd, Katrin Cartlidge",
    "Plot": "Oilman Jan is paralyzed in an accident. His wife, who prayed for his return, feels guilty; even more, when Jan urges her to have sex with another.",
    "Language": "English",
    "Country": "Denmark, Sweden, France, Netherlands, Norway, Iceland, Spain, United Kingdom",
    "Awards": "Nominated for 1 Oscar. 44 wins & 28 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDYwZTU2MzktNWYxMS00NTYzLTgzOWEtMTRiYjc5NGY2Nzg1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "7.8/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "85%"
    },
    {
    "Source": "Metacritic",
    "Value": "76/100"
    }
    ],
    "Metascore": "76",
    "imdbRating": "7.8",
    "imdbVotes": "64,796",
    "imdbID": "tt0115751",
    "Type": "movie",
    "DVD": "15 Apr 2014",
    "BoxOffice": "$3,803,298",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Europa",
    "Year": "1991",
    "Rated": "R",
    "Released": "27 Jun 1991",
    "Runtime": "112 min",
    "Genre": "Drama, Thriller",
    "Director": "Lars von Trier",
    "Writer": "Lars von Trier, Niels V??rsel",
    "Actors": "Barbara Sukowa, Jean-Marc Barr, Udo Kier",
    "Plot": "Just after W.W.II, an American takes a railway job in Germany, but finds his position politically sensitive with various people trying to use him.",
    "Language": "English, German",
    "Country": "Denmark, Sweden, France, Germany, Switzerland, Poland",
    "Awards": "18 wins & 9 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjA3ODAyNjctOGMwOS00YmJhLTljOTAtNzMyZGMzMTM5NGM0XkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "7.6/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "80%"
    },
    {
    "Source": "Metacritic",
    "Value": "69/100"
    }
    ],
    "Metascore": "69",
    "imdbRating": "7.6",
    "imdbVotes": "20,716",
    "imdbID": "tt0101829",
    "Type": "movie",
    "DVD": "09 Dec 2008",
    "BoxOffice": "$1,007,001",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "?? bout de souffle",
    "Year": "1960",
    "Rated": "Not Rated",
    "Released": "07 Feb 1961",
    "Runtime": "90 min",
    "Genre": "Crime, Drama",
    "Director": "Jean-Luc Godard",
    "Writer": "Fran??ois Truffaut, Jean-Luc Godard, Claude Chabrol",
    "Actors": "Jean-Paul Belmondo, Jean Seberg, Daniel Boulanger",
    "Plot": "A small-time thief steals a car and impulsively murders a motorcycle policeman. Wanted by the authorities, he reunites with a hip American journalism student and attempts to persuade her to run away with him to Italy.",
    "Language": "French, English",
    "Country": "France",
    "Awards": "4 wins & 4 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BM2QzMGVkM2QtM2VjMS00NzcwLTg2MGMtMzAxZThlODM1MzZlXkEyXkFqcGdeQXVyNDE0OTU3NDY@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "7.8/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "97%"
    }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.8",
    "imdbVotes": "77,429",
    "imdbID": "tt0053472",
    "Type": "movie",
    "DVD": "07 Jan 2003",
    "BoxOffice": "$392,443",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Le m??pris",
    "Year": "1963",
    "Rated": "Not Rated",
    "Released": "18 Dec 1964",
    "Runtime": "102 min",
    "Genre": "Drama, Romance",
    "Director": "Jean-Luc Godard",
    "Writer": "Alberto Moravia, Jean-Luc Godard",
    "Actors": "Brigitte Bardot, Jack Palance, Michel Piccoli",
    "Plot": "Screenwriter Paul Javal's marriage to his wife Camille disintegrates during movie production as she spends time with the producer. Layered conflicts between art and business ensue.",
    "Language": "French, English, German, Italian",
    "Country": "France, Italy",
    "Awards": "1 win & 1 nomination",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGNhNjYxYmUtMGI5Zi00N2MxLTkzYTctYjEyNWQ1YTk4MTc0XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "7.6/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "91%"
    }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.6",
    "imdbVotes": "30,589",
    "imdbID": "tt0057345",
    "Type": "movie",
    "DVD": "16 Feb 2010",
    "BoxOffice": "$903,986",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "8??",
    "Year": "1963",
    "Rated": "Not Rated",
    "Released": "24 Jun 1963",
    "Runtime": "138 min",
    "Genre": "Drama",
    "Director": "Federico Fellini",
    "Writer": "Federico Fellini, Ennio Flaiano, Tullio Pinelli",
    "Actors": "Marcello Mastroianni, Anouk Aim??e, Claudia Cardinale",
    "Plot": "A harried movie director retreats into his memories and fantasies.",
    "Language": "Italian, French, English, German",
    "Country": "Italy, France",
    "Awards": "Won 2 Oscars. 19 wins & 9 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ4MTA0NjEzMF5BMl5BanBnXkFtZTgwMDg4NDYxMzE@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.0/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "98%"
    },
    {
    "Source": "Metacritic",
    "Value": "91/100"
    }
    ],
    "Metascore": "91",
    "imdbRating": "8.0",
    "imdbVotes": "113,716",
    "imdbID": "tt0056801",
    "Type": "movie",
    "DVD": "04 Dec 2001",
    "BoxOffice": "$98,760",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Ladri di biciclette",
    "Year": "1948",
    "Rated": "Not Rated",
    "Released": "13 Dec 1949",
    "Runtime": "89 min",
    "Genre": "Drama",
    "Director": "Vittorio De Sica",
    "Writer": "Cesare Zavattini, Luigi Bartolini, Oreste Biancoli",
    "Actors": "Lamberto Maggiorani, Enzo Staiola, Lianella Carell",
    "Plot": "In post-war Italy, a working-class man's bicycle is stolen, endangering his efforts to find work. He and his son set out to find it.",
    "Language": "Italian, English, German",
    "Country": "Italy",
    "Awards": "Won 1 Oscar. 20 wins & 3 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNmI1ODdjODctMDlmMC00ZWViLWI5MzYtYzRhNDdjYmM3MzFjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.3/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "98%"
    }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.3",
    "imdbVotes": "156,346",
    "imdbID": "tt0040522",
    "Type": "movie",
    "DVD": "12 Aug 2003",
    "BoxOffice": "$371,111",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Solyaris",
    "Year": "1972",
    "Rated": "PG",
    "Released": "26 Sep 1972",
    "Runtime": "167 min",
    "Genre": "Drama, Mystery, Sci-Fi",
    "Director": "Andrei Tarkovsky",
    "Writer": "Stanislaw Lem, Fridrikh Gorenshteyn, Andrei Tarkovsky",
    "Actors": "Natalya Bondarchuk, Donatas Banionis, J??ri J??rvet",
    "Plot": "A psychologist is sent to a station orbiting a distant planet in order to discover what has caused the crew to go insane.",
    "Language": "Russian, German",
    "Country": "Soviet Union",
    "Awards": "5 wins & 4 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZmY4Yjc0OWQtZDRhMy00ODc2LWI2NGYtMWFlODYyN2VlNDQyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.1/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "92%"
    },
    {
    "Source": "Metacritic",
    "Value": "90/100"
    }
    ],
    "Metascore": "90",
    "imdbRating": "8.1",
    "imdbVotes": "86,984",
    "imdbID": "tt0069293",
    "Type": "movie",
    "DVD": "09 Apr 2003",
    "BoxOffice": "$22,168",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Bronenosets Potemkin",
    "Year": "1925",
    "Rated": "Not Rated",
    "Released": "24 Dec 1925",
    "Runtime": "66 min",
    "Genre": "Drama, History, Thriller",
    "Director": "Sergei M. Eisenstein",
    "Writer": "Nina Agadzhanova, Sergei M. Eisenstein, Grigoriy Aleksandrov",
    "Actors": "Aleksandr Antonov, Vladimir Barskiy, Grigoriy Aleksandrov",
    "Plot": "In the midst of the Russian Revolution of 1905, the crew of the battleship Potemkin mutiny against the brutal, tyrannical regime of the vessel's officers. The resulting street demonstration in Odessa brings on a police massacre.",
    "Language": "None, Russian",
    "Country": "Soviet Union",
    "Awards": "1 win",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTEyMTQzMjQ0MTJeQTJeQWpwZ15BbWU4MDcyMjg4OTEx._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.0/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "100%"
    },
    {
    "Source": "Metacritic",
    "Value": "97/100"
    }
    ],
    "Metascore": "97",
    "imdbRating": "8.0",
    "imdbVotes": "55,574",
    "imdbID": "tt0015648",
    "Type": "movie",
    "DVD": "04 Nov 2003",
    "BoxOffice": "$51,198",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Ringu",
    "Year": "1998",
    "Rated": "Not Rated",
    "Released": "31 Jan 1998",
    "Runtime": "96 min",
    "Genre": "Horror, Mystery",
    "Director": "Hideo Nakata",
    "Writer": "Hiroshi Takahashi, K??ji Suzuki",
    "Actors": "Nanako Matsushima, Miki Nakatani, Y??ko Takeuchi",
    "Plot": "A reporter and her ex-husband investigate a cursed video tape that is rumored to kill the viewer seven days after watching it.",
    "Language": "Japanese",
    "Country": "Japan",
    "Awards": "6 wins & 1 nomination",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjU2OTQwM2QtZjAwMC00MTlhLWFlNjQtYjkxYzQ3MGQwMjNmXkEyXkFqcGdeQXVyNjYyMTYxMzk@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "7.2/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "97%"
    }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.2",
    "imdbVotes": "67,003",
    "imdbID": "tt0178868",
    "Type": "movie",
    "DVD": "08 Mar 2005",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "The Godfather",
    "Year": "1972",
    "Rated": "R",
    "Released": "24 Mar 1972",
    "Runtime": "175 min",
    "Genre": "Crime, Drama",
    "Director": "Francis Ford Coppola",
    "Writer": "Mario Puzo, Francis Ford Coppola",
    "Actors": "Marlon Brando, Al Pacino, James Caan",
    "Plot": "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
    "Language": "English, Italian, Latin",
    "Country": "United States",
    "Awards": "Won 3 Oscars. 31 wins & 30 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "9.2/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "97%"
    },
    {
    "Source": "Metacritic",
    "Value": "100/100"
    }
    ],
    "Metascore": "100",
    "imdbRating": "9.2",
    "imdbVotes": "1,710,279",
    "imdbID": "tt0068646",
    "Type": "movie",
    "DVD": "11 May 2004",
    "BoxOffice": "$134,966,411",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "The Shawshank Redemption",
    "Year": "1994",
    "Rated": "R",
    "Released": "14 Oct 1994",
    "Runtime": "142 min",
    "Genre": "Drama",
    "Director": "Frank Darabont",
    "Writer": "Stephen King, Frank Darabont",
    "Actors": "Tim Robbins, Morgan Freeman, Bob Gunton",
    "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Nominated for 7 Oscars. 21 wins & 43 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "9.3/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "91%"
    },
    {
    "Source": "Metacritic",
    "Value": "80/100"
    }
    ],
    "Metascore": "80",
    "imdbRating": "9.3",
    "imdbVotes": "2,470,325",
    "imdbID": "tt0111161",
    "Type": "movie",
    "DVD": "21 Dec 1999",
    "BoxOffice": "$28,699,976",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "The Godfather: Part II",
    "Year": "1974",
    "Rated": "R",
    "Released": "18 Dec 1974",
    "Runtime": "202 min",
    "Genre": "Crime, Drama",
    "Director": "Francis Ford Coppola",
    "Writer": "Francis Ford Coppola, Mario Puzo",
    "Actors": "Al Pacino, Robert De Niro, Robert Duvall",
    "Plot": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    "Language": "English, Italian, Spanish, Latin, Sicilian",
    "Country": "United States",
    "Awards": "Won 6 Oscars. 17 wins & 20 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "9.0/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "96%"
    },
    {
    "Source": "Metacritic",
    "Value": "90/100"
    }
    ],
    "Metascore": "90",
    "imdbRating": "9.0",
    "imdbVotes": "1,188,033",
    "imdbID": "tt0071562",
    "Type": "movie",
    "DVD": "24 May 2005",
    "BoxOffice": "$47,834,595",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Crime, Drama",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan, David S. Goyer",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "United States, United Kingdom",
    "Awards": "Won 2 Oscars. 159 wins & 163 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "9.0/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "94%"
    },
    {
    "Source": "Metacritic",
    "Value": "84/100"
    }
    ],
    "Metascore": "84",
    "imdbRating": "9.0",
    "imdbVotes": "2,429,262",
    "imdbID": "tt0468569",
    "Type": "movie",
    "DVD": "09 Dec 2008",
    "BoxOffice": "$534,858,444",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "12 Angry Men",
    "Year": "1957",
    "Rated": "Approved",
    "Released": "10 Apr 1957",
    "Runtime": "96 min",
    "Genre": "Crime, Drama",
    "Director": "Sidney Lumet",
    "Writer": "Reginald Rose",
    "Actors": "Henry Fonda, Lee J. Cobb, Martin Balsam",
    "Plot": "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Nominated for 3 Oscars. 17 wins & 13 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "9.0/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "100%"
    },
    {
    "Source": "Metacritic",
    "Value": "96/100"
    }
    ],
    "Metascore": "96",
    "imdbRating": "9.0",
    "imdbVotes": "731,013",
    "imdbID": "tt0050083",
    "Type": "movie",
    "DVD": "04 Mar 2008",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Schindler's List",
    "Year": "1993",
    "Rated": "R",
    "Released": "04 Feb 1994",
    "Runtime": "195 min",
    "Genre": "Biography, Drama, History",
    "Director": "Steven Spielberg",
    "Writer": "Thomas Keneally, Steven Zaillian",
    "Actors": "Liam Neeson, Ralph Fiennes, Ben Kingsley",
    "Plot": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    "Language": "English, Hebrew, German, Polish, Latin",
    "Country": "United States",
    "Awards": "Won 7 Oscars. 91 wins & 49 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.9/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "98%"
    },
    {
    "Source": "Metacritic",
    "Value": "94/100"
    }
    ],
    "Metascore": "94",
    "imdbRating": "8.9",
    "imdbVotes": "1,271,062",
    "imdbID": "tt0108052",
    "Type": "movie",
    "DVD": "12 Feb 2008",
    "BoxOffice": "$96,898,818",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "The Lord of the Rings: The Return of the King",
    "Year": "2003",
    "Rated": "PG-13",
    "Released": "17 Dec 2003",
    "Runtime": "201 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "Peter Jackson",
    "Writer": "J.R.R. Tolkien, Fran Walsh, Philippa Boyens",
    "Actors": "Elijah Wood, Viggo Mortensen, Ian McKellen",
    "Plot": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    "Language": "English, Quenya, Old English, Sindarin",
    "Country": "New Zealand, United States",
    "Awards": "Won 11 Oscars. 209 wins & 124 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.9/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "93%"
    },
    {
    "Source": "Metacritic",
    "Value": "94/100"
    }
    ],
    "Metascore": "94",
    "imdbRating": "8.9",
    "imdbVotes": "1,715,674",
    "imdbID": "tt0167260",
    "Type": "movie",
    "DVD": "25 May 2004",
    "BoxOffice": "$377,845,905",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Pulp Fiction",
    "Year": "1994",
    "Rated": "R",
    "Released": "14 Oct 1994",
    "Runtime": "154 min",
    "Genre": "Crime, Drama",
    "Director": "Quentin Tarantino",
    "Writer": "Quentin Tarantino, Roger Avary",
    "Actors": "John Travolta, Uma Thurman, Samuel L. Jackson",
    "Plot": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    "Language": "English, Spanish, French",
    "Country": "United States",
    "Awards": "Won 1 Oscar. 70 wins & 75 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.9/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "92%"
    },
    {
    "Source": "Metacritic",
    "Value": "94/100"
    }
    ],
    "Metascore": "94",
    "imdbRating": "8.9",
    "imdbVotes": "1,916,269",
    "imdbID": "tt0110912",
    "Type": "movie",
    "DVD": "20 Aug 2002",
    "BoxOffice": "$107,928,762",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Il buono, il brutto, il cattivo",
    "Year": "1966",
    "Rated": "R",
    "Released": "29 Dec 1967",
    "Runtime": "178 min",
    "Genre": "Western",
    "Director": "Sergio Leone",
    "Writer": "Luciano Vincenzoni, Sergio Leone, Agenore Incrocci",
    "Actors": "Clint Eastwood, Eli Wallach, Lee Van Cleef",
    "Plot": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
    "Language": "Italian",
    "Country": "Italy, Spain, West Germany",
    "Awards": "3 wins & 6 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.8/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "97%"
    },
    {
    "Source": "Metacritic",
    "Value": "90/100"
    }
    ],
    "Metascore": "90",
    "imdbRating": "8.8",
    "imdbVotes": "720,343",
    "imdbID": "tt0060196",
    "Type": "movie",
    "DVD": "07 Nov 2006",
    "BoxOffice": "$25,100,000",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "The Lord of the Rings: The Fellowship of the Ring",
    "Year": "2001",
    "Rated": "PG-13",
    "Released": "19 Dec 2001",
    "Runtime": "178 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "Peter Jackson",
    "Writer": "J.R.R. Tolkien, Fran Walsh, Philippa Boyens",
    "Actors": "Elijah Wood, Ian McKellen, Orlando Bloom",
    "Plot": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    "Language": "English, Sindarin",
    "Country": "New Zealand, United States",
    "Awards": "Won 4 Oscars. 120 wins & 126 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.8/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "91%"
    },
    {
    "Source": "Metacritic",
    "Value": "92/100"
    }
    ],
    "Metascore": "92",
    "imdbRating": "8.8",
    "imdbVotes": "1,736,949",
    "imdbID": "tt0120737",
    "Type": "movie",
    "DVD": "06 Aug 2002",
    "BoxOffice": "$315,710,750",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Fight Club",
    "Year": "1999",
    "Rated": "R",
    "Released": "15 Oct 1999",
    "Runtime": "139 min",
    "Genre": "Drama",
    "Director": "David Fincher",
    "Writer": "Chuck Palahniuk, Jim Uhls",
    "Actors": "Brad Pitt, Edward Norton, Meat Loaf",
    "Plot": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    "Language": "English",
    "Country": "Germany, United States",
    "Awards": "Nominated for 1 Oscar. 11 wins & 38 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.8/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "79%"
    },
    {
    "Source": "Metacritic",
    "Value": "66/100"
    }
    ],
    "Metascore": "66",
    "imdbRating": "8.8",
    "imdbVotes": "1,944,652",
    "imdbID": "tt0137523",
    "Type": "movie",
    "DVD": "14 Oct 2003",
    "BoxOffice": "$37,030,102",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Forrest Gump",
    "Year": "1994",
    "Rated": "PG-13",
    "Released": "06 Jul 1994",
    "Runtime": "142 min",
    "Genre": "Drama, Romance",
    "Director": "Robert Zemeckis",
    "Writer": "Winston Groom, Eric Roth",
    "Actors": "Tom Hanks, Robin Wright, Gary Sinise",
    "Plot": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweeth",
    "Language": "English",
    "Country": "United States",
    "Awards": "Won 6 Oscars. 50 wins & 75 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.8/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "71%"
    },
    {
    "Source": "Metacritic",
    "Value": "82/100"
    }
    ],
    "Metascore": "82",
    "imdbRating": "8.8",
    "imdbVotes": "1,914,549",
    "imdbID": "tt0109830",
    "Type": "movie",
    "DVD": "28 Aug 2001",
    "BoxOffice": "$330,455,270",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
    "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    "Language": "English, Japanese, French",
    "Country": "United Kingdom, United States",
    "Awards": "Won 4 Oscars. 157 wins & 220 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.8/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "87%"
    },
    {
    "Source": "Metacritic",
    "Value": "74/100"
    }
    ],
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "2,179,906",
    "imdbID": "tt1375666",
    "Type": "movie",
    "DVD": "07 Dec 2010",
    "BoxOffice": "$292,576,195",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "The Lord of the Rings: The Two Towers",
    "Year": "2002",
    "Rated": "PG-13",
    "Released": "18 Dec 2002",
    "Runtime": "179 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "Peter Jackson",
    "Writer": "J.R.R. Tolkien, Fran Walsh, Philippa Boyens",
    "Actors": "Elijah Wood, Ian McKellen, Viggo Mortensen",
    "Plot": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
    "Language": "English, Sindarin, Old English",
    "Country": "New Zealand, United States",
    "Awards": "Won 2 Oscars. 126 wins & 138 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.7/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "95%"
    },
    {
    "Source": "Metacritic",
    "Value": "87/100"
    }
    ],
    "Metascore": "87",
    "imdbRating": "8.7",
    "imdbVotes": "1,551,042",
    "imdbID": "tt0167261",
    "Type": "movie",
    "DVD": "26 Aug 2003",
    "BoxOffice": "$342,551,365",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Star Wars: Episode V - The Empire Strikes Back",
    "Year": "1980",
    "Rated": "PG",
    "Released": "20 Jun 1980",
    "Runtime": "124 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Irvin Kershner",
    "Writer": "Leigh Brackett, Lawrence Kasdan, George Lucas",
    "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher",
    "Plot": "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
    "Language": "English",
    "Country": "United States, United Kingdom",
    "Awards": "Won 2 Oscars. 25 wins & 20 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.7/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "94%"
    },
    {
    "Source": "Metacritic",
    "Value": "82/100"
    }
    ],
    "Metascore": "82",
    "imdbRating": "8.7",
    "imdbVotes": "1,209,128",
    "imdbID": "tt0080684",
    "Type": "movie",
    "DVD": "21 Sep 2004",
    "BoxOffice": "$292,753,960",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "The Matrix",
    "Year": "1999",
    "Rated": "R",
    "Released": "31 Mar 1999",
    "Runtime": "136 min",
    "Genre": "Action, Sci-Fi",
    "Director": "Lana Wachowski, Lilly Wachowski",
    "Writer": "Lilly Wachowski, Lana Wachowski",
    "Actors": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
    "Plot": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    "Language": "English",
    "Country": "United States, Australia",
    "Awards": "Won 4 Oscars. 42 wins & 51 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.7/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "88%"
    },
    {
    "Source": "Metacritic",
    "Value": "73/100"
    }
    ],
    "Metascore": "73",
    "imdbRating": "8.7",
    "imdbVotes": "1,764,065",
    "imdbID": "tt0133093",
    "Type": "movie",
    "DVD": "15 May 2007",
    "BoxOffice": "$171,479,930",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Goodfellas",
    "Year": "1990",
    "Rated": "R",
    "Released": "21 Sep 1990",
    "Runtime": "146 min",
    "Genre": "Biography, Crime, Drama",
    "Director": "Martin Scorsese",
    "Writer": "Nicholas Pileggi, Martin Scorsese",
    "Actors": "Robert De Niro, Ray Liotta, Joe Pesci",
    "Plot": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    "Language": "English, Italian",
    "Country": "United States",
    "Awards": "Won 1 Oscar. 44 wins & 38 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.7/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "96%"
    },
    {
    "Source": "Metacritic",
    "Value": "90/100"
    }
    ],
    "Metascore": "90",
    "imdbRating": "8.7",
    "imdbVotes": "1,074,674",
    "imdbID": "tt0099685",
    "Type": "movie",
    "DVD": "22 Aug 1997",
    "BoxOffice": "$46,836,214",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "One Flew Over the Cuckoo's Nest",
    "Year": "1975",
    "Rated": "R",
    "Released": "19 Nov 1975",
    "Runtime": "133 min",
    "Genre": "Drama",
    "Director": "Milos Forman",
    "Writer": "Lawrence Hauben, Bo Goldman, Ken Kesey",
    "Actors": "Jack Nicholson, Louise Fletcher, Michael Berryman",
    "Plot": "A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Won 5 Oscars. 37 wins & 15 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.7/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "94%"
    },
    {
    "Source": "Metacritic",
    "Value": "84/100"
    }
    ],
    "Metascore": "84",
    "imdbRating": "8.7",
    "imdbVotes": "955,596",
    "imdbID": "tt0073486",
    "Type": "movie",
    "DVD": "16 Dec 1997",
    "BoxOffice": "$108,981,275",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Shichinin no samurai",
    "Year": "1954",
    "Rated": "Not Rated",
    "Released": "19 Nov 1956",
    "Runtime": "207 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "Akira Kurosawa",
    "Writer": "Akira Kurosawa, Shinobu Hashimoto, Hideo Oguni",
    "Actors": "Toshir?? Mifune, Takashi Shimura, Keiko Tsushima",
    "Plot": "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.",
    "Language": "Japanese",
    "Country": "Japan",
    "Awards": "Nominated for 2 Oscars. 5 wins & 8 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWE4ZDdhNmMtNzE5ZC00NzExLTlhNGMtY2ZhYjYzODEzODA1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.6/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "100%"
    },
    {
    "Source": "Metacritic",
    "Value": "98/100"
    }
    ],
    "Metascore": "98",
    "imdbRating": "8.6",
    "imdbVotes": "330,033",
    "imdbID": "tt0047478",
    "Type": "movie",
    "DVD": "05 Sep 2006",
    "BoxOffice": "$318,649",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Se7en",
    "Year": "1995",
    "Rated": "R",
    "Released": "22 Sep 1995",
    "Runtime": "127 min",
    "Genre": "Crime, Drama, Mystery",
    "Director": "David Fincher",
    "Writer": "Andrew Kevin Walker",
    "Actors": "Morgan Freeman, Brad Pitt, Kevin Spacey",
    "Plot": "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Nominated for 1 Oscar. 29 wins & 43 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.6/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "82%"
    },
    {
    "Source": "Metacritic",
    "Value": "65/100"
    }
    ],
    "Metascore": "65",
    "imdbRating": "8.6",
    "imdbVotes": "1,520,496",
    "imdbID": "tt0114369",
    "Type": "movie",
    "DVD": "19 Dec 2000",
    "BoxOffice": "$100,125,643",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "The Silence of the Lambs",
    "Year": "1991",
    "Rated": "R",
    "Released": "14 Feb 1991",
    "Runtime": "118 min",
    "Genre": "Crime, Drama, Thriller",
    "Director": "Jonathan Demme",
    "Writer": "Thomas Harris, Ted Tally",
    "Actors": "Jodie Foster, Anthony Hopkins, Lawrence A. Bonney",
    "Plot": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    "Language": "English, Latin",
    "Country": "United States",
    "Awards": "Won 5 Oscars. 69 wins & 51 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.6/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "96%"
    },
    {
    "Source": "Metacritic",
    "Value": "85/100"
    }
    ],
    "Metascore": "85",
    "imdbRating": "8.6",
    "imdbVotes": "1,337,945",
    "imdbID": "tt0102926",
    "Type": "movie",
    "DVD": "21 Aug 2001",
    "BoxOffice": "$130,742,922",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Cidade de Deus",
    "Year": "2002",
    "Rated": "R",
    "Released": "13 Feb 2004",
    "Runtime": "130 min",
    "Genre": "Crime, Drama",
    "Director": "Fernando Meirelles, K??tia Lund",
    "Writer": "Paulo Lins, Br??ulio Mantovani",
    "Actors": "Alexandre Rodrigues, Leandro Firmino, Matheus Nachtergaele",
    "Plot": "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
    "Language": "Portuguese",
    "Country": "Brazil, France, Germany",
    "Awards": "Nominated for 4 Oscars. 74 wins & 50 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.6/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "91%"
    },
    {
    "Source": "Metacritic",
    "Value": "79/100"
    }
    ],
    "Metascore": "79",
    "imdbRating": "8.6",
    "imdbVotes": "724,086",
    "imdbID": "tt0317248",
    "Type": "movie",
    "DVD": "08 Jun 2004",
    "BoxOffice": "$7,564,459",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "La vita ?? bella",
    "Year": "1997",
    "Rated": "PG-13",
    "Released": "20 Dec 1997",
    "Runtime": "116 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Roberto Benigni",
    "Writer": "Vincenzo Cerami, Roberto Benigni",
    "Actors": "Roberto Benigni, Nicoletta Braschi, Giorgio Cantarini",
    "Plot": "When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.",
    "Language": "Italian, German, English",
    "Country": "Italy",
    "Awards": "Won 3 Oscars. 72 wins & 52 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.6/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "80%"
    },
    {
    "Source": "Metacritic",
    "Value": "59/100"
    }
    ],
    "Metascore": "59",
    "imdbRating": "8.6",
    "imdbVotes": "653,488",
    "imdbID": "tt0118799",
    "Type": "movie",
    "DVD": "09 Nov 1999",
    "BoxOffice": "$57,563,264",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "It's a Wonderful Life",
    "Year": "1946",
    "Rated": "PG",
    "Released": "07 Jan 1947",
    "Runtime": "130 min",
    "Genre": "Drama, Family, Fantasy",
    "Director": "Frank Capra",
    "Writer": "Frances Goodrich, Albert Hackett, Frank Capra",
    "Actors": "James Stewart, Donna Reed, Lionel Barrymore",
    "Plot": "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
    "Language": "English, French",
    "Country": "United States",
    "Awards": "Nominated for 5 Oscars. 6 wins & 6 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.6/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "94%"
    },
    {
    "Source": "Metacritic",
    "Value": "89/100"
    }
    ],
    "Metascore": "89",
    "imdbRating": "8.6",
    "imdbVotes": "423,492",
    "imdbID": "tt0038650",
    "Type": "movie",
    "DVD": "13 Jul 2004",
    "BoxOffice": "$44,000",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Star Wars",
    "Year": "1977",
    "Rated": "PG",
    "Released": "25 May 1977",
    "Runtime": "121 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "George Lucas",
    "Writer": "George Lucas",
    "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher",
    "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vad",
    "Language": "English",
    "Country": "United States, United Kingdom",
    "Awards": "Won 7 Oscars. 63 wins & 29 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.6/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "92%"
    },
    {
    "Source": "Metacritic",
    "Value": "90/100"
    }
    ],
    "Metascore": "90",
    "imdbRating": "8.6",
    "imdbVotes": "1,280,927",
    "imdbID": "tt0076759",
    "Type": "movie",
    "DVD": "06 Dec 2005",
    "BoxOffice": "$460,998,507",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Saving Private Ryan",
    "Year": "1998",
    "Rated": "R",
    "Released": "24 Jul 1998",
    "Runtime": "169 min",
    "Genre": "Drama, War",
    "Director": "Steven Spielberg",
    "Writer": "Robert Rodat",
    "Actors": "Tom Hanks, Matt Damon, Tom Sizemore",
    "Plot": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    "Language": "English, French, German, Czech",
    "Country": "United States",
    "Awards": "Won 5 Oscars. 79 wins & 75 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.6/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "93%"
    },
    {
    "Source": "Metacritic",
    "Value": "91/100"
    }
    ],
    "Metascore": "91",
    "imdbRating": "8.6",
    "imdbVotes": "1,297,159",
    "imdbID": "tt0120815",
    "Type": "movie",
    "DVD": "25 May 2004",
    "BoxOffice": "$217,049,603",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "United Kingdom, Canada, United States",
    "Awards": "Won 1 Oscar. 44 wins & 148 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.6/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "72%"
    },
    {
    "Source": "Metacritic",
    "Value": "74/100"
    }
    ],
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "1,625,316",
    "imdbID": "tt0816692",
    "Type": "movie",
    "DVD": "31 Mar 2015",
    "BoxOffice": "$188,020,017",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Sen to Chihiro no kamikakushi",
    "Year": "2001",
    "Rated": "PG",
    "Released": "28 Mar 2003",
    "Runtime": "125 min",
    "Genre": "Animation, Adventure, Family",
    "Director": "Hayao Miyazaki",
    "Writer": "Hayao Miyazaki",
    "Actors": "Daveigh Chase, Suzanne Pleshette, Miyu Irino",
    "Plot": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    "Language": "Japanese, English",
    "Country": "Japan",
    "Awards": "Won 1 Oscar. 58 wins & 31 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.6/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "97%"
    },
    {
    "Source": "Metacritic",
    "Value": "96/100"
    }
    ],
    "Metascore": "96",
    "imdbRating": "8.6",
    "imdbVotes": "697,497",
    "imdbID": "tt0245429",
    "Type": "movie",
    "DVD": "15 Apr 2003",
    "BoxOffice": "$13,750,644",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "The Green Mile",
    "Year": "1999",
    "Rated": "R",
    "Released": "10 Dec 1999",
    "Runtime": "189 min",
    "Genre": "Crime, Drama, Fantasy",
    "Director": "Frank Darabont",
    "Writer": "Stephen King, Frank Darabont",
    "Actors": "Tom Hanks, Michael Clarke Duncan, David Morse",
    "Plot": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    "Language": "English, French",
    "Country": "United States",
    "Awards": "Nominated for 4 Oscars. 15 wins & 37 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.6/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "78%"
    },
    {
    "Source": "Metacritic",
    "Value": "61/100"
    }
    ],
    "Metascore": "61",
    "imdbRating": "8.6",
    "imdbVotes": "1,208,774",
    "imdbID": "tt0120689",
    "Type": "movie",
    "DVD": "13 Jun 2000",
    "BoxOffice": "$136,801,374",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Gisaengchung",
    "Year": "2019",
    "Rated": "R",
    "Released": "08 Nov 2019",
    "Runtime": "132 min",
    "Genre": "Comedy, Drama, Thriller",
    "Director": "Bong Joon Ho",
    "Writer": "Bong Joon Ho, Jin-won Han",
    "Actors": "Kang-ho Song, Sun-kyun Lee, Yeo-jeong Cho",
    "Plot": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    "Language": "Korean, English",
    "Country": "South Korea",
    "Awards": "Won 4 Oscars. 306 wins & 271 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.6/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "98%"
    },
    {
    "Source": "Metacritic",
    "Value": "96/100"
    }
    ],
    "Metascore": "96",
    "imdbRating": "8.6",
    "imdbVotes": "675,334",
    "imdbID": "tt6751668",
    "Type": "movie",
    "DVD": "11 Oct 2019",
    "BoxOffice": "$53,369,749",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "L??on",
    "Year": "1994",
    "Rated": "R",
    "Released": "18 Nov 1994",
    "Runtime": "110 min",
    "Genre": "Action, Crime, Drama",
    "Director": "Luc Besson",
    "Writer": "Luc Besson",
    "Actors": "Jean Reno, Gary Oldman, Natalie Portman",
    "Plot": "Mathilda, a 12-year-old girl, is reluctantly taken in by L??on, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his prot??g??e and learns the assassin's trade.",
    "Language": "English, Italian, French",
    "Country": "France, United States",
    "Awards": "6 wins & 15 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODllNWE0MmEtYjUwZi00ZjY3LThmNmQtZjZlMjI2YTZjYmQ0XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.5/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "74%"
    },
    {
    "Source": "Metacritic",
    "Value": "64/100"
    }
    ],
    "Metascore": "64",
    "imdbRating": "8.5",
    "imdbVotes": "1,086,680",
    "imdbID": "tt0110413",
    "Type": "movie",
    "DVD": "24 Feb 1998",
    "BoxOffice": "$19,501,238",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Seppuku",
    "Year": "1962",
    "Rated": "Not Rated",
    "Released": "04 Aug 1964",
    "Runtime": "133 min",
    "Genre": "Action, Drama, Mystery",
    "Director": "Masaki Kobayashi",
    "Writer": "Yasuhiko Takiguchi, Shinobu Hashimoto",
    "Actors": "Tatsuya Nakadai, Akira Ishihama, Shima Iwashita",
    "Plot": "When a ronin requesting seppuku at a feudal lord's palace is told of the brutal suicide of another ronin who previously visited, he reveals how their pasts are intertwined - and in doing so challenges the clan's integrity.",
    "Language": "Japanese",
    "Country": "Japan",
    "Awards": "8 wins & 2 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.6/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "100%"
    },
    {
    "Source": "Metacritic",
    "Value": "85/100"
    }
    ],
    "Metascore": "85",
    "imdbRating": "8.6",
    "imdbVotes": "49,620",
    "imdbID": "tt0056058",
    "Type": "movie",
    "DVD": "23 Aug 2005",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "The Pianist",
    "Year": "2002",
    "Rated": "R",
    "Released": "28 Mar 2003",
    "Runtime": "150 min",
    "Genre": "Biography, Drama, Music",
    "Director": "Roman Polanski",
    "Writer": "Ronald Harwood, Wladyslaw Szpilman",
    "Actors": "Adrien Brody, Thomas Kretschmann, Frank Finlay",
    "Plot": "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
    "Language": "English, German, Russian",
    "Country": "United Kingdom, France, Poland, Germany",
    "Awards": "Won 3 Oscars. 57 wins & 74 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.5/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "95%"
    },
    {
    "Source": "Metacritic",
    "Value": "85/100"
    }
    ],
    "Metascore": "85",
    "imdbRating": "8.5",
    "imdbVotes": "772,540",
    "imdbID": "tt0253474",
    "Type": "movie",
    "DVD": "27 May 2003",
    "BoxOffice": "$32,572,577",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Terminator 2: Judgment Day",
    "Year": "1991",
    "Rated": "R",
    "Released": "03 Jul 1991",
    "Runtime": "137 min",
    "Genre": "Action, Sci-Fi",
    "Director": "James Cameron",
    "Writer": "James Cameron, William Wisher",
    "Actors": "Arnold Schwarzenegger, Linda Hamilton, Edward Furlong",
    "Plot": "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten year old son, John Connor, from a more advanced and powerful cyborg.",
    "Language": "English, Spanish",
    "Country": "United States",
    "Awards": "Won 4 Oscars. 36 wins & 33 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.5/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "93%"
    },
    {
    "Source": "Metacritic",
    "Value": "75/100"
    }
    ],
    "Metascore": "75",
    "imdbRating": "8.5",
    "imdbVotes": "1,036,742",
    "imdbID": "tt0103064",
    "Type": "movie",
    "DVD": "13 Feb 2007",
    "BoxOffice": "$205,881,154",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "The Usual Suspects",
    "Year": "1995",
    "Rated": "R",
    "Released": "16 Aug 1995",
    "Runtime": "106 min",
    "Genre": "Crime, Drama, Mystery",
    "Director": "Bryan Singer",
    "Writer": "Christopher McQuarrie",
    "Actors": "Kevin Spacey, Gabriel Byrne, Chazz Palminteri",
    "Plot": "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
    "Language": "English, Hungarian, Spanish, French",
    "Country": "United States, Germany",
    "Awards": "Won 2 Oscars. 37 wins & 17 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.5/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "88%"
    },
    {
    "Source": "Metacritic",
    "Value": "77/100"
    }
    ],
    "Metascore": "77",
    "imdbRating": "8.5",
    "imdbVotes": "1,032,359",
    "imdbID": "tt0114814",
    "Type": "movie",
    "DVD": "02 Sep 2003",
    "BoxOffice": "$23,341,568",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Back to the Future",
    "Year": "1985",
    "Rated": "PG",
    "Released": "03 Jul 1985",
    "Runtime": "116 min",
    "Genre": "Adventure, Comedy, Sci-Fi",
    "Director": "Robert Zemeckis",
    "Writer": "Robert Zemeckis, Bob Gale",
    "Actors": "Michael J. Fox, Christopher Lloyd, Lea Thompson",
    "Plot": "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Won 1 Oscar. 22 wins & 25 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.5/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "96%"
    },
    {
    "Source": "Metacritic",
    "Value": "87/100"
    }
    ],
    "Metascore": "87",
    "imdbRating": "8.5",
    "imdbVotes": "1,117,333",
    "imdbID": "tt0088763",
    "Type": "movie",
    "DVD": "17 Aug 2010",
    "BoxOffice": "$211,406,762",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Psycho",
    "Year": "1960",
    "Rated": "R",
    "Released": "08 Sep 1960",
    "Runtime": "109 min",
    "Genre": "Horror, Mystery, Thriller",
    "Director": "Alfred Hitchcock",
    "Writer": "Joseph Stefano, Robert Bloch",
    "Actors": "Anthony Perkins, Janet Leigh, Vera Miles",
    "Plot": "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Nominated for 4 Oscars. 7 wins & 14 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.5/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "96%"
    },
    {
    "Source": "Metacritic",
    "Value": "97/100"
    }
    ],
    "Metascore": "97",
    "imdbRating": "8.5",
    "imdbVotes": "633,069",
    "imdbID": "tt0054215",
    "Type": "movie",
    "DVD": "04 Oct 2005",
    "BoxOffice": "$32,000,000",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "The Lion King",
    "Year": "1994",
    "Rated": "G",
    "Released": "24 Jun 1994",
    "Runtime": "88 min",
    "Genre": "Animation, Adventure, Drama",
    "Director": "Roger Allers, Rob Minkoff",
    "Writer": "Irene Mecchi, Jonathan Roberts, Linda Woolverton",
    "Actors": "Matthew Broderick, Jeremy Irons, James Earl Jones",
    "Plot": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    "Language": "English, Swahili, Xhosa, Zulu",
    "Country": "United States",
    "Awards": "Won 2 Oscars. 39 wins & 35 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.5/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "93%"
    },
    {
    "Source": "Metacritic",
    "Value": "88/100"
    }
    ],
    "Metascore": "88",
    "imdbRating": "8.5",
    "imdbVotes": "985,816",
    "imdbID": "tt0110357",
    "Type": "movie",
    "DVD": "04 Oct 2011",
    "BoxOffice": "$422,783,777",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Modern Times",
    "Year": "1936",
    "Rated": "G",
    "Released": "25 Feb 1936",
    "Runtime": "87 min",
    "Genre": "Comedy, Drama, Family",
    "Director": "Charles Chaplin",
    "Writer": "Charles Chaplin",
    "Actors": "Charles Chaplin, Paulette Goddard, Henry Bergman",
    "Plot": "The Tramp struggles to live in modern industrial society with the help of a young homeless woman.",
    "Language": "English",
    "Country": "United States",
    "Awards": "4 wins & 1 nomination",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.5/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "98%"
    },
    {
    "Source": "Metacritic",
    "Value": "96/100"
    }
    ],
    "Metascore": "96",
    "imdbRating": "8.5",
    "imdbVotes": "229,657",
    "imdbID": "tt0027977",
    "Type": "movie",
    "DVD": "16 Nov 2010",
    "BoxOffice": "$163,577",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "American History X",
    "Year": "1998",
    "Rated": "R",
    "Released": "20 Nov 1998",
    "Runtime": "119 min",
    "Genre": "Drama",
    "Director": "Tony Kaye",
    "Writer": "David McKenna",
    "Actors": "Edward Norton, Edward Furlong, Beverly D'Angelo",
    "Plot": "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Nominated for 1 Oscar. 4 wins & 15 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZTJhN2FkYWEtMGI0My00YWM4LWI2MjAtM2UwNjY4MTI2ZTQyXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.5/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "83%"
    },
    {
    "Source": "Metacritic",
    "Value": "62/100"
    }
    ],
    "Metascore": "62",
    "imdbRating": "8.5",
    "imdbVotes": "1,068,970",
    "imdbID": "tt0120586",
    "Type": "movie",
    "DVD": "05 Apr 2005",
    "BoxOffice": "$6,719,864",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Hotaru no haka",
    "Year": "1988",
    "Rated": "Not Rated",
    "Released": "26 Jul 1989",
    "Runtime": "89 min",
    "Genre": "Animation, Drama, War",
    "Director": "Isao Takahata",
    "Writer": "Akiyuki Nosaka, Isao Takahata",
    "Actors": "Tsutomu Tatsumi, Ayano Shiraishi, Akemi Yamaguchi",
    "Plot": "A young boy and his little sister struggle to survive in Japan during World War II.",
    "Language": "Japanese",
    "Country": "Japan",
    "Awards": "3 wins",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.5/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "100%"
    },
    {
    "Source": "Metacritic",
    "Value": "94/100"
    }
    ],
    "Metascore": "94",
    "imdbRating": "8.5",
    "imdbVotes": "253,437",
    "imdbID": "tt0095327",
    "Type": "movie",
    "DVD": "11 Mar 2017",
    "BoxOffice": "$516,962",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "City Lights",
    "Year": "1931",
    "Rated": "G",
    "Released": "07 Mar 1931",
    "Runtime": "87 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Charles Chaplin",
    "Writer": "Charles Chaplin, Harry Carr, Harry Crocker",
    "Actors": "Charles Chaplin, Virginia Cherrill, Florence Lee",
    "Plot": "With the aid of a wealthy erratic tippler, a dewy-eyed tramp who has fallen in love with a sightless flower girl accumulates money to be able to help her medically.",
    "Language": "None, English",
    "Country": "United States",
    "Awards": "3 wins",
    "Poster": "https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.5/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "98%"
    },
    {
    "Source": "Metacritic",
    "Value": "99/100"
    }
    ],
    "Metascore": "99",
    "imdbRating": "8.5",
    "imdbVotes": "176,338",
    "imdbID": "tt0021749",
    "Type": "movie",
    "DVD": "23 Feb 2010",
    "BoxOffice": "$19,181",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Whiplash",
    "Year": "2014",
    "Rated": "R",
    "Released": "15 Oct 2014",
    "Runtime": "106 min",
    "Genre": "Drama, Music",
    "Director": "Damien Chazelle",
    "Writer": "Damien Chazelle",
    "Actors": "Miles Teller, J.K. Simmons, Melissa Benoist",
    "Plot": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Won 3 Oscars. 98 wins & 145 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.5/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "94%"
    },
    {
    "Source": "Metacritic",
    "Value": "88/100"
    }
    ],
    "Metascore": "88",
    "imdbRating": "8.5",
    "imdbVotes": "768,643",
    "imdbID": "tt2582802",
    "Type": "movie",
    "DVD": "02 Dec 2014",
    "BoxOffice": "$13,092,000",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Gladiator",
    "Year": "2000",
    "Rated": "R",
    "Released": "05 May 2000",
    "Runtime": "155 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "Ridley Scott",
    "Writer": "David Franzoni, John Logan, William Nicholson",
    "Actors": "Russell Crowe, Joaquin Phoenix, Connie Nielsen",
    "Plot": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    "Language": "English",
    "Country": "United States, United Kingdom, Malta, Morocco",
    "Awards": "Won 5 Oscars. 59 wins & 106 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.5/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "77%"
    },
    {
    "Source": "Metacritic",
    "Value": "67/100"
    }
    ],
    "Metascore": "67",
    "imdbRating": "8.5",
    "imdbVotes": "1,404,307",
    "imdbID": "tt0172495",
    "Type": "movie",
    "DVD": "26 Sep 2000",
    "BoxOffice": "$187,705,427",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "The Departed",
    "Year": "2006",
    "Rated": "R",
    "Released": "06 Oct 2006",
    "Runtime": "151 min",
    "Genre": "Crime, Drama, Thriller",
    "Director": "Martin Scorsese",
    "Writer": "William Monahan, Alan Mak, Felix Chong",
    "Actors": "Leonardo DiCaprio, Matt Damon, Jack Nicholson",
    "Plot": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    "Language": "English, Cantonese",
    "Country": "United States, Hong Kong",
    "Awards": "Won 4 Oscars. 97 wins & 141 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.5/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "90%"
    },
    {
    "Source": "Metacritic",
    "Value": "85/100"
    }
    ],
    "Metascore": "85",
    "imdbRating": "8.5",
    "imdbVotes": "1,243,116",
    "imdbID": "tt0407887",
    "Type": "movie",
    "DVD": "13 Feb 2007",
    "BoxOffice": "$132,384,315",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Intouchables",
    "Year": "2011",
    "Rated": "R",
    "Released": "02 Nov 2011",
    "Runtime": "112 min",
    "Genre": "Biography, Comedy, Drama",
    "Director": "Olivier Nakache, ??ric Toledano",
    "Writer": "Olivier Nakache, Philippe Pozzo di Borgo, ??ric Toledano",
    "Actors": "Fran??ois Cluzet, Omar Sy, Anne Le Ny",
    "Plot": "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
    "Language": "French, English",
    "Country": "France",
    "Awards": "38 wins & 40 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.5/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "75%"
    },
    {
    "Source": "Metacritic",
    "Value": "57/100"
    }
    ],
    "Metascore": "57",
    "imdbRating": "8.5",
    "imdbVotes": "800,644",
    "imdbID": "tt1675434",
    "Type": "movie",
    "DVD": "15 Jan 2013",
    "BoxOffice": "$10,198,820",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "The Prestige",
    "Year": "2006",
    "Rated": "PG-13",
    "Released": "20 Oct 2006",
    "Runtime": "130 min",
    "Genre": "Drama, Mystery, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan, Christopher Priest",
    "Actors": "Christian Bale, Hugh Jackman, Scarlett Johansson",
    "Plot": "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
    "Language": "English",
    "Country": "United Kingdom, United States",
    "Awards": "Nominated for 2 Oscars. 6 wins & 45 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.5/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "76%"
    },
    {
    "Source": "Metacritic",
    "Value": "66/100"
    }
    ],
    "Metascore": "66",
    "imdbRating": "8.5",
    "imdbVotes": "1,247,611",
    "imdbID": "tt0482571",
    "Type": "movie",
    "DVD": "13 Feb 2007",
    "BoxOffice": "$53,089,891",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Casablanca",
    "Year": "1942",
    "Rated": "PG",
    "Released": "23 Jan 1943",
    "Runtime": "102 min",
    "Genre": "Drama, Romance, War",
    "Director": "Michael Curtiz",
    "Writer": "Julius J. Epstein, Philip G. Epstein, Howard Koch",
    "Actors": "Humphrey Bogart, Ingrid Bergman, Paul Henreid",
    "Plot": "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
    "Language": "English, French, German, Italian",
    "Country": "United States",
    "Awards": "Won 3 Oscars. 10 wins & 9 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.5/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "99%"
    },
    {
    "Source": "Metacritic",
    "Value": "100/100"
    }
    ],
    "Metascore": "100",
    "imdbRating": "8.5",
    "imdbVotes": "543,834",
    "imdbID": "tt0034583",
    "Type": "movie",
    "DVD": "17 Nov 1998",
    "BoxOffice": "$4,108,411",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "C'era una volta il West",
    "Year": "1968",
    "Rated": "PG-13",
    "Released": "04 Jul 1969",
    "Runtime": "165 min",
    "Genre": "Western",
    "Director": "Sergio Leone",
    "Writer": "Sergio Donati, Sergio Leone, Dario Argento",
    "Actors": "Henry Fonda, Charles Bronson, Claudia Cardinale",
    "Plot": "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
    "Language": "English, Italian, Spanish",
    "Country": "Italy, United States",
    "Awards": "4 wins & 5 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZGI5MjBmYzYtMzJhZi00NGI1LTk3MzItYjBjMzcxM2U3MDdiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.5/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "95%"
    },
    {
    "Source": "Metacritic",
    "Value": "80/100"
    }
    ],
    "Metascore": "80",
    "imdbRating": "8.5",
    "imdbVotes": "315,474",
    "imdbID": "tt0064116",
    "Type": "movie",
    "DVD": "18 Nov 2003",
    "BoxOffice": "$5,321,508",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Rear Window",
    "Year": "1954",
    "Rated": "PG",
    "Released": "01 Sep 1954",
    "Runtime": "112 min",
    "Genre": "Mystery, Thriller",
    "Director": "Alfred Hitchcock",
    "Writer": "John Michael Hayes, Cornell Woolrich",
    "Actors": "James Stewart, Grace Kelly, Wendell Corey",
    "Plot": "A wheelchair-bound photographer spies on his neighbors from his Greenwich Village courtyard apartment window, and becomes convinced one of them has committed murder, despite the skepticism of his fashion-model girlfriend.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Nominated for 4 Oscars. 6 wins & 13 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.5/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "98%"
    },
    {
    "Source": "Metacritic",
    "Value": "100/100"
    }
    ],
    "Metascore": "100",
    "imdbRating": "8.5",
    "imdbVotes": "466,343",
    "imdbID": "tt0047396",
    "Type": "movie",
    "DVD": "07 Sep 2004",
    "BoxOffice": "$36,764,313",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Nuovo Cinema Paradiso",
    "Year": "1988",
    "Rated": "PG",
    "Released": "23 Feb 1990",
    "Runtime": "155 min",
    "Genre": "Drama, Romance",
    "Director": "Giuseppe Tornatore",
    "Writer": "Giuseppe Tornatore, Vanna Paoli, Richard Epcar",
    "Actors": "Philippe Noiret, Enzo Cannavale, Antonella Attili",
    "Plot": "A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema's projectionist.",
    "Language": "Italian",
    "Country": "Italy, France",
    "Awards": "Won 1 Oscar. 25 wins & 32 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.5/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "90%"
    },
    {
    "Source": "Metacritic",
    "Value": "80/100"
    }
    ],
    "Metascore": "80",
    "imdbRating": "8.5",
    "imdbVotes": "245,886",
    "imdbID": "tt0095765",
    "Type": "movie",
    "DVD": "10 Jan 2006",
    "BoxOffice": "$12,397,210",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Alien",
    "Year": "1979",
    "Rated": "R",
    "Released": "22 Jun 1979",
    "Runtime": "117 min",
    "Genre": "Horror, Sci-Fi",
    "Director": "Ridley Scott",
    "Writer": "Dan O'Bannon, Ronald Shusett",
    "Actors": "Sigourney Weaver, Tom Skerritt, John Hurt",
    "Plot": "After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.",
    "Language": "English",
    "Country": "United Kingdom, United States",
    "Awards": "Won 1 Oscar. 18 wins & 22 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "98%"
    },
    {
    "Source": "Metacritic",
    "Value": "89/100"
    }
    ],
    "Metascore": "89",
    "imdbRating": "8.4",
    "imdbVotes": "827,245",
    "imdbID": "tt0078748",
    "Type": "movie",
    "DVD": "01 Jun 1999",
    "BoxOffice": "$81,900,459",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Apocalypse Now",
    "Year": "1979",
    "Rated": "R",
    "Released": "15 Aug 1979",
    "Runtime": "147 min",
    "Genre": "Drama, Mystery, War",
    "Director": "Francis Ford Coppola",
    "Writer": "John Milius, Francis Ford Coppola, Michael Herr",
    "Actors": "Martin Sheen, Marlon Brando, Robert Duvall",
    "Plot": "A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel who sees himself as a god.",
    "Language": "English, French, Vietnamese",
    "Country": "United States",
    "Awards": "Won 2 Oscars. 21 wins & 33 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDdhODg0MjYtYzBiOS00ZmI5LWEwZGYtZDEyNDU4MmQyNzFkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "98%"
    },
    {
    "Source": "Metacritic",
    "Value": "94/100"
    }
    ],
    "Metascore": "94",
    "imdbRating": "8.4",
    "imdbVotes": "631,768",
    "imdbID": "tt0078788",
    "Type": "movie",
    "DVD": "18 May 2010",
    "BoxOffice": "$83,471,511",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Memento",
    "Year": "2000",
    "Rated": "R",
    "Released": "25 May 2001",
    "Runtime": "113 min",
    "Genre": "Mystery, Thriller",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan, Jonathan Nolan",
    "Actors": "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano",
    "Plot": "A man with short-term memory loss attempts to track down his wife's murderer.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Nominated for 2 Oscars. 57 wins & 59 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "93%"
    },
    {
    "Source": "Metacritic",
    "Value": "80/100"
    }
    ],
    "Metascore": "80",
    "imdbRating": "8.4",
    "imdbVotes": "1,172,676",
    "imdbID": "tt0209144",
    "Type": "movie",
    "DVD": "04 Sep 2001",
    "BoxOffice": "$25,544,867",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "The Great Dictator",
    "Year": "1940",
    "Rated": "G",
    "Released": "07 Mar 1941",
    "Runtime": "125 min",
    "Genre": "Comedy, Drama, War",
    "Director": "Charles Chaplin",
    "Writer": "Charles Chaplin",
    "Actors": "Charles Chaplin, Paulette Goddard, Jack Oakie",
    "Plot": "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel's regime.",
    "Language": "English, Esperanto",
    "Country": "United States",
    "Awards": "Nominated for 5 Oscars. 6 wins & 6 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "93%"
    }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.4",
    "imdbVotes": "213,875",
    "imdbID": "tt0032553",
    "Type": "movie",
    "DVD": "24 May 2011",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Das Leben der Anderen",
    "Year": "2006",
    "Rated": "R",
    "Released": "30 Mar 2007",
    "Runtime": "137 min",
    "Genre": "Drama, Mystery, Thriller",
    "Director": "Florian Henckel von Donnersmarck",
    "Writer": "Florian Henckel von Donnersmarck",
    "Actors": "Ulrich M??he, Martina Gedeck, Sebastian Koch",
    "Plot": "In 1984 East Berlin, an agent of the secret police, conducting surveillance on a writer and his lover, finds himself becoming increasingly absorbed by their lives.",
    "Language": "German",
    "Country": "Germany, France",
    "Awards": "Won 1 Oscar. 80 wins & 38 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOThkM2EzYmMtNDE3NS00NjlhLTg4YzktYTdhNzgyOWY3ZDYzXkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "92%"
    },
    {
    "Source": "Metacritic",
    "Value": "89/100"
    }
    ],
    "Metascore": "89",
    "imdbRating": "8.4",
    "imdbVotes": "374,039",
    "imdbID": "tt0405094",
    "Type": "movie",
    "DVD": "21 Aug 2007",
    "BoxOffice": "$11,286,112",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Django Unchained",
    "Year": "2012",
    "Rated": "R",
    "Released": "25 Dec 2012",
    "Runtime": "165 min",
    "Genre": "Drama, Western",
    "Director": "Quentin Tarantino",
    "Writer": "Quentin Tarantino",
    "Actors": "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio",
    "Plot": "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.",
    "Language": "English, German, French, Italian",
    "Country": "United States",
    "Awards": "Won 2 Oscars. 58 wins & 158 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "87%"
    },
    {
    "Source": "Metacritic",
    "Value": "81/100"
    }
    ],
    "Metascore": "81",
    "imdbRating": "8.4",
    "imdbVotes": "1,433,363",
    "imdbID": "tt1853728",
    "Type": "movie",
    "DVD": "16 Apr 2013",
    "BoxOffice": "$162,805,434",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Paths of Glory",
    "Year": "1957",
    "Rated": "Approved",
    "Released": "25 Dec 1957",
    "Runtime": "88 min",
    "Genre": "Drama, War",
    "Director": "Stanley Kubrick",
    "Writer": "Stanley Kubrick, Calder Willingham, Jim Thompson",
    "Actors": "Kirk Douglas, Ralph Meeker, Adolphe Menjou",
    "Plot": "After refusing to attack an enemy position, a general accuses the soldiers of cowardice and their commanding officer must defend them.",
    "Language": "English, German, Latin",
    "Country": "United States",
    "Awards": "7 wins & 4 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjViMmRkOTEtM2ViOS00ODg0LWJhYWEtNTBlOGQxNDczOGY3XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "95%"
    },
    {
    "Source": "Metacritic",
    "Value": "90/100"
    }
    ],
    "Metascore": "90",
    "imdbRating": "8.4",
    "imdbVotes": "187,557",
    "imdbID": "tt0050825",
    "Type": "movie",
    "DVD": "01 May 2001",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Sunset Blvd.",
    "Year": "1950",
    "Rated": "Passed",
    "Released": "04 Aug 1950",
    "Runtime": "110 min",
    "Genre": "Drama, Film-Noir",
    "Director": "Billy Wilder",
    "Writer": "Charles Brackett, Billy Wilder, D.M. Marshman Jr.",
    "Actors": "William Holden, Gloria Swanson, Erich von Stroheim",
    "Plot": "A screenwriter develops a dangerous relationship with a faded film star determined to make a triumphant return.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Won 3 Oscars. 18 wins & 19 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "98%"
    }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.4",
    "imdbVotes": "211,978",
    "imdbID": "tt0043014",
    "Type": "movie",
    "DVD": "11 Nov 2008",
    "BoxOffice": "$299,645",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "WALL??E",
    "Year": "2008",
    "Rated": "G",
    "Released": "27 Jun 2008",
    "Runtime": "98 min",
    "Genre": "Animation, Adventure, Family",
    "Director": "Andrew Stanton",
    "Writer": "Andrew Stanton, Pete Docter, Jim Reardon",
    "Actors": "Ben Burtt, Elissa Knight, Jeff Garlin",
    "Plot": "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
    "Language": "English, Hindi",
    "Country": "United States",
    "Awards": "Won 1 Oscar. 93 wins & 95 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "95%"
    },
    {
    "Source": "Metacritic",
    "Value": "95/100"
    }
    ],
    "Metascore": "95",
    "imdbRating": "8.4",
    "imdbVotes": "1,046,426",
    "imdbID": "tt0910970",
    "Type": "movie",
    "DVD": "18 Nov 2008",
    "BoxOffice": "$223,808,164",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Witness for the Prosecution",
    "Year": "1957",
    "Rated": "Approved",
    "Released": "06 Feb 1958",
    "Runtime": "116 min",
    "Genre": "Crime, Drama, Mystery",
    "Director": "Billy Wilder",
    "Writer": "Agatha Christie, Billy Wilder, Harry Kurnitz",
    "Actors": "Tyrone Power, Marlene Dietrich, Charles Laughton",
    "Plot": "A veteran British barrister must defend his client in a murder trial that has surprise after surprise.",
    "Language": "English, German",
    "Country": "United States",
    "Awards": "Nominated for 6 Oscars. 4 wins & 16 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDA4MWNkMTctZDQ0Mi00MTY2LThjYTAtNWM5OTY3NzA4MzIyXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "100%"
    }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.4",
    "imdbVotes": "117,200",
    "imdbID": "tt0051201",
    "Type": "movie",
    "DVD": "22 Apr 2008",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "The Shining",
    "Year": "1980",
    "Rated": "R",
    "Released": "13 Jun 1980",
    "Runtime": "146 min",
    "Genre": "Drama, Horror",
    "Director": "Stanley Kubrick",
    "Writer": "Stephen King, Stanley Kubrick, Diane Johnson",
    "Actors": "Jack Nicholson, Shelley Duvall, Danny Lloyd",
    "Plot": "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
    "Language": "English",
    "Country": "United Kingdom, United States",
    "Awards": "4 wins & 8 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "84%"
    },
    {
    "Source": "Metacritic",
    "Value": "66/100"
    }
    ],
    "Metascore": "66",
    "imdbRating": "8.4",
    "imdbVotes": "944,560",
    "imdbID": "tt0081505",
    "Type": "movie",
    "DVD": "23 Oct 2007",
    "BoxOffice": "$45,332,952",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Spider-Man: Into the Spider-Verse",
    "Year": "2018",
    "Rated": "PG",
    "Released": "14 Dec 2018",
    "Runtime": "117 min",
    "Genre": "Animation, Action, Adventure",
    "Director": "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    "Writer": "Phil Lord, Rodney Rothman",
    "Actors": "Shameik Moore, Jake Johnson, Hailee Steinfeld",
    "Plot": "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
    "Language": "English, Spanish",
    "Country": "United States",
    "Awards": "Won 1 Oscar. 81 wins & 58 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "97%"
    },
    {
    "Source": "Metacritic",
    "Value": "87/100"
    }
    ],
    "Metascore": "87",
    "imdbRating": "8.4",
    "imdbVotes": "432,761",
    "imdbID": "tt4633694",
    "Type": "movie",
    "DVD": "19 Mar 2019",
    "BoxOffice": "$190,241,310",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    "Year": "1964",
    "Rated": "PG",
    "Released": "29 Jan 1964",
    "Runtime": "95 min",
    "Genre": "Comedy",
    "Director": "Stanley Kubrick",
    "Writer": "Stanley Kubrick, Terry Southern, Peter George",
    "Actors": "Peter Sellers, George C. Scott, Sterling Hayden",
    "Plot": "An insane general triggers a path to nuclear holocaust that a War Room full of politicians and generals frantically tries to stop.",
    "Language": "English, Russian",
    "Country": "United Kingdom",
    "Awards": "Nominated for 4 Oscars. 14 wins & 11 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "98%"
    },
    {
    "Source": "Metacritic",
    "Value": "97/100"
    }
    ],
    "Metascore": "97",
    "imdbRating": "8.4",
    "imdbVotes": "468,906",
    "imdbID": "tt0057012",
    "Type": "movie",
    "DVD": "21 Oct 2003",
    "BoxOffice": "$9,440,272",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Joker",
    "Year": "2019",
    "Rated": "R",
    "Released": "04 Oct 2019",
    "Runtime": "122 min",
    "Genre": "Crime, Drama, Thriller",
    "Director": "Todd Phillips",
    "Writer": "Todd Phillips, Scott Silver, Bob Kane",
    "Actors": "Joaquin Phoenix, Robert De Niro, Zazie Beetz",
    "Plot": "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
    "Language": "English",
    "Country": "United States, Canada",
    "Awards": "Won 2 Oscars. 118 wins & 239 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "68%"
    },
    {
    "Source": "Metacritic",
    "Value": "59/100"
    }
    ],
    "Metascore": "59",
    "imdbRating": "8.4",
    "imdbVotes": "1,072,423",
    "imdbID": "tt7286456",
    "Type": "movie",
    "DVD": "03 Oct 2019",
    "BoxOffice": "$335,451,311",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Mononoke-hime",
    "Year": "1997",
    "Rated": "PG-13",
    "Released": "19 Dec 1997",
    "Runtime": "134 min",
    "Genre": "Animation, Action, Adventure",
    "Director": "Hayao Miyazaki",
    "Writer": "Hayao Miyazaki, Neil Gaiman",
    "Actors": "Y??ji Matsuda, Yuriko Ishida, Y??ko Tanaka",
    "Plot": "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.",
    "Language": "Japanese",
    "Country": "Japan",
    "Awards": "13 wins & 6 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "93%"
    },
    {
    "Source": "Metacritic",
    "Value": "76/100"
    }
    ],
    "Metascore": "76",
    "imdbRating": "8.4",
    "imdbVotes": "365,726",
    "imdbID": "tt0119698",
    "Type": "movie",
    "DVD": "20 Jul 2000",
    "BoxOffice": "$4,845,631",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Oldeuboi",
    "Year": "2003",
    "Rated": "R",
    "Released": "21 Nov 2003",
    "Runtime": "120 min",
    "Genre": "Action, Drama, Mystery",
    "Director": "Park Chan-Wook",
    "Writer": "Garon Tsuchiya, Nobuaki Minegishi, Park Chan-Wook",
    "Actors": "Choi Min-sik, Yoo Ji-Tae, Kang Hye-jeong",
    "Plot": "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.",
    "Language": "Korean",
    "Country": "South Korea",
    "Awards": "40 wins & 20 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "81%"
    },
    {
    "Source": "Metacritic",
    "Value": "77/100"
    }
    ],
    "Metascore": "77",
    "imdbRating": "8.4",
    "imdbVotes": "543,179",
    "imdbID": "tt0364569",
    "Type": "movie",
    "DVD": "07 Aug 2008",
    "BoxOffice": "$707,481",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Kimi no na wa.",
    "Year": "2016",
    "Rated": "TV-PG",
    "Released": "07 Apr 2017",
    "Runtime": "106 min",
    "Genre": "Animation, Drama, Fantasy",
    "Director": "Makoto Shinkai",
    "Writer": "Makoto Shinkai, Clark Cheng",
    "Actors": "Ry??nosuke Kamiki, Mone Kamishiraishi, Ry?? Narita",
    "Plot": "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
    "Language": "Japanese",
    "Country": "Japan",
    "Awards": "16 wins & 26 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "98%"
    },
    {
    "Source": "Metacritic",
    "Value": "79/100"
    }
    ],
    "Metascore": "79",
    "imdbRating": "8.4",
    "imdbVotes": "225,931",
    "imdbID": "tt5311514",
    "Type": "movie",
    "DVD": "31 Jan 2018",
    "BoxOffice": "$5,017,246",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "The Dark Knight Rises",
    "Year": "2012",
    "Rated": "PG-13",
    "Released": "20 Jul 2012",
    "Runtime": "164 min",
    "Genre": "Action",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan, David S. Goyer",
    "Actors": "Christian Bale, Tom Hardy, Anne Hathaway",
    "Plot": "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
    "Language": "English, Arabic",
    "Country": "United Kingdom, United States",
    "Awards": "38 wins & 103 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "87%"
    },
    {
    "Source": "Metacritic",
    "Value": "78/100"
    }
    ],
    "Metascore": "78",
    "imdbRating": "8.4",
    "imdbVotes": "1,580,855",
    "imdbID": "tt1345836",
    "Type": "movie",
    "DVD": "04 Dec 2012",
    "BoxOffice": "$448,139,099",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Coco",
    "Year": "2017",
    "Rated": "PG",
    "Released": "22 Nov 2017",
    "Runtime": "105 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Lee Unkrich, Adrian Molina",
    "Writer": "Lee Unkrich, Jason Katz, Matthew Aldrich",
    "Actors": "Anthony Gonzalez, Gael Garc??a Bernal, Benjamin Bratt",
    "Plot": "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
    "Language": "English, Spanish",
    "Country": "United States, Mexico",
    "Awards": "Won 2 Oscars. 109 wins & 40 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "97%"
    },
    {
    "Source": "Metacritic",
    "Value": "81/100"
    }
    ],
    "Metascore": "81",
    "imdbRating": "8.4",
    "imdbVotes": "435,534",
    "imdbID": "tt2380307",
    "Type": "movie",
    "DVD": "13 Feb 2018",
    "BoxOffice": "$210,460,015",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Aliens",
    "Year": "1986",
    "Rated": "R",
    "Released": "18 Jul 1986",
    "Runtime": "137 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "James Cameron",
    "Writer": "James Cameron, David Giler, Walter Hill",
    "Actors": "Sigourney Weaver, Michael Biehn, Carrie Henn",
    "Plot": "Fifty-seven years after surviving an apocalyptic attack aboard her space vessel by merciless space creatures, Officer Ripley awakens from hyper-sleep and tries to warn anyone who will listen about the predators.",
    "Language": "English",
    "Country": "United Kingdom, United States",
    "Awards": "Won 2 Oscars. 20 wins & 23 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.3/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "97%"
    },
    {
    "Source": "Metacritic",
    "Value": "84/100"
    }
    ],
    "Metascore": "84",
    "imdbRating": "8.3",
    "imdbVotes": "680,817",
    "imdbID": "tt0090605",
    "Type": "movie",
    "DVD": "01 Jun 1999",
    "BoxOffice": "$85,160,248",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Once Upon a Time in America",
    "Year": "1984",
    "Rated": "R",
    "Released": "01 Jun 1984",
    "Runtime": "229 min",
    "Genre": "Crime, Drama",
    "Director": "Sergio Leone",
    "Writer": "Harry Grey, Leonardo Benvenuti, Piero De Bernardi",
    "Actors": "Robert De Niro, James Woods, Elizabeth McGovern",
    "Plot": "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan 35 years later, where he must once again confront the ghosts and regrets of his old life.",
    "Language": "English, Italian, French, Yiddish, Hebrew",
    "Country": "Italy, United States",
    "Awards": "12 wins & 12 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.3/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "87%"
    },
    {
    "Source": "Metacritic",
    "Value": "75/100"
    }
    ],
    "Metascore": "75",
    "imdbRating": "8.3",
    "imdbVotes": "330,877",
    "imdbID": "tt0087843",
    "Type": "movie",
    "DVD": "10 Jun 2003",
    "BoxOffice": "$5,321,508",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Capharna??m",
    "Year": "2018",
    "Rated": "R",
    "Released": "20 Sep 2018",
    "Runtime": "126 min",
    "Genre": "Drama",
    "Director": "Nadine Labaki",
    "Writer": "Nadine Labaki, Jihad Hojeily, Michelle Keserwany",
    "Actors": "Zain Al Rafeea, Yordanos Shiferaw, Boluwatife Treasure Bankole",
    "Plot": "While serving a five-year sentence for a violent crime, a 12-year-old boy sues his parents for neglect.",
    "Language": "Arabic, Amharic",
    "Country": "Lebanon, United States, France, Cyprus, Qatar, United Kingdom",
    "Awards": "Nominated for 1 Oscar. 35 wins & 52 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMmExNzU2ZWMtYzUwYi00YmM2LTkxZTQtNmVhNjY0NTMyMWI2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "90%"
    },
    {
    "Source": "Metacritic",
    "Value": "75/100"
    }
    ],
    "Metascore": "75",
    "imdbRating": "8.4",
    "imdbVotes": "75,952",
    "imdbID": "tt8267604",
    "Type": "movie",
    "DVD": "26 Mar 2019",
    "BoxOffice": "$1,661,096",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Das Boot",
    "Year": "1981",
    "Rated": "R",
    "Released": "10 Feb 1982",
    "Runtime": "149 min",
    "Genre": "Adventure, Drama, Thriller",
    "Director": "Wolfgang Petersen",
    "Writer": "Wolfgang Petersen, Lothar G. Buchheim",
    "Actors": "J??rgen Prochnow, Herbert Gr??nemeyer, Klaus Wennemann",
    "Plot": "The claustrophobic world of a WWII German U-boat; boredom, filth and sheer terror.",
    "Language": "German",
    "Country": "West Germany",
    "Awards": "Nominated for 6 Oscars. 13 wins & 11 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGZhZDIzNWMtNjkxMS00MDQ1LThkMTYtZWQzYWU3MWMxMGU5XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.3/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "98%"
    },
    {
    "Source": "Metacritic",
    "Value": "86/100"
    }
    ],
    "Metascore": "86",
    "imdbRating": "8.3",
    "imdbVotes": "241,022",
    "imdbID": "tt0082096",
    "Type": "movie",
    "DVD": "21 Oct 2003",
    "BoxOffice": "$11,487,676",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Tengoku to jigoku",
    "Year": "1963",
    "Rated": "Not Rated",
    "Released": "26 Nov 1963",
    "Runtime": "143 min",
    "Genre": "Crime, Drama, Mystery",
    "Director": "Akira Kurosawa",
    "Writer": "Hideo Oguni, Ry??z?? Kikushima, Eijir?? Hisaita",
    "Actors": "Toshir?? Mifune, Yutaka Sada, Tatsuya Nakadai",
    "Plot": "An executive of a Yokohama shoe company becomes a victim of extortion when his chauffeur's son is kidnapped by mistake and held for ransom.",
    "Language": "Japanese",
    "Country": "Japan",
    "Awards": "3 wins & 3 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTI4NTNhZDMtMWNkZi00MTRmLWJmZDQtMmJkMGVmZTEzODlhXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "95%"
    }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.4",
    "imdbVotes": "39,893",
    "imdbID": "tt0057565",
    "Type": "movie",
    "DVD": "22 Jul 2008",
    "BoxOffice": "$46,808",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "American Beauty",
    "Year": "1999",
    "Rated": "R",
    "Released": "01 Oct 1999",
    "Runtime": "122 min",
    "Genre": "Drama",
    "Director": "Sam Mendes",
    "Writer": "Alan Ball",
    "Actors": "Kevin Spacey, Annette Bening, Thora Birch",
    "Plot": "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Won 5 Oscars. 111 wins & 102 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.3/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "87%"
    },
    {
    "Source": "Metacritic",
    "Value": "84/100"
    }
    ],
    "Metascore": "84",
    "imdbRating": "8.3",
    "imdbVotes": "1,107,444",
    "imdbID": "tt0169547",
    "Type": "movie",
    "DVD": "02 Jan 2002",
    "BoxOffice": "$130,096,601",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Toy Story",
    "Year": "1995",
    "Rated": "G",
    "Released": "22 Nov 1995",
    "Runtime": "81 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "John Lasseter",
    "Writer": "John Lasseter, Pete Docter, Andrew Stanton",
    "Actors": "Tom Hanks, Tim Allen, Don Rickles",
    "Plot": "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Won 1 Oscar. 27 wins & 23 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.3/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "100%"
    },
    {
    "Source": "Metacritic",
    "Value": "95/100"
    }
    ],
    "Metascore": "95",
    "imdbRating": "8.3",
    "imdbVotes": "930,086",
    "imdbID": "tt0114709",
    "Type": "movie",
    "DVD": "23 Mar 2010",
    "BoxOffice": "$223,225,679",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "3 Idiots",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "25 Dec 2009",
    "Runtime": "170 min",
    "Genre": "Comedy, Drama",
    "Director": "Rajkumar Hirani",
    "Writer": "Rajkumar Hirani, Abhijat Joshi, Vidhu Vinod Chopra",
    "Actors": "Aamir Khan, Madhavan, Mona Singh",
    "Plot": "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them \"idiots\".",
    "Language": "Hindi, English",
    "Country": "India",
    "Awards": "64 wins & 25 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "100%"
    },
    {
    "Source": "Metacritic",
    "Value": "67/100"
    }
    ],
    "Metascore": "67",
    "imdbRating": "8.4",
    "imdbVotes": "369,439",
    "imdbID": "tt1187043",
    "Type": "movie",
    "DVD": "26 Apr 2011",
    "BoxOffice": "$6,532,874",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Amadeus",
    "Year": "1984",
    "Rated": "PG",
    "Released": "19 Sep 1984",
    "Runtime": "160 min",
    "Genre": "Biography, Drama, Music",
    "Director": "Milos Forman",
    "Writer": "Peter Shaffer, Zdenek Mahler",
    "Actors": "F. Murray Abraham, Tom Hulce, Elizabeth Berridge",
    "Plot": "The life, success and troubles of Wolfgang Amadeus Mozart, as told by Antonio Salieri, the contemporaneous composer who was insanely jealous of Mozart's talent and claimed to have murdered him.",
    "Language": "English, Italian, Latin, German",
    "Country": "United States, France, Czechoslovakia, Italy",
    "Awards": "Won 8 Oscars. 43 wins & 15 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.3/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "93%"
    },
    {
    "Source": "Metacritic",
    "Value": "88/100"
    }
    ],
    "Metascore": "88",
    "imdbRating": "8.3",
    "imdbVotes": "383,421",
    "imdbID": "tt0086879",
    "Type": "movie",
    "DVD": "24 Sep 2002",
    "BoxOffice": "$51,973,029",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Hamilton",
    "Year": "2020",
    "Rated": "PG-13",
    "Released": "03 Jul 2020",
    "Runtime": "160 min",
    "Genre": "Biography, Drama, History",
    "Director": "Thomas Kail",
    "Writer": "Lin-Manuel Miranda, Ron Chernow",
    "Actors": "Lin-Manuel Miranda, Phillipa Soo, Leslie Odom Jr.",
    "Plot": "The real life of one of America's foremost founding fathers and first Secretary of the Treasury, Alexander Hamilton. Captured live on Broadway from the Richard Rodgers Theater with the original Broadway cast.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Won 1 Primetime Emmy. 17 wins & 45 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjViNWRjYWEtZTI0NC00N2E3LTk0NGQtMjY4NTM3OGNkZjY0XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "97%"
    },
    {
    "Source": "Metacritic",
    "Value": "90/100"
    }
    ],
    "Metascore": "90",
    "imdbRating": "8.4",
    "imdbVotes": "75,202",
    "imdbID": "tt8503618",
    "Type": "movie",
    "DVD": "03 Jul 2020",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Braveheart",
    "Year": "1995",
    "Rated": "R",
    "Released": "24 May 1995",
    "Runtime": "178 min",
    "Genre": "Biography, Drama, History",
    "Director": "Mel Gibson",
    "Writer": "Randall Wallace",
    "Actors": "Mel Gibson, Sophie Marceau, Patrick McGoohan",
    "Plot": "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
    "Language": "English, French, Latin, Gaelic, Italian",
    "Country": "United States",
    "Awards": "Won 5 Oscars. 33 wins & 34 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.3/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "79%"
    },
    {
    "Source": "Metacritic",
    "Value": "68/100"
    }
    ],
    "Metascore": "68",
    "imdbRating": "8.3",
    "imdbVotes": "991,104",
    "imdbID": "tt0112573",
    "Type": "movie",
    "DVD": "19 Sep 2006",
    "BoxOffice": "$75,609,945",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Inglourious Basterds",
    "Year": "2009",
    "Rated": "R",
    "Released": "21 Aug 2009",
    "Runtime": "153 min",
    "Genre": "Adventure, Drama, War",
    "Director": "Quentin Tarantino",
    "Writer": "Quentin Tarantino",
    "Actors": "Brad Pitt, Diane Kruger, Eli Roth",
    "Plot": "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
    "Language": "English, German, French, Italian",
    "Country": "United States, Germany",
    "Awards": "Won 1 Oscar. 133 wins & 172 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.3/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "89%"
    },
    {
    "Source": "Metacritic",
    "Value": "69/100"
    }
    ],
    "Metascore": "69",
    "imdbRating": "8.3",
    "imdbVotes": "1,338,659",
    "imdbID": "tt0361748",
    "Type": "movie",
    "DVD": "15 Dec 2009",
    "BoxOffice": "$120,540,719",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Good Will Hunting",
    "Year": "1997",
    "Rated": "R",
    "Released": "09 Jan 1998",
    "Runtime": "126 min",
    "Genre": "Drama, Romance",
    "Director": "Gus Van Sant",
    "Writer": "Matt Damon, Ben Affleck",
    "Actors": "Robin Williams, Matt Damon, Ben Affleck",
    "Plot": "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Won 2 Oscars. 24 wins & 61 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.3/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "98%"
    },
    {
    "Source": "Metacritic",
    "Value": "70/100"
    }
    ],
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "904,027",
    "imdbID": "tt0119217",
    "Type": "movie",
    "DVD": "08 Dec 1998",
    "BoxOffice": "$138,433,435",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Star Wars: Episode VI - Return of the Jedi",
    "Year": "1983",
    "Rated": "PG",
    "Released": "25 May 1983",
    "Runtime": "131 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Richard Marquand",
    "Writer": "Lawrence Kasdan, George Lucas",
    "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher",
    "Plot": "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's tr",
    "Language": "English",
    "Country": "United States, United Kingdom",
    "Awards": "Won 1 Oscar. 22 wins & 20 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.3/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "82%"
    },
    {
    "Source": "Metacritic",
    "Value": "58/100"
    }
    ],
    "Metascore": "58",
    "imdbRating": "8.3",
    "imdbVotes": "989,581",
    "imdbID": "tt0086190",
    "Type": "movie",
    "DVD": "21 Sep 2004",
    "BoxOffice": "$309,306,177",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "2001: A Space Odyssey",
    "Year": "1968",
    "Rated": "G",
    "Released": "24 Jun 1970",
    "Runtime": "149 min",
    "Genre": "Adventure, Sci-Fi",
    "Director": "Stanley Kubrick",
    "Writer": "Stanley Kubrick, Arthur C. Clarke",
    "Actors": "Keir Dullea, Gary Lockwood, William Sylvester",
    "Plot": "After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.",
    "Language": "English, Russian, French",
    "Country": "United Kingdom, United States",
    "Awards": "Won 1 Oscar. 16 wins & 12 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.3/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "92%"
    },
    {
    "Source": "Metacritic",
    "Value": "84/100"
    }
    ],
    "Metascore": "84",
    "imdbRating": "8.3",
    "imdbVotes": "631,921",
    "imdbID": "tt0062622",
    "Type": "movie",
    "DVD": "23 Oct 2007",
    "BoxOffice": "$60,405,931",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Reservoir Dogs",
    "Year": "1992",
    "Rated": "R",
    "Released": "02 Sep 1992",
    "Runtime": "99 min",
    "Genre": "Crime, Drama, Thriller",
    "Director": "Quentin Tarantino",
    "Writer": "Quentin Tarantino, Roger Avary",
    "Actors": "Harvey Keitel, Tim Roth, Michael Madsen",
    "Plot": "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
    "Language": "English",
    "Country": "United States",
    "Awards": "12 wins & 23 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.3/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "92%"
    },
    {
    "Source": "Metacritic",
    "Value": "79/100"
    }
    ],
    "Metascore": "79",
    "imdbRating": "8.3",
    "imdbVotes": "961,232",
    "imdbID": "tt0105236",
    "Type": "movie",
    "DVD": "18 Mar 2003",
    "BoxOffice": "$2,832,029",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "M - Eine Stadt sucht einen M??rder",
    "Year": "1931",
    "Rated": "Passed",
    "Released": "31 Aug 1931",
    "Runtime": "99 min",
    "Genre": "Crime, Mystery, Thriller",
    "Director": "Fritz Lang",
    "Writer": "Thea von Harbou, Fritz Lang, Egon Jacobsohn",
    "Actors": "Peter Lorre, Ellen Widmann, Inge Landgut",
    "Plot": "When the police in a German city are unable to catch a child-murderer, other criminals join in the manhunt.",
    "Language": "German",
    "Country": "Germany",
    "Awards": "2 wins",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODA4ODk3OTEzMF5BMl5BanBnXkFtZTgwMTQ2ODMwMzE@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.3/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "100%"
    }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.3",
    "imdbVotes": "151,225",
    "imdbID": "tt0022100",
    "Type": "movie",
    "DVD": "14 Dec 2004",
    "BoxOffice": "$35,566",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Vertigo",
    "Year": "1958",
    "Rated": "PG",
    "Released": "22 May 1958",
    "Runtime": "128 min",
    "Genre": "Mystery, Romance, Thriller",
    "Director": "Alfred Hitchcock",
    "Writer": "Alec Coppel, Samuel A. Taylor, Pierre Boileau",
    "Actors": "James Stewart, Kim Novak, Barbara Bel Geddes",
    "Plot": "A former San Francisco police detective juggles wrestling with his personal demons and becoming obsessed with the hauntingly beautiful woman he has been hired to trail, who may be deeply disturbed.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Nominated for 2 Oscars. 8 wins & 7 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.3/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "94%"
    },
    {
    "Source": "Metacritic",
    "Value": "100/100"
    }
    ],
    "Metascore": "100",
    "imdbRating": "8.3",
    "imdbVotes": "383,006",
    "imdbID": "tt0052357",
    "Type": "movie",
    "DVD": "25 Jan 2001",
    "BoxOffice": "$7,705,225",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Taare Zameen Par",
    "Year": "2007",
    "Rated": "PG",
    "Released": "21 Dec 2007",
    "Runtime": "165 min",
    "Genre": "Drama, Family",
    "Director": "Aamir Khan, Amole Gupte",
    "Writer": "Amole Gupte",
    "Actors": "Darsheel Safary, Aamir Khan, Tisca Chopra",
    "Plot": "An eight-year-old boy is thought to be a lazy trouble-maker, until the new art teacher has the patience and compassion to discover the real problem behind his struggles in school.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "23 wins & 13 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDhjZWViN2MtNzgxOS00NmI4LThiZDQtZDI3MzM4MDE4NTc0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.4/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "91%"
    }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.4",
    "imdbVotes": "181,063",
    "imdbID": "tt0986264",
    "Type": "movie",
    "DVD": "12 Jan 2010",
    "BoxOffice": "$1,223,869",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Citizen Kane",
    "Year": "1941",
    "Rated": "PG",
    "Released": "05 Sep 1941",
    "Runtime": "119 min",
    "Genre": "Drama, Mystery",
    "Director": "Orson Welles",
    "Writer": "Herman J. Mankiewicz, Orson Welles, John Houseman",
    "Actors": "Orson Welles, Joseph Cotten, Dorothy Comingore",
    "Plot": "Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance; 'Rosebud'.",
    "Language": "English, Italian",
    "Country": "United States",
    "Awards": "Won 1 Oscar. 11 wins & 13 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.3/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "99%"
    },
    {
    "Source": "Metacritic",
    "Value": "100/100"
    }
    ],
    "Metascore": "100",
    "imdbRating": "8.3",
    "imdbVotes": "423,813",
    "imdbID": "tt0033467",
    "Type": "movie",
    "DVD": "23 Feb 2010",
    "BoxOffice": "$1,585,634",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Idi i smotri",
    "Year": "1985",
    "Rated": "Not Rated",
    "Released": "17 Oct 1985",
    "Runtime": "142 min",
    "Genre": "Drama, Thriller, War",
    "Director": "Elem Klimov",
    "Writer": "Ales Adamovich, Elem Klimov",
    "Actors": "Aleksey Kravchenko, Olga Mironova, Liubomiras Laucevicius",
    "Plot": "After finding an old rifle, a young boy joins the Soviet resistance movement against ruthless German forces and experiences the horrors of World War II.",
    "Language": "Russian, Belarusian, German",
    "Country": "Soviet Union",
    "Awards": "3 wins",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODM4Njg0NTAtYjI5Ny00ZjAxLTkwNmItZTMxMWU5M2U3M2RjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.3/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "97%"
    }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.3",
    "imdbVotes": "68,408",
    "imdbID": "tt0091251",
    "Type": "movie",
    "DVD": "22 Mar 2007",
    "BoxOffice": "$71,909",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Jagten",
    "Year": "2012",
    "Rated": "R",
    "Released": "10 Jan 2013",
    "Runtime": "115 min",
    "Genre": "Drama",
    "Director": "Thomas Vinterberg",
    "Writer": "Tobias Lindholm, Thomas Vinterberg",
    "Actors": "Mads Mikkelsen, Thomas Bo Larsen, Annika Wedderkopp",
    "Plot": "A teacher lives a lonely life, all the while struggling over his son's custody. His life slowly gets better as he finds love and receives good news from his son, but his new luck is about to be brutally shattered by an innocent littl",
    "Language": "Danish, English, Polish",
    "Country": "Denmark, Sweden",
    "Awards": "Nominated for 1 Oscar. 38 wins & 73 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.3/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "93%"
    },
    {
    "Source": "Metacritic",
    "Value": "77/100"
    }
    ],
    "Metascore": "77",
    "imdbRating": "8.3",
    "imdbVotes": "305,322",
    "imdbID": "tt2106476",
    "Type": "movie",
    "DVD": "12 Jul 2014",
    "BoxOffice": "$613,308",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Requiem for a Dream",
    "Year": "2000",
    "Rated": "Unrated",
    "Released": "15 Dec 2000",
    "Runtime": "102 min",
    "Genre": "Drama",
    "Director": "Darren Aronofsky",
    "Writer": "Hubert Selby Jr., Darren Aronofsky",
    "Actors": "Ellen Burstyn, Jared Leto, Jennifer Connelly",
    "Plot": "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Nominated for 1 Oscar. 37 wins & 70 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.3/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "79%"
    },
    {
    "Source": "Metacritic",
    "Value": "68/100"
    }
    ],
    "Metascore": "68",
    "imdbRating": "8.3",
    "imdbVotes": "798,012",
    "imdbID": "tt0180093",
    "Type": "movie",
    "DVD": "22 May 2001",
    "BoxOffice": "$3,635,482",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
    },
    {
    "Title": "Singin' in the Rain",
"Year": "1952",
"Rated": "G",
"Released": "11 Apr 1952",
"Runtime": "103 min",
"Genre": "Comedy, Musical, Romance",
"Director": "Stanley Donen, Gene Kelly",
"Writer": "Betty Comden, Adolph Green",
"Actors": "Gene Kelly, Donald O'Connor, Debbie Reynolds",
"Plot": "A silent film star falls for a chorus girl just as he and his delusionally jealous screen partner are trying to make the difficult transition to talking pictures in 1920s Hollywood.",
"Language": "English",
"Country": "United States",
"Awards": "Nominated for 2 Oscars. 7 wins & 9 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "8.3/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "100%"
},
{
"Source": "Metacritic",
"Value": "99/100"
}
],
"Metascore": "99",
"imdbRating": "8.3",
"imdbVotes": "228,990",
"imdbID": "tt0045152",
"Type": "movie",
"DVD": "24 Sep 2002",
"BoxOffice": "$1,826,108",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},
{
"Title": "North by Northwest",
"Year": "1959",
"Rated": "Approved",
"Released": "18 Dec 1959",
"Runtime": "136 min",
"Genre": "Adventure, Mystery, Thriller",
"Director": "Alfred Hitchcock",
"Writer": "Ernest Lehman",
"Actors": "Cary Grant, Eva Marie Saint, James Mason",
"Plot": "A New York City advertising executive goes on the run after being mistaken for a government agent by a group of foreign spies, and falls for a woman whose loyalties he begins to doubt.",
"Language": "English, French",
"Country": "United States",
"Awards": "Nominated for 3 Oscars. 8 wins & 10 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BZDA3NDExMTUtMDlhOC00MmQ5LWExZGUtYmI1NGVlZWI4OWNiXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "8.3/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "97%"
},
{
"Source": "Metacritic",
"Value": "98/100"
}
],
"Metascore": "98",
"imdbRating": "8.3",
"imdbVotes": "313,216",
"imdbID": "tt0053125",
"Type": "movie",
"DVD": "03 Nov 2009",
"BoxOffice": "N/A",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},
{
"Title": "Eternal Sunshine of the Spotless Mind",
"Year": "2004",
"Rated": "R",
"Released": "19 Mar 2004",
"Runtime": "108 min",
"Genre": "Drama, Romance, Sci-Fi",
"Director": "Michel Gondry",
"Writer": "Charlie Kaufman, Michel Gondry, Pierre Bismuth",
"Actors": "Jim Carrey, Kate Winslet, Tom Wilkinson",
"Plot": "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
"Language": "English",
"Country": "United States",
"Awards": "Won 1 Oscar. 73 wins & 111 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "8.3/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "92%"
},
{
"Source": "Metacritic",
"Value": "89/100"
}
],
"Metascore": "89",
"imdbRating": "8.3",
"imdbVotes": "949,969",
"imdbID": "tt0338013",
"Type": "movie",
"DVD": "28 Sep 2004",
"BoxOffice": "$34,400,301",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},
{
"Title": "Ikiru",
"Year": "1952",
"Rated": "Not Rated",
"Released": "25 Mar 1956",
"Runtime": "143 min",
"Genre": "Drama",
"Director": "Akira Kurosawa",
"Writer": "Akira Kurosawa, Shinobu Hashimoto, Hideo Oguni",
"Actors": "Takashi Shimura, Nobuo Kaneko, Shin'ichi Himori",
"Plot": "A bureaucrat tries to find meaning in his life after he discovers he has terminal cancer.",
"Language": "Japanese",
"Country": "Japan",
"Awards": "5 wins & 2 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BZmM0NGY3Y2MtMTA1YS00YmQzLTk2YTctYWFhMDkzMDRjZWQzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "8.3/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "98%"
}
],
"Metascore": "N/A",
"imdbRating": "8.3",
"imdbVotes": "73,876",
"imdbID": "tt0044741",
"Type": "movie",
"DVD": "06 Jan 2004",
"BoxOffice": "$60,239",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},
{
"Title": "Lawrence of Arabia",
"Year": "1962",
"Rated": "Approved",
"Released": "11 Dec 1962",
"Runtime": "228 min",
"Genre": "Adventure, Biography, Drama",
"Director": "David Lean",
"Writer": "T.E. Lawrence, Robert Bolt, Michael Wilson",
"Actors": "Peter O'Toole, Alec Guinness, Anthony Quinn",
"Plot": "The story of T.E. Lawrence, the English officer who successfully united and led the diverse, often warring, Arab tribes during World War I in order to fight the Turks.",
"Language": "English, Arabic, Turkish",
"Country": "United Kingdom",
"Awards": "Won 7 Oscars. 31 wins & 14 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BYWY5ZjhjNGYtZmI2Ny00ODM0LWFkNzgtZmI1YzA2N2MxMzA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "8.3/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "93%"
},
{
"Source": "Metacritic",
"Value": "100/100"
}
],
"Metascore": "100",
"imdbRating": "8.3",
"imdbVotes": "279,976",
"imdbID": "tt0056172",
"Type": "movie",
"DVD": "03 Apr 2001",
"BoxOffice": "$45,306,425",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},
{
"Title": "The Kid",
"Year": "1921",
"Rated": "Passed",
"Released": "06 Feb 1921",
"Runtime": "68 min",
"Genre": "Comedy, Drama, Family",
"Director": "Charles Chaplin",
"Writer": "Charles Chaplin",
"Actors": "Charles Chaplin, Edna Purviance, Jackie Coogan",
"Plot": "The Tramp cares for an abandoned child, but events put that relationship in jeopardy.",
"Language": "None, English",
"Country": "United States",
"Awards": "2 wins",
"Poster": "https://m.media-amazon.com/images/M/MV5BZjhhMThhNDItNTY2MC00MmU1LTliNDEtNDdhZjdlNTY5ZDQ1XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "8.3/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "100%"
}
],
"Metascore": "N/A",
"imdbRating": "8.3",
"imdbVotes": "120,614",
"imdbID": "tt0012349",
"Type": "movie",
"DVD": "01 May 2005",
"BoxOffice": "N/A",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},
{
"Title": "Full Metal Jacket",
"Year": "1987",
"Rated": "R",
"Released": "10 Jul 1987",
"Runtime": "116 min",
"Genre": "Drama, War",
"Director": "Stanley Kubrick",
"Writer": "Stanley Kubrick, Michael Herr, Gustav Hasford",
"Actors": "Matthew Modine, R. Lee Ermey, Vincent D'Onofrio",
"Plot": "A pragmatic U.S. Marine observes the dehumanizing effects the Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.",
"Language": "English, Vietnamese",
"Country": "United Kingdom, United States",
"Awards": "Nominated for 1 Oscar. 8 wins & 15 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BNzkxODk0NjEtYjc4Mi00ZDI0LTgyYjEtYzc1NDkxY2YzYTgyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "8.3/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "92%"
},
{
"Source": "Metacritic",
"Value": "76/100"
}
],
"Metascore": "76",
"imdbRating": "8.3",
"imdbVotes": "704,112",
"imdbID": "tt0093058",
"Type": "movie",
"DVD": "12 Jun 2001",
"BoxOffice": "$46,357,676",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},
{
"Title": "Dangal",
"Year": "2016",
"Rated": "Not Rated",
"Released": "21 Dec 2016",
"Runtime": "161 min",
"Genre": "Action, Biography, Drama",
"Director": "Nitesh Tiwari",
"Writer": "Piyush Gupta, Shreyas Jain, Nikhil Mehrotra",
"Actors": "Aamir Khan, Sakshi Tanwar, Fatima Sana Shaikh",
"Plot": "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.",
"Language": "Hindi, English",
"Country": "India, United States, United Kingdom, Australia, Kenya, Namibia",
"Awards": "23 wins & 6 nominations",
"Poster": "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "8.4/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "88%"
}
],
"Metascore": "N/A",
"imdbRating": "8.4",
"imdbVotes": "172,416",
"imdbID": "tt5074352",
"Type": "movie",
"DVD": "22 Jun 2017",
"BoxOffice": "$12,391,761",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},
{
"Title": "The Father",
"Year": "2020",
"Rated": "PG-13",
"Released": "26 Feb 2021",
"Runtime": "97 min",
"Genre": "Drama",
"Director": "Florian Zeller",
"Writer": "Christopher Hampton, Florian Zeller",
"Actors": "Anthony Hopkins, Olivia Colman, Mark Gatiss",
"Plot": "A man refuses all assistance from his daughter as he ages. As he tries to make sense of his changing circumstances, he begins to doubt his loved ones, his own mind and even the fabric of his reality.",
"Language": "English",
"Country": "United Kingdom, France",
"Awards": "Won 2 Oscars. 26 wins & 136 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BZGJhNWRiOWQtMjI4OS00ZjcxLTgwMTAtMzQ2ODkxY2JkOTVlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "8.3/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "98%"
},
{
"Source": "Metacritic",
"Value": "88/100"
}
],
"Metascore": "88",
"imdbRating": "8.3",
"imdbVotes": "102,508",
"imdbID": "tt10272386",
"Type": "movie",
"DVD": "25 Mar 2021",
"BoxOffice": "$2,122,771",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},
{
"Title": "The Apartment",
"Year": "1960",
"Rated": "Approved",
"Released": "29 Jun 1960",
"Runtime": "125 min",
"Genre": "Comedy, Drama, Romance",
"Director": "Billy Wilder",
"Writer": "Billy Wilder, I.A.L. Diamond",
"Actors": "Jack Lemmon, Shirley MacLaine, Fred MacMurray",
"Plot": "A Manhattan insurance clerk tries to rise in his company by letting its executives use his apartment for trysts, but complications and a romance of his own ensue.",
"Language": "English",
"Country": "United States",
"Awards": "Won 5 Oscars. 24 wins & 8 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BNzkwODFjNzItMmMwNi00MTU5LWE2MzktM2M4ZDczZGM1MmViXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "8.3/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "93%"
},
{
"Source": "Metacritic",
"Value": "94/100"
}
],
"Metascore": "94",
"imdbRating": "8.3",
"imdbVotes": "172,799",
"imdbID": "tt0053604",
"Type": "movie",
"DVD": "04 Mar 2008",
"BoxOffice": "$18,600,000",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},
{
"Title": "Pather Panchali",
"Year": "1955",
"Rated": "Not Rated",
"Released": "26 Aug 1955",
"Runtime": "125 min",
"Genre": "Drama",
"Director": "Satyajit Ray",
"Writer": "Bibhutibhushan Bandyopadhyay, Satyajit Ray",
"Actors": "Kanu Bannerjee, Karuna Bannerjee, Subir Banerjee",
"Plot": "Impoverished priest Harihar Ray, dreaming of a better life for himself and his family, leaves his rural Bengal village in search of work.",
"Language": "Bengali",
"Country": "India",
"Awards": "11 wins & 2 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BNDE5YmMxYjEtZjNjNC00NjM2LWE2ZjctOTkyNGMxODRiMGNiXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "8.5/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "97%"
}
],
"Metascore": "N/A",
"imdbRating": "8.5",
"imdbVotes": "28,700",
"imdbID": "tt0048473",
"Type": "movie",
"DVD": "17 Nov 2015",
"BoxOffice": "$134,241",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},
{
"Title": "Incendies",
"Year": "2010",
"Rated": "R",
"Released": "12 Jan 2011",
"Runtime": "131 min",
"Genre": "Drama, Mystery, War",
"Director": "Denis Villeneuve",
"Writer": "Denis Villeneuve, Wajdi Mouawad, Val??rie Beaugrand-Champagne",
"Actors": "Lubna Azabal, M??lissa D??sormeaux-Poulin, Maxim Gaudette",
"Plot": "Twins journey to the Middle East to discover their family history and fulfill their mother's last wishes.",
"Language": "French, Arabic, English",
"Country": "Canada, France",
"Awards": "Nominated for 1 Oscar. 40 wins & 18 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BMWE3MGYzZjktY2Q5Mi00Y2NiLWIyYWUtMmIyNzA3YmZlMGFhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "8.3/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "92%"
},
{
"Source": "Metacritic",
"Value": "80/100"
}
],
"Metascore": "80",
"imdbRating": "8.3",
"imdbVotes": "163,468",
"imdbID": "tt1255953",
"Type": "movie",
"DVD": "15 Mar 2011",
"BoxOffice": "$2,071,334",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},
{
"Title": "A Clockwork Orange",
"Year": "1971",
"Rated": "X",
"Released": "02 Feb 1972",
"Runtime": "136 min",
"Genre": "Crime, Drama, Sci-Fi",
"Director": "Stanley Kubrick",
"Writer": "Stanley Kubrick, Anthony Burgess",
"Actors": "Malcolm McDowell, Patrick Magee, Michael Bates",
"Plot": "In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn't go as planned.",
"Language": "English",
"Country": "United Kingdom, United States",
"Awards": "Nominated for 4 Oscars. 12 wins & 24 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "8.3/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "87%"
},
{
"Source": "Metacritic",
"Value": "77/100"
}
],
"Metascore": "77",
"imdbRating": "8.3",
"imdbVotes": "788,196",
"imdbID": "tt0066921",
"Type": "movie",
"DVD": "23 Oct 2007",
"BoxOffice": "$26,589,355",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
},
{
"Title": "Metropolis",
"Year": "1927",
"Rated": "Not Rated",
"Released": "13 Mar 1927",
"Runtime": "153 min",
"Genre": "Drama, Sci-Fi",
"Director": "Fritz Lang",
"Writer": "Thea von Harbou, Fritz Lang",
"Actors": "Brigitte Helm, Alfred Abel, Gustav Fr??hlich",
"Plot": "In a futuristic city sharply divided between the working class and the city planners, the son of the city's mastermind falls in love with a working-class prophet who predicts the coming of a savior to mediate their differences.",
"Language": "None, German",
"Country": "Germany",
"Awards": "6 wins & 6 nominations",
"Poster": "https://m.media-amazon.com/images/M/MV5BMTg5YWIyMWUtZDY5My00Zjc1LTljOTctYmI0MWRmY2M2NmRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "8.3/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "97%"
},
{
"Source": "Metacritic",
"Value": "98/100"
}
],
"Metascore": "98",
"imdbRating": "8.3",
"imdbVotes": "167,068",
"imdbID": "tt0017136",
"Type": "movie",
"DVD": "22 Mar 2007",
"BoxOffice": "$1,236,166",
"Production": "N/A",
"Website": "N/A",
"Response": "True"
}

]