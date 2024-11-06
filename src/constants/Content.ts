function getRandomCompletion() {
    return `${Math.floor(Math.random() * 101)}%`;
}

export const content = [
    {
        name: "Chapter 1",
        length: "06:10:00",
        parts: [
            {
                title: "Data Structures and Algorithms",
                difficulty: "Medium",
                length: "00:40:00",
                completed: getRandomCompletion(),
                content: [{
                    type: "video",
                    title: "Video 1",
                    content: "This is the introduction of the chapter 1",
                    length: "00:10:00",
                }, {
                    type: "article",
                    title: "Article 1",
                    content: "This is the article of the chapter 1",
                    length: "00:10:00",
                },
                {
                    type: "quiz",
                    title: "Quiz 1",
                    content: "This is the quiz of the chapter 1",
                    length: "00:10:00",
                }, {
                    type: "code",
                    title: "Coding Exercise 1",
                    content: "This is the coding exercise of the chapter 1",
                    length: "00:10:00",
                }, {
                    type: "combined",
                    title: "Combined Resource 1",
                    content: "This is the combined Resource of the chapter 1",
                    length: "00:10:00",
                }
                ]
            },
            {
                title: "Advanced Data Structures",
                difficulty: "Medium",
                length: "01:35:00",
                completed: getRandomCompletion(),
                content: [{
                    type: "video",
                    title: "Video 2",
                    content: "This is the introduction of the chapter 1 part 2",
                    length: "00:15:00",
                }, {
                    type: "article",
                    title: "Article 2",
                    content: "This is the article of the chapter 1 part 2",
                    length: "00:20:00",
                },
                {
                    type: "quiz",
                    title: "Quiz 2",
                    content: "This is the quiz of the chapter 1 part 2",
                    length: "00:10:00",
                }, {
                    type: "code",
                    title: "Coding Exercise 2",
                    content: "This is the coding exercise of the chapter 1 part 2",
                    length: "00:30:00",
                }, {
                    type: "combined",
                    title: "Combined Resource 2",
                    content: "This is the combined Resource of the chapter 1 part 2",
                    length: "00:20:00",
                }
                ]
            },
            {
                title: "Graph Algorithms",
                difficulty: "Medium",
                length: "01:55:00",
                completed: getRandomCompletion(),
                content: [{
                    type: "video",
                    title: "Video 3",
                    content: "This is the introduction of the chapter 1 part 3",
                    length: "00:20:00",
                }, {
                    type: "article",
                    title: "Article 3",
                    content: "This is the article of the chapter 1 part 3",
                    length: "00:25:00",
                },
                {
                    type: "quiz",
                    title: "Quiz 3",
                    content: "This is the quiz of the chapter 1 part 3",
                    length: "00:15:00",
                }, {
                    type: "code",
                    title: "Coding Exercise 3",
                    content: "This is the coding exercise of the chapter 1 part 3",
                    length: "00:35:00",
                }, {
                    type: "combined",
                    title: "Combined Resource 3",
                    content: "This is the combined Resource of the chapter 1 part 3",
                    length: "00:20:00",
                }
                ]
            },
            {
                title: "Dynamic Programming",
                difficulty: "Medium",
                length: "02:00:00",
                completed: getRandomCompletion(),
                content: [{
                    type: "video",
                    title: "Video 4",
                    content: "This is the introduction of the chapter 1 part 4",
                    length: "00:25:00",
                }, {
                    type: "article",
                    title: "Article 4",
                    content: "This is the article of the chapter 1 part 4",
                    length: "00:30:00",
                },
                {
                    type: "quiz",
                    title: "Quiz 4",
                    content: "This is the quiz of the chapter 1 part 4",
                    length: "00:20:00",
                }, {
                    type: "code",
                    title: "Coding Exercise 4",
                    content: "This is the coding exercise of the chapter 1 part 4",
                    length: "00:40:00",
                }, {
                    type: "combined",
                    title: "Combined Resource 4",
                    content: "This is the combined Resource of the chapter 1 part 4",
                    length: "00:25:00",
                }
                ]
            }
        ]
    },
    {
        name: "Chapter 2",
        length: "02:30:00",
        parts: [
            {
                title: "Sorting Algorithms",
                difficulty: "Medium",
                length: "00:50:00",
                completed: getRandomCompletion(),
                content: [{
                    type: "video",
                    title: "Video 1",
                    content: "This is the introduction of the chapter 2 part 1",
                    length: "00:10:00",
                }, {
                    type: "article",
                    title: "Article 1",
                    content: "This is the article of the chapter 2 part 1",
                    length: "00:10:00",
                },
                {
                    type: "quiz",
                    title: "Quiz 1",
                    content: "This is the quiz of the chapter 2 part 1",
                    length: "00:10:00",
                }, {
                    type: "code",
                    title: "Coding Exercise 1",
                    content: "This is the coding exercise of the chapter 2 part 1",
                    length: "00:10:00",
                }, {
                    type: "combined",
                    title: "Combined Resource 1",
                    content: "This is the combined Resource of the chapter 2 part 1",
                    length: "00:10:00",
                }
                ]
            },
            {
                title: "Searching Algorithms",
                difficulty: "Medium",
                length: "01:40:00",
                completed: getRandomCompletion(),
                content: [{
                    type: "video",
                    title: "Video 2",
                    content: "This is the introduction of the chapter 2 part 2",
                    length: "00:15:00",
                }, {
                    type: "article",
                    title: "Article 2",
                    content: "This is the article of the chapter 2 part 2",
                    length: "00:20:00",
                },
                {
                    type: "quiz",
                    title: "Quiz 2",
                    content: "This is the quiz of the chapter 2 part 2",
                    length: "00:10:00",
                }, {
                    type: "code",
                    title: "Coding Exercise 2",
                    content: "This is the coding exercise of the chapter 2 part 2",
                    length: "00:30:00",
                }, {
                    type: "combined",
                    title: "Combined Resource 2",
                    content: "This is the combined Resource of the chapter 2 part 2",
                    length: "00:25:00",
                }
                ]
            }
        ]
    },
    {
        name: "Chapter 3",
        length: "02:45:00",
        parts: [
            {
                title: "Greedy Algorithms",
                difficulty: "Hard",
                length: "00:50:00",
                completed: getRandomCompletion(),
                content: [{
                    type: "video",
                    title: "Video 1",
                    content: "This is the introduction of the chapter 3 part 1",
                    length: "00:10:00",
                }, {
                    type: "article",
                    title: "Article 1",
                    content: "This is the article of the chapter 3 part 1",
                    length: "00:10:00",
                },
                {
                    type: "quiz",
                    title: "Quiz 1",
                    content: "This is the quiz of the chapter 3 part 1",
                    length: "00:10:00",
                }, {
                    type: "code",
                    title: "Coding Exercise 1",
                    content: "This is the coding exercise of the chapter 3 part 1",
                    length: "00:10:00",
                }, {
                    type: "combined",
                    title: "Combined Resource 1",
                    content: "This is the combined Resource of the chapter 3 part 1",
                    length: "00:10:00",
                }
                ]
            },
            {
                title: "Backtracking",
                difficulty: "Hard",
                length: "01:55:00",
                completed: getRandomCompletion(),
                content: [{
                    type: "video",
                    title: "Video 2",
                    content: "This is the introduction of the chapter 3 part 2",
                    length: "00:15:00",
                }, {
                    type: "article",
                    title: "Article 2",
                    content: "This is the article of the chapter 3 part 2",
                    length: "00:20:00",
                },
                {
                    type: "quiz",
                    title: "Quiz 2",
                    content: "This is the quiz of the chapter 3 part 2",
                    length: "00:10:00",
                }, {
                    type: "code",
                    title: "Coding Exercise 2",
                    content: "This is the coding exercise of the chapter 3 part 2",
                    length: "00:30:00",
                }, {
                    type: "combined",
                    title: "Combined Resource 2",
                    content: "This is the combined Resource of the chapter 3 part 2",
                    length: "00:20:00",
                }
                ]
            }
        ]
    },
    {
        name: "Chapter 4",
        length: "02:20:00",
        parts: [
            {
                title: "Divide and Conquer",
                difficulty: "Medium",
                length: "00:50:00",
                completed: getRandomCompletion(),
                content: [{
                    type: "video",
                    title: "Video 1",
                    content: "This is the introduction of the chapter 4 part 1",
                    length: "00:10:00",
                }, {
                    type: "article",
                    title: "Article 1",
                    content: "This is the article of the chapter 4 part 1",
                    length: "00:10:00",
                },
                {
                    type: "quiz",
                    title: "Quiz 1",
                    content: "This is the quiz of the chapter 4 part 1",
                    length: "00:10:00",
                }, {
                    type: "code",
                    title: "Coding Exercise 1",
                    content: "This is the coding exercise of the chapter 4 part 1",
                    length: "00:10:00",
                }, {
                    type: "combined",
                    title: "Combined Resource 1",
                    content: "This is the combined Resource of the chapter 4 part 1",
                    length: "00:10:00",
                }
                ]
            },
            {
                title: "Binary Search",
                difficulty: "Medium",
                length: "01:30:00",
                completed: getRandomCompletion(),
                content: [{
                    type: "video",
                    title: "Video 2",
                    content: "This is the introduction of the chapter 4 part 2",
                    length: "00:15:00",
                }, {
                    type: "article",
                    title: "Article 2",
                    content: "This is the article of the chapter 4 part 2",
                    length: "00:20:00",
                },
                {
                    type: "quiz",
                    title: "Quiz 2",
                    content: "This is the quiz of the chapter 4 part 2",
                    length: "00:10:00",
                }, {
                    type: "code",
                    title: "Coding Exercise 2",
                    content: "This is the coding exercise of the chapter 4 part 2",
                    length: "00:30:00",
                }, {
                    type: "combined",
                    title: "Combined Resource 2",
                    content: "This is the combined Resource of the chapter 4 part 2",
                    length: "00:15:00",
                }
                ]
            }
        ]
    },
    {
        name: "Chapter 5",
        length: "02:25:00",
        parts: [
            {
                title: "Bit Manipulation",
                difficulty: "Easy",
                length: "00:50:00",
                completed: getRandomCompletion(),
                content: [{
                    type: "video",
                    title: "Video 1",
                    content: "This is the introduction of the chapter 5 part 1",
                    length: "00:10:00",
                }, {
                    type: "article",
                    title: "Article 1",
                    content: "This is the article of the chapter 5 part 1",
                    length: "00:10:00",
                },
                {
                    type: "quiz",
                    title: "Quiz 1",
                    content: "This is the quiz of the chapter 5 part 1",
                    length: "00:10:00",
                }, {
                    type: "code",
                    title: "Coding Exercise 1",
                    content: "This is the coding exercise of the chapter 5 part 1",
                    length: "00:10:00",
                }, {
                    type: "combined",
                    title: "Combined Resource 1",
                    content: "This is the combined Resource of the chapter 5 part 1",
                    length: "00:10:00",
                }
                ]
            },
            {
                title: "Mathematical Algorithms",
                difficulty: "Easy",
                length: "01:35:00",
                completed: getRandomCompletion(),
                content: [{
                    type: "video",
                    title: "Video 2",
                    content: "This is the introduction of the chapter 5 part 2",
                    length: "00:15:00",
                }, {
                    type: "article",
                    title: "Article 2",
                    content: "This is the article of the chapter 5 part 2",
                    length: "00:20:00",
                },
                {
                    type: "quiz",
                    title: "Quiz 2",
                    content: "This is the quiz of the chapter 5 part 2",
                    length: "00:10:00",
                }, {
                    type: "code",
                    title: "Coding Exercise 2",
                    content: "This is the coding exercise of the chapter 5 part 2",
                    length: "00:30:00",
                }, {
                    type: "combined",
                    title: "Combined Resource 2",
                    content: "This is the combined Resource of the chapter 5 part 2",
                    length: "00:20:00",
                }
                ]
            }
        ]
    },
    {
    name: "Chapter 6",
    length: "03:00:00",
    parts: [
        {
            title: "Recursion",
            difficulty: "Medium",
            length: "01:00:00",
            completed: getRandomCompletion(),
            content: [{
                type: "video",
                title: "Video 1",
                content: "This is the introduction of the chapter 6 part 1",
                length: "00:20:00",
            }, {
                type: "article",
                title: "Article 1",
                content: "This is the article of the chapter 6 part 1",
                length: "00:20:00",
            },
            {
                type: "quiz",
                title: "Quiz 1",
                content: "This is the quiz of the chapter 6 part 1",
                length: "00:10:00",
            }, {
                type: "code",
                title: "Coding Exercise 1",
                content: "This is the coding exercise of the chapter 6 part 1",
                length: "00:10:00",
            }]
        },
        {
            title: "Memoization",
            difficulty: "Medium",
            length: "02:00:00",
            completed: getRandomCompletion(),
            content: [{
                type: "video",
                title: "Video 2",
                content: "This is the introduction of the chapter 6 part 2",
                length: "00:30:00",
            }, {
                type: "article",
                title: "Article 2",
                content: "This is the article of the chapter 6 part 2",
                length: "00:30:00",
            },
            {
                type: "quiz",
                title: "Quiz 2",
                content: "This is the quiz of the chapter 6 part 2",
                length: "00:20:00",
            }, {
                type: "code",
                title: "Coding Exercise 2",
                content: "This is the coding exercise of the chapter 6 part 2",
                length: "00:40:00",
            }]
        }
    ]
},
{
    name: "Chapter 7",
    length: "02:45:00",
    parts: [
        {
            title: "Number Theory",
            difficulty: "Hard",
            length: "01:15:00",
            completed: getRandomCompletion(),
            content: [{
                type: "video",
                title: "Video 1",
                content: "This is the introduction of the chapter 7 part 1",
                length: "00:25:00",
            }, {
                type: "article",
                title: "Article 1",
                content: "This is the article of the chapter 7 part 1",
                length: "00:25:00",
            },
            {
                type: "quiz",
                title: "Quiz 1",
                content: "This is the quiz of the chapter 7 part 1",
                length: "00:15:00",
            }]
        },
        {
            title: "Combinatorics",
            difficulty: "Hard",
            length: "01:30:00",
            completed: getRandomCompletion(),
            content: [{
                type: "video",
                title: "Video 2",
                content: "This is the introduction of the chapter 7 part 2",
                length: "00:30:00",
            }, {
                type: "article",
                title: "Article 2",
                content: "This is the article of the chapter 7 part 2",
                length: "00:30:00",
            },
            {
                type: "quiz",
                title: "Quiz 2",
                content: "This is the quiz of the chapter 7 part 2",
                length: "00:30:00",
            }]
        }
    ]
}
];
