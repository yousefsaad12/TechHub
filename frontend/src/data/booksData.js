// Centralized data structure for books and their chapters
export const booksData = {
  "The Great Gatsby": {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A classic novel set in the roaring twenties, exploring themes of wealth, love, and the American Dream.",
    category: "Classic Literature",
    cover_image_url: "https://via.placeholder.com/80x120/3b82f6/white?text=GG",
    created_at: "1925-04-10T10:30:00Z",
    chapter_count: 9,
    chapters: [
      {
        id: 1,
        book_id: 1,
        chapter_number: 1,
        title: "Nick Carraway's Arrival",
        summary: "Nick Carraway moves to West Egg and introduces the mysterious Jay Gatsby",
        estimated_read_time: 25,
        created_at: "1925-04-10T10:30:00Z",
        content: `# Nick Carraway's Arrival

## The Beginning of a Journey

In my younger and more vulnerable years, my father gave me some advice that I've been turning over in my mind ever since.

> "Whenever you feel like criticizing any one," he told me, "just remember that all the people in this world haven't had the advantages that you've had."

### Moving to West Egg

I came to New York in the spring of nineteen twenty-two. I had just graduated from Yale and was eager to make my fortune in the bond business. My father agreed to finance me for a year, and after various delays I came East, permanently, I thought, in the spring of twenty-two.

The practical thing was to find rooms in the city, but it was a warm season, and I had just left a country of wide lawns and friendly trees, so when a young man at the office suggested that we take a house together in a commuting town, it sounded like a great idea.

### The Mystery of Gatsby

And so with the sunshine and the great bursts of leaves growing on the trees, just as things grow in fast movies, I had that familiar conviction that life was beginning over again with the summer.

There was so much to read, for one thing, and so much fine health to be pulled down out of the young breath-giving air. I bought a dozen volumes on banking and credit and investment securities, and they stood on my shelf in red and gold like new money from the mint, promising to unfold the shining secrets that only Midas and Morgan and Maecenas knew.

And I had the high intention of reading many other books besides. I was rather literary in college—one year I wrote a series of very solemn and obvious editorials for the *Yale News*—and now I was going to bring back all such things into my life and become again that most limited of all specialists, the "well-rounded man."

### The Valley of Ashes

About half way between West Egg and New York the motor-road hastily joins the railroad and runs beside it for a quarter of a mile, so as to shrink away from a certain desolate area of land. This is a valley of ashes—a fantastic farm where ashes grow like wheat into ridges and hills and grotesque gardens; where ashes take the forms of houses and chimneys and rising smoke and, finally, with a transcendent effort, of ash-grey men, who move dimly and already crumbling through the powdery air.

Occasionally a line of grey cars crawls along an invisible track, gives out a ghastly creak, and comes to rest, and immediately the ash-grey men swarm up with leaden spades and stir up an impenetrable cloud, which screens their obscure operations from your sight.

But above the grey land and the spasms of bleak dust which drift endlessly over it, you perceive, after a moment, the eyes of Doctor T. J. Eckleburg. The eyes of Doctor T. J. Eckleburg are blue and gigantic—their retinas are one yard high. They look out of no face, but, instead, from a pair of enormous yellow spectacles which pass over a non-existent nose.

---

*This chapter introduces us to the narrator and the mysterious world of West Egg, setting the stage for the story of Jay Gatsby.*`
      },
      {
        id: 2,
        book_id: 1,
        chapter_number: 2,
        title: "The Valley of Ashes",
        summary: "Nick meets Tom's mistress Myrtle and visits the desolate valley",
        estimated_read_time: 20,
        created_at: "1925-04-10T11:00:00Z"
      },
      {
        id: 3,
        book_id: 1,
        chapter_number: 3,
        title: "Gatsby's Party",
        summary: "Nick attends one of Gatsby's extravagant parties and finally meets the host",
        estimated_read_time: 30,
        created_at: "1925-04-10T11:30:00Z"
      }
    ]
  },
  "1984": {
    id: 2,
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel that delves into the dangers of totalitarianism, surveillance, and loss of individual freedom.",
    category: "Dystopian Fiction",
    cover_image_url: "https://via.placeholder.com/80x120/ef4444/white?text=1984",
    created_at: "1949-06-08T10:30:00Z",
    chapter_count: 23,
    chapters: [
      {
        id: 4,
        book_id: 2,
        chapter_number: 1,
        title: "Big Brother is Watching",
        summary: "Winston Smith begins his day under the watchful eye of the Party",
        estimated_read_time: 28,
        created_at: "1949-06-08T10:30:00Z"
      },
      {
        id: 5,
        book_id: 2,
        chapter_number: 2,
        title: "Thoughtcrime",
        summary: "Winston struggles with forbidden thoughts and meets Julia",
        estimated_read_time: 32,
        created_at: "1949-06-08T11:00:00Z"
      },
      {
        id: 6,
        book_id: 2,
        chapter_number: 3,
        title: "The Ministry of Love",
        summary: "Winston and Julia's relationship develops in secret",
        estimated_read_time: 35,
        created_at: "1949-06-08T11:30:00Z"
      }
    ]
  },
  "To Kill a Mockingbird": {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A powerful story of racial injustice and childhood innocence set in the Deep South during the 1930s.",
    category: "Classic Literature",
    cover_image_url: "https://via.placeholder.com/80x120/10b981/white?text=TKM",
    created_at: "1960-07-11T10:30:00Z",
    chapter_count: 31,
    chapters: [
      {
        id: 7,
        book_id: 3,
        chapter_number: 1,
        title: "Scout's Introduction",
        summary: "Scout Finch introduces her family and the town of Maycomb",
        estimated_read_time: 22,
        created_at: "1960-07-11T10:30:00Z"
      },
      {
        id: 8,
        book_id: 3,
        chapter_number: 2,
        title: "First Day of School",
        summary: "Scout's first day at school reveals the town's social dynamics",
        estimated_read_time: 18,
        created_at: "1960-07-11T11:00:00Z"
      },
      {
        id: 9,
        book_id: 3,
        chapter_number: 3,
        title: "Walter Cunningham",
        summary: "Scout learns about poverty and social class through Walter",
        estimated_read_time: 20,
        created_at: "1960-07-11T11:30:00Z"
      }
    ]
  },
  "Pride and Prejudice": {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A witty and romantic novel that critiques social expectations and class divisions in 19th-century England.",
    category: "Romance",
    cover_image_url: "https://via.placeholder.com/80x120/f59e0b/white?text=P&P",
    created_at: "1813-01-28T10:30:00Z",
    chapter_count: 61,
    chapters: [
      {
        id: 10,
        book_id: 4,
        chapter_number: 1,
        title: "The Bennet Family",
        summary: "Mrs. Bennet excitedly shares news of a wealthy bachelor's arrival",
        estimated_read_time: 15,
        created_at: "1813-01-28T10:30:00Z"
      },
      {
        id: 11,
        book_id: 4,
        chapter_number: 2,
        title: "Mr. Bingley's Visit",
        summary: "The neighborhood prepares for Mr. Bingley's first appearance",
        estimated_read_time: 12,
        created_at: "1813-01-28T11:00:00Z"
      },
      {
        id: 12,
        book_id: 4,
        chapter_number: 3,
        title: "The Assembly Ball",
        summary: "Elizabeth and Darcy meet at the assembly, but not favorably",
        estimated_read_time: 25,
        created_at: "1813-01-28T11:30:00Z"
      }
    ]
  },
  "Sapiens: A Brief History of Humankind": {
    id: 5,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    description: "A compelling narrative that explores the history and impact of Homo sapiens from ancient times to the modern world.",
    category: "Non-Fiction",
    cover_image_url: "https://via.placeholder.com/80x120/8b5cf6/white?text=S",
    created_at: "2011-01-01T10:30:00Z",
    chapter_count: 20,
    chapters: [
      {
        id: 13,
        book_id: 5,
        chapter_number: 1,
        title: "An Animal of No Significance",
        summary: "Introduction to Homo sapiens and their place in the animal kingdom",
        estimated_read_time: 35,
        created_at: "2011-01-01T10:30:00Z"
      },
      {
        id: 14,
        book_id: 5,
        chapter_number: 2,
        title: "The Tree of Knowledge",
        summary: "The cognitive revolution and the development of language",
        estimated_read_time: 40,
        created_at: "2011-01-01T11:00:00Z"
      },
      {
        id: 15,
        book_id: 5,
        chapter_number: 3,
        title: "A Day in the Life of Adam and Eve",
        summary: "Daily life of early hunter-gatherer societies",
        estimated_read_time: 30,
        created_at: "2011-01-01T11:30:00Z"
      }
    ]
  },
  "Atomic Habits": {
    id: 6,
    title: "Atomic Habits",
    author: "James Clear",
    description: "A practical guide to building good habits and breaking bad ones through small, incremental changes.",
    category: "Self-Help",
    cover_image_url: "https://via.placeholder.com/80x120/06b6d4/white?text=AH",
    created_at: "2018-10-16T10:30:00Z",
    chapter_count: 20,
    chapters: [
      {
        id: 16,
        book_id: 6,
        chapter_number: 1,
        title: "The Fundamentals",
        summary: "Why tiny changes make a remarkable difference",
        estimated_read_time: 25,
        created_at: "2018-10-16T10:30:00Z"
      },
      {
        id: 17,
        book_id: 6,
        chapter_number: 2,
        title: "How Your Habits Shape Your Identity",
        summary: "The role of identity in habit formation",
        estimated_read_time: 30,
        created_at: "2018-10-16T11:00:00Z"
      },
      {
        id: 18,
        book_id: 6,
        chapter_number: 3,
        title: "How to Build Better Habits",
        summary: "The four laws of behavior change",
        estimated_read_time: 35,
        created_at: "2018-10-16T11:30:00Z"
      }
    ]
  },
  "The Alchemist": {
    id: 7,
    title: "The Alchemist",
    author: "Paulo Coelho",
    description: "A philosophical tale about a young shepherd's journey to fulfill his personal legend and find deeper meaning in life.",
    category: "Fiction",
    cover_image_url: "https://via.placeholder.com/80x120/f97316/white?text=TA",
    created_at: "1988-01-01T10:30:00Z",
    chapter_count: 13,
    chapters: [
      {
        id: 19,
        book_id: 7,
        chapter_number: 1,
        title: "The Shepherd's Dream",
        summary: "Santiago has a recurring dream about treasure",
        estimated_read_time: 20,
        created_at: "1988-01-01T10:30:00Z"
      },
      {
        id: 20,
        book_id: 7,
        chapter_number: 2,
        title: "The Gypsy's Interpretation",
        summary: "Santiago seeks meaning in his dream from a gypsy",
        estimated_read_time: 18,
        created_at: "1988-01-01T11:00:00Z"
      },
      {
        id: 21,
        book_id: 7,
        chapter_number: 3,
        title: "The King of Salem",
        summary: "Santiago meets Melchizedek who reveals his Personal Legend",
        estimated_read_time: 25,
        created_at: "1988-01-01T11:30:00Z"
      }
    ]
  }
};

// Convert booksData to array format for the Books page
export const books = Object.values(booksData).map(book => ({
  title: book.title,
  author: book.author,
  description: book.description
}));
